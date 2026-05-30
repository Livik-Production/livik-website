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
  Users,
  Smartphone,
  Share2,
  Settings,
} from "lucide-react";
import "./WhyChoose.css";
import CoreServiceHero from "@/components/CoreServiceHero";

const capabilities = [
  {
    title: "Native iOS & Android App Development",
    description:
      "Secure, high-performance apps built with Swift and Kotlin for seamless user experiences and full access to device capabilities.",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Build faster and scale efficiently with React Native and Flutter—one codebase, multiple platforms.",
  },
  {
    title: "Progressive Web Apps (PWA)",
    description:
      "App-like web experiences that load fast, work offline and improve accessibility across devices.",
  },
  {
    title: "API Integration & Backend Development",
    description:
      "Robust backend systems and secure API integrations to ensure smooth data flow and scalability.",
  },
  {
    title: "Push Notifications & User Engagement",
    description:
      "Drive retention and re-engagement with personalized, behavior-based push notifications.",
  },
  {
    title: "App Store Optimization (ASO)",
    description:
      "Improve visibility, rankings and downloads with data-driven app store strategies.",
  },
];

const benefits = [
  {
    title: "Built for Real User Engagement",
    description:
      "We design apps that users actually use, revisit and rely on—not just download once.",
    icon: Users,
  },
  {
    title: "Scalable, Future-Ready Architecture",
    description:
      "Your app is built to handle growth, high traffic and evolving features without performance issues.",
    icon: Smartphone,
  },
  {
    title: "Seamless Integrations",
    description:
      "We connect your app with CRMs, APIs, cloud services and third-party tools—without friction.",
    icon: Share2,
  },
  {
    title: "Continuous Support & Optimization",
    description:
      "From launch to scale, we continuously improve performance, security and user experience.",
    icon: Settings,
  },
];

import Image from "next/image";

export default function MobileAppPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <CoreServiceHero
        slug="mobile-apps"
        className="-mt-12"
        iconScale={1.3}
        centerScale={1.4}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <ScrollReveal once={false}>
            <div className="flex justify-center mb-6"></div>
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Designing Mobile Experiences That Users Keep Coming Back To
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Mobile isn’t just a channel—it’s where your customers engage,
              transact and stay connected. We build user-centric mobile apps
              that combine clean UI/UX, strong performance and scalable
              architecture. Whether you’re launching a new product or upgrading
              an existing app, we help you reduce friction, increase engagement,
              and drive long-term user retention. From MVPs to enterprise-grade
              applications, every solution is built to perform in real-world
              conditions—not just in demos.
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
              for Mobile App Development
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
              Ready to Build a Mobile App That Performs in the Real World?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto mt-4">
              If your app doesn’t engage users, it won’t survive.
              <br />
              Let’s build something that stands out—and scales.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
