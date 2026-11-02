import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building,
  Landmark,
  Compass,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  Users2,
  GraduationCap
} from 'lucide-react';

export default function Solutions() {
  const industryIcons = {
    "government-public-administration": Landmark,
    "tourism-hospitality-destinations": Compass,
    "manufacturing-industrial": Factory,
    "healthcare-wellness": HeartPulse,
    "retail-msme-business": ShoppingBag,
    "transportation-logistics": Truck,
    "political-public-engagement": Users2,
    "education-professional-services": GraduationCap
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title="Industry Solutions | Enterprise Sector Architectures — Bizwoke Nova"
        description="Explore purpose-built technology architectures for government, tourism, manufacturing, healthcare, retail, transport, political management, and education."
      />

      {/* Hero */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-16 pb-20 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-[#F27A24]/30 text-xs font-bold text-[#F27A24] uppercase tracking-wider">
              <span>INDUSTRY SOLUTIONS DIRECTORY — BIZWOKE NOVA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-tight">
              Technology Designed Around <br />
              <span className="text-[#F27A24]">Industry Realities.</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-200">
              Sector-Specific Software, Digital Marketplaces & Workflow Automation.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every vertical possesses unique operational friction, compliance requirements, and stakeholder ecosystems. We build specialized platforms and tailored software architectures designed around how your industry works.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS_DATA.map((solution) => {
              const Icon = industryIcons[solution.slug] || Building;
              return (
                <div
                  key={solution.id}
                  className="bg-white dark:bg-[#0F294A] rounded-2xl p-8 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 dark:hover:border-[#F27A24]/60 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-[#F27A24] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                        {solution.stats.map((s, idx) => (
                          <div key={idx} className="text-right">
                            <span className="text-sm font-black text-[#0F294A] dark:text-white block leading-none">{s.value}</span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">{s.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-black text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                        {solution.title}
                      </h2>
                      <p className="text-xs font-bold text-[#0D9488] dark:text-teal-400 mt-1">
                        "{solution.tagline}"
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                        Engineered Interventions
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {solution.solutionsProvided.slice(0, 3).map((sol, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to={`/solutions/${solution.slug}/`}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#0F294A] dark:text-slate-200 bg-[#F8FAFC] dark:bg-[#0A1C33] group-hover:bg-[#F27A24] group-hover:text-white dark:group-hover:bg-[#F27A24] dark:group-hover:text-white rounded-lg border border-slate-200/80 dark:border-slate-700 transition-all shadow-sm"
                    >
                      <span>Explore {solution.title} Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}