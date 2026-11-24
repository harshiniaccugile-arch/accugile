'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const services = [
    'Software Development',
    'SaaS Development',
    'Website Development',
    'eCommerce Solutions',
    'AI Solutions',
    'Digital Marketing and Branding',
    'Cloud Solutions',
    'Other',
];

const budgets = ['Under $5k', '$5k to $20k', '$20k to $50k', '$50k+'];

export default function ContactForm() {
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        data.nda = (form.elements.namedItem('nda') as HTMLInputElement).checked ? 'yes' : 'no';

        setStatus('sending');
        setErrorMsg('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const j = await res.json().catch(() => null);
                console.error('Contact form failed:', res.status, j);
                throw new Error(j?.error || `Request failed (${res.status})`);
            }
            form.reset();
            setStatus('sent');
        } catch (err) {
            console.error('Contact form error:', err);
            setErrorMsg(err instanceof Error ? err.message : '');
            setStatus('error');
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            style={{
                flex: '2 1 560px',
                minWidth: 0,
                background: '#FFFFFF',
                border: '1px solid #E5E8EF',
                borderRadius: 20,
                padding: 36,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 18,
                boxShadow: '0 40px 80px -48px rgba(48,77,219,0.4)',
            }}
        >
            {/* Honeypot: odd name so browsers don't autofill it; bots tend to fill it */}
            <div
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden', opacity: 0 }}
            >
                <label>
                    Leave this field empty
                    <input type="text" name="hp_field_x7" tabIndex={-1} autoComplete="off" />
                </label>
            </div>

            <label className="field">
                Full name
                <input type="text" name="name" autoComplete="name" required />
            </label>
            <label className="field">
                Work email
                <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className="field">
                Company
                <input type="text" name="company" autoComplete="organization" />
            </label>
            <label className="field">
                Telephone
                <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label className="field">
                Service of interest
                <select name="service" defaultValue={services[0]}>
                    {services.map((s) => (
                        <option key={s}>{s}</option>
                    ))}
                </select>
            </label>
            <label className="field">
                Estimated budget
                <select name="budget" defaultValue={budgets[0]}>
                    {budgets.map((b) => (
                        <option key={b}>{b}</option>
                    ))}
                </select>
            </label>
            <label className="field" style={{ gridColumn: '1 / -1' }}>
                Project overview
                <textarea name="message" rows={5} placeholder="Objectives, timeline and any existing systems" />
            </label>
            <label
                style={{
                    gridColumn: '1 / -1',
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    fontSize: 14,
                    color: '#334155',
                }}
            >
                <input type="checkbox" name="nda" style={{ width: 18, height: 18 }} /> Please send a mutual NDA before the
                discovery call
            </label>
            <button
                type="submit"
                className="btn btn-ac"
                disabled={status === 'sending'}
                style={{ gridColumn: '1 / -1', justifyContent: 'center', minHeight: 52 }}
            >
                {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
            </button>
            <p
                role="status"
                aria-live="polite"
                style={{
                    gridColumn: '1 / -1',
                    fontSize: 14,
                    textAlign: 'center',
                    color: status === 'error' ? '#B42318' : '#0E7A4B',
                    display: status === 'sent' || status === 'error' ? 'block' : 'none',
                }}
            >
                {status === 'sent'
                    ? 'Thank you. A consultant will respond within one business day.'
                    : `Something went wrong${errorMsg ? ` (${errorMsg})` : ''}. Please try again or email us directly.`}
            </p>
            <p style={{ gridColumn: '1 / -1', fontSize: 13, color: '#5B6474', textAlign: 'center' }}>
                Your information is handled in accordance with our <Link href="/privacy">Privacy Policy</Link>.
            </p>
        </form>
    );
}