"use client";
/*
import Nodejsimage from "../../assets/Node - Png.png";
*/
const Nodejsimage = "";
/* -------------------- Hero -------------------- */
const Herosection = () => {
  return (
    <section className="relative flex h-[500px] items-center justify-center gradient-hero text-white ">
      <div
        className="absolute h-80 w-full px-80 bg-cover bg-center opacity-20 max-w-5xl"
        style={{ backgroundImage: `url(${Nodejsimage})` }}
      />

      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Hire NodeJS Developers
        </h1>
        <p className="text-md lg:text-xl opacity-100 mb-8 max-w-6xl mx-auto">
          Empower your business with Our Node.js developers. Livik delivers
          scalable, high-performance web and mobile solutions. We combine global
          talent with streamlined processes for faster delivery. Reduce costs,
          boost productivity and scale without compromise. Build smarter, faster
          and future-ready with Livik. Leverage expertise in REST APIs,
          microservices and real-time applications for seamless performance.
          Ensure long-term reliability with clean architecture, continuous
          optimization and dedicated technical support.
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

import React from "react";
import {
  SiExpress,
  SiNestjs,
  SiKoa,
  SiNextdotjs,
  SiSocketdotio,
  SiHp,
  SiSailsdotjs,
  SiMeteor,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiEmberdotjs,
  SiJquery,
  SiIonic,
  SiCoda,
} from "react-icons/si";

const frameworks = [
  { name: "Express", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "Koa", icon: SiKoa },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "Hapi", icon: SiHp },
  { name: "Sails", icon: SiSailsdotjs },
  { name: "Meteor", icon: SiMeteor },
];

const jsFrameworks = [
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Angular", icon: SiAngular },
  { name: "Ember", icon: SiEmberdotjs },
  { name: "jQuery", icon: SiJquery },
];

const mobileFrameworks = [
  { name: "React Native", icon: SiReact },
  { name: "Ionic", icon: SiIonic },
  { name: "Cordova", icon: SiCoda },
];

interface SectionBoxProps {
  title: string;
  items: Array<{ name: string; icon: any }>;
}

const SectionBox = ({ title, items }: SectionBoxProps) => (
  <div className="w-full max-w-4xl mx-auto mb-10">
    <div className="flex justify-center mb-4">
      <span className="px-6 py-2 border border-white/20 rounded-full text-white font-semibold bg-white/10 backdrop-blur-sm">
        {title}
      </span>
    </div>

    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl px-8 py-12">
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="
                group flex items-center gap-3
                px-4 py-3 rounded-lg bg-white/10
                transition-all duration-300
                hover:gradient-hero hover:scale-105
              "
            >
              <Icon
                className="
                  text-2xl text-white                  transition-all duration-300
                  group-hover:text-white
                  group-hover:scale-125
                "
              />
              <span className="font-medium text-white/90 group-hover:text-white">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const NodeJsExpertise = () => {
  return (
    <section className="py-20 bg-[#004475] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
          Our Node.JS Developers are Flexible
        </h2>
        <div className="w-20 h-1 bg-white/30 mx-auto rounded mt-4"></div>
        <h2 className="text-lg md:text-2xl font-semibold mt-8 text-white/90">
          Technology Stack Expertise
        </h2>

        <p className="text-white/70 max-w-3xl mx-auto mb-14 mt-8">
          Our NodeJS development team has vast experience in all NodeJS
          technologies and frameworks. We specialize in multiple databases,
          real-time data processing and cloud technologies.
        </p>

        <SectionBox
          title="Node.js Frameworks and Technologies"
          items={frameworks}
        />

        <SectionBox
          title="JavaScript Frameworks & Libraries"
          items={jsFrameworks}
        />

        <SectionBox title="Mobile Frameworks" items={mobileFrameworks} />
      </div>
    </section>
  );
};

const features = [
  {
    title: "Skilled Node.js Developers",
    description:
      "Hire highly skilled Node.js developers who design and build scalable, efficient and high-performance backend solutions tailored to your needs.",
  },
  {
    title: "End-to-End Development Support",
    description:
      "We provide full-cycle Node.js development support, from requirement analysis and architecture design to deployment, optimization and ongoing maintenance.",
  },
  {
    title: "Flexible Hiring Models",
    description:
      "Choose from flexible Node.js hiring options—dedicated teams, hourly, or project-based engagement—customized to match your project scope and business goals.",
  },
  {
    title: "Faster Time to Market",
    description:
      "Leverage agile Node.js development processes and optimized workflows to accelerate delivery without compromising code quality or performance.",
  },
  {
    title: "Multi-Industry Expertise",
    description:
      "Our Node.js developers bring experience across multiple industries, delivering robust, secure and scalable applications tailored to diverse business requirements.",
  },
  {
    title: "Transparent Communication & Reporting",
    description:
      "We ensure clear, consistent communication with regular updates, detailed reporting and collaborative project management throughout the Node.js development lifecycle.",
  },
];

const NodeJsValueProps = () => {
  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[50%]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center text-black max-w-3xl mx-auto mb-16">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Why Choose  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-black mt-4">
            Empower your business with scalable, secure and high-performance
            Node.js solutions delivered by our expert development team.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            //             <div
            //                 key={index}
            //                 className="
            //     bg-white rounded-2xl p-6
            //     border
            //     transition-all duration-300 ease-in-out

            //     hover:shadow-xl
            //     border-[linear-gradient(135deg, hsl( 197 71% 53%) 0%, hsl(203 100% 24%) 100%)]
            //     hover:-translate-y-1
            //   "
            //             >
            //                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
            //                     {item.title}
            //                 </h3>
            //                 <p className="text-gray-600 text-sm leading-relaxed">
            //                     {item.description}
            //                 </p>
            //             </div>
            <div
              key={index}
              className="
    group relative rounded-2xl p-6 bg-white
    transition-all 
    border border-gray-200
    hover:-translate-y-1 hover:border-sky-600
    duration-300 ease-in-out
    hover:shadow-xl
  "
            >
              {/* Gradient border – ONLY on hover */}
              {/* <div
    className="
      absolute inset-0 rounded-2xl
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
    "
    style={{
      background:
        "linear-gradient(135deg, hsl(197 71% 53%) 0%, hsl(203 100% 24%) 100%)",
    }}
  /> */}

              {/* Card content */}
              {/* <div className="relative rounded-2xl bg-white p-6"> */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import {
  FaTruck,
  FaGraduationCap,
  FaShoppingCart,
  FaUniversity,
  FaHospital,
  FaHome,
  FaPlane,
  FaUtensils,
  FaIndustry,
  FaStore,
} from "react-icons/fa";

const industries = [
  { name: "Supply Chain", icon: FaTruck },
  { name: "Education", icon: FaGraduationCap },
  { name: "E-Commerce", icon: FaShoppingCart },
  { name: "Finance", icon: FaUniversity },
  { name: "Healthcare", icon: FaHospital },
  { name: "Real Estate", icon: FaHome },
  { name: "Tour & Travels", icon: FaPlane },
  { name: "Hotel & Restaurant", icon: FaUtensils },
  { name: "Manufacturing", icon: FaIndustry },
  { name: "Retail", icon: FaStore },
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Domains We Expertise In
        </h2>
        <h4 className="text-md lg:text-lg leading-relaxed mb-4 text-center mt-4">
          Connecting Core Domains to Drive Smarter Solutions.
        </h4>
        <p className="text-black max-w-3xl mx-auto mb-14 leading-relaxed text-center mt-8">
          Our Node developers use modern stacks and best practices to build
          fast, scalable, future-ready applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group gradient-hero rounded-2xl p-6
                  flex flex-col items-center text-center
                  shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:shadow-md
                "
              >
                <Icon
                  className="
                    text-white text-4xl mb-4
                    transition-all duration-300
                    group-hover:scale-125
                    group-hover:-translate-y-2
                  "
                />
                <p className="font-semibold text-white text-sm">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your project, goals and the kind of Node.js talent you need.",
    highlight: true,
  },
  {
    step: "02",
    title: "Review Curated Profiles",
    description:
      "Get handpicked, pre-vetted developer profiles aligned with your needs.",
  },
  {
    step: "03",
    title: "Interview & Finalize",
    description:
      "Meet the shortlisted candidates, assess their skills and pick your perfect fit.",
  },
  {
    step: "04",
    title: "Start with a Trial",
    description:
      "If you’re unsatisfied during the 2-week trial, we’ll promptly replace the developer—no questions asked.",
  },
];

const HiringProcess = () => {
  return (
    <section className="gradient-hero">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hire NodeJs <br /> Developers with Livik
          </h2>

          <p className="text-lg text-white/90 max-w-xl">
            hire Node.js developers with a fast, transparent and reliable
            process designed to match your exact project and tech needs.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                relative rounded-2xl p-6 min-h-[220px]
                gradient-hero text-white
                border border-white/20
                transition-all duration-300 ease-in-out
                hover:bg-white hover:text-white/900
                hover:shadow-2xl
                hover:animate-[shake_0.4s_ease-in-out]
              "
            >
              {/* Step Number */}
              <div
                className="
                  absolute top-4  w-10 h-10 rounded-full
                  flex items-center justify-center font-bold
                  bg-white text-indigo-600
                  transition-colors
                  group-hover:bg-indigo-600 group-hover:text-white
                "
              >
                {item.step}
              </div>

              <h3 className="text-xl font-semibold mt-12">{item.title}</h3>

              <p className="text-sm leading-relaxed mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SHAKE KEYFRAMES */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-4px); }
            50% { transform: translateX(4px); }
            75% { transform: translateX(-4px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
};

import {
  FaServer,
  FaCogs,
  FaClock,
  FaDollarSign,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";
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
  ShoppingBag,
  Target,
  Users,
  FileCheck,
  Rocket,
} from "lucide-react";

const innovate = [
  {
    icon: <SiNodedotjs className="text-sky-700 w-6 h-6" />,
    title: "High-Performance Node.js Development",
    description:
      "We build fast, scalable and event-driven applications using Node.js, perfect for real-time and high-traffic systems.",
  },
  {
    icon: <FaCogs className="text-sky-700 w-6 h-6" />,
    title: "Efficient Backend Architecture",
    description:
      "Node.js enables lightweight, non-blocking backend solutions that improve application speed and overall performance.",
  },
  {
    icon: <FaClock className="text-sky-700 w-6 h-6" />,
    title: "Faster Time to Market",
    description:
      "With reusable modules and a rich ecosystem, Node.js accelerates development and deployment cycles.",
  },
  {
    icon: <FaDollarSign className="text-sky-700 w-6 h-6" />,
    title: "Cost Effective Development",
    description:
      "Node.js allows faster development with fewer resources, reducing infrastructure and maintenance costs.",
  },
  {
    icon: <FaEye className="text-sky-700 w-6 h-6" />,
    title: "Transparent & Maintainable Code",
    description:
      "Clean JavaScript codebases ensure easy debugging, better collaboration and long-term project scalability.",
  },
  {
    icon: <FaShieldAlt className="text-sky-700 w-6 h-6" />,
    title: "Secure & Reliable Systems",
    description:
      "We implement strong security standards in Node.js applications to protect data and ensure system stability.",
  },
];

export function InnovateNodeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Innovate Node.js with Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Building scalable, secure and high-performance backend systems with
            Node.js.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovate.map((item, index) => {
            const Icon = item.icon;

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
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-sky-100">
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
          domain-focused expertise to build NodeJS solutions that solve real
          business challenges across multiple industries.
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
          Hire Node.js Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with expert NodeJS developers to build fast,
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
export default function NodeDeveloper() {
  return (
    <>
      <Herosection />
      <NodeJsValueProps />
      <NodeJsExpertise />
      <InnovateNodeSection />
      {/*<IndustriesWeServe />*/}
      {/*<HiringProcess />*/}
      <CrestIndustries />
      <HireProcessfinal />
    </>
  );
}
