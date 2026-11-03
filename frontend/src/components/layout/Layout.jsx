import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScrollToTopButton from '../common/ScrollToTopButton';

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F294A] selection:bg-[#F27A24]/20 selection:text-[#0F294A] w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 pb-24 sm:pb-28 lg:pb-0 w-full max-w-full overflow-x-hidden">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-full"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
