"use client";
/*
import Medusa_img from "../../assets/medusa.png";
*/
const Medusa_img = "";
import {
  LayoutTemplate,
  RefreshCcw,
  Puzzle,
  Wrench,
  Icon,
  FileCheck,
  Rocket,
  Target,
  Users,
} from "lucide-react";

/* -------------------- Hero -------------------- */
const HeroSection = () => {
  return (
    <section className="relative flex h-[500px] items-center justify-center gradient-hero text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute h-80 w-full max-w-3xl bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${Medusa_img})` }}
      />

      <div className="relative z-10 px-6 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Hire MedusaJS Developers
        </h1>

        <p className="text-md lg:text-xl opacity-90 mb-8 max-w-6xl mx-auto">
          Experience a high-performance eCommerce platform optimized for speed,
          scalability and reliability across all devices. At Tameta Tech, we
          specialize in MedusaJS development, delivering optimized headless
          storefronts, scalable backend architectures and custom API
          integrations designed to handle complex workflows, high traffic and
          long-term business growth.
        </p>

        <a
          href="#contact"
          className="inline-block rounded-full bg-white px-6 py-2 text-lg font-semibold text-black transition hover:scale-105"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

/* -------------------- Services Section -------------------- */
import { Server } from "lucide-react";

export function MedusaServices() {
  const services = [
    {
      title: "Tailored Medusa JS Solutions",
      description:
        "Build high-speed Medusa JS e-commerce platforms with custom storefronts, APIs and scalable backend architecture.",
      icon: ShoppingCart,
    },
    {
      title: "Headless Commerce Storefronts",
      description:
        "Lightning-fast, headless storefronts powered by Medusa JS, designed for flexibility and future growth.",
      icon: Layers,
    },
    {
      title: "Medusa JS Platform Migration",
      description:
        "Seamlessly migrate products, customers, orders and workflows to Medusa JS with complete data security.",
      icon: RefreshCcw,
    },
    {
      title: "Scalable Backend Architecture",
      description:
        "Robust, enterprise-ready Medusa JS backends engineered to manage high traffic, growth and complex operations.",
      icon: Server,
    },
  ];

  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[50%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Why <span className="text-sky-700">Choose</span> Us
          </h2>
          <p className="mt-6 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Transforming ideas into powerful Medusa web solutions with clean
            code, seamless UX and long-term scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {services.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                border
                border-gray-200
                p-8
                transition-all
                duration-300
                hover:border-sky-700
                hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)]
              "
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full gradient-hero text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const steps = [
  {
    title: "Share Your Requirements",
    description:
      "Submit your project details, technical needs and preferred engagement model.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8"
      >
        {/* Document / form icon */}
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
      </svg>
    ),
  },
  {
    title: "Developer Shortlisting",
    description:
      "We analyze your requirements and handpick the most suitable ReactJS developers from our in-house team.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8"
      >
        {/* User search / selection icon */}
        <circle cx="10" cy="8" r="4" />
        <path d="M2 21a8 8 0 0116 0" />
        <circle cx="18" cy="18" r="3" />
        <path d="M21 21l-2-2" />
      </svg>
    ),
  },
  {
    title: "Interview & Selection",
    description:
      "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8"
      >
        {/* Chat / discussion icon */}
        <path d="M21 15a4 4 0 01-4 4H7l-4 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
        <path d="M8 9h8" />
        <path d="M8 13h6" />
      </svg>
    ),
  },
  {
    title: "Onboarding & Project Kickoff",
    description:
      "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8"
      >
        {/* Rocket / start icon */}
        <path d="M14 3l7 7-4 4-7-7z" />
        <path d="M5 19l4-1-3-3-1 4z" />
        <path d="M9 14l-4 4" />
      </svg>
    ),
  },
];

export function HireMedusaSteps() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
        Hire <span className="text-sky-700">MedusaJS Developers</span> with
        Livik
      </h2>
      <p className="mb-12 py-10 text-black text-center">
        Empowering businesses with top Medusa developers for modern, high-impact
        web experiences.
      </p>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative flex gap-8 items-start p-8 rounded-xl transition-all duration-500 hover:bg-sky-50"
          >
            {/* Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl gradient-hero text-white transition-all duration-500 group-hover:scale-110">
              {step.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-sky-700">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Accent line */}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 gradient-hero transition-all duration-700 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

const Expertise = [
  {
    icon: ShoppingCart,
    title: "Medusa JS E-Commerce Development",
    description:
      "Build fast, flexible and high-performing headless e-commerce sites powered by Medusa JS.",
  },
  {
    icon: LayoutTemplate,
    title: "Tailored Storefront Solutions",
    description:
      "Create distinctive, custom storefronts with React, Next.js, Vue, or Angular for a seamless shopping experience across channels.",
  },
  {
    icon: RefreshCcw,
    title: "Seamless Medusa JS Migration",
    description:
      "Transition your store from Shopify, Magento, or WooCommerce to Medusa JS effortlessly, without downtime or data loss.",
  },
  {
    icon: Puzzle,
    title: "Custom Plugins & Extensions",
    description:
      "Enhance Medusa’s capabilities by developing tailored plugins, advanced product filters, or custom checkout features.",
  },
  {
    icon: Plug,
    title: "Medusa JS Integrations",
    description:
      "Connect your store with payment gateways, CRMs, ERPs, shipping solutions and marketing tools for automated workflows.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance & Support",
    description:
      "Ensure your store stays secure, optimized and up-to-date with continuous updates, support and performance enhancements.",
  },
];

export function MedusaDevelopmentServices() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Innovate Medusa with Our Team
          </h2>
          <p className=" mt-4 max-w-3xl mx-auto">
            Our wide range of Medusa JS development services empowers your
            business with flexible, secure and scalable e-commerce solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {Expertise.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 bg-white border border-gray-200
                           transition-all duration-300
                           hover:bg-sky-700 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl
                             bg-sky-50 text-sky-700
                             transition-all duration-300
                             group-hover:bg-white group-hover:text-sky-700"
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-4 text-gray-900
                             transition-colors duration-300
                             group-hover:text-white"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 leading-relaxed
                             transition-colors duration-300
                             group-hover:text-sky-100"
                >
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-0 bg-white
                             transition-all duration-700
                             group-hover:w-full rounded-b-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  Sparkles,
  Database,
  DollarSign,
  Layers,
  Plug,
  Workflow,
  Search,
  Boxes,
  Webhook,
  Zap,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Unlimited Possibilities",
    desc: "Medusa framework empowers you to create anything you can imagine, providing unparalleled flexibility and freedom for your projects.",
  },
  {
    icon: Database,
    title: "ERP Product Sync",
    desc: "Seamlessly synchronize your product data from ERP systems to ensure accurate, up-to-date information across your entire storefront.",
  },
  {
    icon: DollarSign,
    title: "Custom Pricing Logic",
    desc: "Implement dynamic, rule-based pricing strategies directly in your shopping carts, giving you full control over pricing workflows.",
  },
  {
    icon: Layers,
    title: "Extend Data Schemas",
    desc: "Easily customize and extend Medusa’s data models to meet your unique business requirements without limitations.",
  },
  {
    icon: Plug,
    title: "Custom Endpoints",
    desc: "Design and expose custom APIs tailored to your business logic, allowing integrations and features beyond default capabilities.",
  },
  {
    icon: Workflow,
    title: "Workflow Hooks",
    desc: "Integrate custom logic into existing workflows effortlessly, enabling smarter automation and enhanced operational control.",
  },
  {
    icon: Search,
    title: "Advanced Storefront Queries",
    desc: "Handle complex search, filters and storefront logic to deliver highly personalized experiences to your customers.",
  },
  {
    icon: Boxes,
    title: "Custom Data Models",
    desc: "Create flexible data models that fit the exact structure and requirements of your business, supporting unique use cases.",
  },
  {
    icon: Webhook,
    title: "Third-Party Webhooks",
    desc: "Listen for and respond to events from external services, enabling smooth integrations with your existing tools and workflows.",
  },
  {
    icon: Zap,
    title: "Advanced Automations",
    desc: "Build powerful automation workflows that streamline operations, reduce manual effort and accelerate business growth.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop",
    desc: "Add approvals and human validation steps where necessary to maintain quality, compliance and oversight.",
  },
];

export function MedusaCapabilities() {
  return (
    <section className="relative bg-white py-24">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Our <span className=" text-sky-600">Medusa Developers </span> Are
          Flexible
        </h2>
        <h2 className="text-lg md:text-2xl font-semibold mt-6 text-center">
          Technology Stack Expertise
        </h2>
        <p className="mx-auto max-w-3xl text-gray-600 mb-16 mt-8">
          Build flexible, scalable and enterprise-ready commerce solutions with{" "}
          <span className=" text-sky-600">Framework of MedusaJS. </span>
        </p>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Gradient Glow */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" /> */}

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-3xl gradient-hero text-white transition group-hover:scale-110">
                <item.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="relative mb-2 text-lg font-semibold text-gray-900 transition group-hover:text-sky-700">
                {item.title}
              </h3>
              <p className="relative text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Hover Line */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 gradient-hero transition-all duration-500 group-hover:w-full rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Truck,
  GraduationCap,
  ShoppingCart,
  Landmark,
  HeartPulse,
  Home,
  Plane,
  Utensils,
  Factory,
  ShoppingBag,
} from "lucide-react";

// 🎭 WORLD-CLASS CONCEPT: INDUSTRY MORPHING ENTITY
// One living shape that morphs into industries — cinematic, premium, unforgettable

const industries = [
  {
    name: "Supply Chain",
    icon: Truck,
    color: "from-cyan-500 to-blue-600",
    tagline: "Smarter Logistics & Real-Time Visibility",
  },
  {
    name: "Education",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-600",
    tagline: "Digital Learning, Simplified",
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-600",
    tagline: "Seamless Shopping Experiences",
  },
  {
    name: "Finance",
    icon: Landmark,
    color: "from-emerald-500 to-teal-600",
    tagline: "Secure & Scalable Financial Solutions",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    color: "from-red-500 to-orange-500",
    tagline: "Technology for Better Care",
  },
  {
    name: "Real Estate",
    icon: Home,
    color: "from-amber-500 to-yellow-600",
    tagline: "Smart Property Management",
  },
  {
    name: "Tour & Travels",
    icon: Plane,
    color: "from-sky-400 to-blue-500",
    tagline: "Journeys Made Effortless",
  },
  {
    name: "Hotel & Restaurant",
    icon: Utensils,
    color: "from-orange-400 to-red-500",
    tagline: "Exceptional Guest Experiences",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    color: "from-slate-500 to-gray-700",
    tagline: "Optimizing Production Digitally",
  },
  {
    name: "Retail",
    icon: ShoppingBag,
    color: "from-yellow-400 to-amber-500",
    tagline: "Connected Omnichannel Commerce",
  },
];

export function IndustryMorphingExperience() {
  const [index, setIndex] = useState(0);
  const active = industries[index];
  const Icon = active.icon;

  return (
    <section className="min-h-screen bg-white text-black flex  flex-col items-center justify-center overflow-hidden px-6">
      {/* Heading */}
      <div className=" mb-16">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Domains We Expertise In
        </h2>
        <p className="text-black mt-4">
          Our wide range of Medusadevelopment services empowers your business
          with flexible, secure and scalable e-commerce solutions.
        </p>
      </div>

      {/* ambient glow */}

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(49,8,141,0.75),_transparent_65%)]" /> */}
      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* MORPHING ENTITY */}
        <div className="relative h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ scale: 0.7, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 1.3, rotate: 30, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`relative w-64 h-64 rounded-[40%] bg-gradient-to-br ${active.color} flex items-center justify-center shadow-[0_0_120px_rgba(99,102,241,0.6)]`}
            >
              <Icon className="w-20 h-20 text-white" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* STORY PANEL */}
        <div>
          <motion.h2
            key={active.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {active.name}
          </motion.h2>

          <p className="text-xl text-white/70 mb-8">{active.tagline}</p>

          <div className="grid grid-cols-3 gap-4">
            {industries.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setIndex(i)}
                className={`text-sm px-4 py-2 rounded-full border transition \
                  ${i === index ? "bg-white text-black" : "border-white/20 hover:gradient-hero hover:text-white"}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* narrative footer */}
    </section>
  );
}

const industries001 = [
  { name: "Supply Chain", icon: Truck },
  { name: "Education", icon: GraduationCap },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Finance", icon: Landmark },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Home },
  { name: "Tour & Travels", icon: Plane },
  { name: "Hotel & Restaurant", icon: Utensils },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: ShoppingBag },
];

export function CrestIndustries() {
  return (
    <section className="relative min-h-screen gradient-hero text-white py-16 px-8 overflow-hidden">
      {/* subtle royal texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(99,102,241,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(139,92,246,0.15),_transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight"
        >
          Domains We Expertise In
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/65 max-w-2xl mx-auto mb-24 mt-8"
        >
          Connecting Core Domains to Drive Smarter Solutions. We bring
          domain-focused expertise to build Medusa solutions that solve real
          business challenges across multiple industries.
        </motion.p>

        {/* CREST GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-14 gap-y-20">
          {industries001.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col items-center"
            >
              {/* crest ring */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-white/80 blur-lg opacity- group-hover:opacity-60 transition" />
                <div className="relative w-28 h-28 rounded-full border border-white/80 bg-white flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
              </div>

              {/* title */}
              <p className="mt-6 text-sm  tracking-widest text-white/80 text-center">
                {item.name}
              </p>

              {/* underline */}
              <span className="mt-2 w-8 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stepsfinal = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your project goals, technical expectations, timelines and preferred engagement model so we can align the right development expertise to your business needs.",
    icon: Target,
    color: "cyan",
  },
  {
    step: "02",
    title: "Developer Shortlisting",
    description:
      "Based on your requirements, we carefully shortlist experienced developers from our talent pool who best match your technical stack, domain expertise and project scope.",
    icon: Users,
    color: "pink",
  },
  {
    step: "03",
    title: "Interview & Selection",
    description:
      "You interview the shortlisted developers to assess technical proficiency, problem-solving skills, communication and overall compatibility with your project objectives.",
    icon: FileCheck,
    color: "",
  },
  {
    step: "04",
    title: "Project Kick-off",
    description:
      "Once finalized, the team is onboarded quickly and the project kicks off with clearly defined milestones, timelines and continuous collaboration for smooth execution.",
    icon: Rocket,
    color: "purple",
  },
];

export function HireProcessfinal() {
  return (
     <section className="py-18 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Hire Medusa Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with expert Medusa developers to build fast,
          scalable and SEO-optimized web applications.
        </p>
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsfinal.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                  hover:border-${item.color}-500`}
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-200 group-hover:text-black/60">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center  justify-center rounded-3xl gradient-hero text-white group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Page Export -------------------- */
export default function MedusaDeveloperPage() {
  return (
    <>
      <HeroSection />
      <MedusaServices />
      <MedusaCapabilities />
      <MedusaDevelopmentServices />
      {/*} <IndustryMorphingExperience/> */}
      {/*<HireMedusaSteps/> */}
      <CrestIndustries />
      <HireProcessfinal />
    </>
  );
}
