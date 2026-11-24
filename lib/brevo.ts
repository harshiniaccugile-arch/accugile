const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

export type Attachment = { name: string; content: string }; // content = base64

// Escape user input before putting it into the HTML email
export function esc(value: unknown): string {
    return String(value ?? '').replace(/[&<>"']/g, (c) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string
    );
}

export const clean = (v: unknown, max = 500) => String(v ?? '').trim().slice(0, max);

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function rowsHtml(title: string, rows: [string, string][]): string {
    const body = rows
        .filter(([, v]) => v)
        .map(
            ([k, v]) =>
                `<tr><td style="padding:8px 12px;border:1px solid #e5e8ef;background:#f7f8fb;font-weight:600;vertical-align:top;white-space:nowrap">${esc(k)}</td>` +
                `<td style="padding:8px 12px;border:1px solid #e5e8ef;white-space:pre-wrap">${esc(v)}</td></tr>`
        )
        .join('');
    return `<div style="font-family:Arial,sans-serif;font-size:14px;color:#0f172a">
      <h2 style="margin:0 0 16px">${esc(title)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px">${body}</table>
    </div>`;
}

export async function sendBrevoEmail(opts: {
    subject: string;
    html: string;
    replyTo?: { email: string; name?: string };
    attachments?: Attachment[];
}) {
    const apiKey = process.env.BREVO_API_KEY;
    const to = process.env.BREVO_TO_EMAIL;
    const sender = process.env.BREVO_SENDER_EMAIL;
    if (!apiKey || !to || !sender) throw new Error('Missing Brevo environment variables');

    const res = await fetch(BREVO_URL, {
        method: 'POST',
        headers: {
            'api-key': apiKey,
            'content-type': 'application/json',
            accept: 'application/json',
        },
        body: JSON.stringify({
            sender: { name: 'Accugile Website', email: sender },
            to: [{ email: to }],
            replyTo: opts.replyTo,
            subject: opts.subject.replace(/[\r\n]+/g, ' ').slice(0, 200),
            htmlContent: opts.html,
            ...(opts.attachments?.length ? { attachment: opts.attachments } : {}),
        }),
    });

    if (!res.ok) {
        console.error('Brevo error', res.status, await res.text());
        throw new Error('Brevo request failed');
    }
}