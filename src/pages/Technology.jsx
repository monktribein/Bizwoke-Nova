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
      color: "text-teal-600 bg-teal-50",
      desc: "Private multi-modal LLM inference pipelines, automated prompt grounding against private enterprise vectors, document parsing (IDP), and autonomous agent routers."
    },
    {
      title: "Enterprise Identity & Access Management (IAM)",
      icon: Lock,
      color: "text-blue-600 bg-blue-50",
      desc: "Fine-grained Role-Based Access Control (RBAC), multi-factor authentication (MFA), SAML/SSO federation, and integration with national citizen KYC registries."
    },
    {
      title: "Multi-Tenant SaaS Architecture",
      icon: Layers,
      color: "text-indigo-600 bg-indigo-50",
      desc: "Cryptographically partitioned tenant schemas, automated schema migrations, resource quota governors, and dynamic white-label branding engines."
    },
    {
      title: "Workflow & Business Process Automation",
      icon: Workflow,
      color: "text-purple-600 bg-purple-50",
      desc: "Event-driven workflow engines supporting complex human-in-the-loop approvals, statutory SLA timers, and automated webhook triggers."
    },
    {
      title: "Payment & Subscription Infrastructure",
      icon: CreditCard,
      color: "text-emerald-600 bg-emerald-50",
      desc: "High-volume UPI 2.0 integration, Bharat BillPay (BBPS), auto-debit subscriptions, multi-party escrow payouts, and automated GST e-invoicing compliance."
    },
    {
      title: "Data Analytics & Real-Time Reporting",
      icon: BarChart3,
      color: "text-amber-600 bg-amber-50",
      desc: "Stream aggregation using Kafka/Redis, columnar warehouse storage, automated daily KPI digest generators, and executive audit logging."
    },
    {
      title: "API Integration & Interoperability",
      icon: Zap,
      color: "text-blue-600 bg-blue-50",
      desc: "High-throughput API gateway with automated rate-limiting, OpenAPI 3.0 documentation, and standardized microservice connectors."
    },
    {
      title: "Cloud Infrastructure & High Availability",
      icon: Cloud,
      color: "text-cyan-600 bg-cyan-50",
      desc: "Automated Kubernetes orchestration across Tier-4 Indian datacenters with 99.9% uptime SLA, DDoS protection, and continuous automated backups."
    },
    {
      title: "Mobile & Web Application Frameworks",
      icon: Globe2,
      color: "text-violet-600 bg-violet-50",
      desc: "Reusable component libraries, offline-first SQLite synchronization, and progressive web application (PWA) frameworks."
    },
    {
      title: "Enterprise Security & Compliance",
      icon: ShieldCheck,
      color: "text-red-600 bg-red-50",
      desc: "AES-256 encryption at rest, TLS 1.3 in transit, strict PII anonymization, automated vulnerability scanning, and sovereign data residency."
    }
  ];

  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title="NKTech Enterprise Platform™ (NEP) | Shared Technology Foundation — Bizwoke Nova"
        description="Discover the NKTech Enterprise Platform (NEP) shared architecture powering all 12 Bizwoke Nova digital platforms with standardized AI, security, and cloud scalability."
      />

      {/* Hero */}
      <section className="bg-[#10233F] text-white pt-16 pb-20 border-b border-[#1d3e70]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162f55] border border-[#246BCE]/40 text-xs font-bold text-[#17A6A1] uppercase tracking-wider">
                <span>SHARED TECHNOLOGY FOUNDATION</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                NKTech Enterprise Platform™ <br />
                <span className="text-[#246BCE]">(NEP Architecture)</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                One Technology Foundation. Multiple Digital Platforms.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                Our long-term technology architecture is built around the <strong className="text-white">NKTech Enterprise Platform™ (NEP)</strong>, a shared foundation designed to support multiple enterprise applications and industry-specific platforms. By standardizing essential technology capabilities, we accelerate development, reduce duplication, strengthen security, and support sustainable product growth.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/platforms/"
                  className="px-8 py-3.5 text-sm font-bold text-white bg-[#246BCE] hover:bg-[#1f5cb0] rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Platforms Built on NEP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 text-sm font-bold text-slate-300 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                >
                  Explore 10 Capabilities
                </a>
              </div>
            </div>

            {/* Authentic NKTech Logo & Profile Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#162f55] rounded-2xl p-7 border border-[#246BCE]/30 shadow-2xl text-center space-y-5">
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
                  <p className="text-xs text-[#17A6A1] font-semibold mt-0.5">Core Foundation Engine</p>
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
                    <span className="font-semibold text-[#17A6A1]">All 12 Portfolio Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 NEP Capabilities Grid */}
      <section id="capabilities" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Shared Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              The 10 Core Architectural Capabilities of NEP
            </h2>
            <p className="text-base text-slate-600">
              Every digital platform deployed by Bizwoke Nova inherits these battle-tested enterprise capabilities, eliminating technical fragmentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nepModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F6F8FB] rounded-2xl p-8 border border-slate-200/90 hover:border-[#246BCE]/40 hover:bg-white shadow-sm hover:shadow-md transition-all flex items-start gap-5 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mod.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-slate-400">0{idx + 1}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#17A6A1]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#10233F] group-hover:text-[#246BCE] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
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
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Engineering Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Architectural & Security Standards
            </h2>
            <p className="text-base text-slate-600">
              Enterprise technology built for mission-critical reliability, government auditing, and strict data confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#17A6A1]" />
              <h3 className="text-lg font-bold text-[#10233F]">Zero-Trust Security Architecture</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every API call, database query, and admin access requires strict cryptographic validation. No implicit network trust.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <Database className="w-8 h-8 text-[#246BCE]" />
              <h3 className="text-lg font-bold text-[#10233F]">Sovereign Indian Data Residency</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All production customer data resides strictly within MeitY-empanelled Tier-4 cloud datacenters in India, adhering to DPDP regulations.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <Cpu className="w-8 h-8 text-purple-600" />
              <h3 className="text-lg font-bold text-[#10233F]">High-Concurrency Fault Tolerance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Auto-scaling container pods designed to absorb massive traffic spikes during festival darshan bookings or election results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section id="security" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
            Enterprise Integration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
            Flexible Deployment Architectures
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            NEP can be consumed as a managed multi-tenant cloud service, deployed within your private corporate VPC (AWS/GCP/Azure), or installed on air-gapped government infrastructure.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/?type=tech"
              className="px-8 py-3.5 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Request Technical Architecture Whitepaper</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/partners/"
              className="px-8 py-3.5 text-sm font-bold text-[#10233F] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Technology Partner Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
