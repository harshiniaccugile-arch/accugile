import { NextResponse } from 'next/server';
import { clean, isEmail, rowsHtml, sendBrevoEmail, type Attachment } from '@/lib/brevo';

const ALLOWED_EXT = ['pdf', 'doc', 'docx'];
const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // keep total attachments at or under 4 MB

async function toAttachment(file: File): Promise<Attachment> {
    const buf = Buffer.from(await file.arrayBuffer());
    return { name: file.name.replace(/[^\w.\- ]/g, '_').slice(0, 120), content: buf.toString('base64') };
}

const validFile = (f: FormDataEntryValue | null): f is File =>
    f instanceof File &&
    f.size > 0 &&
    ALLOWED_EXT.includes(f.name.split('.').pop()?.toLowerCase() ?? '');

export async function POST(req: Request) {
    let form: FormData;
    try {
        form = await req.formData();
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    if (form.get('website')) return NextResponse.json({ ok: true }); // honeypot

    const get = (k: string, max = 300) => clean(form.get(k), max);
    const name = get('name', 120);
    const email = get('email', 200);
    const role = get('role', 200);

    if (!name || !isEmail(email)) {
        return NextResponse.json({ error: 'Name and a valid email are required' }, { status: 400 });
    }

    const resume = form.get('resume');
    const cover = form.get('cover');
    if (!validFile(resume)) {
        return NextResponse.json({ error: 'A resume (.pdf, .doc or .docx) is required' }, { status: 400 });
    }
    const files: File[] = [resume];
    if (validFile(cover)) files.push(cover);

    if (files.reduce((n, f) => n + f.size, 0) > MAX_TOTAL_BYTES) {
        return NextResponse.json({ error: 'Attachments must total 4 MB or less' }, { status: 413 });
    }

    const rows: [string, string][] = [
        ['Role', role],
        ['Name', name],
        ['Email', email],
        ['Phone', get('phone', 50)],
        ['Location', get('location', 200)],
        ['Current organization', get('organization', 200)],
        ['Current CTC', get('currentCtc', 100)],
        ['Expected salary', get('expectedSalary', 100)],
        ['Years of experience', get('experience', 50)],
        ['Notice period', get('noticePeriod', 100)],
        ['LinkedIn', get('linkedin', 300)],
        ['Heard about us via', get('source', 300)],
        ['Referred by', get('referral', 200)],
    ];

    try {
        await sendBrevoEmail({
            subject: `Job application: ${role || 'General'} - ${name}`,
            html: rowsHtml(`New application: ${role || 'General'}`, rows),
            replyTo: { email, name },
            attachments: await Promise.all(files.map(toAttachment)),
        });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: 'Could not submit application' }, { status: 502 });
    }
}