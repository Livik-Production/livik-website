"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileWarning, ScanBarcode, Layers, Unplug, Sparkles, Upload, FilePlus2, Scissors, Cog, Drill, Droplets, Flame, Activity, ShoppingCart, Factory, Boxes, Receipt, ShieldCheck, BarChart3, BookOpenCheck, MessageCircle, Smartphone, Users, Target, Eye, TrendingUp, Building2, Warehouse, Store, ChevronDown, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import "../Services/WhyChoose.css";

const highlights = [
  "AI order processing from handwritten orders",
  "Live production progress across every stage",
  "Barcode tracking from cutting to dispatch",
];

const challenges = [
  { title: "Manual order entry", desc: "Handwritten orders retyped by hand cause delays and errors.", icon: FileWarning, solution: "AI order processing" },
  { title: "Untracked production", desc: "No clear view of where each glass piece is on the floor.", icon: ScanBarcode, solution: "Barcode tracking" },
  { title: "Material wastage", desc: "Poor stock visibility leads to cutting waste and over-buying.", icon: Layers, solution: "Inventory management" },
  { title: "Disconnected operations", desc: "Sales, production and billing live in separate tools.", icon: Unplug, solution: "Centralized ERP" },
];

const workflowSteps = [
  { title: "Upload", sub: "Size sheet", icon: Upload },
  { title: "AI Extract", sub: "Read dimensions", icon: Sparkles },
  { title: "Create", sub: "Digital order", icon: FilePlus2 },
];

const glassRows = [
  { size: "1200 x 600", qty: "6", dims: "1200 × 600 mm", thick: "6 mm" },
  { size: "1000 x 600", qty: "6", dims: "1000 × 600 mm", thick: "6 mm" },
  { size: "800 x 1200", qty: "8", dims: "800 × 1200 mm", thick: "8 mm" },
];

const productionStages = [
  { name: "Glass Cutting", pct: 100, icon: Scissors },
  { name: "Grinding", pct: 100, icon: Cog },
  { name: "Drilling", pct: 80, icon: Drill },
  { name: "Washing", pct: 50, icon: Droplets },
  { name: "Tempering", pct: 0, icon: Flame },
];

const trackingFeatures = [
  { title: "Barcode Scanning", desc: "Scan every glass piece at each stage so its exact location is always known.", icon: ScanBarcode },
  { title: "Live Order Progress", desc: "See how far each order has come, in real time, from cutting through to dispatch.", icon: Activity },
];

const erpFeatureGroups = [
  { title: "Sales & Customer Management", desc: "Enquiries, quotations, customer approvals and WhatsApp communication.", icon: ShoppingCart },
  { title: "Production Management", desc: "Job cards, cutting, grinding, tempering and machine scheduling.", icon: Factory },
  { title: "Inventory Management", desc: "Raw glass, leftover sheets, stock movements and wastage.", icon: Boxes },
  { title: "Finance & Accounting", desc: "GST billing, TallyPrime integration and payment tracking.", icon: Receipt },
  { title: "Quality & Control", desc: "Quality inspection, approvals, audit trails and credit control.", icon: ShieldCheck },
  { title: "Business Intelligence", desc: "Reports, analytics, payroll and multi-plant management.", icon: BarChart3 },
];

const integrationBlocks = [
  { title: "TallyPrime Integration", desc: "Connected accounting workflow.", icon: BookOpenCheck, color: "bg-[#004475]" },
  { title: "WhatsApp Integration", desc: "Customer communication and payment reminders.", icon: MessageCircle, color: "bg-emerald-500" },
];

const mobileAccess = [
  { name: "Sales", icon: ShoppingCart },
  { name: "Factory", icon: Factory },
  { name: "Management", icon: Users },
];

const whyLivik = [
  { title: "Industry-focused functionality", icon: Target },
  { title: "AI-powered automation", icon: Sparkles },
  { title: "Real-time production visibility", icon: Eye },
  { title: "Scalable manufacturing management", icon: TrendingUp },
];

const servedIndustries = [
  { name: "Toughened glass manufacturers", icon: Factory },
  { name: "Tempered glass processing units", icon: Flame },
  { name: "Architectural glass manufacturers", icon: Building2 },
  { name: "Commercial glass processors", icon: Store },
  { name: "Industrial glass processing companies", icon: Warehouse },
];

const faqs = [
  { q: "What is Glass ERP software?", a: "Glass ERP is an enterprise resource planning solution designed to manage the complete operations of glass manufacturing businesses. It helps manage customer enquiries, sales orders, raw material inventory, production, cutting, tempering, quality control, billing, accounting and dispatch." },
  { q: "What is Toughened Glass ERP?", a: "Toughened Glass ERP is specialized manufacturing software designed for toughened glass processing factories. It helps manufacturers manage glass cutting, grinding, drilling, washing, tempering, production tracking, wastage, inventory and customer orders through one integrated system." },
  { q: "How does AI help in glass manufacturing ERP?", a: "AI helps automate repetitive activities such as reading handwritten glass size sheets and converting them into structured digital order information. It reduces manual data entry and helps sales teams process customer enquiries faster." },
  { q: "Can I track glass production in real time?", a: "Yes. Glass ERP supports barcode-based tracking across production stages. Every scan updates the production status, allowing managers to view overall order completion and individual stage-wise progress." },
  { q: "Does Glass ERP support glass cutting and wastage management?", a: "Yes. It helps manage glass sheet inventory, material allocation, leftover glass registration and wastage tracking. Cutting optimization capabilities can help manufacturers improve material utilization when configured for their production requirements." },
  { q: "Can Glass ERP integrate with TallyPrime?", a: "Yes. Glass ERP provides TallyPrime integration to reduce duplicate accounting data entry. Relevant business transactions can be transferred to TallyPrime, allowing your accountant or auditor to continue using their existing accounting workflow." },
  { q: "Does Glass ERP support GST billing?", a: "Yes. It supports proforma invoices, GST tax invoices, customer GSTIN information, and e-Invoice and e-Way Bill integration." },
  { q: "Can customers receive quotations through WhatsApp?", a: "Yes. Glass ERP supports WhatsApp-based sharing of proforma invoices, customer approvals and automated payment reminders." },
  { q: "Can I manage multiple glass manufacturing plants?", a: "Yes. Glass ERP supports multi-company and multi-plant management, allowing businesses to manage multiple units through a centralized platform." },
  { q: "Is Glass ERP suitable for small and medium-sized glass manufacturers?", a: "Yes. Glass ERP can be configured according to your factory's operational requirements, helping growing manufacturers organize their production, inventory, sales and accounting activities." },
  { q: "Can I access Glass ERP through a mobile app?", a: "Yes. Mobile access is available for sales representatives, shop-floor employees and managers to stay connected with business operations." },
  { q: "How can I get a demo of Glass ERP?", a: "Contact Livik Tech to schedule a personalized Glass ERP demonstration. Our team can understand your factory requirements and demonstrate how the solution fits your manufacturing workflow." },
];

export default function ToughenedGlassERPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#f3f8fe]">
        {/* Image sets the section height on desktop so nothing is cropped */}
        <Image
          src="/images/glass-erp-hero.png"
          alt="Livik Tech Glass Manufacturing ERP dashboard in a toughened glass factory"
          width={2170}
          height={725}
          priority
          sizes="100vw"
          className="w-full h-auto min-h-[520px] object-cover object-right lg:min-h-0 lg:h-[617px] lg:w-[90%] lg:ml-auto lg:[mask-image:linear-gradient(to_right,transparent,black_10%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent lg:from-transparent lg:via-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:pl-6 xl:pl-10">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-[#004475]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#004475]">
                GLASS MANUFACTURING ERP
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-[#003366]">
                ERP built for <span className="text-[#33a8d9]">toughened glass</span> factories
              </h1>
              <p className="mt-4 text-base xl:text-lg text-gray-600">
                From handwritten orders to dispatch, run sales, production,
                inventory, quality and billing on one connected system.
              </p>
              <ul className="mt-5 space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm xl:text-base text-[#003366] font-medium">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#33a8d9]" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact?service=Glass%20Manufacturing%20ERP"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#004475] px-6 py-3 font-bold text-white transition hover:bg-[#003366]"
                >
                  Book a Demo <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border-2 border-[#004475] px-6 py-3 font-bold text-[#004475] transition hover:bg-[#004475]/5"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 md:py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-[#0b2545]">
              Your Glass Factory Deserves More Than
              <span className="relative mt-1 block text-[#2563eb]">
                Manual Management.
                <svg className="mx-auto mt-1 h-3 w-48 md:w-64" viewBox="0 0 260 12" fill="none" aria-hidden="true">
                  <path d="M3 8 C 60 2, 150 2, 257 6" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </ScrollReveal>

          <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-6 lg:grid-cols-[1.1fr_auto_1fr] lg:gap-3">
            <div className="rounded-3xl border border-gray-400 bg-gradient-to-b from-white to-[#f3f8fe] p-5 shadow-[0_10px_40px_-12px_rgba(0,68,117,0.18)] md:p-5">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-[#dcebfb] px-4 py-2 shadow-sm">
                <AlertTriangle className="h-5 w-5 text-[#004475]" />
                <h3 className="text-xl font-bold text-[#004475]">Common Challenges</h3>
              </div>
              <div className="mt-4 space-y-2.5">
                {challenges.map((c) => (
                  <div key={c.title} className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white/80 px-4 py-3.5 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                      <c.icon className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0b2545]">{c.title}</h4>
                      <p className="mt-0.5 text-[13px] text-gray-600">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <svg viewBox="0 0 64 56" className="h-12 w-9 drop-shadow-[0_6px_10px_rgba(37,99,235,0.3)]" fill="none" aria-hidden="true">
                <path d="M8 8 L28 28 L8 48" stroke="#7fb6f5" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M34 8 L54 28 L34 48" stroke="#2f6df0" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e5fe0] via-[#2563eb] to-[#1d4ed8] p-6 text-white shadow-[0_20px_50px_-15px_rgba(37,99,235,0.6)] md:p-8">
              <div className="pointer-events-none absolute -bottom-10 -right-16 h-64 w-64 rotate-[-12deg] rounded-3xl bg-gradient-to-br from-white/30 to-cyan-200/10 blur-[1px]" />
              <div className="pointer-events-none absolute -bottom-2 -right-8 h-48 w-56 rotate-[-12deg] rounded-3xl border border-white/30 bg-white/15" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Target className="h-7 w-7" />
                  <h3 className="text-xl font-bold md:text-2xl">Our Solution</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {challenges.map((c) => (
                    <li key={c.solution} className="flex items-center gap-3 text-base">
                      <CheckCircle2 className="h-6 w-6 shrink-0 fill-emerald-400 text-white" />
                      {c.solution}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?service=Glass%20Manufacturing%20ERP"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-semibold text-[#1d4ed8] shadow-md transition hover:bg-gray-100"
                >
                  Schedule Demo <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-200 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Turn Handwritten Glass Orders into Digital Workflows.
            </h2>
          </ScrollReveal>

          {/* Workflow steps */}
          <div className="mx-auto mt-12 flex max-w-3xl items-start justify-between">
            {workflowSteps.map((s, i) => (
              <div key={s.title} className="flex flex-1 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#004475] text-white shadow-md">
                    <s.icon size={22} />
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#004475]">{s.title}</p>
                  <p className="text-xs text-gray-500">{s.sub}</p>
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="mx-3 mb-8 h-0.5 flex-1 bg-gradient-to-r from-[#004475] to-[#1d8fe1]/40" />
                )}
              </div>
            ))}
          </div>

          {/* Split screen */}
          <div className="mt-12 grid items-stretch gap-6 rounded-3xl bg-white p-4 shadow-xl md:p-6 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left: handwritten sheet with scan */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 p-6 md:p-8">
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#004475] shadow">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#1d8fe1]" />
                Scanning...
              </span>
              <div className="relative mx-auto mt-8 max-w-sm overflow-hidden rounded-md bg-white p-6 shadow-lg">
                <p className="text-sm font-bold tracking-wide text-gray-400">GLASS SIZE SHEET</p>
                <ul
                  className="mt-4 space-y-3 text-xl text-[#1e3a8a]"
                  style={{ fontFamily: "'Segoe Print','Bradley Hand','Comic Sans MS',cursive" }}
                >
                  {glassRows.map((r) => (
                    <li key={r.size} className="border-b border-blue-100 pb-1">
                      {r.size} <span className="text-gray-400">–</span> {r.qty}
                    </li>
                  ))}
                </ul>
                <motion.div
                  className="absolute inset-x-0 h-14 bg-gradient-to-b from-transparent via-[#1d8fe1]/35 to-transparent border-b-2 border-[#1d8fe1]"
                  initial={{ top: "-20%" }}
                  animate={{ top: ["-20%", "100%"] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Center: AI */}
            <div className="flex flex-row items-center justify-center gap-3 lg:flex-col">
              <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-[#1d8fe1] to-transparent lg:block" />
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d8fe1] to-[#004475] text-white shadow-lg"
              >
                <Sparkles size={28} />
              </motion.div>
              <span className="text-xs font-bold tracking-widest text-[#004475]">AI EXTRACT</span>
              <ArrowRight className="text-[#1d8fe1] lg:rotate-90" />
              <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-[#1d8fe1] to-transparent lg:block" />
            </div>

            {/* Right: extracted digital order */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#004475]">Digital Order</h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Created
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {glassRows.map((r, i) => (
                  <motion.div
                    key={r.size}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i }}
                    className="flex items-center justify-between rounded-lg bg-[#f6f9fe] px-4 py-3"
                  >
                    <div>
                      <p className="text-xs text-gray-500">Item {i + 1} · Toughened glass</p>
                      <p className="font-semibold text-[#004475]">{r.dims}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-600">{r.thick}</span>
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Every Glass Piece. Every Stage. Complete Visibility.
            </h2>
          </ScrollReveal>

          {/* Horizontal timeline */}
          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-gray-200 lg:block" />
            {productionStages.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-md ${
                    s.pct === 100
                      ? "bg-emerald-500 text-white"
                      : s.pct > 0
                        ? "bg-[#004475] text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <s.icon size={24} />
                </div>
                <p className="mt-4 text-xs font-bold tracking-widest text-gray-400">STEP {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold text-[#004475]">{s.name}</h3>
                <p className="mt-1 text-2xl font-extrabold text-[#1d8fe1]">{s.pct}%</p>
                <div className="mt-3 h-2 w-full max-w-[160px] overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    className={`h-full rounded-full ${s.pct === 100 ? "bg-emerald-500" : "bg-[#1d8fe1]"}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + 0.1 * i, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">
            Illustrative production progress based on the supplied content.
          </p>

          {/* Supporting features */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {trackingFeatures.map((f) => (
              <div key={f.title} className="flex gap-5 rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] hover:-translate-y-[8px] hover:border-[#1d8fe1]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#004475] text-white">
                  <f.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004475]">{f.title}</h3>
                  <p className="mt-1 text-gray-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 md:py-14 px-4 md:px-8 relative overflow-hidden bg-[#004475] text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-custom relative z-10">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <h2 className="text-center heading-section text-white flex items-center justify-center flex-wrap gap-2">
              Everything Your Glass Factory Needs, in One{" "}
              <span className="relative px-7 py-2.5 inline-flex items-center justify-center group overflow-hidden rounded-2xl">
                <span className="absolute inset-0 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] animate-[gradShift_4s_linear_infinite] font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  ERP
                </span>
                <span className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />
              </span>
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {erpFeatureGroups.map((g) => (
                <StaggerItem key={g.title}>
                  <div className="group h-full flex flex-col rounded-2xl bg-white p-6 md:p-8 border border-gray-300 transition-all duration-[450ms] hover:-translate-y-[10px] hover:border-[#1d8fe1] shadow-[0_4px_20px_rgba(0,68,117,0.06)]">
                    <div className="wc-icon-tile mb-6">
                      <g.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475] mb-4">{g.title}</h3>
                    <p className="text-sm font-medium text-[#506478] leading-relaxed">{g.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
      <section className="bg-blue-50/40 py-14 md:py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Connected to the Tools You Already Use
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_220px_1fr] lg:gap-0">
            {/* Left blocks */}
            <div className="flex flex-col gap-6">
              {integrationBlocks.slice(0, 2).map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i, duration: 0.6 }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${b.color}`}>
                      <b.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475]">{b.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{b.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Center hub with animated connectors */}
            <div className="relative flex h-40 items-center justify-center lg:h-full lg:min-h-[320px]">
              <svg
                className="absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
              >
                {[
                  "M0 22 C 30 22, 25 50, 50 50",
                  "M0 78 C 30 78, 25 50, 50 50",
                  "M50 50 C 75 50, 70 50, 100 50",
                ].map((d) => (
                  <g key={d}>
                    <path d={d} stroke="#cfe3f3" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <motion.path
                      d={d}
                      stroke="#1d8fe1"
                      strokeWidth="2"
                      strokeDasharray="6 10"
                      vectorEffect="non-scaling-stroke"
                      animate={{ strokeDashoffset: [0, -64] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                  </g>
                ))}
              </svg>
              <div className="relative z-10">
                {[1, 2].map((r) => (
                  <motion.span
                    key={r}
                    className="absolute inset-0 rounded-3xl border-2 border-[#1d8fe1]/40"
                    animate={{ scale: [1, 1.6 + r * 0.3], opacity: [0.6, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: r * 0.8 }}
                  />
                ))}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl ring-1 ring-gray-200"
                >
                  <Image src="/Logo.png" alt="Livik Tech" width={64} height={64} className="h-14 w-auto" />
                </motion.div>
              </div>
            </div>

            {/* Right block: Mobile ERP */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#004475] text-white">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#004475]">Mobile ERP</h3>
              </div>
              <div className="mt-4 space-y-2.5">
                {mobileAccess.map((m) => (
                  <div key={m.name} className="flex items-center gap-3 rounded-lg bg-[#f6f9fe] px-4 py-3">
                    <m.icon className="h-5 w-5 text-[#1d8fe1]" />
                    <span className="font-semibold text-[#004475]">{m.name}</span>
                    <span className="ml-auto text-sm text-gray-500">access</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Technology That Understands Your <span className="text-[#1d8fe1]">Manufacturing</span> Business.
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyLivik.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.45 }}
                className="wc-feature-card group rounded-2xl border border-gray-300 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#1d8fe1] hover:shadow-xl"
              >
                <div className="wc-icon-tile mx-auto">
                  <w.icon size={26} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#004475]">{w.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-200 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Built for Every Kind of Glass Business
            </h2>
          </ScrollReveal>

          <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {servedIndustries.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.45 }}
                className="group min-w-[220px] shrink-0 snap-start rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] hover:-translate-y-[10px] hover:border-[#1d8fe1] hover:shadow-[0_8px_30px_rgba(0,68,117,0.28),0_0_20px_rgba(29,143,225,0.35)] lg:min-w-0"
              >
                <div className="wc-icon-tile">
                  <s.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-[#004475]">{s.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14 md:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Frequently Asked Questions – Glass ERP Software
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-xl border bg-white transition-shadow ${open ? "border-[#1d8fe1] shadow-md" : "border-gray-300"}`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-base md:text-lg font-semibold text-[#004475]">
                        {i + 1}. {f.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#1d8fe1] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#004475] to-[#0b5370] px-4 py-16 text-center text-white md:px-8 md:py-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#7dd3fc]">
            Take Control of Your Glass Manufacturing Business
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Ready to Modernize Your Toughened Glass Factory?
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-3 text-base font-medium text-blue-100 sm:text-lg">
            <p>Stop depending on scattered spreadsheets, manual registers and disconnected business applications.</p>
            <p>
              Bring your customer enquiries, production, inventory, accounts and dispatch together with an
              AI-powered Glass Manufacturing ERP.
            </p>
            <p className="font-semibold text-white">
              Get better production visibility. Reduce manual work. Improve material utilization. Make smarter
              business decisions.
            </p>
            <p className="text-sm font-normal text-blue-200">
              Let Livik Tech help you build a more connected and efficient glass manufacturing business.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact?service=Glass%20Manufacturing%20ERP"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-white px-8 font-extrabold text-[#004475] shadow-xl transition-all hover:scale-105 hover:bg-blue-50"
            >
              Book Your Glass ERP Demo Today <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
