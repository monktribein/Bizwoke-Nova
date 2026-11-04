import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { fadeUp, staggerContainer } from '../utils/motion';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  Workflow,
  BarChart3,
  CreditCard,
  Cloud,
  Globe2,
  Zap,
  Database
} from 'lucide-react';

/* Fonts: Bricolage Grotesque (display) + Instrument Sans (body).
   If you prefer, move this @import into index.html / index.css. */
const fontCss = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap');
.nep-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.nep-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
.nep-grid {
  background-image:
    linear-gradient(to right, rgba(15,41,74,.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(15,41,74,.07) 1px, transparent 1px);
  background-size: 44px 44px;
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, transparent 85%);
          mask-image: linear-gradient(to bottom, #000 0%, transparent 85%);
}
.dark .nep-grid {
  background-image:
    linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px);
}
`;

/* One tone per category so the list reads at a glance */
const tones = {
  core: 'text-[#1E5086] dark:text-blue-300',
  intelligence: 'text-[#D9660F] dark:text-orange-400',
  security: 'text-[#0D9488] dark:text-teal-400'
};

export default function Technology() {
  const [activeTab, setActiveTab] = useState('all');

  const nepModules = [
    {
      id: "01",
      category: "intelligence",
      title: "AI & Intelligent Automation",
      icon: Sparkles,
      desc: "Private multi-modal LLM inference pipelines, automated prompt grounding against private enterprise vectors, document parsing (IDP), and autonomous agent routers."
    },
    {
      id: "02",
      category: "security",
      title: "Enterprise Identity & Access Management (IAM)",
      icon: Lock,
      desc: "Fine-grained Role-Based Access Control (RBAC), multi-factor authentication (MFA), SAML/SSO federation, and integration with national citizen KYC registries."
    },
    {
      id: "03",
      category: "core",
      title: "Multi-Tenant SaaS Architecture",
      icon: Layers,
      desc: "Cryptographically partitioned tenant schemas, automated schema migrations, resource quota governors, and dynamic white-label branding engines."
    },
    {
      id: "04",
      category: "core",
      title: "Workflow & Business Process Automation",
      icon: Workflow,
      desc: "Event-driven workflow engines supporting complex human-in-the-loop approvals, statutory SLA timers, and automated webhook triggers."
    },
    {
      id: "05",
      category: "core",
      title: "Payment & Subscription Infrastructure",
      icon: CreditCard,
      desc: "High-volume UPI 2.0 integration, Bharat BillPay (BBPS), auto-debit subscriptions, multi-party escrow payouts, and automated GST e-invoicing compliance."
    },
    {
      id: "06",
      category: "intelligence",
      title: "Data Analytics & Real-Time Reporting",
      icon: BarChart3,
      desc: "Stream aggregation using Kafka/Redis, columnar warehouse storage, automated daily KPI digest generators, and executive audit logging."
    },
    {
      id: "07",
      category: "core",
      title: "API Integration & Interoperability",
      icon: Zap,
      desc: "High-throughput API gateway with automated rate-limiting, OpenAPI 3.0 documentation, and standardized microservice connectors."
    },
    {
      id: "08",
      category: "security",
      title: "Cloud Infrastructure & High Availability",
      icon: Cloud,
      desc: "Automated Kubernetes orchestration across Tier-4 Indian datacenters with 99.9% uptime SLA, DDoS protection, and continuous automated backups."
    },
    {
      id: "09",
      category: "core",
      title: "Mobile & Web Application Frameworks",
      icon: Globe2,
      desc: "Reusable component libraries, offline-first SQLite synchronization, and progressive web application (PWA) frameworks."
    },
    {
      id: "10",
      category: "security",
      title: "Enterprise Security & Compliance",
      icon: ShieldCheck,
      desc: "AES-256 encryption at rest, TLS 1.3 in transit, strict PII anonymization, automated vulnerability scanning, and sovereign data residency."
    }
  ];

  const tabs = [
    { id: 'all', label: 'All 10 Modules' },
    { id: 'core', label: 'Core Engines' },
    { id: 'intelligence', label: 'AI & Data' },
    { id: 'security', label: 'Security & Cloud' }
  ];

  const countFor = (id) =>
    id === 'all' ? nepModules.length : nepModules.filter((m) => m.category === id).length;

  const filteredModules =
    activeTab === 'all' ? nepModules : nepModules.filter((m) => m.category === activeTab);

  const architectureLayers = [
    {
      layer: "Tier 3: Platform Application Layer",
      subtitle: "12 Specialized Digital Platforms",
      badge: "Commercial & Public Solutions",
      dot: "bg-[#F27A24]",
      band: "bg-orange-50/60 dark:bg-orange-500/[0.06]",
      items: ["Tirvona™ (Pilgrim Hub)", "BharatBN™ (B2B Trade)", "BizORM™ (CX Reputation)", "Pravixo™ (Creator Commerce)", "8 Other Vertical Portals"]
    },
    {
      layer: "Tier 2: NKTech Platform Core (NEP)",
      subtitle: "Unified Shared Enterprise Engines",
      badge: "Shared Foundation Core",
      dot: "bg-[#1E5086] dark:bg-blue-400",
      band: "bg-blue-50/70 dark:bg-blue-500/[0.07]",
      items: ["Private LLM Inference Engine", "RBAC & Multi-Tenant IAM", "UPI / BBPS Payments Escrow", "Dynamic Workflow State Machine", "Event Streaming & Analytics"]
    },
    {
      layer: "Tier 1: Sovereign Cloud & Security Layer",
      subtitle: "Mission-Critical Infrastructure & Zero Trust",
      badge: "Infrastructure & Sovereignty",
      dot: "bg-[#0D9488]",
      band: "bg-teal-50/70 dark:bg-teal-500/[0.07]",
      items: ["MeitY Tier-4 Cloud Datacenters", "Zero-Trust TLS 1.3 Enclave", "AES-256 Cryptographic Vault", "DPDP 2023 Compliance", "Auto-Scaling Kubernetes"]
    }
  ];

  const telemetryStats = [
    { label: "Core Modules", value: "10", detail: "Standardized Engines" },
    { label: "Platforms Powered", value: "12", detail: "Active Mission FTC™" },
    { label: "High Availability", value: "99.9%", detail: "Enterprise Uptime SLA" },
    { label: "Data Residency", value: "India", detail: "Tier-4 Sovereign DCs" }
  ];

  const standards = [
    {
      icon: ShieldCheck,
      title: "Zero-Trust Security Architecture",
      text: "Every API call, database query, and admin access requires strict cryptographic validation. No implicit network trust.",
      tone: "text-[#0D9488] dark:text-teal-400"
    },
    {
      icon: Database,
      title: "Sovereign Indian Data Residency",
      text: "All production customer data resides strictly within MeitY-empanelled Tier-4 cloud datacenters in India, adhering to DPDP regulations.",
      tone: "text-[#D9660F] dark:text-orange-400"
    },
    {
      icon: Cpu,
      title: "High-Concurrency Fault Tolerance",
      text: "Auto-scaling container pods designed to absorb massive traffic spikes during festival darshan bookings or high-volume flash sales.",
      tone: "text-[#1E5086] dark:text-blue-300"
    }
  ];

  const specRows = [
    { k: "Architecture:", v: "Cloud-Native Microservices" },
    { k: "Data Sovereignty:", v: "Tier-4 Sovereign Indian DCs" },
    { k: "Platforms Powered:", v: "All 12 Portfolio Products", accent: true }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="nep-body bg-[#F6F8FB] dark:bg-[#071526] text-[#0F294A] dark:text-slate-100 min-h-screen overflow-x-hidden">
        <style>{fontCss}</style>

        <SEOHead
          title="NKTech Enterprise Platform™ (NEP) | Shared Technology Foundation — Bizwoke Nova"
          description="Discover the NKTech Enterprise Platform (NEP) shared architecture powering all 12 Bizwoke Nova digital platforms with standardized AI, security, and cloud scalability."
        />

        {/* ================= HERO ================= */}
        <section className="relative bg-white dark:bg-[#0A1C33] border-b border-slate-200 dark:border-slate-800">
          <div className="nep-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <motion.div
                variants={staggerContainer(0.1, 0.05)}
                initial="hidden"
                animate="visible"
                className="lg:col-span-7 xl:col-span-8"
              >
                <motion.h1
                  variants={fadeUp}
                  className="nep-display font-extrabold tracking-[-0.03em] leading-[1.02] text-4xl sm:text-6xl lg:text-[4.5rem] text-[#0F294A] dark:text-white"
                >
                  NKTech Enterprise Platform™
                  <span className="block font-medium text-slate-400 dark:text-slate-500 mt-1">
                    (NEP Architecture)
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="nep-display mt-6 text-xl sm:text-2xl font-bold text-[#1E5086] dark:text-blue-300"
                >
                  One Technology Foundation. Multiple Digital Platforms.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-[1.7] max-w-[62ch]"
                >
                  Our long-term technology architecture is built around the{' '}
                  <strong className="font-semibold text-[#0F294A] dark:text-white">
                    NKTech Enterprise Platform™ (NEP)
                  </strong>
                  , a shared foundation designed to support multiple enterprise applications and industry-specific platforms. By standardizing essential capabilities, we accelerate time-to-market, eliminate code duplication, enforce zero-trust security, and ensure unified enterprise scalability.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Link
                    to="/platforms/"
                    className="group inline-flex items-center gap-2 rounded-lg bg-[#F27A24] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_1px_0_rgba(0,0,0,.1)] transition-colors hover:bg-[#DE6713] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F27A24]"
                  >
                    Explore Platforms Built on NEP
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="#capabilities"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F294A] dark:text-white underline decoration-slate-300 dark:decoration-slate-600 underline-offset-[6px] transition-colors hover:decoration-[#F27A24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F27A24]"
                  >
                    View 10 Modules
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Spec sheet */}
              <motion.aside
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="lg:col-span-5 xl:col-span-4"
              >
                <div className="rounded-xl bg-white dark:bg-[#0F294A] border border-slate-300/80 dark:border-slate-600/60 shadow-[0_18px_40px_-24px_rgba(15,41,74,.35)]">
                  <div className="flex items-center gap-4 p-5 border-b border-slate-200 dark:border-slate-700/70">
                    <div className="w-16 h-16 shrink-0 rounded-lg bg-white border border-slate-200 dark:border-slate-600 p-1.5 flex items-center justify-center">
                      <img
                        src="/assets/nktech-logo.jpg"
                        alt="NKTech Enterprise Platform Official Mark"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="nep-display text-xl font-bold leading-tight text-[#0F294A] dark:text-white">
                        NKTech Platform™
                      </h3>
                      <p className="text-sm font-medium text-[#D9660F] dark:text-orange-400">
                        Core Foundation Engine
                      </p>
                    </div>
                  </div>

                  <dl className="px-5 text-sm">
                    {specRows.map((r) => (
                      <div
                        key={r.k}
                        className="flex items-baseline justify-between gap-4 py-3 border-b border-dashed border-slate-200 dark:border-slate-700/70"
                      >
                        <dt className="text-slate-500 dark:text-slate-400">{r.k}</dt>
                        <dd
                          className={`text-right font-semibold ${
                            r.accent ? 'text-[#D9660F] dark:text-orange-400' : 'text-[#0F294A] dark:text-white'
                          }`}
                        >
                          {r.v}
                        </dd>
                      </div>
                    ))}
                    <div className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-slate-500 dark:text-slate-400">Status:</dt>
                      <dd className="inline-flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Live & Operational
                      </dd>
                    </div>
                  </dl>
                </div>
              </motion.aside>
            </div>

            {/* Stats: one ruled strip, no cards */}
            <motion.dl
              variants={staggerContainer(0.07, 0.35)}
              initial="hidden"
              animate="visible"
              className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-slate-200 dark:border-slate-700/70"
            >
              {telemetryStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className={`py-6 sm:py-8 pr-4 ${
                    idx % 2 === 1 ? 'pl-5 sm:pl-8' : ''
                  } ${idx > 0 ? 'lg:pl-8' : ''} ${
                    idx > 0 ? 'lg:border-l border-slate-200 dark:border-slate-700/70' : ''
                  } ${idx % 2 === 1 ? 'border-l border-slate-200 dark:border-slate-700/70 lg:border-l' : ''} ${
                    idx >= 2 ? 'border-t lg:border-t-0 border-slate-200 dark:border-slate-700/70' : ''
                  }`}
                >
                  <dd className="nep-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F294A] dark:text-white order-1">
                    {stat.value}
                  </dd>
                  <dt className="mt-1.5 text-sm font-semibold text-[#0F294A] dark:text-slate-200">
                    {stat.label}
                  </dt>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{stat.detail}</p>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </section>

        {/* ================= ARCHITECTURE STACK ================= */}
        <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#D9660F] dark:text-orange-400">ENTERPRISE BLUEPRINT</p>
              <h2 className="nep-display mt-2 text-3xl sm:text-5xl font-extrabold tracking-[-0.025em] leading-[1.05] text-[#0F294A] dark:text-white">
                The 3-Tier NEP Architecture Stack
              </h2>
              <p className="mt-4 text-[15px] sm:text-base leading-[1.7] text-slate-600 dark:text-slate-300 max-w-[58ch]">
                Clear domain separation between foundational infrastructure, shared enterprise core engines, and customer-facing digital applications.
              </p>
            </div>

            {/* Layers share one vertical spine, so the stack reads as a single system */}
            <div className="relative mt-12 sm:mt-14 pl-6 sm:pl-10">
              <div className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-px bg-slate-300 dark:bg-slate-700" aria-hidden="true" />

              <ol className="space-y-4">
                {architectureLayers.map((layer) => (
                  <li key={layer.layer} className="relative">
                    <span
                      className={`absolute -left-6 sm:-left-10 top-8 h-[15px] w-[15px] sm:h-[23px] sm:w-[23px] rounded-full border-[3px] border-[#F6F8FB] dark:border-[#071526] ${layer.dot}`}
                      aria-hidden="true"
                    />
                    <div
                      className={`grid lg:grid-cols-[19rem_1fr] gap-6 lg:gap-10 rounded-lg border border-slate-200 dark:border-slate-700/60 p-6 sm:p-8 ${layer.band}`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{layer.badge}</p>
                        <h3 className="nep-display mt-1 text-xl sm:text-2xl font-bold leading-snug text-[#0F294A] dark:text-white">
                          {layer.layer}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{layer.subtitle}</p>
                      </div>

                      <ul className="flex flex-wrap content-start gap-2.5">
                        {layer.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-md border border-slate-200 dark:border-slate-600/70 bg-white dark:bg-[#0F294A] px-3.5 py-2 text-sm font-medium text-[#0F294A] dark:text-slate-100"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ================= CAPABILITIES ================= */}
        <section
          id="capabilities"
          className="py-16 sm:py-24 bg-white dark:bg-[#0A1C33] border-b border-slate-200 dark:border-slate-800 scroll-mt-4"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[22rem_1fr] gap-10 lg:gap-16">
            {/* Sticky intro + filter */}
            <div className="lg:sticky lg:top-24 self-start">
              <p className="text-sm font-semibold text-[#D9660F] dark:text-orange-400">SHARED CAPABILITIES</p>
              <h2 className="nep-display mt-2 text-3xl sm:text-5xl font-extrabold tracking-[-0.025em] leading-[1.05] text-[#0F294A] dark:text-white">
                The 10 Core Architectural Capabilities
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600 dark:text-slate-300">
                Every digital platform deployed by Bizwoke Nova inherits these battle-tested enterprise capabilities, eliminating technical fragmentation.
              </p>

              <div role="tablist" aria-label="Filter modules" className="mt-8 flex lg:flex-col gap-1 overflow-x-auto -mx-1 px-1 pb-1">
                {tabs.map((tab) => {
                  const on = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={on}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex shrink-0 items-center justify-between gap-6 rounded-md px-4 py-2.5 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F27A24] ${
                        on
                          ? 'bg-[#0F294A] text-white dark:bg-white/10'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-xs tabular-nums ${on ? 'text-orange-300' : 'text-slate-400'}`}>
                        {countFor(tab.id)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Module list: rows divided by rules */}
            <motion.ul
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="border-t border-slate-300 dark:border-slate-700"
            >
              {filteredModules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <li
                    key={mod.id}
                    className="group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr] gap-x-4 sm:gap-x-6 py-7 border-b border-slate-200 dark:border-slate-700/70"
                  >
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 mt-0.5 ${tones[mod.category]}`} strokeWidth={1.6} />
                    <div>
                      <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">Module {mod.id}</p>
                      <h3 className="nep-display mt-0.5 text-xl sm:text-2xl font-bold leading-snug text-[#0F294A] dark:text-white transition-colors group-hover:text-[#D9660F] dark:group-hover:text-orange-400">
                        {mod.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.7] text-slate-600 dark:text-slate-300 max-w-[62ch]">
                        {mod.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        {/* ================= STANDARDS ================= */}
        <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#D9660F] dark:text-orange-400">ENGINEERING DISCIPLINE</p>
              <h2 className="nep-display mt-2 text-3xl sm:text-5xl font-extrabold tracking-[-0.025em] leading-[1.05] text-[#0F294A] dark:text-white">
                Architectural & Security Standards
              </h2>
              <p className="mt-4 text-[15px] sm:text-base leading-[1.7] text-slate-600 dark:text-slate-300 max-w-[58ch]">
                Enterprise technology engineered for mission-critical reliability, government auditing, and strict data confidentiality.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 border-t border-slate-300 dark:border-slate-700">
              {standards.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article
                    key={s.title}
                    className={`py-8 md:py-10 ${
                      i > 0 ? 'md:pl-8 lg:pl-10 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700/70' : ''
                    } ${i < 2 ? 'md:pr-8 lg:pr-10' : ''}`}
                  >
                    <Icon className={`w-7 h-7 ${s.tone}`} strokeWidth={1.6} />
                    <h3 className="nep-display mt-5 text-xl sm:text-2xl font-bold leading-snug text-[#0F294A] dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-slate-600 dark:text-slate-300">{s.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= DEPLOYMENT / CTA ================= */}
        <section id="security" className="bg-[#0F294A] text-white scroll-mt-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-end">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300">
                <Cloud className="w-4 h-4" strokeWidth={1.8} />
                ENTERPRISE INTEGRATION MODELS
              </p>
              <h2 className="nep-display mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.03]">
                Flexible Deployment Architectures
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-[1.7] text-blue-100/80 max-w-[58ch]">
                NEP can be consumed as a managed multi-tenant cloud service, deployed within your private corporate VPC (AWS/GCP/Azure), or installed on air-gapped sovereign government infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[19rem]">
              <Link
                to="/contact/?type=tech"
                className="group inline-flex items-center justify-between gap-3 rounded-lg bg-[#F27A24] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#DE6713] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request Technical Whitepaper
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/partners/"
                className="group inline-flex items-center justify-between gap-3 rounded-lg border border-white/25 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Technology Partner Program
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
