import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
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
  Terminal
} from 'lucide-react';

export default function Technology() {
  const nepModules = [
    {
      title: "AI & Intelligent Automation",
      icon: Sparkles,
      color: "text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20",
      desc: "Private multi-modal LLM inference pipelines, automated prompt grounding against private enterprise vectors, document parsing (IDP), and autonomous agent routers."
    },
    {
      title: "Enterprise Identity & Access Management (IAM)",
      icon: Lock,
      color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20",
      desc: "Fine-grained Role-Based Access Control (RBAC), multi-factor authentication (MFA), SAML/SSO federation, and integration with national citizen KYC registries."
    },
    {
      title: "Multi-Tenant SaaS Architecture",
      icon: Layers,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20",
      desc: "Cryptographically partitioned tenant schemas, automated schema migrations, resource quota governors, and dynamic white-label branding engines."
    },
    {
      title: "Workflow & Business Process Automation",
      icon: Workflow,
      color: "text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-500/20",
      desc: "Event-driven workflow engines supporting complex human-in-the-loop approvals, statutory SLA timers, and automated webhook triggers."
    },
    {
      title: "Payment & Subscription Infrastructure",
      icon: CreditCard,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20",
      desc: "High-volume UPI 2.0 integration, Bharat BillPay (BBPS), auto-debit subscriptions, multi-party escrow payouts, and automated GST e-invoicing compliance."
    },
    {
      title: "Data Analytics & Real-Time Reporting",
      icon: BarChart3,
      color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/20",
      desc: "Stream aggregation using Kafka/Redis, columnar warehouse storage, automated daily KPI digest generators, and executive audit logging."
    },
    {
      title: "API Integration & Interoperability",
      icon: Zap,
      color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20",
      desc: "High-throughput API gateway with automated rate-limiting, OpenAPI 3.0 documentation, and standardized microservice connectors."
    },
    {
      title: "Cloud Infrastructure & High Availability",
      icon: Cloud,
      color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/20",
      desc: "Automated Kubernetes orchestration across Tier-4 Indian datacenters with 99.9% uptime SLA, DDoS protection, and continuous automated backups."
    },
    {
      title: "Mobile & Web Application Frameworks",
      icon: Globe2,
      color: "text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/20",
      desc: "Reusable component libraries, offline-first SQLite synchronization, and progressive web application (PWA) frameworks."
    },
    {
      title: "Enterprise Security & Compliance",
      icon: ShieldCheck,
      color: "text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/20",
      desc: "AES-256 encryption at rest, TLS 1.3 in transit, strict PII anonymization, automated vulnerability scanning, and sovereign data residency."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title="NKTech Enterprise Platform™ (NEP) | Shared Technology Foundation — Bizwoke Nova"
        description="Discover the NKTech Enterprise Platform (NEP) shared architecture powering all 12 Bizwoke Nova digital platforms with standardized AI, security, and cloud scalability."
      />

      {/* Hero */}
      <section className="bg-[#0A1C33] text-white pt-16 pb-20 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-[#F27A24]/40 text-xs font-bold text-[#F27A24] uppercase tracking-wider">
                <span>SHARED TECHNOLOGY FOUNDATION</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                NKTech Enterprise Platform™ <br />
                <span className="text-[#F27A24]">(NEP Architecture)</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200">
                One Technology Foundation. Multiple Digital Platforms.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                Our long-term technology architecture is built around the <strong className="text-white">NKTech Enterprise Platform™ (NEP)</strong>, a shared foundation designed to support multiple enterprise applications and industry-specific platforms. By standardizing essential technology capabilities, we accelerate development, reduce duplication, strengthen security, and support sustainable product growth.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/platforms/"
                  className="px-8 py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-lg transition-all inline-flex items-center gap-2 group"
                >
                  <span>Explore Platforms Built on NEP</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                >
                  Explore 10 Capabilities
                </a>
              </div>
            </div>

            {/* Authentic NKTech Logo & Profile Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#0F294A] rounded-2xl p-7 border border-slate-700/80 shadow-2xl text-center space-y-5">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-white p-2 shadow-inner border border-slate-200 flex items-center justify-center">
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
                  <h3 className="text-xl font-bold text-white">NKTech Platform™</h3>
                  <p className="text-xs text-[#F27A24] font-semibold mt-0.5">Core Foundation Engine</p>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed text-left space-y-2 pt-2 border-t border-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Architecture:</span>
                    <span className="font-semibold text-white">Cloud-Native Microservices</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Data Sovereignty:</span>
                    <span className="font-semibold text-white">India-Based Tier-4 DCs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Platforms Powered:</span>
                    <span className="font-semibold text-[#F27A24]">All 12 Portfolio Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 NEP Capabilities Grid */}
      <section id="capabilities" className="py-20 bg-white dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Shared Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              The 10 Core Architectural Capabilities of NEP
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Every digital platform deployed by Bizwoke Nova inherits these battle-tested enterprise capabilities, eliminating technical fragmentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nepModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/40 hover:bg-white dark:hover:bg-[#143761] shadow-sm hover:shadow-md transition-all flex items-start gap-5 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mod.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#F27A24]">0{idx + 1}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <h3 className="text-xl font-black text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Engineering Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Architectural & Security Standards
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Enterprise technology built for mission-critical reliability, government auditing, and strict data confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#0F294A] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#0D9488]" />
              <h3 className="text-lg font-bold text-[#0F294A] dark:text-white">Zero-Trust Security Architecture</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Every API call, database query, and admin access requires strict cryptographic validation. No implicit network trust.
              </p>
            </div>
            <div className="bg-white dark:bg-[#0F294A] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-3">
              <Database className="w-8 h-8 text-[#F27A24]" />
              <h3 className="text-lg font-bold text-[#0F294A] dark:text-white">Sovereign Indian Data Residency</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                All production customer data resides strictly within MeitY-empanelled Tier-4 cloud datacenters in India, adhering to DPDP regulations.
              </p>
            </div>
            <div className="bg-white dark:bg-[#0F294A] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-3">
              <Cpu className="w-8 h-8 text-blue-500" />
              <h3 className="text-lg font-bold text-[#0F294A] dark:text-white">High-Concurrency Fault Tolerance</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Auto-scaling container pods designed to absorb massive traffic spikes during festival darshan bookings or election results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section id="security" className="py-20 bg-white dark:bg-[#081528]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
            Enterprise Integration
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
            Flexible Deployment Architectures
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            NEP can be consumed as a managed multi-tenant cloud service, deployed within your private corporate VPC (AWS/GCP/Azure), or installed on air-gapped government infrastructure.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/?type=tech"
              className="px-8 py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center gap-2 group"
            >
              <span>Request Technical Architecture Whitepaper</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/partners/"
              className="px-8 py-3.5 text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200 dark:border-slate-700 rounded-xl transition-colors"
            >
              Technology Partner Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}