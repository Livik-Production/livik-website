"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Database,
  Search,
  Code,
  PenTool,
  CheckCircle,
  Rocket,
  HeartPulse,
  Lock,
  Stethoscope,
  Brain,
  ArrowRight,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import {
  healthcareBenefits,
  healthcareGains,
  healthcarePoints,
  healthcareSteps,
  healthcareTargets,
  healthcareActive,
} from "@/data/industries/healthcare";

/* ---------------- Hero Sub Section ---------------- */

function HireReactJSSection() {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Build Healthcare Systems You Can Trust
          </h1>
        </div>

        <div className="space-y-6 text-white text-base leading-relaxed">
          <p>
            Healthcare systems must be secure, compliant and always available.
          </p>

          <p>
            We design and develop end-to-end healthcare platforms that improve
            interoperability, reduce manual processes and ensure accurate data
            flow across systems. This enables better coordination, improved
            patient outcomes and more efficient operations.
          </p>

          <p>
            From hospitals to digital health platforms, we help you deliver care
            with confidence and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}

const benefits = healthcareBenefits;

function WhatwedoHealthcare() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            Healthcare Solutions We Deliver
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            We build platforms that streamline operations, enable real-time
            visibility, automate workflows and enhance healthcare performance
            end-to-end.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
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

/* ---------------- Healthcare & Digital Solutions Benefits Section ---------------- */

function HealthcareBenefits() {
  const gains = healthcareGains;

  return (
    <section className="py-20 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            What You Gain
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Enhance patient care, ensure regulatory compliance and streamline
            healthcare operations with secure, scalable digital health
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

const points = healthcarePoints;

function WhyHealthcareSoftware() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Livik
            </span>{" "}
            for Healthcare Solutions
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => (
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

/* ---------------- Healthcare Digital Solutions Process Section ---------------- */

const transfersteps = healthcareSteps;

function HealthcareProcess() {
  return (
    <section className="py-20 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-center">
          How We Build Healthcare Systems
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          A structured and compliant approach to building secure, scalable and
          patient-centric digital healthcare solutions that drive efficiency and
          clinical excellence.
        </p>

        <div className="relative">
          {/* Horizontal Connector */}
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

function WhoThisIsFor() {
  const targets = healthcareTargets;

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

/* ---------------- Main Healthcare Page ---------------- */

const Healthcare = () => {
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
                Healthcare
              </span>{" "}
              <span>
                Digital Solutions That Ensure Compliance, Protect Data and
                Improve Patient Care
              </span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mt-4 leading-relaxed max-w-4xl mx-auto px-2">
              In healthcare, errors aren’t just costly—they impact patient
              safety and trust. At Livik, we build secure, compliant healthcare
              systems that help you manage data safely, improve care delivery,
              and streamline operations. From EHR platforms to telemedicine
              systems, we ensure your technology is reliable, scalable and built
              for real-world healthcare environments.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              {[
                "Secure patient data with compliance-first architecture",
                "Streamline workflows across clinical and administrative systems",
                "Enable real-time access to accurate healthcare data",
                "Build scalable platforms for modern healthcare delivery",
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
                  Start Your Healthcare Project <ArrowUpRight size={20} />
                </Link>
              </Button>
              {/* <Button asChild size="lg" variant="outline" className="border-gradient-hero text-gradient-hero">
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Free Compliance & Technology Consultation <ArrowUpRight size={20} />
                </Link>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Sub Section */}
      <HireReactJSSection />
      {/* What We Do Section */}
      <WhatwedoHealthcare />
      {/* Benefits Section */}
      <HealthcareBenefits />
      {/* Why Choose Us Section */}
      <WhyHealthcareSoftware />
      <HealthcareProcess />

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
            Ready to Build Secure and Scalable Healthcare Systems?
          </h2>
          <p className="text-xl opacity-90 mt-4 max-w-3xl mx-auto space-y-2">
            <span>
              If your systems are outdated, inefficient, or not fully compliant,
              it’s time to upgrade.
            </span>
            <br />
            <span>Let’s build healthcare technology you can rely on.</span>
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

function IndustriesHero() {
  const active = healthcareActive;

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

export default Healthcare;
