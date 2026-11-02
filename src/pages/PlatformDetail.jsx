import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { PLATFORMS_DATA } from '../data/platformsData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Building2,
  Users2,
  ChevronRight,
  HelpCircle,
  FileCheck,
  Lock,
  Workflow,
  BarChart3,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function PlatformDetail({ overrideSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = overrideSlug || routeSlug;
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });

  const platform = PLATFORMS_DATA.find((p) => p.slug === slug);

  if (!platform) {
    return <Navigate to="/platforms/" replace />;
  }

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setDemoSubmitted(true);
  };

  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title={`${platform.name} | ${platform.tagline} — Bizwoke Nova`}
        description={platform.description}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-slate-500">
          <Link to="/" className="hover:text-[#10233F]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/platforms/" className="hover:text-[#10233F]">Our Platforms</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#10233F] font-bold">{platform.name}</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#246BCE] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
                  {platform.categoryLabel}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                  platform.maturityStatus === 'Live'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : platform.maturityStatus === 'Pilot'
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : platform.maturityStatus === 'Early Access'
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  Status: {platform.maturityStatus}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#10233F] tracking-tight leading-tight">
                {platform.name}
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-[#17A6A1]">
                "{platform.tagline}"
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {platform.heroSubtitle || platform.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#request-demo"
                  className="px-8 py-3.5 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>{platform.primaryCTA}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/partners/"
                  className="px-6 py-3.5 text-sm font-bold text-[#10233F] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                >
                  Become a Partner
                </Link>
              </div>

              <div className="pt-3 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#17A6A1]" />
                <span>Powered by NKTech Enterprise Platform™ (NEP) Shared Architecture</span>
              </div>
            </div>

            {/* Hero Interactive Card / Specs */}
            <div className="lg:col-span-5">
              <div className="bg-[#10233F] text-white rounded-2xl p-8 shadow-xl space-y-6 relative overflow-hidden">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
                    Enterprise Platform Profile
                  </span>
                  <h3 className="text-2xl font-bold">{platform.name} Architecture</h3>
                </div>

                <div className="space-y-3 text-sm text-slate-300">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs text-slate-400 block font-medium">Domain / Category:</span>
                    <span className="text-white font-semibold">{platform.categoryLabel}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs text-slate-400 block font-medium">Core Value Outcome:</span>
                    <span className="text-[#17A6A1] font-semibold">{platform.businessValue}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs text-slate-400 block font-medium">Deployment Options:</span>
                    <span className="text-white font-medium">Cloud Multi-Tenant SaaS, Dedicated VPC, Hybrid Edge</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Product Index: #{platform.id}</span>
                  <span className="text-emerald-400 font-medium">Verified Specification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. INDUSTRY PROBLEM & SOLUTION OVERVIEW */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Problem */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-red-100 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                <span>The Industry Friction</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10233F]">
                Operational Challenges & Inefficiencies
              </h2>
              <div className="space-y-4">
                {platform.problemStatement.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-red-50 text-red-600 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      ✕
                    </span>
                    <p className="leading-relaxed">{prob}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-teal-100 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17A6A1] bg-teal-50 px-3 py-1 rounded-full">
                <span>The Engineered Solution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10233F]">
                How {platform.name} Solves This
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {platform.solutionOverview}
              </p>
              <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-[#17A6A1] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Business Value Guarantee
                </span>
                <p className="text-sm font-semibold text-[#10233F]">
                  {platform.businessValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE MODULES (6 TO 9 MAJOR CAPABILITIES) */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Platform Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Core Modules & Capabilities
            </h2>
            <p className="text-base text-slate-600">
              Each module is built on standardized enterprise microservices ensuring maximum uptime, high throughput, and seamless interoperability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platform.coreModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-[#F6F8FB] rounded-xl p-6 border border-slate-200/90 hover:border-[#246BCE]/40 hover:bg-white transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#246BCE] flex items-center justify-center text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#17A6A1]" />
                </div>
                <h3 className="text-base font-bold text-[#10233F] group-hover:text-[#246BCE] transition-colors">
                  {module.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TARGET USERS & BUYER PERSONAS */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Who It Is For
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Designed for Key Stakeholders & Organizations
            </h2>
            <p className="text-base text-slate-600">
              Tailored interfaces and role-based permissions designed specifically for operational decision-makers and front-line users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platform.targetUsers.map((persona, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#17A6A1] flex items-center justify-center shrink-0">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#10233F]">
                    Stakeholder Group 0{idx + 1}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {persona}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS / WORKFLOW */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Execution Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              How {platform.name} Operates
            </h2>
            <p className="text-base text-slate-600">
              A streamlined 4-stage operational workflow from initial onboarding to executive reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platform.workflow.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F6F8FB] rounded-2xl p-6 border border-slate-200/90 relative space-y-3"
              >
                <span className="text-3xl font-extrabold text-[#246BCE]/40 block">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[#10233F]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY & SECURITY (NEP CAPABILITIES) */}
      <section className="py-20 bg-[#10233F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17A6A1]">
              Under The Hood
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              NKTech Enterprise Platform™ Architecture
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {platform.name} is powered by NEP's shared technology foundation, inheriting verified enterprise capabilities, zero-trust security, and sovereign compliance out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platform.nepIntegration.map((integration, idx) => (
              <div
                key={idx}
                className="bg-[#162f55] p-6 rounded-xl border border-slate-700/60 space-y-2"
              >
                <div className="text-xs font-bold text-[#17A6A1] uppercase tracking-wider">
                  NEP Capability Layer 0{idx + 1}
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {integration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 & 9. COMMERCIAL ENGAGEMENT MODELS */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Deployment & Licensing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Commercial Engagement Models
            </h2>
            <p className="text-base text-slate-600">
              Flexible commercial structures designed to support organizations from rapid pilot trials to enterprise-wide rollouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platform.engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm space-y-3"
              >
                <div className="text-xs font-bold text-[#17A6A1] uppercase tracking-wider">
                  Engagement Option 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#10233F]">
                  {model}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Includes SLA-backed support, security audits, maintenance updates, and dedicated technical onboarding.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONVERSION & DEMO ENQUIRY */}
      <section id="request-demo" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#10233F] text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
                Interactive Demonstration
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Request a Dedicated {platform.name} Demo
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                Schedule a 30-minute walkthrough with our platform architects to assess integration feasibility, data migration, and deployment timelines.
              </p>
            </div>

            {demoSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Demonstration Request Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our enterprise team for {platform.name} will contact you at <strong className="text-white">{formData.email}</strong> within 1 business day.
                </p>
                <button
                  onClick={() => setDemoSubmitted(false)}
                  className="mt-4 px-6 py-2 text-xs font-bold text-[#10233F] bg-white rounded-lg hover:bg-slate-100"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Organization / Entity Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Municipal Corporation, Enterprise Ltd."
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Project Scope / Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder={`Tell us about your requirements for ${platform.name}...`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-bold text-white bg-[#246BCE] hover:bg-[#1f5cb0] rounded-xl shadow-lg transition-all"
                  >
                    Confirm & Schedule Demonstration
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Direct enquiry routed securely. No spam. Privacy guaranteed.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
