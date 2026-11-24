import { NextResponse } from 'next/server';
import { clean, isEmail, rowsHtml, sendBrevoEmail } from '@/lib/brevo';

export async function POST(req: Request) {
    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch (err) {
        console.error('[contact] invalid JSON body', err);
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Honeypot: real users never fill this hidden field
    if (body.hp_field_x7) {
        console.warn('[contact] honeypot filled, submission ignored');
        return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    if (!name || !isEmail(email)) {
        console.warn('[contact] validation failed', { name: !!name, email });
        return NextResponse.json({ error: 'Name and a valid email are required' }, { status: 400 });
    }

    const rows: [string, string][] = [
        ['Name', name],
        ['Email', email],
        ['Company', clean(body.company, 200)],
        ['Phone', clean(body.phone, 50)],
        ['Service', clean(body.service, 100)],
        ['Budget', clean(body.budget, 100)],
        ['Mutual NDA requested', body.nda === 'yes' ? 'Yes' : 'No'],
        ['Project overview', clean(body.message, 5000)],
    ];

    try {
        await sendBrevoEmail({
            subject: `New website enquiry from ${name}`,
            html: rowsHtml('New website enquiry', rows),
            replyTo: { email, name },
        });
        console.log('[contact] email sent for', email);
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('[contact] send failed', err);
        return NextResponse.json({ error: 'Could not send message' }, { status: 502 });
    }
}