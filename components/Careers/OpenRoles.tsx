'use client';

import { useState } from 'react';
import SecHead from '@/components/About/SecHead';
import ApplySlider from './ApplySlider';

const roles = [
    { role: 'Web/UI Designer', status: '(Position temporarily on-hold)', dept: 'Design', exp: '2+ years' },
    { role: 'Senior Laravel Developer', dept: 'Engineering', exp: '4+ years' },
    { role: 'React / Next.js Developer', dept: 'Engineering', exp: '3+ years' },
    { role: 'WordPress and WooCommerce Developer', dept: 'Engineering', exp: '2+ years' },
    { role: 'QA Engineer', dept: 'Quality assurance', exp: '2+ years' },
    { role: 'SEO and Performance Marketing Executive', dept: 'Marketing', exp: '2+ years' },
];

export default function OpenRoles() {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    return (
        <section className="sec" id="roles" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="02" eyebrow="Open positions" title="Current opportunities" />
                <table className="tbl" style={{ background: '#FFFFFF', borderRadius: 16, overflow: 'hidden' }}>
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Department</th>
                            <th>Experience</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((r) => (
                            <tr key={r.role}>
                                <td>
                                    <strong>{r.role}</strong>
                                    {r.status && (
                                        <span style={{ display: 'block', fontSize: '12px', color: '#64748B', fontWeight: 400, marginTop: '2px' }}>
                                            {r.status}
                                        </span>
                                    )}
                                </td>
                                <td>{r.dept}</td>
                                <td>{r.exp}</td>
                                <td>Coimbatore</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedRole(r.status ? `${r.role} ${r.status}` : r.role)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#304DDB',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            cursor: 'pointer',
                                            padding: 0,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                        }}
                                    >
                                        Apply →
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Full page slider modal */}
            {selectedRole && (
                <ApplySlider
                    isOpen={Boolean(selectedRole)}
                    onClose={() => setSelectedRole(null)}
                    roleTitle={selectedRole}
                />
            )}
        </section>
    );
}
