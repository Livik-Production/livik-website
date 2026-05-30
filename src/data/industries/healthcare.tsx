import React from "react";
import {
  Database,
  Search,
  Code,
  PenTool,
  CheckCircle,
  Rocket,
  HeartPulse,
  Lock,
  Stethoscope,
  Brain,
  Zap,
} from "lucide-react";

export const healthcareBenefits = [
  {
    title: "Electronic Health Record (EHR) Systems",
    description:
      "Develop secure and scalable EHR platforms for managing patient data, history and clinical workflows.",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "Healthcare Interoperability Solutions",
    description:
      "Enable seamless data exchange across systems using standards and secure integrations.",
    icon: <HeartPulse className="w-8 h-8" />,
  },
  {
    title: "Telemedicine & Remote Care Platforms",
    description:
      "Build virtual care solutions that allow patients and providers to connect efficiently and securely.",
    icon: <Stethoscope className="w-8 h-8" />,
  },
  {
    title: "Healthcare Data Security & Compliance Systems",
    description:
      "Implement secure architectures and workflows aligned with healthcare compliance standards.",
    icon: <Lock className="w-8 h-8" />,
  },
  {
    title: "AI & Data-Driven Healthcare Insights",
    description:
      "Leverage healthcare data to improve diagnostics, decision-making and operational efficiency.",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    title: "Healthcare Workflow Automation",
    description:
      "Reduce administrative burden and improve efficiency with automated processes and system integration.",
    icon: <Zap className="w-8 h-8" />,
  },
];

export const healthcareGains = [
  {
    title: "Improved Patient Care & Experience",
    description: "Deliver faster, more accurate and more coordinated care.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Secure & Compliant Systems",
    description:
      "Protect sensitive healthcare data and meet regulatory requirements.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Operational Efficiency",
    description:
      "Reduce manual work and streamline clinical and administrative processes.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Better Data Accuracy & Accessibility",
    description:
      "Ensure reliable, real-time access to patient and operational data.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
];

export const healthcarePoints = [
  {
    title: "Compliance-First Approach",
    description:
      "We design systems with data security, privacy and regulatory requirements at the core.",
  },
  {
    title: "Built for Reliability",
    description:
      "Healthcare systems require stability—we ensure high availability and consistent performance.",
  },
  {
    title: "Secure Data Architecture",
    description:
      "We implement strong security practices to protect patient data and system integrity.",
  },
  {
    title: "Healthcare-Focused Development",
    description:
      "We understand the complexity of healthcare workflows and build solutions accordingly.",
  },
];

export const healthcareSteps = [
  {
    title: "Assess Requirements",
    icon: <Search className="w-7 h-7 text-gradient-hero" />,
    sub: "Compliance & system needs",
  },
  {
    title: "Design Architecture",
    icon: <PenTool className="w-7 h-7 text-gradient-hero" />,
    sub: "Secure & scalable systems",
  },
  {
    title: "Develop & Integrate",
    icon: <Code className="w-7 h-7 text-gradient-hero" />,
    sub: "Build & connect platforms",
  },
  {
    title: "Validate Compliance",
    icon: <CheckCircle className="w-7 h-7 text-gradient-hero" />,
    sub: "Testing & security validation",
  },
  {
    title: "Deploy & Scale",
    icon: <Rocket className="w-7 h-7 text-gradient-hero" />,
    sub: "Monitor & improve continuously",
  },
];

export const healthcareTargets = [
  "Hospitals and healthcare providers",
  "Healthtech startups and digital health platforms",
  "Clinics and diagnostic centers",
  "Telemedicine and remote care providers",
  "Organizations handling sensitive healthcare data",
];

export const healthcareActive = {
  title: "Healthcare",
  description:
    "Advanced healthcare software for hospitals, telemedicine platforms, patient data security and digital health innovation.",
  image:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
};
