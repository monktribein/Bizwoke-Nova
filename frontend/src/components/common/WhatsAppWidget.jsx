import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';

const QUICK_TOPICS = [
  { label: '🏢 Enterprise Software Enquiry', text: 'Hi Bizwoke Nova team, I would like to enquire about Custom Enterprise Software Development.' },
  { label: '🚀 Request Platform Demo', text: 'Hi, I would like to schedule a product demo for your digital platforms.' },
  { label: '🤝 Strategic Partnership', text: 'Hi, I am interested in exploring a strategic technology partnership with Bizwoke Nova.' },
  { label: '💬 General Query', text: 'Hi Bizwoke Nova team, I have a general enquiry regarding your technology services.' }
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(QUICK_TOPICS[0]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const popupRef = useRef(null);

  // Phone number configured for WhatsApp (Pan-India corporate dispatch)
  const WHATSAPP_NUMBER = '911204567890'; // official corporate contact

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleStartChat = () => {
    const message = encodeURIComponent(selectedTopic.text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div ref={popupRef} className="fixed bottom-20 right-4 sm:right-6 lg:bottom-8 lg:right-8 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-[calc(100vw-32px)] sm:w-[360px] bg-white dark:bg-[#0A1C33] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-700/80 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0F294A] to-[#1E3A5F] dark:from-[#081528] dark:to-[#0F294A] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#F27A24] text-white flex items-center justify-center font-black text-sm shadow-md border-2 border-white/20">
                    BN
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-[#0A1C33]" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold tracking-tight leading-tight flex items-center gap-1.5">
                    <span>Bizwoke Nova™ Practice Desk</span>
                  </h4>
                  <p className="text-[11px] text-white/70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Typically replies in &lt;15 mins</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50 dark:bg-[#071322] space-y-3 max-h-[360px] overflow-y-auto">
              {/* Agent Greeting Bubble */}
              <div className="bg-white dark:bg-[#0F294A] p-3.5 rounded-2xl rounded-tl-sm shadow-xs border border-slate-200/70 dark:border-slate-700/60 space-y-1.5">
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  Hi there! 👋 Welcome to <strong className="text-[#0F294A] dark:text-white">Bizwoke Nova</strong>.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  How can our technical solutions & enterprise team assist you today?
                </p>
                <span className="text-[10px] text-slate-400 block text-right">Just now</span>
              </div>

              {/* Quick Topic Chips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Select a topic to begin:
                </span>
                <div className="flex flex-col gap-1.5">
                  {QUICK_TOPICS.map((topic, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setSelectedTopic(topic);
                        setHasInteracted(true);
                      }}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        selectedTopic.label === topic.label
                          ? 'bg-orange-500/10 dark:bg-orange-500/15 border-[#F27A24] text-[#0F294A] dark:text-white font-bold shadow-xs'
                          : 'bg-white dark:bg-[#0F294A] border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <span className="truncate">{topic.label}</span>
                      {selectedTopic.label === topic.label && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F27A24] shrink-0 ml-1.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / Direct WhatsApp Action */}
            <div className="p-3 bg-white dark:bg-[#0A1C33] border-t border-slate-200/80 dark:border-slate-700/60 space-y-2">
              <button
                type="button"
                onClick={handleStartChat}
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                {/* Official WhatsApp SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 2C6.495 2 2 6.494 2 12.03c0 1.906.536 3.687 1.464 5.213L2 22l4.897-1.428A9.97 9.97 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.03C22.062 6.494 17.567 2 12.031 2zm0 18.258c-1.636 0-3.178-.454-4.509-1.246l-.323-.193-2.903.847.85-2.83-.211-.336A8.204 8.204 0 0 1 3.774 12.03c0-4.552 3.704-8.256 8.257-8.256 4.553 0 8.257 3.704 8.257 8.256 0 4.553-3.704 8.258-8.257 8.258zm4.536-6.19c-.248-.124-1.472-.726-1.7-.808-.228-.083-.394-.124-.56.124-.166.248-.642.808-.787.973-.145.166-.29.186-.538.062-.249-.124-1.049-.387-1.998-1.233-.739-.659-1.238-1.473-1.383-1.722-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.849-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.68 4.254 3.758.594.257 1.058.41 1.42.526.598.19 1.142.163 1.572.099.48-.072 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.29z"/>
                </svg>
                <span>Start WhatsApp Conversation</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1 pt-1">
                <span>Or direct telephone:</span>
                <a
                  href="tel:+911204567890"
                  className="font-bold text-[#0F294A] dark:text-white hover:text-[#F27A24] transition-colors inline-flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3 text-[#F27A24]" />
                  <span>+91 120-BIZWOKE</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all cursor-pointer group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366]"
        aria-label="Connect on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 2C6.495 2 2 6.494 2 12.03c0 1.906.536 3.687 1.464 5.213L2 22l4.897-1.428A9.97 9.97 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.03C22.062 6.494 17.567 2 12.031 2zm0 18.258c-1.636 0-3.178-.454-4.509-1.246l-.323-.193-2.903.847.85-2.83-.211-.336A8.204 8.204 0 0 1 3.774 12.03c0-4.552 3.704-8.256 8.257-8.256 4.553 0 8.257 3.704 8.257 8.256 0 4.553-3.704 8.258-8.257 8.258zm4.536-6.19c-.248-.124-1.472-.726-1.7-.808-.228-.083-.394-.124-.56.124-.166.248-.642.808-.787.973-.145.166-.29.186-.538.062-.249-.124-1.049-.387-1.998-1.233-.739-.659-1.238-1.473-1.383-1.722-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.849-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.68 4.254 3.758.594.257 1.058.41 1.42.526.598.19 1.142.163 1.572.099.48-.072 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.29z"/>
        </svg>

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white dark:border-[#0A1C33] shadow-xs" />
      </motion.button>
    </div>
  );
}

