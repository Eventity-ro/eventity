// lib/sendOnboardingNotificationEmail.ts
import nodemailer from 'nodemailer';

export async function sendOnboardingNotificationEmail({
                                                          type,
                                                          name,
                                                          phone,
                                                          email,
                                                          instagram,
                                                          facebook,
                                                      }: {
    type: string;
    name: string;
    phone: string;
    email: string;
    instagram?: string;
    facebook?: string;
}) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Onboarding Bot" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `ONBOARDING REQUEST - ${name}`,
        text: `
A fost trimisă o nouă cerere de înscriere:

Tip: ${type}
Nume: ${name}
Telefon: ${phone}
Email: ${email}
Instagram: ${instagram || '-'}
Facebook: ${facebook || '-'}
    `,
    };

    await transporter.sendMail(mailOptions);
}
