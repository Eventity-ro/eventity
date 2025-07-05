import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import {revalidatePath} from "next/cache";

export async function GET() {
    // const { searchParams } = new URL(request.url);
    // const restaurantId = searchParams.get('restaurantId');

    revalidatePath('/admin/services')

    const restaurantId = 6

    if (!restaurantId) {
        return NextResponse.json({ error: 'RestaurantId is required' }, { status: 400 });
    }

    console.log(restaurantId);

    try {
        const result = await sql`
            SELECT p.*
            FROM partner p
            JOIN restaurant_partner rp ON p.id = rp.partner_id
            WHERE rp.restaurant_id = ${restaurantId}
        `;

        console.log(result.rows)

        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching associated partners:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
