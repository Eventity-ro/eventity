import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { sendOnboardingNotificationEmail } from '@/lib/sendOnboardingNotificationEmail';

export async function POST(req: Request) {
    try {
        const { type, name, phone, email, instagram, facebook } = await req.json();

        if (!type || !name || !phone || !email) {
            return NextResponse.json({ error: "Lipsesc câmpuri obligatorii" }, { status: 400 });
        }

        const existing = await sql`
      SELECT * FROM onboarding_request WHERE email = ${email} AND type = ${type}
    `;
        if (existing.rows.length > 0) {
            return NextResponse.json({ error: "Cererea deja există" }, { status: 400 });
        }

        await sql`
      INSERT INTO onboarding_request (id, type, name, phone, email, instagram, facebook, created_date)
      VALUES (gen_random_uuid(), ${type}, ${name}, ${phone}, ${email}, ${instagram}, ${facebook}, NOW())
    `;

        // 🔔 Trimitere email
        await sendOnboardingNotificationEmail({
            type,
            name,
            phone,
            email,
            instagram,
            facebook,
        });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (err) {
        console.error("Eroare la salvare/email:", err);
        return NextResponse.json({ error: "Eroare internă" }, { status: 500 });
    }
}
