"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  TrendingUp,
  Smartphone,
  Search,
  PenTool,
  Code,
  CheckCircle,
  Rocket,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import {
  fintechTargets,
  fintechBenefits,
  fintechSolutions,
  fintechWhyPoints,
  fintechSteps,
  fintechActive,
} from "@/data/industries/fintech";

function WhoThisIsFor() {
  const targets = fintechTargets;

  return (
    <section className="py-20">
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

/* ---------------- Main Fintech Page ---------------- */
const HireReactJSSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Build Financial Systems That Users Trust
          </h1>
        </div>

        <div className="space-y-6 text-white text-base leading-relaxed">
          <p>
            Fintech platforms must be secure, accurate and always available.
          </p>

          <p>
            We design and develop end-to-end financial systems that ensure
            transaction integrity, protect sensitive data and support real-time
            processing. This allows you to deliver reliable services while
            maintaining compliance and operational efficiency.
          </p>

          <p>
            Whether you’re building payment systems, banking platforms, or
            financial tools, we help you operate with confidence and stability.
          </p>
        </div>
      </div>
    </section>
  );
};

const Fintech = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <IndustriesHero />

      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container-custom max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">
              <span className="bg-gradient-to-r from-[#0f4a8a] to-[#4ab3e8] bg-clip-text text-transparent">
                Fintech
              </span>{" "}
              <span>
                Solutions That Ensure Security, Compliance and High-Performance
                Transactions
              </span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mt-4 leading-relaxed max-w-4xl mx-auto px-2">
              In fintech, reliability and security aren’t optional—they’re
              critical. At Livik, we build secure, scalable fintech platforms
              that handle transactions efficiently, ensure compliance and
              deliver seamless user experiences. From payment systems to
              financial platforms, we help you build systems users trust and
              businesses depend on.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              {[
                "Secure and compliant financial systems",
                "High-performance transaction processing",
                "Scalable architecture for growing platforms",
                "Reliable systems built for real-world financial operations",
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
                  Start Your Fintech Project <ArrowUpRight size={20} />
                </Link>
              </Button>
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gradient-hero text-gradient-hero"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Free Fintech Consultation <ArrowUpRight size={20} />
                </Link>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Sub Section */}
      <HireReactJSSection />
      <WhyInvestFintech />
      <FintechBenefits />
      <FintechWhyChooseUs />
      <FintechProcess />

      {/* Who This Is For */}
      <WhoThisIsFor />

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Build Secure Financial Systems?
          </h2>
          <p className="text-xl opacity-90 mt-4 max-w-3xl mx-auto space-y-2">
            <span>
              If your platform needs to handle transactions securely and scale
              reliably, it’s time to build it right.
            </span>
            <br />
            <span>Let’s create fintech solutions your users can trust.</span>
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
};

/* ---------------- Fintech Benefits Section ---------------- */

export function FintechBenefits() {
  const benefits = fintechBenefits;

  return (
    <section className="py-20 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
            What You Gain
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Accelerate digital finance with secure payment systems, scalable
            trading platforms, compliant architectures and modern mobile banking
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

const fintechReasons = fintechSolutions;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyInvestFintech = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
            Fintech Solutions We Deliver
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {fintechReasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative rounded-2xl p-8 gradient-hero text-white shadow-xl transition-all duration-300 group flex flex-col items-start text-left"
              >
                <div className="mb-6 w-14 h-14 rounded-full bg-white text-blue-900 flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:rotate-12">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-blue-50/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- Why Choose Us – Finance & FinTech Platforms ---------------- */

const reasons = fintechWhyPoints;

function FintechWhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Livik
            </span>{" "}
            for Fintech Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine financial expertise, secure technology and automation to
            build scalable fintech platforms that power modern digital finance.
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

/* ---------------- Finance & FinTech Development Process Section ---------------- */

const transfersteps = fintechSteps;

function FintechProcess() {
  return (
    <section className="py-16 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-center">
          How We Build Fintech Platforms
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A structured and secure approach to building scalable fintech
          platforms that ensure compliance, reliability and seamless financial
          operations.
        </p>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-24 left-0 right-0 h-[2px] bg-gray-200 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
            {transfersteps.map((step, index) => (
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

function IndustriesHero() {
  const active = fintechActive;

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
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

export default Fintech;
