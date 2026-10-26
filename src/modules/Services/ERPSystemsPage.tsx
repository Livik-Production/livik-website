"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import {
  Factory,
  Boxes,
  Workflow,
  Zap,
  Target,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Wallet,
  Settings,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  BarChart3,
  ClipboardCheck,
  Package,
  ShoppingCart,
  IndianRupee,
  Layers,
  Sparkles,
  AlertTriangle,
  FileCheck,
  Building2,
  Shirt,
  Flame,
  PackageCheck,
  Cog,
  Landmark,
  Clock,
  Hourglass,
  FileText,
} from "lucide-react";
import CoreServiceHero from "@/components/CoreServiceHero";
import "./HeroReact.css";
import "./WhyChoose.css";

// 1. One ERP Pipeline: Connected factory activities
const manufacturingPipeline = [
  { step: "01", name: "Purchase", icon: ShoppingCart },
  { step: "02", name: "Raw Material", icon: Package },
  { step: "03", name: "Inventory", icon: Boxes },
  { step: "04", name: "Production", icon: Factory },
  { step: "05", name: "Quality", icon: ClipboardCheck },
  { step: "06", name: "Finished Goods", icon: PackageCheck },
  { step: "07", name: "Sales", icon: Target },
  { step: "08", name: "Invoice", icon: FileCheck },
  { step: "09", name: "E-Invoice / E-Way Bill", icon: Truck },
  { step: "10", name: "Accounting", icon: IndianRupee },
  { step: "11", name: "Payment & Financial Reports", icon: BarChart3 },
];

// 2. Production at the Center - 12 Questions
const productionQuestions = [
  { question: "What needs to be produced?", icon: Package },
  { question: "How much needs to be produced?", icon: Target },
  { question: "When should it be completed?", icon: Clock },
  { question: "Do we have enough raw materials?", icon: Boxes },
  { question: "How much has already been produced?", icon: BarChart3 },
  { question: "How much is still pending?", icon: Hourglass },
  { question: "Where is the production currently?", icon: Workflow },
  { question: "What is being processed outside?", icon: Truck },
  { question: "How much material has been consumed?", icon: Flame },
  { question: "How much wastage has occurred?", icon: AlertTriangle },
  { question: "Has the product passed quality inspection?", icon: ShieldCheck },
  { question: "What is the actual production cost?", icon: IndianRupee },
];

// 3. Plan Production With Confidence
const planningFactors = [
  "Customer orders",
  "Required quantities",
  "Available stock",
  "Raw material availability",
  "Production capacity",
  "Delivery requirements",
  "Existing production commitments",
];

// 4. Track Production From Start to Finish - Stages
const productionStages = [
  "Cutting",
  "Processing",
  "Assembly",
  "Finishing",
  "Quality",
  "Packing",
];

// 4b. Track Production From Start to Finish - You can see
const trackingVisibleItems = [
  "Planned quantity",
  "Completed quantity",
  "Pending quantity",
  "Current production stage",
  "Delayed production",
  "Rejected quantity",
  "Rework",
  "Finished quantity",
];

// 5. Manage Raw Materials and Inventory - You can know
const materialKnowledgeItems = [
  "What materials are available",
  "What materials are required",
  "What materials are already allocated",
  "What materials are running short",
  "What materials need to be purchased",
  "How much material was issued to production",
  "How much was actually consumed",
  "How much was returned",
];

// 6. Manage Purchase From Requirement to Payment Pipeline
const purchasePipeline = [
  { name: "Purchase Request", icon: ClipboardCheck },
  { name: "Supplier", icon: Building2 },
  { name: "Purchase Order", icon: FileCheck },
  { name: "Material Received", icon: PackageCheck },
  { name: "Inventory", icon: Boxes },
  { name: "Purchase Invoice", icon: FileText },
  { name: "Payment", icon: Wallet },
];

// 7. Manage Sales and Customer Orders Pipeline
const salesPipeline = [
  { name: "Check Finished Stock", icon: Boxes },
  { name: "If Required, Plan Production", icon: ClipboardCheck },
  { name: "Produce", icon: Factory },
  { name: "Quality Check", icon: ShieldCheck },
  { name: "Finished Goods", icon: PackageCheck },
  { name: "Dispatch", icon: Truck },
  { name: "Invoice", icon: FileCheck },
];

// 8. Accounting Connected to Your Business - The ERP can support
const accountingSupportedItems = [
  "Sales invoices",
  "Purchase invoices",
  "Customer accounts",
  "Supplier accounts",
  "Receivables",
  "Payables",
  "Payments",
  "Receipts",
  "Expenses",
  "Ledgers",
  "Outstanding reports",
  "Cost centres",
  "Profit & Loss",
  "Balance Sheet",
  "Financial reports",
];

// 9. GST Items
const gstItems = [
  "CGST",
  "SGST",
  "IGST",
  "HSN",
  "Tax rates",
  "GST invoices",
  "GST-related reports",
];

// 9b. Compliance Flow
const complianceFlow = [
  "Invoice",
  "E-Invoice",
  "E-Way Bill",
  "Dispatch",
  "Accounting",
];

// 10. Job Work Examples
const jobWorkExamples = [
  "Cutting",
  "Machining",
  "Dyeing",
  "Printing",
  "Knitting",
  "Fabrication",
  "Finishing",
  "Heat Treatment",
  "Assembly",
];

// 10b. Job Work Questions
const jobWorkQuestions = [
  "What material was sent?",
  "Who has it?",
  "How much was sent?",
  "How much came back?",
  "How much is still pending?",
  "Was there any wastage or rejection?",
];

// 10c. Job Work Flow
const jobWorkFlow = [
  "Material Sent",
  "Outside Processing",
  "Material Received",
  "Quality Check",
  "Next Production Stage",
];

// 11. Quality Records
const qualityRecords = [
  "Material inspection",
  "Production inspection",
  "Final inspection",
  "Accepted quantity",
  "Rejected quantity",
  "Rejection reason",
  "Rework",
  "Quality approval",
  "Test results",
];

// 12. Production Cost Components
const costComponents = [
  "Labour",
  "Machine / Process Cost",
  "Job Work",
  "Other Production Expenses",
];

// 12b. Cost Decision Benefits
const costDecisionBenefits = [
  "Pricing",
  "Cost control",
  "Product profitability",
  "Production planning",
  "Management decisions",
];

// 13. Management Dashboards
const dashboardCategories = [
  {
    title: "Production",
    icon: Factory,
    items: [
      "Planned production",
      "Completed production",
      "Pending production",
      "Delayed production",
    ],
  },
  {
    title: "Inventory",
    icon: Boxes,
    items: [
      "Raw material stock",
      "Finished goods",
      "Stock shortages",
      "Material consumption",
    ],
  },
  {
    title: "Sales",
    icon: Target,
    items: [
      "New orders",
      "Pending orders",
      "Completed orders",
      "Dispatch status",
    ],
  },
  {
    title: "Accounting",
    icon: IndianRupee,
    items: [
      "Sales",
      "Purchases",
      "Receivables",
      "Payables",
      "Outstanding payments",
    ],
  },
  {
    title: "Job Work",
    icon: Cog,
    items: [
      "Materials sent outside",
      "Materials received",
      "Pending materials",
    ],
  },
  {
    title: "Quality",
    icon: ClipboardCheck,
    items: ["Accepted", "Rejected", "Rework"],
  },
];

// 14. Integrations
const integrations = [
  {
    title: "Tally",
    desc: "Connect operational transactions with your existing accounting process.",
    icon: Landmark,
  },
  {
    title: "Ecommerce",
    desc: "Connect Shopify, WooCommerce or your custom ecommerce platform with production and inventory.",
    icon: Boxes,
  },
  {
    title: "GST",
    desc: "Connect applicable GST, e-invoice and e-way bill services.",
    icon: FileCheck,
  },
  {
    title: "CRM",
    desc: "Connect customer and sales information.",
    icon: Target,
  },
  {
    title: "Payments",
    desc: "Connect payment gateways and other payment systems.",
    icon: Wallet,
  },
  {
    title: "Other Business Software",
    desc: "Build APIs and integrations based on your specific requirements.",
    icon: Cpu,
  },
];

// 15. Our Approach (6 Steps)
const approachSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "We understand how your business currently works.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We design the ERP around your process.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "We build the required workflows and features.",
  },
  {
    step: "04",
    title: "Integrate",
    desc: "We connect the ERP with your existing systems.",
  },
  {
    step: "05",
    title: "Implement",
    desc: "We help your team move to the new system.",
  },
  {
    step: "06",
    title: "Improve",
    desc: "We continue to customize and improve the ERP as your business grows.",
  },
];

// 16. Target Industries in India
const targetIndustries = [
  { name: "Textile & Garments", icon: Shirt },
  { name: "Engineering", icon: Cog },
  { name: "Automotive Components", icon: Truck },
  { name: "Machinery", icon: Factory },
  { name: "Electrical & Electronics", icon: Cpu },
  { name: "Furniture", icon: Building2 },
  { name: "Plastics", icon: Boxes },
  { name: "Packaging", icon: PackageCheck },
  { name: "Food Processing", icon: Sparkles },
  { name: "Fabrication", icon: Flame },
  { name: "Foundries", icon: Factory },
  { name: "Industrial Products", icon: Layers },
  { name: "Consumer Products", icon: ShoppingCart },
];

// 17. Why Livik Tech?
const whyLivikTech = [
  {
    title: "We Build Around Your Business",
    desc: "We don't believe every manufacturing company should use the same ERP workflow. Your process is unique. Your ERP should reflect that.",
    icon: Workflow,
  },
  {
    title: "Production + Accounting",
    desc: "We give equal importance to factory operations and financial operations, so production and accounts don't operate as separate worlds.",
    icon: IndianRupee,
  },
  {
    title: "Customized",
    desc: "Your workflows, approvals, calculations, reports and dashboards can be designed according to your requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Connected",
    desc: "Production, inventory, purchase, sales, accounting and compliance can work together.",
    icon: Zap,
  },
  {
    title: "Scalable",
    desc: "Start with the areas that matter most and expand the system as your business grows.",
    icon: BarChart3,
  },
  {
    title: "Modern Technology",
    desc: "We build modern web-based software with a focus on security, performance, usability and long-term maintainability.",
    icon: Cpu,
  },
];

// 18. Excel Problems
const excelProblems = [
  "Too much manual data entry",
  "Multiple Excel files",
  "Difficulty tracking production",
  "Stock mismatches",
  "Lack of production visibility",
  "Delayed reports",
  "Manual invoice processes",
  "Difficulty tracking job work",
  "Separate systems for production and accounts",
  "Repeated data entry between systems",
];

export default function ERPSystemsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#1d8fe1] selection:text-white">
      {/* 1. Interactive Constellation Hero Section */}
      <CoreServiceHero
        slug="erp-systems"
        className="-mt-12"
        iconScale={1.3}
        centerScale={1.4}
      />

      {/* 3. One ERP for Your Complete Manufacturing Business */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-50/80 border-y border-slate-200 relative overflow-hidden">
        <div className="container-custom max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366]">
              One ERP for Your Complete Manufacturing Business
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Running a manufacturing business involves many connected activities.
            </p>
          </ScrollReveal>

          {/* Connected Pipeline Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-8">
            {manufacturingPipeline.map((step, idx) => (
              <div
                key={idx}
                className={`group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1d8fe1] shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${idx === 10 ? "sm:col-span-2 md:col-span-2 lg:col-span-2" : ""
                  }`}
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 border border-blue-100/90 flex items-center justify-center text-[#004475] group-hover:bg-[#004475] group-hover:text-white group-hover:border-[#004475] group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <step.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1d8fe1] opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-xs">
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div className="my-auto">
                  <h4 className="text-sm sm:text-base font-bold text-[#003366] group-hover:text-[#1d8fe1] transition-colors leading-snug">
                    {step.name}
                  </h4>
                </div>

                {/* Interactive Accent Glow Bar: only comes on hover, otherwise hidden */}
                <div className="w-full h-0.5 mt-3.5 overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#004475] to-[#1d8fe1] transition-all duration-500 ease-out rounded-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When these activities are managed through different systems, Excel sheets, paper records, and manual communication, it becomes difficult to know what is happening across the business.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-sm flex items-center">
              <p className="text-base sm:text-lg font-bold text-[#004475]">
                Our Manufacturing ERP connects these activities so your teams can work with the same information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Production Is at the Center (12 Questions) */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white relative">
        <div className="container-custom max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366]">
              Production Is at the Center
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-medium">
              For a manufacturing company, production is where everything comes together.
            </p>
            <p className="text-lg font-bold text-[#004475] mt-5">
              You need to know:
            </p>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productionQuestions.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="h-full p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-[#1d8fe1] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004475] flex items-center justify-center shrink-0 group-hover:bg-[#004475] group-hover:text-white transition-all duration-300 shadow-xs">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#003366] group-hover:text-[#1d8fe1] transition-colors leading-snug">
                        {item.question}
                      </h4>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="mt-8 text-center">
            <div className="inline-block p-4 sm:px-8 rounded-2xl bg-[#004475] text-white font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-all">
              Our ERP is designed to give your production team and management a clear view of these activities.
            </div>
          </div>
        </div>
      </section>

      {/* 5. Plan Production With Confidence & Track Production From Start to Finish */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="container-custom max-w-6xl mx-auto relative z-10 space-y-10 md:space-y-12">
          {/* Part A: Plan Production With Confidence */}
          <div>
            <ScrollReveal className="text-center mb-6">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Plan Production With Confidence
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base font-medium">
                Start production with the right information.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                The system can help you plan production based on:
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {planningFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38bdf8]/50 hover:bg-white/10 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <h5 className="font-bold text-white text-base">{factor}</h5>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm font-semibold text-[#38bdf8]">
              Your production team can see what needs to be produced and what needs attention.
            </p>
          </div>

          {/* Part B: Track Production From Start to Finish */}
          <div className="pt-8 md:pt-10 border-t border-white/10">
            <ScrollReveal className="text-center mb-6">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Track Production From Start to Finish
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base font-medium">
                Your product may go through several stages before it becomes a finished product.
              </p>
            </ScrollReveal>

            {/* Stage Progression Bar */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center mb-6 max-w-5xl mx-auto">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
                For example:
              </span>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-white overflow-x-auto pb-2 sm:pb-0 no-scrollbar whitespace-nowrap">
                {productionStages.map((stage, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 shadow-sm flex items-center gap-2 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                      {stage}
                    </span>
                    {sIdx < productionStages.length - 1 && (
                      <ArrowRight size={14} className="text-[#38bdf8] shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-4 italic">
                The ERP can track the progress through each stage.
              </p>
            </div>

            <div className="text-center mb-6">
              <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider block">
                You can see:
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {trackingVisibleItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-[#38bdf8]/40 hover:bg-white/10 transition-all"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm font-semibold text-[#38bdf8]">
              Know what is happening on your factory floor without chasing multiple people for updates.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Manage Raw Materials and Inventory */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366]">
              Manage Raw Materials and Inventory
            </h2>
            <div className="mt-3 space-y-1 text-base sm:text-lg text-slate-600 font-medium">
              <p>Production cannot stop because the required material is not available.</p>
              <p>Our ERP connects production requirements with inventory.</p>
            </div>
            <p className="text-sm sm:text-base font-bold text-[#004475] mt-6">
              You can know:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {materialKnowledgeItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1d8fe1] hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#004475] group-hover:border-[#004475] transition-all mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#1d8fe1] group-hover:bg-white shadow-[0_0_6px_rgba(29,143,225,0.7)] transition-all" />
                </div>
                <span className="text-sm font-bold text-[#003366] group-hover:text-[#1d8fe1] transition-colors leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm sm:text-base font-semibold text-[#004475]">
            This helps your purchase and production teams work together.
          </p>
        </div>
      </section>

      {/* 7. Manage Purchase From Requirement to Payment */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366]">
              Manage Purchase From Requirement to Payment
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
              Purchase is directly connected to production.
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              The ERP can manage the complete purchase process:
            </p>
          </ScrollReveal>

          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200 shadow-sm max-w-5xl mx-auto mb-6">
            <h4 className="text-base sm:text-lg font-bold text-[#003366] text-center mb-6">
              Material Requirement
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {purchasePipeline.map((step, pIdx) => (
                <div
                  key={pIdx}
                  className="group relative p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#1d8fe1] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[110px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004475] group-hover:bg-[#004475] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs mb-2.5">
                    <step.icon size={18} />
                  </div>
                  <span className="text-xs font-bold text-[#003366] group-hover:text-[#1d8fe1] transition-colors leading-tight">
                    {step.name}
                  </span>
                  {pIdx < purchasePipeline.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white border border-slate-200 items-center justify-center text-[#1d8fe1] shadow-xs">
                      <ArrowRight size={10} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            You can also maintain supplier information, purchase prices, pending orders, received quantities and outstanding payments.
          </p>
        </div>
      </section>

      {/* 8. Manage Sales and Customer Orders */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366]">
              Manage Sales and Customer Orders
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
              Sales orders can be connected directly with production and inventory.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-4">
              For example:
            </p>
          </ScrollReveal>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm max-w-5xl mx-auto mb-6">
            <h4 className="text-base sm:text-lg font-bold text-[#003366] text-center mb-6">
              Customer Order
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {salesPipeline.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="group relative p-3.5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#1d8fe1] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[110px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#004475] group-hover:bg-[#004475] group-hover:text-white group-hover:border-[#004475] transition-all duration-300 flex items-center justify-center shadow-xs mb-2.5">
                    <step.icon size={18} />
                  </div>
                  <span className="text-xs font-bold text-[#003366] group-hover:text-[#1d8fe1] transition-colors leading-tight">
                    {step.name}
                  </span>
                  {sIdx < salesPipeline.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white border border-slate-200 items-center justify-center text-[#1d8fe1] shadow-xs">
                      <ArrowRight size={10} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm sm:text-base font-semibold text-[#004475]">
            This gives your sales and production teams better visibility into customer orders and delivery commitments.
          </p>
        </div>
      </section>

      {/* 9. Accounting Connected to Your Business & GST/E-Way Bill */}
      <section className="py-10 md:py-12 px-4 md:px-8 relative overflow-hidden bg-[#004475] text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-custom max-w-6xl mx-auto relative z-10 space-y-10 md:space-y-12">
          {/* Accounting Part */}
          <div>
            <ScrollReveal className="text-center mb-4">
              <h2 className="text-center heading-section text-white flex items-center justify-center flex-wrap gap-2 text-3xl md:text-4xl font-bold">
                Accounting Connected to Your{" "}
                <span className="relative px-7 py-2.5 inline-flex items-center justify-center group overflow-hidden rounded-2xl">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] animate-[gradShift_4s_linear_infinite] font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    Business
                  </span>
                </span>
              </h2>

              <div className="mt-4 space-y-1 text-base text-blue-100/90 max-w-3xl mx-auto">
                <p className="font-bold text-white text-lg">Accounting is not an afterthought in our ERP.</p>
                <p className="font-bold text-white text-lg">Accounting is one of the core parts of the system.</p>
                <p className="text-sm sm:text-base text-blue-200">
                  Business transactions generated through purchasing, sales, inventory and other operations can flow into the accounting system.
                </p>
              </div>
              <p className="text-sm font-bold text-[#38bdf8] mt-6">
                The ERP can support:
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto mb-6">
              {accountingSupportedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-center flex items-center justify-center min-h-[50px] hover:bg-white/20 transition-all"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm sm:text-base text-blue-100 font-semibold">
              Your management gets a better connection between what happens in the factory and what happens in the accounts.
            </p>
          </div>

          {/* GST, E-Invoice and E-Way Bill Part */}
          <div className="pt-8 md:pt-10 border-t border-white/10">
            <ScrollReveal className="text-center mb-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                GST, E-Invoice and E-Way Bill
              </h3>
              <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-3xl mx-auto">
                For Indian manufacturing businesses, tax and invoice processes are an important part of daily operations.
              </p>
              <p className="text-xs sm:text-sm text-blue-200 mt-4">
                Our ERP is designed to support India-focused requirements including:
              </p>
            </ScrollReveal>

            {/* GST Items */}
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md max-w-4xl mx-auto mb-6">
              <h4 className="text-base font-bold text-[#38bdf8] mb-3 text-center">GST</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {gstItems.map((item, gIdx) => (
                  <span
                    key={gIdx}
                    className="px-3.5 py-1 rounded-lg bg-white/10 text-xs font-bold text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* E-Invoice & E-Way Bill */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                <h4 className="text-base font-bold text-[#38bdf8] mb-2">E-Invoice</h4>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Generate and manage e-invoice information as part of your invoicing process, including applicable IRN and QR-code related workflows through the appropriate integration.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                <h4 className="text-base font-bold text-[#38bdf8] mb-2">E-Way Bill</h4>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Support the process of generating and managing e-way bill information for applicable goods movement.
                </p>
              </div>
            </div>

            {/* Flow */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-4xl mx-auto text-center">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Your business flow can look like:
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                Sales Order
              </h4>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#38bdf8] mb-4 overflow-x-auto pb-2 sm:pb-0 no-scrollbar whitespace-nowrap">
                {complianceFlow.map((step, cIdx) => (
                  <React.Fragment key={cIdx}>
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white shrink-0">
                      {step}
                    </span>
                    {cIdx < complianceFlow.length - 1 && (
                      <ArrowRight size={14} className="text-[#38bdf8] shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-blue-200">
                Instead of managing these activities separately, they can be connected within your business workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Job Work Management & Quality Management */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="container-custom max-w-6xl mx-auto space-y-10 md:space-y-12">
          {/* Job Work */}
          <div>
            <ScrollReveal className="text-center mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366]">
                Job Work Management
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
                Many manufacturing businesses send materials to outside vendors for processing.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-4">
                For example:
              </p>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {jobWorkExamples.map((op, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700"
                >
                  {op}
                </span>
              ))}
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto mb-6">
              <span className="text-sm font-bold text-[#004475] uppercase tracking-wider block mb-4 text-center">
                You need to know:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {jobWorkQuestions.map((q, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#003366] flex items-center gap-2.5 hover:border-[#1d8fe1] transition-colors">
                    <span className="w-2 h-2 rounded-full bg-[#1d8fe1] shrink-0 shadow-[0_0_4px_rgba(29,143,225,0.6)]" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-5xl mx-auto text-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">
                Our ERP can track the complete job-work process.
              </span>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#004475] overflow-x-auto pb-2 sm:pb-0 no-scrollbar whitespace-nowrap">
                {jobWorkFlow.map((step, jIdx) => (
                  <React.Fragment key={jIdx}>
                    <span className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 shadow-xs shrink-0">
                      {step}
                    </span>
                    {jIdx < jobWorkFlow.length - 1 && (
                      <ArrowRight size={14} className="text-[#1d8fe1] shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Quality Management */}
          <div className="pt-8 md:pt-10 border-t border-slate-200">
            <ScrollReveal className="text-center mb-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#003366]">
                Quality Management
              </h3>
              <div className="mt-3 space-y-1 text-base sm:text-lg text-slate-600 font-medium">
                <p>Quality problems can affect production cost, delivery time and customer satisfaction.</p>
                <p className="text-sm sm:text-base font-normal">
                  The ERP can include quality checks at different stages of your manufacturing process.
                </p>
              </div>
              <p className="text-sm font-bold text-[#004475] mt-5">
                You can record:
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-5xl mx-auto mb-6">
              {qualityRecords.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex items-center gap-2.5 hover:bg-white hover:border-[#1d8fe1] transition-all"
                >
                  <CheckCircle2 size={16} className="text-[#1d8fe1] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#003366]">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm sm:text-base font-semibold text-[#004475]">
              Quality information can remain connected to the relevant material, production order or finished product.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Know Your Production Cost */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="container-custom max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Know Your Production Cost
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 font-medium">
              Knowing your actual production cost helps you make better business decisions.
            </p>
          </ScrollReveal>

          <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 mb-6">
            <span className="text-sm font-bold text-[#38bdf8] uppercase tracking-wider block mb-2 text-center">
              Production cost may include:
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
              Raw Material
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {costComponents.map((cost, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white text-center">
                  {cost}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-sm sm:text-base text-slate-300">
              The ERP can bring these details together to help you understand the cost of manufacturing your products.
            </p>
            <div className="pt-2">
              <span className="text-sm font-bold text-[#38bdf8] uppercase tracking-wider block mb-3">
                This can support better:
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {costDecisionBenefits.map((benefit, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-bold text-[#38bdf8]"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Simple Dashboards for Management */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366]">
              Simple Dashboards for Management
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              You should not have to wait for someone to prepare an Excel report to know what is happening in your business.
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-5">
              Your management dashboard can provide information such as:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {dashboardCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#1d8fe1] transition-all"
              >
                <div className="flex items-center gap-3 pb-3 mb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#004475] flex items-center justify-center">
                    <cat.icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-[#003366]">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs sm:text-sm text-slate-700 flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1d8fe1]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-3 px-6 rounded-xl bg-[#004475] text-white text-sm font-bold">
              Important business information at your fingertips
            </div>
          </div>
        </div>
      </section>

      {/* 13. Connect With the Software You Already Use */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-3">
              Connect With the Software You Already Use
            </h2>
            <div className="space-y-1 text-slate-600 max-w-2xl mx-auto mb-8 text-sm md:text-base font-medium">
              <p>You may already be using Tally, ecommerce software, CRM, payroll or other business applications.</p>
              <p>You don't necessarily need to replace everything.</p>
              <p className="text-[#004475] font-bold mt-2">
                Livik Tech can integrate your Manufacturing ERP with the systems that are important to your business.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {integrations.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1d8fe1] hover:bg-white transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#004475] group-hover:scale-110 group-hover:bg-blue-50 transition-all mb-3">
                    <item.icon size={22} />
                  </div>
                  <h4 className="text-sm font-bold text-[#003366] leading-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 14. Built Around Your Manufacturing Process (6-Step Lifecycle) */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="container-custom max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Built Around Your Manufacturing Process
            </h2>
            <div className="space-y-2 text-slate-300 max-w-2xl mx-auto text-sm md:text-base font-normal">
              <p>We understand that every manufacturing company is different.</p>
              <p className="text-xs text-slate-400">
                A textile factory may have a completely different process from an engineering company. An automotive component manufacturer may work differently from a furniture manufacturer. A company using extensive job work will have different requirements from a company doing everything inside its own factory.
              </p>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#38bdf8] mt-5">
              That's why our approach is:
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38bdf8]/50 hover:bg-white/[0.08] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex items-start md:items-center gap-6">
                  <span className="text-3xl font-black text-[#38bdf8]/40 group-hover:text-[#38bdf8] transition-colors">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Designed for Indian Manufacturing Businesses */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366]">
              Designed for Indian Manufacturing Businesses
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium">
              Our initial focus is on manufacturing businesses in India, including:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto mb-6">
            {targetIndustries.map((ind, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-[#1d8fe1] hover:shadow-md hover:bg-white transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#004475] flex items-center justify-center shrink-0 group-hover:bg-[#004475] group-hover:text-white transition-colors">
                  <ind.icon size={16} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#003366] leading-tight">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm sm:text-base font-semibold text-[#004475] max-w-3xl mx-auto">
            We can adapt the system to your specific production process rather than forcing your business into a fixed workflow.
          </p>
        </div>
      </section>

      {/* 16. Why Livik Tech? (Previous Design 2-Column Style) */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#004475] mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik Tech?
              </span>
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyLivikTech.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#1d8fe1] hover:shadow-xl transition-all duration-300 flex items-start gap-5 group">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#004475]/5 flex items-center justify-center text-[#004475] group-hover:bg-[#004475] group-hover:text-white transition-all duration-300">
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#004475] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* 17. Stop Managing Your Factory Through Multiple Excel Sheets */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden text-center shadow-xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Stop Managing Your Factory Through Multiple Excel Sheets
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-5 font-medium">
              If your business is facing problems such as:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-8">
              {excelProblems.map((problem, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3"
                >
                  <AlertTriangle size={16} className="text-rose-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {problem}
                  </span>
                </div>
              ))}
            </div>

            <div className="inline-block p-4 px-6 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 font-bold text-sm sm:text-base">
              it may be time to bring your business processes together.
            </div>
          </div>
        </div>
      </section>

      {/* 18. Let's Build an ERP Around Your Business (Bottom CTA) */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-gradient-to-br from-[#003366] via-[#004475] to-[#0b5370] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="container-custom max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Let's Build an ERP Around Your Business
            </h2>
            <div className="text-base sm:text-lg text-blue-100 mb-6 max-w-xl mx-auto space-y-2 font-medium">
              <p>You don't need to completely change the way your factory works.</p>
              <p className="font-semibold text-white">Tell us how your business works today.</p>
              <p className="text-sm text-blue-200 font-normal">
                We'll understand your production, purchase, inventory, sales and accounting processes and help design an ERP around them.
              </p>
            </div>

            <div className="my-6">
              <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-white to-[#60a5fa] tracking-tight">
                Your Factory. Your Process. Your ERP.
              </span>
            </div>

            <div className="flex justify-center mt-6">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#003366] hover:bg-blue-50 font-extrabold px-8 h-14 rounded-xl shadow-xl hover:scale-105 transition-all"
              >
                <Link href="/contact?service=Manufacturing%20ERP" className="flex items-center gap-2">
                  Talk to Livik Tech about your Manufacturing ERP <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
