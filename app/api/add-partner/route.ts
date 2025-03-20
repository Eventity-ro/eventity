import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const { restaurantID, partnerId } = await request.json();

        if (!restaurantID || !partnerId) {
            return NextResponse.json({ error: 'RestaurantId and PartnerId are required' }, { status: 400 });
        }

        await sql`
            INSERT INTO restaurant_partner (restaurant_id, partner_id)
            VALUES (${restaurantID}, ${partnerId})
            ON CONFLICT DO NOTHING
        `;

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error adding partner:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
