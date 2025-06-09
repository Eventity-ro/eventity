import { getServerSession } from "next-auth";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import {authOptions} from "@/lib/authOptions";

export async function PUT(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, email } = body;

    try {
        await sql`
      UPDATE "user"
      SET name = ${name},
          email = ${email}
      WHERE id = ${session.user.id};
    `;

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Error updating user:", err);
        return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
}
