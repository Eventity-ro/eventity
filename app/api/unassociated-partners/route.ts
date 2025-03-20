import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
    // const { searchParams } = new URL(request.url);
    // const restaurantId = searchParams.get('restaurantId');

    const restaurantId = 6

    if (!restaurantId) {
        return NextResponse.json({ error: 'RestaurantId is required' }, { status: 400 });
    }

    try {
        const result = await sql`
            SELECT *
            FROM partner
            WHERE id NOT IN (
            SELECT partner_id
            FROM restaurant_partner
            WHERE restaurant_id = ${restaurantId}
            )
        `;

        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching unassociated partners:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
