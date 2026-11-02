import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 selection:bg-[#F27A24]/20 selection:text-[#0F294A] dark:selection:text-white transition-colors duration-250">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
