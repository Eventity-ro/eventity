import {sql} from "@vercel/postgres";
import Partner from "@/types/partner";
import Venue from "@/types/venue"

export async function getRestaurants(): Promise<Venue[]> {
    const result = await sql`
        SELECT 
            r.id as restaurant_id,
            r.name,
            r.address,
            r.city,
            v.id as venue_id,
            v.price,
            v.discount,
            v.rating,
            v.min_capacity,
            v.max_capacity
        FROM restaurant r 
        LEFT JOIN venue v 
        ON r.id = v.restaurant_id;
    `;

    return result.rows.map(row => ({
        restaurant_id: row.restaurant_id,
        venueId: row.venue_id,
        name: row.name,
        address: row.address,
        city: row.city,
        price: row.price,
        discount: row.discount,
        rating: row.rating,
        minCapacity: row.min_capacity,
        maxCapacity: row.max_capacity,
    }));
}

export async function getPartners(restaurantId: string): Promise<Partner[]> {
    const result = await sql`
        SELECT 
            p.id,
            p.name,
            p.service_type
        FROM partner p 
        JOIN restaurant_partner rp ON p.id = rp.partner_id 
        WHERE rp.restaurant_id = ${restaurantId};
    `;

    return result.rows.map(row => ({
        id: row.id,
        name: row.name,
        service_type: row.service_type,
    }));
}

export async function insertRestaurantPartner(restaurantId: number, partnerId: number) {

    const result = await sql`
        INSERT INTO restaurant_partner (restaurant_id, partner_id)
        VALUES (${restaurantId}, ${partnerId})
        ON CONFLICT DO NOTHING
    `;

    return result.rows
}

export async function getUnassociatedPartners(restaurantId: number): Promise<Partner[]> {
    const result = await sql`
        SELECT 
            p.id,
            p.name,
            p.service_type
        FROM partner p
        WHERE p.id NOT IN (
            SELECT rp.partner_id
            FROM restaurant_partner rp
            WHERE rp.restaurant_id = ${restaurantId}
        );
    `;

    return result.rows.map(row => ({
        id: row.id,
        name: row.name,
        service_type: row.service_type,
    }));
}
