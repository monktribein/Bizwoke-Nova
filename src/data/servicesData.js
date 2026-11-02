export const SERVICES_DATA = [
  {
    id: "01",
    slug: "enterprise-software-development",
    title: "Enterprise Software Development",
    seoTarget: "Custom Software Development Company",
    category: "Software Engineering",
    tagline: "High-Performance Software Tailored to Complex Business Operations",
    shortDescription: "Custom ERP, CRM, workforce management, operational dashboards, workflow systems, and business applications designed around your processes.",
    overview: "We architect, build, and maintain custom enterprise-grade software engineered for scalability, security, and integration with mission-critical corporate ecosystems.",
    buyerProblem: "Off-the-shelf software forces businesses to change their workflows to fit rigid software constraints, resulting in expensive workarounds, duplicate entries, and operational bloat.",
    scope: [
      "Custom Enterprise Architecture & Microservices",
      "High-Concurrency Web & Cloud Applications",
      "Legacy Code Modernization & Migration",
      "Distributed Database Design & Optimization",
      "Enterprise REST / GraphQL API Ecosystems"
    ],
    process: [
      { step: "01", title: "Domain Discovery", desc: "Deep-dive analysis into business requirements, workflows, and technical constraints." },
      { step: "02", title: "Architecture Design", desc: "Designing secure, modular database schemas, APIs, and cloud infrastructure." },
      { step: "03", title: "Agile Development", desc: "Bi-weekly sprint releases with continuous code quality auditing and unit tests." },
      { step: "04", title: "Deployment & Scaling", desc: "Containerized CI/CD rollout, load testing, and SLA-backed maintenance." }
    ],
    deliverables: [
      "Full IP & Clean Documented Source Code",
      "Interactive Modern Web & Desktop Interfaces",
      "Comprehensive Swagger / Postman API Documentation",
      "Scalable Cloud Deployment with Automated CI/CD"
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Docker", "AWS/GCP", "Kubernetes"],
    faqs: [
      { q: "Do we retain full ownership of the source code?", a: "Yes. All enterprise software developed by Bizwoke Nova includes 100% intellectual property transfer to your organization upon project completion." },
      { q: "Can you integrate with our existing legacy ERP or databases?", a: "Yes. We specialize in building secure API adapters and ETL pipelines that bridge modern software with legacy mainframes, SAP, or on-premise databases." }
    ]
  },
  {
    id: "02",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    seoTarget: "Mobile App Development Company",
    category: "Software Engineering",
    tagline: "Scalable iOS & Android Applications That Users Love",
    shortDescription: "Scalable mobile applications, enterprise workforce apps, consumer marketplaces, and customer-facing digital experiences.",
    overview: "From mission-critical field operations apps to high-volume consumer commerce platforms, we build fluid, responsive native and cross-platform mobile apps.",
    buyerProblem: "Mobile apps often fail due to sluggish UI, battery drain, poor offline connectivity, and lack of backend scalability during traffic surges.",
    scope: [
      "iOS & Android Native / Cross-Platform Apps (React Native / Flutter)",
      "Enterprise Field Workforce & Biometric Mobility Apps",
      "Offline-First Architecture & Background Synchronization",
      "Push Notification & Re-engagement Automation",
      "App Store & Google Play Launch Optimization"
    ],
    process: [
      { step: "01", title: "User Journey & Wireframing", desc: "Mapping mobile-native user flows, gestures, and tactile interactions." },
      { step: "02", title: "UI/UX & Prototyping", desc: "Figma-based high-fidelity design validated with user interaction patterns." },
      { step: "03", title: "Mobile Engineering", desc: "Performance-tuned code ensuring 60fps animations and low memory footprint." },
      { step: "04", title: "Store Submission & QA", desc: "Device matrix testing, guideline compliance, and store publishing." }
    ],
    deliverables: [
      "Compiled iOS IPA and Android APK/AAB Builds",
      "Production-Ready App Store / Play Store Listings",
      "Clean Reusable Component Architecture",
      "Real-time Crashlytics & Analytics Integration"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js"],
    faqs: [
      { q: "Do you build native or cross-platform apps?", a: "We build both. For most enterprise and consumer products, modern cross-platform frameworks deliver 95% code sharing with native performance, saving 40% in development costs." },
      { q: "How do you handle offline mode for field staff?", a: "We engineer local SQLite/WatermelonDB storage that queues actions offline and automatically reconciles conflicts with cloud servers when network returns." }
    ]
  },
  {
    id: "03",
    slug: "ai-automation-services",
    title: "AI Automation Services",
    seoTarget: "AI Automation Company in India",
    category: "Artificial Intelligence",
    tagline: "Intelligent Agents & Process Automation for Maximum Operational Efficiency",
    shortDescription: "AI-powered assistants, intelligent workflows, conversational automation, document processing, and business decision-support solutions.",
    overview: "We embed state-of-the-art AI models, cognitive workflows, and autonomous bots into everyday operations, eliminating repetitive manual drudgery.",
    buyerProblem: "Organizations waste hundreds of man-hours daily on copy-pasting data, answering routine inquiries, and parsing unstructured documents.",
    scope: [
      "Fine-Tuned LLMs & Private Corporate AI Assistants",
      "Intelligent Document Processing (OCR + AI Extraction)",
      "Automated WhatsApp & Customer Support Agents",
      "Multi-Agent Workflow Orchestration (LangChain / AutoGen)",
      "Predictive Analytics & Decision Intelligence Models"
    ],
    process: [
      { step: "01", title: "Automation Audit", desc: "Identifying high-volume repetitive tasks with greatest operational ROI." },
      { step: "02", title: "Data Ingestion & Safety", desc: "Setting up private vector indices with strict PII masking and enterprise privacy." },
      { step: "03", title: "Agent Engineering", desc: "Prompt optimization, tool-calling APIs, and human-in-the-loop fallback safeguards." },
      { step: "04", title: "Continuous Benchmarking", desc: "Monitoring agent accuracy, latency, and business resolution rates." }
    ],
    deliverables: [
      "Custom Fine-Tuned AI Assistant or Multi-Agent System",
      "Direct API Connectors for WhatsApp, CRM, and Databases",
      "Human Review Dashboard with Audit Trails",
      "Comprehensive AI Safety & Privacy Documentation"
    ],
    technologies: ["OpenAI / Gemini APIs", "LangChain", "Llama 3", "Python / FastAPI", "Pinecone / PGVector", "Meta Cloud API"],
    faqs: [
      { q: "Will our proprietary business data be shared with public AI models?", a: "Never. We use enterprise private endpoints with zero data retention policies or deploy self-hosted open-weights models inside your private VPC." },
      { q: "What happens when the AI is unsure of an answer?", a: "We program deterministic confidence thresholds. If an inquiry falls below threshold, it is automatically routed to a human specialist with conversation context." }
    ]
  },
  {
    id: "04",
    slug: "erp-crm-development",
    title: "ERP & CRM Development",
    seoTarget: "Custom ERP Development Services",
    category: "Enterprise Systems",
    tagline: "Connected Operations, Inventory, Finance & Customer Intelligence",
    shortDescription: "Customizable enterprise applications designed to support businesses with integrated operational workflows, management reporting, and process automation.",
    overview: "We design and implement custom ERP & CRM solutions that unify sales pipelines, supply chains, HRMS, and accounts into a single single pane of glass.",
    buyerProblem: "Standard SaaS ERPs lock businesses into expensive per-seat licenses, lack localized tax compliance, and require complex customization for unique workflows.",
    scope: [
      "Custom Sales CRM & Pipeline Automation",
      "Multi-Warehouse Inventory & Barcode Tracking",
      "GST E-Way Bill & E-Invoicing Automation",
      "HRMS, Biometric Attendance & Payroll Processing",
      "Automated Procurement & Vendor Quotation Comparison"
    ],
    process: [
      { step: "01", title: "Process Mapping", desc: "Mapping current manual spreadsheets, approvals, and bottleneck stages." },
      { step: "02", title: "Data Migration Plan", desc: "Sanitizing and migrating historic vendor, customer, and accounting data." },
      { step: "03", title: "Phased Module Rollout", desc: "Deploying core finance and inventory first, followed by CRM and HR." },
      { step: "04", title: "Staff Training & Support", desc: "Hands-on workshops, role-based cheat-sheets, and 24/7 go-live support." }
    ],
    deliverables: [
      "Fully Integrated Cloud-Native ERP / CRM Platform",
      "Executive Mobile Dashboard for Business Owners",
      "Custom Automated PDF Quotation & Invoice Generators",
      "Data Migration & Role-Based Security Matrix"
    ],
    technologies: ["React", "PostgreSQL", "Node.js", "Redis", "Docker", "Tailwind CSS"],
    faqs: [
      { q: "How long does a custom ERP take to deploy?", a: "Our modular approach allows core modules (sales, billing, inventory) to go live within 6 to 8 weeks, with specialized modules rolled out iteratively." }
    ]
  },
  {
    id: "05",
    slug: "website-development",
    title: "Website Development",
    seoTarget: "Website Development Company",
    category: "Digital Platforms",
    tagline: "Blazing Fast, Enterprise-Grade Web Platforms That Convert",
    shortDescription: "Custom corporate websites, investor portals, SaaS product interfaces, and interactive web applications.",
    overview: "We engineer modern corporate web platforms built on modern frontend frameworks that achieve sub-second load times, flawless responsiveness, and high conversion.",
    buyerProblem: "Slow, bloated WordPress templates with security vulnerabilities and uninspired designs that fail to convey corporate authority to enterprise buyers.",
    scope: [
      "Headless CMS & Modern Frontend Architecture (Next.js / Vite / React)",
      "Mobile-First Responsive Design & Fluid Typography",
      "Enterprise Accessibility (WCAG 2.1 AA Compliance)",
      "Sub-Second Core Web Vitals Optimization",
      "Interactive Product Demonstrations & Configurable Calculators"
    ],
    process: [
      { step: "01", title: "Information Architecture", desc: "Content strategy, sitemap planning, and conversion funnel optimization." },
      { step: "02", title: "Design System & UI", desc: "Clean typography, restrained palettes, and interactive prototypes." },
      { step: "03", title: "Component Development", desc: "Clean React code with reusable design tokens and strict SEO markup." },
      { step: "04", title: "Speed & Security Audit", desc: "Lighthouse 95+ score optimization and SSL/header security hardening." }
    ],
    deliverables: [
      "Fully Responsive Corporate Web Platform",
      "Lighthouse 95+ Score Performance Guarantee",
      "Structured SEO Schema & Open Graph Tags",
      "CMS Editor Integration for Non-Technical Teams"
    ],
    technologies: ["React", "Vite", "Next.js", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    faqs: [
      { q: "Will our marketing team be able to update content without code?", a: "Yes. We integrate headless CMS solutions or intuitive admin panels allowing your content editors to publish blogs, update copy, and manage media effortlessly." }
    ]
  },
  {
    id: "06",
    slug: "seo-services",
    title: "SEO Services",
    seoTarget: "SEO Company in Noida",
    category: "Digital Growth",
    tagline: "Technical & Strategic Search Engine Optimization Delivering High-Intent Leads",
    shortDescription: "Comprehensive search engine optimization, technical site audits, keyword authority architecture, and local search dominance.",
    overview: "We implement data-driven SEO frameworks that capture high-intent organic search demand, turning Google into your most predictable customer acquisition channel.",
    buyerProblem: "Businesses waste months with agencies that promise traffic through irrelevant low-intent keywords without driving actual sales qualified leads.",
    scope: [
      "Comprehensive Technical SEO & Core Web Vitals Optimization",
      "Keyword Intent Mapping & Semantic Content Architecture",
      "High-Authority B2B Digital PR & Ethical Link Acquisition",
      "Local SEO, Google Business Profile & Multi-Location Optimization",
      "Competitor Backlink & Content Gap Exploitation"
    ],
    process: [
      { step: "01", title: "Deep Technical Audit", desc: "Crawl analysis, indexation errors, schema markup, and speed bottleneck resolution." },
      { step: "02", title: "Commercial Keyword Mapping", desc: "Targeting high-intent enterprise search terms where buyers are ready to buy." },
      { step: "03", title: "Content Engine & Optimization", desc: "Publishing authoritative, expert-led content answering buyer questions." },
      { step: "04", title: "Rank Tracking & Lead Attribution", desc: "Monthly transparent reporting on rankings, organic conversions, and ROI." }
    ],
    deliverables: [
      "Technical Audit & Remediation Roadmap",
      "Monthly Organic Ranking & Lead Attribution Dashboard",
      "Optimized On-Page Meta, Headers & Schema Code",
      "High-Authority Backlink Acquisition Reports"
    ],
    technologies: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Schema.org"],
    faqs: [
      { q: "How long before we see organic search rankings improve?", a: "Technical fixes show impact within 3-4 weeks. Competitive commercial keyword rankings typically reach Top 3-5 positions within 90 to 180 days." }
    ]
  },
  {
    id: "07",
    slug: "ai-seo-services",
    title: "AI SEO, AEO & GEO",
    seoTarget: "AI Search Optimization Services",
    category: "Digital Growth",
    tagline: "Dominate the New Era of AI Answer Engines (ChatGPT, Perplexity, Gemini & Search Generative Experience)",
    shortDescription: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) ensuring your brand is cited and recommended by AI assistants.",
    overview: "As search shifts from 10 blue links to AI answer generation, we optimize your digital presence so LLMs recognize your company as the authoritative answer.",
    buyerProblem: "Traditional SEO fails when prospective clients ask ChatGPT, Perplexity, or Google Gemini for recommendations and your brand is completely absent.",
    scope: [
      "Generative Engine Optimization (GEO) Audit & Strategy",
      "Answer Engine Optimization (AEO) Schema & Semantic Entity Graph",
      "Brand Knowledge Graph Ingestion on Wikipedia, Wikidata & Authoritative Sources",
      "Direct Citation & Entity Association with Industry Problems",
      "AI Overview (Google SGE) Trigger & Inclusion Architecture"
    ],
    process: [
      { step: "01", title: "AI Visibility Audit", desc: "Querying major LLMs (ChatGPT, Gemini, Claude, Perplexity) to benchmark current brand citations." },
      { step: "02", title: "Knowledge Graph Engineering", desc: "Building structured JSON-LD entity graphs connecting your brand, products, and executives." },
      { step: "03", title: "Authoritative Vector Seeding", desc: "Placing verified citations in datasets and industry indexes heavily weighted by AI training pipelines." },
      { step: "04", title: "Generative Answer Verification", desc: "Continuous monitoring of prompt responses and brand recommendation sentiment." }
    ],
    deliverables: [
      "Comprehensive AI Entity & Knowledge Graph Audit",
      "Structured Multi-Entity Schema Injections",
      "LLM Brand Citation & Sentiment Scorecards",
      "Strategic Digital Footprint Expansion across Authoritative Repositories"
    ],
    technologies: ["JSON-LD Entity Graphs", "Wikidata", "Perplexity Pro", "OpenAI Embeddings", "Google Search Generative"],
    faqs: [
      { q: "What is the difference between SEO and AEO/GEO?", a: "SEO optimizes for search engine crawlers to rank web pages. AEO/GEO optimizes entity facts, credentials, and semantic consensus so AI models recommend your business as the definitive answer." }
    ]
  },
  {
    id: "08",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    seoTarget: "Social Media Marketing Agency",
    category: "Digital Growth",
    tagline: "Brand Authority, Narrative Storytelling & Targeted B2B / B2C Community Engagement",
    shortDescription: "Strategic social media management, executive thought leadership on LinkedIn, high-impact video creative, and paid social performance campaigns.",
    overview: "We build social presence that conveys corporate prestige, commands respect among decision-makers, and drives qualified inquiries.",
    buyerProblem: "Generic stock-image posts and low-effort copy that receive zero engagement and make corporate brands look inactive or dated.",
    scope: [
      "Executive LinkedIn Thought Leadership & Personal Branding",
      "Brand Video Content, Reels & Corporate Showcases",
      "Paid Performance Social Campaigns (LinkedIn, Meta, YouTube)",
      "Community Management & Rapid Comment Moderation",
      "Strategic Industry Narrative & PR Amplification"
    ],
    process: [
      { step: "01", title: "Brand Narrative Blueprint", desc: "Defining tone of voice, visual identity pillars, and executive perspectives." },
      { step: "02", title: "Editorial Calendar & Production", desc: "Producing monthly batches of high-fidelity graphics, video clips, and insightful carousels." },
      { step: "03", title: "Precision Audience Targeting", desc: "Targeting enterprise CXOs, procurement heads, and high-value buyers." },
      { step: "04", title: "Conversion Attribution", desc: "Tracking inbound messages, website visits, and pipeline attribution." }
    ],
    deliverables: [
      "Monthly Content Calendar with Bespoke Creatives",
      "Executive Ghostwriting Articles & Thought Pieces",
      "Paid Ad Campaign Performance & Lead Audit",
      "Monthly Engagement & Follower Growth Analytics"
    ],
    technologies: ["LinkedIn Campaign Manager", "Meta Business Suite", "Adobe Creative Suite", "Figma", "Sprout Social"],
    faqs: [
      { q: "How do you help B2B technology companies on social media?", a: "We focus on LinkedIn thought leadership and technical case breakdowns that establish your founders and engineers as industry authorities, attracting enterprise inbound inquiries." }
    ]
  },
  {
    id: "09",
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    seoTarget: "ORM Services in India",
    category: "Reputation & Brand",
    tagline: "Safeguard Corporate Credibility, Neutralize Negative PR & Build Unshakeable Brand Trust",
    shortDescription: "Online reputation management, proactive review generation, negative link de-indexing, and executive brand defense.",
    overview: "We protect your brand reputation across Google Search, review platforms, and news portals, ensuring your first impression inspires total confidence.",
    buyerProblem: "A single defamatory blog post, fake 1-star review wave, or competitor smear campaign can destroy enterprise deals before negotiations even begin.",
    scope: [
      "Google Page 1 Search Result Suppression & Brand Defense",
      "Google Business Profile & Review Ecosystem Management",
      "Crisis PR & Rapid Response Communication",
      "Executive Profile & Wikipedia Reputation Monitoring",
      "Proactive Positive Sentiment Asset Engineering"
    ],
    process: [
      { step: "01", title: "Reputation Threat Audit", desc: "Mapping negative links, search sentiment, and vulnerability vectors." },
      { step: "02", title: "Content Engine Displacement", desc: "Creating and ranking positive high-authority digital assets that push negative links off Page 1." },
      { step: "03", title: "Review Velocity Acceleration", desc: "Implementing BizORM QR touchpoints to harvest genuine 5-star customer feedback." },
      { step: "04", title: "24/7 Digital Sentry", desc: "Automated alerts for any new brand mentions or rating drops." }
    ],
    deliverables: [
      "Page 1 Search Sentiment Transformation Report",
      "Verified Customer Review Generation System",
      "Crisis Protocol & Executive Messaging Playbook",
      "Ongoing Weekly Mention & Rating Monitoring"
    ],
    technologies: ["Brand24", "Google Alerts", "BizORM", "High-Authority PR Syndication"],
    faqs: [
      { q: "Can negative reviews or defamatory links actually be suppressed?", a: "Yes. Through technical SEO displacement, ethical legal notices, and building authoritative branded assets, negative results are pushed past Page 2 where less than 1% of users look." }
    ]
  },
  {
    id: "10",
    slug: "political-digital-marketing",
    title: "Political Digital Marketing",
    seoTarget: "Political Campaign Management Services",
    category: "Specialized Outreach",
    tagline: "Voter Data Analytics, Grassroots Narrative Engineering & Digital War Room Management",
    shortDescription: "Constituency-level micro-targeting, digital war rooms, video messaging campaigns, cadre coordination, and public sentiment analytics.",
    overview: "We design and execute data-driven political communication campaigns that build grassroots resonance, counter opposition narratives, and mobilize voters.",
    buyerProblem: "Traditional campaign advertising is generic, ignores localized Vidhan Sabha issues, and lacks real-time cadre activation mechanisms.",
    scope: [
      "Constituency & Polling Booth Micro-Targeted Ad Campaigns",
      "24/7 Digital War Room & Rapid Rebuttal Unit",
      "Vernacular WhatsApp Community Management",
      "Candidate Persona & Public Speech Video Production",
      "Voter Sentiment Polling & Issue Heatmaps"
    ],
    process: [
      { step: "01", title: "Demographic & Caste Matrix Study", desc: "Analyzing booth-level historical voting trends, localized pain points, and voter aspirations." },
      { step: "02", title: "Narrative Blueprint", desc: "Crafting resonant campaign slogans, developmental manifestos, and vernacular messaging." },
      { step: "03", title: "Omnichannel Rollout", desc: "Coordinating WhatsApp broadcasts, Meta ads, local influencer videos, and voice calls." },
      { step: "04", title: "Real-Time War Room", desc: "Monitoring opposition claims, countering misinformation in minutes, and tracking cadre rally turnouts." }
    ],
    deliverables: [
      "End-to-End Digital Campaign War Room",
      "Booth-Wise Voter Communication Packs",
      "High-Production Campaign Videos & Slogans",
      "Daily Sentiment & Counter-Narrative Bulletins"
    ],
    technologies: ["Political Management ERP", "Meta Ads", "WhatsApp Enterprise API", "GIS Mapping"],
    faqs: [
      { q: "How do you ensure election commission compliance?", a: "All campaigns, ads, and bulk messaging strictly comply with Model Code of Conduct (MCC) and Media Certification and Monitoring Committee (MCMC) pre-approvals." }
    ]
  },
  {
    id: "11",
    slug: "government-iec-digital-outreach",
    title: "Government IEC & Digital Outreach",
    seoTarget: "Swachh Bharat IEC Services",
    category: "Specialized Outreach",
    tagline: "Information, Education and Communication (IEC) Campaigns for Public Schemes & Swachh Bharat",
    shortDescription: "Citizen awareness programs, behavioral change communication, multimedia content, and digital dashboards for government departments and ULBs.",
    overview: "We partner with government ministries, Urban Local Bodies (ULBs), and public institutions to deliver high-impact citizen awareness and behavioral change campaigns.",
    buyerProblem: "Public welfare schemes and cleanliness initiatives fail to achieve targeted public participation due to boring, bureaucratic messaging that citizens ignore.",
    scope: [
      "Swachh Bharat Mission (SBM) Urban & Rural IEC Campaigns",
      "Behavioral Change Communication (BCC) Strategy",
      "Multilingual Visual & Audio Collateral (Street Play, Wall Art, Radio, Social)",
      "Citizen Engagement Contests & Swachh Survekshan Score Boosters",
      "Digital Impact Monitoring & Verification Dashboards"
    ],
    process: [
      { step: "01", title: "Stakeholder Alignment", desc: "Understanding scheme objectives, targeted demographic groups, and key behavioral hurdles." },
      { step: "02", title: "Creative Concept & Jingle", desc: "Developing catchy slogans, character mascots, and culturally resonant folk storytelling." },
      { step: "03", title: "Ground & Digital Synergy", desc: "Synchronizing physical school rallies, prabhat pheri, and street plays with viral social media." },
      { step: "04", title: "Audit & Documentation", desc: "Geo-tagged photo evidence, citizen survey feedback, and documentation for central government rankings." }
    ],
    deliverables: [
      "Complete Scheme IEC Media Kit (Audio, Video, Print, Social)",
      "Swachh Survekshan Compliance Documentation Dossiers",
      "Ground Volunteer & Sanitation Worker Toolkits",
      "Weekly Activity & Reach Monitoring Reports"
    ],
    technologies: ["ULB ERP Enterprise", "GIS Tracking", "Multimedia Production", "Citizen Survey Portals"],
    faqs: [
      { q: "Have you worked with municipal corporations on Swachh Survekshan?", a: "Yes. Our IEC frameworks are specifically aligned with the Ministry of Housing and Urban Affairs (MoHUA) scoring rubrics to maximize points in citizen feedback and awareness." }
    ]
  },
  {
    id: "12",
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    seoTarget: "E-Commerce Website Development",
    category: "Digital Platforms",
    tagline: "High-Converting D2C & B2B E-Commerce Experiences Built for Scale",
    shortDescription: "Custom online storefronts, headless commerce architectures, multi-vendor marketplaces, and seamless payment gateway integrations.",
    overview: "We build ultra-fast, conversion-optimized e-commerce platforms engineered to maximize Average Order Value (AOV) and streamline checkout.",
    buyerProblem: "High cart abandonment rates, clunky checkout flows, and platform crashes during flash sales and festival marketing peaks.",
    scope: [
      "Custom Shopify Plus & Headless Commerce Architectures",
      "B2B Wholesale Portals with Tiered Pricing & Credit Terms",
      "Seamless Indian Payment Gateways (Razorpay, Cashfree, UPI, COD Fraud Shield)",
      "Automated Shipping & Courier Aggregator Integrations (Shiprocket, Bluedart)",
      "One-Click Checkout & Upsell Cart Funnels"
    ],
    process: [
      { step: "01", title: "E-Commerce Strategy", desc: "Catalog taxonomy, buyer personas, checkout UX, and logistics strategy." },
      { step: "02", title: "Design & Prototyping", desc: "High-converting product detail pages (PDP) with rich video and trust triggers." },
      { step: "03", title: "Platform Engineering", desc: "Custom theme development, payment SDK integration, and inventory sync." },
      { step: "04", title: "Conversion Rate Testing", desc: "A/B testing checkout velocity, trust badges, and mobile speed." }
    ],
    deliverables: [
      "Production-Ready Fast E-Commerce Store",
      "Integrated Payment Gateway & Auto-Reconciled Logistics",
      "Automated Abandoned Cart WhatsApp & Email Flows",
      "Comprehensive Admin Training & Product Management Guide"
    ],
    technologies: ["Shopify Plus", "React / Next.js", "WooCommerce", "Razorpay", "Shiprocket", "Tailwind CSS"],
    faqs: [
      { q: "Can you help prevent Cash on Delivery (COD) fraud?", a: "Yes. We integrate automated OTP verification and AI risk scoring that flags high-risk COD orders before shipping, reducing RTO (Return to Origin) rates by 30%." }
    ]
  },
  {
    id: "13",
    slug: "whatsapp-business-automation",
    title: "WhatsApp Business Automation",
    seoTarget: "WhatsApp Automation Services",
    category: "Artificial Intelligence",
    tagline: "Turn India's Most Used App into Your #1 Sales & Support Engine",
    shortDescription: "Official WhatsApp Cloud API integrations, automated chatbot flows, broadcast campaigns, and payment notifications.",
    overview: "We help brands leverage the official WhatsApp Cloud API to automate customer onboarding, send real-time order updates, and run high-ROI marketing broadcasts.",
    buyerProblem: "Emails suffer from 15% open rates and phone calls go unanswered, leaving businesses struggling to reach customers effectively.",
    scope: [
      "Official Meta WhatsApp Business Cloud API & Green Tick Verification",
      "Conversational AI Chatbots for 24/7 Lead Qualification",
      "Automated E-Commerce Order, Tracking & Payment Alerts",
      "High-Converting Segmented WhatsApp Broadcast Campaigns",
      "Multi-Agent Shared Team Inbox & Customer Support Routing"
    ],
    process: [
      { step: "01", title: "Meta API Setup & Green Tick", desc: "Managing business manager verification and API provisioning." },
      { step: "02", title: "Flow Architecture", desc: "Designing visual decision-tree chatbot journeys for inquiries, bookings, and sales." },
      { step: "03", title: "Backend Webhook Sync", desc: "Connecting WhatsApp webhooks directly with your ERP, CRM, or Shopify store." },
      { step: "04", title: "Campaign Execution", desc: "Launching verified template broadcasts with live delivery, read, and reply tracking." }
    ],
    deliverables: [
      "Verified WhatsApp API Account with Official Green Tick Guidance",
      "Conversational Chatbot with Interactive Buttons & Catalogs",
      "CRM & Order Tracking Auto-Trigger Integration",
      "Multi-Agent Support Dashboard for Team Members"
    ],
    technologies: ["Meta WhatsApp Cloud API", "Node.js", "Python", "Webhooks", "PostgreSQL"],
    faqs: [
      { q: "Is WhatsApp messaging compliant with anti-spam rules?", a: "Yes. All outbound marketing messages utilize pre-approved Meta message templates sent exclusively to opted-in users, preventing phone number bans." }
    ]
  },
  {
    id: "14",
    slug: "corporate-branding-design",
    title: "Corporate Branding & Design",
    seoTarget: "Branding and Creative Design Agency",
    category: "Reputation & Brand",
    tagline: "Enduring Corporate Identities, Design Systems & Visual Prestige",
    shortDescription: "Brand identity systems, logo design, visual design languages, corporate pitch decks, and enterprise collateral guidelines.",
    overview: "We create distinctive visual identities and design guidelines that position technology companies and growing enterprises as trustworthy industry leaders.",
    buyerProblem: "Inconsistent visual assets, outdated logos, and amateur marketing collateral that fail to justify premium pricing to enterprise clients.",
    scope: [
      "Comprehensive Corporate Identity & Logo Design",
      "Design Systems, Typography & Color Hierarchy Guidelines",
      "Enterprise Investor Decks & Sales Presentation Templates",
      "Stationery, Business Cards & Office Environmental Branding",
      "Digital Brand Asset Library (Social Kits, Icons, Vector Assets)"
    ],
    process: [
      { step: "01", title: "Brand Archetype & Discovery", desc: "Uncovering your core competitive advantages, values, and enterprise positioning." },
      { step: "02", title: "Visual Exploration", desc: "Presenting distinct aesthetic directions with real-world mockups and contexts." },
      { step: "03", title: "Design System Assembly", desc: "Refining the selected direction into an extensive brand book and digital guidelines." },
      { step: "04", title: "Collateral Production", desc: "Exporting all production vector assets, templates, and corporate guidelines." }
    ],
    deliverables: [
      "Master Brand Style Guide & Typography Rules (PDF)",
      "Full Vector Logo Suite (SVG, EPS, PNG, Light/Dark Variants)",
      "High-Impact PowerPoint / Google Slides Sales Deck Template",
      "Print-Ready Corporate Stationery & Social Media Kits"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects"],
    faqs: [
      { q: "What files do we receive at completion?", a: "You receive complete master source files (Figma, AI) along with organized vector exports (SVG, PDF, EPS, PNG) ready for both high-resolution offset printing and digital web use." }
    ]
  }
];
