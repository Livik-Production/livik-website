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

export default function CustomERPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero (white) */}
      <section className="px-4 py-10 md:px-8 md:py-10">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#33a8d9] md:text-6xl">
              Custom ERP Solutions
            </h1>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#004475] md:text-4xl">
              ERP Software Designed Around Your Business
            </h2>
            <p className="mt-8 text-xl text-gray-600">
              Every business has its own processes, workflows and operational requirements. Standard ERP software may
              not always fit the way your business operates.
            </p>
            <p className="mt-4 text-xl text-gray-600">
              Livik Tech develops custom ERP solutions tailored to your business requirements. From managing daily
              operations and inventory to production, sales, finance and employee management, we build ERP systems that
              bring your business activities together.
            </p>
            <p className="mt-4 text-xl font-medium text-[#004475]">
              Whether you are looking to replace spreadsheets, improve existing processes or build an ERP from scratch,
              we can help you develop a solution that fits your business.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full bg-[#004475] px-8 font-bold text-white shadow-lg hover:bg-[#1d8fe1]">
                <Link href="/contact?service=Custom%20ERP%20Solutions" className="flex items-center gap-2">
                  Discuss Your ERP Requirements <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-[#004475] px-8 font-bold text-[#004475] hover:bg-blue-50">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services (dark blue, like "AI Solutions We Deliver") */}
      <section className="relative overflow-hidden bg-[#004475] px-4 py-14 text-white md:px-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}
        />
        <div className="container-custom relative z-10">
          <ScrollReveal className="mb-10 text-center md:mb-16">
            <h2 className="heading-section flex flex-wrap items-center justify-center gap-2 text-center text-white">
              Custom ERP Development for Your{" "}
              <span className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-7 py-2.5">
                <span className="absolute inset-0 rounded-2xl border border-white/30 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-blur-xl" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <span className="relative z-10 bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] bg-clip-text font-black tracking-tight text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] animate-[gradShift_4s_linear_infinite]">
                  Business
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
              We work with businesses to understand their existing processes and develop ERP solutions based on their
              operational needs.
            </p>
            <p className="mt-2 text-blue-200">Our custom ERP development services include:</p>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <StaggerItem key={s.title}>
                  <div className="group flex h-full flex-col rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] hover:-translate-y-[10px] hover:border-[#1d8fe1]">
                    <div className="wc-icon-tile mb-6">
                      <s.icon size={26} />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-[#004475]">{i + 1}. {s.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-[#506478]">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Industries (slate, like "What You Gain") */}
      <section className="bg-slate-200 px-4 py-14 md:px-8 md:py-16">
        <div className="container-custom">
          <ScrollReveal className="mb-10 text-center md:mb-16">
            <h2 className="text-3xl font-bold text-[#004475] md:text-4xl lg:text-5xl">
              ERP Solutions for Different Industries
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
              We develop ERP solutions based on the specific requirements of different business sectors.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={(i % 3) * 0.1}>
                <div className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[10px] hover:border-[#1d8fe1] hover:bg-gradient-to-b hover:from-white hover:to-[#f4faff] hover:shadow-[0_8px_30px_rgba(0,68,117,0.28),0_0_0_1px_rgba(29,143,225,0.25),0_0_20px_rgba(29,143,225,0.35)] md:p-8">
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

      {/* Approach (white, like "How We Build AI Solutions") */}
      <section className="px-4 py-14 md:px-8 md:py-16">
        <div className="container-custom mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold text-[#004475] md:text-4xl lg:text-5xl">
              Our Custom ERP Development Approach
            </h2>
            <div className="relative space-y-12 before:absolute before:bottom-2 before:left-6 before:top-2 before:w-0.5 before:bg-blue-100">
              {approach.map((a, i) => (
                <div key={a.title} className="relative pl-16">
                  <div className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#004475] bg-white font-bold text-[#004475]">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#004475]">{a.title}</h3>
                  <p className="text-gray-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
              </span>{" "}
              for Custom ERP Development?
            </h2>
          </ScrollReveal>
          <StaggerContainer>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          <ScrollReveal>
            <p className="mt-12 text-center text-xl font-medium italic text-gray-500">
              We focus on building practical software that fits your business operations.
            </p>
          </ScrollReveal>
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
              Looking for an ERP That Fits Your Business?
            </h2>
            <div className="mx-auto mb-10 mt-6 max-w-2xl space-y-3 text-xl leading-relaxed opacity-90">
              <p>
                Let&apos;s discuss your business processes and identify the right ERP solution for your requirements.
              </p>
              <p>
                Whether you need a completely new ERP or want to improve an existing business system, Livik Tech can
                help you plan and develop the solution.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="h-14 rounded-xl px-10 font-bold shadow-xl shadow-blue-900/20 transition-all active:scale-95" asChild>
              <Link href="/contact?service=Custom%20ERP%20Solutions">
                Talk to Our ERP Development Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
