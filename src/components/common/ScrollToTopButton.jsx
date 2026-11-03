import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show button once user has scrolled past 250px
      if (currentScrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage (0 to 100)
      if (totalHeight > 0) {
        const progress = Math.min(Math.max((currentScrollY / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular progress parameters
  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed bottom-20 right-4 sm:right-6 lg:bottom-8 lg:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-[#0F294A] text-[#0F294A] dark:text-white flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg hover:border-[#F27A24] dark:hover:border-[#F27A24] group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F27A24]"
          aria-label="Scroll back to top"
          title="Scroll to top"
        >
          {/* Circular Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
            viewBox="0 0 46 46"
          >
            {/* Track */}
            <circle
              cx="23"
              cy="23"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-slate-100 dark:text-slate-800"
            />
            {/* Active Progress */}
            <circle
              cx="23"
              cy="23"
              r={radius}
              fill="transparent"
              stroke="#F27A24"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Upward Arrow Icon with subtle bounce */}
          <div className="relative z-10 text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" strokeWidth={2.5} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
