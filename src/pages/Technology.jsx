import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  cardVariant,
  viewportConfig
} from '../utils/motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
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
  Server,
  Database,
  Terminal,
  Activity,
  Code2,
  Box,
  Compass
} from 'lucide-react';

export default function Technology() {
  const [activeTab, setActiveTab] = useState('all');

  const nepModules = [
    {
      id: "01",
      category: "intelligence",
      title: "AI & Intelligent Automation",
      icon: Sparkles,
      color: "text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20",
      desc: "Private multi-modal LLM inference pipelines, automated prompt grounding against private enterprise vectors, document parsing (IDP), and autonomous agent routers."
    },
    {
      id: "02",
      category: "security",
      title: "Enterprise Identity & Access Management (IAM)",
      icon: Lock,
      color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20",
      desc: "Fine-grained Role-Based Access Control (RBAC), multi-factor authentication (MFA), SAML/SSO federation, and integration with national citizen KYC registries."
    },
    {
      id: "03",
      category: "core",
      title: "Multi-Tenant SaaS Architecture",
      icon: Layers,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20",
      desc: "Cryptographically partitioned tenant schemas, automated schema migrations, resource quota governors, and dynamic white-label branding engines."
    },
    {
      id: "04",
      category: "core",
      title: "Workflow & Business Process Automation",
      icon: Workflow,
      color: "text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-500/20",
      desc: "Event-driven workflow engines supporting complex human-in-the-loop approvals, statutory SLA timers, and automated webhook triggers."
    },
    {
      id: "05",
      category: "core",
      title: "Payment & Subscription Infrastructure",
      icon: CreditCard,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20",
      desc: "High-volume UPI 2.0 integration, Bharat BillPay (BBPS), auto-debit subscriptions, multi-party escrow payouts, and automated GST e-invoicing compliance."
    },
    {
      id: "06",
      category: "intelligence",
      title: "Data Analytics & Real-Time Reporting",
      icon: BarChart3,
      color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/20",
      desc: "Stream aggregation using Kafka/Redis, columnar warehouse storage, automated daily KPI digest generators, and executive audit logging."
    },
    {
      id: "07",
      category: "core",
      title: "API Integration & Interoperability",
      icon: Zap,
      color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20",
      desc: "High-throughput API gateway with automated rate-limiting, OpenAPI 3.0 documentation, and standardized microservice connectors."
    },
    {
      id: "08",
      category: "security",
      title: "Cloud Infrastructure & High Availability",
      icon: Cloud,
      color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/20",
      desc: "Automated Kubernetes orchestration across Tier-4 Indian datacenters with 99.9% uptime SLA, DDoS protection, and continuous automated backups."
    },
    {
      id: "09",
      category: "core",
      title: "Mobile & Web Application Frameworks",
      icon: Globe2,
      color: "text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/20",
      desc: "Reusable component libraries, offline-first SQLite synchronization, and progressive web application (PWA) frameworks."
    },
    {
      id: "10",
      category: "security",
      title: "Enterprise Security & Compliance",
      icon: ShieldCheck,
      color: "text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/20",
      desc: "AES-256 encryption at rest, TLS 1.3 in transit, strict PII anonymization, automated vulnerability scanning, and sovereign data residency."
    }
  ];

  const filteredModules = activeTab === 'all'
    ? nepModules
    : nepModules.filter(m => m.category === activeTab);

  const architectureLayers = [
    {
      layer: "Tier 3: Platform Application Layer",
      subtitle: "12 Specialized Digital Platforms",
      color: "border-orange-200 dark:border-orange-500/30 bg-orange-50/40 dark:bg-orange-500/5",
      badge: "Commercial & Public Solutions",
      items: ["Tirvona™ (Pilgrim Hub)", "BharatBN™ (B2B Trade)", "BizORM™ (CX Reputation)", "Pravixo™ (Creator Commerce)", "8 Other Vertical Portals"]
    },
    {
      layer: "Tier 2: NKTech Platform Core (NEP)",
      subtitle: "Unified Shared Enterprise Engines",
      color: "border-blue-200 dark:border-blue-500/30 bg-blue-50/40 dark:bg-blue-500/5",
      badge: "Shared Foundation Core",
      items: ["Private LLM Inference Engine", "RBAC & Multi-Tenant IAM", "UPI / BBPS Payments Escrow", "Dynamic Workflow State Machine", "Event Streaming & Analytics"]
    },
    {
      layer: "Tier 1: Sovereign Cloud & Security Layer",
      subtitle: "Mission-Critical Infrastructure & Zero Trust",
      color: "border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-500/5",
      badge: "Infrastructure & Sovereignty",
      items: ["MeitY Tier-4 Cloud Datacenters", "Zero-Trust TLS 1.3 Enclave", "AES-256 Cryptographic Vault", "DPDP 2023 Compliance", "Auto-Scaling Kubernetes"]
    }
  ];

  const telemetryStats = [
    { label: "Core Modules", value: "10", detail: "Standardized Engines" },
    { label: "Platforms Powered", value: "12", detail: "Active Mission FTC™" },
    { label: "High Availability", value: "99.9%", detail: "Enterprise Uptime SLA" },
    { label: "Data Residency", value: "India", detail: "Tier-4 Sovereign DCs" }
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200 overflow-x-hidden">
      <SEOHead
        title="NKTech Enterprise Platform™ (NEP) | Shared Technology Foundation — Bizwoke Nova"
        description="Discover the NKTech Enterprise Platform (NEP) shared architecture powering all 12 Bizwoke Nova digital platforms with standardized AI, security, and cloud scalability."
      />

      {/* =========================================================================
          SECTION 1: HERO WITH FRAMER MOTION ORCHESTRATION & NKTECH MARK
      ========================================================================= */}
      <section className="bg-white dark:bg-[#0A1C33] text-[#0F294A] dark:text-white pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
        {/* Clean enterprise background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/30 dark:from-[#071322] dark:via-[#0A1C33] dark:to-[#08172b] pointer-events-none" />

        {/* Ambient floating glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-24 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div
              variants={staggerContainer(0.12, 0.05)}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8 space-y-5"
            >
              

              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-[#0F294A] dark:text-white"
              >
                NKTech Enterprise Platform™ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27A24] via-orange-500 to-amber-500">
                  (NEP Architecture)
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg sm:text-2xl font-bold text-[#1E5086] dark:text-blue-300"
              >
                One Technology Foundation. Multiple Digital Platforms.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl"
              >
                Our long-term technology architecture is built around the <strong className="text-[#0F294A] dark:text-white">NKTech Enterprise Platform™ (NEP)</strong>, a shared foundation designed to support multiple enterprise applications and industry-specific platforms. By standardizing essential capabilities, we accelerate time-to-market, eliminate code duplication, enforce zero-trust security, and ensure unified enterprise scalability.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-3 flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/platforms/"
                    className="px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center gap-2 group"
                  >
                    <span>Explore Platforms Built on NEP</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="#capabilities"
                    className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-slate-700 rounded-xl transition-all inline-flex items-center gap-2"
                  >
                    <span>View 10 Modules</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Profile Card (NKTech Brand Architecture Badge) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="lg:col-span-4"
            >
              <div className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-3xl p-7 border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#F27A24]/40 transition-all text-center space-y-5">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-white p-2 shadow-xs border border-slate-200 dark:border-slate-700 flex items-center justify-center">
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
                  <h3 className="text-xl font-black text-[#0F294A] dark:text-white">NKTech Platform™</h3>
                  <p className="text-xs text-[#F27A24] font-bold mt-0.5">Core Foundation Engine</p>
                </div>

                {/* Specs Table */}
                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-left space-y-2.5 pt-3 border-t border-slate-200 dark:border-slate-700/60">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Architecture:</span>
                    <span className="font-bold text-[#0F294A] dark:text-white">Cloud-Native Microservices</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Data Sovereignty:</span>
                    <span className="font-bold text-[#0F294A] dark:text-white">Tier-4 Sovereign Indian DCs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Platforms Powered:</span>
                    <span className="font-black text-[#F27A24]">All 12 Portfolio Products</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Status:</span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live & Operational
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Staggered Telemetry Row */}
          <motion.div
            variants={staggerContainer(0.08, 0.25)}
            initial="hidden"
            animate="visible"
            className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
          >
            {telemetryStats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#0F294A]/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#F27A24]/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#F27A24] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 3-TIER ARCHITECTURAL BLUEPRINT (VISUAL INTERACTION)
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto space-y-2 mb-10 sm:mb-12"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              ENTERPRISE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight">
              The 3-Tier NEP Architecture Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Clear domain separation between foundational infrastructure, shared enterprise core engines, and customer-facing digital applications.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4 w-full"
          >
            {architectureLayers.map((layer, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-3xl p-6 sm:p-8 border ${layer.color} shadow-xs transition-all group relative`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200/60 dark:border-slate-700/60">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#F27A24]">
                      {layer.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F294A] dark:text-white mt-0.5">
                      {layer.layer}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {layer.subtitle}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {layer.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white dark:bg-[#0F294A] px-3.5 py-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700 text-xs font-bold text-[#0F294A] dark:text-slate-200 text-center shadow-2xs group-hover:border-slate-300 transition-colors truncate"
                      title={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 10 CORE ARCHITECTURAL CAPABILITIES WITH FILTER PILLS
      ========================================================================= */}
      <section id="capabilities" className="py-14 sm:py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                SHARED CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight">
                The 10 Core Architectural Capabilities
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Every digital platform deployed by Bizwoke Nova inherits these battle-tested enterprise capabilities, eliminating technical fragmentation.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All 10 Modules' },
                { id: 'core', label: 'Core Engines' },
                { id: 'intelligence', label: 'AI & Data' },
                { id: 'security', label: 'Security & Cloud' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    activeTab === tab.id
                      ? 'bg-[#0F294A] text-white border-[#0F294A] dark:bg-[#F27A24] dark:border-[#F27A24]'
                      : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {filteredModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.id}
                  layout
                  variants={cardVariant}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
                  className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/40 hover:bg-white dark:hover:bg-[#143761] shadow-xs hover:shadow-md transition-all flex items-start gap-4 sm:gap-5 group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${mod.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black text-[#F27A24] tracking-wider uppercase">
                        Module {mod.id}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] dark:text-teal-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors leading-snug">
                      {mod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ARCHITECTURAL & SECURITY STANDARDS (3 CORE PILLARS)
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-2"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              ENGINEERING DISCIPLINE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Architectural & Security Standards
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Enterprise technology engineered for mission-critical reliability, government auditing, and strict data confidentiality.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Standard 1 */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="bg-white dark:bg-[#0F294A] p-7 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#0D9488]/50 transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-[#0D9488] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#0D9488] transition-colors">
                Zero-Trust Security Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Every API call, database query, and admin access requires strict cryptographic validation. No implicit network trust.
              </p>
            </motion.div>

            {/* Standard 2 */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="bg-white dark:bg-[#0F294A] p-7 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#F27A24]/50 transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                Sovereign Indian Data Residency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                All production customer data resides strictly within MeitY-empanelled Tier-4 cloud datacenters in India, adhering to DPDP regulations.
              </p>
            </motion.div>

            {/* Standard 3 */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="bg-white dark:bg-[#0F294A] p-7 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-blue-500/50 transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                High-Concurrency Fault Tolerance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Auto-scaling container pods designed to absorb massive traffic spikes during festival darshan bookings or high-volume flash sales.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FLEXIBLE DEPLOYMENT ARCHITECTURES & CTA
      ========================================================================= */}
      <section id="security" className="py-16 sm:py-24 bg-white dark:bg-[#0A1C33] relative overflow-hidden">
        {/* Animated ambient gradient blob */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-5 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-4xl mx-auto space-y-6 text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-[#F27A24]/30 text-xs font-black text-[#F27A24] uppercase tracking-widest">
              <Cloud className="w-3.5 h-3.5" />
              <span>ENTERPRISE INTEGRATION MODELS</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight"
            >
              Flexible Deployment Architectures
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              NEP can be consumed as a managed multi-tenant cloud service, deployed within your private corporate VPC (AWS/GCP/Azure), or installed on air-gapped sovereign government infrastructure.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact/?type=tech"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2 group"
                >
                  <span>Request Technical Whitepaper</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/partners/"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Technology Partner Program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
