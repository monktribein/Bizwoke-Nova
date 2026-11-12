import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Layers, Sparkles, Landmark, ArrowRight, CornerDownLeft, FileText, Compass, Globe2, ShieldCheck } from 'lucide-react';
import { PLATFORMS_DATA } from '../../data/platformsData';
import { SERVICES_DATA } from '../../data/servicesData';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Static company routes
  const companyPages = [
    { title: 'About Bizwoke Nova', path: '/about-us/', category: 'Company', desc: 'History, leadership, values & mission' },
    { title: 'NKTech Enterprise Platform™ (NEP)', path: '/technology/', category: 'Technology', desc: 'Enterprise architecture & technology stack' },
    { title: 'Strategic Partnerships', path: '/partners/', category: 'Partners', desc: 'Ecosystem alliances, SI & reseller programs' },
    { title: 'Careers & Talent', path: '/careers/', category: 'Careers', desc: 'Engineering & leadership opportunities' },
    { title: 'Contact & Practice Dispatch', path: '/contact/', category: 'Contact', desc: 'Direct access to solutions architects' }
  ];

  // Filtered search results
  const q = query.toLowerCase().trim();

  const matchedPlatforms = PLATFORMS_DATA.filter((p) =>
    !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  ).slice(0, 4);

  const matchedServices = SERVICES_DATA.filter((s) =>
    !q || s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || s.seoTarget.toLowerCase().includes(q)
  ).slice(0, 4);

  const matchedSolutions = SOLUTIONS_DATA.filter((sol) =>
    !q || sol.title.toLowerCase().includes(q) || sol.description.toLowerCase().includes(q)
  ).slice(0, 3);

  const matchedPages = companyPages.filter((cp) =>
    !q || cp.title.toLowerCase().includes(q) || cp.desc.toLowerCase().includes(q)
  ).slice(0, 3);

  // Flattened results for keyboard navigation
  const allResults = [
    ...matchedPlatforms.map((p) => ({ type: 'Platform', title: p.name, desc: p.categoryLabel, path: p.route, icon: Layers })),
    ...matchedServices.map((s) => ({ type: 'Service', title: s.title, desc: s.category, path: `/services/${s.slug}/`, icon: Sparkles })),
    ...matchedSolutions.map((sol) => ({ type: 'Solution', title: sol.title, desc: 'Industry Solution', path: `/solutions/${sol.slug}/`, icon: Landmark })),
    ...matchedPages.map((pg) => ({ type: 'Page', title: pg.title, desc: pg.desc, path: pg.path, icon: FileText }))
  ];

  // Handle keyboard arrow navigation & enter
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (allResults.length > 0 ? (prev + 1) % allResults.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (allResults.length > 0 ? (prev - 1 + allResults.length) % allResults.length : 0));
      } else if (e.key === 'Enter' && allResults[selectedIndex]) {
        e.preventDefault();
        navigate(allResults[selectedIndex].path);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, allResults, navigate, onClose]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#0A1C33] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-700/80 overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search platforms, services, solutions, or topics... (ESC to close)"
                className="w-full bg-transparent text-sm sm:text-base text-[#0F294A] dark:text-white placeholder:text-slate-400 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 font-mono">
                <span>ESC</span>
              </div>
            </div>

            {/* Results Body */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-4">
              {allResults.length === 0 ? (
                <div className="py-12 text-center space-y-2">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    No results found for "{query}"
                  </p>
                  <p className="text-xs text-slate-500">
                    Try searching for "Tirvona", "BharatBN", "ERP", "AI", or "Careers".
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  {allResults.map((item, idx) => {
                    const isSelected = selectedIndex === idx;
                    const IconComp = item.icon;
                    return (
                      <button
                        key={`${item.type}-${item.title}-${idx}`}
                        type="button"
                        onClick={() => handleSelect(item.path)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-orange-500/10 dark:bg-orange-500/15 border border-[#F27A24]/30'
                            : 'hover:bg-slate-50 dark:hover:bg-[#0F294A] border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            item.type === 'Platform'
                              ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                              : item.type === 'Service'
                              ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                              : item.type === 'Solution'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                              : 'bg-orange-500/10 text-[#F27A24]'
                          }`}>
                            <IconComp className="w-4 h-4" />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-extrabold text-[#0F294A] dark:text-white truncate">
                                {item.title}
                              </span>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0 uppercase tracking-wide">
                                {item.type}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          {isSelected && (
                            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#F27A24]">
                              <span>Open</span>
                              <CornerDownLeft className="w-3 h-3" />
                            </span>
                          )}
                          <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-0.5 text-[#F27A24]' : 'text-slate-300 dark:text-slate-600'}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Navigation Footer */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-[#071322] border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">↵</kbd>
                  <span>Select</span>
                </span>
              </div>
              <span className="font-semibold text-slate-600 dark:text-slate-300">
                Bizwoke Nova™ Global Search
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

