import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import {EventRecord} from "@/types/Event";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const adminId = searchParams.get('adminId');
        const dashboardEvents = searchParams.get('dashboardEvents');

        const result = await sql`
            SELECT
                e.id,
                e.name,
                e.date,
                e.service_id,
                e.type,
                e.attendance,
                e.deposit,
                e.details
            FROM event e
            JOIN service s ON e.service_id = s.id
            JOIN restaurant r ON s.restaurant_id = r.id
            WHERE r.user_id = ${adminId}
            ORDER BY date ASC
        `;

        if (dashboardEvents) {
            const results = result.rows.filter(event => event.date >= new Date())
            return NextResponse.json(results.slice(0, 3));
        }
        else {
            return NextResponse.json(result.rows);
        }
    } catch (err) {
        console.error('Error fetching events by service:', err);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data: EventRecord = await request.json();

        await sql`
            INSERT INTO event (
                name,
                date,
                service_id,
                type,
                attendance,
                deposit,
                details
            ) VALUES (
                ${data.name},
                ${data.date},
                ${data.service_id},
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
