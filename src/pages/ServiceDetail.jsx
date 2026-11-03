import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Code2,
  Clock,
  Layers,
  HelpCircle,
  Cpu,
  FileCheck2,
  Send
} from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services/" replace />;
  }

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    try {
      await fetch('/api/service-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          serviceTitle: service.title
        })
      });
    } catch (err) {
      console.warn('Backend call failed:', err);
    }
    setInquirySent(true);
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title={`${service.title} | ${service.seoTarget} — Bizwoke Nova`}
        description={service.shortDescription}
      />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-[#F27A24] dark:hover:text-[#F27A24] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/services/" className="hover:text-[#F27A24] dark:hover:text-[#F27A24] transition-colors">Our Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0F294A] dark:text-white font-bold">{service.title}</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-16 pb-20 relative overflow-hidden">
        {/* Clean enterprise background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/30 dark:from-[#071322] dark:via-[#0A1C33] dark:to-[#08172b] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-3 py-1 rounded-full border border-[#F27A24]/30">
                  {service.category}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#0F294A] px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                  Primary SEO: {service.seoTarget}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-[#F27A24]">
                "{service.tagline}"
              </p>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.overview}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#service-enquiry"
                  className="px-8 py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center gap-2 group"
                >
                  <span>Request Service Proposal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link
                  to="/contact/?type=consultation"
                  className="px-6 py-3.5 text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>

              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                <span>Fixed-scope milestones, strict SLA warranties & clean IP code transfer</span>
              </div>
            </div>

            {/* Scope Quick Glance Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] text-[#0F294A] rounded-2xl p-8 shadow-sm space-y-5 border border-slate-200/90">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F27A24]">
                  Service Overview
                </span>
                <h3 className="text-xl font-bold text-[#0F294A]">Standard Engagement Scope</h3>

                <ul className="space-y-3 text-sm text-slate-600">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Target Search Entity</span>
                  <span className="text-[#F27A24] font-semibold">{service.seoTarget}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BUYER PROBLEM & CURRENT HURDLES */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#0F294A] rounded-2xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-700/60 shadow-sm max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full border border-red-200 dark:border-red-800">
              <span>The Client Challenge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F294A] dark:text-white">
              Why Conventional Approaches Break Down
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {service.buyerProblem}
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A1C33] border-l-4 border-[#F27A24] text-sm text-slate-600 dark:text-slate-300">
              Bizwoke Nova solves this through pragmatic architecture planning, eliminating technical debt early, and delivering maintainable, modern solutions backed by production support.
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS & METHODOLOGY */}
      <section className="py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Engineering Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Our 4-Stage Delivery Process
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Every engagement follows a structured, transparent timeline with bi-weekly demonstrations and clear sign-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/60 space-y-3 relative"
              >
                <span className="text-3xl font-black text-[#F27A24]/40 block">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#0F294A] dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES & TECHNOLOGIES */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Deliverables */}
            <div className="bg-white dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] dark:text-teal-400">
                Concrete Outcomes
              </span>
              <h3 className="text-2xl font-black text-[#0F294A] dark:text-white">
                Verified Project Deliverables
              </h3>
              <ul className="space-y-3 pt-2">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-white dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
                Modern Tech Stack
              </span>
              <h3 className="text-2xl font-black text-[#0F294A] dark:text-white">
                Engineered with Industry Standards
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                We select proven frameworks that guarantee maintainability, high speed, and active ecosystem support.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#F8FAFC] dark:bg-[#0A1C33] text-[#0F294A] dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-black text-[#0F294A] dark:text-white">
              Clear Answers on Scope & Delivery
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-200/90 dark:border-slate-700/60 space-y-2">
                <h4 className="text-base font-bold text-[#0F294A] dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#F27A24] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONVERSION & SERVICE ENQUIRY FORM */}
      <section id="service-enquiry" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-[#0F294A] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-slate-200/90 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Context & Commitments */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                    Service Inquiry
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F294A] leading-tight">
                    Request a Proposal for {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Discuss your business objectives, timeline, and technical constraints directly with our engineering team.
                  </p>
                </div>

                <div className="pt-2 space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A]">Architecture First</span>
                      <span className="text-slate-500 text-xs">Direct technical feasibility and scope assessment from Day 1.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A]">Fixed-Scope SLA & NDA</span>
                      <span className="text-slate-500 text-xs">Strict confidentiality and Milestone-driven execution delivery.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                {inquirySent ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-xl font-bold text-[#0F294A]">Inquiry Received</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-[#0F294A]">{formData.name}</strong>. Our enterprise team will review your requirements for <strong className="text-[#0F294A]">{service.title}</strong> and email you at <strong className="text-[#0F294A]">{formData.email}</strong> within 1 business day.
                    </p>
                    <button
                      onClick={() => setInquirySent(false)}
                      className="mt-4 px-6 py-2 text-xs font-bold text-white bg-[#0F294A] rounded-lg hover:bg-[#143761] cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Priya Nair"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-[#0F294A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-[#0F294A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Contact Phone (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="+91-XXXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-[#0F294A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Project Requirements / Current Stack
                      </label>
                      <textarea
                        rows={3}
                        placeholder={`Tell us about your objectives for ${service.title}...`}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-[#0F294A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] focus:border-transparent"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-lg transition-all cursor-pointer"
                      >
                        Send Service Inquiry
                      </button>
                      <p className="text-[11px] text-slate-500 text-center mt-2">
                        Direct enquiry routed to technical leads. Confidentiality respected.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}