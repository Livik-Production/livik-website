"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import "../Services/WhyChoose.css";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Factory,
  Network,
  Boxes,
  CalendarClock,
  ShoppingCart,
  ShieldCheck,
  Wrench,
  Calculator,
  Handshake,
  Receipt,
  Users,
  BarChart3,
  Building2,
  Sparkles,
  FileText,
  Bot,
  MessageSquare,
  Workflow,
  LineChart,
} from "lucide-react";

const modules = [
  { title: "Production Management", desc: "Manage production orders, job cards, work schedules and shop-floor activities. Track work-in-progress and monitor planned versus actual production.", icon: Factory },
  { title: "Bill of Materials (BOM)", desc: "Maintain product structures, raw material requirements, components and multi-level BOMs. Use BOM information for production and material planning.", icon: Network },
  { title: "Inventory Management", desc: "Track raw materials, semi-finished goods and finished products. Manage stock by warehouse, batch and location, with better visibility into material consumption.", icon: Boxes },
  { title: "Material Requirement Planning", desc: "Plan raw material purchases based on production requirements, BOM and available stock. Identify material shortages before they affect production.", icon: CalendarClock },
  { title: "Purchase Management", desc: "Manage purchase requests, supplier quotations, purchase orders, goods receipts and supplier payments.", icon: ShoppingCart },
  { title: "Quality Management", desc: "Record incoming material inspections, in-process quality checks, finished product inspections, rejections and rework.", icon: ShieldCheck },
  { title: "Machine & Maintenance Management", desc: "Maintain machine records, schedule preventive maintenance and track breakdowns and downtime.", icon: Wrench },
  { title: "Manufacturing Costing", desc: "Monitor raw material, labour and production overheads. Understand product-wise and order-wise manufacturing costs.", icon: Calculator },
  { title: "Sales & Order Management", desc: "Manage customer enquiries, quotations, sales orders, delivery schedules and dispatch activities.", icon: Handshake },
  { title: "GST & Accounting Integration", desc: "Generate GST invoices, manage purchase and sales transactions, and integrate with TallyPrime to reduce duplicate data entry. Support e-Invoice and e-Way Bill workflows.", icon: Receipt },
  { title: "Employee & Attendance Management", desc: "Maintain employee records, track attendance and manage payroll within the ERP.", icon: Users },
  { title: "Reports & Business Analytics", desc: "Access reports covering production, inventory, purchases, sales, material consumption, costing and customer outstanding.", icon: BarChart3 },
  { title: "Multi-Plant Management", desc: "Manage multiple manufacturing units and business entities through a centralized system with location-wise visibility.", icon: Building2 },
];

const aiCapabilities = [
  { text: "Reading and extracting information from uploaded documents.", icon: FileText },
  { text: "AI-assisted data entry.", icon: Bot },
  { text: "Customer enquiry processing.", icon: MessageSquare },
  { text: "Automated business workflows.", icon: Workflow },
  { text: "AI-powered reporting and data analysis.", icon: LineChart },
];

const industries = [
  { name: "Glass Manufacturing", desc: "Cutting, production tracking, wastage and inventory management." },
  { name: "Textile Manufacturing", desc: "Production planning, raw material and job work management." },
  { name: "Plastics & PVC", desc: "Material consumption, batch and production management." },
  { name: "Engineering & Fabrication", desc: "BOM, job cards, work orders and costing." },
  { name: "Industrial Components", desc: "Inventory, assembly and production tracking." },
];

const whyChoose = [
  "ERP workflows based on your manufacturing requirements.",
  "Production, inventory, purchase and sales in one system.",
  "Customizable modules and business processes.",
  "TallyPrime integration.",
  "AI and automation capabilities.",
  "Support for growing and multi-location businesses.",
];

const faqs = [
  { q: "What is Manufacturing ERP software?", a: "Manufacturing ERP is software that helps businesses manage production, inventory, purchasing, sales, quality, costing and accounting through one integrated system." },
  { q: "Can Manufacturing ERP support BOM management?", a: "Yes. It can manage multi-level BOMs, product structures, component requirements and material planning." },
  { q: "Can I track production in real time?", a: "Production progress can be tracked through work orders, job cards and shop-floor updates, depending on the configured workflow." },
  { q: "Does the ERP support GST and TallyPrime integration?", a: "Yes. GST billing and relevant statutory integrations can be configured. TallyPrime integration helps reduce duplicate accounting entries." },
  { q: "Can the ERP be customized for my industry?", a: "Yes. Livik Tech develops manufacturing ERP solutions based on your products, production process and business requirements." },
];

export default function ManufacturingERPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero (white) */}
      <section className="px-4 py-10 md:px-8 md:py-10">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#33a8d9] md:text-6xl">
              Manufacturing ERP Software
            </h1>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#004475] md:text-4xl">
              Manage Your Manufacturing Operations in One Place
            </h2>
            <p className="mt-8 text-xl text-gray-600">
              Managing a manufacturing business involves coordinating purchasing, inventory, production, quality, sales
              and accounts. When these activities are handled through separate systems or spreadsheets, it becomes
              difficult to maintain accurate information and track daily operations.
            </p>
            <p className="mt-4 text-xl text-gray-600">
              Livik Tech develops Manufacturing ERP solutions to help businesses manage their operations through one
              integrated platform.
            </p>
            <p className="mt-4 text-xl font-medium text-[#004475]">
              From raw material procurement and production planning to finished goods, dispatch and accounting, bring
              your key business activities together with an ERP designed around your manufacturing process.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full bg-[#004475] px-8 font-bold text-white shadow-lg hover:bg-[#1d8fe1]">
                <Link href="/contact?service=Manufacturing%20ERP" className="flex items-center gap-2">
                  Book a Demo <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-[#004475] px-8 font-bold text-[#004475] hover:bg-blue-50">
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modules (dark blue, like "AI Solutions We Deliver") */}
      <section className="relative overflow-hidden bg-[#004475] px-4 py-14 text-white md:px-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}
        />
        <div className="container-custom relative z-10">
          <ScrollReveal className="mb-10 text-center md:mb-16">
            <h2 className="heading-section flex flex-wrap items-center justify-center gap-2 text-center text-white">
              Manufacturing ERP{" "}
              <span className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-7 py-2.5">
                <span className="absolute inset-0 rounded-2xl border border-white/30 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-blur-xl" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <span className="relative z-10 bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] bg-clip-text font-black tracking-tight text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] animate-[gradShift_4s_linear_infinite]">
                  Modules
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
              </span>
            </h2>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((m) => (
                <StaggerItem key={m.title}>
                  <div className="group flex h-full flex-col rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] hover:-translate-y-[10px] hover:border-[#1d8fe1] md:p-8">
                    <div className="wc-icon-tile mb-6">
                      <m.icon size={26} />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-[#004475]">{m.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-[#506478]">{m.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* AI capabilities (white, like "Advanced AI Capabilities") */}
      <section className="px-4 py-14 md:px-8 md:py-16">
        <div className="container-custom">
          <ScrollReveal className="mb-10 text-center md:mb-16">
            <h2 className="text-3xl font-bold text-[#004475] md:text-4xl lg:text-5xl">
              Manufacturing ERP with AI Capabilities
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
              We also help manufacturers introduce AI and automation into their business processes. Depending on
              business requirements, AI capabilities can include:
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {aiCapabilities.map((a, i) => (
              <ScrollReveal key={a.text} delay={i * 0.1}>
                <div className="wc-feature-card group flex h-full flex-col items-start rounded-2xl border border-gray-300 bg-white p-6 text-left transition-all duration-300 md:p-8">
                  <div className="wc-icon-tile mb-6">
                    <a.icon size={26} />
                  </div>
                  <h3 className="wc-feature-title text-xl font-bold text-[#004475]">{a.text}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium italic text-gray-500">
              These capabilities can be integrated into manufacturing workflows to reduce repetitive manual work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries (slate, like "What You Gain") */}
      <section className="bg-slate-200 px-4 py-14 md:px-8 md:py-16">
        <div className="container-custom">
          <ScrollReveal className="mb-10 text-center md:mb-16">
            <h2 className="text-3xl font-bold text-[#004475] md:text-4xl lg:text-5xl">
              Manufacturing ERP for Different Industries
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
              Livik Tech develops ERP solutions based on the operational requirements of different manufacturing
              businesses.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 0.1}>
                <div className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[10px] hover:border-[#1d8fe1] hover:bg-gradient-to-b hover:from-white hover:to-[#f4faff] hover:shadow-[0_8px_30px_rgba(0,68,117,0.28),0_0_0_1px_rgba(29,143,225,0.25),0_0_20px_rgba(29,143,225,0.35)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,143,225,0.18)_0%,transparent_100%)] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#004475] via-[#1d8fe1] to-[#cfe6f7] transition-transform duration-[500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-x-100" />
                  <h3 className="relative z-10 mb-3 text-xl font-bold text-[#004475]">{ind.name}</h3>
                  <p className="relative z-10 text-sm font-medium leading-relaxed text-[#506478]">{ind.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose (light blue, like "Why Choose Livik") */}
      <section className="bg-blue-50/40 px-4 py-14 md:px-8 md:py-16">
        <div className="container-custom">
          <ScrollReveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#004475] md:text-4xl lg:text-5xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik Tech
              </span>
              ?
            </h2>
          </ScrollReveal>
          <StaggerContainer>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {whyChoose.map((w) => (
                <StaggerItem key={w}>
                  <div className="wc-feature-card group flex h-full flex-col items-start rounded-2xl border border-gray-300 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="wc-icon-tile mb-6">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="wc-feature-title text-lg font-bold text-[#004475]">{w}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ (white) */}
      <section className="px-4 py-14 md:px-8 md:py-16">
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
        <div className="container-custom mx-auto max-w-4xl">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#004475] md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <ScrollReveal key={f.q} delay={i * 0.05}>
                  <div className={`rounded-xl border bg-white transition-all duration-300 ${open ? "border-[#1d8fe1] shadow-md" : "border-gray-300"}`}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="text-base font-bold text-[#004475] md:text-lg">{f.q}</span>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-[#1d8fe1] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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
                          <p className="px-5 pb-5 text-sm font-medium leading-relaxed text-[#506478]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA (gradient, like AI page footer CTA) */}
      <section className="gradient-hero px-4 py-10 text-white md:px-8 md:py-12">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Looking for a Manufacturing ERP for Your Business?
            </h2>
            <p className="mx-auto mb-10 mt-6 max-w-2xl text-xl leading-relaxed opacity-90">
              Let&apos;s understand your manufacturing process and discuss how an ERP can help manage your day-to-day
              operations.
            </p>
            <Button size="lg" variant="secondary" className="h-14 rounded-xl px-10 font-bold shadow-xl shadow-blue-900/20 transition-all active:scale-95" asChild>
              <Link href="/contact?service=Manufacturing%20ERP">
                Contact Livik Tech for a Manufacturing ERP Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
