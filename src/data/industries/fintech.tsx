import React from "react";
import {
  CreditCard,
  TrendingUp,
  Smartphone,
  Search,
  PenTool,
  Code,
  CheckCircle,
  Rocket,
  ShieldCheck,
  BarChart3,
  Cpu,
} from "lucide-react";

export const fintechTargets = [
  "Fintech startups and financial platforms",
  "Payment solution providers",
  "Digital banking and lending platforms",
  "Trading and investment platforms",
  "Businesses handling financial transactions or sensitive financial data",
];

export const fintechBenefits = [
  {
    title: "Secure & Reliable Transactions",
    description:
      "Ensure every transaction is processed accurately and safely.",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Regulatory Compliance Readiness",
    description:
      "Build systems aligned with financial regulations and data protection standards.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "High Performance Under Load",
    description:
      "Handle large transaction volumes without delays or failures.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Improved User Trust & Experience",
    description:
      "Deliver fast, seamless and reliable financial interactions.",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80",
  },
];

export const fintechSolutions = [
  {
    title: "Payment Processing Systems",
    description:
      "Build secure payment gateways and transaction systems with high reliability and fast processing.",
    icon: CreditCard,
  },
  {
    title: "Digital Banking Platforms",
    description:
      "Develop scalable platforms for account management, transfers and user financial interactions.",
    icon: Smartphone,
  },
  {
    title: "Trading & Real-Time Financial Systems",
    description:
      "Handle high-frequency transactions and real-time data processing with performance-focused architecture.",
    icon: TrendingUp,
  },
  {
    title: "Compliance & Security Systems",
    description:
      "Implement secure systems aligned with financial regulations and data protection requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Financial Data Analytics & Reporting",
    description:
      "Gain insights into transactions, user behavior and financial performance for better decision-making.",
    icon: BarChart3,
  },
  {
    title: "API & Financial System Integrations",
    description:
      "Enable seamless integration with third-party financial services, banking APIs and payment providers.",
    icon: Cpu,
  },
];

export const fintechWhyPoints = [
  {
    title: "Security-First Development",
    description:
      "We design systems with strong security practices to protect sensitive financial data.",
  },
  {
    title: "Built for Transaction Reliability",
    description:
      "Our systems ensure consistent performance and accuracy under high load.",
  },
  {
    title: "Scalable Financial Architecture",
    description:
      "We build platforms that grow with increasing users, transactions and complexity.",
  },
  {
    title: "End-to-End Fintech Expertise",
    description:
      "From design to deployment and optimization, we support your entire platform lifecycle.",
  },
];

export const fintechSteps = [
  {
    title: "Requirements",
    icon: <Search className="w-7 h-7 text-gradient-hero" />,
    sub: "Transaction flows & compliance",
  },
  {
    title: "Design Architecture",
    icon: <PenTool className="w-7 h-7 text-gradient-hero" />,
    sub: "Secure & high-performance",
  },
  {
    title: "Develop & Integrate",
    icon: <Code className="w-7 h-7 text-gradient-hero" />,
    sub: "Build & connect systems",
  },
  {
    title: "Security Testing",
    icon: <CheckCircle className="w-7 h-7 text-gradient-hero" />,
    sub: "Integrity & load handling",
  },
  {
    title: "Deploy & Optimize",
    icon: <Rocket className="w-7 h-7 text-gradient-hero" />,
    sub: "Monitor & scale based on usage",
  },
];

export const fintechActive = {
  title: "FinTech",
  description:
    "Secure, scalable financial technology solutions for payments, digital banking, compliance and financial analytics.",
  image:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80",
};
