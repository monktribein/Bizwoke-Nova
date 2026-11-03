import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { ArrowRight, Home, Compass, Wrench, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-24 bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-[70vh] flex items-center justify-center px-4 transition-colors duration-200">
      <SEOHead
        title="Page Not Found (404) | Bizwoke Nova"
        description="The requested page could not be found. Explore Bizwoke Nova enterprise platforms, services, and corporate solutions."
      />
      <div className="max-w-xl text-center space-y-6 bg-white dark:bg-[#0F294A] p-10 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm">
        <span className="text-4xl font-black text-[#F27A24]">404</span>
        <h1 className="text-3xl font-black text-[#0F294A] dark:text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          The corporate page or resource you are looking for may have been restructured as part of the Bizwoke Nova enterprise architecture upgrade.
        </p>

        <div className="pt-2 grid grid-cols-2 gap-3 text-left">
          <Link
            to="/"
            className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1C33] hover:bg-orange-500/10 border border-slate-200 dark:border-slate-700 text-xs font-bold text-[#0F294A] dark:text-white flex items-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4 text-[#F27A24]" />
            <span>Corporate Home</span>
          </Link>
          <Link
            to="/platforms/"
            className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1C33] hover:bg-orange-500/10 border border-slate-200 dark:border-slate-700 text-xs font-bold text-[#0F294A] dark:text-white flex items-center gap-2 transition-colors"
          >
            <Compass className="w-4 h-4 text-[#0D9488]" />
            <span>12 Platforms</span>
          </Link>
          <Link
            to="/services/"
            className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1C33] hover:bg-orange-500/10 border border-slate-200 dark:border-slate-700 text-xs font-bold text-[#0F294A] dark:text-white flex items-center gap-2 transition-colors"
          >
            <Wrench className="w-4 h-4 text-[#F27A24]" />
            <span>14 Services</span>
          </Link>
          <Link
            to="/contact/"
            className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1C33] hover:bg-orange-500/10 border border-slate-200 dark:border-slate-700 text-xs font-bold text-[#0F294A] dark:text-white flex items-center gap-2 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#0D9488]" />
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all group"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}