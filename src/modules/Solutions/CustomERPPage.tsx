"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Workflow,
  Boxes,
  Handshake,
  Factory,
  Receipt,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

const services = [
  { title: "Business Process Management", desc: "Manage your business workflows, daily activities, approvals and operations through a centralized system.", icon: Workflow },
  { title: "Inventory & Purchase Management", desc: "Track stock, manage warehouses, handle purchase orders, maintain supplier information and monitor material movements.", icon: Boxes },
  { title: "Sales & Customer Management", desc: "Manage customer enquiries, quotations, orders, invoicing, delivery schedules and payment follow-ups.", icon: Handshake },
  { title: "Production & Manufacturing Management", desc: "Manage BOM, production planning, work orders, material consumption, job cards and production tracking.", icon: Factory },
  { title: "Finance & Accounting Integration", desc: "Manage business transactions, GST billing, receivables, payables and integrate with existing accounting software such as TallyPrime.", icon: Receipt },
  { title: "Employee & HR Management", desc: "Maintain employee records, attendance, leave, payroll and other HR-related activities.", icon: Users },
  { title: "Reports & Business Analytics", desc: "Get business reports covering sales, purchases, inventory, production, finance and operational performance.", icon: BarChart3 },
  { title: "AI & Workflow Automation", desc: "Integrate AI capabilities to automate document processing, data entry, customer enquiries and repetitive business workflows.", icon: Sparkles },
];

const industries = [
  { name: "Manufacturing", desc: "Production, BOM, inventory, procurement and costing." },
  { name: "Glass Manufacturing", desc: "Toughened glass production, cutting, wastage and order tracking." },
  { name: "Textiles", desc: "Production planning, inventory, job work and order management." },
  { name: "Trading & Distribution", desc: "Purchase, sales, stock and customer management." },
  { name: "Retail & Ecommerce", desc: "Order management, inventory and business operations." },
  { name: "Service Businesses", desc: "Customer management, service requests, billing and operations." },
];

const approach = [
  { title: "Understand Your Business", desc: "We start by understanding your existing processes, challenges and business requirements." },
  { title: "Plan the ERP", desc: "We identify the required modules, workflows, user roles and integrations." },
  { title: "Design & Develop", desc: "Our team develops the ERP based on the agreed requirements, with a focus on usability and maintainability." },
  { title: "Testing & Implementation", desc: "We test the workflows, validate business operations and support the implementation process." },
  { title: "Ongoing Support & Enhancements", desc: "As your business grows, we can extend the ERP with additional modules, integrations and features." },
];

const whyChoose = [
  "ERP solutions based on your business requirements.",
  "Flexible modules and workflows.",
  "Integration with existing business applications.",
  "AI and automation capabilities.",
  "Web and mobile access.",
  "Scalable architecture for growing businesses.",
  "Ongoing development and support.",
];

const faqs = [
  { q: "What is Custom ERP Software?", a: "Custom ERP software is developed around a company's specific business processes and requirements. Unlike standard ERP products, it can be tailored to the way the business operates." },
  { q: "When should a business choose custom ERP development?", a: "Custom ERP development is worth considering when standard ERP products do not support important business workflows, require extensive customization or cannot integrate properly with existing systems." },
  { q: "Can you develop ERP software from scratch?", a: "Yes. Livik Tech can develop ERP solutions from the ground up based on your business requirements, workflows and preferred technology stack." },
  { q: "Can custom ERP integrate with existing software?", a: "Yes. We can integrate ERP systems with accounting software, payment gateways, ecommerce platforms, third-party APIs and other business applications, depending on their integration capabilities." },
  { q: "Can AI be integrated into custom ERP software?", a: "Yes. AI capabilities can be added for document processing, data extraction, customer enquiry management, workflow automation and business information retrieval." },
  { q: "Can I add more modules in the future?", a: "Yes. The ERP can be designed to support additional modules and functionality as your business requirements evolve." },
  { q: "Do you provide ERP development for manufacturing companies?", a: "Yes. We develop manufacturing-focused ERP solutions covering production, BOM, inventory, procurement, costing and other factory operations." },
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

export default function CustomERPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f3f8fe] via-white to-[#dcecfa] py-16 md:py-24">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#33a8d9]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <Tag>CUSTOM ERP SOLUTIONS</Tag>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#003366] md:text-5xl lg:text-6xl">
              ERP Software Designed Around <span className="text-[#33a8d9]">Your Business</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Every business has its own processes, workflows and operational requirements. Standard ERP software may
              not always fit the way your business operates.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Livik Tech develops custom ERP solutions tailored to your business requirements. From managing daily
              operations and inventory to production, sales, finance and employee management, we build ERP systems that
              bring your business activities together.
            </p>
            <p className="mt-4 text-lg font-medium text-[#003366]">
              Whether you are looking to replace spreadsheets, improve existing processes or build an ERP from scratch,
              we can help you develop a solution that fits your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?service=Custom%20ERP%20Solutions"
                className="inline-flex items-center gap-2 rounded-xl bg-[#004475] px-6 py-3 font-bold text-white transition hover:bg-[#003366]"
              >
                Discuss Your ERP Requirements <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-[#004475] px-6 py-3 font-bold text-[#004475] transition hover:bg-[#004475]/5"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Tag>SERVICES</Tag>
            <h2 className="mt-4 text-3xl font-extrabold text-[#003366] md:text-4xl">
              Custom ERP Development for Your Business
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We work with businesses to understand their existing processes and develop ERP solutions based on their
              operational needs.
            </p>
            <p className="mt-2 text-gray-500">Our custom ERP development services include:</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(i % 4)}
                className="group rounded-2xl border border-gray-200 bg-[#f6f9fe] p-6 transition hover:-translate-y-1 hover:border-[#33a8d9] hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#004475] text-white transition group-hover:bg-[#33a8d9]">
                    <s.icon size={24} />
                  </div>
                  <span className="text-3xl font-extrabold text-[#004475]/15">{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#003366]">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#f6f9fe] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Tag>INDUSTRIES</Tag>
            <h2 className="mt-4 text-3xl font-extrabold text-[#003366] md:text-4xl">
              ERP Solutions for Different Industries
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We develop ERP solutions based on the specific requirements of different business sectors.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                {...fadeUp(i % 3)}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#33a8d9] hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#003366]">{ind.name}</h3>
                <p className="mt-2 text-gray-600">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <Tag>OUR PROCESS</Tag>
            <h2 className="mt-4 text-3xl font-extrabold text-[#003366] md:text-4xl">
              Our Custom ERP Development Approach
            </h2>
          </div>
          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-gray-200 lg:block" />
            {approach.map((a, i) => (
              <motion.div key={a.title} {...fadeUp(i)} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#004475] text-xl font-extrabold text-white shadow-md">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#003366]">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-gradient-to-br from-[#003366] via-[#004475] to-[#0b5370] py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#7dd3fc]">
              WHY LIVIK TECH
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Why Choose Livik Tech for Custom ERP Development?
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w}
                {...fadeUp(i % 2)}
                className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" />
                <p className="font-medium">{w}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg font-semibold text-blue-100">
            We focus on building practical software that fits your business operations.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f9fe] py-16 md:py-24">
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
            Looking for an ERP That Fits Your Business?
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-3 text-base font-medium text-blue-100 sm:text-lg">
            <p>
              Let&apos;s discuss your business processes and identify the right ERP solution for your requirements.
            </p>
            <p>
              Whether you need a completely new ERP or want to improve an existing business system, Livik Tech can help
              you plan and develop the solution.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact?service=Custom%20ERP%20Solutions"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-white px-8 font-extrabold text-[#003366] shadow-xl transition-all hover:scale-105 hover:bg-blue-50"
            >
              Talk to Our ERP Development Team <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
