"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import WhyChooseUsWave from "@/components/WhyChooseUsWave";
import { Button } from "@/components/ui/button";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Users,
  Award,
  Heart,
  Clock,
  Shield,
  Zap,
  Globe,
  Code,
  CheckCircle,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Cloud,
} from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const values = [
  {
    icon: Zap,
    title: "Agile Execution",
    description:
      "We move fast and stay flexible, delivering high-quality results through iterative development and constant feedback.",
    color: "from-[#004475] to-[#33a8d9]",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Transparent Communication",
    description:
      "Honesty and clarity at every step. We keep you fully informed through open channels and regular updates.",
    color: "from-[#1565c0] to-[#42a5f5]",
    bg: "bg-blue-50",
  },
  {
    icon: Code,
    title: "Strong Engineering",
    description:
      "Built on a foundation of clean code, security best practices and rigorous testing for long-term reliability.",
    color: "from-[#0d47a1] to-[#64b5f6]",
    bg: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "We design systems that grow with your business, ensuring your technology never becomes a bottleneck.",
    color: "from-[#0a3d8f] to-[#29b6f6]",
    bg: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Long-term partnership mindset",
    description:
      "We work as an extension of your team, deeply aligned with your long-term business goals and growth.",
    color: "from-[#0a3d8f] to-[#29b6f6]",
    bg: "bg-blue-50",
  },

  {
    icon: Sparkles,
    title: "Innovation Driven Approach",
    description:
      "We continuously explore modern technologies, AI-powered solutions and to help businesses stay future-ready and competitive.",
    color: "from-[#0a3d8f] to-[#29b6f6]",
    bg: "bg-blue-50",
  },
];

const stats = [
  {
    value: 4,
    suffix: "X",
    label: "Faster Development Cycles",
  },
  {
    value: 100,
    suffix: "%",
    label: "Modern & Secure Architecture",
  },
  {
    prefix: "",
    value: 98,
    suffix: "%",
    label: "On-time & On-Budget",
  },
  {
    prefix: "",
    value: 4.8,
    suffix: "/5",
    label: "Client Satisfaction",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = React.useState(0);
  const isDecimal = value % 1 !== 0;

  React.useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(progress * value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const handle = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(handle);
  }, [value]);

  return (
    <span className="flex items-baseline">
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

function StudioSlider() {
  const images = ["/Gen.jpg", "/rajiv.png"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Wait longer between slides
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        key={index}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }} // Slower slide
        className="absolute inset-0 flex justify-end"
      >
        <div className="relative h-full w-full">
          {/* Gradient overlay to fade the image into the white card background */}
          <div className="absolute inset-0 z-10" />
          <img
            src={images[index]}
            alt="Studio"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

const certifications = [
  { name: "AWS Certified Solutions Architect", icon: "☁️" },
  { name: "Microsoft Azure Certified", icon: "🔷" },
  { name: "SAP Certified Consultant", icon: "⚙️" },
  { name: "Google Cloud Professional", icon: "🌐" },
  { name: "Scrum Master Certified", icon: "🔄" },
  { name: "ISO 27001 Compliant", icon: "🛡️" },
];

const whatWeBuild = [
  {
    icon: Globe,
    title: "Web & Mobile Apps",
    description:
      "Scalable web applications and native mobile experiences tailored for performance and user delight.",
  },
  {
    icon: Sparkles,
    title: "AI & Data Engineering",
    description:
      "Transforming complex data into meaningful insights and building intelligent, AI-powered solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud & Backend Solutions",
    description:
      "Secure, high-performance backend engineering and seamless cloud migrations for growing businesses.",
  },
  {
    icon: Users,
    title: "Dedicated Development Teams",
    description:
      "Scale your engineering capabilities with our expert development squads, integrated into your workflow.",
  },
  {
    icon: Zap,
    title: "UI/UX Engineering",
    description:
      "Modern, intuitive designs that prioritize user experience and drive real business outcomes.",
  },
  {
    icon: Heart,
    title: "Product Modernization & Support",
    description:
      "Modernizing legacy platforms and providing long-term value through consistent support and growth.",
  },
];

const teamMembers = [
  {
    id: "01",
    name: "Ramkumar B",
    role: "FOUNDER & CEO",
    location: "India",
    description:
      "Ramkumar is the Founder & CEO of Livik, leading the company’s vision, technology strategy and business growth initiatives. He works closely with clients and teams to deliver scalable and reliable solutions across Web, Mobile, AI, Cloud and Data Engineering domains.\n\nWith over 20 years of experience in the software services industry, Ramkumar has extensive expertise in full stack development, technology consulting, enterprise applications and digital transformation. His background includes building technology teams, managing client engagements and delivering solutions for businesses across multiple industries",
    image: "/Ram-sir.png",
    linkedin: "https://linkedin.com",
  },
  {
    id: "02",
    name: "Laksha Subramanian",
    role: "Managing Partner",
    location: "USA",
    description:
      "Laksha Subramanian is a Managing Partner at Livik, leading strategic client engagements and strengthening enterprise partnerships across the organization. He works closely with internal teams to ensure consistent delivery quality and long-term customer success.\n\nWith over 20 years of experience in the technology and outsourcing industry, Laksha has held leadership roles across business operations, professional services and client management. His expertise includes managing enterprise accounts, building cross-functional teams and supporting clients from proposal discussions through successful project delivery and account growth.",
    image: "/Laxman.jpeg",
  },
];

const collageImages = [
  "/images/collage/1.jpg",
  "/images/collage/2.jpg",
  "/images/collage/3.jpg",
  "/images/collage/4.jpg",
  "/images/collage/5.jpg",
  "/images/collage/6.jpg",
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const hoverTransition = {
  type: "spring" as const,
  stiffness: 120,
  damping: 15,
  mass: 0.5,
};

const sectionTransition = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const,
};

const sectionViewport = { once: true, amount: 0.25 };

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-[#004475] text-white relative overflow-hidden px-4 md:px-8">
        {/* Subtle grid pattern for depth */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={sectionTransition}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-7 leading-[1.4]">
                Building Digital{" "}
                <span className="whitespace-nowrap">
                  Solutions for
                  <span className="relative ml-3 px-3 inline-flex items-center justify-center group overflow-hidden rounded-2xl align-middle">
                    {/* Premium Glass Background with Diagonal Gradient */}
                    <span className="absolute inset-0 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" />

                    {/* Animated Shimmer Overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                    {/* Text with Diagonal Gradient and Continuous Animation */}
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] animate-[gradShift_4s_linear_infinite] font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                      Tomorrow
                    </span>

                    {/* Subtle outer glow */}
                    <span className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />
                  </span>
                </span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-7 opacity-60 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
                <span>#InnovateFaster</span>
                <span className="text-[#33a8d9]">•</span>
                <span>#BuildSmarter</span>
                <span className="text-[#33a8d9]">•</span>
                <span>#ScaleBetter</span>
              </div>
              <ul className="space-y-4 mb-10 text-white/80 text-left inline-block">
                {[
                  "Transform ideas into powerful digital experiences with modern web, mobile and AI solutions.",
                  "Build fast, reliable and future-ready products focused on scalable technology.",
                  "Deliver smart, data-driven solutions that create real business impact.",
                  "Accelerate digital growth with agility, quality and trust.",
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#33a8d9] shrink-0" />
                    <span className="text-lg leading-snug">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-lg font-bold text-[#33a8d9] mb-8"
              >
                Let’s build the future together — smarter, faster and better.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-[#33a8d9]/90 hover:bg-[#33a8d9] text-white border-none"
                  asChild
                >
                  <Link href="/contact">
                    Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-black hover:bg-white hover:text-[#004475]"
                  asChild
                >
                  <Link href="/case-studies">View Our Work</Link>
                </Button> */}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 lg:gap-12 pb-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewport}
                  variants={cardVariants}
                  className="flex gap-4 items-start group"
                >
                  {/* Vertical Accent Line */}
                  <div className="w-1 h-full min-h-[60px] bg-[#33a8d9] rounded-full shrink-0" />

                  <div className="flex flex-col">
                    <div className="text-xl md:text-4xl font-bold text-white mb-1 flex items-center gap-3">
                      <span className="flex items-baseline">
                        {stat.prefix}
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </span>
                    </div>
                    <div className="text-[11px] md:text-[12px] text-[#33a8d9] font-bold leading-tight uppercase tracking-wider mb-2">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Cards Section */}
      <section className="py-12 bg-white relative z-20 -mt-10 md:-mt-16">
        <div className="container-custom">
          {/* Mission Card - Rectangular Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ ...sectionTransition, delay: 0.3 }}
            className="max-w-5xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#004475] to-[#33a8d9] rounded-[2rem] opacity-20 blur-xl" />
            <div className="relative p-8 md:p-10 rounded-[2rem] border border-white bg-[#004475] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 shadow-2xl">
              <div className="relative h-14 w-14 shrink-0 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center">
                <Sparkles className="h-7 w-7 text-[#33a8d9]" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Solving Your Challenges Is Our Mission
                </h3>
                <p className="text-md md:text-lg text-white/80 leading-relaxed">
                  At Livik, solving your technology and business challenges is
                  our mission. Transforming complex data into meaningful
                  insights through AI and Data Engineering? We’re on it.
                  Building modern web and mobile applications with seamless user
                  experiences? That’s our forte. Migrating to the cloud? Smooth
                  and secure. Across industries, our collaborative approach
                  drives reliable and impactful outcomes every step of the way.
                  Your challenges, our solutions, delivered with excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ ...sectionTransition, delay: 0.4 }}
            className="mt-8 max-w-5xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#004475] to-[#33a8d9] rounded-[2rem] opacity-20 blur-xl" />
            <div className="relative p-8 md:p-10 rounded-[2rem] border border-white bg-[#004475] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 shadow-2xl">
              <div className="relative h-14 w-14 shrink-0 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center">
                <Globe className="h-7 w-7 text-[#33a8d9]" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Our Vision
                </h4>
                <p className="text-md md:text-lg text-white/80 leading-relaxed">
                  To be a trusted technology partner for businesses worldwide by
                  transforming challenges into innovative digital solutions
                  through Web, Mobile, AI, Cloud and Data Engineering expertise,
                  while delivering reliable outcomes and long-term value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built on Vision and Code – Values */}
      <section className="py-8 md:py-9 bg-slate-50 px-4 md:px-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={sectionTransition}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#0f2a4a]">Our Approach </span>
              <span className="bg-gradient-to-r from-[#004475] to-[#33a8d9] bg-clip-text text-transparent">
                Combines
              </span>
            </h2>
            {/* <p className="text-lg text-muted-foreground">
              To be a trusted technology partner for businesses worldwide by transforming challenges into innovative digital solutions through Web, Mobile, AI, Cloud and Data Engineering expertise, while delivering reliable outcomes and long-term value.
            </p> */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={cardVariants}
                whileHover={{ y: -4, transition: hoverTransition }}
                transition={hoverTransition}
                className="relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 group-hover:border-[#33a8d9]/40 hover:border-[#33a8d9]/40 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 group cursor-default"
              >
                {/* Icon */}
                <div
                  className={`relative h-14 w-14 shrink-0 rounded-2xl border-2 border-[#004475]/10 group-hover:border-transparent transition-colors duration-300 flex items-center justify-center`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <value.icon className="relative z-10 h-7 w-7 text-[#004475] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f2a4a] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </div>
                {/* Corner glow */}
                <div
                  className={`absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#33a8d9]/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Expertise in Motion */}
      <WhyChooseUsWave />

      {/* Certifications & Expertise */}
      {/* <section className="py-8 md:py-12 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={sectionTransition}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#0f2a4a]">Certifications </span>
              <span className="bg-gradient-to-r from-[#004475] to-[#33a8d9] bg-clip-text text-transparent">
                &amp;
              </span>
              <span className="text-[#0f2a4a]"> Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team holds industry-recognized certifications and follows best
              practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={cardVariants}
                whileHover={{ y: -4, transition: hoverTransition }}
                transition={hoverTransition}
                className="relative overflow-hidden flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-blue-100 group-hover:border-[#33a8d9]/40 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="relative h-12 w-12 shrink-0 rounded-xl border-2 border-blue-200 group-hover:border-transparent transition-colors duration-300 flex items-center justify-center text-xl">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#004475] to-[#33a8d9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{cert.icon}</span>
                </div>
                <div className="relative z-10">
                  <span className="font-semibold text-[#0f2a4a] text-sm leading-snug">
                    {cert.name}
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle className="h-3.5 w-3.5 text-[#33a8d9]" />
                    <span className="text-xs text-[#004475] font-medium">
                      Verified
                    </span>
                  </div>
                </div>
                {/* Corner glow */}
      {/* <div
                  className={`absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-[#33a8d9]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Introducing Our Team Redesigned */}
      <section className="py-8 md:py-9 bg-[#fcfdfe] px-4 md:px-6">
        <div className="container-custom">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={sectionViewport}
              transition={sectionTransition}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-[#004475]/20" />
                <span className="text-xs font-bold text-[#004475]/50 tracking-[0.2em] uppercase">
                  Team —
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#004475]">
                Our Leadership Team
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 lg:pt-2"
            >
              {/* <p className="text-lg text-[#004475]/70 leading-relaxed max-w-xl">
                A small, deliberate group of operators, engineers and designers. No layers, no handoffs — the people you meet are the people who build, ship and stay accountable for the outcome.
              </p> */}
            </motion.div>
          </div>

          {/* <div className="h-[1px] w-full bg-[#004475]/10 mb-0" /> */}

          {/* Members Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, transition: hoverTransition }}
                transition={hoverTransition}
                className="group p-6 md:p-8 flex flex-col gap-6 border-2 border-gray-300 rounded-2xl bg-white"
              >
                {/* Header Section: Image + Name/Role */}
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  {/* Square Image at Left */}
                  <div className="h-36 w-36 sm:h-42 sm:w-42 shrink-0 overflow-hidden bg-slate-50 rounded-2xl border border-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Name and Role at Right */}
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-[#004475] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#33a8d9] tracking-[0.2em] uppercase mb-3">
                      {member.role}
                    </p>
                    {member.location && (
                      <p className="text-xs font-bold text-[#33a8d9] tracking-[0.2em] uppercase">
                        {member.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Full Width Description Below */}
                <div className="flex-grow pt-2">
                  <p className="text-sm text-[#004475]/70 leading-relaxed whitespace-pre-line text-justify">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Redesigned */}
      {/* <section className="py-5 md:py-7 bg-[#fcfdfe]">
        <div className="container-custom">
          {/* Header Row */}
      {/* <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={sectionViewport}
              transition={sectionTransition}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-[#004475]/20" />
                <span className="text-xs font-bold text-[#004475]/50 tracking-[0.2em] uppercase">
                  Careers —
                </span>
              </div>
              <h2 className="text-5xl md:text-5xl font-bold text-[#004475]">
                Join Us
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 lg:pt-2"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl">
                Looking to level up your career? We constantly search for
                creative minds in engineering, design and product management.
              </p>
              <p className="text-xl font-bold text-[#004475]">
                Ready to accelerate? Let&apos;s chat.
              </p>
            </motion.div>
          </div> */}

      {/* <div className="h-[1px] w-full bg-[#004475]/10 mb-8" /> */}

      {/* Content Grid */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-16"> */}
      {/* Left Column: Ratings */}
      {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={sectionTransition}
              className="lg:col-span-5"
            > */}
      {/* <h4 className="text-xs font-bold text-[#004475]/40 tracking-widest uppercase mb-6">Reviewed by our team</h4> */}

      {/* <div className="space-y-0">
                {[
                  { name: "Glassdoor", rating: "4.1" },
                  { name: "AmbitionBox", rating: "4.7" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-8 border-t border-[#004475]/10"
                  >
                    <span className="text-lg font-medium text-[#004475]/80">
                      {item.name}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-[#004475]">
                        {item.rating}
                      </span>
                      <span className="text-sm font-bold text-[#004475]/30">
                        / 5
                      </span>
                    </div>
                  </div>
                ))}
              </div> */}

      {/* <div className="pt-5">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 text-lg font-bold text-[#33a8d9] border-b-2 border-[#004475] pb-1 hover:text-[#33a8d9] hover:border-[#33a8d9] transition-all duration-300 group"
                >
                  View Open Roles{" "}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div> */}

      {/* Right Column: Perks Grid */}
      {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7"
             >
              <h4 className="text-xs font-bold text-gray-800 tracking-widest uppercase mb-6">
                Inside the studio
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-l border-t border-[#004475]/10">
                {[
                  { id: "01", title: "Hackathons", sub: "Quarterly" },
                  { id: "02", title: "Workshops", sub: "Weekly" },
                  { id: "03", title: "Wins", sub: "Always" },
                  { id: "04", title: "Team Offsite", sub: "Twice a year" },
                  { id: "05", title: "Game Nights", sub: "Fridays" },
                  { id: "06", title: "Lunch & Learn", sub: "Every Thursday" },
                ].map((perk, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 0.99 }}
                    transition={hoverTransition}
                    className="p-8 border-r border-b border-[#004475]/10 bg-white group relative min-h-[180px] flex flex-col justify-between overflow-hidden"
                  >
                    <AnimatePresence initial={false}>
                      <StudioSlider />
                    </AnimatePresence>

                    <div className="relative z-10">
                      <span className="text-[10px] font-bold text-[#004475]/20">
                        {perk.id}
                      </span>
                      <div className="mt-4">
                        <h5 className="text-xl font-bold text-[#004475] mb-2">
                          {perk.title}
                        </h5>
                        <p className="text-xs font-medium text-[#004475]/40">
                          {perk.sub}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-0 z-10">
                      <ArrowUpRight className="h-4 w-4 text-[#33a8d9]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
      {/* </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-8 md:py-12 gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={sectionTransition}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beyond Code — We&apos;re Your Technology Partners
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              From strategy and design to launch and support, we&apos;re with
              you every step of the way, focused on long-term success, not just
              project delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={hoverTransition}
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={hoverTransition}
              >
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary"
                  asChild
                >
                  <Link href="/team">Meet Our Team</Link>
                </Button> */}
      {/* </motion.div>
            </div>
          </motion.div>
        </div>
      </section> */}
      {/* Final Closing Section */}
      <section className="py-12 md:py-16 bg-[#004475] text-white relative overflow-hidden px-4 md:px-8">
        <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-center" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={sectionViewport}
            transition={sectionTransition}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let’s build the future together
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed text-justify">
              Whether you are building a new product, modernizing an existing
              platform, or scaling your engineering capabilities, Livik is
              committed to delivering technology solutions you can depend on.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[#33a8d9] hover:bg-[#33a8d9]/90 text-white h-12 px-6 rounded-full text-md font-semibold"
                asChild
              >
                <Link href="/contact">
                  Let’s Build Something Reliable Together.
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg" className="border-white/30 text-white h-14 px-10 rounded-full text-lg font-bold">
                Learn More
              </Button> */}
            </div>
            <p className="mt-12 text-[#33a8d9] font-black uppercase tracking-[0.4em] opacity-50">
              Smarter • Faster • Better
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
