export const PLATFORMS_DATA = [
  {
    id: "01",
    slug: "tirvona",
    name: "Tirvona™",
    tagline: "Connecting Sacred Destinations. Empowering Communities.",
    category: "Tourism",
    categoryLabel: "Religious Destination Technology & Digital Services",
    maturityStatus: "Early Access", // Editable status: Live, Pilot, Early Access, In Development
    logo: "/assets/tirvona-logo.png",
    featured: true,
    description: "An integrated digital ecosystem designed to connect pilgrims, religious institutions, accommodation providers, transport operators, food businesses, and local service providers.",
    heroSubtitle: "A comprehensive digital infrastructure connecting sacred destinations, pilgrimage logistics, temple administration, and community commerce across India.",
    problemStatement: [
      "Fragmented pilgrim services leading to chaotic bookings, arbitrary pricing, and lack of verified accommodation near religious shrines.",
      "Temple administrations lack unified digital platforms for crowd flow, puja scheduling, donation tracking, and security monitoring.",
      "Local service providers, verified transport operators, and artisans lack direct digital market access to visiting pilgrims."
    ],
    solutionOverview: "Tirvona provides an end-to-end destination management and pilgrim experience operating system that bridges devotees, shrine authorities, and regional service providers in one unified platform.",
    coreModules: [
      { name: "Stay & Accommodation", desc: "Verified dharamshala, guest house, and hotel inventory with transparent booking." },
      { name: "Tirvona Ride", desc: "Regulated pilgrim transportation, EV shuttle booking, and verified local drivers." },
      { name: "Tirvona Foods", desc: "Hygienic prasadam delivery, authentic regional meals, and dietary food booking." },
      { name: "Puja & Jyotish Services", desc: "Scheduled ritual bookings, verified priests, and authentic ceremonial logistics." },
      { name: "Smart Parking & Shuttles", desc: "Pre-booked parking slots and transit routing around high-density temple precincts." },
      { name: "Local Artisan Marketplace", desc: "Direct commerce connecting authentic regional craftsmen and religious items with pilgrims." },
      { name: "Institutional Workforce", desc: "Temple trust staff management, security personnel deployment, and volunteer workflows." },
      { name: "Shrine Intelligence Hub", desc: "Real-time crowd heatmaps, queue estimation, and emergency alert broadcasts." }
    ],
    targetUsers: [
      "Pilgrims and spiritual travelers across domestic and international circuits.",
      "Temple trusts, religious boards, and heritage site administrators.",
      "Local hospitality operators, verified drivers, and accredited guides.",
      "District administrations and municipal authorities managing destination crowds."
    ],
    workflow: [
      { step: "01", title: "Destination Discovery", desc: "Devotees select shrine destination and view verified darshan schedules and guidelines." },
      { step: "02", title: "Integrated Itinerary", desc: "Devotees book darshan time slots, stay, transport, and special puja services in one basket." },
      { step: "03", title: "QR Access & Verification", desc: "On-site QR scanning ensures frictionless gate entry and parking validation." },
      { step: "04", title: "Real-time Coordination", desc: "Devotees receive live crowd updates while shrine trusts track footfall in real-time." }
    ],
    nepIntegration: [
      "NEP Multi-Tenant SaaS: Segmented databases for independent temple trusts and regional boards.",
      "NEP Identity & Access: Verified KYC integration for devotees, priests, and tour operators.",
      "NEP Payment Infrastructure: Secure UPI/card splits directly to trust accounts and vendors."
    ],
    businessValue: "Reduces peak pilgrim wait times by up to 40%, increases shrine trust revenue transparency, and expands local economic impact.",
    engagementModels: ["Institutional SaaS Subscription", "Revenue Sharing on Marketplace", "Custom Trust Deployment"],
    primaryCTA: "Request Tirvona Demo",
    route: "/platforms/tirvona/"
  },
  {
    id: "02",
    slug: "bharatbn",
    name: "BharatBN™",
    tagline: "Helping India Discover, Connect and Grow.",
    category: "Commerce",
    categoryLabel: "Business Discovery & Digital Growth",
    maturityStatus: "Pilot",
    logo: "/assets/bharatbn-logo.webp",
    featured: true,
    description: "An AI-powered business discovery platform designed to help businesses, professionals, and institutions strengthen their online presence, reach potential customers, and develop new commercial opportunities.",
    heroSubtitle: "Empowering Indian enterprises, MSMEs, and independent professionals with hyper-local AI visibility, digital identity, and B2B/B2C trade connections.",
    problemStatement: [
      "Over 60 million Indian MSMEs struggle with discoverability beyond their immediate geographic radius.",
      "High acquisition costs on international ad platforms without local buyer intent verification.",
      "Lack of structured digital cataloging, trust credentials, and seamless direct inquiries."
    ],
    solutionOverview: "BharatBN combines intelligent search indexing, semantic business cataloging, and verified trust badges to connect Indian enterprises directly with local and national buyers.",
    coreModules: [
      { name: "Verified Business Listings", desc: "GSTIN-verified business pages with comprehensive product/service catalogs." },
      { name: "Professional Identity Profiles", desc: "Credibility portfolios for consultants, engineers, doctors, and specialists." },
      { name: "Hyper-Local AI Discovery", desc: "Geo-targeted search matching buyer intent with nearest verified suppliers." },
      { name: "SEO & Generative Engine Visibility", desc: "Automated schema injection ensuring high ranking on Google and AI answer engines." },
      { name: "Direct B2B Lead Generator", desc: "Direct inquiries routed instantly via WhatsApp and enterprise SMS." },
      { name: "Trade Network Analytics", desc: "Real-time visibility into customer search impressions, clicks, and inquiry volume." }
    ],
    targetUsers: [
      "Manufacturing MSMEs, wholesale distributors, and retail businesses.",
      "Independent professionals, consultants, and trade service specialists.",
      "Procurement teams sourcing verified regional suppliers.",
      "Industrial trade associations and chambers of commerce."
    ],
    workflow: [
      { step: "01", title: "Claim & Verify Profile", desc: "Business registers with verified trade credentials and uploads product offerings." },
      { step: "02", title: "AI Catalog Optimization", desc: "Semantic engine enriches product descriptions and maps relevant buyer keywords." },
      { step: "03", title: "Omnichannel Discovery", desc: "Buyers discover listings through search, conversational AI, and local maps." },
      { step: "04", title: "Direct Lead Delivery", desc: "Qualified RFQs and buyer chats route immediately to the business owner." }
    ],
    nepIntegration: [
      "NEP Data Analytics & Reporting: Comprehensive merchant analytics dashboards.",
      "NEP Identity Management: Multi-factor verification and business credential checks.",
      "NEP Intelligent Automation: AI automated catalog translation and enrichment."
    ],
    businessValue: "Lowers customer acquisition costs by up to 55% compared to conventional ads while establishing verified digital credibility.",
    engagementModels: ["Annual Subscription Tiers", "Enterprise Trade Listing", "Sponsored Category Visibility"],
    primaryCTA: "Explore BharatBN Network",
    route: "/platforms/bharatbn/"
  },
  {
    id: "03",
    slug: "bizorm",
    name: "BizORM™",
    tagline: "Customer Experience. Stronger Brands.",
    category: "Business",
    categoryLabel: "Customer Experience & Reputation Intelligence",
    maturityStatus: "Live",
    logo: "/assets/bizorm-logo.jpg",
    featured: true,
    description: "A customer experience and reputation intelligence platform for collecting feedback, managing customer concerns, and monitoring service quality across multiple locations.",
    heroSubtitle: "Turn real-time on-premise feedback into brand equity, resolve negative sentiment before it spreads, and dominate search rankings.",
    problemStatement: [
      "Unresolved on-premise customer grievances escalate into damaging 1-star public Google reviews.",
      "Multi-outlet brands lack unified visibility into outlet-level service quality, staff performance, and cleanliness.",
      "Manual review collection yields less than 2% customer participation with no automated follow-up."
    ],
    solutionOverview: "BizORM provides QR-driven instant feedback capture, automated smart routing (converting happy diners into public 5-star reviews while routing unhappy feedback privately to the GM), and multi-outlet AI analytics.",
    coreModules: [
      { name: "Smart QR Code Touchpoints", desc: "Dynamic table-top, counter, and receipt QR codes tailored per outlet." },
      { name: "Reputation Guard & Smart Routing", desc: "Guides satisfied patrons to Google/Zomato while escalating negative feedback privately." },
      { name: "Multi-Outlet Benchmark Dashboard", desc: "Centralized comparison of NPS, CSAT, and response times across all chain locations." },
      { name: "Automated WhatsApp Recovery", desc: "Instant apology vouchers and manager escalations within 3 minutes of a low rating." },
      { name: "Review Aggregation & AI Replies", desc: "Single inbox for Google, Facebook, and TripAdvisor reviews with AI tone-matched replies." },
      { name: "Staff & Shift Attribution", desc: "Pinpoint service ratings by server, shift, or operational department." }
    ],
    targetUsers: [
      "Restaurant chains, cafes, and hospitality franchises.",
      "Healthcare clinics, dental studios, and diagnostic labs.",
      "Automobile dealerships and multi-brand service centers.",
      "Retail showroom chains, salons, and boutique hotels."
    ],
    workflow: [
      { step: "01", title: "Scan at Touchpoint", desc: "Customer scans table QR code without requiring app download." },
      { step: "02", title: "10-Second Feedback", desc: "Quick interactive rating capturing NPS and specific sentiment criteria." },
      { step: "03", title: "Automated Sentiment Branching", desc: "High ratings prompt Google review; low ratings trigger instant manager WhatsApp alert." },
      { step: "04", title: "Enterprise Intelligence", desc: "Executive dashboard charts brand trends, manager performance, and operational gaps." }
    ],
    nepIntegration: [
      "NEP Workflow Engine: Instant WhatsApp & SMS escalation dispatchers.",
      "NEP Multi-Tenant Architecture: Secure isolated data isolation for multi-brand restaurant groups.",
      "NEP Enterprise Security: End-to-end encrypted customer feedback records."
    ],
    businessValue: "Drives 300%+ increase in verified positive Google reviews while reducing public negative reviews by up to 70%.",
    engagementModels: ["Per-Outlet Monthly SaaS", "Enterprise Chain Licensing", "Franchise Package"],
    primaryCTA: "Request BizORM Demo",
    route: "/platforms/bizorm/"
  },
  {
    id: "04",
    slug: "pravixo",
    name: "Pravixo™",
    tagline: "Where Creators and Businesses Grow Together.",
    category: "Commerce",
    categoryLabel: "Creator Commerce & Influencer Marketing",
    maturityStatus: "Early Access",
    logo: "/assets/pravixo-logo.png",
    featured: true,
    description: "A creator-commerce platform designed to connect businesses with digital creators through collaborations, campaigns, and measurable engagement.",
    heroSubtitle: "Replace untracked influencer sponsorship with structured briefs, verified audience insights, milestone escrow, and real GMV attribution.",
    problemStatement: [
      "Brands waste millions on unverified influencers with fake followers and phantom engagement rates.",
      "Creators suffer from late payments, ambiguous briefs, and non-transparent revision loops.",
      "Zero attribution tracking linking creator content to actual retail orders or lead acquisitions."
    ],
    solutionOverview: "Pravixo provides an enterprise marketplace and campaign orchestration platform where brands discover vetted creators, run programmatic campaigns, and track real commerce ROI.",
    coreModules: [
      { name: "Vetted Creator Discovery", desc: "Filter by authentic audience geography, demographic skew, and verified engagement." },
      { name: "Campaign Brief Engine", desc: "Standardized campaign briefs, content deliverables, and strict timeline adherence." },
      { name: "Milestone Contract & Escrow", desc: "Automated payouts linked to contract milestone completions and analytics verification." },
      { name: "Content Rights & Asset Vault", desc: "Digital copyright licensing, whitelisting rights, and high-res video storage." },
      { name: "Affiliate & Commerce Tracking", desc: "Deep links, coupon code attribution, and direct sales revenue mapping." },
      { name: "AI Performance Forecasting", desc: "Predictive campaign reach, expected cost per click (CPC), and return on ad spend (ROAS)." }
    ],
    targetUsers: [
      "Direct-to-Consumer (D2C) brands and consumer packaged goods (CPG) companies.",
      "Regional & national marketing agencies managing multi-influencer campaigns.",
      "Digital video creators, podcasters, and social media influencers.",
      "Retail brands seeking localized micro-creator activations."
    ],
    workflow: [
      { step: "01", title: "Launch Campaign Brief", desc: "Brand defines campaign goals, creative guardrails, target audience, and budget." },
      { step: "02", title: "Creator Matching", desc: "AI matches the brief with creators meeting engagement and demographic criteria." },
      { step: "03", title: "Content Approval & Publishing", desc: "Creator submits draft inside Pravixo for brand sign-off before public posting." },
      { step: "04", title: "Real-Time Attribution", desc: "Live analytics track impressions, engagement, link conversions, and automated payout." }
    ],
    nepIntegration: [
      "NEP Payment Infrastructure: Automated milestone disbursement and TDS tax compliance.",
      "NEP API Gateway: Direct synchronization with Instagram Graph, YouTube Data, and Shopify APIs.",
      "NEP Identity Management: Verified creator Aadhaar/PAN KYC."
    ],
    businessValue: "Reduces campaign coordination overhead by 65% while increasing influencer campaign ROI transparency by 100%.",
    engagementModels: ["Brand Enterprise Platform License", "Agency Multi-Seat Tier", "Marketplace Transaction Fee"],
    primaryCTA: "Explore Pravixo Platform",
    route: "/platforms/pravixo/"
  },
  {
    id: "05",
    slug: "political-management-erp",
    name: "Political Management ERP™",
    tagline: "Intelligent Technology for Political Leadership.",
    category: "Governance",
    categoryLabel: "Political Intelligence & Organizational Management",
    maturityStatus: "Pilot",
    logo: "/assets/political-erp-logo.jpg",
    featured: true,
    description: "An enterprise platform designed to support political leaders and organizations in constituency management, public issue tracking, organizational coordination, campaign operations, and strategic decision-making.",
    heroSubtitle: "Transform constituency governance, grassroots cadre communication, grievance resolution, and electoral campaign operations through data intelligence.",
    problemStatement: [
      "Elected leaders and party offices struggle with untracked public letters, grievances, and local development requests.",
      "Grassroots booth committees operate on disjointed paper records or unsecure chat groups with no hierarchy control.",
      "Lack of demographic segmentation, sentiment intelligence, and real-time voter outreach feedback."
    ],
    solutionOverview: "Political Management ERP is a secure, role-based operating system designed specifically for elected representatives, party executives, and campaign war rooms to track every voter grievance and party worker.",
    coreModules: [
      { name: "Leader Edition Dashboard", desc: "Executive KPI command center showing constituency issue resolution rates and sentiment." },
      { name: "Party Enterprise Edition", desc: "Hierarchical management from Central/State committee down to Vidhan Sabha and Booth." },
      { name: "Constituency Intelligence", desc: "Voter roll mapping, polling station demographics, and micro-local issue histories." },
      { name: "Public Issue & Grievance Engine", desc: "Tokenized tracking of citizen letters, ministerial recommendations, and civic works." },
      { name: "Political Copilot & Speech AI", desc: "Contextual speech notes, constituency milestone summaries, and press release generation." },
      { name: "Grassroots Cadre Tasking", desc: "Geo-verified volunteer tasks, rally attendance tracking, and door-to-door survey forms." }
    ],
    targetUsers: [
      "Members of Parliament (MPs), MLAs, and MLCs managing large constituencies.",
      "Political party central, state, and district war rooms.",
      "Mayors, Zila Parishad Presidents, and municipal leaders.",
      "Campaign strategy organizations and public policy consultants."
    ],
    workflow: [
      { step: "01", title: "Constituency Ingestion", desc: "Booth boundaries, public infrastructure data, and voter demographics are securely mapped." },
      { step: "02", title: "Cadre Onboarding", desc: "Multi-tiered role permissions are assigned to block presidents, coordinators, and booth in-charges." },
      { step: "03", title: "Grievance Lifecycle", desc: "Citizen requests received in jan-sabhas are digitized with SMS status notifications." },
      { step: "04", title: "Campaign Execution", desc: "Targeted outreach messaging and booth voter turn-out verification run smoothly." }
    ],
    nepIntegration: [
      "NEP Security & Encryption: Military-grade AES-256 data encryption and sovereign cloud hosting.",
      "NEP Identity & RBAC: Granular role-based permissions preventing unauthorized cadre data export.",
      "NEP Workflow Automation: Multi-channel SMS/WhatsApp automated dispatch with strict consent."
    ],
    businessValue: "Enables elected representatives to resolve up to 85% of citizen grievances within 14 days and empowers 100% booth cadre visibility.",
    engagementModels: ["Constituency Annual License", "State Party Enterprise Agreement", "Election Campaign Term Deployment"],
    primaryCTA: "Schedule Leader Briefing",
    route: "/platforms/political-management-erp/"
  },
  {
    id: "06",
    slug: "ulb-erp",
    name: "ULB ERP Enterprise™",
    tagline: "Smarter Municipal Operations. Better Citizen Services.",
    category: "Governance",
    categoryLabel: "Urban Governance & Municipal Technology",
    maturityStatus: "In Development",
    logo: "/assets/favicon.svg",
    featured: true,
    description: "An integrated enterprise solution for Urban Local Bodies, supporting municipal administration, public service delivery, workforce operations, grievances, and operational intelligence.",
    heroSubtitle: "A modern digital government architecture empowering Municipal Corporations, Municipalities, and Smart City boards to streamline revenue, assets, and citizen services.",
    problemStatement: [
      "Severe property tax leakages, unassessed properties, and slow manual collection workflows.",
      "Sanitation fleets and field sanitation workers operate with minimal GPS verification and irregular reporting.",
      "Citizens face slow resolution of municipal complaints (potholes, streetlights, garbage, water) with zero transparency."
    ],
    solutionOverview: "ULB ERP Enterprise unifies municipal revenue, GIS property tax mapping, sanitation fleet tracking, digital building permits, and public grievance redressal into a citizen-first municipal governance suite.",
    coreModules: [
      { name: "Digital Citizen Portal & App", desc: "Birth/death certificates, trade licenses, property tax payments, and NOC requests." },
      { name: "GIS Property Tax Engine", desc: "Satellite and field surveyor property boundary mapping, tax assessment, and auto-demand notice." },
      { name: "Smart Sanitation & Fleet GPS", desc: "Real-time garbage tipper tracking, bin sensor monitoring, and driver route compliance." },
      { name: "Civic Grievance 311 System", desc: "Photo-geo-tagged citizen complaints automatically routed to ward junior engineers with SLA clocks." },
      { name: "Field Workforce Biometrics", desc: "GPS geofenced attendance for municipal sanitation staff and maintenance crews." },
      { name: "Municipal Asset Management", desc: "Registry of municipal land, parks, streetlights, tube-wells, and commercial leases." },
      { name: "Executive Commissioner Dashboards", desc: "Live ward-by-ward collection reports, grievance heatmaps, and financial statements." }
    ],
    targetUsers: [
      "Municipal Corporations (Nagar Nigams) and Municipal Councils (Nagar Palikas).",
      "Smart City Special Purpose Vehicles (SPVs).",
      "Urban Development Ministries and State Directorate of Local Bodies.",
      "Ward councilors and municipal administrative officers."
    ],
    workflow: [
      { step: "01", title: "Ward Digital Mapping", desc: "Properties, utilities, and assets are geocoded into the municipal spatial layer." },
      { step: "02", title: "Unified Citizen Service Access", desc: "Citizens access all municipal services via unified mobile app and web portal." },
      { step: "03", title: "Automated Officer Routing", desc: "Applications and complaints route instantly to designated zonal officers." },
      { step: "04", title: "Transparent Audit & Closure", desc: "Work verification photos and digital citizen sign-offs close the operational loop." }
    ],
    nepIntegration: [
      "NEP Multi-Tenant Architecture: Shared statewide core with isolated tenant municipal boundaries.",
      "NEP Payment Gateway: Integration with State Treasury, Bharat BillPay (BBPS), and multiple UPI gateways.",
      "NEP Cloud Infrastructure: High-availability government cloud deployment with automated disaster recovery."
    ],
    businessValue: "Increases municipal property tax collections by 35% within 18 months while cutting citizen grievance turnaround time in half.",
    engagementModels: ["Government PPP / BOOT Model", "Annual State Directorate Enterprise SaaS", "City Tier Licensing"],
    primaryCTA: "Request Municipal Briefing",
    route: "/platforms/ulb-erp/"
  },
  {
    id: "07",
    slug: "manufacturing-workforce-intelligence",
    name: "Manufacturing Workforce Intelligence™",
    tagline: "Connected Workforce. Intelligent Manufacturing.",
    category: "Industry",
    categoryLabel: "Industrial Digital Transformation",
    maturityStatus: "In Development",
    logo: "/assets/favicon.svg",
    featured: false,
    description: "A manufacturing technology platform designed to improve workforce visibility, industrial operations, production monitoring, compliance, and management intelligence.",
    heroSubtitle: "Bridge the gap between shop-floor labor operations, production line output, statutory safety compliance, and enterprise ERP systems.",
    problemStatement: [
      "Factory floors struggle with contractor labor ghost-shifts, biometric buddy punching, and wage discrepancies.",
      "Industrial safety violations and machine downtime incidents lack real-time digital escalation.",
      "Siloed production output tracking that fails to correlate operator skills with scrap rate and line efficiency."
    ],
    solutionOverview: "A unified Industrial IoT and workforce operating platform that connects biometric access, contractor compliance, shop-floor OEE (Overall Equipment Effectiveness), and shift scheduling.",
    coreModules: [
      { name: "Smart Factory Access & Biometrics", desc: "Facial recognition turnstiles with anti-spoofing and breathalyzer compliance checks." },
      { name: "Contractor Compliance & Wages", desc: "Automated PF/ESI verification, contractor billing, and statutory labor law auditing." },
      { name: "Shop-Floor Production Monitoring", desc: "Operator shift assignment, piece-rate tracking, and line assembly output logging." },
      { name: "EHS Incident & Safety Auditing", desc: "Mobile hazard reporting, PPE violation detection alerts, and digital permit-to-work." },
      { name: "Machine Downtime & OEE Analytics", desc: "Tracks machine runtime, operator efficiency, and line stoppages." },
      { name: "Plant Intelligence Dashboard", desc: "Real-time visibility into active headcount, labor cost per unit, and factory throughput." }
    ],
    targetUsers: [
      "Automotive component manufacturers, textile mills, and engineering plants.",
      "Pharmaceutical and chemical manufacturing plants with stringent EHS needs.",
      "Factory General Managers, Plant Heads, and Operations Directors.",
      "Contract labor management agencies and HR directors."
    ],
    workflow: [
      { step: "01", title: "Shift Onboarding", desc: "Workers scan face biometrics at factory turnstiles; compliance credentials auto-verified." },
      { step: "02", title: "Line Allocation", desc: "Supervisors allocate verified workers to specific production stations based on skill matrix." },
      { step: "03", title: "Live Shift Monitoring", desc: "IoT sensors log unit output and correlate operational uptime with active labor." },
      { step: "04", title: "Shift Reconcile & Audit", desc: "Automated contractor bill generation and factory efficiency reports delivered to leadership." }
    ],
    nepIntegration: [
      "NEP Enterprise Security: On-premise edge gateway sync with cloud analytics.",
      "NEP Identity Management: Real-time biometric verification and Aadhaar de-duplication.",
      "NEP Data Analytics: High-throughput time-series database for industrial events."
    ],
    businessValue: "Eliminates contractor labor billing leakages by 8-12% and boosts Overall Equipment Effectiveness (OEE) by up to 15%.",
    engagementModels: ["Per-Active-Worker Monthly SaaS", "Plant Enterprise License", "Hardware Integration Bundle"],
    primaryCTA: "Consult Industrial Team",
    route: "/platforms/manufacturing-workforce-intelligence/"
  },
  {
    id: "08",
    slug: "netayush",
    name: "NetAyush™",
    tagline: "Connecting Healthcare and Wellness Through Technology.",
    category: "Healthcare",
    categoryLabel: "Healthcare, AYUSH & Wellness Technology",
    maturityStatus: "Early Access",
    logo: "/assets/favicon.svg",
    featured: false,
    description: "A digital ecosystem intended to connect healthcare practitioners, wellness providers, institutions, and patients through discovery, engagement, and healthcare-related services.",
    heroSubtitle: "Standardizing digital health records, tele-consultations, practitioner accreditation, and authentic herbal/wellness supply chains under one secure umbrella.",
    problemStatement: [
      "Patients face extreme difficulty finding verified, accredited AYUSH practitioners (Ayurveda, Yoga, Unani, Siddha, Homeopathy).",
      "Traditional clinics lack integrated EHR systems for constitutional profiling, herbal prescription tracking, and follow-ups.",
      "Counterfeit and unstandardized wellness formulations saturate consumer marketplaces."
    ],
    solutionOverview: "NetAyush bridges traditional Indian medicine, modern digital health standards (ABDM compliant), practitioner consultation suites, and authentic certified wellness products.",
    coreModules: [
      { name: "Practitioner Credential Directory", desc: "Verified registrations with State AYUSH Councils and qualification checks." },
      { name: "Digital Clinical Consultation (EHR)", desc: "Prakriti assessment modules, herbal prescription templates, and tele-consultation video." },
      { name: "Appointment & Clinic Booking", desc: "Automated booking for panchakarma sessions, yoga therapy, and clinic consultations." },
      { name: "Certified Wellness Marketplace", desc: "Curated formulations with lab test certifications and botanical provenance tracking." },
      { name: "ABDM Health ID Integration", desc: "Seamless patient consent-based EHR sharing adhering to national digital health standards." },
      { name: "Patient Wellness Companion", desc: "Personalized lifestyle regimens (Dinacharya), diet tracking, and dose reminders." }
    ],
    targetUsers: [
      "Ayurvedic, Homeopathic, and Naturopathic clinics and wellness hospitals.",
      "Certified wellness resorts, Panchakarma centers, and Yoga institutes.",
      "Patients seeking authentic, holistic health therapies and tele-consultations.",
      "Herbal formulation manufacturers and wellness nutraceutical brands."
    ],
    workflow: [
      { step: "01", title: "Practitioner Verification", desc: "Doctors submit medical council credentials and clinic timings for verification." },
      { step: "02", title: "Patient Discovery & Booking", desc: "Patients filter by specialty, clinical condition, and book in-clinic or video sessions." },
      { step: "03", title: "Standardized Digital Rx", desc: "Practitioners issue digital prescriptions linked to authentic herbal formulations." },
      { step: "04", title: "Ongoing Lifestyle Support", desc: "Patients follow structured diet and regimen plans with automated check-ins." }
    ],
    nepIntegration: [
      "NEP Security & Compliance: HIPAA and ABDM-compliant health data encryption.",
      "NEP Identity Management: Doctor digital signature and medical council registry sync.",
      "NEP Payment Architecture: Split payments between clinic consultation and pharmacy fulfillment."
    ],
    businessValue: "Expands practitioner patient reach by 400% through tele-health while standardizing patient clinical history.",
    engagementModels: ["Clinic SaaS Subscription", "Practitioner Free + Commission", "Enterprise Wellness Resort Package"],
    primaryCTA: "Explore NetAyush Network",
    route: "/platforms/netayush/"
  },
  {
    id: "09",
    slug: "driver-network-platform",
    name: "Driver Network Platform™",
    tagline: "Building India's Connected Driver Network.",
    category: "Transport",
    categoryLabel: "Transportation & Driver Engagement",
    maturityStatus: "In Development",
    logo: "/assets/favicon.svg",
    featured: false,
    description: "A digital platform designed to connect drivers, transport businesses, fleet operators, and commercial partners through identity, engagement, loyalty, and operational services.",
    heroSubtitle: "Empowering India's commercial drivers with digital identity, micro-benefits, verified job matching, and fleet operational services.",
    problemStatement: [
      "Commercial drivers face extreme professional fragmentation, lack of portable work identity, and unfair wage middlemen.",
      "Fleet operators struggle with high driver attrition, unverified backgrounds, and fuel theft.",
      "Zero institutional access to welfare benefits, insurance micro-premiums, and roadside loyalty networks."
    ],
    solutionOverview: "A driver-first digital ecosystem that combines verified Sarathi license integration, portable driver rating passports, fleet job matching, fuel cashbacks, and emergency support.",
    coreModules: [
      { name: "Verified Digital Driver Passport", desc: "Government Sarathi DL verification, background check badges, and trip milestone ratings." },
      { name: "Fleet Job Matching Exchange", desc: "Direct connections between certified commercial drivers and vetted logistics fleet operators." },
      { name: "Fuel & Highway Loyalty Network", desc: "Instant cashback and diesel discount programs at partner highway fuel stations." },
      { name: "Family Health & Welfare Shield", desc: "Micro-insurance coverage, doctor-on-call, and legal emergency helpline." },
      { name: "Fleet Compliance & Telematics", desc: "Driver logbook, hours of service compliance, and trip fatigue alert modules." },
      { name: "Vehicle Maintenance & Spares Hub", desc: "Discounted commercial tire, oil, and mechanic assistance across major transport corridors." }
    ],
    targetUsers: [
      "Heavy commercial truck drivers and long-haul freight operators.",
      "Cab, taxi, and auto-rickshaw driver unions and individual operators.",
      "Fleet management companies, freight aggregators, and 3PL logistics firms.",
      "Fuel retail brands and highway commercial service providers."
    ],
    workflow: [
      { step: "01", title: "Driver Digital KYC", desc: "Driver uploads commercial driving license; system verifies with central transport records." },
      { step: "02", title: "Active Passport Activation", desc: "Driver builds work reputation score across verified fleet assignments." },
      { step: "03", title: "Fleet Placement & Shifts", desc: "Fleet managers hire verified drivers with zero recruitment agency commissions." },
      { step: "04", title: "Welfare & Loyalty Rewards", desc: "Drivers earn redeemable loyalty credits on toll, fuel, and roadside amenities." }
    ],
    nepIntegration: [
      "NEP Identity & Access: Deep integration with national vehicle and license registries.",
      "NEP Payment Infrastructure: Micro-wallet infrastructure with instant UPI payouts.",
      "NEP Mobile Application Framework: Ultra-lightweight multilingual mobile application."
    ],
    businessValue: "Reduces fleet driver hiring time from 14 days to 48 hours and cuts commercial driver turnover by 25%.",
    engagementModels: ["Fleet Operator Enterprise Subscription", "Highway Partner Loyalty Network", "Freemium Driver Access"],
    primaryCTA: "Partner With Driver Network",
    route: "/platforms/driver-network/"
  },
  {
    id: "10",
    slug: "enterprise-erp",
    name: "MSME & Enterprise ERP™",
    tagline: "Simplify Operations. Improve Visibility. Scale Confidently.",
    category: "Business",
    categoryLabel: "Business Operations & Enterprise Management",
    maturityStatus: "Pilot",
    logo: "/assets/favicon.svg",
    featured: false,
    description: "Customizable enterprise applications designed to support businesses with integrated operational workflows, management reporting, and process automation.",
    heroSubtitle: "A modular, cloud-native ERP built specifically for growing Indian mid-market enterprises tired of bloated legacy software.",
    problemStatement: [
      "Global ERPs (SAP/Oracle) are prohibitively expensive, slow to implement, and poorly adapted to Indian GST compliance.",
      "Mid-sized businesses run on fragmented software islands: one accounting tool, separate CRM, disconnected warehouse spreadsheets.",
      "Business owners lack unified daily cashflow visibility and automated stock reconciliation."
    ],
    solutionOverview: "A unified, composable ERP system that synchronizes supply chain, sales CRM, HRMS payroll, multi-branch inventory, and e-invoicing without the bloat.",
    coreModules: [
      { name: "Multi-Entity Financial Accounting", desc: "Automated GST e-way bills, e-invoicing, bank reconciliation, and multi-currency ledgers." },
      { name: "Supply Chain & Multi-Warehouse", desc: "Real-time stock valuation, batch/lot tracking, reorder automation, and barcode scanning." },
      { name: "Omnichannel Sales & CRM", desc: "Lead pipeline tracking, quotation generator, customer order lifecycle, and delivery notes." },
      { name: "Procurement & Vendor Portal", desc: "Purchase requisitions, vendor quotation comparisons, and automated purchase orders." },
      { name: "HRMS & Automated Payroll", desc: "Biometric attendance sync, leave workflows, statutory tax deductions, and pay slips." },
      { name: "Executive KPI Command Center", desc: "Real-time EBITDA tracking, gross profit margin analysis, and cashflow projections." }
    ],
    targetUsers: [
      "Manufacturing, trading, and distribution enterprises.",
      "Engineering, procurement, and construction (EPC) companies.",
      "Multi-branch retail networks and import/export businesses.",
      "Fast-growing technology firms needing structured operational controls."
    ],
    workflow: [
      { step: "01", title: "Rapid Configuration", desc: "Modular architecture allows go-live in weeks rather than months with clean data migration." },
      { step: "02", title: "Role-Based Operations", desc: "Sales, warehouse, accounts, and HR teams work within role-tailored workspaces." },
      { step: "03", title: "Automated Cross-Sync", desc: "A closed deal automatically generates inventory reservation, invoice, and packing slip." },
      { step: "04", title: "Executive Decision Support", desc: "Leadership monitors margins, debt collections, and inventory velocity on phone dashboards." }
    ],
    nepIntegration: [
      "NEP Multi-Tenant Architecture: Highly scalable tenant isolation with dedicated schema options.",
      "NEP Workflow Engine: Customizable approvals for high-value purchase orders and credit limits.",
      "NEP Cloud Infrastructure: 99.9% uptime SLA with automated encrypted daily backups."
    ],
    businessValue: "Cuts inventory holding costs by 18%, reduces monthly financial book closing from 15 days to 2 days.",
    engagementModels: ["Modular User-Based Cloud Subscription", "Dedicated Private Cloud Deployment", "Enterprise Implementation Bundle"],
    primaryCTA: "Schedule ERP Demonstration",
    route: "/platforms/enterprise-erp/"
  },
  {
    id: "11",
    slug: "auction-enterprise",
    name: "Auction Enterprise™",
    tagline: "Modern Infrastructure for Digital Auctions.",
    category: "Commerce",
    categoryLabel: "Digital Auctions & Transaction Platforms",
    maturityStatus: "In Development",
    logo: "/assets/favicon.svg",
    featured: false,
    description: "A configurable technology solution for organizations seeking to conduct and manage digital auctions, specialized marketplaces, and structured bidding processes.",
    heroSubtitle: "High-frequency real-time bidding, sealed-bid tenders, and asset liquidations with bank-grade auditability and cryptographic non-repudiation.",
    problemStatement: [
      "Traditional enterprise auctions suffer from bid-rigging suspicions, slow physical bidding rooms, and manual escrow verification.",
      "Existing auction portals suffer from high latency, crashing during the intense final seconds of competitive bidding.",
      "Lack of structured digital catalogs, KYC verification for international bidders, and automated settlement."
    ],
    solutionOverview: "Auction Enterprise provides sub-100 millisecond WebSocket bidding infrastructure, forward and reverse auction engines, smart reserve price algorithms, and automated bid room security.",
    coreModules: [
      { name: "Real-Time WebSocket Bid Engine", desc: "Instantaneous sub-second price updates with millisecond collision detection." },
      { name: "Configurable Auction Rules", desc: "English, Dutch, Sealed-Bid, Yankee, and Reverse procurement auction models." },
      { name: "Bidder KYC & EMD Escrow", desc: "Instant Earnest Money Deposit (EMD) verification and automated refund mechanisms." },
      { name: "Digital Asset Showcase & Lotting", desc: "Interactive media lotting, condition reports, inspection certificates, and 3D previews." },
      { name: "Anti-Collusion & Sniper Guard", desc: "Auto-extension timer prevents last-second bid sniping; AI detects anomalous bidding rings." },
      { name: "Comprehensive Audit Log", desc: "Tamper-evident cryptographic ledger of every bid, timestamp, and IP signature." }
    ],
    targetUsers: [
      "Government asset liquidation agencies and public sector undertakings (PSUs).",
      "Industrial machinery, scrap, and commercial real estate auction houses.",
      "Automobile salvage and repossessed vehicle financial institutions.",
      "Agricultural commodity boards and high-value art/luxury sellers."
    ],
    workflow: [
      { step: "01", title: "Catalog & Lot Publishing", desc: "Seller publishes auction lots with reserve prices, inspection dates, and bidding rules." },
      { step: "02", title: "Bidder KYC & Deposit", desc: "Prospective buyers complete identity verification and submit required earnest money." },
      { step: "03", title: "Live Auction Bidding", desc: "Synchronized live virtual auction room with dynamic clock, instant bids, and alerts." },
      { step: "04", title: "Settlement & Award", desc: "System auto-generates winning buyer contract, invoices, and releases loser deposits." }
    ],
    nepIntegration: [
      "NEP Cloud Infrastructure: Ultra-low latency WebSocket clusters handling peak bid traffic.",
      "NEP Payment Infrastructure: High-value NEFT/RTGS escrow reconciliation engine.",
      "NEP Security: Cryptographic audit trails preventing bid modification or dispute."
    ],
    businessValue: "Increases average asset realization value by 14-22% over manual auctions while cutting auction administration cycle by 60%.",
    engagementModels: ["Platform Commission on Winning GMV", "Enterprise Private Auction Hub License", "Government Project Tender"],
    primaryCTA: "Consult Auction Architects",
    route: "/platforms/auction-enterprise/"
  },
  {
    id: "12",
    slug: "ai-business-automation",
    name: "AI Business Automation™",
    tagline: "Automate Processes. Empower Teams. Improve Decisions.",
    category: "Business",
    categoryLabel: "Artificial Intelligence & Workflow Automation",
    maturityStatus: "Live",
    logo: "/assets/favicon.svg",
    featured: false,
    description: "Business automation solutions designed to help organizations reduce repetitive work, improve customer communication, and introduce intelligent workflows into everyday operations.",
    heroSubtitle: "Deploy enterprise-grade conversational AI agents, autonomous document processing, and multi-system RPA to supercharge human productivity.",
    problemStatement: [
      "Customer support teams drown in repetitive Tier-1 queries, leading to slow response times and frustrated customers.",
      "Knowledge workers spend hours manually transcribing invoices, reading contracts, and copy-pasting data across systems.",
      "Generic chatbots give hallucinated or robotic replies that damage enterprise brand credibility."
    ],
    solutionOverview: "AI Business Automation deploys specialized LLM agents fine-tuned on corporate knowledge bases, integrated into WhatsApp, email, and internal databases with guaranteed data privacy.",
    coreModules: [
      { name: "Enterprise AI Assistants", desc: "Knowledge retrieval agents grounded on corporate documents, manuals, and internal policies." },
      { name: "Official WhatsApp Automation", desc: "Meta Cloud API workflows for customer onboarding, order tracking, and 24/7 service inquiries." },
      { name: "Automated Appointment Scheduling", desc: "Conversational calendar booking with timezone handling and calendar synchronization." },
      { name: "Intelligent Document Processing (IDP)", desc: "Zero-shot extraction of data from invoices, medical receipts, and compliance forms." },
      { name: "Autonomous Support Escalation", desc: "Resolves 70%+ of queries instantly, smoothly transferring complex issues to human agents." },
      { name: "AI Decision Intelligence", desc: "Continuous summary generation, trend anomaly detection, and operational briefing reports." }
    ],
    targetUsers: [
      "Customer support & operations teams in banking, insurance, and healthcare.",
      "D2C brands seeking omnichannel WhatsApp shopping and fulfillment tracking.",
      "Professional service firms automating document review and client intake.",
      "Enterprise leadership requiring daily automated business health summaries."
    ],
    workflow: [
      { step: "01", title: "Enterprise Knowledge Ingestion", desc: "Connect PDFs, databases, and APIs into a private vector search index." },
      { step: "02", title: "Channel Deployment", desc: "Embed AI agent directly into WhatsApp, website chat, Slack, and email." },
      { step: "03", title: "Autonomous Execution", desc: "Agents answer questions, trigger API actions, and execute transactions safely." },
      { step: "04", title: "Continuous Learning", desc: "Human-in-the-loop audit dashboard continuously refines prompt performance." }
    ],
    nepIntegration: [
      "NEP AI & Automation Layer: Hybrid inference engine supporting local and enterprise cloud LLMs.",
      "NEP Enterprise Security: Strict PII redaction and zero training on customer proprietary data.",
      "NEP Workflow Engine: Out-of-the-box connectors for CRM, ERP, and messaging gateways."
    ],
    businessValue: "Reduces customer service handling costs by 60% while accelerating response speeds from hours to under 3 seconds.",
    engagementModels: ["Monthly Automation SaaS Tiers", "Custom AI Model Engineering", "Outcome-Based Automation Retainer"],
    primaryCTA: "Deploy AI Automation",
    route: "/solutions/ai-business-automation/"
  }
];
