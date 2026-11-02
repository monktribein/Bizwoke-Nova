import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090B] text-white selection:bg-[#F27A24]/30 selection:text-white">
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
