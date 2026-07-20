import React from "react";
import {
  Truck,
  Warehouse,
  PackageSearch,
  Route,
  BarChart3,
  Search,
  PenTool,
  Code,
  CheckCircle,
  Rocket,
} from "lucide-react";

export const logisticsServices = [
  {
    icon: <Route className="h-7 w-7" />,
    title: "Supply Chain Planning Systems",
    desc: "Improve demand forecasting, resource planning and coordination across your supply chain.",
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: "Transportation Management Systems (TMS)",
    desc: "Optimize routing, reduce fuel costs and improve delivery efficiency with smarter transportation planning.",
  },
  {
    icon: <Warehouse className="h-7 w-7" />,
    title: "Warehouse Management & Automation",
    desc: "Streamline warehouse operations, inventory handling and order fulfillment processes.",
  },
  {
    icon: <PackageSearch className="h-7 w-7" />,
    title: "Real-Time Tracking & Visibility",
    desc: "Track shipments, vehicles and inventory in real time to improve transparency and reduce delays.",
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Performance Analytics & Reporting",
    desc: "Gain insights into operations, delivery performance and bottlenecks to improve decision-making.",
  },
  {
    icon: <CheckCircle className="h-7 w-7" />,
    title: "Process Automation & Integration",
    desc: "Automate repetitive tasks and integrate systems for smoother workflows and reduced manual errors.",
  },
];

export const logisticsBenefits = [
  {
    title: "Improved Operational Visibility",
    description: "Track every stage of your logistics operations in real time.",
    image:
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Faster & More Reliable Deliveries",
    description:
      "Reduce delays with optimized routing and better coordination.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lower Operational Costs",
    description:
      "Improve efficiency and reduce waste across transportation and warehousing.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Better Decision-Making",
    description:
      "Use real-time data and analytics to identify issues and improve performance.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
];

export const logisticsPoints = [
  {
    title: "Built for Operational Efficiency",
    description:
      "We design systems that directly improve workflows, reduce delays and increase productivity.",
  },
  {
    title: "Real-Time Data & Visibility Focus",
    description:
      "We help you track operations live and make faster, informed decisions.",
  },
  {
    title: "Scalable Logistics Architecture",
    description:
      "Your systems are built to handle growing operations, locations and complexity.",
  },
  {
    title: "End-to-End Implementation & Support",
    description:
      "From planning to deployment and optimization, we support your entire logistics lifecycle.",
  },
];

export const logisticsSteps = [
  {
    title: "Assess Operations",
    icon: <Search className="w-7 h-7 text-gradient-hero" />,
    sub: "Identify inefficiencies & delays",
  },
  {
    title: "Design Architecture",
    icon: <PenTool className="w-7 h-7 text-gradient-hero" />,
    sub: "Plan workflows & tracking",
  },
  {
    title: "Develop Platforms",
    icon: <Code className="w-7 h-7 text-gradient-hero" />,
    sub: "Build & connect systems",
  },
  {
    title: "Enable Visibility",
    icon: <CheckCircle className="w-7 h-7 text-gradient-hero" />,
    sub: "Real-time tracking & automation",
  },
  {
    title: "Optimize & Scale",
    icon: <Rocket className="w-7 h-7 text-gradient-hero" />,
    sub: "Refine based on data",
  },
];

export const logisticsTargets = [
  "Logistics and transportation companies",
  "Supply chain and distribution businesses",
  "Warehouse and inventory-heavy operations",
  "Businesses managing fleets or delivery networks",
  "Companies facing delays, inefficiencies, or lack of visibility",
];

export const logisticsActive = {
  title: "Logistics",
  description:
    "Smart logistics and supply chain systems for real-time tracking, route optimization and operational efficiency.",
  image:
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80",
};
