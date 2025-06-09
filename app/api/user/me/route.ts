import { getServerSession } from "next-auth";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import {authOptions} from "@/lib/authOptions";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await sql`
    SELECT id, email, name FROM "user" WHERE id = ${session.user.id};
  `;

    if (result.rows.length === 0) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
}
