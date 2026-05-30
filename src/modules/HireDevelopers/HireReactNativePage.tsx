"use client";
import { ArrowRight, Link, ShoppingBag } from "lucide-react";
/*
import REACT_Image from "../../assets/React-png.png";
*/
const REACT_Image = "";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button"; // ✅

export function ReactDeveloper() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding gradient-hero text-white py-20">
        <div className="relative container-custom text-center">
          <ScrollReveal>
            <div
              className="absolute inset-0 mx-auto h-80 w-full max-w-3xl bg-cover bg-center opacity-20 rounded-2xl pointer-events-none"
              style={{ backgroundImage: `url(${REACT_Image})` }}
            />

            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
              Hire React Native Developers
            </h1>
            <p className="text-md lg:text-xl opacity-90 mb-8 max-w-6xl mx-auto relative z-10">
              Hire skilled React Native developers from Livik to build fast,
              scalable and user-friendly web and mobile applications. We
              specialize in creating dynamic user interfaces, high-performance
              single-page applications and seamless React Native solutions
              tailored to your business needs. Whether you're a startup or an
              enterprise, our React experts use modern development practices and
              proven architectures to deliver secure, reliable and future-ready
              digital products that enhance user experience, support growth and
              drive measurable results.
            </p>
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-2 text-lg font-semibold text-black relative z-10"
            >
              Let’s Connect
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

import {
  Smartphone,
  Apple,
  Plug,
  Settings,
  HeartHandshake,
  LayoutGrid,
  Code2,
} from "lucide-react";
import { SiAndroid } from "react-icons/si";

const expertise = [
  {
    title: "Cross-platform app development ",
    icon: Smartphone,
  },
  {
    title: "iOS app development",
    icon: Apple,
  },
  {
    title: "Android app development ",
    icon: SiAndroid, // ✅ fixed
  },
  {
    title: "Integration services",
    icon: Plug,
  },
  {
    title: "Support and maintenance ",
    icon: Settings,
  },
  {
    title: "Consultation services ",
    icon: HeartHandshake,
  },
  {
    title: "Development of native modules",
    icon: LayoutGrid,
  },
  {
    title: "API integration ",
    icon: Code2,
  },
];
export function OurExpertise() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Domains <span className="text-black">We Expertise In</span>
        </h2>
        <h4 className="text-md lg:text-lg leading-relaxed mt-4 text-center">
          Connecting Core Domains to Drive Smarter Solutions.
        </h4>

        <p className="text-md lg:text-lg leading-relaxed mb-16 text-center mt-8 ">
          We bring domain-focused expertise to build React Native solutions that
          solve real business challenges across multiple industries.
        </p>
        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white p-8 shadow-lg border hover:shadow-xl transition text-center"
              >
                {/* Icon */}
                <div className="mb-6 mx-auto flex h-12 w-12 items-center justify-center rounded-3xl gradient-hero text-white group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-md font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function RNStackCreative() {
  return (
    <section className="relative py-24 px-4 gradient-hero text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-center">
          Our <span className="font-bold">React Native </span> Developers Are
          Flexible
        </h2>
        <h2 className="text-lg md:text-2xl font-semibold mt-6 text-center">
          Technology Stack Expertise
        </h2>

        <p className="mt-4 text-sm md:text-base text-center">
          Our React Native developers adapt seamlessly to your project
          requirements, working across a wide range of modern libraries,
          frameworks and tools to build reliable and scalable applications.
        </p>

        {/* Cards Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Platforms */}
          <StackCard title="Platforms">
            iOS <span className=" font-semibold">|</span> Android
          </StackCard>

          {/* APIs */}
          <StackCard title="APIs text-center">
            Facebook API | Instagram API | YouTube API |Spotify API |Google API
            | GitHub API | Google Map API | Payment Method Integration |Twilio
            API
          </StackCard>

          {/* Version Control */}
          <StackCard title="Version Control">
            GitHub | Bitbucket | GitLab | JIRA
          </StackCard>

          {/* Meeting */}
          <StackCard title="Meeting">
            Google Meet | Zoom | GoToMeeting
          </StackCard>

          {/* Communication */}
          <StackCard title="Communication Tool">
            Slack | Microsoft Team | Hangout | Skype
          </StackCard>

          {/* Database */}
          <StackCard title="Database">
            SQLite | Realm DB | ORMLite | Berkeley DB | Couchbase Lite
          </StackCard>

          {/* Project Management */}
          <StackCard title="Project Management Tools">
            JIRA | Trello | BaseCamp
          </StackCard>

          {/* Deployment */}
          <StackCard title="Deployment Process">CI/CD</StackCard>

          {/* Upgrade */}
          <StackCard title="Upgrade Services">V1 | V2 | V3 | V4</StackCard>
        </div>
      </div>
    </section>
  );
}

/* Creative Card */
function StackCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group rounded-2xl bg-white p-8 hover:shadow-lg hover:shadow-purple-200 transition">
      {/* Accent bar */}
      <span className="absolute left-0 top-6 h-12 w-1 gradient-hero rounded-full" />

      <h3 className="ml-4 text-lg font-bold text-black">{title}</h3>

      <p className="mt-4 ml-4 text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

export function RNStackPillars() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-light text-center">
          Experience{" "}
          <span className="font-bold text-green-700">with React Native</span>{" "}
          Development Stack
        </h2>

        <p className="mt-6 text-center text-gray-600 max-w-3xl mx-auto">
          We use best-in-class tools, state-of-the-art technologies and modern
          approaches to scale up your business
        </p>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Pillar title="Platforms">iOS | Android</Pillar>

          <Pillar title="APIs" wide>
            Facebook API | Instagram API | YouTube API | Spotify API | Google
            API | GitHub API | Google Map API | Payment Method integration |
            Twilio API
          </Pillar>

          <Pillar title="Version Control">
            GitHub | Bitbucket | GitLab | JIRA
          </Pillar>

          <Pillar title="Meeting">Google Meet | Zoom | GoToMeeting</Pillar>

          <Pillar title="Communication Tool">
            Slack | Microsoft Team | Hangout | Skype
          </Pillar>

          <Pillar title="Database">
            SQLite | Realm DB | ORMLite | Berkeley DB | Couchbase Lite
          </Pillar>

          <Pillar title="Project Management Tools">
            JIRA | Trello | BaseCamp
          </Pillar>

          <Pillar title="Deployment Process">CI/CD</Pillar>

          <Pillar title="Upgrade Services">V1 | V2 | V3 | V4</Pillar>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border border-gray-200 bg-gray-50 p-8 hover:bg-white hover:shadow-lg transition ${wide ? "md:col-span-2 lg:col-span-1" : ""
        }`}
    >
      {/* Vertical marker */}
      <div className="absolute -left-1 top-6 h-10 w-2 bg-green-700 rounded-full" />

      <h3 className="text-lg font-semibold text-gray-900 mb-4 pl-4">{title}</h3>

      <p className="text-gray-700 leading-relaxed pl-4">{children}</p>
    </div>
  );
}

export function RNStackAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-center">
          Experience{" "}
          <span className="font-bold text-green-700">with React Native</span>{" "}
          Development Stack
        </h2>

        <h3 className="text-lg md:text-2xl font-semibold mt-6">
          Technology Stack Expertise
        </h3>

        <p className="mt-4 text-sm md:text-base text-center">
          Our React Native developers adapt seamlessly to your project
          requirements, working across a wide range of modern libraries,
          frameworks and tools to build reliable and scalable applications.
        </p>
        {/* Accordion */}
        <div className="mt-16 space-y-4">
          {stackData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-white overflow-hidden"
              >
                {/* Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-green-50 transition"
                >
                  <span>{item.title}</span>

                  <span
                    className={`transform transition ${isOpen ? "rotate-180 text-green-700" : "text-gray-400"
                      }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-300 ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden px-6 pb-6 text-gray-700 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

const stackData = [
  {
    title: "Frontend",
    content: "React | Next.js | Vue | HTML | CSS | JavaScript | Tailwind",
  },
  {
    title: "CMS – eCommerce",
    content: "WordPress | Shopify | Magento | WooCommerce | Strapi",
  },
  {
    title: "Backend",
    content: "Node.js | Laravel | Django | Express | Spring Boot",
  },
  {
    title: "Mobile App",
    content: "React Native | Flutter | Swift | Kotlin",
  },
  {
    title: "Database",
    content: "MySQL | PostgreSQL | MongoDB | Firebase | Redis",
  },
  {
    title: "ERP",
    content: "SAP | Odoo | Oracle ERP",
  },
];

export function TechnologiesAccordionTabs() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Technologies <span className="text-orange-500">We Work with</span>
        </h2>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center border-b border-gray-200">
          {stackData.map((item, index) => {
            const isActive = openIndex === index;

            return (
              <button
                key={item.title}
                onClick={() => setOpenIndex(index)}
                className={`px-6 py-4 text-lg font-medium transition border-b-2 -mb-px
                  ${isActive
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-700 hover:text-orange-500"
                  }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Expandable Content */}
        <div className="mt-10">
          <div className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
            <div
              key={openIndex}
              className="px-8 py-6 text-gray-700 leading-relaxed animate-[fadeIn_0.3s_ease]"
            >
              {stackData[openIndex].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Layers, Zap, Cpu, Briefcase, Code, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Cross-Platform Solutions",
      description:
        "Develop apps for iOS and Android from a single codebase with a seamless, native-like experience.",
      icon: Layers,
    },
    {
      title: "High-Performance Development",
      description:
        "Optimized APIs, smooth animations and fast load times ensure top-tier app performance.",
      icon: Zap,
    },
    {
      title: "Modern Architecture & Tools",
      description:
        "Leverage Redux, TypeScript, React Navigation, Expo and more for clean, scalable and maintainable code.",
      icon: Cpu,
    },
    {
      title: "Industry-Specific Expertise",
      description:
        "Our developers have experience across fintech, e-commerce, healthcare, travel and logistics.",
      icon: Briefcase,
    },
    {
      title: "Full-Stack Capabilities",
      description:
        "End-to-end development with Node.js, Firebase, GraphQL and backend integration.",
      icon: Code,
    },
    {
      title: "Agile Collaboration",
      description:
        "Seamless integration with your team, clear communication and agile practices.",
      icon: Users,
    },
  ];

  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[50%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Why Choose  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg">
            Transforming ideas into powerful React Native app solutions with
            clean code, seamless UX and long-term scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                border
                border-gray-200
                p-8
                transition-all
                duration-300
                hover:border-sky-700
                hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)]
              "
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full gradient-hero text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Target, Users, FileCheck, CreditCard, Rocket } from "lucide-react";

const steps = [
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

export function HireProcess() {
  return (
   <section className="py-18 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Hire React Native Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with top React Native developers for modern,
          high-impact mobile experiences.
        </p>
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => {
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

import {
  Truck,
  GraduationCap,
  ShoppingCart,
  Landmark,
  HeartPulse,
  Home,
  Plane,
  Utensils,
  Factory,
  Store,
} from "lucide-react";

const domains = [
  { name: "Supply Chain", icon: Truck },
  { name: "Education", icon: GraduationCap },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Finance", icon: Landmark },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Home },
  { name: "Tour & Travels", icon: Plane },
  { name: "Hotel & Restaurant", icon: Utensils },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: Store },
];

export function DomainMetro() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Domains We Expertise In
        </h2>
        <p className="text-center text-black mb-16 mt-4">
          A connected ecosystem of industry expertise powering smarter
          solutions.
        </p>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-700 rounded-full"></div>

          <div className="space-y-16">
            {domains.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                    }`}
                >
                  {/* Connector */}
                  <div
                    className={`absolute top-1/2 w-1/2 h-[2px] bg-gradient-to-r ${isLeft
                        ? "from-transparent to-sky-700 left-1/2"
                        : "from-sky-700 to-transparent right-1/2"
                      }`}
                  />

                  {/* Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

                  {/* Domain Card */}
                  <div
                    className={`w-64 p-5 rounded-xl bg-sky-700 border border-black hover:border-cyan-400 transition-all duration-300 shadow-lg ${isLeft ? "mr-auto pr-10" : "ml-auto pl-10"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-white text-lg">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  FaMobileAlt,
  FaCogs,
  FaClock,
  FaDollarSign,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { motion } from "framer-motion";

const features = [
  {
    icon: <SiReact className="text-sky-700 w-6 h-6" />,
    title: "High-Performance React Native Apps",
    description:
      "We build fast, scalable and cross-platform mobile applications using React Native for iOS and Android.",
  },
  {
    icon: <FaCogs className="text-sky-700 w-6 h-6" />,
    title: "Optimized App Architecture",
    description:
      "React Native ensures smooth performance with efficient component-based architecture and reusable code.",
  },
  {
    icon: <FaClock className="text-sky-700 w-6 h-6" />,
    title: "Faster Time to Market",
    description:
      "One codebase for multiple platforms significantly reduces development time and speeds up deployment.",
  },
  {
    icon: <FaDollarSign className="text-sky-700 w-6 h-6" />,
    title: "Cost Effective Development",
    description:
      "React Native lowers development costs by reducing the need for separate Android and iOS teams.",
  },
  {
    icon: <FaEye className="text-sky-700 w-6 h-6" />,
    title: "Clean & Maintainable Code",
    description:
      "Readable and modular code ensures easy maintenance, scalability and faster debugging.",
  },
  {
    icon: <FaShieldAlt className="text-sky-700 w-6 h-6" />,
    title: "Secure & Reliable Applications",
    description:
      "We follow best security practices to ensure safe data handling and stable mobile applications.",
  },
];

export function ReactNativeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Innovate React Native with Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Creating powerful, cost-effective and cross-platform mobile apps
            with React Native.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 p-8
                           transition-all duration-300
                           hover:bg-sky-700 hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl
                             bg-sky-50
                             transition-all duration-300
                             group-hover:bg-white"
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-gray-900 mb-4
                               transition-colors duration-300
                               group-hover:text-white"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 leading-relaxed
                              transition-colors duration-300
                              group-hover:text-sky-100"
                >
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

const industries001 = [
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
          domain-focused expertise to build React Native solutions that solve
          real business challenges across multiple industries.
        </motion.p>

        {/* CREST GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-14 gap-y-20">
          {industries001.map((item, idx) => (
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

export default function ReactNativeDeveloper() {
  return (
    <>
      <ReactDeveloper />
      <WhyChooseUs />
      <RNStackCreative />
      <ReactNativeSection />
      <CrestIndustries />
      {/*<DomainMetro />*/}

      <HireProcess />
    </>
  );
}
