"use client";

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
  Zap,
  CheckCircle2,
  Target,
  Layers,
  Link2,
  Activity,
} from "lucide-react";
import "./WhyChoose.css";
import CoreServiceHero from "@/components/CoreServiceHero";

const capabilities = [
  {
    title: "Enterprise Web Applications",
    description:
      "Robust, scalable platforms that streamline operations, improve productivity and support business growth.",
  },
  {
    title: "SaaS Product Development",
    description:
      "Launch and scale SaaS products with secure, high-performance architectures built for global users.",
  },
  {
    title: "Custom CRM & ERP Systems",
    description:
      "Centralize operations, automate workflows and gain full visibility into your business processes.",
  },
  {
    title: "API Development & System Integration",
    description:
      "Connect your software ecosystem with secure, high-performance APIs and third-party integrations.",
  },
  {
    title: "Legacy System Modernization",
    description:
      "Upgrade outdated systems with modern technologies to improve speed, scalability and user experience.",
  },
  {
    title: "Workflow Automation Solutions",
    description:
      "Eliminate manual processes, reduce errors and improve operational efficiency with intelligent automation.",
  },
];

const benefits = [
  {
    title: "Built Around Business Outcomes",
    description:
      "We don’t just write code—we build systems that increase efficiency, reduce costs and drive growth.",
    icon: Target,
  },
  {
    title: "Scalable, Future-Ready Architecture",
    description:
      "Your software is designed to handle growth, complexity and evolving business needs.",
    icon: Layers,
  },
  {
    title: "Seamless Integrations",
    description:
      "From CRMs to ERPs to third-party tools—we ensure everything works together without friction.",
    icon: Link2,
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "We continuously monitor, optimize and improve your system to keep it secure and high-performing.",
    icon: Activity,
  },
];

import Image from "next/image";

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <CoreServiceHero
        slug="custom-software"
        className="-mt-12"
        iconScale={1.3}
        centerScale={1.4}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-6"></div>
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Tailored Software Built Around Your Business Goals
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Your business is unique. Your software should be too. We design
              and develop custom applications from the ground up, aligned with
              your processes, users and growth strategy. No bloated features. No
              compromises. Just software that works exactly how you need it to.
              Whether you’re a startup or an enterprise, we help you build
              smarter, move faster and scale efficiently.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding relative overflow-hidden bg-[#004475] text-white">
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
          <ScrollReveal className="text-center mb-12">
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
              </span>
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <StaggerItem key={index}>
                  <div className="group h-full flex flex-col rounded-2xl bg-white p-8 border border-gray-300 transition-all duration-[450ms] hover:-translate-y-[10px] hover:border-[#1d8fe1] shadow-[0_4px_20px_rgba(0,68,117,0.06)]">
                    <div className="wc-icon-tile mb-6">
                      <CheckCircle2 size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475] mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-sm font-medium text-[#506478] leading-relaxed">
                      {capability.description}
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
              for Custom Software
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="wc-feature-card group flex flex-col items-start text-left p-8 rounded-2xl bg-white border border-gray-300 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 h-full">
                    <div className="wc-icon-tile mb-6 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={24} />
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
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Ready to Build Software That Actually Moves Your Business Forward?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto mt-4">
              If your current systems are slowing you down, it’s time to
              upgrade.
              <br />
              Let’s build something better.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
