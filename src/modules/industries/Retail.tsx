"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Code,
  PenTool,
  Rocket,
  Search,
  ShoppingCart,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  retailServices,
  retailBenefits,
  retailPoints,
  retailSteps,
  retailTargets,
  retailActive,
} from "@/data/industries/retail";

/* ---------------- Why Choose Us ---------------- */

const reasons = retailPoints;

const benefits = retailBenefits;

export function HireReactJSSection() {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left Side – Heading */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Build a Commerce System That Actually Drives Sales
          </h1>
        </div>

        {/* Right Side – Content */}
        <div className="space-y-6 text-white text-base leading-relaxed">
          <p>
            A good-looking store isn’t enough—your systems need to convert,
            perform and scale. We design and develop end-to-end retail
            ecosystems that connect your storefront, operations and customer
            data.
          </p>

          <p>
            This ensures smoother buying journeys, faster operations and better
            decision-making across your business. From D2C brands to large
            retail operations, we help you turn traffic into revenue and
            operations into efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- What We Do Section ---------------- */
export function WhatWeDo() {
  const services = retailServices;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Retail & E-Commerce Solutions We Deliver
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-center">
            We support retailers in achieving digital transformation across all
            business areas, strengthening growth and competitiveness through
            innovative, technology-driven solutions.
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl gradient-hero p-8 text-white shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col items-start text-left"
            >
              <div className="mb-6 w-14 h-14 rounded-full bg-white text-blue-900 flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:rotate-12">
                <span className="[&>svg]:w-7 [&>svg]:h-7">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-blue-50/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ---------------- Benefits Section ---------------- */
export function EcommerceBenefits() {
  return (
    <section className="py-20 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            What You Gain
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            To stay competitive in today’s market, adopting modern eCommerce
            technologies is essential. Here are the key benefits you gain from a
            powerful eCommerce application solution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold  text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RetailWhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Livik
            </span>{" "}
            for Retail Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Empowering your retail business with innovative, scalable and secure
            software solutions that enhance customer experience and accelerate
            digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 gradient-hero text-white shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6 w-14 h-14 rounded-full bg-white text-blue-900 flex items-center justify-center font-bold shadow-inner transition-transform duration-300 group-hover:rotate-12">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight text-left">
                {item.title}
              </h3>
              <p className="text-blue-50/80 text-left leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process Section ---------------- */

const steps = retailSteps;

function RetailProcess() {
  return (
    <section className="py-16 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-center">
          How We Build Scalable Retail Systems
        </h2>

        <div className="relative">
          <div className="absolute top-24 left-0 right-0 h-[2px] bg-gray-200" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 w-14 h-14 rounded-full gradient-hero flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <div className="w-3 h-3 rounded-full gradient-hero mb-6" />
                {step.sub && (
                  <p className="text-sm text-gray-500">{step.sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  const targets = retailTargets;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-14">
          Who This Is For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gradient-hero transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-gray-900 font-medium text-left">{target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Main Page ---------------- */

export default function RetailMain() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <IndustriesHero />

      <section className="py-20 bg-gradient-subtle">
        <div className="container-custom max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">
              <span className="bg-gradient-to-r from-[#0f4a8a] to-[#4ab3e8] bg-clip-text text-transparent">
                Retail & E-Commerce
              </span>{" "}
              Solutions That Increase Conversions, Streamline Operations and
              Drive Revenue
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mt-4 leading-relaxed max-w-4xl mx-auto px-2">
              In retail, every second of delay, poor experience, or broken
              workflow costs you sales. At Livik, we build retail and eCommerce
              systems that help you convert more visitors, optimize operations,
              and scale efficiently across channels. From storefronts to backend
              systems, we ensure your business runs faster, smarter and more
              profitably.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              {[
                "Improve conversion rates and customer experience",
                "Streamline inventory, orders and operations",
                "Enable omnichannel retail across web, mobile and POS",
                "Build scalable systems that support growth",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" variant="hero">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Retail Project <ArrowUpRight size={20} />
                </Link>
              </Button>
              {/* <Button asChild size="lg" variant="outline" className="border-gradient-hero text-gradient-hero">
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Free E-Commerce Strategy Session <ArrowUpRight size={20} />
                </Link>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hire ReactJS Section */}
      <HireReactJSSection />
      <WhatWeDo />
      <EcommerceBenefits />
      {/* Why Choose Us */}
      <RetailWhyChooseUs />

      {/* Process */}
      <RetailProcess />

      {/* Who This Is For */}
      <WhoThisIsFor />

      {/* CTA */}
      <section className="py-20 px-4 gradient-hero text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Scale Your Retail Business?
          </h2>
          <p className="text-xl opacity-90 mt-4 max-w-3xl mx-auto space-y-2">
            <span>
              If your store isn’t converting or your operations are slowing you
              down, it’s time to upgrade your systems.
            </span>
            <br />
            <span>Let’s build a retail platform that drives real growth.</span>
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function IndustriesHero() {
  const active = retailActive;

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black group">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${active.image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Vertical panel dividers */}
      <div className="absolute inset-0 z-10 grid grid-cols-4 pointer-events-none">
        <div className="border-r border-white/15" />
        <div className="border-r border-white/15" />
        <div className="border-r border-white/15" />
        <div />
      </div>

      {/* Large background text */}
      <div className="absolute top-8 left-6 md:top-12 md:left-20 z-20 text-white/20 text-4xl sm:text-5xl md:text-8xl font-bold transition-all duration-500 hover:text-white/70 hover:scale-105 cursor-default select-none max-w-[80vw] break-words">
        {active.title}
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-center px-6 md:px-20 pointer-events-none">
        <div className="max-w-xl text-white mt-12 md:mt-0 pointer-events-auto">
          {/* <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
            {active.title}
          </h2> */}
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 drop-shadow line-clamp-3">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}
