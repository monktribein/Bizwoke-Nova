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

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setInquirySent(true);
  };

  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title={`${service.title} | ${service.seoTarget} — Bizwoke Nova`}
        description={service.shortDescription}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-slate-500">
          <Link to="/" className="hover:text-[#10233F]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/services/" className="hover:text-[#10233F]">Our Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#10233F] font-bold">{service.title}</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#246BCE] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
                  {service.category}
                </span>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Primary SEO: {service.seoTarget}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10233F] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-[#17A6A1]">
                "{service.tagline}"
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.overview}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#service-enquiry"
                  className="px-8 py-3.5 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Request Service Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contact/?type=consultation"
                  className="px-6 py-3.5 text-sm font-bold text-[#10233F] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#17A6A1]" />
                <span>Fixed-scope milestones, strict SLA warranties & clean IP code transfer</span>
              </div>
            </div>

            {/* Scope Quick Glance Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#10233F] text-white rounded-2xl p-8 shadow-xl space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
                  Service Overview
                </span>
                <h3 className="text-xl font-bold">Standard Engagement Scope</h3>

                <ul className="space-y-3 text-sm text-slate-300">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#17A6A1] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Target Search Entity</span>
                  <span className="text-white font-medium">{service.seoTarget}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BUYER PROBLEM & CURRENT HURDLES */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-sm max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
              <span>The Client Challenge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10233F]">
              Why Conventional Approaches Break Down
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {service.buyerProblem}
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#246BCE] text-sm text-slate-600">
              Bizwoke Nova solves this through pragmatic architecture planning, eliminating technical debt early, and delivering maintainable, modern solutions backed by production support.
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS & METHODOLOGY */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Engineering Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Our 4-Stage Delivery Process
            </h2>
            <p className="text-base text-slate-600">
              Every engagement follows a structured, transparent timeline with bi-weekly demonstrations and clear sign-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F6F8FB] rounded-2xl p-6 border border-slate-200/90 space-y-3 relative"
              >
                <span className="text-3xl font-extrabold text-[#246BCE]/40 block">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#10233F]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES & TECHNOLOGIES */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Deliverables */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17A6A1]">
                Concrete Outcomes
              </span>
              <h3 className="text-2xl font-bold text-[#10233F]">
                Verified Project Deliverables
              </h3>
              <ul className="space-y-3 pt-2">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#17A6A1] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
                Modern Tech Stack
              </span>
              <h3 className="text-2xl font-bold text-[#10233F]">
                Engineered with Industry Standards
              </h3>
              <p className="text-sm text-slate-600">
                We select proven frameworks that guarantee maintainability, high speed, and active ecosystem support.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#F6F8FB] text-[#10233F] border border-slate-200"
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
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-[#10233F]">
              Clear Answers on Scope & Delivery
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#F6F8FB] border border-slate-200/90 space-y-2">
                <h4 className="text-base font-bold text-[#10233F] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#246BCE] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONVERSION & SERVICE ENQUIRY FORM */}
      <section id="service-enquiry" className="py-20 bg-[#F6F8FB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#10233F] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
                Service Inquiry
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Request a Proposal for {service.title}
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Discuss your business objectives, timeline, and technical constraints directly with our engineering team.
              </p>
            </div>

            {inquirySent ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our enterprise team will review your requirements for <strong className="text-white">{service.title}</strong> and email you at <strong className="text-white">{formData.email}</strong> within 1 business day.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-4 px-6 py-2 text-xs font-bold text-[#10233F] bg-white rounded-lg hover:bg-slate-100"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Contact Phone (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="+91-XXXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Project Requirements / Current Stack
                  </label>
                  <textarea
                    rows={3}
                    placeholder={`Tell us about your objectives for ${service.title}...`}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-bold text-white bg-[#246BCE] hover:bg-[#1f5cb0] rounded-xl shadow-lg transition-all"
                  >
                    Send Service Inquiry
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Direct enquiry routed to technical leads. Confidentiality respected.
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
