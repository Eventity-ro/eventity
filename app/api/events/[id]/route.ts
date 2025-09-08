import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function PATCH(request: Request, ctx: { params: Promise<{ id: string }> }) {
    const { id: idParam } = await ctx.params;

    const id = Number(idParam);

    const updates = await request.json();

    // Run a single UPDATE, using COALESCE to leave unspecified columns alone
    try {
        await sql`
            UPDATE event
            SET
                name       = COALESCE(${updates.name       ?? null}, name),
                date       = COALESCE(${updates.date       ?? null}, date),
                service_id = COALESCE(${updates.venueId    ?? null}, service_id),
                type       = COALESCE(${updates.type       ?? null}, type),
                attendance = COALESCE(${updates.attendance ?? null}, attendance),
                deposit    = COALESCE(${updates.deposit    ?? null}, deposit),
                details    = COALESCE(${updates.details    ?? null}, details)
            WHERE id = ${id}
        `;

        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}