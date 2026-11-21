"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ScanBarcode, Layers, Unplug, Sparkles, Upload, FilePlus2, Scissors, Cog, Drill, Droplets, Flame, Activity, ShoppingCart, Factory, Boxes, Receipt, ShieldCheck, BarChart3, BookOpenCheck, MessageCircle, Smartphone, Users, Target, Eye, TrendingUp, Building2, Warehouse, Store, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import "../Services/WhyChoose.css";
import AiOrderPlacementDemo from "./AiOrderPlacementDemo";

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

const aiOrderPoints = [
  "Capture handwritten glass size sheets.",
  "Extract glass dimensions, thickness and quantities.",
  "Reduce repetitive manual data entry.",
  "Create structured customer enquiries and orders.",
  "Review and confirm extracted information before processing.",
];

const barcodeStages = [
  { name: "Glass cutting", icon: Scissors },
  { name: "Edge grinding and polishing", icon: Cog },
  { name: "Drilling and notching", icon: Drill },
  { name: "Washing", icon: Droplets },
  { name: "Tempering", icon: Flame },
  { name: "Quality inspection", icon: ShieldCheck },
  { name: "Packing and dispatch", icon: Boxes },
];

const productionStages = [
  { name: "Cutting", pct: 100, icon: Scissors },
  { name: "Grinding", pct: 100, icon: Cog },
  { name: "Drilling", pct: 80, icon: Drill },
  { name: "Washing", pct: 50, icon: Droplets },
  { name: "Tempering", pct: 0, icon: Flame },
];

const liveProgressNotes = [
  { text: "The overall order completion and stage-wise progress update automatically through barcode scans at each workstation.", icon: ScanBarcode },
  { text: "View live progress directly from the Work Orders and PI Status screens.", icon: Activity },
  { text: "Your sales team, production manager and business owner can understand order status without repeatedly contacting factory employees.", icon: Users },
];

type MoreFeature = { title: string; tagline: string; intro: string[]; lead?: string; items: string[]; after: string[]; icon: typeof Layers };

const moreFeatures: MoreFeature[] = [
  {
    title: "Intelligent Glass Cutting and Inventory Management",
    tagline: "Make better use of every glass sheet.",
    intro: [
      "Raw glass is one of the major costs in toughened glass manufacturing. Poor inventory control and material wastage directly affect profitability.",
    ],
    lead: "Glass ERP helps you manage:",
    items: [
      "Raw glass inventory by type, thickness, colour and dimensions.",
      "Glass stock tracking by purchase lot.",
      "Material allocation against customer orders.",
      "Leftover glass and offcut registration.",
      "Reusable glass inventory.",
      "Material consumption and wastage tracking.",
      "Stock adjustments and inventory movements.",
    ],
    after: [
      "Register leftover glass pieces and make them available for future production instead of treating every offcut as unusable waste.",
      "Improve material utilization and gain better visibility into your raw glass inventory.",
    ],
    icon: Layers,
  },
  {
    title: "Complete Production Planning and Management",
    tagline: "Manage every production stage from one platform.",
    intro: ["Plan and monitor your factory's production activities with centralized production management."],
    lead: "Features include:",
    items: [
      "Production job card management.",
      "Stage-wise production tracking.",
      "Shift-wise production planning.",
      "Planned versus actual production reports.",
      "Machine allocation and scheduling.",
      "Machine downtime logging.",
      "Production performance monitoring.",
      "Job completion and pending work tracking.",
    ],
    after: ["Get better visibility into factory capacity, production bottlenecks and machine utilization."],
    icon: Factory,
  },
  {
    title: "Furnace and Tempering Process Management",
    tagline: "Manage your toughening operations with better production visibility.",
    intro: ["Organize glass processing activities with batch-wise production tracking and furnace scheduling."],
    items: [
      "Tempering batch management.",
      "Glass thickness and specification tracking.",
      "Furnace scheduling.",
      "Batch-wise production status.",
      "Production history and traceability.",
      "Rejection and breakage tracking.",
    ],
    after: ["Maintain better control over the tempering process and understand production performance across batches."],
    icon: Flame,
  },
  {
    title: "GST-Ready Billing and E-Invoice Management",
    tagline: "Simplify billing and statutory compliance.",
    intro: ["Manage your complete customer billing process within Glass ERP."],
    items: [
      "Proforma invoice generation.",
      "GST tax invoice generation.",
      "Customer GSTIN auto-fill.",
      "GST-compliant billing.",
      "E-Invoice integration.",
      "E-Way Bill integration.",
      "Customer payment tracking.",
      "Outstanding and debtor reports.",
    ],
    after: ["Reduce manual billing activities and keep your business transactions organized."],
    icon: Receipt,
  },
  {
    title: "WhatsApp Integration for Customer Enquiries and Payments",
    tagline: "Keep your customers connected to your business.",
    intro: [
      "WhatsApp is an important communication channel for glass manufacturers. Customers frequently use it to send enquiries, share glass size sheets, request quotations and check order status.",
      "Glass ERP brings WhatsApp communication closer to your business operations.",
    ],
    items: [
      "Share proforma invoices through WhatsApp.",
      "Allow customers to review and approve quotations with a single tap.",
      "Send automated payment reminders.",
      "Improve customer communication.",
      "Reduce manual follow-ups.",
      "Keep sales and payment activities organized.",
    ],
    after: ["Make customer communication faster and more convenient."],
    icon: MessageCircle,
  },
  {
    title: "Customer Credit Control Before Dispatch",
    tagline: "Maintain better control over customer outstanding payments.",
    intro: [
      "Dispatching goods without checking outstanding balances can affect your company's cash flow.",
      "Glass ERP helps your team review customer payment status before dispatch.",
    ],
    items: [
      "View customer outstanding balances.",
      "Monitor pending payments.",
      "Review credit limits.",
      "Check outstanding balances before dispatch.",
      "Configure dispatch approval workflows.",
    ],
    after: ["Give your management team better control over customer credit and dispatch decisions."],
    icon: Target,
  },
  {
    title: "Approval Workflows and Audit Trail",
    tagline: "Keep important business activities under control.",
    intro: ["Not every employee should be able to make changes to critical business information without approval."],
    lead: "Configure approval workflows for:",
    items: [
      "Customer price changes.",
      "Stock adjustments.",
      "Dispatch modifications.",
      "Other important business transactions.",
    ],
    after: [
      "Maintain a complete record of changes, approvals and user activities through audit logs.",
      "Improve accountability, transparency and operational control across your factory.",
    ],
    icon: ShieldCheck,
  },
  {
    title: "TallyPrime Integration – No Duplicate Data Entry",
    tagline: "Manage factory operations in Glass ERP and continue accounting in TallyPrime.",
    intro: [
      "Already using TallyPrime for accounting? You don't need to enter the same business transactions again.",
      "Glass ERP integrates with TallyPrime to transfer relevant accounting information, reducing duplicate data entry and manual reconciliation work.",
    ],
    items: [
      "Synchronize relevant sales transactions.",
      "Transfer purchase and accounting information.",
      "Integrate customer and supplier records.",
      "Reduce repetitive accounting entries.",
      "Maintain a connected operational and accounting workflow.",
    ],
    after: [
      "Your auditor or accountant can continue using TallyPrime for accounting, financial reports and audit requirements while your factory team manages production and daily operations in Glass ERP.",
      "Enter business data once. Keep your operations and accounts connected.",
    ],
    icon: BookOpenCheck,
  },
  {
    title: "Mobile App for Sales Teams and Factory Managers",
    tagline: "Your factory operations, accessible from anywhere.",
    intro: [
      "Stay connected with your manufacturing business even when you are away from the factory.",
      "Glass ERP provides mobile access for different business users.",
    ],
    items: [
      "Sales representatives can access customer and order information.",
      "Shop-floor employees can update production activities.",
      "Managers can monitor order progress.",
      "Business owners can view important operational information.",
    ],
    after: ["Keep your team connected and improve coordination between sales, production and management."],
    icon: Smartphone,
  },
  {
    title: "20+ Business Reports and Analytics",
    tagline: "Make business decisions with better information.",
    intro: ["Access ready-to-use reports to understand your business performance."],
    lead: "Key reports include:",
    items: [
      "Customer outstanding and debtor reports.",
      "Sales reports by location.",
      "Customer-wise sales reports.",
      "Production performance reports.",
      "Planned versus actual production.",
      "Raw material consumption reports.",
      "Glass wastage reports.",
      "Order status and dispatch reports.",
      "Customer complaint reports.",
      "Inventory and stock movement reports.",
    ],
    after: [
      "Export reports to Excel for further analysis and business reviews.",
      "Get better visibility into your factory's operational and financial performance.",
    ],
    icon: BarChart3,
  },
  {
    title: "Payroll and Attendance Management",
    tagline: "Manage your workforce within the same ERP.",
    intro: ["Simplify employee management without maintaining separate HR software for basic workforce operations."],
    items: [
      "Employee information management.",
      "Attendance tracking.",
      "Payroll management.",
      "Employee records.",
      "Workforce reporting.",
    ],
    after: ["Keep your employee and manufacturing operations connected."],
    icon: Users,
  },
  {
    title: "Multi-Company and Multi-Plant Management",
    tagline: "One login. Multiple companies. Complete visibility.",
    intro: [
      "Managing multiple manufacturing units or business entities?",
      "Glass ERP supports centralized management of multiple companies and manufacturing plants.",
    ],
    items: [
      "Manage multiple business entities.",
      "Monitor different manufacturing units.",
      "Centralize business information.",
      "Manage users and access permissions.",
      "View operational reports across locations.",
    ],
    after: ["Expand your manufacturing business without losing control over day-to-day operations."],
    icon: Building2,
  },
];

const whyLivik = [
  { title: "Industry-Focused Functionality", desc: "Designed around glass manufacturing workflows, production stages, glass specifications and inventory requirements.", icon: Target },
  { title: "AI-Powered Automation", desc: "Reduce manual work with AI-powered handwritten order processing and intelligent data extraction.", icon: Sparkles },
  { title: "Real-Time Production Visibility", desc: "Track every glass piece through barcode scanning and monitor order completion across production stages.", icon: Eye },
  { title: "Better Inventory Utilization", desc: "Track raw glass, leftover materials, consumption and wastage.", icon: Warehouse },
  { title: "Connected Business Operations", desc: "Bring sales, production, inventory, accounts, HR and dispatch together.", icon: Unplug },
  { title: "Seamless TallyPrime Integration", desc: "Avoid repetitive accounting data entry while allowing your auditor to continue using TallyPrime.", icon: BookOpenCheck },
  { title: "Scalable Manufacturing Management", desc: "Manage your growing factory operations and multiple manufacturing units through one system.", icon: TrendingUp },
];

const servedIndustries = [
  { name: "Toughened glass manufacturers.", icon: Factory },
  { name: "Tempered glass processing units.", icon: Flame },
  { name: "Architectural glass manufacturers.", icon: Building2 },
  { name: "Commercial glass processors.", icon: Store },
  { name: "Industrial glass processing companies.", icon: Boxes },
  { name: "Glass manufacturers handling project-based orders.", icon: ShoppingCart },
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
          src="/images/glass-erp-hero-v2.png"
          alt="Livik Tech Glass Manufacturing ERP: AI order entry, glass cutting, production tracking, quality control and dispatch in a toughened glass factory"
          width={1672}
          height={941}
          priority
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="w-full h-auto min-h-[520px] object-cover object-right lg:min-h-0 lg:h-[617px] lg:w-[80%] lg:ml-auto lg:object-cover lg:object-right lg:[mask-image:linear-gradient(to_right,transparent,black_8%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent lg:from-transparent lg:via-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:pl-3 xl:pl-3">
            <div className="max-w-2xl lg:max-w-xl xl:max-w-[560px]">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold leading-tight text-[#003366]">
                Toughened Glass <span className="text-[#33a8d9]">ERP Software with AI</span>
              </h1>
              <p className="mt-3 text-base xl:text-lg font-bold text-[#004475]">
                Complete Glass Manufacturing Management Software – From Enquiry to Dispatch
              </p>
              <p className="mt-2 text-sm xl:text-base font-semibold text-[#33a8d9]">
                Manage your entire glass manufacturing business with one intelligent ERP.
              </p>
              <p className="mt-3 text-sm xl:text-[15px] text-gray-600">
                Introducing a modern, AI-powered Glass ERP designed for toughened glass manufacturers. Manage customer enquiries, sales orders, glass cutting, production, inventory, quality control, GST billing, payments and dispatch through one integrated platform.
              </p>
              <p className="mt-2 text-sm xl:text-[15px] text-gray-600">
                From capturing handwritten customer orders using AI to tracking every glass piece through barcode scanning, Glass ERP gives you complete visibility and control over your factory operations.
              </p>
              <p className="mt-2 text-sm xl:text-[15px] font-semibold text-[#003366]">
                Less manual work. Reduced material wastage. Better production visibility. Smarter business decisions.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact?service=Glass%20Manufacturing%20ERP"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#004475] px-6 py-3 font-bold text-white transition hover:bg-[#003366]"
                >
                  Book a Free Demo <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border-2 border-[#004475] bg-white/70 px-6 py-3 font-bold text-[#004475] backdrop-blur-sm transition hover:bg-white/90"
                >
                  Talk to Our Glass ERP Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AiOrderPlacementDemo />
      <section className="bg-slate-200 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Modern Glass Manufacturing ERP Built for Your Factory
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_1fr]">
            <ScrollReveal className="rounded-3xl border border-gray-300 bg-white p-6 shadow-[0_4px_20px_rgba(0,68,117,0.06)] md:p-8">
              <p className="text-base leading-relaxed text-[#506478] md:text-lg">
                Running a toughened glass manufacturing business involves more than cutting and processing glass. Managing customer enquiries, multiple glass specifications, raw material inventory, production schedules, machine utilization, wastage, customer payments and dispatch requires coordination across your entire factory.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#506478] md:text-lg">
                Traditional registers, spreadsheets and disconnected software make it difficult to maintain accurate information and track production in real time.
              </p>
            </ScrollReveal>
            <ScrollReveal className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#003366] via-[#004475] to-[#0b5370] p-6 text-white shadow-xl md:p-8">
              <p className="text-xl font-bold leading-snug md:text-2xl">
                Glass ERP by Livik Tech brings your entire manufacturing operation together.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-blue-100 md:text-base">
                Whether you manage a single glass processing unit or multiple manufacturing plants, our Glass Manufacturing ERP helps you streamline workflows, reduce repetitive data entry and improve operational efficiency.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              AI-Powered Features for Modern Glass Manufacturers
            </h2>
          </ScrollReveal>

          {/* Feature 1 */}
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
            <ScrollReveal>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#004475] text-lg font-bold text-white">1</span>
              <h3 className="mt-3 text-2xl font-bold leading-snug text-[#004475] md:text-3xl">
                AI-Powered Order Entry – Convert Handwritten Orders into Digital Orders
              </h3>
              <p className="mt-4 text-base font-semibold text-[#003366]">
                Stop manually entering glass dimensions from handwritten customer enquiry sheets.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#506478]">
                Simply upload or capture a photo of a handwritten glass size sheet. Our AI-powered order processing reads the dimensions and extracts relevant information to create digital order details.
              </p>
              <ul className="mt-5 space-y-2.5">
                {aiOrderPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] font-medium text-[#003366]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl border-l-4 border-[#1d8fe1] bg-blue-50/60 px-4 py-3 font-semibold text-[#004475]">
                Spend less time entering data and more time serving your customers.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-3xl bg-slate-100 p-4 shadow-xl md:p-6">
                <div className="flex items-start justify-between">
                  {workflowSteps.map((s, i) => (
                    <div key={s.title} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center text-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#004475] text-white shadow-md">
                          <s.icon size={20} />
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

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 p-4">
                    <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-[#004475] shadow">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#1d8fe1]" />
                      Scanning...
                    </span>
                    <div className="relative mx-auto mt-8 overflow-hidden rounded-md bg-white p-4 shadow-lg">
                      <p className="text-xs font-bold tracking-wide text-gray-400">GLASS SIZE SHEET</p>
                      <ul
                        className="mt-3 space-y-2 text-lg text-[#1e3a8a]"
                        style={{ fontFamily: "'Segoe Print','Bradley Hand','Comic Sans MS',cursive" }}
                      >
                        {glassRows.map((r) => (
                          <li key={r.size} className="border-b border-blue-100 pb-1">
                            {r.size} <span className="text-gray-400">–</span> {r.qty}
                          </li>
                        ))}
                      </ul>
                      <motion.div
                        className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-[#1d8fe1]/35 to-transparent border-b-2 border-[#1d8fe1]"
                        initial={{ top: "-20%" }}
                        animate={{ top: ["-20%", "100%"] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#004475]">Digital Order</h4>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                        Created
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {glassRows.map((r, i) => (
                        <motion.div
                          key={r.size}
                          initial={{ opacity: 0, x: 15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 * i }}
                          className="flex items-center justify-between rounded-lg bg-[#f6f9fe] px-3 py-2"
                        >
                          <div>
                            <p className="text-[11px] text-gray-500">Item {i + 1} · Toughened glass</p>
                            <p className="text-sm font-semibold text-[#004475]">{r.dims}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-gray-600">{r.thick}</span>
                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="bg-slate-200 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#004475] text-lg font-bold text-white">2</span>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-[#004475]">
              Barcode-Based Glass Production Tracking
            </h3>
            <p className="mt-4 text-lg font-semibold text-[#003366]">
              Know exactly where every glass piece is in your manufacturing process.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#506478]">
              Glass ERP provides barcode-based production tracking across different manufacturing stages. Generate and scan barcodes to track individual glass pieces from cutting to final dispatch.
            </p>
            <p className="mt-5 text-lg font-bold text-[#004475]">Track production stages such as:</p>
          </ScrollReveal>

          <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-7">
            <div className="absolute left-[7%] right-[7%] top-7 hidden h-0.5 bg-gray-300 lg:block" />
            {barcodeStages.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-200 bg-[#004475] text-white shadow-md">
                  <s.icon size={24} />
                </div>
                <p className="mt-3 text-xs font-bold tracking-widest text-gray-500">STEP {i + 1}</p>
                <h4 className="mt-1 text-base font-bold text-[#004475]">{s.name}</h4>
              </motion.div>
            ))}
          </div>

          <ScrollReveal className="mx-auto mt-10 max-w-3xl">
            <p className="flex items-start gap-4 rounded-2xl border border-gray-300 bg-white p-5 text-[#506478] shadow-[0_4px_20px_rgba(0,68,117,0.06)]">
              <ScanBarcode className="mt-0.5 h-6 w-6 shrink-0 text-[#1d8fe1]" />
              Every production movement updates the corresponding job status, providing better traceability and reducing manual production tracking.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#004475] text-lg font-bold text-white">3</span>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-[#004475]">
              Live Order Progress Tracking
            </h3>
            <p className="mt-4 text-lg font-semibold text-[#003366]">
              Know the exact production status of every customer order.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#506478]">
              Get a complete view of order completion through overall progress percentages and individual production-stage percentages.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-gray-300 bg-gradient-to-b from-white to-[#f3f8fe] p-6 shadow-[0_10px_40px_-12px_rgba(0,68,117,0.18)] md:p-8">
            <p className="text-sm font-bold tracking-widest text-[#1d8fe1]">For example:</p>
            <div className="mt-5 space-y-4">
              {productionStages.map((s, i) => (
                <div key={s.name} className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${
                      s.pct === 100 ? "bg-emerald-500" : s.pct > 0 ? "bg-[#004475]" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    <s.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm font-bold text-[#004475]">
                      <span>{s.name} – {s.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-gray-100">
                      <motion.div
                        className={`h-full rounded-full ${s.pct === 100 ? "bg-emerald-500" : "bg-[#1d8fe1]"}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + 0.1 * i, duration: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
            {liveProgressNotes.map((n) => (
              <ScrollReveal key={n.text}>
                <div className="flex h-full gap-4 rounded-2xl border border-gray-300 bg-white p-5 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] hover:-translate-y-[8px] hover:border-[#1d8fe1]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#004475] text-white">
                    <n.icon size={22} />
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#506478]">{n.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {moreFeatures.map((f, i) => {
        const n = i + 4;
        const dark = n % 2 === 0;
        const flip = i % 2 === 1;
        const lastAfter = f.after.length - 1;
        return (
          <section key={f.title} className={`${dark ? "bg-slate-200" : "bg-white"} py-14 md:py-16`}>
            <div className="mx-auto max-w-7xl px-6 md:px-10">
              <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
                <ScrollReveal className={flip ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#004475] text-lg font-bold text-white">{n}</span>
                    <div className="wc-icon-tile">
                      <f.icon size={24} />
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold leading-snug text-[#004475] md:text-3xl">{f.title}</h3>
                  <p className="mt-4 text-lg font-semibold text-[#003366]">{f.tagline}</p>
                  {f.intro.map((p) => (
                    <p key={p} className="mt-3 text-base leading-relaxed text-[#506478]">{p}</p>
                  ))}
                </ScrollReveal>

                <ScrollReveal className={flip ? "lg:order-1" : ""}>
                  <div className="rounded-3xl border border-gray-300 bg-white p-6 shadow-[0_10px_40px_-12px_rgba(0,68,117,0.18)] md:p-8">
                    {f.lead && <p className="text-base font-bold text-[#004475]">{f.lead}</p>}
                    <ul className={`${f.lead ? "mt-4" : ""} space-y-3`}>
                      {f.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-[15px] font-medium text-[#003366]">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {f.after.map((p, j) =>
                    j === lastAfter ? (
                      <p key={p} className="mt-5 rounded-xl border-l-4 border-[#1d8fe1] bg-blue-50/60 px-4 py-3 font-semibold text-[#004475]">{p}</p>
                    ) : (
                      <p key={p} className="mt-5 text-base leading-relaxed text-[#506478]">{p}</p>
                    )
                  )}
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-slate-200 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Why Choose Livik Tech&apos;s Glass Manufacturing ERP?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#506478] md:text-lg">
              Choosing the right ERP is an important decision for any manufacturing business. Your software should understand your production process, not just your accounting requirements.
            </p>
            <p className="mt-3 text-base font-semibold text-[#003366] md:text-lg">
              Glass ERP is designed around the operational needs of toughened glass manufacturers.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyLivik.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.45 }}
                className="rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] hover:-translate-y-[10px] hover:border-[#1d8fe1]"
              >
                <div className="wc-icon-tile">
                  <w.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-[#004475]">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#506478]">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Who Can Benefit from Glass ERP?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#506478] md:text-lg">
              Glass ERP is designed for businesses involved in toughened glass manufacturing and processing.
            </p>
            <p className="mt-3 text-base font-semibold text-[#003366] md:text-lg">It is particularly suitable for:</p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servedIndustries.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.45 }}
                className="flex items-center gap-4 rounded-2xl border border-gray-300 bg-white p-5 shadow-[0_4px_20px_rgba(0,68,117,0.06)] transition-all duration-[450ms] hover:-translate-y-[8px] hover:border-[#1d8fe1]"
              >
                <div className="wc-icon-tile shrink-0">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-bold leading-snug text-[#004475]">{s.name}</h3>
              </motion.div>
            ))}
          </div>

          <ScrollReveal className="mx-auto mt-10 max-w-3xl">
            <p className="rounded-xl border-l-4 border-[#1d8fe1] bg-blue-50/60 px-5 py-4 text-center font-semibold text-[#004475]">
              Whether you are managing a growing glass processing unit or an established manufacturing facility, Glass ERP helps bring your business operations under better control.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-slate-200 py-14 md:py-16">
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
