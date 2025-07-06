import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function getAdminServices(adminId: number): Promise<any> {
    try {
        const result = await sql`
            SELECT
                s.id,
                s.name
            FROM service s
            JOIN restaurant r ON s.restaurant_id = r.id
            WHERE r.user_id = ${adminId}
        `;

        return result.rows.map(row => ({
            id: row.id,
            name: row.name,
        }));
    } catch (err) {
        console.error('Error fetching admin service details:', err);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}