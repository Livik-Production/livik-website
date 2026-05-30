"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
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
  Gauge,
  Smartphone,
  Plug,
  Zap,
  ShieldCheck,
  Users,
  FileCode,
  Quote,
} from "lucide-react";
import Image from "next/image";
import "./WhyChoose.css";
import "./HeroReact.css";

const capabilities = [
  {
    title: "Single Page Applications (SPAs)",
    description:
      "Fast-loading applications with seamless navigation and real-time updates—no full page reloads.",
    icon: LayoutGrid,
  },
  {
    title: "Progressive Web Apps (PWAs)",
    description:
      "Reliable web apps that deliver app-like experiences with offline support and improved performance.",
    icon: Smartphone,
  },
  {
    title: "Interactive Dashboards & Web Portals",
    description:
      "Data-driven interfaces designed for clarity, usability and efficient decision-making.",
    icon: Database,
  },
  {
    title: "Component-Based UI Development",
    description:
      "Reusable UI components that ensure consistency, faster development and easier scalability.",
    icon: Component,
  },
  {
    title: "Frontend Integration with APIs",
    description:
      "Seamless integration with backend systems and APIs to ensure smooth data flow and performance.",
    icon: Plug,
  },
  {
    title: "Application Performance Optimization",
    description:
      "Improve rendering speed, responsiveness and overall user experience across devices.",
    icon: Gauge,
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
    <span className="text-white">React.js</span>
  </nav>
);

export default function ReactPage() {
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
      <section className="relative min-h-[500px] flex items-center bg-[#051121] overflow-hidden py-12 lg:py-10">
        <div className="w-full px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <ScrollReveal>
                <Breadcrumb />
                <h1 className="heading-hero text-white mb-6">
                  ReactJS Development for Fast, Scalable and Interactive Web
                  Applications
                </h1>
                <p className="cl-hero__para text-lead text-gray-300 mb-8 max-w-2xl">
                  {"A slow or unresponsive frontend directly impacts user experience and conversions."
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
                  {"At Livik, we build high-performance ReactJS applications that deliver smooth interactions, fast load times and scalable architectures. Whether you’re building a web platform, dashboard, or customer-facing application, we ensure your frontend performs reliably under real-world conditions."
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
                    "Fast, responsive user interfaces",
                    "Scalable component-based architecture",
                    "Smooth, dynamic user experiences",
                    "Built for long-term maintainability",
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
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image */}
            <div className="relative">
              <ScrollReveal direction="left">
                <div className="relative z-10 w-full max-w-xl mx-auto">
                  <Image
                    src="/React.png"
                    alt="React Development Illustration"
                    width={800}
                    height={800}
                    className="w-full h-auto mix-blend-screen opacity-90 [mask-image:radial-gradient(circle_at_center,white_50%,transparent_100%)] drop-shadow-[0_0_60px_rgba(59,130,246,0.4)]"
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
      <section ref={overviewRef} className="hero-react">
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="hero-react__title reveal"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            Build Modern Web Applications with ReactJS
          </h2>
          <div className="mt-8 space-y-6">
            <p
              className="hero-react__para reveal"
              style={{ "--delay": "150ms" } as React.CSSProperties}
            >
              ReactJS enables the development of dynamic, interactive
              applications that respond instantly to user actions.
            </p>
            <p
              className="hero-react__para reveal"
              style={{ "--delay": "300ms" } as React.CSSProperties}
            >
              We use React&apos;s component-based architecture to build
              applications that are modular, maintainable and easy to scale.
              This allows faster development cycles, consistent UI and better
              long-term performance.
            </p>
            <p
              className="hero-react__para reveal"
              style={{ "--delay": "450ms" } as React.CSSProperties}
            >
              From internal tools to complex web platforms, we deliver ReactJS
              solutions that are stable, efficient and built to grow with your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pt-10 md:pt-14 pb-16 md:pb-24 relative overflow-hidden bg-[#004475] text-white">
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
              with ReactJS
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
                      Learn more{" "}
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
                for ReactJS Development
              </h2>
            </ScrollReveal>
          </div>

          {/* Bottom: 4 Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="wc-feature-card group h-full border border-gray-300">
              <div className="wc-icon-tile mb-5">
                <Zap size={24} />
              </div>
              <h3 className="wc-feature-title heading-card mb-3">
                Strong Focus on Performance
              </h3>
              <p className="wc-feature-desc text-body leading-relaxed">
                We build React applications that load quickly and respond
                instantly to user interactions.
              </p>
            </div>

            <div className="wc-feature-card group h-full border border-gray-300">
              <div className="wc-icon-tile mb-5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="wc-feature-title heading-card mb-3">
                Scalable Architecture
              </h3>
              <p className="wc-feature-desc text-body leading-relaxed">
                Applications are structured to handle growth, additional
                features and increased usage without degradation.
              </p>
            </div>

            <div className="wc-feature-card group h-full border border-gray-300">
              <div className="wc-icon-tile mb-5">
                <Users size={24} />
              </div>
              <h3 className="wc-feature-title heading-card mb-3">
                Maintainable Codebase
              </h3>
              <p className="wc-feature-desc text-body leading-relaxed">
                Clean, modular code ensures easier updates, faster iterations,
                and reduced long-term costs.
              </p>
            </div>

            <div className="wc-feature-card group h-full border border-gray-300">
              <div className="wc-icon-tile mb-5">
                <FileCode size={24} />
              </div>
              <h3 className="wc-feature-title heading-card mb-3">
                Consistent User Experience
              </h3>
              <p className="wc-feature-desc text-body leading-relaxed">
                We ensure smooth, predictable interactions across all screens
                and devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-center heading-section">
              Ready to Build a Scalable ReactJS Application?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto mt-4 space-y-2">
              <span>
                If you need a frontend that’s fast, scalable and reliable,
                ReactJS is the right choice—and execution is everything.
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
