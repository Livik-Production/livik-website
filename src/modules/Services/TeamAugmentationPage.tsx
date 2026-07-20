"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Users,
  Briefcase,
  Zap,
  TrendingUp,
  ShieldCheck,
  UserPlus,
  Rocket,
  Search,
  CheckCircle2,
} from "lucide-react";
import CoreServiceHero from "@/components/CoreServiceHero";
import "./HeroReact.css";
import "./WhyChoose.css";

const roles = [
  {
    title: "Frontend Developers",
    description:
      "Build responsive, high-performance interfaces using modern frameworks.",
    icon: LayoutGrid,
  },
  {
    title: "Backend Developers",
    description:
      "Develop scalable APIs, business logic and high-performance systems.",
    icon: Zap,
  },
  {
    title: "Mobile App Developers",
    description:
      "Create reliable iOS and Android applications with seamless user experience.",
    icon: Rocket,
  },
  {
    title: "QA & Testing Engineers",
    description:
      "Ensure quality, stability and performance across your applications.",
    icon: ShieldCheck,
  },
  {
    title: "DevOps Engineers",
    description: "Improve deployment, infrastructure and system reliability.",
    icon: TrendingUp,
  },
];

const models = [
  {
    title: "Dedicated Developers (Monthly)",
    description:
      "Extend your team with full-time developers aligned with your workflow and goals.",
    icon: Users,
  },
  {
    title: "Flexible Scaling",
    description:
      "Add or reduce team members based on your project requirements and timelines.",
    icon: UserPlus,
  },
];

const gains = [
  {
    title: "Faster Team Scaling",
    description: "Avoid long hiring cycles and onboard developers quickly.",
    icon: Zap,
  },
  {
    title: "Access to Skilled Engineers",
    description:
      "Work with developers experienced in modern technologies and workflows.",
    icon: Users,
  },
  {
    title: "Full Control & Transparency",
    description: "Your team, your process—no handover or dependency issues.",
    icon: ShieldCheck,
  },
  {
    title: "Cost Efficiency",
    description: "Scale your team without long-term hiring commitments.",
    icon: TrendingUp,
  },
];

const whyChoose = [
  {
    title: "Fast Hiring Without Compromising Quality",
    description:
      "We help you onboard developers quickly while maintaining strong engineering standards.",
  },
  {
    title: "Engineers Who Integrate with Your Team",
    description:
      "Our developers work within your tools, processes and communication flow.",
  },
  {
    title: "Flexible & Risk-Free Engagement",
    description:
      "Scale up or down anytime with free replacement and trial options.",
  },
  {
    title: "Built for Startups & SaaS Teams",
    description:
      "We understand fast-moving teams and deliver developers who can keep up.",
  },
];

const whoIsFor = [
  "Startups building MVPs or scaling products",
  "SaaS companies needing to expand engineering teams",
  "Agencies handling multiple client projects",
  "Teams facing hiring delays or skill gaps",
  "Businesses needing short-term or long-term developers",
];

const processSteps = [
  {
    title: "Understand Your Requirements",
    desc: "Tech stack, roles and project needs",
    icon: Search,
  },
  {
    title: "Match the Right Developers",
    desc: "Select engineers aligned with your requirements",
    icon: Users,
  },
  {
    title: "Onboard Quickly",
    desc: "Developers integrate with your team and tools",
    icon: Zap,
  },
  {
    title: "Start Delivering Immediately",
    desc: "Work begins with minimal ramp-up time",
    icon: Rocket,
  },
  {
    title: "Scale as Needed",
    desc: "Adjust team size based on your project demands",
    icon: TrendingUp,
  },
];

export default function TeamAugmentationPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <CoreServiceHero
        slug="team-augmentation"
        className="-mt-12"
        iconScale={1.3}
        centerScale={1.4}
      />

      {/* Overview Section */}
      <section className={`hero-react ${isVisible ? "is-visible" : ""} px-4 md:px-8`}>
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <h2 className="hero-react__title reveal">
            Build Your Team Without Slowing Down
          </h2>
          <div className="mt-6 space-y-10">
            <p className="hero-react__para reveal text-justify">
              Traditional hiring is slow, expensive and unpredictable.
            </p>
            <p className="hero-react__para reveal text-justify">
              With staff augmentation, you get immediate access to experienced
              developers who work as an extension of your in-house team—without
              long hiring cycles or overhead.
            </p>
            <div className="flex flex-col items-center gap-2 mt-8">
              <p className="text-2xl font-bold text-[#004475]">
                You manage the work.
              </p>
              <p className="text-2xl font-bold text-[#1d8fe1]">
                We provide the talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden bg-[#004475] text-white">
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
          <ScrollReveal className="text-center mb-10 md:mb-16">
            {/* <div className="inline-flex items-center justify-center rounded-full border border-[#cfe6f7] bg-[#eaf4fc] px-4 py-1.5 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#004475]">
                ROLES YOU CAN AUGMENT
              </span>
            </div> */}
            <h2 className="text-center heading-section text-white flex items-center justify-center flex-wrap gap-2">
              Expert Talent for Every{" "}
              <span className="relative px-7 py-2.5 inline-flex items-center justify-center group overflow-hidden rounded-2xl">
                {/* Premium Glass Background with Diagonal Gradient */}
                <span className="absolute inset-0 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" />

                {/* Animated Shimmer Overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                {/* Text with Diagonal Gradient and Continuous Animation */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] animate-[gradShift_4s_linear_infinite] font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  Tech Role
                </span>

                {/* Subtle outer glow */}
                <span className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />
              </span>
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group h-full flex flex-col rounded-2xl bg-white p-6 md:p-8 border border-gray-300 transition-all duration-[450ms] hover:-translate-y-[10px] hover:border-[#1d8fe1] shadow-[0_4px_20px_rgba(0,68,117,0.06)]">
                    <div className="wc-icon-tile mb-6">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-[#506478] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Engagement Models That Fit Your Needs
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {models.map((model, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative h-full bg-white p-6 md:p-8 rounded-2xl border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-[#1d8fe1]/20 overflow-hidden">
                  {/* Subtle dot grid pattern on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(#004475_1px,transparent_1px)] [background-size:20px_20px]" />

                  {/* Side accent line background */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-100" />

                  {/* Animated side accent line */}
                  <div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-[#004475] to-[#1d8fe1] h-0 group-hover:h-full transition-all duration-700 ease-in-out" />

                  <div className="relative z-10 pl-2">
                    <div className="wc-icon-tile mb-6">
                      <model.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475] mb-4 group-hover:text-[#1d8fe1] transition-colors duration-300">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-100/80">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              What You Gain
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gains.map((gain, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group h-full flex flex-col rounded-2xl bg-white p-6 md:p-8 border border-gray-300 transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[10px] hover:border-[#1d8fe1] hover:bg-gradient-to-b hover:from-white hover:to-[#f4faff] shadow-[0_4px_20px_rgba(0,68,117,0.06)] hover:shadow-[0_8px_30px_rgba(0,68,117,0.28),0_0_0_1px_rgba(29,143,225,0.25),0_0_20px_rgba(29,143,225,0.35)] cursor-pointer relative overflow-hidden">
                  {/* Radial Glow Highlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,143,225,0.18)_0%,transparent_100%)] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 pointer-events-none" />

                  {/* Top gradient bar sliding in */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#004475] via-[#1d8fe1] to-[#cfe6f7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]" />

                  {/* Icon Tile */}
                  <div className="wc-icon-tile mb-6 z-10 !h-14 !w-14">
                    <gain.icon size={26} strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-[#004475] mb-4 relative z-10">
                    {gain.title}
                  </h3>
                  <p className="text-sm font-medium text-[#506478] leading-relaxed relative z-10">
                    {gain.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="wc-section py-16 md:py-24 px-4 md:px-8 bg-slate-200/50">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            {/* <span className="wc-eyebrow">WHY CHOOSE US</span> */}
            <h2 className="wc-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik{" "}
              </span>
              for Staff Augmentation
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="wc-feature-card group flex flex-col items-start text-left p-8 rounded-2xl bg-white border border-gray-300 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 h-full"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For & How We Help */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-100/80">
        <div className="container-custom grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#004475] mb-8">
                Who This Is For
              </h2>
              <div className="space-y-4">
                {whoIsFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#004475]" />
                    </div>
                    <p className="text-[#004475] font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#004475] mb-8">
                How We Help You Scale Your Team
              </h2>
              <div className="relative space-y-12 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 bg-white rounded-full border-2 border-[#004475] flex items-center justify-center text-[#004475] z-10">
                      <step.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 md:py-24 px-4 md:px-8 gradient-hero text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Scale Your Development Team Faster?
            </h2>
            <p className="text-xl text-justify opacity-90 mb-10 max-w-2xl mx-auto mt-6 leading-relaxed">
              If hiring delays are slowing your product, it’s time to switch to
              a faster, more flexible model.
              <br />
              Let’s build your team—without the wait.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                variant="secondary"
                className="font-bold px-10 h-14 rounded-xl shadow-xl shadow-blue-900/20 transition-all active:scale-95"
                asChild
              >
                <Link href="/contact">
                  Book a Free Strategy Call{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white font-bold px-10 h-14 rounded-xl transition-all"
                asChild
              >
                <Link href="/contact">Get Matched with Developers</Link>
              </Button> */}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
