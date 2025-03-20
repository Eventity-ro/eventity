import {sql} from "@vercel/postgres";

export async function getRestaurants() {
    const result = await sql`
        SELECT * 
        FROM restaurant r 
        LEFT JOIN venue v 
        ON r.id = v.restaurant_id;
    `;

    return result.rows;
}

export async function getPartners(restaurantId: number) {
    const result = await sql`
        SELECT p.* 
        FROM partner p 
        JOIN restaurant_partner rp ON p.id = rp.partner_id 
        WHERE rp.restaurant_id = ${restaurantId};
    `;

    return result.rows
}

export async function insertRestaurantPartner(restaurantId: number, partnerId: number) {

    const result = await sql`
        INSERT INTO restaurant_partner (restaurant_id, partner_id)
        VALUES (${restaurantId}, ${partnerId})
        ON CONFLICT DO NOTHING
    `;

    return result.rows
}

export async function getUnassociatedPartners(restaurantId: number) {
    const result = await sql`
        SELECT *
        FROM partner
        WHERE id NOT IN (
            SELECT partner_id
            FROM restaurant_partner
            WHERE restaurant_id = ${restaurantId}
        )
    `;

    return result.rows;
}