"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  ArrowRight,
  CheckCircle,
  LayoutGrid,
  Component,
  Database,
  FileCode,
  Plug,
  Zap,
  ShieldCheck,
  Users,
  Quote,
} from "lucide-react";
import Image from "next/image";
import "./WhyChoose.css";
import "./HeroReact.css";
import { useEffect, useRef } from "react";

const capabilities = [
  {
    title: "Enterprise Web Applications",
    description:
      "Develop large-scale applications designed to handle complex workflows, high user loads and long-term scalability.",
    icon: LayoutGrid,
  },
  {
    title: "Single Page Applications (SPAs)",
    description:
      "Build fast, dynamic applications with seamless navigation and responsive user experiences.",
    icon: Component,
  },
  {
    title: "Custom Dashboards & Admin Panels",
    description:
      "Create structured, data-driven interfaces that simplify operations and improve decision-making.",
    icon: Database,
  },
  {
    title: "Component-Based Architecture",
    description:
      "Develop reusable, modular components for faster development and consistent UI across applications.",
    icon: FileCode,
  },
  {
    title: "API Integration & Frontend Architecture",
    description:
      "Ensure smooth communication between frontend and backend systems with scalable integration patterns.",
    icon: Plug,
  },
  {
    title: "Application Modernization",
    description:
      "Upgrade legacy systems into structured Angular applications with better performance and maintainability.",
    icon: Zap,
  },
];

const benefits = [
  {
    title: "Built for Complex Applications",
    description:
      "We specialize in applications that require structure, scalability and long-term stability.",
  },
  {
    title: "Clean & Maintainable Codebase",
    description:
      "Organized architecture ensures easier updates, faster development cycles and lower maintenance costs.",
  },
  {
    title: "Performance-Oriented Development",
    description:
      "We optimize rendering and data handling to ensure smooth user experiences.",
  },
  {
    title: "Future-Ready Architecture",
    description:
      "Your application is built to scale with evolving features, users and business needs.",
  },
];

const Breadcrumb = () => (
  <nav className="flex mb-8 text-sm font-medium text-gray-400">
    <Link href="/" className="hover:text-white transition-colors">
      Home
    </Link>
    <span className="mx-2">›</span>
    <Link href="/services" className="hover:text-white transition-colors">
      Services
    </Link>
    <span className="mx-2">›</span>
    <span className="text-gray-500">Frontend</span>
    <span className="mx-2">›</span>
    <span className="text-white">Angular</span>
  </nav>
);

export default function AngularPage() {
  const overviewRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = overviewRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#051121] overflow-hidden py-20 lg:py-12 px-4 md:px-8">
        <div className="w-full px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <ScrollReveal>
                <Breadcrumb />
                <h1 className="heading-hero text-white mb-6">
                  Angular Development for Scalable, Structured and
                  Enterprise-Ready Applications
                </h1>
                <p className="cl-hero__para text-lead text-gray-300 mb-8 max-w-2xl">
                  {"When your application grows, poor architecture becomes a bottleneck."
                    .split(" ")
                    .map((word, i) => (
                      <span
                        key={i}
                        className="cl-hero__word"
                        style={{ "--wd": `${i * 15}ms` } as React.CSSProperties}
                      >
                        {word}
                      </span>
                    ))}
                  <br />
                  <br />
                  {"At Livik, we build Angular applications that are structured, scalable and built for long-term maintainability. Whether you’re developing enterprise platforms, dashboards, or complex web apps, we ensure your frontend is robust, organized and performance-driven."
                    .split(" ")
                    .map((word, i) => (
                      <span
                        key={i + 100}
                        className="cl-hero__word"
                        style={
                          {
                            "--wd": `${(i + 20) * 15}ms`,
                          } as React.CSSProperties
                        }
                      >
                        {word}
                      </span>
                    ))}
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Structured architecture for large-scale applications",
                    "Strong performance with optimized rendering",
                    "Maintainable code for long-term scalability",
                    "Ideal for enterprise-grade applications",
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-200 font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-14 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                    asChild
                  >
                    <Link href="/contact">Start Your Angular Project</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image */}
            <div className="relative">
              <ScrollReveal direction="left">
                <div className="relative z-10 w-full max-w-xl mx-auto">
                  <Image
                    src="/Angular.png"
                    alt="Angular Development Illustration"
                    width={800}
                    height={800}
                    className="w-full h-auto mix-blend-screen opacity-90 [mask-image:radial-gradient(circle_at_center,white_30%,transparent_90%)] drop-shadow-[0_0_60px_rgba(59,130,246,0.4)]"
                    priority
                  />
                </div>
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[120px] -z-10" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section ref={overviewRef} className="hero-react px-4 md:px-8">
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="hero-react__title reveal"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            Build Applications That Stay Stable as You Scale
          </h2>
          <div className="mt-8 space-y-6">
            <p
              className="hero-react__para reveal text-justify"
              style={{ "--delay": "150ms" } as React.CSSProperties}
            >
              Angular isn't just about building interfaces-it’s about building
              structured,long-term systems.
            </p>
            <p
              className="hero-react__para reveal text-justify"
              style={{ "--delay": "300ms" } as React.CSSProperties}
            >
              We use Angular to develop modular, maintainable applications that
              handle complex workflows and growing feature sets without turning
              into technical debt. This makes it ideal for businesses that need
              stability, scalability and consistent performance over time.
            </p>
            <p
              className="hero-react__para reveal text-justify"
              style={{ "--delay": "450ms" } as React.CSSProperties}
            >
              From enterprise tools to large web platforms, we build
              applications that don’t break as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pt-10 md:pt-14 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden bg-[#004475] text-white">
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
          <ScrollReveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-center heading-section text-white flex items-center justify-center flex-wrap gap-2">
              What We{" "}
              <span className="relative px-7 py-2.5 inline-flex items-center justify-center group overflow-hidden rounded-2xl">
                {/* Premium Glass Background with Diagonal Gradient */}
                <span className="absolute inset-0 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" />

                {/* Animated Shimmer Overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                {/* Text with Diagonal Gradient and Continuous Animation */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] animate-[gradShift_4s_linear_infinite] font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  Deliver
                </span>

                {/* Subtle outer glow */}
                <span className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />
              </span>{" "}
              with Angular
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((item, index) => (
                <StaggerItem key={index} className="h-full">
                  <div className="group h-full flex flex-col rounded-2xl bg-white p-8 border border-gray-300 transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[10px] hover:border-[#1d8fe1] hover:bg-gradient-to-b hover:from-white hover:to-[#f4faff] shadow-[0_4px_20px_rgba(0,68,117,0.06)] hover:shadow-[0_8px_30px_rgba(0,68,117,0.28),0_0_0_1px_rgba(29,143,225,0.25),0_0_20px_rgba(29,143,225,0.35)] cursor-pointer relative overflow-hidden">
                    {/* Radial Glow Highlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,143,225,0.18)_0%,transparent_100%)] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 pointer-events-none" />

                    {/* Top gradient bar sliding in */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#004475] via-[#1d8fe1] to-[#cfe6f7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]" />

                    {/* Icon Tile */}
                    <div className="wc-icon-tile mb-6 z-10 !h-14 !w-14">
                      <item.icon size={26} strokeWidth={2} />
                    </div>

                    <h3 className="heading-card text-[#004475] mb-4 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-body font-medium text-[#506478] mb-8 flex-grow relative z-10">
                      {item.description}
                    </p>

                    {/* Footer link */}
                    {/* <div className="flex items-center gap-2 opacity-75 text-xs font-bold text-[#004475] transition-all duration-[300ms] group-hover:gap-3 group-hover:opacity-100 group-hover:text-[#1d8fe1] mt-auto relative z-10">
                      {" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-1"
                      />
                    </div> */}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="wc-section section-padding bg-blue-50/40">
        <div className="container-custom">
          {/* Top: Content */}
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <ScrollReveal>
              <h2 className="wc-heading heading-section mt-2">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                  Livik
                </span>{" "}
                for Angular Development
              </h2>
            </ScrollReveal>
          </div>

          {/* Bottom: 4 Features */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => {
                const icons = [Zap, ShieldCheck, Users, FileCode];
                const Icon = icons[index % icons.length];
                return (
                  <StaggerItem key={index}>
                    <div className="wc-feature-card group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 h-full">
                      <div className="wc-icon-tile mb-6 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="wc-feature-title text-xl font-bold mb-4 text-[#004475]">
                        {item.title}
                      </h3>
                      <p className="wc-feature-desc text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-center heading-section">
              Ready to Build a Scalable Angular Application?
            </h2>
            <p className="text-xl text-justify opacity-90 mb-8 max-w-2xl mx-auto mt-4 space-y-2">
              <span>
                If your application is growing in complexity, Angular provides
                the structure you need—execution makes the difference.
              </span>
              <br />
              <span>Let’s build it right.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
