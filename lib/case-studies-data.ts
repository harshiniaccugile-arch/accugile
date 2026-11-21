import { ACCUDEMY_CASE_STUDY } from '@/app/case-studies/[slug]/accudemy-case-study';
import { CaseStudyData } from './case-study-types';

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "accudemy": ACCUDEMY_CASE_STUDY,
  "medsoft": {
    "slug": "medsoft",
    "title": "Engineering Partner for Medsoft’s Healthcare Workflow Platform",
    "subtitle": "How Accugile helped Medsoft replace a fragile legacy monolith with a fast, secure, cloud-native platform, with zero downtime for the clinics that depend on it every day.",
    "breadcrumbTitle": "Medsoft Healthcare",
    "chips": [
      "Healthcare / HealthTech",
      "Cloud Modernization",
      "Dedicated Pod"
    ],
    "glance": {
      "client": "Medsoft",
      "letter": "M",
      "items": [
        {
          "label": "Engagement",
          "value": "Long-term product engineering partnership"
        },
        {
          "label": "Duration",
          "value": "14 months to full platform modernization, ongoing support"
        },
        {
          "label": "Team",
          "value": "9 specialists: PM, Architect, 4 Engineers, UI/UX, QA, DevOps"
        },
        {
          "label": "Services",
          "value": "Architecture, Product engineering, Cloud & DevOps, QA, Data migration"
        },
        {
          "label": "Technologies",
          "value": "React, Node.js, Python, PostgreSQL, AWS, Kubernetes, Redis"
        },
        {
          "label": "Results",
          "value": "62% faster loads, 99.97% uptime, 71% fewer incidents"
        }
      ]
    },
    "heroStats": [
      {
        "value": "1.7 s",
        "label": "avg. page load (from 4.8 s)"
      },
      {
        "value": "99.97%",
        "label": "platform uptime"
      },
      {
        "value": "-71%",
        "label": "fewer production bugs"
      },
      {
        "value": "2 wks",
        "label": "release cycle (from 12 wks)"
      }
    ],
    "tocItems": [
      {
        "id": "executive-summary",
        "label": "Executive Summary"
      },
      {
        "id": "about-the-client",
        "label": "About the Client & Background"
      },
      {
        "id": "the-challenge",
        "label": "The Challenge: Fragile Monolith"
      },
      {
        "id": "project-goals",
        "label": "Project Goals"
      },
      {
        "id": "our-approach",
        "label": "Our Approach & Architecture"
      },
      {
        "id": "the-solution",
        "label": "The Modernized Solution"
      },
      {
        "id": "architecture-and-technology",
        "label": "Architecture & Technology"
      },
      {
        "id": "data-migration",
        "label": "Data Migration Strategy"
      },
      {
        "id": "quality-assurance",
        "label": "Quality Assurance & Testing"
      },
      {
        "id": "team-and-collaboration",
        "label": "Team & Collaboration Model"
      },
      {
        "id": "key-challenges-overcome",
        "label": "Key Challenges Overcome"
      },
      {
        "id": "results",
        "label": "Results & Performance Gains"
      },
      {
        "id": "client-testimonial",
        "label": "Client Testimonial"
      },
      {
        "id": "why-it-worked",
        "label": "Why the Partnership Worked"
      }
    ],
    "contentHtml": "\n<section id=\"executive-summary\">\n  <h2><small>01</small>Executive Summary</h2>\n  <p>Medsoft provides a mission-critical practice management and clinical workflow platform used by private medical practices, dental clinics, and ambulatory outpatient centers. Over eight years of rapid client growth, its original monolithic codebase had become brittle and difficult to maintain.</p>\n  <p>Clinics experienced sluggish page loads during peak morning check-ins, monthly billing reports locked database tables for minutes, and releasing small bug fixes carried high risks of unintended side effects.</p>\n  <p>Accugile provided a dedicated engineering pod of nine specialists (Solution Architect, PM, 4 Full-Stack Engineers, UI/UX Designer, QA Specialist, and DevOps Engineer) to re-architect and modernize Medsoft into a high-performance, modular, cloud-native platform—with zero downtime across 14 months of phased rollout.</p>\n</section>\n\n<section id=\"about-the-client\">\n  <h2><small>02</small>About the Client & Background</h2>\n  <p>Medsoft’s software powers the daily operational heartbeat of healthcare facilities: patient intake, clinical appointment scheduling, electronic health records (EHR), medical billing, insurance claims processing, and lab test tracking. When the platform slows down, reception desks queue up, and doctors lose consultation time.</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Continuous availability requirement:</b> Clinics run six days a week; maintenance windows could only occur during brief late-night weekend periods.</div>\n    <div class=\"tick\"><b>Strict healthcare data security:</b> Full compliance with HIPAA, patient confidentiality, and medical audit requirements was non-negotiable.</div>\n    <div class=\"tick\"><b>Extensive historical data:</b> Over ten million sensitive patient interaction records, medical histories, and payment logs had to be preserved with 100% accuracy.</div>\n  </div>\n</section>\n\n<section id=\"the-challenge\">\n  <h2><small>03</small>The Challenge: A Monolith Resisting Change</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Architecture</span>\n      <h4>A Brittle, Intertwined Codebase</h4>\n      <p>Single legacy application where billing calculation logic, patient appointment queues, and UI rendering were deeply entangled in shared stored procedures, making feature development slow and risky.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Performance</span>\n      <h4>Severe Peak-Time Degradation</h4>\n      <p>Average page load times reached 4.8 seconds during 8:00 AM–10:00 AM rush hours. Heavy end-of-month reporting queries took upwards of 4 minutes, causing database lockups and connection timeouts.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">User Experience</span>\n      <h4>Interface Built by Accretion</h4>\n      <p>Decade-old design inconsistencies made training new clinic receptionists difficult, requiring up to 10 days before staff could navigate workflows without assistance.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Deployment</span>\n      <h4>12-Week Quarterly Release Cycles</h4>\n      <p>Manual testing and fear of production regressions stretched release cycles to three months, averaging 38 reported production incidents per quarter.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"project-goals\">\n  <h2><small>04</small>Project Goals</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Sub-2-second response times:</b> Reduce clinical workflow load times under 2 seconds across all clinic branches under peak loads.</div>\n    <div class=\"tick\"><b>Modern micro-frontend & modular API architecture:</b> Allow independent deployment of modules (Patient Intake, Billing, Appointments) without risking whole-system regressions.</div>\n    <div class=\"tick\"><b>Automated two-week release cycles:</b> Transition from quarterly manual deployments to automated bi-weekly continuous delivery with 85%+ test coverage.</div>\n    <div class=\"tick\"><b>Zero data loss or clinic disruption:</b> Modernize and migrate data with seamless backward compatibility and zero unscheduled downtime.</div>\n  </div>\n</section>\n\n<section id=\"our-approach\">\n  <h2><small>05</small>Our Approach: The Strangler Fig Modernization</h2>\n  <p>Rather than attempting a high-risk \"big bang\" rewrite that could jeopardize daily clinic operations, Accugile implemented the <b>Strangler Fig pattern</b>:</p>\n  <div class=\"tl\">\n    <div>\n      <span class=\"when\">Months 1–2</span>\n      <strong>Phase 1: Architecture, Observability & CI/CD Pipeline</strong>\n      <p>Established AWS containerized infrastructure (EKS), automated CI/CD pipelines, comprehensive logging/tracing (OpenTelemetry), and an API Gateway to route traffic incrementally.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 3–6</span>\n      <strong>Phase 2: Authentication & Patient Management Migration</strong>\n      <p>Extracted user authentication and patient records into independent services, paired with a brand-new responsive React design system.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 7–10</span>\n      <strong>Phase 3: Smart Scheduling & Appointment Engine</strong>\n      <p>Re-engineered appointment booking with real-time WebSockets, conflict prevention, and automated SMS/email reminders.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 11–14</span>\n      <strong>Phase 4: Billing, Claims Engine & Legacy Decommissioning</strong>\n      <p>Modernized claims processing and financial reporting, followed by the safe decommissioning of the remaining monolithic core.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"the-solution\">\n  <h2><small>06</small>The Modernized Solution</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Module 1</span>\n      <h4>Unified Patient Management</h4>\n      <p>Ultra-fast search across millions of patient profiles with fuzzy-matching, document attachment management, insurance verification, and HIPAA-compliant audit access logs.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Module 2</span>\n      <h4>Smart Scheduling & Waiting Room Flow</h4>\n      <p>Drag-and-drop multi-doctor appointment calendar with automated double-booking prevention, waitlist auto-fill, and patient queue status boards.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Module 3</span>\n      <h4>Billing, Invoicing & Claims Processing</h4>\n      <p>Automated electronic claim validation against insurance clearinghouse rules before submission, dropping claim rejection rates from 14% to 6.3%.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Module 4</span>\n      <h4>Real-Time Clinical & Financial Analytics</h4>\n      <p>Asynchronous data warehouse reporting delivering end-of-month financial breakdowns and doctor productivity metrics in under 8 seconds instead of 4 minutes.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"architecture-and-technology\">\n  <h2><small>07</small>Architecture and Technology</h2>\n  <p>The new Medsoft platform uses a decoupled, event-driven microservices architecture hosted on AWS with high availability across multiple availability zones.</p>\n  <div class=\"stack\">\n    <div>\n      <span>Frontend</span>\n      <div class=\"tchips\">\n        <span>React</span>\n        <span>TypeScript</span>\n        <span>Tailwind CSS</span>\n        <span>Design System Library</span>\n        <span>Vite</span>\n      </div>\n    </div>\n    <div>\n      <span>Backend Services</span>\n      <div class=\"tchips\">\n        <span>Node.js / Express</span>\n        <span>Python (Data & Analytics)</span>\n        <span>GraphQL & REST Gateway</span>\n        <span>RabbitMQ (Event Bus)</span>\n      </div>\n    </div>\n    <div>\n      <span>Database & Cache</span>\n      <div class=\"tchips\">\n        <span>PostgreSQL (Amazon RDS)</span>\n        <span>Redis Cluster</span>\n        <span>Elasticsearch (Patient Lookup)</span>\n      </div>\n    </div>\n    <div>\n      <span>Infrastructure & Cloud</span>\n      <div class=\"tchips\">\n        <span>Amazon Web Services (AWS)</span>\n        <span>Kubernetes (EKS)</span>\n        <span>Docker</span>\n        <span>Terraform</span>\n        <span>AWS KMS (Encryption)</span>\n      </div>\n    </div>\n    <div>\n      <span>Observability & QA</span>\n      <div class=\"tchips\">\n        <span>Datadog</span>\n        <span>Jest & Cypress</span>\n        <span>k6 Load Testing</span>\n        <span>GitHub Actions CI/CD</span>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"data-migration\">\n  <h2><small>08</small>Data Migration Strategy: Zero Data Loss</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Dual-write synchronizer:</b> A resilient streaming sync service mirrored database changes between the legacy database and the new PostgreSQL database in real time during the transition.</div>\n    <div class=\"tick\"><b>Automated reconciliation audits:</b> Nightly background reconciliation jobs checked row-level integrity across millions of historical patient encounters, flagging zero discrepancies.</div>\n    <div class=\"tick\"><b>Instant fallback capability:</b> Each module was launched behind feature flags, allowing rollback within 30 seconds if any clinic experienced edge-case issues.</div>\n  </div>\n</section>\n\n<section id=\"quality-assurance\">\n  <h2><small>09</small>Quality Assurance & Testing</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Automated test coverage elevated from 18% to 86%:</b> Unit, integration, and end-to-end Cypress user journey suites run on every commit.</div>\n    <div class=\"tick\"><b>Automated load testing with k6:</b> Continuous load simulations proved the platform comfortably handles 4x typical peak morning load with latency staying below 1.5 seconds.</div>\n    <div class=\"tick\"><b>Penetration testing & HIPAA auditing:</b> Third-party cybersecurity audits confirmed full compliance with health information privacy standards.</div>\n  </div>\n</section>\n\n<section id=\"team-and-collaboration\">\n  <h2><small>10</small>Team & Collaboration Model</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>9-Specialist Dedicated Engineering Pod</h4>\n      <p>1 Technical Project Manager, 1 Solution Architect, 4 Senior Software Engineers, 1 UI/UX Specialist, 1 QA Automation Engineer, 1 Cloud DevOps Engineer.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Agile Transparency & Continuous Delivery</h4>\n      <p>Two-week development sprints, daily standups, sprint reviews with Medsoft executive leadership, and bi-weekly production releases.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"key-challenges-overcome\">\n  <h2><small>11</small>Key Challenges Overcome</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 1</span>\n      <h4>Untangling 800+ Stored Procedures</h4>\n      <p>Extracted dense business rules from legacy SQL stored procedures into clean, typed, modular backend services covered by automated regression tests.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 2</span>\n      <h4>Zero-Downtime Migration for 24/7 Urgent Cares</h4>\n      <p>Constructed an asynchronous event-driven sync pipeline that allowed clinics to work uninterrupted while their data was shifted into the new cloud schema.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"results\">\n  <h2><small>12</small>Results & Performance Gains</h2>\n  <p>The modernization delivered transformative improvements in performance, stability, and operational efficiency across all client clinics.</p>\n  <div class=\"statband\">\n    <div><strong>1.7 s</strong><span>avg. load time (from 4.8 s)</span></div>\n    <div><strong>99.97%</strong><span>platform uptime</span></div>\n    <div><strong>-71%</strong><span>fewer production bugs</span></div>\n    <div><strong>-38%</strong><span>patient no-show rate</span></div>\n  </div>\n\n  <h3>Direct Metrics Comparison</h3>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>Performance & Speed</h4>\n      <p>Average page load dropped 62% from 4.8s to 1.7s. Monthly billing report generation dropped from 4 minutes to under 8 seconds.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Delivery Velocity</h4>\n      <p>Release cycles accelerated from 12-week quarterly cycles to bi-weekly releases, with production incidents dropping from 38 to 11 per quarter.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Clinic Workflow Impact</h4>\n      <p>Appointment no-show rate dropped 38% due to automated SMS reminders; new clinic staff onboarding time halved from 10 days to 5.5 days.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Financial Accuracy</h4>\n      <p>First-pass claim rejection rate declined from 14% to 6.3%, significantly accelerating reimbursement cash flow for partner clinics.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"client-testimonial\">\n  <div class=\"quote\">\n    <blockquote>\n      “Modernizing our core healthcare platform without taking our clinics offline seemed nearly impossible. Accugile executed the transition with exceptional technical discipline. Our page speeds are three times faster, releases take two weeks instead of three months, and our clinical users love the new experience.”\n    </blockquote>\n    <cite>\n      <strong>Chief Technology Officer</strong>\n      <span>Medsoft</span>\n    </cite>\n  </div>\n</section>\n\n<section id=\"why-it-worked\">\n  <h2><small>13</small>Why the Partnership Worked</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Healthcare Fluency</span>\n      <h4>Deep Understanding of Clinical Pressures</h4>\n      <p>Accugile’s engineers treated clinic workflows with the urgency and precision healthcare demands.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Architectural Discipline</span>\n      <h4>Predictable, Zero-Drama Modernization</h4>\n      <p>Every phase was de-risked using incremental canary deployments, automated verification, and instant fallback capabilities.</p>\n    </div>\n  </div>\n</section>\n",
    "moreStudies": [
      {
        "slug": "accudemy",
        "title": "How Accugile Built a Custom LMS That Scales Teaching and Revenue for Accudemy",
        "desc": "A branded, automated learning platform that turned a content-led online learning company into a scalable EdTech business: self-paced and live courses, interactive lessons, instant certificates, and new revenue streams that work around the clock.",
        "tags": [
          "EdTech / Online Learning",
          "Custom LMS & Commerce",
          "United States"
        ]
      },
      {
        "slug": "kohl-recycling",
        "title": "How Accugile Built a Smart Waste Tracking Platform for Kohl Recycling GmbH",
        "desc": "A SaaS web platform and mobile app that turned paper slips and spreadsheets into verified, real-time waste data for one of Germany’s commercial recyclers, saving over €300,000 a year.",
        "tags": [
          "Waste Management & Recycling",
          "Mobile & Cloud Platform",
          "Germany"
        ]
      },
      {
        "slug": "klibb",
        "title": "How Accugile Built a Data-Driven Smart Energy App for Klibb",
        "desc": "A mobile-first platform that gives Norwegian households real-time control over their electricity: live usage and prices, one consolidated bill, automated EV charging, and smart heating that follows the market.",
        "tags": [
          "Smart Energy / IoT",
          "Mobile App (React Native)",
          "Norway"
        ]
      }
    ]
  },
  "kohl-recycling": {
    "slug": "kohl-recycling",
    "title": "How Accugile Built a Smart Waste Tracking Platform for Kohl Recycling GmbH",
    "subtitle": "A SaaS web platform and mobile app that turned paper slips and spreadsheets into verified, real-time waste data for one of Germany’s commercial recyclers, saving over €300,000 a year.",
    "breadcrumbTitle": "Kohl Recycling GmbH",
    "chips": [
      "Waste Management & Recycling",
      "Mobile & Cloud Platform",
      "Germany"
    ],
    "glance": {
      "client": "Kohl Recycling GmbH",
      "letter": "K",
      "items": [
        {
          "label": "Engagement",
          "value": "Long-term partnership with a dedicated product team"
        },
        {
          "label": "Duration",
          "value": "26 months to full national rollout, ongoing development"
        },
        {
          "label": "Team",
          "value": "6 specialists: PM, Architect, Backend, Mobile, Frontend, QA"
        },
        {
          "label": "Services",
          "value": "Product discovery, UI/UX, Web & Mobile, Cloud, Integrations, DevOps"
        },
        {
          "label": "Technologies",
          "value": ".NET 8, React, React Native, PostgreSQL, Azure (EU)"
        },
        {
          "label": "Integrations",
          "value": "Bluetooth scales, RFID/QR, Power BI, ERP & accounting APIs"
        }
      ]
    },
    "heroStats": [
      {
        "value": "€312K",
        "label": "verified annual savings"
      },
      {
        "value": "214",
        "label": "customer sites live"
      },
      {
        "value": "-75%",
        "label": "time per collection record"
      },
      {
        "value": "99.95%",
        "label": "platform uptime"
      }
    ],
    "tocItems": [
      {
        "id": "project-overview",
        "label": "Project Overview"
      },
      {
        "id": "the-vision",
        "label": "The Vision"
      },
      {
        "id": "what-we-built-together",
        "label": "What We Built Together"
      },
      {
        "id": "how-we-worked",
        "label": "How We Worked"
      },
      {
        "id": "approach-and-phases",
        "label": "Approach and Phases"
      },
      {
        "id": "smart-features",
        "label": "Smart Features"
      },
      {
        "id": "architecture-and-technology",
        "label": "Architecture & Technology"
      },
      {
        "id": "security-and-compliance",
        "label": "Security & Compliance"
      },
      {
        "id": "quality-assurance",
        "label": "Quality Assurance"
      },
      {
        "id": "challenges-we-overcame",
        "label": "Challenges Overcome"
      },
      {
        "id": "cycle-of-improvement",
        "label": "Cycle of Improvement"
      },
      {
        "id": "results",
        "label": "Results & ROI"
      },
      {
        "id": "results-across-portfolio",
        "label": "Results Across Customer Portfolio"
      },
      {
        "id": "client-testimonial",
        "label": "Client Testimonial"
      },
      {
        "id": "why-the-partnership-worked",
        "label": "Why Partnership Worked"
      }
    ],
    "contentHtml": "\n<section id=\"project-overview\">\n  <h2><small>01</small>Project Overview</h2>\n  <p>Kohl Recycling GmbH collects, sorts, and recycles commercial waste for offices, retail chains, hotels, and light-industry customers across Germany. Its reputation rested on reliable service, but its back office still depended on handwritten delivery notes, weighbridge printouts, and spreadsheets maintained by hand.</p>\n  <p>As the business grew past two hundred customer sites, paper-based tracking hit its limit. Drivers spent ten to fifteen minutes per pickup completing paper slips; back-office staff spent Mondays re-keying handwritten notes into the billing system; and customers had no easy way to verify what had been collected from their sites or see their recycling rates.</p>\n  <p>Accugile was engaged as Kohl’s long-term product engineering partner to replace paper and spreadsheets with a single, end-to-end digital platform: a mobile app for drivers and sorting crews, a web console for the operations team, and a self-service portal for customers.</p>\n</section>\n\n<section id=\"the-vision\">\n  <h2><small>02</small>The Vision</h2>\n  <p>The goal was not simply to turn paper slips into PDF files. The leadership team wanted to make waste tracking as transparent and accountable as modern parcel delivery:</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Real-time verification:</b> Every container pickup recorded at the point of collection with photo, timestamp, GPS coordinates, and signed confirmation on a rugged mobile app.</div>\n    <div class=\"tick\"><b>Zero manual re-keying:</b> Weight, grade, and volume data sync directly from scales and vehicle computers into Kohl’s billing and ERP systems.</div>\n    <div class=\"tick\"><b>Customer-facing transparency:</b> Commercial clients see exactly when containers are collected, what was recycled versus sent for recovery, and export audit-ready certificates for their ESG filings.</div>\n    <div class=\"tick\"><b>Compliance by design:</b> German and European waste-tracking documentation (Entsorgungsnachweis, Begleitschein) generated automatically without administrative backlogs.</div>\n  </div>\n</section>\n\n<section id=\"what-we-built-together\">\n  <h2><small>03</small>What We Built Together</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Mobile Application</span>\n      <h4>Driver & Yard App (iOS & Android)</h4>\n      <p>Offline-capable React Native application for collection drivers and recycling yard staff. Features barcode/QR scanning of container tags, direct Bluetooth pairing with industrial on-truck scales, photo proof of collection, digital signature capture, and automatic GPS geo-fencing to confirm pickup locations.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Web Console</span>\n      <h4>Operations & Fleet Management Console</h4>\n      <p>Centralized dispatch and monitoring hub for dispatchers. Real-time fleet tracking, dynamic route reordering, container inventory management, exception handling (e.g. contaminated waste bins), and automated dispatch notifications.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Client Portal</span>\n      <h4>Customer Self-Service & ESG Portal</h4>\n      <p>Dedicated branded portal for Kohl’s enterprise customers. Facilities managers can request extra pickups, view scheduled collections, monitor live recycling quotas, and download compliance reports aligned with German Gewerbeabfallverordnung standards.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Data & Reporting</span>\n      <h4>Automated Billing & ESG Reporting Engine</h4>\n      <p>Automated verification pipeline that reconciles driver-logged weights with yard scale measurements, generates invoice drafts directly in Kohl’s ERP system, and calculates CO2 reduction metrics for client sustainability statements.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"how-we-worked\">\n  <h2><small>04</small>How We Worked: A Model Built on Trust</h2>\n  <p>Accugile provided a full-lifecycle dedicated product team consisting of a Project Manager, Solution Architect, Backend Engineer, Mobile Engineer, Frontend Engineer, and QA Specialist. We worked in two-week agile sprints, working directly with Kohl’s operations directors, fleet managers, and lead drivers on site in Germany during discovery.</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Direct yard & cab immersion:</b> Our designers rode in collection trucks and spent days in recycling yards to understand real-world conditions: bright sunlight, thick gloves, weak cellular connectivity, and fast-paced loading docks.</div>\n    <div class=\"tick\"><b>Offline-first engineering:</b> Because basements, underground parking docks, and remote yards frequently drop mobile signal, the driver app operates fully offline with automatic background sync and conflict resolution once connection resumes.</div>\n    <div class=\"tick\"><b>Continuous user validation:</b> New releases were tested bi-weekly with a pilot fleet of five vehicles before rolling out across the full fleet.</div>\n  </div>\n</section>\n\n<section id=\"approach-and-phases\">\n  <h2><small>05</small>Approach and Phases</h2>\n  <div class=\"tl\">\n    <div>\n      <span class=\"when\">Months 1–3</span>\n      <strong>1. Discovery & Architecture</strong>\n      <p>On-site shadowing of collection routes, data flow mapping, hardware evaluation (rugged tablets, Bluetooth scale integration), and security architecture compliant with GDPR and German commercial law.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 4–8</span>\n      <strong>2. Minimum Viable Product (MVP)</strong>\n      <p>Core driver app with QR container scanning, weight entry, digital signatures, and central dispatch console. Piloted across 12 vehicles and 30 customer sites.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 9–14</span>\n      <strong>3. Expansion & System Integrations</strong>\n      <p>Integration with vehicle telematics, ERP accounting pipelines, automated German waste-compliance documentation, and Bluetooth scale pairing.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 15–20</span>\n      <strong>4. Enterprise Customer Portal</strong>\n      <p>Launch of the customer-facing web portal, ESG analytics dashboard, multi-site hierarchy management, and on-demand collection booking.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 21–26+</span>\n      <strong>5. Scale & Evolution</strong>\n      <p>Full national rollout to 214+ customer locations, automated route optimization, predictive container fill forecasting, and ongoing SLA maintenance.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"smart-features\">\n  <h2><small>06</small>Smart Features That Deliver Measurable Value</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>Bluetooth Scale Auto-Sync</h4>\n      <p>Eliminated manual weight re-entry errors by pulling gross and tare weights directly from certified on-truck scales via Bluetooth Low Energy (BLE), cryptographically sealing each measurement with a timestamp.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Contamination Photo Auditing</h4>\n      <p>When non-recyclable materials are detected in a recycling bin, drivers snap a geo-tagged photo with one tap. The customer portal automatically alerts the facility manager with proof, preventing billing disputes before an invoice is issued.</p>\n    </div>\n    <div class=\"card\">\n      <h4>ESG & Waste Audit Export</h4>\n      <p>One-click generation of certified German waste disposal logs (Entsorgungsnachweise) and carbon avoidance summaries formatted to corporate sustainability standards (GHG Protocol).</p>\n    </div>\n    <div class=\"card\">\n      <h4>Dynamic Route & Stop Reordering</h4>\n      <p>Dispatchers can insert emergency pickups or re-order stops on the fly; the driver’s navigation and schedule update instantly with audible notifications and turn-by-turn guidance.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"architecture-and-technology\">\n  <h2><small>07</small>Architecture and Technology</h2>\n  <p>The platform is architected as a modular, cloud-native system hosted in Microsoft Azure's Germany Central region to satisfy strict EU data residency and data protection requirements.</p>\n  <div class=\"stack\">\n    <div>\n      <span>Mobile</span>\n      <div class=\"tchips\">\n        <span>React Native</span>\n        <span>TypeScript</span>\n        <span>WatermelonDB (Offline-first)</span>\n        <span>BLE Scale SDK</span>\n      </div>\n    </div>\n    <div>\n      <span>Web Console</span>\n      <div class=\"tchips\">\n        <span>React</span>\n        <span>TypeScript</span>\n        <span>Tailwind CSS</span>\n        <span>Mapbox GL</span>\n      </div>\n    </div>\n    <div>\n      <span>Backend API</span>\n      <div class=\"tchips\">\n        <span>.NET 8 / ASP.NET Core</span>\n        <span>Entity Framework Core</span>\n        <span>REST APIs</span>\n        <span>SignalR WebSockets</span>\n      </div>\n    </div>\n    <div>\n      <span>Data & Analytics</span>\n      <div class=\"tchips\">\n        <span>PostgreSQL (Azure Managed)</span>\n        <span>Redis Cache</span>\n        <span>Azure Blob Storage</span>\n        <span>Power BI Embedded</span>\n      </div>\n    </div>\n    <div>\n      <span>Cloud & DevOps</span>\n      <div class=\"tchips\">\n        <span>Microsoft Azure (EU)</span>\n        <span>Azure App Services</span>\n        <span>Docker</span>\n        <span>Azure DevOps CI/CD</span>\n        <span>Terraform</span>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"security-and-compliance\">\n  <h2><small>08</small>Security, Privacy, and Compliance</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Strict GDPR & German Federal Data Protection Act (BDSG) compliance:</b> Personal customer contact details and driver location telemetry are encrypted at rest with AES-256 and in transit via TLS 1.3. Driver location tracking is strictly restricted to scheduled working hours.</div>\n    <div class=\"tick\"><b>Audit-grade tamper-proof records:</b> Every weight measurement, timestamp, and digital signature is immutably logged with audit trails satisfying German tax authorities (GoBD) and environmental inspectors.</div>\n    <div class=\"tick\"><b>Role-Based Access Control (RBAC):</b> Strict segregation of permissions between collection drivers, yard supervisors, accounting teams, executive dispatchers, and external customer facility managers.</div>\n  </div>\n</section>\n\n<section id=\"quality-assurance\">\n  <h2><small>09</small>Quality Assurance & Resilience</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Automated test suite:</b> 88% unit and integration test coverage across the .NET backend and React frontend, executed automatically on every GitHub/Azure pull request.</div>\n    <div class=\"tick\"><b>Real-world offline edge testing:</b> Simulated sudden connection drops, app force-quits during scale Bluetooth pairing, and large data queue syncs across thousands of buffered transactions.</div>\n    <div class=\"tick\"><b>Device compatibility testing:</b> Validated on rugged Honeywell and Zebra Android handhelds as well as standard Samsung and Apple smartphones used by subcontractors.</div>\n  </div>\n</section>\n\n<section id=\"challenges-we-overcame\">\n  <h2><small>10</small>Challenges We Overcame</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 1</span>\n      <h4>Harsh Environmental & Network Conditions</h4>\n      <p>Drivers operate in wet, dusty yards, metal recycling sheds, and basement trash compactors where internet drops completely. We built a rock-solid offline-first sync engine using WatermelonDB with optimistic UI updates and resilient retry queues.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 2</span>\n      <h4>Hardware Compatibility with Legacy Scales</h4>\n      <p>Kohl used three different generations of on-truck industrial scales with proprietary protocols. We wrote dedicated BLE and RS-232 bridge adapters to unify all scale outputs into a standardized data model.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 3</span>\n      <h4>User Adoption Among Veteran Drivers</h4>\n      <p>Drivers who had spent decades using paper slips were skeptical of digital tools. Accugile designed high-contrast, oversized touch targets, minimal typing requirements (one-tap status changes), and multi-lingual UI support (German, Polish, Romanian, and English).</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 4</span>\n      <h4>Zero-Disruption Migration</h4>\n      <p>We ran parallel runs between paper notes and digital tickets for one month. Automated reconciliation scripts caught any discrepancies before the legacy paper slips were retired permanently.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"cycle-of-improvement\">\n  <h2><small>11</small>How KohlTrack Creates a Cycle of Improvement</h2>\n  <div class=\"cycle\">\n    <div>Driver logs collection in seconds; real-time weight & photo proof sync automatically to cloud.</div>\n    <div>Back office verifies transactions instantly without manual data re-entry or paperwork piles.</div>\n    <div>Customers access live recycling dashboards and download ESG audit certificates on demand.</div>\n    <div>Transparent, dispute-free service drives customer contract renewals and attracts new enterprise clients.</div>\n  </div>\n</section>\n\n<section id=\"results\">\n  <h2><small>12</small>Results & ROI</h2>\n  <p>Within two years of platform rollout, Kohl Recycling transformed from a traditional paper-heavy business into a tech-enabled regional recycling leader.</p>\n  <div class=\"statband\">\n    <div><strong>€312K</strong><span>verified annual savings</span></div>\n    <div><strong>214</strong><span>customer sites live</span></div>\n    <div><strong>-75%</strong><span>time per collection record</span></div>\n    <div><strong>99.95%</strong><span>platform uptime</span></div>\n  </div>\n\n  <h3>Verified Annual Financial Impact</h3>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>Reduced manual data entry & administration</h4>\n      <p>Saved €138,000 annually by eliminating manual transcription of paper notes and automating billing reconciliation.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Fewer invoice disputes & credit notes</h4>\n      <p>Saved €74,000 per year thanks to photo documentation of contamination and tamper-proof Bluetooth scale weight records.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Optimized pickups & lower fuel use</h4>\n      <p>Saved €69,000 annually through dynamic route sequencing and reduced dry-runs to empty bins.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Automated customer compliance reporting</h4>\n      <p>Saved €31,000 yearly by replacing manual generation of ESG and regulatory audit reports with self-service exports.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"results-across-portfolio\">\n  <h2><small>13</small>Results Across Kohl’s Customer Portfolio</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>Commercial Retail & Supermarket Chains</h4>\n      <p>Eliminated dock bottlenecks; store managers sign off on cardboard and plastic bail pickups in 20 seconds using the driver’s mobile tablet.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Corporate Office Parks & Facilities</h4>\n      <p>Access transparent recycling rate reports that directly feed into global CSRD / ESG sustainability reporting with zero back-and-forth emails.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Industrial & Manufacturing Plants</h4>\n      <p>Automated collection scheduling for scrap metals and hazardous recovery streams with full legal waste transfer documentation attached.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Internal Dispatch & Operations Team</h4>\n      <p>Full visibility into truck location, route progress, and collection weights; invoices generated within 24 hours of month-end instead of 3 weeks.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"client-testimonial\">\n  <div class=\"quote\">\n    <blockquote>\n      “Accugile didn’t just write code for us — their engineers took the time to understand the messy realities of waste logistics and recycling yards. The platform they built has eliminated hours of manual paperwork every day, ended billing disputes with our largest customers, and made us one of the most technologically advanced recyclers in our region.”\n    </blockquote>\n    <cite>\n      <strong>Managing Director</strong>\n      <span>Kohl Recycling GmbH</span>\n    </cite>\n  </div>\n</section>\n\n<section id=\"why-the-partnership-worked\">\n  <h2><small>14</small>Why the Partnership Worked</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Dedicated Pod</span>\n      <h4>True Team Extension</h4>\n      <p>Accugile’s engineers acted as Kohl’s internal software division, participating in weekly operations meetings and anticipating business needs.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Deep Domain Grasp</span>\n      <h4>Real-World Pragmatism</h4>\n      <p>Designing for real users in industrial work gear rather than assuming ideal laboratory conditions.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Scalable Engineering</span>\n      <h4>Future-Proof Architecture</h4>\n      <p>A clean microservices and cloud foundation that easily accommodated 10x growth in daily transactions without architectural rewrites.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Long-Term Commitment</span>\n      <h4>Continuous Product Evolution</h4>\n      <p>The engagement continues with ongoing feature development, predictive route intelligence, and automated compliance updates.</p>\n    </div>\n  </div>\n</section>\n",
    "moreStudies": [
      {
        "slug": "accudemy",
        "title": "How Accugile Built a Custom LMS That Scales Teaching and Revenue for Accudemy",
        "desc": "A branded, automated learning platform that turned a content-led online learning company into a scalable EdTech business: self-paced and live courses, interactive lessons, instant certificates, and new revenue streams that work around the clock.",
        "tags": [
          "EdTech / Online Learning",
          "Custom LMS & Commerce",
          "United States"
        ]
      },
      {
        "slug": "medsoft",
        "title": "Engineering Partner for Medsoft’s Healthcare Workflow Platform",
        "desc": "How Accugile helped Medsoft replace a fragile legacy monolith with a fast, secure, cloud-native platform, with zero downtime for the clinics that depend on it every day.",
        "tags": [
          "Healthcare / HealthTech",
          "Cloud Modernization",
          "Dedicated Pod"
        ]
      },
      {
        "slug": "klibb",
        "title": "How Accugile Built a Data-Driven Smart Energy App for Klibb",
        "desc": "A mobile-first platform that gives Norwegian households real-time control over their electricity: live usage and prices, one consolidated bill, automated EV charging, and smart heating that follows the market.",
        "tags": [
          "Smart Energy / IoT",
          "Mobile App (React Native)",
          "Norway"
        ]
      }
    ]
  },
  "klibb": {
    "slug": "klibb",
    "title": "How Accugile Built a Data-Driven Smart Energy App for Klibb",
    "subtitle": "A mobile-first platform that gives Norwegian households real-time control over their electricity: live usage and prices, one consolidated bill, automated EV charging, and smart heating that follows the market.",
    "breadcrumbTitle": "Klibb Smart Energy",
    "chips": [
      "Smart Energy / IoT",
      "Mobile App (React Native)",
      "Norway"
    ],
    "glance": {
      "client": "Klibb",
      "letter": "K",
      "items": [
        {
          "label": "Engagement",
          "value": "Long-term partnership with a dedicated mobile product team"
        },
        {
          "label": "Duration",
          "value": "30 months to market-leading release, ongoing development"
        },
        {
          "label": "Team",
          "value": "5 specialists: PM, 2 Mobile Engineers, Backend Engineer, QA"
        },
        {
          "label": "Services",
          "value": "Product discovery, UI/UX, Mobile development, APIs, DevOps"
        },
        {
          "label": "Technologies",
          "value": "React Native, TypeScript, Node.js, TimescaleDB, Azure"
        },
        {
          "label": "Integrations",
          "value": "Elhub, Nord Pool, Tesla, Easee, Zaptec, Mill, BankID, Vipps"
        }
      ]
    },
    "heroStats": [
      {
        "value": "185K+",
        "label": "app downloads"
      },
      {
        "value": "4.8 / 5",
        "label": "average store rating"
      },
      {
        "value": "-42%",
        "label": "customer support contacts"
      },
      {
        "value": "99.99%",
        "label": "uptime in winter peaks"
      }
    ],
    "tocItems": [
      {
        "id": "project-overview",
        "label": "Project Overview"
      },
      {
        "id": "business-need",
        "label": "Business Need & Market Shift"
      },
      {
        "id": "the-vision",
        "label": "The Vision: One Energy App"
      },
      {
        "id": "the-solution",
        "label": "The Solution: Smart Energy App"
      },
      {
        "id": "subscription-levels",
        "label": "Three Subscription Levels"
      },
      {
        "id": "how-we-worked",
        "label": "How We Worked"
      },
      {
        "id": "approach-and-phases",
        "label": "Approach and Phases"
      },
      {
        "id": "technology-and-architecture",
        "label": "Technology & Architecture"
      },
      {
        "id": "integrations",
        "label": "Grid & IoT Integrations"
      },
      {
        "id": "security-and-privacy",
        "label": "Security & Privacy"
      },
      {
        "id": "challenges-we-overcame",
        "label": "Challenges Overcome"
      },
      {
        "id": "cycle-of-value",
        "label": "Cycle of Value"
      },
      {
        "id": "results",
        "label": "Results & Growth"
      },
      {
        "id": "results-across-groups",
        "label": "Results Across Customer Groups"
      },
      {
        "id": "client-testimonial",
        "label": "Client Testimonial"
      },
      {
        "id": "why-the-partnership-worked",
        "label": "Why Partnership Worked"
      }
    ],
    "contentHtml": "\n<section id=\"project-overview\">\n  <h2><small>01</small>Project Overview</h2>\n  <p>Klibb began as a forward-thinking technology company helping Norwegian households understand their electricity consumption. Its early product let customers monitor usage in real time. As spot-price volatility increased across the Nordics, Klibb’s founders saw a bigger opportunity: to become a modern electricity supplier whose entire customer relationship lives inside a polished, intuitive mobile application.</p>\n  <p>To win against legacy utility giants, Klibb needed an app that did far more than show monthly invoices. It needed to show live hourly spot prices, automatically optimize electric vehicle (EV) charging during cheap night hours, adjust smart home thermostats, and present one crystal-clear, combined invoice.</p>\n  <p>Accugile served as Klibb’s dedicated mobile product engineering partner, building and scaling the cross-platform React Native app from early prototypes to over 185,000 active household users in Norway.</p>\n</section>\n\n<section id=\"business-need\">\n  <h2><small>02</small>Business Need & Market Shift</h2>\n  <p>In Norway, smart electric meters (AMS) send hourly consumption data automatically to a central national data hub (Elhub). Despite this rich data, legacy utility apps were notoriously clunky, confusing, and slow to update.</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Extreme spot price fluctuations:</b> Nord Pool power prices fluctuate hourly. Consumers wanted real-time guidance on when to run washers, heat water, or plug in EVs.</div>\n    <div class=\"tick\"><b>Fragmented billing frustration:</b> Norwegian households received separate bills from grid operators and power suppliers; Klibb aimed to unify both into a single transparent monthly statement.</div>\n    <div class=\"tick\"><b>Consumer app quality expectations:</b> Nordic consumers expect banking-grade design, instant face ID login, smooth 60fps animations, and zero downtime during freezing winter peak hours.</div>\n  </div>\n</section>\n\n<section id=\"the-vision\">\n  <h2><small>03</small>The Vision: One Complete Energy Hub</h2>\n  <p>The goal was to build the definitive energy app for Scandinavia—combining real-time IoT smart controls with direct supplier billing:</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Live price & consumption transparency:</b> View today’s hourly prices and tomorrow’s prices the moment Nord Pool publishes them at 13:00.</div>\n    <div class=\"tick\"><b>Automated Smart EV Charging:</b> Plug in your Tesla, Audi, VW, or Easee/Zaptec charger; the app automatically charges during the cheapest hours before your morning departure.</div>\n    <div class=\"tick\"><b>Smart Climate & Water Heating:</b> Seamlessly connects to Mill, Adax, and Sensibo thermostats to pre-heat homes when electricity is cheap and dial back during price spikes.</div>\n    <div class=\"tick\"><b>Consolidated One-Click Billing:</b> Full integration with Norwegian Vipps and eFaktura for frictionless automatic payments.</div>\n  </div>\n</section>\n\n<section id=\"the-solution\">\n  <h2><small>04</small>The Solution: High-Performance Mobile App</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Mobile Core</span>\n      <h4>Cross-Platform React Native App</h4>\n      <p>Native-feel performance on iOS and Android with custom-built SVG charting components, smooth gestures, and instant biometric authentication via Norwegian BankID.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Smart Automation</span>\n      <h4>Smart Charging & Device Engine</h4>\n      <p>Automated charging schedules that ingest user departure times, battery targets, and real-time Nord Pool spot tariffs to charge at lowest guaranteed cost.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Real-Time Data</span>\n      <h4>High-Throughput Time-Series Pipeline</h4>\n      <p>Scalable cloud pipeline processing millions of hourly meter readings, spot price feeds, and IoT device telemetry without latency spikes.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Customer Care</span>\n      <h4>In-App Self-Service & Push Alerts</h4>\n      <p>Smart push alerts notifying users of unusual price spikes or negative pricing hours, cutting inbound support calls by 42%.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"subscription-levels\">\n  <h2><small>05</small>Three Subscription Levels</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Tier 1</span>\n      <h4>Klibb Essential (Free)</h4>\n      <p>Live Nord Pool hourly spot prices, historical consumption tracking, and daily price forecast notifications.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Tier 2</span>\n      <h4>Klibb Smart (Monthly Subscription)</h4>\n      <p>Smart EV charging automation, connected thermostat control, heating optimization, and consolidated grid billing.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Tier 3</span>\n      <h4>Klibb Insights (Family & Multi-Property)</h4>\n      <p>Detailed appliance breakdown estimates, cabin/cottage energy monitoring, solar panel export tracking, and ESG household carbon reports.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"how-we-worked\">\n  <h2><small>06</small>How We Worked</h2>\n  <p>Accugile provided a 5-person dedicated mobile pod (Project Manager, 2 Mobile Engineers, Backend Engineer, QA Engineer, with UI/UX design support). We worked closely with Klibb's Oslo-based product management team in weekly sprints.</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Rapid release cadence:</b> Bi-weekly App Store and Google Play updates, combined with over-the-air (OTA) bug fixes for critical UI adjustments.</div>\n    <div class=\"tick\"><b>Native module optimization:</b> Wrote custom iOS/Android native bridging code for complex interactive energy charts to guarantee fluid 60fps scrolling on budget phones.</div>\n    <div class=\"tick\"><b>Nordic localization:</b> Full Norwegian language support, date/currency formatting, and compliance with Nordic accessibility standards.</div>\n  </div>\n</section>\n\n<section id=\"approach-and-phases\">\n  <h2><small>07</small>Approach and Phases</h2>\n  <div class=\"tl\">\n    <div>\n      <span class=\"when\">Months 1–4</span>\n      <strong>1. Discovery & MVP Insight App</strong>\n      <p>Prototyped user interface, integrated Elhub national meter hub APIs and Nord Pool price feeds, and launched initial live tracking app to 10,000 beta users.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 5–12</span>\n      <strong>2. Supplier Experience & Consolidated Billing</strong>\n      <p>Built energy contract sign-up flow with BankID, integrated grid company invoicing (gjennomfakturering), and implemented Vipps recurring billing.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 13–20</span>\n      <strong>3. Smart Charging & IoT Ecosystem</strong>\n      <p>Direct API integrations with Tesla, Easee, Zaptec, Mill, and Tibber Pulse hardware for intelligent load management.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 21–30+</span>\n      <strong>4. Scale, Optimization & Evolution</strong>\n      <p>Scaled infrastructure to handle winter morning traffic surges, launched solar panel monitoring, and sustained 99.99% uptime.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"technology-and-architecture\">\n  <h2><small>08</small>Technology and Architecture</h2>\n  <p>The solution is built with a resilient cloud architecture designed to ingest massive volumes of IoT telemetry and price updates simultaneously.</p>\n  <div class=\"stack\">\n    <div>\n      <span>Mobile</span>\n      <div class=\"tchips\">\n        <span>React Native</span>\n        <span>TypeScript</span>\n        <span>Native iOS/Android Modules</span>\n        <span>Redux Toolkit</span>\n        <span>Reanimated 3</span>\n      </div>\n    </div>\n    <div>\n      <span>Backend & APIs</span>\n      <div class=\"tchips\">\n        <span>Node.js / Fastify</span>\n        <span>TypeScript</span>\n        <span>REST & GraphQL</span>\n        <span>BullMQ Job Queue</span>\n      </div>\n    </div>\n    <div>\n      <span>Data & Time-Series</span>\n      <div class=\"tchips\">\n        <span>PostgreSQL (TimescaleDB)</span>\n        <span>Redis Cluster</span>\n        <span>Kafka Event Streaming</span>\n      </div>\n    </div>\n    <div>\n      <span>Cloud & DevOps</span>\n      <div class=\"tchips\">\n        <span>Microsoft Azure (Norway East)</span>\n        <span>Azure Kubernetes (AKS)</span>\n        <span>Terraform</span>\n        <span>Azure DevOps CI/CD</span>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"integrations\">\n  <h2><small>09</small>Grid & IoT Integrations</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Nordic Elhub & Grid Operators:</b> Certified connection to Norway’s national metering hub for automated customer switching and hourly meter ingestion.</div>\n    <div class=\"tick\"><b>EV & Charger APIs:</b> Cloud-to-cloud connections to Tesla, Volkswagen, Easee, and Zaptec wallboxes.</div>\n    <div class=\"tick\"><b>Smart Climate Controls:</b> Integration with Mill WiFi heaters and Sensibo AC/heat pumps for automated temperature regulation.</div>\n    <div class=\"tick\"><b>BankID & Vipps:</b> Instant identity verification and seamless mobile payment processing standard across Norway.</div>\n  </div>\n</section>\n\n<section id=\"security-and-privacy\">\n  <h2><small>10</small>Security and Privacy</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>GDPR compliance by design:</b> Energy consumption data is treated as sensitive personal data with strict encryption in transit (TLS 1.3) and at rest (AES-256).</div>\n    <div class=\"tick\"><b>Tokenized IoT authentication:</b> EV and thermostat credentials are encrypted using Azure Key Vault; customer passwords are never stored.</div>\n  </div>\n</section>\n\n<section id=\"challenges-we-overcame\">\n  <h2><small>11</small>Challenges We Overcame</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 1</span>\n      <h4>13:00 Spot Price Traffic Avalanches</h4>\n      <p>Every day at 13:00, when tomorrow’s spot prices are published, tens of thousands of users open the app simultaneously. We implemented aggressive multi-tier Redis caching and CDN edge routing to serve price tables instantly without burdening databases.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 2</span>\n      <h4>Unreliable Third-Party Vehicle APIs</h4>\n      <p>Automaker cloud APIs frequently throttle requests or experience downtime. We built an intelligent retry engine that prevents waking car batteries needlessly while guaranteeing EV charging completes before scheduled wake-up times.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"cycle-of-value\">\n  <h2><small>12</small>How the Klibb App Creates a Cycle of Value</h2>\n  <div class=\"cycle\">\n    <div>Live price alerts help users avoid expensive power spikes and save money.</div>\n    <div>Smart charging and heating automate savings effortlessly in the background.</div>\n    <div>Transparent, combined billing builds immense brand trust and positive word-of-mouth.</div>\n    <div>High retention and word-of-mouth drive organic growth, cutting customer acquisition costs.</div>\n  </div>\n</section>\n\n<section id=\"results\">\n  <h2><small>13</small>Results & Growth</h2>\n  <p>Within two and a half years, Klibb grew from a nascent utility app into one of Norway’s most respected digital electricity brands.</p>\n  <div class=\"statband\">\n    <div><strong>185K+</strong><span>app downloads</span></div>\n    <div><strong>4.8 / 5</strong><span>average store rating</span></div>\n    <div><strong>-42%</strong><span>customer support tickets</span></div>\n    <div><strong>99.99%</strong><span>uptime in winter peaks</span></div>\n  </div>\n\n  <h3>Customer & Business Impact</h3>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>Household Savings</h4>\n      <p>Smart subscription users saved an average of NOK 2,800 annually on electricity by automatically shifting consumption to off-peak night hours.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Retention & Loyalty</h4>\n      <p>Customer retention improved by 13 percentage points above the Norwegian utility industry average, driven by high daily engagement.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Support Deflection</h4>\n      <p>Automated spot price explanations, bill breakdown tools, and push notifications cut inbound customer support contacts by 42%.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Platform Reliability</h4>\n      <p>Achieved 99.99% uptime during historic winter cold snaps, handling 15x normal query loads seamlessly.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"results-across-groups\">\n  <h2><small>14</small>Results Across Customer Groups</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>EV Owners & Commuters</h4>\n      <p>Saved hundreds of kroner per month charging cars overnight without worrying about peak grid tariffs.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Apartment Dwellers & Renters</h4>\n      <p>Enjoyed complete visibility over heating and appliance usage with zero surprise utility bills.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Cabin & Second Home Owners</h4>\n      <p>Monitored and managed winter heating remotely, preventing frozen pipes while keeping standby electricity costs minimal.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"client-testimonial\">\n  <div class=\"quote\">\n    <blockquote>\n      “Building a consumer mobile app that handles real-time financial tariffs, hardware IoT controls, and national grid data requires extraordinary engineering talent. Accugile’s mobile team delivered an app that Norwegian consumers genuinely love using every single day. They are a true engineering partner.”\n    </blockquote>\n    <cite>\n      <strong>Chief Executive Officer</strong>\n      <span>Klibb</span>\n    </cite>\n  </div>\n</section>\n\n<section id=\"why-the-partnership-worked\">\n  <h2><small>15</small>Why the Partnership Worked</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Mobile Craft</span>\n      <h4>Obsessive Attention to Performance</h4>\n      <p>Accugile focused relentlessly on app smoothness, instant startup time, and battery efficiency.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Reliable Scaling</span>\n      <h4>Rock-Solid Backend Architecture</h4>\n      <p>Engineered systems that effortlessly handled extreme demand spikes during Norway’s coldest winter months.</p>\n    </div>\n  </div>\n</section>\n",
    "moreStudies": [
      {
        "slug": "accudemy",
        "title": "How Accugile Built a Custom LMS That Scales Teaching and Revenue for Accudemy",
        "desc": "A branded, automated learning platform that turned a content-led online learning company into a scalable EdTech business: self-paced and live courses, interactive lessons, instant certificates, and new revenue streams that work around the clock.",
        "tags": [
          "EdTech / Online Learning",
          "Custom LMS & Commerce",
          "United States"
        ]
      },
      {
        "slug": "medsoft",
        "title": "Engineering Partner for Medsoft’s Healthcare Workflow Platform",
        "desc": "How Accugile helped Medsoft replace a fragile legacy monolith with a fast, secure, cloud-native platform, with zero downtime for the clinics that depend on it every day.",
        "tags": [
          "Healthcare / HealthTech",
          "Cloud Modernization",
          "Dedicated Pod"
        ]
      },
      {
        "slug": "kohl-recycling",
        "title": "How Accugile Built a Smart Waste Tracking Platform for Kohl Recycling GmbH",
        "desc": "A SaaS web platform and mobile app that turned paper slips and spreadsheets into verified, real-time waste data for one of Germany’s commercial recyclers, saving over €300,000 a year.",
        "tags": [
          "Waste Management & Recycling",
          "Mobile & Cloud Platform",
          "Germany"
        ]
      }
    ]
  },
  "synmedix": {
    "slug": "synmedix",
    "title": "How Accugile Built a Collaboration Platform for Custom 3D Surgical Models for SynMedix",
    "subtitle": "A responsive web platform with a custom 3D viewer that connects clinics and 3D design teams, replaces paperwork with e-signatures, and cuts the time from surgical request to a ready, sterilized, personalized kit.",
    "breadcrumbTitle": "SynMedix 3D MedTech",
    "chips": [
      "MedTech / 3D Surgical Planning",
      "WebGL & .NET Platform",
      "Israel"
    ],
    "glance": {
      "client": "SynMedix",
      "letter": "S",
      "items": [
        {
          "label": "Engagement",
          "value": "Long-term partnership with a dedicated product team"
        },
        {
          "label": "Duration",
          "value": "28 months to full release, ongoing development"
        },
        {
          "label": "Team",
          "value": "6 specialists: PM, Tech Lead, Backend, Frontend, 3D Graphics, QA"
        },
        {
          "label": "Services",
          "value": "Discovery, UI/UX, Web, 3D viewer, Integrations, QA, DevOps"
        },
        {
          "label": "Technologies",
          "value": ".NET 8, React, TypeScript, WebGL / Three.js, SQL Server, Azure"
        },
        {
          "label": "Integrations",
          "value": "DICOM import, 21 CFR Part 11 e-signatures, 3D print queues"
        }
      ]
    },
    "heroStats": [
      {
        "value": "-57%",
        "label": "order-to-delivery time"
      },
      {
        "value": "3,200+",
        "label": "surgical cases managed"
      },
      {
        "value": "-86%",
        "label": "document & revision errors"
      },
      {
        "value": "NIS 1.8M",
        "label": "annual operational savings"
      }
    ],
    "tocItems": [
      {
        "id": "project-overview",
        "label": "Project Overview"
      },
      {
        "id": "business-need",
        "label": "Business Need & Precision Care"
      },
      {
        "id": "the-vision",
        "label": "The Vision"
      },
      {
        "id": "the-solution",
        "label": "The Collaboration Platform"
      },
      {
        "id": "custom-3d-viewer",
        "label": "Browser-Based 3D Medical Viewer"
      },
      {
        "id": "how-we-worked",
        "label": "How We Worked"
      },
      {
        "id": "approach-and-phases",
        "label": "Approach and Phases"
      },
      {
        "id": "technology-and-architecture",
        "label": "Technology & Architecture"
      },
      {
        "id": "security-and-compliance",
        "label": "Medical Security & HIPAA"
      },
      {
        "id": "quality-assurance",
        "label": "Quality Assurance & ISO 13485"
      },
      {
        "id": "challenges-we-overcame",
        "label": "Challenges Overcome"
      },
      {
        "id": "cycle-of-improvement",
        "label": "Cycle of Improvement"
      },
      {
        "id": "results",
        "label": "Results & Clinical Impact"
      },
      {
        "id": "results-across-users",
        "label": "Results Across User Groups"
      },
      {
        "id": "client-testimonial",
        "label": "Client Testimonial"
      },
      {
        "id": "why-the-partnership-worked",
        "label": "Why Partnership Worked"
      }
    ],
    "contentHtml": "\n<section id=\"project-overview\">\n  <h2><small>01</small>Project Overview</h2>\n  <p>SynMedix is an Israeli digital health and medical device pioneer that works with orthopedic, cranio-maxillofacial, and oncology surgeons to design and 3D-print patient-specific surgical guides, anatomical models, and customized titanium implants from CT and MRI scans.</p>\n  <p>With an exact 1:1 physical model of a patient’s unique skeletal structure, surgical teams can rehearse intricate cuts, verify clearances near nerves and blood vessels, and cut hours off time under anesthesia. However, the workflow between hospital surgical suites and biomedical design engineers was bogged down by email threads, insecure consumer file transfers (WeTransfer), manual paper sign-offs, and versioning confusion.</p>\n  <p>Accugile was chosen as SynMedix’s long-term software engineering partner to build a unified, browser-accessible surgical collaboration platform featuring an interactive WebGL 3D viewer, secure DICOM data pipelines, digital multi-party approvals, and end-to-end medical device audit compliance.</p>\n</section>\n\n<section id=\"business-need\">\n  <h2><small>02</small>Business Need & Precision Care</h2>\n  <p>In complex surgeries (e.g. pelvic tumor resections, reconstructive jaw surgeries), custom 3D models reduce surgical complications drastically. Yet the journey from initial hospital scan to delivery of a sterilized 3D surgical guide was hindered by several pain points:</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Excessive order-to-delivery turnaround:</b> A typical case took 21 days from scan upload to sterilized delivery due to back-and-forth email reviews and scheduling friction.</div>\n    <div class=\"tick\"><b>Cumbersome review software:</b> Surgeons previously had to install heavy 10GB desktop CAD packages on hospital computers just to inspect and approve 3D digital model designs.</div>\n    <div class=\"tick\"><b>Regulatory & audit compliance:</b> Medical device regulations (MDR, ISO 13485, FDA 21 CFR Part 11) require an unalterable audit trail of every model revision and surgical approval signature.</div>\n  </div>\n</section>\n\n<section id=\"the-vision\">\n  <h2><small>03</small>The Vision</h2>\n  <p>SynMedix envisioned a streamlined digital operating environment where surgeons and biomedical engineers collaborate as smoothly as colleagues in the same room:</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Zero-install browser 3D inspection:</b> Surgeons inspect high-resolution STL/OBJ models, rotate, zoom, clip cross-sections, and take millimeter-accurate measurements right in Chrome, Safari, or on an iPad.</div>\n    <div class=\"tick\"><b>Real-time collaborative planning:</b> Interactive design sessions with synchronized 3D camera viewpoints and voice annotations between surgeons and engineers.</div>\n    <div class=\"tick\"><b>Legally binding e-signatures:</b> One-click surgeon sign-off complying with 21 CFR Part 11 before files are unlocked for medical 3D printing.</div>\n    <div class=\"tick\"><b>End-to-end logistics tracking:</b> Real-time status visibility from design approval, through cleanroom printing and sterilization, to courier hospital delivery.</div>\n  </div>\n</section>\n\n<section id=\"the-solution\">\n  <h2><small>04</small>The Collaboration Platform</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Surgeon Portal</span>\n      <h4>Case Intake & Medical Scan Upload</h4>\n      <p>Secure browser upload for gigabyte-sized DICOM and CT/MRI studies with automated de-identification, metadata extraction, and clinical priority tagging.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Interactive 3D</span>\n      <h4>High-Performance WebGL 3D Viewer</h4>\n      <p>Custom hardware-accelerated 3D viewer rendering millions of polygons smoothly at 60fps. Includes multi-planar cross-section slicing, bone density density colorization, and caliper distance tools.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Approvals</span>\n      <h4>Compliance & E-Signature Engine</h4>\n      <p>Version-locked review pipeline where surgeons stamp cryptographic digital signatures on specific STL geometries, generating immutable audit certificates.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Production</span>\n      <h4>Print Queue & Logistics Management</h4>\n      <p>Workflow dispatch console connecting design sign-offs directly to certified 3D printing facilities, cleanroom packaging, autoclave sterilization, and hospital dispatch.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"custom-3d-viewer\">\n  <h2><small>05</small>Browser-Based 3D Medical Viewer</h2>\n  <p>A crowning engineering accomplishment of the project was developing a lightweight, hospital-safe 3D viewer running purely in modern web browsers without requiring plugins, GPU drivers, or local installation.</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Progressive mesh streaming:</b> Large 500MB+ medical models load in less than 3 seconds by streaming low-resolution bounding hulls first, progressively refining mesh density.</div>\n    <div class=\"tick\"><b>Interactive plane clipping:</b> Surgeons can drag clipping planes through complex pelvic or cranial models to examine tumor margins and internal bone structure.</div>\n    <div class=\"tick\"><b>3D point-to-point annotations:</b> Surgeons pin comments directly onto anatomical coordinates (e.g., \"extend cutting margin 2mm laterally\"), notifying the design engineer immediately.</div>\n    <div class=\"tick\"><b>Touch-optimized tablet mode:</b> Full multi-touch pinch-to-zoom and gesture rotation optimized for iPads used in clinical consultation rooms.</div>\n  </div>\n</section>\n\n<section id=\"how-we-worked\">\n  <h2><small>06</small>How We Worked</h2>\n  <p>Accugile provided a 6-person dedicated team (Project Manager, Technical Lead, Backend Engineer, Frontend Engineer, 3D Graphics/WebGL Engineer, and QA Engineer). We operated in 2-week agile sprints, meeting twice weekly with SynMedix's Chief Medical Officer and lead biomedical designers.</p>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Clinical workflow immersion:</b> Accugile engineers interviewed orthopedic and maxillofacial surgeons to ensure viewer controls matched surgical terminology and clinical muscle memory.</div>\n    <div class=\"tick\"><b>Medical device validation rigor:</b> All software changes conformed to Software as a Medical Device (SaMD) quality protocols, with traceable test execution logs.</div>\n  </div>\n</section>\n\n<section id=\"approach-and-phases\">\n  <h2><small>07</small>Approach and Phases</h2>\n  <div class=\"tl\">\n    <div>\n      <span class=\"when\">Months 1–3</span>\n      <strong>1. Discovery & WebGL Feasibility Prototyping</strong>\n      <p>Tested WebGL rendering limits for dense medical meshes, defined DICOM handling architecture, and established HIPAA-compliant cloud storage.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 4–9</span>\n      <strong>2. Core Platform & 3D Viewer Engine</strong>\n      <p>Developed core case management dashboard, user authentication, file ingestion pipeline, and primary 3D WebGL viewer.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 10–16</span>\n      <strong>3. Collaborative Tools & E-Signatures</strong>\n      <p>Introduced live 3D annotation pins, synchronized screen reviews, 21 CFR Part 11 compliant digital signatures, and automated PDF case reports.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 17–22</span>\n      <strong>4. Manufacturing Dispatch & Scheduling</strong>\n      <p>Integrated cleanroom print queues, materials tracking, autoclave sterilization logs, and courier dispatch APIs.</p>\n    </div>\n    <div>\n      <span class=\"when\">Months 23–28+</span>\n      <strong>5. Scale, QA Module & Continuous Evolution</strong>\n      <p>Rolled out hospital-wide across 14 surgical centers, implemented automated DICOM integrity verification, and sustained 99.98% platform reliability.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"technology-and-architecture\">\n  <h2><small>08</small>Technology and Architecture</h2>\n  <p>The platform combines high-security .NET backend microservices with an optimized Three.js / WebGL rendering layer.</p>\n  <div class=\"stack\">\n    <div>\n      <span>Frontend</span>\n      <div class=\"tchips\">\n        <span>React</span>\n        <span>TypeScript</span>\n        <span>Three.js / WebGL</span>\n        <span>Tailwind CSS</span>\n        <span>Zustand</span>\n      </div>\n    </div>\n    <div>\n      <span>Backend Services</span>\n      <div class=\"tchips\">\n        <span>.NET 8 / ASP.NET Core</span>\n        <span>C#</span>\n        <span>Entity Framework Core</span>\n        <span>Hangfire (Background Jobs)</span>\n      </div>\n    </div>\n    <div>\n      <span>Data & Medical Storage</span>\n      <div class=\"tchips\">\n        <span>Microsoft SQL Server</span>\n        <span>Azure Blob Storage (Encrypted)</span>\n        <span>Redis</span>\n      </div>\n    </div>\n    <div>\n      <span>Cloud & Infrastructure</span>\n      <div class=\"tchips\">\n        <span>Microsoft Azure</span>\n        <span>Azure App Service</span>\n        <span>Azure Key Vault</span>\n        <span>Azure DevOps CI/CD</span>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"security-and-compliance\">\n  <h2><small>09</small>Medical Security, Privacy, and HIPAA</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>HIPAA & GDPR Compliance:</b> Protected Health Information (PHI) is automatically stripped or segregated during DICOM uploads; patient records are encrypted at rest with customer-managed keys (AES-256).</div>\n    <div class=\"tick\"><b>FDA 21 CFR Part 11 compliant e-signatures:</b> Dual-factor authentication, cryptographic timestamping, and reason-for-signing capture prevent signature tampering.</div>\n    <div class=\"tick\"><b>Comprehensive Audit Trails:</b> Every model rotation, comment, approval, and file download is permanently recorded in tamper-evident logs.</div>\n  </div>\n</section>\n\n<section id=\"quality-assurance\">\n  <h2><small>10</small>Quality Assurance & ISO 13485</h2>\n  <div class=\"ticks\">\n    <div class=\"tick\"><b>Mesh verification algorithms:</b> Automated geometric checks detect non-manifold geometry, self-intersecting facets, or wall thickness violations before models can be submitted for 3D printing.</div>\n    <div class=\"tick\"><b>Strict regression test coverage:</b> Over 85% automated test coverage across backend calculation services and WebGL viewer components.</div>\n  </div>\n</section>\n\n<section id=\"challenges-we-overcame\">\n  <h2><small>11</small>Challenges We Overcame</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 1</span>\n      <h4>Rendering Massive Medical Meshes in Low-Powered Hospital Browsers</h4>\n      <p>Surgeons often use older hospital workstations with integrated graphics chips. We engineered a custom client-side mesh decimation and Level of Detail (LOD) algorithm that maintains millimeter-accurate surface contours while cutting memory consumption by 70%.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Challenge 2</span>\n      <h4>Eliminating Legal Uncertainty in Surgical Sign-Offs</h4>\n      <p>Surgeons cannot afford ambiguity over which revision of a cutting guide was approved. We built a visual diff overlay tool showing revision differences highlighted in color, paired with cryptographic file hashing at the instant of digital sign-off.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"cycle-of-improvement\">\n  <h2><small>12</small>How the Platform Creates a Cycle of Improvement</h2>\n  <div class=\"cycle\">\n    <div>Surgeon uploads hospital CT/MRI scans in minutes with automated DICOM de-identification.</div>\n    <div>Design engineers generate 3D anatomical models and cutting guides in parallel.</div>\n    <div>Surgeon inspects and signs off on 3D geometry in-browser via secure e-signature.</div>\n    <div>Sterilized, custom kit arrives in the operating room 57% faster with zero paperwork errors.</div>\n  </div>\n</section>\n\n<section id=\"results\">\n  <h2><small>13</small>Results & Clinical Impact</h2>\n  <p>The platform transformed custom surgical modeling from an ad-hoc, slow procedure into an efficient, predictable standard of care.</p>\n  <div class=\"statband\">\n    <div><strong>-57%</strong><span>order-to-delivery turnaround</span></div>\n    <div><strong>3,200+</strong><span>surgical cases managed</span></div>\n    <div><strong>-86%</strong><span>document and revision errors</span></div>\n    <div><strong>NIS 1.8M</strong><span>annual operational savings</span></div>\n  </div>\n\n  <h3>Verified Clinical & Economic Impact</h3>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>Order Turnaround</h4>\n      <p>Average case delivery time cut from 21 days down to 9 days, enabling personalized 3D models to be utilized in semi-urgent oncology cases.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Surgeon Approval Speed</h4>\n      <p>Approval review cycle dropped from 6 days to under 24 hours, with surgeons approving models on mobile devices between surgeries.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Designer Productivity</h4>\n      <p>Biomedical design engineers increased case throughput by 65% by eliminating manual file conversions and email chasing.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Surgeon Satisfaction</h4>\n      <p>Achieved a 4.8 / 5 satisfaction rating among participating hospital heads of surgery across Israel and Europe.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"results-across-users\">\n  <h2><small>14</small>Results Across User Groups</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <h4>Orthopedic & Cranial Surgeons</h4>\n      <p>Instant review access from anywhere; confidence that physical models and guides precisely match approved 3D files.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Biomedical Design Engineers</h4>\n      <p>Single source of truth for design revisions, with zero lost requirements or ambiguous verbal instructions.</p>\n    </div>\n    <div class=\"card\">\n      <h4>Hospital Administrative & Procurement Teams</h4>\n      <p>Automated purchase order matching, clear billing milestones, and audit-ready regulatory documentation.</p>\n    </div>\n    <div class=\"card\">\n      <h4>3D Printing Cleanroom Technicians</h4>\n      <p>Pre-validated printable STL files with verified geometries ready for immediate additive manufacturing.</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"client-testimonial\">\n  <div class=\"quote\">\n    <blockquote>\n      “In surgical planning, precision and speed are matters of patient health. Accugile built a platform that allows our surgeons and 3D biomedical engineers to collaborate seamlessly in a single click. Their custom WebGL viewer and compliance architecture have made personalized 3D surgical guides accessible for thousands of patients.”\n    </blockquote>\n    <cite>\n      <strong>Co-Founder & Chief Technology Officer</strong>\n      <span>SynMedix</span>\n    </cite>\n  </div>\n</section>\n\n<section id=\"why-the-partnership-worked\">\n  <h2><small>15</small>Why the Partnership Worked</h2>\n  <div class=\"cards two\">\n    <div class=\"card\">\n      <span class=\"tag\">High-End Graphics</span>\n      <h4>Advanced 3D WebGL Mastery</h4>\n      <p>Accugile delivered desktop-grade 3D graphics rendering inside standard hospital web browsers.</p>\n    </div>\n    <div class=\"card\">\n      <span class=\"tag\">Medical Rigor</span>\n      <h4>Zero Compromise on Quality & Compliance</h4>\n      <p>Every feature met medical device regulations (ISO 13485 / FDA Part 11) with total audit traceability.</p>\n    </div>\n  </div>\n</section>\n",
    "moreStudies": [
      {
        "slug": "accudemy",
        "title": "How Accugile Built a Custom LMS That Scales Teaching and Revenue for Accudemy",
        "desc": "A branded, automated learning platform that turned a content-led online learning company into a scalable EdTech business: self-paced and live courses, interactive lessons, instant certificates, and new revenue streams that work around the clock.",
        "tags": [
          "EdTech / Online Learning",
          "Custom LMS & Commerce",
          "United States"
        ]
      },
      {
        "slug": "medsoft",
        "title": "Engineering Partner for Medsoft’s Healthcare Workflow Platform",
        "desc": "How Accugile helped Medsoft replace a fragile legacy monolith with a fast, secure, cloud-native platform, with zero downtime for the clinics that depend on it every day.",
        "tags": [
          "Healthcare / HealthTech",
          "Cloud Modernization",
          "Dedicated Pod"
        ]
      },
      {
        "slug": "kohl-recycling",
        "title": "How Accugile Built a Smart Waste Tracking Platform for Kohl Recycling GmbH",
        "desc": "A SaaS web platform and mobile app that turned paper slips and spreadsheets into verified, real-time waste data for one of Germany’s commercial recyclers, saving over €300,000 a year.",
        "tags": [
          "Waste Management & Recycling",
          "Mobile & Cloud Platform",
          "Germany"
        ]
      }
    ]
  }
};

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES[slug];
}

export function getAllCaseStudies(): CaseStudyData[] {
  return Object.values(CASE_STUDIES);
}
