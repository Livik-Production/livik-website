"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Truck,
  BarChart,
  Layers,
  Store,
  RefreshCcw,
  ClipboardList,
  Search,
  PenTool,
  Settings,
  Rocket,
} from "lucide-react";
import {
  fmcgSolutions,
  fmcgGains,
  fmcgWhyPoints,
  fmcgSteps,
  fmcgTargets,
  fmcgActive,
} from "@/data/industries/fmcg";

/* ---------------- Hero Sub Section (Problem Statement) ---------------- */

function FMCGHeroSubSection() {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Build Faster, Smarter FMCG Operations
          </h1>
        </div>

        <div className="space-y-6 text-white text-base leading-relaxed">
          <p>
            Manual workflows, disconnected systems and poor inventory visibility
            create delays, stock issues and operational inefficiencies.
          </p>

          <p>
            We develop FMCG platforms that connect procurement, inventory,
            distribution, sales and analytics into one streamlined
            ecosystem—helping businesses operate faster and scale efficiently.
          </p>

          <p>
            Whether you manage manufacturing, wholesale distribution, retail
            supply, or logistics, we help you build systems that support
            high-volume operations with better accuracy and control.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FMCG Solutions Section ---------------- */

const solutions = fmcgSolutions;

function FMCGSolutions() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            FMCG Solutions We Deliver
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            We build platforms that streamline operations, enable real-time
            visibility, automate workflows and enhance FMCG performance
            end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl gradient-hero p-8 text-white shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col items-start text-left"
            >
              <div className="mb-6 w-14 h-14 rounded-full bg-white text-blue-900 flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:rotate-12">
                {item.icon}
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

function FMCGBenefits() {
  const gains = fmcgGains;

  return (
    <section className="py-20 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            What You Gain
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Build resilience, enhance distribution speed and gain complete
            control over your FMCG operations with our data-driven digital
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gains.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
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

/* ---------------- Why Choose Us Section ---------------- */

const whyPoints = fmcgWhyPoints;

function WhyFMCGSoftware() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Livik
            </span>{" "}
            for FMCG
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyPoints.map((item, index) => (
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

const steps = fmcgSteps;

function FMCGProcess() {
  return (
    <section className="py-20 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-center">
          How We Build FMCG Platforms
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          A structured approach to modernizing your digital core, ensuring
          scalability, speed and operational control for high-volume consumer
          goods.
        </p>

        <div className="relative">
          <div className="absolute top-24 left-0 right-0 h-[2px] bg-gray-200 hidden md:block" />

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
                  <p className="text-sm text-gray-500 max-w-xs">{step.sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Who This Is For Section ---------------- */

function WhoThisIsFor() {
  const targets = fmcgTargets;

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

/* ---------------- Main FMCG Page ---------------- */

const FMCG = () => {
  return (
    <div className="min-h-screen bg-background">
      <IndustriesHero />

      {/* Intro Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">
              <span className="bg-gradient-to-r from-[#0f4a8a] to-[#4ab3e8] bg-clip-text text-transparent">
                FMCG
              </span>{" "}
              <span>
                Software Solutions That Streamline Operations, Improve
                Distribution and Accelerate Growth
              </span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mt-4 leading-relaxed max-w-4xl mx-auto px-2">
              In the FMCG industry, speed, inventory accuracy and supply chain
              efficiency directly impact revenue. At Livik, we build FMCG
              software solutions that help brands, distributors and retailers
              manage operations efficiently and respond faster to market demand.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              {[
                "Improve inventory and warehouse visibility",
                "Streamline distribution and supply chain operations",
                "Enable faster order processing and fulfillment",
                "Gain real-time business insights and reporting",
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
                  Start Your FMCG Project <ArrowUpRight size={20} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FMCGHeroSubSection />
      <FMCGSolutions />
      <FMCGBenefits />
      <WhyFMCGSoftware />
      <FMCGProcess />
      <WhoThisIsFor />

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Modernize Your FMCG Operations?
          </h2>
          <p className="text-xl opacity-90 mt-4 max-w-3xl mx-auto space-y-2">
            <span>
              If outdated systems and manual workflows are slowing your business
              down, it’s time to upgrade.
            </span>
            <br />
            <span>
              Let’s build FMCG solutions that improve efficiency, visibility,
              and long-term growth.
            </span>
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Book a Free Strategy Call{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

function IndustriesHero() {
  const active = fmcgActive;

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${active.image})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 z-10 grid grid-cols-4 pointer-events-none">
        <div className="border-r border-white/15" />
        <div className="border-r border-white/15" />
        <div className="border-r border-white/15" />
        <div />
      </div>

      <div className="absolute top-8 left-6 md:top-12 md:left-20 z-20 text-white/20 text-4xl sm:text-5xl md:text-8xl font-bold transition-all duration-500 hover:text-white/70 hover:scale-105 cursor-default select-none max-w-[80vw] break-words">
        {active.title}
      </div>

      <div className="relative z-30 h-full flex flex-col justify-center px-6 md:px-20 pointer-events-none">
        <div className="max-w-xl text-white mt-12 md:mt-0 pointer-events-auto">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 drop-shadow line-clamp-3">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FMCG;
