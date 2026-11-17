"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full bg-[#004475]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#004475]">
    {children}
  </span>
);

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: 0.06 * i, duration: 0.45 },
});

export default function ManufacturingERPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f3f8fe] via-white to-[#dcecfa] py-16 md:py-24">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#33a8d9]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <Tag>MANUFACTURING ERP SOFTWARE</Tag>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#003366] md:text-5xl lg:text-6xl">
              Manage Your <span className="text-[#33a8d9]">Manufacturing Operations</span> in One Place
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Managing a manufacturing business involves coordinating purchasing, inventory, production, quality, sales
              and accounts. When these activities are handled through separate systems or spreadsheets, it becomes
              difficult to maintain accurate information and track daily operations.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Livik Tech develops Manufacturing ERP solutions to help businesses manage their operations through one
              integrated platform.
            </p>
            <p className="mt-4 text-lg font-medium text-[#003366]">
              From raw material procurement and production planning to finished goods, dispatch and accounting, bring
              your key business activities together with an ERP designed around your manufacturing process.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?service=Manufacturing%20ERP"
                className="inline-flex items-center gap-2 rounded-xl bg-[#004475] px-6 py-3 font-bold text-white transition hover:bg-[#003366]"
              >
                Book a Demo <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-[#004475] px-6 py-3 font-bold text-[#004475] transition hover:bg-[#004475]/5"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <Tag>MODULES</Tag>
            <h2 className="mt-4 text-3xl font-extrabold text-[#003366] md:text-4xl">Manufacturing ERP Modules</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                {...fadeUp(i % 3)}
                className="group rounded-2xl border border-gray-200 bg-[#f6f9fe] p-6 transition hover:-translate-y-1 hover:border-[#33a8d9] hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#004475] text-white transition group-hover:bg-[#33a8d9]">
                  <m.icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#003366]">{m.title}</h3>
                <p className="mt-2 text-gray-600">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="bg-gradient-to-br from-[#003366] via-[#004475] to-[#0b5370] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#7dd3fc]">
              <Sparkles size={14} /> AI &amp; AUTOMATION
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Manufacturing ERP with AI Capabilities</h2>
            <p className="mt-4 text-lg text-blue-100">
              We also help manufacturers introduce AI and automation into their business processes.
            </p>
            <p className="mt-2 text-blue-200">Depending on business requirements, AI capabilities can include:</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aiCapabilities.map((a, i) => (
              <motion.div
                key={a.text}
                {...fadeUp(i)}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <a.icon className="h-7 w-7 text-[#7dd3fc]" />
                <p className="mt-3 font-medium">{a.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-blue-100">
            These capabilities can be integrated into manufacturing workflows to reduce repetitive manual work.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Tag>INDUSTRIES</Tag>
            <h2 className="mt-4 text-3xl font-extrabold text-[#003366] md:text-4xl">
              Manufacturing ERP for Different Industries
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Livik Tech develops ERP solutions based on the operational requirements of different manufacturing
              businesses.
            </p>
          </div>
          <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                {...fadeUp(i)}
                className="min-w-[240px] shrink-0 snap-start rounded-2xl border border-gray-200 bg-[#f6f9fe] p-6 transition hover:-translate-y-1 hover:border-[#33a8d9] hover:bg-white hover:shadow-lg lg:min-w-0"
              >
                <h3 className="text-lg font-bold text-[#003366]">{ind.name}</h3>
                <p className="mt-2 text-gray-600">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-[#f6f9fe] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <Tag>WHY LIVIK TECH</Tag>
            <h2 className="mt-4 text-3xl font-extrabold text-[#003366] md:text-4xl">Why Choose Livik Tech?</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w}
                {...fadeUp(i % 2)}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#33a8d9]" />
                <p className="font-medium text-[#003366]">{w}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
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
            <Tag>FAQ</Tag>
            <h2 className="mt-4 text-3xl font-extrabold text-[#003366] md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-xl border bg-white transition-shadow ${open ? "border-[#33a8d9] shadow-md" : "border-gray-200"}`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-base font-semibold text-[#003366] md:text-lg">{f.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#33a8d9] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
                        <p className="px-5 pb-5 leading-relaxed text-gray-600">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#004475] to-[#0b5370] px-4 py-16 text-center text-white md:px-8 md:py-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <motion.div {...fadeUp()} className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Looking for a Manufacturing ERP for Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-blue-100 sm:text-lg">
            Let&apos;s understand your manufacturing process and discuss how an ERP can help manage your day-to-day
            operations.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact?service=Manufacturing%20ERP"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-white px-8 font-extrabold text-[#003366] shadow-xl transition-all hover:scale-105 hover:bg-blue-50"
            >
              Contact Livik Tech for a Manufacturing ERP Demo <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
