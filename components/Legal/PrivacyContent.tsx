/* ---------- Reusable table ---------- */
function DataTable({
  head,
  rows,
  widths = ['34%', '66%'],
}: {
  head: [string, string];
  rows: [string, string][];
  widths?: [string, string];
}) {
  return (
    <div className="pp-tw">
      <table className="pp-t">
        <colgroup>
          <col style={{ width: widths[0] }} />
          <col style={{ width: widths[1] }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">{head[0]}</th>
            <th scope="col">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td>{a}</td>
              <td data-label={head[1]}>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Table data ---------- */
const collectRows: [string, string][] = [
  [
    'Contact and estimate forms, email, calls, chat',
    'Name, work email, phone number, company name, country, the service you are interested in, your budget range and anything you write in your message or attach.',
  ],
  [
    'Consultations and meetings',
    'Your name, contact details, meeting notes and, only if you agree, call recordings.',
  ],
  [
    'Clients and partners',
    'Contact and billing details, GST or tax numbers, contracts, invoices, payment records and project communications.',
  ],
  [
    'Job applications',
    'CV, contact details, education, work history, portfolio links, expected salary, notice period and interview notes.',
  ],
  [
    'Newsletter or updates',
    'Email address and your subscription preferences.',
  ],
];

const useRows: [string, string][] = [
  [
    'Replying to your enquiry, preparing estimates and proposals',
    'Your consent, given when you submit the form; under GDPR, steps taken at your request before entering a contract.',
  ],
  [
    'Delivering projects, support and maintenance; invoicing and collecting payments',
    'Performance of our contract with you; legitimate uses permitted under the DPDP Act.',
  ],
  [
    'Keeping accounting, tax and business records',
    'Compliance with legal obligations under Indian law.',
  ],
  [
    'Assessing job applications',
    'Your consent, given when you apply.',
  ],
  [
    'Sending our newsletter or updates',
    'Your consent. Every email has an unsubscribe link.',
  ],
  [
    'Measuring and improving website performance',
    'Your consent for non-essential cookies; our legitimate interest in a secure, working website.',
  ],
  [
    'Preventing fraud, spam and misuse; protecting our legal rights',
    'Legitimate uses permitted by law; our legitimate interests under GDPR.',
  ],
];

const retentionRows: [string, string][] = [
  [
    'Enquiries that did not become a project',
    '12 months from the last contact, unless you ask us to delete sooner.',
  ],
  [
    'Client project data, contracts, invoices',
    '7 years after project close, to meet Indian accounting and tax obligations.',
  ],
  [
    'Job application data (unsuccessful)',
    '6 months after notification, unless you consent to us keeping it longer.',
  ],
  [
    'Newsletter subscriber data',
    'Until you unsubscribe.',
  ],
  [
    'Website analytics',
    '26 months (Google Analytics default), then deleted.',
  ],
];

/* ---------- Scoped styles ---------- */
const css = `
.pp > h2[id]{margin:60px 0 18px;scroll-margin-top:100px;line-height:1.25}
.pp > h2[id]:first-of-type{margin-top:48px}
.pp > h3{margin:32px 0 6px;line-height:1.3}
.pp > p{margin:0 0 16px;line-height:1.75}
.pp > ul{margin:0 0 18px;padding-left:22px;display:flex;flex-direction:column;gap:8px;line-height:1.7}
.pp .contact-card{margin:20px 0 24px}

.pp-tw{margin:22px 0 28px;border:1px solid #E5E8EF;border-radius:14px;overflow:hidden;background:#fff}
.pp-t{width:100%;border-collapse:separate;border-spacing:0;font-size:15px;line-height:1.65;text-align:left;margin:0}
.pp-t th{background:#F4F6FB;color:#0F172A;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
  padding:14px 22px;border-bottom:1px solid #E5E8EF;text-align:left}
.pp-t td{padding:18px 22px;vertical-align:top;color:#475569;border-bottom:1px solid #EEF1F6;background:#fff}
.pp-t td:first-child{color:#0F172A;font-weight:600}
.pp-t tbody tr:nth-child(even) td{background:#FAFBFD}
.pp-t tbody tr:last-child td{border-bottom:0}

@media (max-width:640px){
  .pp > h2[id]{margin:44px 0 14px}
  .pp-t colgroup,.pp-t thead{display:none}
  .pp-t,.pp-t tbody,.pp-t tr,.pp-t td{display:block;width:100%}
  .pp-t tbody tr{padding:16px 18px;border-bottom:1px solid #E5E8EF}
  .pp-t tbody tr:last-child{border-bottom:0}
  .pp-t td,.pp-t tbody tr:nth-child(even) td{padding:0;border:0;background:transparent}
  .pp-t td:first-child{margin-bottom:8px;font-size:15px}
  .pp-t td:nth-child(2)::before{content:attr(data-label);display:block;margin-bottom:2px;font-size:11px;font-weight:700;
    letter-spacing:.08em;text-transform:uppercase;color:#94A3B8}
}
`;

export default function PrivacyContent() {
  return (
    <div className="pp">
      <style>{css}</style>

      <div className="summary">
        <h2>In short</h2>
        <ul>
          <li>We collect only what we need to reply to you, deliver your project, hire people and run our website.</li>
          <li>We do not sell your personal data, and we do not use it for third-party advertising.</li>
          <li>You can ask us to access, correct or delete your data, or withdraw your consent, at any time by writing to <a className="ph-i" href="mailto:privacy@accugile.com">privacy@accugile.com</a>.</li>
          <li>We follow India&apos;s Digital Personal Data Protection Act, 2023 and its Rules, and respect equivalent rights for visitors from the EU, UK and other regions.</li>
        </ul>
      </div>

      <h2 id="who"><span className="no">01 </span>&nbsp;&nbsp;Who we are</h2>
      <p>Accugile (<strong>&ldquo;Accugile&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong> or <strong>&ldquo;our&rdquo;</strong>) is a full-stack software development and digital agency operated by <span className="ph-i">[Legal entity name]</span>, with its office at <span className="ph-i">[Full registered address]</span>, Coimbatore, Tamil Nadu, India.</p>
      <p>For personal data collected through this website and our own business activities, Accugile is the <strong>Data Fiduciary</strong> under the Digital Personal Data Protection Act, 2023 (<strong>&ldquo;DPDP Act&rdquo;</strong>), and the <strong>controller</strong> under the EU and UK General Data Protection Regulation (<strong>&ldquo;GDPR&rdquo;</strong>) where those laws apply.</p>

      <h2 id="scope"><span className="no">02</span>&nbsp;&nbsp;Scope of this policy</h2>
      <p>This policy applies when you:</p>
      <ul>
        <li>visit or browse accugile.com and its subpages;</li>
        <li>fill in a contact, estimate or consultation form, email us, call us or message us;</li>
        <li>subscribe to updates or download material from us;</li>
        <li>apply for a job or internship with us; or</li>
        <li>are a client, prospective client, partner or supplier, or work for one.</li>
      </ul>
      <p>It does not cover our separate products, Adorack, Skiplore and Recomonk, which each publish their own privacy policies on their own websites. It also does not cover orders placed through Fiverr or Upwork, where those platforms&apos; privacy policies apply to the data they hold.</p>

      <h2 id="collect"><span className="no">03</span>&nbsp;&nbsp;Data we collect</h2>
      <h3>Data you give us</h3>
      <DataTable head={['Situation', 'Data']} rows={collectRows} widths={['32%', '68%']} />
      <h3>Data collected automatically</h3>
      <p>When you visit our website we, and the tools we use, collect technical data such as your IP address, browser and device type, pages visited, referring site, approximate location (city or country) and the date and time of your visit.</p>
      <h3>Data from others</h3>
      <p>We may receive your details from freelance marketplaces such as Fiverr and Upwork when you contact or hire us there, from people who refer you to us, and from public professional profiles such as LinkedIn when you have approached us.</p>
      <p>We do not ask for, and ask you not to send us, sensitive personal data such as health information, financial account passwords or government identity numbers through our website forms.</p>

      <h2 id="use"><span className="no">04</span>&nbsp;&nbsp;How and why we use it</h2>
      <DataTable head={['Purpose', 'Legal basis']} rows={useRows} widths={['40%', '60%']} />
      <p>We do not sell personal data, and we do not use it for automated decisions that produce legal or similarly significant effects on you.</p>

      <h2 id="cookies"><span className="no">05</span>&nbsp;&nbsp;Cookies and analytics</h2>
      <p>Cookies are small files stored in your browser. We use essential cookies (required for the site to work) and, with your consent, analytics cookies (which count visits and page views in aggregate). We do not use advertising or cross-site tracking cookies. For full details see our <a href="/legal?tab=cookies">Cookie Policy</a>.</p>

      <h2 id="share"><span className="no">06</span>&nbsp;&nbsp;Who we share it with</h2>
      <p>We share personal data only with:</p>
      <ul>
        <li><strong>Service providers</strong> that process data on our behalf (email platforms, cloud hosting, analytics, project management tools) under data processing agreements.</li>
        <li><strong>Professional advisers</strong> such as lawyers, accountants and auditors, bound by confidentiality.</li>
        <li><strong>Authorities</strong> when required by law, court order or to protect our rights.</li>
        <li><strong>A buyer</strong> of our business, with equivalent protections.</li>
      </ul>
      <p>We do not sell personal data to third parties and do not share it for third-party advertising.</p>

      <h2 id="transfer"><span className="no">07</span>&nbsp;&nbsp;International transfers</h2>
      <p>Our team and some service providers are based in India. If we transfer personal data outside India or the EEA, we apply appropriate safeguards — such as standard contractual clauses or transfers to countries with an adequacy decision — as required by the DPDP Act and GDPR.</p>

      <h2 id="retention"><span className="no">08</span>&nbsp;&nbsp;How long we keep it</h2>
      <DataTable head={['Data type', 'Retention period']} rows={retentionRows} widths={['40%', '60%']} />

      <h2 id="security"><span className="no">09</span>&nbsp;&nbsp;How we protect it</h2>
      <p>We use HTTPS on all pages, limit access to personal data to staff and contractors who need it, use secure cloud providers, and require service providers to maintain appropriate security. No transmission over the internet is fully secure, but we take reasonable steps to protect your data.</p>

      <h2 id="rights"><span className="no">10</span>&nbsp;&nbsp;Your rights</h2>
      <p>Under the DPDP Act you have the right to access your data, correct inaccuracies, withdraw consent (where processing is based on consent) and, in certain circumstances, erase your data. Under the GDPR you also have the right to object to processing, restrict processing and data portability.</p>
      <p>To exercise any of these rights, email <a href="mailto:privacy@accugile.com" className="ph-i">privacy@accugile.com</a>. We will respond within 30 days.</p>

      <h2 id="children"><span className="no">11</span>&nbsp;&nbsp;Children</h2>
      <p>Our website and services are not directed at children under 18. We do not knowingly collect personal data from children. If you believe a child has provided us with data, please contact us and we will delete it.</p>

      <h2 id="clientdata"><span className="no">12</span>&nbsp;&nbsp;Client project data</h2>
      <p>When we work on your project, you may share personal data about your customers or employees with us. In that context we act as a data processor on your instructions. You remain the data controller and are responsible for ensuring that sharing with us is lawful. We process such data only as instructed and do not use it for our own purposes.</p>

      <h2 id="links"><span className="no">13</span>&nbsp;&nbsp;Third-party sites and our products</h2>
      <p>This website contains links to third-party sites and to our separate products. We are not responsible for their privacy practices. Our products (Adorack, Skiplore, Recomonk) each have their own privacy policies.</p>

      <h2 id="changes"><span className="no">14</span>&nbsp;&nbsp;Changes to this policy</h2>
      <p>We may update this policy from time to time. We will post the revised version on this page with a new &ldquo;Last updated&rdquo; date. For material changes we will notify clients directly.</p>

      <h2 id="grievance"><span className="no">15</span>&nbsp;&nbsp;Contact and grievance officer</h2>
      <p>For questions, requests or complaints about this policy or our privacy practices:</p>
      <div className="contact-card">
        <div>
          <span>Email: </span>
          <a href="mailto:privacy@accugile.com">privacy@accugile.com</a>
        </div>
        <div>
          <span>Post: </span>
          <strong>76-77, Nava India Rd, KR Puram Avarampalayam, Peelamedu, Coimbatore, Tamil Nadu 641006, India</strong>
        </div>
      </div>
      <p>If you are based in the EU or UK and are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority. For India, the Appellate Committee under the DPDP Act will hear appeals once constituted.</p>
    </div>
  );
}