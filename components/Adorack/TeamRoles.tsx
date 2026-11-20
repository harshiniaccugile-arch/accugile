import React from 'react';

export default function TeamRoles() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Teams and clients
            </div>
            <h2 className="h2">The right access for every person.</h2>
          </div>
          <p style={{ maxWidth: '420px', color: '#5B6474', fontSize: '16px', lineHeight: 1.6 }}>
            Invite teammates and clients by email, give each one a role, and decide whose posts need approval before they go live.
          </p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="roles" style={{ minWidth: '680px' }}>
            <thead>
              <tr>
                <th scope="col">What they can do</th>
                <th scope="col">Admin</th>
                <th scope="col">Member</th>
                <th scope="col">Limited Access</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Create, edit and schedule posts</td>
                <td className="y">✓</td>
                <td className="y">✓</td>
                <td>Until approved</td>
              </tr>
              <tr>
                <td>Publish without approval</td>
                <td className="y">✓</td>
                <td className="y">✓</td>
                <td className="n">Approved posts only</td>
              </tr>
              <tr>
                <td>Manage campaigns, categories, time slots and queue</td>
                <td className="y">✓</td>
                <td className="y">✓</td>
                <td>View only</td>
              </tr>
              <tr>
                <td>Manage library and social accounts</td>
                <td className="y">✓</td>
                <td className="y">✓</td>
                <td>View only</td>
              </tr>
              <tr>
                <td>Invite people and assign roles</td>
                <td className="y">✓</td>
                <td className="y">✓</td>
                <td className="n">—</td>
              </tr>
              <tr>
                <td>Set approval methods for members</td>
                <td className="y">✓</td>
                <td className="y">✓</td>
                <td className="n">—</td>
              </tr>
              <tr>
                <td>Rename or delete the workspace, remove members</td>
                <td className="y">✓</td>
                <td className="n">—</td>
                <td className="n">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

