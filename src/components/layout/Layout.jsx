import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FB] text-[#10233F]">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
