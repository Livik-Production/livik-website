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
    title: "Backend Web Application Development",
    description:
      "Build fast, scalable backend systems using Django and Flask for reliable performance.",
  },
  {
    title: "API Development & Integration",
    description:
      "Create robust APIs that ensure seamless communication between systems and services.",
  },
  {
    title: "Data Processing & Analytics Solutions",
    description:
      "Process, analyze and extract insights from data to support better business decisions.",
  },
  {
    title: "AI & Machine Learning Applications",
    description:
      "Develop intelligent systems that automate decisions, improve predictions and enhance efficiency.",
  },
  {
    title: "Automation & Scripting Solutions",
    description:
      "Eliminate manual work with automated workflows that improve speed and reduce errors.",
  },
  {
    title: "Scientific Computing & Data Modeling",
    description:
      "Handle complex computations, simulations and data modeling with high accuracy and performance.",
  },
];

const benefits = [
  {
    title: "Built for Data-Heavy Applications",
    description:
      "We design systems that handle large datasets efficiently without performance issues.",
  },
  {
    title: "Clean, Scalable Architecture",
    description:
      "Your application remains easy to maintain, extend and scale over time.",
  },
  {
    title: "Faster Development Cycles",
    description:
      "Python enables rapid development—and we use it to get you to market faster.",
  },
  {
    title: "Versatile Across Use Cases",
    description:
      "From automation to analytics to backend systems, we build solutions that adapt to your needs.",
  },
];

const Breadcrumb = () => (
  <nav
    className="be-hero__crumb reveal"
    style={{ "--d": "0ms" } as React.CSSProperties}
  >
    <Link href="/" className="hover:text-white transition-colors">
      Home
    </Link>
    <span className="be-hero__sep mx-2">›</span>
    <Link href="/services" className="hover:text-white transition-colors">
      Services
    </Link>
    <span className="be-hero__sep mx-2">›</span>
    <span className="text-gray-500">Backend</span>
    <span className="be-hero__sep mx-2">›</span>
    <span className="be-hero__crumb-active">Python</span>
  </nav>
);

export default function PythonPage() {
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
    "Python Development for Data-Driven, Scalable and High-Performance Applications";

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
                        id="python-fade"
                        cx="50%"
                        cy="50%"
                        r="50%"
                        fx="50%"
                        fy="50%"
                      >
                        <stop offset="40%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <mask id="python-blend-mask">
                        <circle
                          cx="0"
                          cy="0"
                          r="210"
                          fill="url(#python-fade)"
                        />
                      </mask>
                    </defs>
                    {/* High-Tech Python Hero Image with Seamless Blending */}
                    <image
                      href="/python-be.png"
                      x="-200"
                      y="-220"
                      width="390"
                      height="390"
                      mask="url(#python-blend-mask)"
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
                    <span className="be-hero__code-name">main.py</span>
                  </div>
                  <div className="be-hero__code-body">
                    <div>
                      <span className="be-kw">from</span> fastapi{" "}
                      <span className="be-kw">import</span> FastAPI
                    </div>
                    <div>
                      <span className="be-id">app</span> ={" "}
                      <span className="be-fn">FastAPI</span>()
                    </div>
                    <div className="mt-2">
                      <span className="be-kw">@app.get</span>(
                      <span className="be-str">"/"</span>)
                    </div>
                    <div>
                      <span className="be-kw">def</span>{" "}
                      <span className="be-fn">read_root</span>():
                    </div>
                    <div className="pl-4">
                      <span className="be-kw">return</span> &#123;
                      <span className="be-str">"status"</span>:{" "}
                      <span className="be-str">"online"</span>&#125;
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
                If your systems rely on data, automation, or intelligence—Python
                is where it starts.
              </p>

              <p
                className="be-hero__para reveal mb-8"
                style={{ "--d": "300ms" } as React.CSSProperties}
              >
                At Livik, we build Python-based applications that help
                businesses process data faster, automate workflows and build
                scalable backend systems.From intelligent platforms to
                high-performance APIs, we ensure your applications are
                efficient, reliable and built to grow.
              </p>

              <div
                className="flex flex-col items-center lg:items-end mb-10 reveal"
                style={{ "--d": "360ms" } as React.CSSProperties}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                  {[
                    "Built for data-intensive applications",
                    "Scalable backend systems and APIs",
                    "Faster development with clean architecture",
                    "Ideal for automation, analytics and intelligent systems",
                  ].map((point, i) => (
                    <div key={i} className="be-hero__chip">
                      <Check className="be-hero__chip-icon w-4 h-4" />
                      <span>{point.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4 reveal"
                style={{ "--d": "480ms" } as React.CSSProperties}
              >
                <Link
                  href="/contact"
                  className="be-hero__btn be-hero__btn--primary"
                >
                  Start Your Python Project
                </Link>
                {/* <Link
                  href="/contact"
                  className="be-hero__btn be-hero__btn--secondary"
                >
                  Talk to a Python Expert
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
              Build Systems That Turn Data Into Decisions
            </h2>
            <p className="text-lead text-muted-foreground mt-8 text-justify">
              Python isn’t just flexible—it’s powerful when used with the right
              architecture. We design and develop Python applications that
              handle data efficiently, automate operations and scale with
              demand. Whether you’re building analytics platforms, backend
              systems, or intelligent applications, we focus on performance,
              clarity and long-term maintainability. No unnecessary
              complexity—just systems that deliver results consistently.
            </p>
          </ScrollReveal>
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
              with Python
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
              for Python Development
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="wc-feature-card group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
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
            <h2 className="text-center heading-section">
              Ready to Build with Python?
            </h2>
            <p className="text-xl text-justify opacity-90 mb-8 max-w-2xl mx-auto mt-4">
              If your business depends on data, automation, or intelligent
              systems, Python is the right foundation—execution makes the
              difference. Let’s build it right.
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
