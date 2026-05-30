"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
import { ArrowRight, Check, CheckCircle, CheckCircle2 } from "lucide-react";
import "./HeroBackend.css";
import "./WhyChoose.css";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    title: "ColdFusion Application Maintenance",
    description:
      "Ensure your applications run smoothly with ongoing monitoring, updates and issue resolution.",
  },
  {
    title: "Performance Optimization",
    description:
      "Identify bottlenecks and improve application speed, responsiveness and efficiency.",
  },
  {
    title: "Security Updates & Hardening",
    description:
      "Protect your system with updated security practices and vulnerability fixes.",
  },
  {
    title: "Legacy System Modernization",
    description:
      "Upgrade outdated ColdFusion applications with improved architecture, UI and integrations.",
  },
  {
    title: "API Development & Integration",
    description:
      "Extend functionality by connecting your ColdFusion system with modern tools and services.",
  },
  {
    title: "Migration & Transition Support",
    description:
      "Plan and execute gradual migration strategies to modern technologies when needed.",
  },
];

const benefits = [
  {
    title: "Experience with Legacy Systems",
    description:
      "We understand how to work with complex, long-running applications without breaking them.",
  },
  {
    title: "Cost-Effective Approach",
    description:
      "Extend system life and improve performance without expensive full rebuilds.",
  },
  {
    title: "Minimal Disruption",
    description:
      "We ensure updates and improvements don’t interrupt your business operations.",
  },
  {
    title: "Future-Ready Planning",
    description:
      "We help you modernize at your pace while maintaining system stability.",
  },
];

const Breadcrumb = () => (
  <nav
    className="flex flex-wrap mb-8 text-sm font-semibold text-gray-400 justify-center lg:justify-end items-center gap-y-2 px-4 reveal"
    style={{ "--d": "0ms" } as React.CSSProperties}
  >
    <div className="flex items-center">
      <Link
        href="/"
        className="hover:text-white transition-colors whitespace-nowrap"
      >
        Home
      </Link>
      <span className="mx-2 opacity-50">›</span>
    </div>
    <div className="flex items-center">
      <Link
        href="/services"
        className="hover:text-white transition-colors whitespace-nowrap"
      >
        Services
      </Link>
      <span className="mx-2 opacity-50">›</span>
    </div>
    <div className="flex items-center">
      <span className="text-gray-500 whitespace-nowrap">Backend</span>
      <span className="mx-2 opacity-50">›</span>
    </div>
    <span className="text-white text-center font-bold">ColdFusion</span>
  </nav>
);

export default function ColdFusionPage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const titleText =
    "ColdFusion Development & Modernization for Stable, Secure and Cost-Effective Systems";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="be-hero be-hero--reversed">
        <div className="be-hero__diag" />
        <div
          className="be-hero__blob"
          style={{ right: "auto", left: "-5%" } as React.CSSProperties}
        />

        <div className="w-full px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Art & Terminal */}
            <div
              className="relative reveal order-2 lg:order-1"
              style={{ "--d": "600ms" } as React.CSSProperties}
            >
              <div className="be-hero__art">
                <svg
                  width="480"
                  height="450"
                  viewBox="0 -50 480 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="be-hero__svg w-full h-auto"
                >
                  <defs>
                    <linearGradient
                      id="be-stroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#1d8fe1" />
                      <stop offset="100%" stopColor="#004475" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(240, 170)">
                    <defs>
                      <radialGradient
                        id="cf-fade"
                        cx="50%"
                        cy="50%"
                        r="50%"
                        fx="50%"
                        fy="50%"
                      >
                        <stop offset="40%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <mask id="cf-blend-mask">
                        <circle cx="0" cy="0" r="210" fill="url(#cf-fade)" />
                      </mask>
                    </defs>
                    {/* High-Tech ColdFusion Hero Image with Seamless Blending */}
                    <image
                      href="/cf-be.png"
                      x="-200"
                      y="-200"
                      width="390"
                      height="390"
                      mask="url(#cf-blend-mask)"
                      style={{ mixBlendMode: "screen" } as React.CSSProperties}
                    />
                  </g>

                  {/* Connecting Paths */}
                  <path
                    d="M240 -15 V140 M240 200 V320 M120 170 H200 M280 170 H360"
                    stroke="#1d8fe1"
                    strokeOpacity="0.45"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                  />
                </svg>

                {/* Terminal Card */}
                <div
                  className="be-hero__code"
                  style={
                    { bottom: "60px", left: "-30px" } as React.CSSProperties
                  }
                >
                  <div className="be-hero__code-bar">
                    <div className="be-hero__dot be-hero__dot--r" />
                    <div className="be-hero__dot be-hero__dot--y" />
                    <div className="be-hero__dot be-hero__dot--g" />
                    <span className="be-hero__code-name">Application.cfc</span>
                  </div>
                  <div className="be-hero__code-body">
                    <div>
                      <span className="be-kw">&lt;cfcomponent&gt;</span>
                    </div>
                    <div className="pl-4">
                      <span className="be-kw">&lt;cffunction</span>{" "}
                      <span className="be-id">name</span>=
                      <span className="be-str">"init"</span>&gt;
                    </div>
                    <div className="pl-8">
                      <span className="be-kw">&lt;cfset</span>{" "}
                      <span className="be-id">this.name</span> ={" "}
                      <span className="be-str">"App"</span>&gt;
                    </div>
                    <div className="pl-4">
                      <span className="be-kw">&lt;/cffunction&gt;</span>
                    </div>
                    <div>
                      <span className="be-kw">&lt;/cfcomponent&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-right order-1 lg:order-2">
              <Breadcrumb />

              <h1
                className="be-hero__title reveal"
                style={{ "--d": "120ms" } as React.CSSProperties}
              >
                {titleText.split(" ").map((word, i) => (
                  <span
                    key={i}
                    style={
                      {
                        "--wd": `${(titleText.split(" ").length - i) * 60}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p
                className="be-hero__intro reveal mb-4"
                style={{ "--d": "240ms" } as React.CSSProperties}
              >
                If your business runs on ColdFusion, stability isn’t optional.
              </p>

              <p
                className="be-hero__para reveal mb-8"
                style={{ "--d": "300ms" } as React.CSSProperties}
              >
                At Livik, we help you maintain, optimize and modernize
                ColdFusion applications so they remain secure, reliable and
                scalable—without disrupting your operations.
              </p>

              <div
                className="flex flex-col items-center lg:items-end mb-10 reveal"
                style={{ "--d": "360ms" } as React.CSSProperties}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                  {[
                    "Keep legacy systems stable and secure",
                    "Improve performance and reduce downtime",
                    "Modernize without full system rebuilds",
                    "Extend the life of existing applications",
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="be-hero__chip flex items-start text-left"
                    >
                      <Check className="be-hero__chip-icon w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{point.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="be-hero__btn-group reveal"
                style={{ "--d": "480ms" } as React.CSSProperties}
              >
                <Link
                  href="/contact"
                  className="be-hero__btn be-hero__btn--primary"
                >
                  Maintain & Optimize Your ColdFusion App
                </Link>
                {/* <Link
                  href="/contact"
                  className="be-hero__btn be-hero__btn--secondary"
                >
                  Get a Free System Audit
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-center heading-section">
              Keep Your ColdFusion Systems Running—Without the Headaches
            </h2>
            <p className="text-lead text-muted-foreground mt-8">
              Replacing legacy systems is expensive, risky and time-consuming.
              We help businesses get more value from their existing ColdFusion
              applications by improving performance, fixing issues and gradually
              modernizing systems where needed. Whether you’re maintaining a
              critical system or planning a transition, we ensure your
              application stays reliable and business-ready.
            </p>
          </ScrollReveal>
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
              with ColdFusion
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
                      <CheckCircle size={26} strokeWidth={2} />
                    </div>

                    <h3 className="heading-card text-[#004475] mb-4 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-body font-medium text-[#506478] mb-8 flex-grow relative z-10">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="wc-section section-padding bg-blue-50/40">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="wc-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#004475]">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>{" "}
              for ColdFusion Services
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="wc-feature-card group h-full flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
                    <div className="wc-icon-tile mb-6 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="wc-feature-title text-xl font-bold mb-4 text-[#004475]">
                      {item.title}
                    </h3>
                    <p className="wc-feature-desc text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-5xl font-bold leading-tight">
              Ready to Stabilize or Modernize Your ColdFusion System?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto mt-4 text-blue-50">
              If your ColdFusion application is slowing you down or becoming
              harder to manage, it’s time to take control. Let’s make it stable,
              secure and future-ready.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto px-8 h-12 rounded-full text-md font-bold"
                asChild
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center"
                >
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
