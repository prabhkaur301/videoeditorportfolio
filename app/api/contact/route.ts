import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'sehaj.in.design@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #1a1410; color: #f5ede3; border-radius: 12px;">
          <h2 style="color: #D4AF37; margin-bottom: 24px;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #b0a8a0; width: 100px;">From</td>
              <td style="padding: 10px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #b0a8a0;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #D4AF37;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #b0a8a0;">Subject</td>
              <td style="padding: 10px 0;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #3a3430; margin: 20px 0;" />
          <p style="color: #b0a8a0; font-size: 13px; margin-bottom: 8px;">Message</p>
          <p style="line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
