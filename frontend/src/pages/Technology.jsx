import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  Workflow,
  BarChart3,
  CreditCard,
  Cloud,
  Globe2,
  Zap,
  Database,
  Server,
  Network,
  CheckCircle2,
  Terminal,
  Copy,
  Check,
  Building2,
  FileCode2,
  Radio,
  Share2,
  KeyRound,
  ShieldAlert,
  HardDriveDownload,
  Activity,
  ChevronRight
} from 'lucide-react';

export default function Technology() {
  const [activeTab, setActiveTab] = useState('stack');
  const [activeLayer, setActiveLayer] = useState(0);
  const [codeLang, setCodeLang] = useState('curl');
  const [copied, setCopied] = useState(false);

  // Core Architecture Layers (5 Tiers)
  const architectureLayers = [
    {
      tier: 'Tier 05',
      name: 'Application & Presentation Layer',
      subtitle: 'Customer & Enterprise Experiences',
      badge: 'Client Tier',
      badgeCls: 'bg-orange-500/10 text-[#F27A24] border-orange-500/20',
      icon: Globe2,
      desc: 'High-performance responsive web applications, native Android/iOS mobile SDKs, and conversational AI interfaces localized in regional Indian languages.',
      components: [
        { name: 'Tirvona™ Web & App', desc: 'Pilgrim darshan queues & tourism telemetry' },
        { name: 'BharatBN™ Portal', desc: 'Verified B2B discovery & buyer-seller match' },
        { name: 'BizORM™ Console', desc: 'Review automation & sentiment tracking' },
        { name: 'Pravixo™ Creator Suite', desc: 'Affiliate commerce & campaign analytics' },
        { name: 'Political ERP™', desc: 'Constituency analytics & field booth sync' },
        { name: 'ULB ERP™ Municipal', desc: 'Urban governance & citizen self-service' },
      ],
      protocols: ['React 19', 'Next.js', 'React Native', 'Flutter SDK', 'Indic Voice AI', 'Tailwind v4']
    },
    {
      tier: 'Tier 04',
      name: 'API Gateway & National Interoperability Fabric',
      subtitle: 'Edge Routing & Public Rails Integration',
      badge: 'Edge Fabric',
      badgeCls: 'bg-blue-500/10 text-[#2563EB] border-blue-500/20',
      icon: Zap,
      desc: 'High-throughput edge gateway providing token-bucket rate limiting, circuit breaker resilience, and native adapters for India’s digital public infrastructure.',
      components: [
        { name: 'DigiLocker Gateway', desc: 'Verifiable citizen document authentication' },
        { name: 'UPI & BBPS Routing', desc: 'Sub-second payment settlement & auto-reconciliation' },
        { name: 'ONDC Protocol Adapter', desc: 'Beckn protocol commerce network discovery' },
        { name: 'Aadhaar e-KYC/Sign', desc: 'UIDAI-compliant biometric & OTP verification' },
        { name: 'GSTN Tax Verification', desc: 'Automated e-invoice & GSTIN validation' },
        { name: 'GraphQL / REST Mesh', desc: 'Federated schema stitching & edge caching' },
      ],
      protocols: ['HTTP/3', 'gRPC', 'Beckn Protocol', 'OAuth 2.1', 'mTLS', 'OpenAPI 3.1']
    },
    {
      tier: 'Tier 03',
      name: 'Core Application Engines (NEP Microservices)',
      subtitle: 'Shared Intelligence & Domain Logic',
      badge: 'Platform Core',
      badgeCls: 'bg-teal-500/10 text-[#0D9488] border-teal-500/20',
      icon: Cpu,
      desc: 'Proprietary shared engines eliminating redundant code and providing uniform security, automated event orchestration, and cognitive capabilities across all platforms.',
      components: [
        { name: 'NEP-IAM Identity', desc: 'Granular RBAC, SSO, session isolation & token vaults' },
        { name: 'NEP-Orchestrate', desc: 'Visual SLA state machines & event-driven routers' },
        { name: 'NEP-Cognitive AI', desc: 'Private LLM inference, vector RAG & document OCR' },
        { name: 'NEP-Commerce Billing', desc: 'Universal subscription ledger & tax compliance' },
        { name: 'NEP-Telemetry Observability', desc: 'OpenTelemetry distributed tracing & SLA monitors' },
        { name: 'NEP-Dispatch Notification', desc: 'Multi-channel WhatsApp, SMS & push router' },
      ],
      protocols: ['Temporal Engine', 'Private LLMs', 'Kafka Event Bus', 'Redis Streams', 'ISO 20022']
    },
    {
      tier: 'Tier 02',
      name: 'Data Isolation & Multi-Tenant Storage Mesh',
      subtitle: 'Cryptographic Boundaries & Polyglot Persistence',
      badge: 'Data Mesh',
      badgeCls: 'bg-indigo-500/10 text-[#6366F1] border-indigo-500/20',
      icon: Database,
      desc: 'Multi-tenant architecture enforcing strict Row-Level Security (RLS) with options for isolated sovereign databases for sensitive government and enterprise tiers.',
      components: [
        { name: 'PostgreSQL Relational Core', desc: 'ACID-compliant transactional ledger with RLS' },
        { name: 'Redis Cache & Queue Tier', desc: 'Sub-millisecond session state & message buffers' },
        { name: 'pgvector / Embedding Store', desc: 'High-dimension vector index for AI semantic search' },
        { name: 'Encrypted S3 Document Vault', desc: 'AES-256 encrypted immutable document storage' },
        { name: 'Audit Trail Ledger', desc: 'Tamper-evident append-only compliance logs' },
        { name: 'Automated Backup Engine', desc: 'Continuous point-in-time recovery (PITR < 15 min)' },
      ],
      protocols: ['PostgreSQL 17', 'Redis 7', 'AES-256-GCM', 'pgvector', 'S3 API', 'Row-Level Security']
    },
    {
      tier: 'Tier 01',
      name: 'Cloud Infrastructure & Cyber-Resilience',
      subtitle: 'Domestic Sovereign Indian Cloud Foundation',
      badge: 'Infrastructure',
      badgeCls: 'bg-emerald-500/10 text-[#059669] border-emerald-500/20',
      icon: Server,
      desc: 'Multi-region Kubernetes deployment running in Tier-4 domestic Indian data centers, guaranteeing zero cross-border data transfer and high availability.',
      components: [
        { name: 'Domestic Data Centers', desc: 'Primary & secondary nodes in Delhi NCR, Mumbai & Bengaluru' },
        { name: 'Kubernetes Container Fabric', desc: 'Automated horizontal pod auto-scaling & zero-downtime rolls' },
        { name: 'Zero-Trust Network Model', desc: 'Strict perimeterless security with WireGuard mesh & mTLS' },
        { name: 'Automated DDoS Mitigation', desc: 'Multi-layer scrubbing with Layer 7 rate-limiting' },
        { name: 'Disaster Recovery Failover', desc: 'Hot standby cross-region replication (RTO < 30 min)' },
        { name: 'DPDP Act 2023 Compliance', desc: '100% Indian data residency with hardware security modules' },
      ],
      protocols: ['Kubernetes', 'Terraform', 'WireGuard', 'TLS 1.3', 'Prometheus', 'eBPF / Cilium']
    }
  ];

  // Code snippets for developer console
  const codeSnippets = {
    curl: `curl -X POST https://api.bizwoke.com/v1/nep/dispatch \\
  -H "Authorization: Bearer nep_live_sec_89f02a4b18c..." \\
  -H "X-Tenant-Domain: tirvona.bizwoke.com" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "pilgrim.darshan.queue_allocated",
    "workflow_id": "wf_tirvona_vip_fast_track",
    "payload": {
      "booking_ref": "TIR-2026-9941",
      "verification": "aadhaar_digilocker_verified",
      "notification_channel": "whatsapp_sms"
    }
  }'`,
    typescript: `import { NEPClient } from '@bizwoke/nep-sdk';

const nep = new NEPClient({
  apiKey: process.env.NEP_API_KEY,
  tenantDomain: 'tirvona.bizwoke.com',
  environment: 'production'
});

// Dispatch event across NEP distributed workflow engine
const dispatch = await nep.workflows.dispatch({
  event: 'pilgrim.darshan.queue_allocated',
  workflowId: 'wf_tirvona_vip_fast_track',
  payload: {
    bookingRef: 'TIR-2026-9941',
    verification: 'aadhaar_digilocker_verified',
    notificationChannel: 'whatsapp_sms'
  }
});

console.log('Dispatched in:', dispatch.latencyMs, 'ms');
// Output: { status: 200, dispatchId: 'dsp_7701a91c', latencyMs: 34 }`,
    python: `from bizwoke_nep import NEPClient
import os

nep = NEPClient(
    api_key=os.getenv("NEP_API_KEY"),
    tenant_domain="tirvona.bizwoke.com"
)

# Trigger high-throughput SLA workflow
response = nep.workflows.dispatch(
    event="pilgrim.darshan.queue_allocated",
    workflow_id="wf_tirvona_vip_fast_track",
    payload={
        "booking_ref": "TIR-2026-9941",
        "verification": "aadhaar_digilocker_verified",
        "notification_channel": "whatsapp_sms"
    }
)

print(f"Status: {response.status} | Latency: {response.latency_ms}ms")`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[codeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F294A] selection:bg-[#F27A24]/20 selection:text-[#0F294A]">
      <SEOHead
        title="NKTech Enterprise Platform™ (NEP) | Technology Architecture | Bizwoke Nova"
        description="Explore the shared technology foundation, zero-trust security, distributed workflow orchestration, and national public digital infrastructure adapters powering Bizwoke Nova's 12 platforms."
        canonical="/technology/"
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-200 bg-white">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Vision & Context */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#F27A24] text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#F27A24] animate-pulse" />
                <span>NKTECH ENTERPRISE PLATFORM™ (NEP) • ARCHITECTURAL CORE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F294A] tracking-tight leading-[1.08]">
                One Foundation. <br />
                <span className="text-[#F27A24]">12 Scalable Digital Platforms.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                The <strong className="text-[#0F294A] font-bold">NKTech Enterprise Platform™ (NEP)</strong> is Bizwoke Nova’s proprietary shared application, security, and cloud foundation. Engineered to eliminate fragmentation across Indian digital systems, NEP delivers unified identity, distributed event orchestration, cognitive AI execution, zero-trust data isolation, and national API gateway adapters across our entire software portfolio.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#architecture-stack"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 group"
                >
                  <span>Explore 5-Tier Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#developer-console"
                  className="px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-[#0F294A] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors inline-flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-slate-500" />
                  <span>Developer & API Specs</span>
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Live Status Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-5 sm:p-7 shadow-[0_16px_40px_rgba(15,41,74,0.14)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <img src="/assets/nktech-logo.jpg" alt="NKTech Logo" className="h-8 w-auto rounded bg-white p-1" />
                    <div>
                      <div className="text-xs font-bold text-white">NEP Architecture Stack</div>
                      <div className="text-[10px] text-slate-400">Core Engineering Telemetry</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Operational
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-5 pb-5 border-b border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-xl sm:text-2xl font-black text-white">99.99%</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">High-Availability SLA</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-xl sm:text-2xl font-black text-orange-400">&lt; 45ms</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">P95 Edge Gateway Latency</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-xl sm:text-2xl font-black text-teal-400">12 / 12</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Active Portfolio Platforms</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-xl sm:text-2xl font-black text-blue-400">100%</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Indian Data Sovereignty</div>
                  </div>
                </div>

                <div className="pt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Data Center Locations:</span>
                    <span className="font-semibold text-white">Delhi NCR • Mumbai • Bengaluru</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Cryptographic Standard:</span>
                    <span className="font-semibold text-white">AES-256-GCM / TLS 1.3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Regulatory Compliance:</span>
                    <span className="font-semibold text-emerald-400">India DPDP Act 2023 Ready</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== VIEW SELECTOR TABS ===================== */}
      <section className="sticky top-[56px] sm:top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-2.5">
            {[
              { id: 'stack', label: '1. Full 5-Tier Architecture', icon: Layers },
              { id: 'security', label: '2. Zero-Trust & Data Sovereignty', icon: ShieldCheck },
              { id: 'integrations', label: '3. National Public Rail Adapters', icon: Network },
              { id: 'developer', label: '4. Developer Console & API', icon: Terminal },
            ].map((tab) => {
              const TIcon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-[#0F294A] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-[#0F294A] hover:bg-slate-200/80'
                  }`}
                >
                  <TIcon className={`w-3.5 h-3.5 ${active ? 'text-orange-400' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== MAIN ARCHITECTURE EXPLORER ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* VIEW 1: FULL 5-TIER ARCHITECTURE */}
        {activeTab === 'stack' && (
          <section id="architecture-stack" className="space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                SYSTEM SCHEMATIC • TIER-BY-TIER
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0F294A] tracking-tight mt-1.5">
                The 5-Tier Foundation Behind Every Product.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Click any architectural layer to inspect its components, protocol standards, and data guarantees. Every Bizwoke Nova product is engineered on top of these standardized layers.
              </p>
            </div>

            {/* Layered Interactive Schematic */}
            <div className="space-y-4">
              {architectureLayers.map((layer, idx) => {
                const LIcon = layer.icon;
                const isSelected = activeLayer === idx;

                return (
                  <motion.div
                    key={layer.tier}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setActiveLayer(idx)}
                    className={`rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                      isSelected
                        ? 'border-[#0F294A] bg-white shadow-lg ring-1 ring-[#0F294A]/10'
                        : 'border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Header Bar */}
                    <div className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                          <LIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F294A]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold tracking-wider text-slate-400">{layer.tier}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${layer.badgeCls}`}>
                              {layer.badge}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-xl font-black text-[#0F294A] tracking-tight">
                            {layer.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end md:self-auto">
                        <span className="text-xs font-bold text-slate-500 hidden sm:inline-block">
                          {isSelected ? 'Currently Inspecting' : 'Click to Inspect Components'}
                        </span>
                        <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isSelected ? 'rotate-90 text-[#F27A24]' : ''}`} />
                      </div>
                    </div>

                    {/* Expandable Component Inspection Panel */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-slate-100 bg-slate-50/70 p-4 sm:p-7"
                        >
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-6">
                            {layer.desc}
                          </p>

                          {/* Components Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {layer.components.map((comp) => (
                              <div
                                key={comp.name}
                                className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-[#F27A24]/40 transition-colors"
                              >
                                <div className="text-xs font-bold text-[#0F294A] flex items-center justify-between">
                                  <span>{comp.name}</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                                  {comp.desc}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Protocols / Standards Bar */}
                          <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">
                              Protocol Standards:
                            </span>
                            {layer.protocols.map((proto) => (
                              <span
                                key={proto}
                                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs"
                              >
                                {proto}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* VIEW 2: ZERO-TRUST & DATA SOVEREIGNTY */}
        {activeTab === 'security' && (
          <section className="space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#0D9488]">
                CYBER-SECURITY & SOVEREIGNTY ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0F294A] tracking-tight mt-1.5">
                Zero-Trust Boundaries & Indian DPDP Act 2023.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                We believe security cannot be an afterthought. NEP enforces cryptographic tenant isolation, zero-trust perimeter security, and complete data residency inside Indian borders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: KeyRound,
                  title: 'Cryptographic Tenant Isolation',
                  desc: 'Every database query enforces tenant boundaries at the database engine level via PostgreSQL Row-Level Security (RLS). Sensitive government and enterprise deployments receive isolated sovereign schemas with zero cross-tenant contamination.',
                  badge: 'Row-Level Security'
                },
                {
                  icon: ShieldCheck,
                  title: '100% Indian Data Residency',
                  desc: 'All customer data, telemetry logs, biometric vectors, and financial records reside exclusively in Tier-4 domestic data centers across Delhi NCR, Mumbai, and Bengaluru. No citizen or enterprise data ever crosses international borders.',
                  badge: 'Data Sovereignty'
                },
                {
                  icon: Lock,
                  title: 'Envelope Encryption (AES-256)',
                  desc: 'Data at rest is secured using AES-256-GCM envelope encryption with per-tenant encryption keys managed by dedicated Hardware Security Modules (HSMs). Transit traffic enforces strict TLS 1.3 with forward secrecy.',
                  badge: 'AES-256-GCM / TLS 1.3'
                },
                {
                  icon: ShieldAlert,
                  title: 'DPDP Act 2023 Ready',
                  desc: 'Native compliance engines supporting purpose-limited consent management, automated data erasure, citizen grievance redressal workflows, and tamper-evident audit trails mandated by the Digital Personal Data Protection Act.',
                  badge: 'DPDP Compliance'
                },
                {
                  icon: HardDriveDownload,
                  title: 'Disaster Recovery & Hot Standby',
                  desc: 'Automated asynchronous continuous replication across geographically separated domestic nodes ensures a Recovery Point Objective (RPO) of under 15 minutes and a Recovery Time Objective (RTO) of under 30 minutes.',
                  badge: 'RPO < 15m • RTO < 30m'
                },
                {
                  icon: Activity,
                  title: 'Continuous Vulnerability Telemetry',
                  desc: 'Real-time eBPF network kernel monitoring, automated dependency security scanning, automated rate-limiting, and proactive anomaly detection prevent unauthorized ingress before execution reaches application code.',
                  badge: 'eBPF / 24x7 SOC'
                }
              ].map((item) => {
                const SIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0D9488]/50 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-[#0D9488] flex items-center justify-center border border-teal-500/20">
                          <SIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#0F294A]">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* VIEW 3: NATIONAL PUBLIC DIGITAL RAILS */}
        {activeTab === 'integrations' && (
          <section className="space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                INDIAN PUBLIC DIGITAL INFRASTRUCTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0F294A] tracking-tight mt-1.5">
                Native Connectors for India Stack & ONDC.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                NEP provides enterprise adapters that natively bridge our platforms with India's pioneering open digital ecosystems, allowing instant verification, payments, and trade discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'DigiLocker Verification Gateway',
                  rail: 'Identity & Credentials',
                  desc: 'Enables platforms like Tirvona and Political ERP to verify citizen identities, vehicle registrations, and institutional licenses directly through the national DigiLocker repository with zero paperwork.',
                  features: ['Consent-based document pull', 'Cryptographic signature check', 'Zero manual verification delay']
                },
                {
                  title: 'UPI & Bharat BillPay (BBPS) Routing',
                  rail: 'Real-Time Payments',
                  desc: 'Multi-bank payment routing with sub-second QR generation, dynamic intent links, split settlement for marketplaces, and automated GST reconciliation for municipal & enterprise bills.',
                  features: ['Dynamic QR & Intent links', 'Auto-reconciliation ledger', 'Automated GST credit validation']
                },
                {
                  title: 'ONDC Open Commerce Network (Beckn)',
                  rail: 'Open Commerce Discovery',
                  desc: 'BharatBN and Pravixo communicate directly via Beckn protocol, allowing MSMEs and creators on our platforms to be discovered across any ONDC-enabled buyer app nationwide.',
                  features: ['Beckn BAP/BPP gateway', 'Catalog schema harmonization', 'Real-time order state events']
                },
                {
                  title: 'GSTN & Corporate Registry Sync',
                  rail: 'Business Authentication',
                  desc: 'Instant verification of business GSTIN, filing status, active director credentials, and MSME Udyam certificates, creating trusted enterprise commerce corridors across BharatBN.',
                  features: ['Live GSTIN status pull', 'Udyam certificate validation', 'Automated invoice compliance']
                }
              ].map((rail) => (
                <div
                  key={rail.title}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#F27A24]/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#F27A24]">{rail.rail}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F294A]">{rail.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">{rail.desc}</p>
                  <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {rail.features.map((f) => (
                      <li key={f} className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VIEW 4: DEVELOPER CONSOLE & LIVE API */}
        {activeTab === 'developer' && (
          <section id="developer-console" className="space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#2563EB]">
                DEVELOPER CONSOLE • REAL CODE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0F294A] tracking-tight mt-1.5">
                How Platforms Connect to the NEP Backbone.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Inspect a real endpoint request showing how vertical applications dispatch workflows through NEP’s distributed execution engine with verified cryptographic headers.
              </p>
            </div>

            {/* Interactive Terminal / Code Box */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 shadow-xl overflow-hidden font-mono">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-xs text-slate-400 font-sans font-bold ml-2">
                    POST /api/v1/nep/workflows/dispatch
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {['curl', 'typescript', 'python'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setCodeLang(lang)}
                      className={`text-[11px] font-sans font-bold px-2.5 py-1 rounded-md transition-colors ${
                        codeLang === lang ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}

                  <button
                    onClick={copyCode}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm leading-relaxed text-slate-300">
                <pre>{codeSnippets[codeLang]}</pre>
              </div>

              {/* Live Mock Response */}
              <div className="border-t border-slate-800 p-4 bg-slate-900/80 font-sans">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    HTTP 200 OK • Execution Time: 34ms
                  </span>
                  <span className="text-slate-400">Tenant: tirvona_production (Schema Isolated)</span>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>

      {/* ===================== CALL TO ACTION ===================== */}
      <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0F294A] text-white p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                ENTERPRISE PARTNERSHIP & INTEGRATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Architect Your Enterprise on the NEP Foundation.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether deploying a custom municipal portal, multi-state tourism platform, or sovereign business network, leverage the battle-tested architecture of the NKTech Enterprise Platform™.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to="/contact/?type=tech"
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] shadow-md transition-all text-center inline-flex items-center justify-center gap-2 group"
              >
                <span>Discuss Technical Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/partners/"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors text-center"
              >
                Technology Partner Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
