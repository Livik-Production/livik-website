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
  ShoppingCart,
  CheckCircle2,
  LayoutTemplate,
  ShieldCheck,
  Globe,
  Zap,
} from "lucide-react";
import "./WhyChoose.css";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CoreServiceHero from "@/components/CoreServiceHero";

const capabilities = [
  {
    title: "Custom E-Commerce Development",
    description:
      "Fast, scalable and fully customized storefronts built with modern frameworks (React, Next.js, headless architecture).",
  },
  {
    title: "Headless Commerce Solutions",
    description:
      "Decouple your frontend and backend for ultimate flexibility, speed and omnichannel scalability.",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Secure, seamless integrations with global and Indian payment gateways for smooth transactions and higher conversions.",
  },
  {
    title: "Product & Inventory Management Systems",
    description:
      "Automate product updates, stock tracking and order workflows to reduce errors and improve efficiency.",
  },
  {
    title: "Omnichannel Commerce Experiences",
    description:
      "Deliver consistent shopping across web, mobile, marketplaces and social commerce platforms.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improve load speed, Core Web Vitals and conversion rates with advanced optimization techniques.",
  },
];

const benefits = [
  {
    title: "Conversion-Driven UX/UI Design",
    description:
      "Every element is built to guide users toward purchase—not just look good.",
    icon: LayoutTemplate,
  },
  {
    title: "Scalable & Secure Architecture",
    description:
      "We build systems that handle traffic spikes, scale effortlessly and stay secure.",
    icon: ShieldCheck,
  },
  {
    title: "API-First & Integration Ready",
    description:
      "Seamlessly connect CRMs, ERPs, logistics and third-party tools without friction.",
    icon: Globe,
  },
  {
    title: "Agile & Fast Delivery",
    description: "Launch faster. Iterate faster. Scale faster.",
    icon: Zap,
  },
];

const faqs = [
  {
    question: "How long does it take to build a custom e-commerce store?",
    answer:
      "Timelines vary based on complexity. A standard storefront typically takes 8-12 weeks, while enterprise-grade solutions with custom integrations may take 16-24 weeks. We follow an agile approach to deliver incremental value throughout the project.",
  },
  {
    question: "Which e-commerce platforms do you work with?",
    answer:
      "We specialize in Shopify, Shopify Plus, WooCommerce, Magento and headless commerce solutions using frameworks like Next.js with Shopify Hydrogen or Medusa. We recommend the best platform based on your specific business needs and growth plans.",
  },
  {
    question: "Can you migrate my existing store to a new platform?",
    answer:
      "Absolutely. We handle full migrations including product data, customer accounts, order history and SEO preservation. Our migration process ensures zero downtime and minimal disruption to your business operations.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer comprehensive post-launch support packages including maintenance, performance monitoring, security updates and feature enhancements. Our team is available for both scheduled maintenance and urgent issues.",
  },
  {
    question: "How do you ensure my e-commerce site is secure?",
    answer:
      "Security is built into every layer. We implement SSL certificates, PCI-DSS compliance for payments, secure authentication, regular security audits and follow OWASP best practices. We also set up automated monitoring for potential threats.",
  },
  {
    question: "Can you integrate my store with existing business systems?",
    answer:
      "Yes, we specialize in API integrations with ERPs (SAP, Oracle, NetSuite), CRMs (Salesforce, HubSpot), inventory management systems, shipping providers and marketing automation tools to create a unified commerce ecosystem.",
  },
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <CoreServiceHero
        slug="ecommerce"
        className="-mt-12"
        iconScale={1.3}
        centerScale={1.4}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              E-Commerce Development That Actually Converts
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Your eCommerce website isn’t just a store—it’s your primary
              revenue engine. We build conversion-focused digital commerce
              platforms that combine UX strategy, modern tech stacks and
              performance engineering to maximize sales and customer lifetime
              value. From D2C brands to enterprise marketplaces, we create
              frictionless shopping experiences that turn visitors into repeat
              buyers.
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
              for E-Commerce Development
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
              Ready to Build an E-Commerce Store That Prints Revenue?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto mt-5">
              If your current store isn’t converting, you’re leaving money on
              the table.
              <br />
              Let’s fix that.
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
