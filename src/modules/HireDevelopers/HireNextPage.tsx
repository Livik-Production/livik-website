"use client";
import React from "react";
/*
import Next_img from "../../assets/Next-png.png";
*/
const Next_img = "";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle,
  Factory,
  FileText,
  GraduationCap,
  Handshake,
  HeartPulse,
  Home,
  Landmark,
  Layers,
  MessageCircleQuestion,
  Plane,
  Rocket,
  ShoppingBag,
  Truck,
  Users,
  Utensils,
  Video,
  Workflow,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

/* ------------------ CARD DATA ------------------ */
import {
  Plug,
  Zap,
  ShoppingCart,
  TrendingUp,
  UserCheck,
  Server,
  Activity,
  Target,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Tailored Front-End Solutions",
    description:
      "Build intuitive and responsive user interfaces that provide seamless user experiences across all devices, ensuring your brand stands out online.",
    icon: <Layers size={36} />,
  },
  {
    title: "API Development & Integration",
    description:
      "Connect your apps with third-party services and internal systems effortlessly, enabling smooth data flow and enhanced functionality.",
    icon: <Plug size={36} />,
  },
  {
    title: "High-Performance Optimization",
    description:
      "Ensure your applications load quickly, run efficiently and provide users with a smooth, lag-free experience.",
    icon: <Zap size={36} />,
  },
  {
    title: "E-Commerce Development",
    description:
      "Create scalable and secure online stores or marketplaces with features tailored to boost sales and customer engagement.",
    icon: <ShoppingCart size={36} />,
  },
  {
    title: "SEO-Friendly Development",
    description:
      "Improve your search engine rankings and online visibility through code and design optimized for search engines.",
    icon: <TrendingUp size={36} />,
  },
  {
    title: "UX-Centered Design",
    description:
      "Deliver engaging and user-friendly interfaces that enhance user satisfaction, retention and overall experience.",
    icon: <UserCheck size={36} />,
  },
  {
    title: "SSR & SSG",
    description:
      "Boost website performance, improve SEO and provide faster page loads with server-side rendering and static site generation techniques.",
    icon: <Server size={36} />,
  },
  {
    title: "Continuous Deployment & Monitoring",
    description:
      "Maintain smooth updates, monitor application performance and quickly resolve issues to ensure business continuity.",
    icon: <Activity size={36} />,
  },
];

const features = [
  {
    title: "Quick Onboarding (48 Hours)",
    desc: "Get skilled Next.js developers integrated into your team within two days for a smooth and agile development process.",
  },
  {
    title: "Scalable Development Approach",
    desc: "Our flexible methodology adapts easily to evolving project requirements, ensuring long-term performance and growth.",
  },
  {
    title: "Strict NDA & Data Security",
    desc: "Your project remains fully protected with strong non-disclosure agreements and secure development practices.",
  },
  {
    title: "Time-Zone Aligned Collaboration",
    desc: "Work seamlessly with developers who match your time zone for clear communication and efficient delivery.",
  },
  {
    title: "Transparent Communication & Reporting",
    desc: "Regular updates and clear reporting keep you informed at every stage of the project.",
  },
  {
    title: "Faster Time to Market",
    desc: "Optimized workflows ensure quicker delivery without compromising quality.",
  },
];

const benefits = [
  {
    title: "Proven Delivery Record",
    desc: "A strong track record of successfully delivering high-quality Next.js projects across industries.",
    icon: CheckCircle,
  },
  {
    title: "Modern Tech Expertise",
    desc: "Deep expertise in modern frameworks, tools and advanced technology stacks for scalable applications.",
    icon: Layers,
  },
  {
    title: "End-to-End Development Support",
    desc: "Complete support from research and planning to deployment, optimization and long-term maintenance.",
    icon: Rocket,
  },
  {
    title: "Optimized Development Workflow",
    desc: "Streamlined processes that ensure faster development, smooth execution and efficient delivery.",
    icon: Workflow,
  },
];

const steps = [
  {
    step: "1",
    title: "Place a free request",
    desc: "Fill out a short form and check out our ready-to-interview developers",
    icon: "🧠",
  },
  {
    step: "2",
    title: "Tell us about your needs",
    desc: "On a quick 30-min call, share your expectations and get a budget estimate",
    icon: "💬",
  },
  {
    step: "3",
    title: "Interview the best",
    desc: "Get 2–3 expertly matched candidates within 24–48 hours and meet the worthiest",
    icon: "🧑‍💻",
  },
  {
    step: "4",
    title: "Onboard the chosen one",
    desc: "Your developer starts with a project—we handle contracts, payouts and more",
    icon: "🤝",
  },
];

const hire = [
  {
    step: "STEP 01",
    title: "Gather Requirements",
    icon: FileText,
    position: "left-[5%] top-[55%]",
  },
  {
    step: "STEP 02",
    title: "Shortlist Candidates & Forward CV",
    icon: Users,
    position: "left-[30%] top-[20%]",
  },
  {
    step: "STEP 03",
    title: "Conduct Technical Interview Sessions",
    icon: Video,
    position: "left-[55%] top-[55%]",
  },
  {
    step: "STEP 04",
    title: "Onboard to the Bench",
    icon: CheckCircle,
    position: "left-[80%] top-[20%]",
  },
];

const flow = [
  {
    title: "Share Your Requirements",
    desc: "Submit your project details, technical needs and preferred engagement model.",
    icon: MessageCircleQuestion,
    ring: "ring-emerald-400/30",
    iconColor: "text-white",
  },
  {
    title: "Developer Shortlisting",
    desc: "We analyze your requirements and handpick the most suitable ReactJS developers from our in-house team.",
    icon: Users,
    ring: "ring-blue-400/30",
    iconColor: "text-white",
  },
  {
    title: "Interview & Selection",
    desc: "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
    icon: CalendarCheck,
    ring: "ring-sky-400/30",
    iconColor: "text-white",
  },
  {
    title: "Onboarding & Project Kickoff",
    desc: "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
    icon: Handshake,
    ring: "ring-yellow-400/30",
    iconColor: "text-white",
  },
];

const domains = [
  {
    title: "Supply Chain",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M20 7l-8-4-8 4v10l8 4 8-4V7zM12 3v18M4 7l8 4 8-4" />
    </svg>`,
  },
  {
    title: "Education",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />
    </svg>`,
  },
  {
    title: "Retail",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M3 3h2l3 13h10l3-8H6M9 21a1 1 0 100-2 1 1 0 000 2zM18 21a1 1 0 100-2 1 1 0 000 2z" />
    </svg>`,
  },
  {
    title: "Finance",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M12 1v22M5 6h14M5 18h14M7 6l-2 6h4l-2-6M17 6l-2 6h4l-2-6" />
    </svg>`,
  },
  {
    title: "Healthcare",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>`,
  },
  {
    title: "Real Estate",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-10.5z" />
    </svg>`,
  },
  {
    title: "Tour & Travels",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M2 16l10-6 10 6M12 10V2M4 20h16" />
    </svg>`,
  },
  {
    title: "Hotel & Restaurant",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14M7 21v-4h10v4" />
    </svg>`,
  },
  {
    title: "Manufacturing",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M3 21V9l6 3V9l6 3V9l6 3v9H3z" />
    </svg>`,
  },
  {
    title: "Retail",
    image: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        d="M4 4h16v4H4zM6 8v12M18 8v12M4 20h16" />
    </svg>`,
  },
];

/* ------------------ HERO ------------------ */
function HeroBackground() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden gradient-hero">
      {/* Background Logo */}
      <div
        className="absolute left-1/2 -translate-x-1/2 h-80 w-full max-w-5xl bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${Next_img})` }}
      />

      {/* Text */}
      <div className="absolute z-10 px-6 text-center text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Hire NextJS Developers
        </h1>
        <p className="text-md lg:text-xl opacity-100 mb-8 max-w-6xl mx-auto">
          Build fast, SEO-ready apps with Next.js using SSR, SSG and API routes.
          Our experts craft secure, scalable and high-performance solutions with
          modern UI and clean architecture. Enjoy faster loads, better rankings,
          smooth integrations and flexible growth for startups and enterprises.
          We optimize code, enhance UX and ensure reliable deployments on cloud
          platforms. Launch smarter, ship faster and scale with confidence.
        </p>

        <a
          href="/contact"
          className="rounded-full bg-white px-6 py-2 text-lg font-semibold text-black"
        >
          Let’s Connect
        </a>
      </div>
    </div>
  );
}

/* ------------------ HIRING CARD ------------------ */
type HiringCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function HiringCard({ title, description, icon }: HiringCardProps) {
  return (
    <div className="group rounded-2xl border border-white/20 gradient-hero text-white shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:shadow-lg p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}

/* ------------------ HIRING SECTION ------------------ */
function HiringSection() {
  return (
    <section className="bg-[#004475] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center text-white">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
            Our NextJS Developers Are Flexible
          </h1>
          <div className="w-20 h-1 bg-white/30 mx-auto rounded mt-4"></div>
          <h2 className="text-lg md:text-2xl font-semibold mt-8 text-white/90">
            Technology Stack Expertise
          </h2>

          <p className="mt-6 text-sm md:text-base text-center text-white/70 max-w-3xl mx-auto">
            Choose from flexible hiring options designed to meet your business
            needs and scale your development team efficiently.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
          {cards.map((card, index) => (
            <HiringCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ WHY CHOOSE US ------------------ */
export function WhyChooseUs() {
  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[50%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Why Choose <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Empower your business with scalable, secure and high-performance
            Next.js solutions delivered by our expert development team.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl border border-gray-200 bg-white p-8
                transition-all duration-300
                hover:border-blue-500
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              "
            >
              <h3 className="text-xl font-semibold text-black mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Innovate NextJS With Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Delivering reliable, scalable and future-ready Next.js solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:bg-[#0A6AA1] hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-[#0A6AA1] transition group-hover:bg-white group-hover:text-[#0A6AA1]">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-blue-100">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HiringProcessFlow() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="relative mx-auto max-w-7xl">
        {/* SVG FLOW PATH */}
        <svg
          viewBox="0 0 1200 400"
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
          fill="none"
        >
          <path
            d="M50 300 C300 100, 500 100, 650 300 S900 500, 1150 200"
            stroke="url(#grad)"
            strokeWidth="40"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FDBA2D" />
              <stop offset="100%" stopColor="#FF7A00" />
            </linearGradient>
          </defs>
        </svg>

        {/* STEPS */}
        {hire.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`absolute ${item.position} flex flex-col items-center`}
            >
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-xl ring-8 ring-orange-400">
                <Icon className="h-10 w-10 text-gray-700" />
              </div>

              <span className="mt-4 text-sm font-semibold uppercase text-gray-500">
                {item.step}
              </span>

              <h3 className="mt-2 max-w-[220px] text-center text-lg font-bold text-gray-900">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function DomainsSection() {
  return (
    <section className="bg-white py-25 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Domains We Expertise In
        </h1>
        <h2 className="text-md lg:text-lg leading-relaxed mt-4 ">
          Connecting Core Domains to Drive Smarter Solutions.
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-8">
          We bring domain-focused expertise to build NextJS solutions that solve
          real business challenges across multiple industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-gradient" />

              {/* Card */}
              <div
                className="relative z-10 rounded-2xl bg-white p-8 h-full transition-all duration-500
                group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:via-cyan-500 group-hover:to-indigo-700 group-hover:text-white
                border border-gray-200"
              >
                {/* SVG Icon */}
                <div className="text-4xl mb-5 transition-all duration-500 group-hover:scale-125">
                  <div
                    className="w-14 h-14 mx-auto"
                    dangerouslySetInnerHTML={{ __html: domain.image }}
                  />
                </div>

                <h3 className="text-lg font-semibold tracking-wide">
                  {domain.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 4s ease infinite;
        }
      `}</style>
    </section>
  );
}

const industries = [
  { name: "Supply Chain", icon: Truck },
  { name: "Education", icon: GraduationCap },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Finance", icon: Landmark },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Home },
  { name: "Tour & Travels", icon: Plane },
  { name: "Hotel & Restaurant", icon: Utensils },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: ShoppingBag },
];

export function CrestIndustries() {
  return (
    <section className="relative min-h-screen gradient-hero text-white py-16 px-8 overflow-hidden">
      {/* subtle royal texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(99,102,241,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(139,92,246,0.15),_transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight"
        >
          Domains We Expertise In
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/65 max-w-2xl mx-auto mb-24 mt-8"
        >
          Connecting Core Domains to Drive Smarter Solutions. We bring
          domain-focused expertise to build NextJS solutions that solve real
          business challenges across multiple industries.
        </motion.p>

        {/* CREST GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-14 gap-y-20">
          {industries.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col items-center"
            >
              {/* crest ring */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-white/80 blur-lg opacity- group-hover:opacity-60 transition" />
                <div className="relative w-28 h-28 rounded-full border border-white/80 bg-white flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
              </div>

              {/* title */}
              <p className="mt-6 text-sm  tracking-widest text-white/80 text-center">
                {item.name}
              </p>

              {/* underline */}
              <span className="mt-2 w-8 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stepsfinal = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your project goals, technical expectations, timelines and preferred engagement model so we can align the right development expertise to your business needs.",
    icon: Target,
    color: "cyan",
  },
  {
    step: "02",
    title: "Developer Shortlisting",
    description:
      "Based on your requirements, we carefully shortlist experienced developers from our talent pool who best match your technical stack, domain expertise and project scope.",
    icon: Users,
    color: "pink",
  },
  {
    step: "03",
    title: "Interview & Selection",
    description:
      "You interview the shortlisted developers to assess technical proficiency, problem-solving skills, communication and overall compatibility with your project objectives.",
    icon: FileCheck,
    color: "",
  },
  {
    step: "04",
    title: "Project Kick-off",
    description:
      "Once finalized, the team is onboarded quickly and the project kicks off with clearly defined milestones, timelines and continuous collaboration for smooth execution.",
    icon: Rocket,
    color: "purple",
  },
];
export function HireProcessfinal() {
  return (
    <section className="py-18 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Hire Next.js Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with expert Next.js developers to build fast,
          scalable and SEO-optimized web applications.
        </p>
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsfinal.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                  hover:border-${item.color}-500`}
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-200 group-hover:text-black/60">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center  justify-center rounded-3xl gradient-hero text-white group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
/* ------------------ EXPORT PAGE ------------------ */
export default function NextDeveloper() {
  return (
    <>
      <HeroBackground />
      <WhyChooseUs />
      <HiringSection />
      <BenefitsSection />
      <CrestIndustries />
      {/* <DomainsSection /> */}
      {/* <HireNextSteps/> */}
      {/* <HiringProcessFlow /> */}

      <HireProcessfinal />
    </>
  );
}
