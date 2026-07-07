"use client";
import { useState } from "react";
/*
import PHP_image from "../../assets/PHP_png.png";
import SQLlite_image from "../../assets/SQLite.png";
import Apache_image from "../../assets/Apache.png";
import cPanel_image from "../../assets/Cpanel .png";
import Symfony from "../../assets/Symfony.png";
import Codeigniter from "../../assets/CodeIgniter.png";
import Composer from "../../assets/Composer.png";
import Git_Hub from "../../assets/GitHub.png";
import Docker_image from "../../assets/Docker.png";
import PostgreSQL from "../../assets/PostgresSQL.png";
import MySQL_image from "../../assets/MySQL.png";
import Laravel_image from "../../assets/Laravel.png";
import Nginx from "../../assets/NGINX.png";
*/
const PHP_image = null;
const SQLlite_image = null;
const Apache_image = null;
const cPanel_image = null;
const Symfony = null;
const Codeigniter = null;
const Composer = null;
const Git_Hub = null;
const Docker_image = null;
const PostgreSQL = null;
const MySQL_image = null;
const Laravel_image = null;
const Nginx = null;

const techStack = [
  { name: "SQLite", icon: SQLlite_image },
  { name: "Apache", icon: Apache_image },
  { name: "cPanel", icon: cPanel_image },
  { name: "Symfony", icon: Symfony },
  { name: "CodeIgniter", icon: Codeigniter },
  { name: "Composer", icon: Composer },
  { name: "Git", icon: Git_Hub },
  { name: "Nginx", icon: Nginx },
  { name: "Docker", icon: Docker_image },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "MySQL", icon: MySQL_image },
  { name: "Laravel", icon: Laravel_image },
];

const reasons = [
  {
    title: "Budget-Friendly & Open-Source",
    desc: "PHP is completely free and does not require any licensing fees. Its open-source nature allows developers to customize features freely, making it a highly cost-effective solution.",
  },
  {
    title: "Flexible & Widely Compatible",
    desc: "PHP works seamlessly across operating systems, servers, databases and frameworks, making it suitable for everything from simple websites to complex enterprise applications.",
  },
  {
    title: "Huge Community & Rich Ecosystem",
    desc: "PHP has a massive global developer community that actively contributes tutorials, libraries, tools and updates, ensuring quick problem resolution and continuous innovation.",
  },
  {
    title: "Highly Scalable for Growing Businesses",
    desc: "PHP applications can scale effortlessly as business needs grow. Skilled developers can design architectures that support expansion without major redevelopment.",
  },
  {
    title: "High Performance & Fast Development",
    desc: "PHP enables rapid development cycles while maintaining strong performance. It efficiently handles high traffic loads when optimized correctly.",
  },

  {
    title: "Ideal for CMS & Legacy System Support",
    desc: "Popular CMS platforms like WordPress, Drupal and Joomla are built on PHP. Experienced PHP developers can easily maintain, upgrade and integrate legacy systems.",
  },
];

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
  FileCheck,
  Rocket,
  ShoppingBag,
  Target,
} from "lucide-react";

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
  { name: "Retail", icon: Store },
];

import {
  MessageCircleQuestion,
  Users,
  Handshake,
  PlayCircle,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    title: "Share Your Requirements",
    label: "Drop an Inquiry",
    icon: MessageCircleQuestion,
    desc: "Submit your project details, technical needs and preferred engagement model.",
  },
  {
    title: "Developer Shortlisting",
    label: "Consult With Our Experts",
    icon: Users,
    desc: "We analyze your requirements and handpick the most suitable ReactJS developers from our in-house team",
  },
  {
    title: "Interview & Selection",
    label: "Select Engagement Model",
    icon: TrendingUp,
    desc: "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
  },
  {
    title: "Onboarding & Project Kickoff",
    label: "Sign off and Begin Work",
    icon: Handshake,
    desc: "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
  },
];

/* -------------------- Hero -------------------- */
const Herosection = () => {
  return (
    <section className="relative flex h-[500px] items-center justify-center gradient-hero text-white ">
      <div
        className="absolute h-80 w-full max-w-5xl px-80 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${PHP_image})` }}
      />

      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-7xl">
          Hire PHP Developers
        </h1>
        <p className="text-md lg:text-xl opacity-90 mb-8 max-w-6xl mx-auto">
          PHP is a powerful open-source language for building dynamic,
          high-performance websites. When you hire our PHP developers in India,
          you get fast, Google PageSpeed-optimized and W3C-compliant solutions.
          We deliver reliable, cost-effective PHP applications using advanced
          infrastructure and proven expertise.Our developers specialize in
          modern PHP frameworks to ensure secure, scalable and maintainable
          applications. Benefit from flexible engagement models, ongoing support
          and continuous performance optimization for long-term success.
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
export function WhyHirePHP() {
  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[50%]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-15">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Why Choose  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="mt-8 text-sm md:text-base max-w-3xl mx-auto text-gray-600">
            Transforming ideas into powerful PHP web solutions with clean code,
            seamless UX and long-term scalability.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="
                group
                transition-transform
                duration-300
                hover:border-sky-700
               group rounded-2xl border border-gray-200 p-8 shadow-sm
                bg-white
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  mb-4
               
                "
              >
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function TechStackSection() {
  return (
    <section className="relative py-24 px-6 gradient-hero text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Our PHP Developers Are Flexible
        </h2>
        <h2 className="text-lg md:text-2xl font-semibold  text-center mt-8">
          Technology Stack Expertise
        </h2>

        <p className="mt-4 text-sm md:text-base text-center">
          Our PHP developers adapt seamlessly to your project requirements,
          working across a wide range of modern libraries, frameworks and tools
          to build reliable and scalable applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/5 border border-gradient-hero backdrop-blur-md p-8 flex flex-col items-center justify-center
hover:border-white hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300"
            >
              {/* <img className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"> */}
              <div>
                {tech.icon && (
                  <img
                    src={tech.icon}
                    alt="tech_stack_img"
                    width={50}
                    height={50}
                  />
                )}
              </div>
              <p className="text-sm font-medium text-gray-200">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustrySection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Domains We Expertise In
        </h2>
        <h4 className="text-md lg:text-lg leading-relaxed mb-4 text-center mt-8">
          Connecting Core Domains to Drive Smarter Solutions.
        </h4>

        <p className="text-md lg:text-lg leading-relaxed mb-16 text-center">
          We bring domain-focused expertise to build PHP solutions that solve
          real business challenges across multiple industries.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === index;

            return (
              <button
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group border rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300
${isActive
                    ? " text-white gradient-hero "
                    : "bg-white text-gray-800 border-gray-300 hover:bg-[#0c1b3a] hover:text-white"
                  }`}
              >
                <Icon
                  className={`w-10 h-10 mb-4 transition-colors duration-300
${isActive ? "text-white" : "text-gray-600 group-hover:text-white"}`}
                />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HireSteps() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hire PHP Developers with Livik
        </h2>
        <p className="mb-12 py-10 text-black text-center">
          Empowering businesses with top ReactJS developers for modern,
          high-impact web experiences.
        </p>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className="relative flex flex-col items-center text-center cursor-pointer"
              >
                {/* Circle */}
                <div
                  className={`relative w-44 h-44 rounded-full flex items-center justify-center transition-all duration-500
${isActive ? "shadow-xl" : "shadow"}`}
                >
                  {/* Dashed Ring */}
                  <div
                    className={`absolute inset-0 rounded-full border-2 border-dashed transition-all duration-700
${isActive ? "gradient-hero rotate-180" : "border-gray-300"}`}
                  />

                  {/* Arrow */}
                  <div
                    className={`absolute -top-4 -right-4 w-10 h-10 rounded-full border-2 border-black flex items-center justify-center
transition-transform duration-700 ${isActive ? "rotate-180" : ""}`}
                  >
                    <span className="text-black">➜</span>
                  </div>

                  {/* Icon */}
                  <Icon
                    className={`w-10 h-10 transition-all duration-500
${isActive ? "scale-125 text-white" : "text-black"}`}
                  />
                </div>

                {/* Alternate content */}
                {isActive && (
                  <div className="mt-6 max-w-xs text-sm text-gray-600 animate-fadeIn">
                    <p className="font-semibold mb-2">{step.title}</p>
                    <p>{step.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  FaServer,
  FaCogs,
  FaClock,
  FaDollarSign,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { motion } from "framer-motion";

const features = [
  {
    icon: <SiPhp className="text-sky-700 w-6 h-6" />,
    title: "Fast PHP Development",
    description:
      "Our PHP developers build dynamic and scalable web applications using modern frameworks like Laravel and CodeIgniter.",
  },
  {
    icon: <FaCogs className="text-sky-700 w-6 h-6" />,
    title: "Optimized Backend Solutions",
    description:
      "PHP enables efficient backend processing, API development and system integrations for seamless business operations.",
  },
  {
    icon: <FaClock className="text-sky-700 w-6 h-6" />,
    title: "Reduced Time to Market",
    description:
      "With rapid development cycles and reusable components, PHP projects can be delivered faster and more efficiently.",
  },
  {
    icon: <FaDollarSign className="text-sky-700 w-6 h-6" />,
    title: "Cost Effective Development",
    description:
      "PHP is open-source and highly economical, reducing development and maintenance costs while maintaining quality.",
  },
  {
    icon: <FaEye className="text-sky-700 w-6 h-6" />,
    title: "Clean & Maintainable Code",
    description:
      "Well-structured PHP code ensures transparency, easier debugging and long-term project maintainability.",
  },
  {
    icon: <FaShieldAlt className="text-sky-700 w-6 h-6" />,
    title: "Secure & Reliable Systems",
    description:
      "We implement strong security practices in PHP applications, ensuring data protection and application stability.",
  },
];

export function PHPSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Innovate PHP with Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Delivering robust, secure and high-performance PHP solutions to grow
            your digital presence.
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
          domain-focused expertise to build PHP solutions that solve real
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
          Hire PHP Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with expert PHP developers to build fast,
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
export default function PHPdeveloper() {
  return (
    <>
      <Herosection />
      <WhyHirePHP />
      <TechStackSection />
      <PHPSection />
      {/*<IndustrySection />*/}
      {/*<HireSteps />*/}
      <CrestIndustries />
      <HireProcessfinal />
    </>
  );
}
