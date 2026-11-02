import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { COMPANY_DATA } from '../data/companyData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Users2,
  Target,
  Award,
  Globe2,
  Clock,
  Building
} from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Technical Rigor & Pragmatism",
      desc: "We prioritize maintainable, resilient architectures over passing technology fads. Every line of code must deliver tangible commercial or operational utility."
    },
    {
      title: "Clean Domain Separation",
      desc: "Our owned digital platforms are kept rigorously separated from bespoke client consulting engagements, ensuring total IP clarity and specialized focus."
    },
    {
      title: "Shared Foundation Efficiency",
      desc: "By standardizing core security, AI, and identity within NKTech Enterprise Platform™, we build new products 3x faster with rock-solid security."
    },
    {
      title: "Customer & Stakeholder Empathy",
      desc: "Whether building for a municipal sanitation worker or an enterprise CXO, our interfaces are engineered for real humans operating under real-world constraints."
    }
  ];

  const milestones = [
    { year: "2012*", title: "Founding & Digital Agency Origins", desc: "Initiated operations delivering digital services, web development, and custom applications for growing businesses." },
    { year: "2016-2018", title: "Enterprise Systems & Mobile Expansion", desc: "Scaled into complex ERP systems, custom CRM workflows, and mobile application engineering across India." },
    { year: "2020-2022", title: "Architectural Standardization", desc: "Conceptualized the NKTech Enterprise Platform™ (NEP) to standardize shared multi-tenant SaaS capabilities across distinct verticals." },
    { year: "2024-Present", title: "Mission FTC™ & Specialized Portals", desc: "Accelerating a diversified portfolio of 12 enterprise platforms spanning tourism, governance, AI, manufacturing, and commerce." }
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title="About Us | Company Story, Vision & Mission FTC — Bizwoke Nova"
        description="Learn about Bizwoke Nova's journey since 2012, our Mission FTC portfolio strategy, and our shared NKTech Enterprise Platform foundation."
      />

      {/* Hero */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-16 pb-20 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-[#F27A24]/30 text-xs font-bold text-[#F27A24] uppercase tracking-wider">
              <span>Awakening Your Success • About Bizwoke Nova</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-tight">
              Technology Expertise. <br />
              Business Understanding. <br />
              <span className="text-[#F27A24]">Long-Term Vision.</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-200">
              Awakening Your Success • Building Digital Infrastructure for a Smarter India.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Established in 2012*, Bizwoke Nova has grown from a digital services business into an enterprise technology company focused on solving real-world business and operational challenges. Our expertise combines software development, mobile applications, enterprise systems, artificial intelligence, digital marketing, and industry-specific technology platforms.
            </p>
            <p className="text-xs text-slate-400 italic">
              *Founding claim currently flagged for official company corporate records verification before formal marketing publication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose & Brand Architecture */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Box 1: Corporate Brand */}
            <div className="bg-white dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-4 hover:border-[#F27A24]/40 transition-colors">
              <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                Corporate Brand
              </span>
              <h2 className="text-2xl font-black text-[#0F294A] dark:text-white">Bizwoke Nova™</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The primary corporate brand delivering enterprise software, AI solutions, and digital transformation for businesses, institutions, and government bodies.
              </p>
              <div className="pt-2 text-xs font-bold text-[#F27A24] flex items-center gap-1">
                <span>Core Operating Entity</span>
              </div>
            </div>

            {/* Box 2: Portfolio Strategy */}
            <div className="bg-white dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-4 hover:border-[#0D9488]/40 transition-colors">
              <span className="text-xs font-black uppercase tracking-widest text-[#0D9488] dark:text-teal-400">
                Portfolio Strategy
              </span>
              <h2 className="text-2xl font-black text-[#0F294A] dark:text-white">Mission FTC™</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Our strategic initiative to build a diversified portfolio of enterprise technology platforms and digital infrastructure solving high-value economic challenges.
              </p>
              <div className="pt-2 text-xs font-bold text-[#0D9488] dark:text-teal-400 flex items-center gap-1">
                <span>Long-Term Portfolio Growth</span>
              </div>
            </div>

            {/* Box 3: Technology Foundation */}
            <div className="bg-white dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-4 hover:border-blue-400 transition-colors">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Technology Foundation
              </span>
              <h2 className="text-2xl font-black text-[#0F294A] dark:text-white">NKTech Platform™</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                A shared architectural foundation (NEP) standardizing AI automation, IAM security, multi-tenancy, and cloud infrastructure across all products.
              </p>
              <div className="pt-2 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                <Link to="/technology/" className="hover:underline flex items-center gap-1">
                  Explore NEP Architecture <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Banner */}
      <section className="py-16 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
            Our Purpose Statement
          </span>
          <p className="text-2xl sm:text-3xl font-black text-[#0F294A] dark:text-white leading-snug">
            "To make advanced digital technology accessible, useful, and commercially valuable for businesses and institutions."
          </p>
          <div className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We measure success not by lines of code written, but by the tangible operational time saved, revenue unlocked, and governance transparency achieved.
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Corporate Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Our Journey Over More Than a Decade
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A journey of disciplined engineering, client trust, and continuous adaptation to emerging enterprise paradigms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0F294A] rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-3 relative hover:border-[#F27A24]/40 transition-colors"
              >
                <div className="text-2xl font-black text-[#F27A24]">
                  {ms.year}
                </div>
                <h3 className="text-base font-bold text-[#0F294A] dark:text-white">
                  {ms.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ms.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Operating Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              The Principles That Guide Our Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 space-y-3 hover:border-[#F27A24]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 text-[#F27A24] flex items-center justify-center text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#0F294A] dark:text-white">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission FTC Dedicated Anchor */}
      <section id="vision" className="py-20 bg-[#0A1C33] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F27A24]">
              Mission FTC™ • Strategic Portfolio Vision
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              One Portfolio. Many Platforms. <br />
              <span className="text-[#F27A24]">One Technology Foundation.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Mission FTC™ is our long-term strategic initiative to build a diversified portfolio of enterprise technology platforms and digital infrastructure solutions. Our ambition is to create valuable, scalable technology businesses that solve important problems across India's economy while developing the capabilities to serve international markets. Through shared technology, disciplined execution, and strategic partnerships, we aim to build an enduring enterprise technology ecosystem.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/platforms/"
                className="px-8 py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-lg transition-all"
              >
                View 12 Platform Directory
              </Link>
              <Link
                to="/technology/"
                className="px-8 py-3.5 text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              >
                Explore NEP Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}