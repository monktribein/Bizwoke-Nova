import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Handshake,
  Building,
  Users2,
  Cpu,
  Layers,
  Sparkles,
  Award
} from 'lucide-react';

export default function Partners() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', partnerType: 'Channel', message: '' });

  const partnerTracks = [
    {
      title: "Channel & Distribution Partners",
      desc: "Regional software distributors, enterprise sales consultants, and IT resellers seeking to distribute Bizwoke Nova platforms (BizORM, BharatBN, Enterprise ERP) to local businesses.",
      benefits: ["Attractive recurring revenue share", "Dedicated sales enablement and pitch collateral", "Priority customer onboarding support"]
    },
    {
      title: "Implementation & System Integrators",
      desc: "IT service firms and technology consultancies who implement, configure, and customize our enterprise ERP and AI solutions for large corporate clients.",
      benefits: ["Certified NEP Architect training", "Access to sandboxed API environments", "Lead referrals in designated regional territories"]
    },
    {
      title: "Government & Institutional Collaborators",
      desc: "Smart City SPVs, state directorates, trade associations, and municipal contractors collaborating on large-scale civic and digital governance projects.",
      benefits: ["Sovereign cloud data hosting compliance", "Tender preparation and technical RFP support", "Dedicated on-ground technical liaison"]
    },
    {
      title: "Technology & Cloud ISV Partners",
      desc: "Cloud providers, payment gateways, biometric hardware manufacturers, and telecom networks seeking native interoperability with our platform portfolio.",
      benefits: ["Native API pre-integration in NEP", "Joint marketing and enterprise case studies", "Co-innovated edge hardware solutions"]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    try {
      await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.warn('Backend call failed:', err);
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title="Strategic Partnerships | Channel & Implementation Programs — Bizwoke Nova"
        description="Partner with Bizwoke Nova across channel distribution, system integration, institutional initiatives, and technology collaborations."
      />

      {/* Hero */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-16 pb-20 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-[#F27A24]/30 text-xs font-bold text-[#F27A24] uppercase tracking-wider">
              <span>STRATEGIC PARTNERSHIP PROGRAMS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-tight">
              Scale Your Reach with <br />
              <span className="text-[#F27A24]">Bizwoke Nova Ecosystem.</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-200">
              Channel, Implementation, Institutional, and Technology Collaborations.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We welcome partnerships with enterprise systems integrators, regional software distributors, industry associations, and technology innovators. Together, we deliver high-impact digital infrastructure to businesses and public institutions across India and global markets.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Partnership Tracks */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Collaboration Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Four Structured Partnership Tracks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTracks.map((track, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-5 flex flex-col justify-between hover:border-[#F27A24]/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-3 py-1 rounded-full border border-[#F27A24]/30">
                      Track 0{idx + 1}
                    </span>
                    <Handshake className="w-5 h-5 text-[#0D9488] dark:text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F294A] dark:text-white">
                    {track.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {track.desc}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Partner Advantages
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {track.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="#partner-form"
                    onClick={() => setFormData({ ...formData, partnerType: track.title.split(' ')[0] })}
                    className="text-xs font-bold text-[#F27A24] hover:text-[#DE6713] inline-flex items-center gap-1 group"
                  >
                    <span>Apply for {track.title.split('&')[0]} Program</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="partner-form" className="py-20 bg-white dark:bg-[#0A1C33]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F294A] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 border border-slate-700/70">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F27A24]">
                Partner Application
              </span>
              <h2 className="text-3xl font-black tracking-tight text-white">
                Explore Partnership Opportunities
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Submit your organizational profile to begin exploratory discussions with our Strategic Alliances team.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Application Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong> from <strong className="text-white">{formData.company}</strong>. Our partnership lead will review your submission and contact you within 2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 text-xs font-bold text-[#0F294A] bg-white rounded-lg hover:bg-slate-100"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Lead Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Kapoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Solutions Pvt Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Interested Partner Track
                    </label>
                    <select
                      value={formData.partnerType}
                      onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0A1C33] border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                    >
                      <option value="Channel">Channel & Distribution Partner</option>
                      <option value="Implementation">Implementation & System Integrator</option>
                      <option value="Institutional">Government & Institutional Collaborator</option>
                      <option value="Technology">Technology & Cloud ISV Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Partnership Objectives & Capabilities
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your current reach, client base, or integration goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-lg transition-all"
                  >
                    Submit Partnership Application
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Direct communication with leadership. No intermediaries.
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