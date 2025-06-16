import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import Venue from "@/types/venue";

export async function POST(request: Request) {
    try {
        const details: Venue = await request.json();

        // Build arrays for columns, placeholder tokens, and parameters.
        const columns: string[] = [];
        const placeholders: string[] = [];
        const params: any[] = [];
        let paramIndex = 1;

        if (details.price !== undefined) {
            columns.push('price');
            placeholders.push(`$${paramIndex++}`);
            params.push(details.price);
        }
        if (details.discount !== undefined) {
            columns.push('discount');
            placeholders.push(`$${paramIndex++}`);
            params.push(details.discount);
        }
        if (details.restaurant_id !== undefined) {
            columns.push('restaurant_id');
            placeholders.push(`$${paramIndex++}`);
            params.push(details.restaurant_id);
        }
        if (details.rating !== undefined) {
            columns.push('rating');
            placeholders.push(`$${paramIndex++}`);
            params.push(details.rating);
        }
        if (details.minCapacity !== undefined) {
            columns.push('min_capacity');
            placeholders.push(`$${paramIndex++}`);
            params.push(details.minCapacity);
        }
        if (details.maxCapacity !== undefined) {
            columns.push('max_capacity');
            placeholders.push(`$${paramIndex++}`);
            params.push(details.maxCapacity);
        }

        if (columns.length === 0) {
            return NextResponse.json({ error: 'No fields provided for insertion.' }, { status: 400 });
        }

        const query = `
            INSERT INTO restaurant_details (${columns.join(', ')})
            VALUES (${placeholders.join(', ')})
        `;

        // @ts-ignore
        await sql(query, ...params);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error inserting restaurant details:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
