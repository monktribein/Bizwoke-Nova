import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScrollToTopButton from '../common/ScrollToTopButton';
import WhatsAppWidget from '../common/WhatsAppWidget';
import CommandPalette from '../common/CommandPalette';

export default function Layout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Smooth GPU-accelerated reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  // Global Ctrl + K / Cmd + K shortcut to open Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  if (isAdminRoute) {
    return <div className="min-h-screen bg-[#F8FAFC]">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F294A] selection:bg-[#F27A24]/20 selection:text-[#0F294A] w-full max-w-full overflow-x-hidden">
      {/* Top Scroll Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#F27A24] via-amber-400 to-[#DE6713] origin-left z-[9999] pointer-events-none shadow-[0_1px_8px_rgba(242,122,36,0.6)]"
      />

      <Header onOpenSearch={() => setIsSearchOpen(true)} />
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
      <WhatsAppWidget />
      <ScrollToTopButton />
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
