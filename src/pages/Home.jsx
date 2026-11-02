import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { PLATFORMS_DATA } from '../data/platformsData';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Server,
  Zap,
  Globe2,
  Users2,
  CheckCircle2,
  Compass,
  Landmark,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  Building,
  GraduationCap,
  ExternalLink,
  Lock,
  Workflow,
  BarChart3,
  CreditCard,
  Cloud
} from 'lucide-react';

export default function Home() {
  const featuredPlatforms = PLATFORMS_DATA.filter(p => p.featured);

  const coreCapabilities = [
    {
      title: "Enterprise Software & ERP",
      desc: "Custom ERP, CRM, workforce management, operational dashboards, workflow systems, and business applications designed around your processes.",
      icon: Layers,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Artificial Intelligence & Automation",
      desc: "AI-powered assistants, intelligent workflows, conversational automation, document processing, and business decision-support solutions.",
      icon: Sparkles,
      color: "text-teal-600 bg-teal-50"
    },
    {
      title: "Mobile & Web Applications",
      desc: "Scalable mobile applications, enterprise web portals, SaaS products, marketplaces, and customer-facing digital experiences.",
      icon: Globe2,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "Industry-Specific Platforms",
      desc: "Purpose-built solutions for tourism, governance, manufacturing, healthcare, business discovery, and other specialized sectors.",
      icon: Building,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Digital Marketing & Business Growth",
      desc: "Search engine optimization, paid campaigns, social media management, online reputation management, and digital brand development.",
      icon: BarChart3,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Technology Consulting & Integration",
      desc: "Enterprise architecture, technology modernization, API integrations, cloud solutions, and digital transformation advisory.",
      icon: Cpu,
      color: "text-purple-600 bg-purple-50"
    }
  ];

  const nepCapabilities = [
    { title: "AI & Intelligent Automation", icon: Sparkles, desc: "Private LLM inference, autonomous bots, and cognitive data pipelines." },
    { title: "Enterprise Identity & Access (IAM)", icon: Lock, desc: "Granular RBAC, single sign-on, and verified citizen/worker KYC." },
    { title: "Multi-Tenant SaaS Architecture", icon: Layers, desc: "Strict database tenant isolation with dynamic white-labeling." },
    { title: "Workflow & Process Automation", icon: Workflow, desc: "Visual SLA-governed task routers and event-driven state engines." },
    { title: "Payment & Subscription Infra", icon: CreditCard, desc: "UPI, BBPS, recurring billing, escrow splits, and automated GST e-invoices." },
    { title: "Data Analytics & Reporting", icon: BarChart3, desc: "Real-time stream aggregation, executive KPI walls, and PDF reports." },
    { title: "API Integration & Interoperability", icon: Zap, desc: "High-throughput REST/GraphQL gateways and government API adapters." },
    { title: "Cloud Infrastructure & Monitoring", icon: Cloud, desc: "Multi-region redundant Kubernetes clusters with automated failover." },
    { title: "Mobile & Web Application Frameworks", icon: Globe2, desc: "Standardized lightweight frontend micro-frontends and offline SQLite sync." },
    { title: "Enterprise Security & Compliance", icon: ShieldCheck, desc: "AES-256 encryption at rest, ISO/IEC standards, and sovereign data residency." }
  ];

  const whyChooseUsPillars = [
    {
      title: "Established Experience",
      desc: "A business journey built on continuous evolution and real operational delivery experience across demanding sectors.",
      badge: "Since 2012*"
    },
    {
      title: "Software & Business Expertise",
      desc: "Development capabilities combined with deep empathy for unit economics, field realities, and commercial viability.",
      badge: "Full-Stack"
    },
    {
      title: "Industry-Specific Thinking",
      desc: "Architected around how businesses, civic bodies, and regional stakeholders actually work on the ground.",
      badge: "Domain-Tuned"
    },
    {
      title: "AI-Ready Approach",
      desc: "Pragmatic, value-first opportunities for intelligent automation, data modeling, and AI-enabled decision support.",
      badge: "Generative AI"
    },
    {
      title: "Flexible Engagement Models",
      desc: "Custom turnkey builds, SaaS subscriptions, government PPP deployments, and ongoing technology partnerships.",
      badge: "Adaptive"
    },
    {
      title: "Long-Term Technology Partnership",
      desc: "Maintainable clean codebases, continuous engineering support, and enduring technology collaboration.",
      badge: "Enduring"
    }
  ];

  const industryIcons = {
    "government-public-administration": Landmark,
    "tourism-hospitality-destinations": Compass,
    "manufacturing-industrial": Factory,
    "healthcare-wellness": HeartPulse,
    "retail-msme-business": ShoppingBag,
    "transportation-logistics": Truck,
    "political-public-engagement": Users2,
    "education-professional-services": GraduationCap
  };

  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title="Bizwoke Nova | Enterprise Software, AI Solutions & Digital Transformation"
        description="Bizwoke Nova builds enterprise software, AI-powered digital platforms, mobile apps, ERP solutions and digital growth services for businesses and institutions across India."
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F6F8FB] to-[#F6F8FB] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10233F08_1px,transparent_1px),linear-gradient(to_bottom,#10233F08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/80 border border-orange-200/80 text-xs font-bold tracking-widest text-[#F27A24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#F27A24] animate-pulse" />
              <span>Awakening Your Success • Enterprise Technology • AI Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F294A] tracking-tight leading-[1.08]">
              Building Digital Infrastructure <br className="hidden sm:inline" />
              <span className="text-[#F27A24]">for a Smarter India.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-700 max-w-3xl mx-auto">
              Technology that connects businesses, empowers institutions, and accelerates growth.
            </p>

            {/* Body */}
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At Bizwoke Nova™, we design, develop, and deliver enterprise software, AI-powered platforms, mobile applications, and digital transformation solutions for businesses, government organizations, institutions, and growing enterprises. From custom technology solutions to specialized digital platforms, we help organizations modernize operations, improve efficiency, and unlock new growth opportunities.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/platforms/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-[#0F294A] hover:bg-[#F27A24] rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <span>Explore Our Platforms</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact/?type=project"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-[#0F294A] bg-white hover:bg-orange-50/60 border border-slate-300 hover:border-orange-200 rounded-xl shadow-sm transition-all"
              >
                Discuss Your Project
              </Link>
            </div>

            {/* Three Foundation Metrics Pill */}
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm text-center">
                <div className="text-2xl font-extrabold text-[#0F294A]">One Portfolio</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Mission FTC™ Strategy</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-orange-200 bg-gradient-to-b from-white to-orange-50/30 shadow-sm text-center">
                <div className="text-2xl font-extrabold text-[#F27A24]">12 Platforms</div>
                <div className="text-xs text-slate-600 font-semibold mt-0.5">Specialized Digital Solutions</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm text-center">
                <div className="text-2xl font-extrabold text-[#17A6A1]">One Foundation</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">NKTech Enterprise Platform™</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT BIZWOKE NOVA */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#246BCE]">
                <span>About Bizwoke Nova</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
                Technology Expertise. Business Understanding. Long-Term Vision.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Established in 2012*, Bizwoke Nova has grown from a digital services business into an enterprise technology company focused on solving real-world business and operational challenges. Our expertise combines software development, mobile applications, enterprise systems, artificial intelligence, digital marketing, and industry-specific technology platforms.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We serve organizations seeking more than software delivery. We help them build practical technology solutions that improve operations, connect stakeholders, and support sustainable growth.
              </p>

              <div className="p-5 rounded-xl bg-[#F6F8FB] border-l-4 border-[#246BCE] space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Our Purpose
                </span>
                <p className="text-base font-semibold text-[#10233F]">
                  To make advanced digital technology accessible, useful, and commercially valuable for businesses and institutions.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about-us/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#246BCE] hover:text-[#10233F] transition-colors"
                >
                  <span>More About Bizwoke Nova</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-slate-400 mt-2 italic">
                  *Founding timeline claim pending company archive verification before print publication.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#10233F] rounded-2xl p-8 text-white space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-[#246BCE]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
                    Corporate Brand Positioning
                  </span>
                  <h3 className="text-2xl font-bold">Enterprise Architectural Rigor</h3>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#17A6A1] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Clean Separation:</strong> Owned digital products maintained distinct from bespoke client service engagements.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#17A6A1] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Unified Core:</strong> Shared NEP security, IAM, and AI layers eliminate repetitive development bloat.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#17A6A1] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Sovereign Focus:</strong> Technology engineered natively for Indian compliance, scale, and multi-lingual accessibility.
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Architecture: Option A</span>
                  <span className="text-white font-medium">Bizwoke Nova™ Primary Brand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Enterprise Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Full-Spectrum Technology & Transformation
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              End-to-end engineering, intelligent automation, and specialized digital platform capabilities to solve high-friction operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} transition-transform group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#10233F] group-hover:text-[#246BCE] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to="/services/"
                      className="text-xs font-bold text-[#246BCE] hover:text-[#10233F] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Capability Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED DIGITAL PLATFORMS */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
                Our Digital Platforms
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
                Purpose-Built Platforms. Real-World Business Solutions.
              </h2>
              <p className="text-base text-slate-600">
                Our portfolio brings together specialized digital platforms designed to address operational, commercial, and institutional challenges across different sectors. Each platform focuses on a distinct market opportunity while benefiting from a shared technology vision.
              </p>
            </div>
            <Link
              to="/platforms/"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shrink-0 transition-colors"
            >
              <span>View All 12 Platforms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlatforms.map((platform) => (
              <div
                key={platform.id}
                className="bg-[#F6F8FB] rounded-2xl p-7 border border-slate-200/90 hover:border-[#246BCE]/40 hover:bg-white shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-400 tracking-wider">
                      {platform.id}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      platform.maturityStatus === 'Live'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : platform.maturityStatus === 'Pilot'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : platform.maturityStatus === 'Early Access'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {platform.maturityStatus}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#10233F] group-hover:text-[#246BCE] transition-colors">
                      {platform.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#17A6A1] mt-0.5">
                      {platform.categoryLabel}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-slate-700 italic">
                    "{platform.tagline}"
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {platform.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <Link
                    to={platform.route}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#10233F] bg-white group-hover:bg-[#10233F] group-hover:text-white rounded-lg border border-slate-200/80 transition-all shadow-sm"
                  >
                    <span>Explore Platform</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/platforms/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#246BCE] hover:text-[#10233F] transition-colors"
            >
              <span>Explore All 12 Specialized Digital Platforms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY FOUNDATION — NEP */}
      <section className="py-20 bg-[#10233F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162f55] border border-[#246BCE]/40 text-xs font-bold text-[#17A6A1] uppercase tracking-wider">
              <span>Technology Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              One Technology Foundation. <br />
              <span className="text-[#246BCE]">Multiple Digital Platforms.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Our long-term technology architecture is built around the <strong className="text-white">NKTech Enterprise Platform™ (NEP)</strong>, a shared foundation designed to support multiple enterprise applications and industry-specific platforms. By standardizing essential technology capabilities, we aim to accelerate development, reduce duplication, strengthen security, and support sustainable product growth.
            </p>
          </div>

          {/* 10 NEP Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {nepCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#162f55]/80 hover:bg-[#1d3e70] p-5 rounded-xl border border-slate-700/60 transition-all space-y-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#246BCE]/20 flex items-center justify-center text-[#17A6A1] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-700/80">
            <div className="text-xs text-slate-400">
              Shared Enterprise Capabilities • AI Layer • Multi-Tenant SaaS • Sovereign Cloud Ready
            </div>
            <Link
              to="/technology/"
              className="px-6 py-3 text-sm font-bold text-white bg-[#246BCE] hover:bg-[#1f5cb0] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Our Technology (NEP)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Industry Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Technology Designed Around Industry Needs.
            </h2>
            <p className="text-base text-slate-600">
              We engineer sector-specific digital architectures tailored to operational realities, stakeholder workflows, and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS_DATA.map((industry) => {
              const Icon = industryIcons[industry.slug] || Building;
              return (
                <Link
                  key={industry.id}
                  to={`/solutions/${industry.slug}/`}
                  className="bg-[#F6F8FB] hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#246BCE]/40 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#246BCE] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#10233F] group-hover:text-[#246BCE] transition-colors leading-snug">
                      {industry.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {industry.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#246BCE]">
                    <span>View Solution Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Why Choose Bizwoke Nova
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Built on Experience. Driven by Innovation.
            </h2>
            <p className="text-base text-slate-600">
              An enterprise engineering partner that brings combined domain depth, modern software architectures, and commercial accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#17A6A1] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {pillar.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#10233F]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MISSION FTC STRATEGY SECTION */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#10233F] to-[#162f55] rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#246BCE]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#17A6A1] uppercase tracking-wider">
                <span>Our Corporate Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Mission FTC™
              </h2>
              <div className="text-xl font-semibold text-[#17A6A1]">
                One Portfolio. Many Platforms. One Technology Foundation.
              </div>
              <p className="text-base text-slate-200 leading-relaxed">
                Mission FTC™ is our long-term strategic initiative to build a diversified portfolio of enterprise technology platforms and digital infrastructure solutions. Our ambition is to create valuable, scalable technology businesses that solve important problems across India's economy while developing the capabilities to serve international markets. Through shared technology, disciplined execution, and strategic partnerships, we aim to build an enduring enterprise technology ecosystem.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about-us/#vision"
                  className="px-6 py-3 text-sm font-bold text-[#10233F] bg-white hover:bg-slate-100 rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <span>Discover Our Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/partners/"
                  className="px-6 py-3 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
                >
                  Explore Strategic Partnerships
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WORK WITH US */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm text-center max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Work With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Your Business Challenge. Our Technology Expertise.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you need custom enterprise software, an AI automation solution, a mobile application, or a long-term digital transformation partner, our team can help you evaluate the right approach.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact/?type=consultation"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact/?type=proposal"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-[#10233F] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-16 bg-[#10233F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's Build What's Next.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas, operations, and business opportunities with practical technology solutions.
          </p>
          <div className="pt-2 text-sm font-bold text-[#17A6A1] uppercase tracking-wider">
            Bizwoke Nova™ — Building India's Digital Future.
          </div>
        </div>
      </section>
    </div>
  );
}
