"use client";
/*
import Python_img from "../../assets/Python logo.png"
*/
const Python_img = "";
import {
  SiDjango,
  SiFlask,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiApachetomcat,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { GiCherry, GiGearStickPattern } from "react-icons/gi";
import { TbTriangle } from "react-icons/tb";
import {
  FaMobileAlt,
  FaShoppingCart,
  FaCloud,
  FaCogs,
  FaPlug,
  FaTachometerAlt,
} from "react-icons/fa";
import {
  ClipboardList,
  UserCheck,
  MessagesSquare,
  Handshake,
} from "lucide-react";
import {
  Crown,
  TrendingUp,
  Rocket,
  ShieldCheck,
  Zap,
  Users,
  Target,
  FileCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import {
  Truck,
  GraduationCap,
  ShoppingBag,
  Landmark,
  HeartPulse,
  Home,
  Plane,
  Utensils,
  Factory,
  ShoppingCart,
} from "lucide-react";

const items = [
  { title: "Supply Chain", icon: Truck },
  { title: "Education", icon: GraduationCap },
  { title: "E-Commerce", icon: ShoppingCart },
  { title: "Retail", icon: ShoppingBag },
  { title: "Finance", icon: Landmark },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Real Estate", icon: Home },
  { title: "Tour & Travels", icon: Plane },
  { title: "Hotel & Restaurant", icon: Utensils },
  { title: "Manufacturing", icon: Factory },
];

/* -------------------- Hero -------------------- */
const Herosection = () => {
  return (
    <section className="relative flex h-[500px] items-center justify-center gradient-hero text-white ">
      <div
        className="absolute h-80 w-60 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${Python_img})` }}
      />

      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Hire Python Developers
        </h1>
        <p className="text-md lg:text-xl opacity-90 mb-8 max-w-6xl mx-auto">
          Hire expert Python developers At Livik to build secure, scalable and
          future-ready applications. Choose flexible engagement models tailored
          to your project requirements. Enhance system functionality and
          performance through efficient, optimized development. Ensure smooth
          transitions with expert guidance and structured execution. Benefit
          from continuous support, monitoring and ongoing optimization for
          sustained success.
        </p>
        <a
          href="/contact"
          className="rounded-full bg-white px-6 py-2 text-lg font-semibold text-black"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export function PythonTechStack() {
  const stack = [
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "TurboGears", icon: GiGearStickPattern },
    { name: "CherryPy", icon: GiCherry },
    { name: "Pyramid", icon: TbTriangle },
    { name: "Pylons", icon: FaPython },
    { name: "Apache Tomcat", icon: SiApachetomcat },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Pandas", icon: SiPandas },
  ];

  return (
    <section className="relative py-20 gradient-hero text-white">
      {/* dotted background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] [background-size:22px_22px]"></div>
      <ScrollReveal>
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Our Python Developers Are Flexible
          </h2>
          <h2 className="text-lg md:text-2xl font-semibold mt-6 text-center">
            Technology Stack Expertise
          </h2>

          <p className="text-gray-300 max-w-3xl mt-4 mx-auto text-center">
            We design, develop and deploy great software solutions backed by
            technology and engineering excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
            {stack.map(({ name, icon: Icon }, idx) => (
              <div
                key={idx}
                className="border border-white/30 min-h-[180px] flex flex-col items-center justify-center text-center hover:border-white shadow-2xl"
              >
                <Icon className="text-4xl mb-6 text-white/90" />
                <p className="text-xl font-serif">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export function HireRemotePythonDevelopers() {
  const services = [
    {
      title: "Premium Brand Feel",
      desc: "Hire top Python developers who craft high-quality, scalable solutions to elevate your business and digital presence.",
      icon: Crown,
    },
    {
      title: "Strong & Conversion-Focused",
      desc: "Work with elite Python developers focused on building applications that drive growth, efficiency measurable results.",
      icon: TrendingUp,
    },
    {
      title: "Growth-Driven",
      desc: "Power your business with skilled Python experts delivering innovative solutions for web, AI and data-driven projects.",
      icon: Rocket,
    },
    {
      title: "Enterprise & Trust-Focused",
      desc: "Rely on experienced Python developers for secure, high-performance applications tailored to enterprise needs.",
      icon: ShieldCheck,
    },
    {
      title: "Bold & Modern",
      desc: "Engage Python developers who create fast, scalable and modern solutions to keep your business ahead of the curve.",
      icon: Zap,
    },
    {
      title: "Hiring-Centric",
      desc: "Build your dream team with world-class Python developers dedicated to delivering excellence and innovation.",
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
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-6">
            Why Choose  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            Livik provides expert Python developers to build scalable, secure,
            and high-performance solutions with flexible engagement models,
            agile delivery and long-term reliability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }, idx) => (
            <div
              key={idx}
              className="
                bg-white
                rounded-2xl
                border
                border-gray-200
                p-8
                transition-all
                duration-300
                hover:border-sky-700
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
              "
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full gradient-hero text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HiringProcess() {
  const steps = [
    {
      step: "Step 1",
      title: "Share Your Requirements",
      desc: "Submit your project details, technical needs and preferred engagement model.",
      icon: ClipboardList,
      side: "right",
    },
    {
      step: "Step 2",
      title: "Developer Shortlisting",
      desc: "We analyze your requirements and handpick the most suitable ReactJS developers from our in-house team.",
      icon: UserCheck,
      side: "left",
    },
    {
      step: "Step 3",
      title: "Interview & Selection",
      desc: "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
      icon: MessagesSquare,
      side: "right",
    },
    {
      step: "Step 4",
      title: "Onboarding & Project Kickoff",
      desc: "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
      icon: Handshake,
      side: "left",
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-16">
          Hire Python Developers with Livik
        </h2>
        <p className="mb-16 text-black text-center">
          Empowering businesses with top ReactJS developers for modern,
          high-impact web experiences.
        </p>
        {/* Vertical Line – Desktop Only */}
        <div className="hidden md:block absolute left-1/2 top-12 h-full w-[2px] bg-slate-800 -translate-x-1/2 mt-32" />

        <div className="space-y-12 md:space-y-20">
          {steps.map(({ step, title, desc, icon: Icon, side }, idx) => (
            <ScrollReveal key={idx}>
              <div className="relative flex flex-col md:flex-row items-center">
                {/* Card */}
                <div
                  className={`w-full md:w-[45%] p-6 rounded-lg shadow bg-white border-l-4 border-gray-500
              ${side === "left" ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <span className="text-xl font-semibold text-gradient-hero">
                    {step}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold mt-1 mb-2">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Icon */}
                <div className="mt-4 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full gradient-hero flex items-center justify-center z-10">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PythonServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-6">
        Domains We Expertise In
      </h1>
      <h2 className="text-md lg:text-lg leading-relaxed mb-4 text-center ">
        Connecting Core Domains to Drive Smarter Solutions.
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Python is one of the most versatile and powerful programming languages,
        widely used for building scalable and efficient applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="gradient-hero rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white gradient-hero rounded-full p-6 mb-4"
              >
                <Icon size={36} />
              </motion.div>
              <h3 className="text-lg font-semibold text-center">
                {item.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function PythonTechStack001() {
  const stack = [
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "TurboGears", icon: GiGearStickPattern },
    { name: "CherryPy", icon: GiCherry },
    { name: "Pyramid", icon: TbTriangle },
    { name: "Pylons", icon: FaPython },
    { name: "Apache Tomcat", icon: SiApachetomcat },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Pandas", icon: SiPandas },
  ];

  return (
    <section className="bg-[#004475] py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
            Our Python Developers Are Flexible
          </h2>
          <p className="text-lg md:text-2xl font-semibold  text-center mt-6 text-white/90">Technology Stack Expertise</p>

          <p className="text-black max-w-3xl mt-4 mx-auto text-center text-white">
            We design, develop and deploy great software solutions backed by
            technology and engineering excellence.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {stack.map(({ name, icon: Icon }, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl shadow-lg border border-gray-200 
                         hover:shadow-xl transition"
            >
              {/* Top Bar */}
              <div className="h-1 gradient-hero" />

              {/* Content */}
              <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                <div
                  className="w-14 h-14 mb-4 flex items-center justify-center rounded-full 
                                bg-gray-300 group-hover:gradient-hero transition"
                >
                  <Icon className="text-2xl group-hover:text-slate-100 transition" />
                </div>
                <p className="text-sm font-semibold text-black tracking-wide">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SiPython } from "react-icons/si";
import {
  FaCog,
  FaClock,
  FaDollarSign,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: SiPython,
    title: "Fast Python Development",
    description:
      "Python enables rapid development with clean syntax and powerful libraries, helping you build scalable applications in less time.",
  },
  {
    icon: FaCog,
    title: "Automation & Optimization",
    description:
      "Python is ideal for automation, data processing and workflow optimization, improving efficiency across your systems.",
  },
  {
    icon: FaClock,
    title: "Quick Time to Market",
    description:
      "With Python frameworks like Django and Flask, applications can be developed and deployed faster than traditional stacks.",
  },
  {
    icon: FaDollarSign,
    title: "Cost Effective Solutions",
    description:
      "Python’s open-source ecosystem reduces development and maintenance costs while delivering high-quality results.",
  },
  {
    icon: FaEye,
    title: "Clear & Maintainable Code",
    description:
      "Python’s readability ensures transparent, easy-to-maintain codebases that improve collaboration and long-term stability.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure & Reliable",
    description:
      "Python supports strong security practices and stable architectures, ensuring reliable and safe applications.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Innovate Python With Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Powerful, flexible and efficient solutions for modern application
            development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 p-8
                           transition-all duration-300
                           hover:bg-[#0A6AA1] hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl
                             bg-[#0A6AA1] text-white
                             transition-all duration-300
                             group-hover:bg-white group-hover:text-[#0A6AA1]"
                >
                  <Icon className="w-6 h-6" />
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
                             group-hover:text-blue-100"
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
          domain-focused expertise to build Python solutions that solve real
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
          Hire Python Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with expert Python developers to build fast,
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

/* -------------------- Page Export -------------------- */
export default function PythonDeveloper() {
  return (
    <>
      <Herosection />
      <HireRemotePythonDevelopers />
      <PythonTechStack001 />
      <FeaturesSection />
      {/* <PythonTechStack /> */}
      {/*<PythonServicesGrid /> */}

      {/*<HiringProcess /> */}
      <CrestIndustries />
      <HireProcessfinal />
    </>
  );
}
