import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import {EventRecord} from "@/types/Event";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const adminId = searchParams.get('adminId');

        const result = await sql`
            SELECT
                e.id,
                e.name,
                e.date,
                e.venue_id,
                e.type,
                e.attendance,
                e.deposit,
                e.details
            FROM event e
            JOIN venue v       ON e.venue_id        = v.id
            JOIN restaurant r  ON v.restaurant_id  = r.id
            WHERE r.user_id = ${adminId}
            AND date >= CURRENT_DATE
            ORDER BY date ASC
            LIMIT 3
        `;

        return NextResponse.json(result.rows);
    } catch (err) {
        console.error('Error fetching events by venue:', err);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data: EventRecord = await request.json();

        // We write out every column; if an optional field is undefined, we pass null
        await sql`
            INSERT INTO event (
                name,
                date,
                venue_id,
                type,
                attendance,
                deposit,
                details
            ) VALUES (
                ${data.name},
                ${data.date},
                ${data.venueId},
                ${data.type},
                ${data.attendance ?? null},
                ${data.deposit  ?? null},
                ${data.details  ?? null}
            )
        `;

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Error inserting event:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
