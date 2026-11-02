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
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title="About Us | Company Story, Vision & Mission FTC — Bizwoke Nova"
        description="Learn about Bizwoke Nova's journey since 2012, our Mission FTC portfolio strategy, and our shared NKTech Enterprise Platform foundation."
      />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#246BCE] uppercase tracking-wider">
              <span>ABOUT BIZWOKE NOVA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10233F] tracking-tight leading-tight">
              Technology Expertise. <br />
              Business Understanding. <br />
              <span className="text-[#246BCE]">Long-Term Vision.</span>
            </h1>
            <p className="text-xl font-semibold text-slate-700">
              Building Digital Infrastructure for a Smarter India.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Established in 2012*, Bizwoke Nova has grown from a digital services business into an enterprise technology company focused on solving real-world business and operational challenges. Our expertise combines software development, mobile applications, enterprise systems, artificial intelligence, digital marketing, and industry-specific technology platforms.
            </p>
            <p className="text-xs text-slate-400 italic">
              *Founding claim currently flagged for official company corporate records verification before formal marketing publication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose & Brand Architecture */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Box 1: Corporate Brand */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#246BCE]">
                Corporate Brand
              </span>
              <h2 className="text-2xl font-extrabold text-[#10233F]">Bizwoke Nova™</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The primary corporate brand delivering enterprise software, AI solutions, and digital transformation for businesses, institutions, and government bodies.
              </p>
              <div className="pt-2 text-xs font-bold text-[#246BCE] flex items-center gap-1">
                <span>Core Operating Entity</span>
              </div>
            </div>

            {/* Box 2: Portfolio Strategy */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#17A6A1]">
                Portfolio Strategy
              </span>
              <h2 className="text-2xl font-extrabold text-[#10233F]">Mission FTC™</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our strategic initiative to build a diversified portfolio of enterprise technology platforms and digital infrastructure solving high-value economic challenges.
              </p>
              <div className="pt-2 text-xs font-bold text-[#17A6A1] flex items-center gap-1">
                <span>Long-Term Portfolio Growth</span>
              </div>
            </div>

            {/* Box 3: Technology Foundation */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600">
                Technology Foundation
              </span>
              <h2 className="text-2xl font-extrabold text-[#10233F]">NKTech Platform™</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                A shared architectural foundation (NEP) standardizing AI automation, IAM security, multi-tenancy, and cloud infrastructure across all products.
              </p>
              <div className="pt-2 text-xs font-bold text-indigo-600 flex items-center gap-1">
                <Link to="/technology/" className="hover:underline flex items-center gap-1">
                  Explore NEP Architecture <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Banner */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Our Purpose Statement
          </span>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#10233F] leading-snug">
            "To make advanced digital technology accessible, useful, and commercially valuable for businesses and institutions."
          </p>
          <div className="text-sm text-slate-500 max-w-2xl mx-auto">
            We measure success not by lines of code written, but by the tangible operational time saved, revenue unlocked, and governance transparency achieved.
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Corporate Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Our Journey Over More Than a Decade
            </h2>
            <p className="text-base text-slate-600">
              A journey of disciplined engineering, client trust, and continuous adaptation to emerging enterprise paradigms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-3 relative"
              >
                <div className="text-2xl font-extrabold text-[#246BCE]">
                  {ms.year}
                </div>
                <h3 className="text-base font-bold text-[#10233F]">
                  {ms.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ms.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Operating Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              The Principles That Guide Our Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F6F8FB] rounded-2xl p-8 border border-slate-200/90 space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#17A6A1] flex items-center justify-center text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#10233F]">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission FTC Dedicated Anchor */}
      <section id="vision" className="py-20 bg-[#10233F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
              Mission FTC™ • Strategic Portfolio Vision
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              One Portfolio. Many Platforms. <br />
              <span className="text-[#246BCE]">One Technology Foundation.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Mission FTC™ is our long-term strategic initiative to build a diversified portfolio of enterprise technology platforms and digital infrastructure solutions. Our ambition is to create valuable, scalable technology businesses that solve important problems across India's economy while developing the capabilities to serve international markets. Through shared technology, disciplined execution, and strategic partnerships, we aim to build an enduring enterprise technology ecosystem.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/platforms/"
                className="px-8 py-3.5 text-sm font-bold text-white bg-[#246BCE] hover:bg-[#1f5cb0] rounded-xl shadow-lg transition-all"
              >
                View 12 Platform Directory
              </Link>
              <Link
                to="/technology/"
                className="px-8 py-3.5 text-sm font-bold text-slate-300 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
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
