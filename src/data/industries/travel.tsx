import React from "react";
import {
  Plane,
  Calendar,
  Globe,
  Cpu,
  Layout,
  BarChart3,
  Search,
  PenTool,
  Code,
  CheckCircle,
  Rocket,
} from "lucide-react";

export const travelServices = [
  {
    icon: <Plane className="h-7 w-7" />,
    title: "Booking Engine Development",
    description:
      "Build fast, reliable booking systems for flights, hotels, tours and travel packages.",
  },
  {
    icon: <Calendar className="h-7 w-7" />,
    title: "Real-Time Availability & Pricing Systems",
    description:
      "Ensure accurate inventory, dynamic pricing and real-time updates across platforms.",
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: "Travel Portal & OTA Development",
    description:
      "Develop scalable platforms for managing listings, bookings and user interactions.",
  },
  {
    icon: <Cpu className="h-7 w-7" />,
    title: "API Integration & Aggregation",
    description:
      "Integrate third-party APIs for flights, hotels, payments and travel services.",
  },
  {
    icon: <Layout className="h-7 w-7" />,
    title: "Customer Experience Optimization",
    description:
      "Improve search, navigation and booking flows to increase conversions.",
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Analytics & Booking Insights",
    description:
      "Track user behavior, bookings and performance to optimize decision-making.",
  },
];

export const travelBenefits = [
  {
    title: "Higher Booking Conversion Rates",
    description: "Turn more searches into confirmed bookings.",
    image:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Faster & Smoother User Experience",
    description: "Reduce friction across search and booking journeys.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Better Inventory & Pricing Control",
    description:
      "Manage availability and pricing efficiently across channels.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Improved Operational Efficiency",
    description: "Automate workflows and reduce manual effort.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export const travelPoints = [
  {
    title: "Conversion-Focused Platforms",
    description: "We build systems that directly impact bookings and revenue.",
  },
  {
    title: "Real-Time System Expertise",
    description: "We ensure accurate availability, pricing and booking flows.",
  },
  {
    title: "Scalable Travel Architecture",
    description:
      "Your platform is built to handle high traffic and seasonal spikes.",
  },
  {
    title: "End-to-End Integration",
    description:
      "We connect APIs, booking engines and backend systems seamlessly.",
  },
];

export const travelSteps = [
  {
    title: "Assess Flow",
    icon: <Search className="w-7 h-7 text-gradient-hero" />,
    sub: "Identify friction & drop-offs",
  },
  {
    title: "Design Experience",
    icon: <PenTool className="w-7 h-7 text-gradient-hero" />,
    sub: "Seamless user journeys",
  },
  {
    title: "Develop Platforms",
    icon: <Code className="w-7 h-7 text-gradient-hero" />,
    sub: "Build & connect systems",
  },
  {
    title: "Optimize Conversions",
    icon: <CheckCircle className="w-7 h-7 text-gradient-hero" />,
    sub: "Performance & UX refinement",
  },
  {
    title: "Scale & Improve",
    icon: <Rocket className="w-7 h-7 text-gradient-hero" />,
    sub: "Enhance based on behavior",
  },
];

export const travelTargets = [
  "Travel agencies and tour operators",
  "Online travel agencies (OTAs)",
  "Hospitality and hotel businesses",
  "Travel startups and booking platforms",
  "Businesses managing travel inventory and bookings",
];

export const travelActive = {
  title: "Travel & Hospitality",
  description:
    "High-performance travel and hospitality systems that increase bookings, streamline operations and enhance user experience.",
  image:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
};
