"use client";
/* ================= ICONS ================= */

/*
import Angularimage from '../../assets/Angular-png.png'
import MONGO_DB from '../../assets/MongoDB.png'
import FIREBASE from '../../assets/Firebase.png'
import MySQL from '../../assets/MySQL.png'
import RxJs from '../../assets/RxJs.png'
import AngularJS from '../../assets/AngularJS.png'
import kendoUI from '../../assets/Kendo UI.png'
import primeNG from '../../assets/primeng.webp'
import bootstrap from '../../assets/Bootstrap.png'
import VScode from'../../assets/Vscode Icon.png'
*/
const Angularimage = null;
const MONGO_DB = null;
const FIREBASE = null;
const MySQL = null;
const RxJs = null;
const AngularJS = null;
const kendoUI = null;
const primeNG = null;
const bootstrap = null;
const VScode = null;

import {
  FileCheck,
  MessageCircleQuestion,
  Rocket,
  Search,
  Target,
  UserPlus,
  Users,
} from "lucide-react";

import {
  Briefcase,
  Settings,
  MessageCircle,
  Repeat,
  FileText,
  ShieldCheck,
  UserCheck,
  Clock,
  Cpu,
} from "lucide-react";
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className="mb-4 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full 
  gradient-hero text-white
    flex items-center justify-center 
    shadow-[0_8px_20px_rgba(79,70,229,0.35)]"
  >
    {children}
  </div>
);

const steps = [
  {
    title: "Share Your Requirements",
    desc: "Submit your project details, technical needs and preferred engagement model.",
    icon: MessageCircleQuestion,
  },
  {
    title: "Developer Shortlisting",
    desc: "We analyze your requirements and handpick the most suitable ReactJS developers from our in-house team.",
    icon: Search,
  },
  {
    title: "Interview & Selection",
    desc: "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
    icon: UserPlus,
  },
  {
    title: "Onboarding & Project Kickoff",
    desc: "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
    icon: Settings,
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
  ShoppingBag,
} from "lucide-react";

const items = [
  {
    title: "Supply Chain",
    desc: "Smart Angular solutions for logistics, inventory tracking, warehouse automation and real-time supply chain visibility.",
    icon: Truck,
  },
  {
    title: "Education",
    desc: "Scalable Angular platforms for online learning, student management and interactive digital classrooms.",
    icon: GraduationCap,
  },
  {
    title: "E-Commerce",
    desc: "High-performance Angular e-commerce solutions with seamless checkout, product management and payment integrations.",
    icon: ShoppingCart,
  },
  {
    title: "Finance",
    desc: "Secure Angular applications for banking, fintech, digital payments and financial data management.",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant Angular systems for patient management, telemedicine and healthcare data security.",
    icon: HeartPulse,
  },
  {
    title: "Real Estate",
    desc: "Modern Angular platforms for property listings, CRM systems and real estate management solutions.",
    icon: Home,
  },
  {
    title: "Tour & Travels",
    desc: "Angular-based travel booking engines, itinerary planners and tourism management platforms.",
    icon: Plane,
  },
  {
    title: "Hotel & Restaurant",
    desc: "Smart Angular solutions for reservations, POS systems, menu management and customer experience optimization.",
    icon: Utensils,
  },
  {
    title: "Manufacturing",
    desc: "Angular dashboards for production monitoring, quality control and manufacturing workflow automation.",
    icon: Factory,
  },
  {
    title: "Retail",
    desc: "Retail-focused Angular solutions for POS systems, inventory control and omnichannel customer engagement.",
    icon: ShoppingBag,
  },
];

const services = [
  {
    title: "Custom Angular Development",
    desc: "If you have a unique app requirement that doesn't fit within the standard services listed above, hire Angular developers for tailored solutions.",
    icon: "⚙️",
  },
  {
    title: "Enterprise Angular Web App Development",
    desc: "SplendorNet is your one-stop solution for enterprise Angular web app development with advanced features.",
    icon: "🧩",
  },
  {
    title: "Platform Migration Services",
    desc: "We help migrate legacy Angular applications to the latest versions, boosting performance and efficiency.",
    icon: "🔄",
  },
  {
    title: "App UI/UX Development",
    desc: "Create engaging, user-friendly Angular applications with stunning UI/UX designs.",
    icon: "🎨",
  },
  {
    title: "AJAX Development",
    desc: "Expert AngularJS developers delivering dynamic, responsive apps using AJAX, XHR and JavaScript.",
    icon: "⚡",
  },
  {
    title: "Angular Ecommerce Portal Development",
    desc: "Feature-rich Angular ecommerce portals with secure shopping carts and scalable architecture.",
    icon: "🛒",
  },
];

/* ================= DATA ================= */

/* -------------------- Hero -------------------- */
const Herosection = () => {
  return (
    <section className="relative flex h-[500px] items-center justify-center gradient-hero text-white ">
      <div
        className="absolute h-80 w-full px-80 bg-cover bg-center opacity-30 max-w-3xl"
        style={Angularimage ? { backgroundImage: `url(${Angularimage})` } : {}}
      />
      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Hire Angular Developers
        </h1>
        <p className="text-md lg:text-xl opacity-90 mb-8 max-w-6xl mx-auto">
          Hire dedicated Angular developers to build scalable, high-performance
          web applications that drive business growth. Extend your team with
          experienced global Angular talent aligned to your project needs.
          Deliver user-friendly, feature-rich solutions using best practices and
          modern frameworks. Accelerate development timelines while maintaining
          quality, security and scalability. Partner with Livik for reliable
          support and long-term development success.
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

/* ---------- DATA ---------- */
const features = [
  {
    title: "Hands-On Product Expertise",
    icon: (
      <IconWrapper>
        <Briefcase className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "Collaborate with agile Angular developers experienced in building scalable single-page applications and intuitive customer-facing products for fast-growing startups.",
  },
  {
    title: "Seamless Project Handling",
    icon: (
      <IconWrapper>
        <Settings className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "Stay stress-free as our dedicated project managers take care of planning, coordination and execution end to end.",
  },
  {
    title: "Clear & Open Communication",
    icon: (
      <IconWrapper>
        <MessageCircle className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "Receive consistent updates through WhatsApp, email, Zoom, Google Meet and scheduled calls.",
  },
  {
    title: "Flexible Hiring Options",
    icon: (
      <IconWrapper>
        <Repeat className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "Engage Angular developers on an hourly, part-time, monthly, or fixed-price basis to suit your needs.",
  },
  {
    title: "Free Project Estimation",
    icon: (
      <IconWrapper>
        <FileText className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "Get a detailed, no-obligation project quote within 24 business hours.",
  },
  {
    title: "Data Security & Confidentiality",
    icon: (
      <IconWrapper>
        <ShieldCheck className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "Your ideas and data are protected with a signed NDA before project discussions begin.",
  },
  {
    title: "Experienced Angular Professionals",
    icon: (
      <IconWrapper>
        <UserCheck className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "Work with highly skilled Angular developers committed to delivering reliable, high-quality web applications.",
  },
  {
    title: "On-Time Delivery Commitment",
    icon: (
      <IconWrapper>
        <Clock className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "We follow strict timelines to ensure timely and predictable project delivery.",
  },
  {
    title: "Modern Technology Stack",
    icon: (
      <IconWrapper>
        <Cpu className="w-7 h-7" />
      </IconWrapper>
    ),
    desc: "Applications are built using the latest frameworks, tools and industry best practices.",
  },
];

/* ---------- COMPONENT ---------- */
export function WhyHireAngular() {
  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[50%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Why Choose  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
            Us
          </span>
        </h2>

        <p className="text-gray-600 max-w-4xl mx-auto mt-8 mb-20 text-lg">
          When you hire an Angular JS developer in Livik, it comes with
          incredible benefits. You get a dedicated team of expert Angular
          programmers and developers.
        </p>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                border
                border-gray-200
                p-8
                text-left
                transition-all
                duration-300
                hover:border-blue-500
                hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)]
              "
            >
              {item.icon}

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologyMarquee() {
  return (
    <section className="py-30 gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
          Our Angular Developers Are Flexible
          <span className="block w-20 h-1 black mx-auto mt-4 rounded"></span>
        </h2>
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-white mt-8">
        Technology Stack Expertise
      </h2>
      <p className="text-white max-w-4xl mx-auto mb-12 mt-8">
        Our Angular developers are proficient in a wide range of technologies
        and tools to build reliable and scalable applications.
      </p>
      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="min-w-[220px] h-[120px] bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-3"
            >
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-auto object-contain"
                />
              )}
              <p className="text-sm font-medium text-gray-800">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryExpertise() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Domains That We Expertise In
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12 mt-8">
          From healthcare to fintech, eCommerce to NFT marketplaces, our Angular
          developers for hire deliver domain-specific, user-focused solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative h-48 rounded-2xl bg-white shadow-lg transition-all duration-300 hover:gradient-hero"
              >
                {/* Default State */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
                  <Icon className="w-10 h-10 text-black transition-colors group-hover:text-white" />
                  <p className="text-lg font-medium">{item.title}</p>
                </div>

                {/* Hover State */}
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-white text-sm leading-relaxed text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HiringProcess() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Hire Angular Developers with Livik
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-16 mt-8">
          Take a look at our simple 4-step process to hire dedicated developers.
          Our hiring process is designed to ensure seamless and efficient
          collaboration.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="group">
                {/* Icon */}
                <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full gradient-hero  opacity-10 group-hover:opacity-50 transition" />
                  <Icon
                    className="relative z-10 h-8 w-8 text-gradient-hero
                    transition-all duration-300 
                    group-hover:scale-125 
                    group-hover:-translate-y-2"
                  />
                </div>

                {/* Line */}
                <div className="h-[2px] w-full gradient-hero" />

                {/* Content */}
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-black-600 text-md leading-relaxed">
                  {step.desc}
                </p>

                {/* Step Button */}
                <div className="mt-8">
                  <span className="inline-block gradient-hero text-white text-sm px-5 py-2 rounded-md">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";

const technologies = [
  // Frameworks
  { name: "AngularJS", icon: AngularJS },

  // Libraries
  { name: "RxJS", icon: RxJs },
  { name: "PrimeNG", icon: primeNG },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Kendo UI", icon: kendoUI },

  // Databases
  { name: "MongoDB", icon: MONGO_DB },
  { name: "Firebase", icon: FIREBASE },
  { name: "MySQL", icon: MySQL },

  // Tools
  { name: "VS Code", icon: VScode },
];

export function TechnologyMarqueefinal() {
  return (
    <section className="py-20 gradient-hero overflow-hidden">
      {/* Inline keyframes to avoid missing Tailwind animation config */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
          Our AngularJS Developers Are Flexible
        </h2>
        <span className="block w-20 h-1 bg-white mx-auto mt-4 rounded"></span>
        <h2 className="text-lg md:text-2xl font-semibold mt-6 text-center text-white">
          Technology Stack Expertise
        </h2>
        <p className="text-white max-w-4xl mx-auto mb-14 mt-8">
          Our Angular developers adapt seamlessly to your project requirements,
          working across a wide range of modern libraries, frameworks and tools
          to build reliable and scalable applications.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-8 w-max"
          style={{
            animation: "marquee 30s linear infinite",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="min-w-[200px] h-[110px] bg-white/95 backdrop-blur rounded-xl shadow-md flex flex-col items-center justify-center gap-3"
            >
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-auto object-contain"
                />
              )}
              <p className="text-sm font-semibold text-gray-800 text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SiAngular } from "react-icons/si";
import {
  FaBolt,
  FaClock,
  FaDollarSign,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const innovate = [
  {
    icon: SiAngular,
    title: "Faster Angular Development",
    description:
      "Our Angular experts build high-performance, scalable applications using modern frameworks and best development practices.",
  },
  {
    icon: FaBolt,
    title: "Optimized Performance",
    description:
      "Angular’s powerful architecture ensures faster rendering, improved responsiveness and seamless user experiences.",
  },
  {
    icon: FaClock,
    title: "Reduced Time to Market",
    description:
      "With reusable components and efficient workflows, Angular applications can be developed and launched faster.",
  },
  {
    icon: FaDollarSign,
    title: "Cost Effective Solutions",
    description:
      "Angular’s maintainable structure reduces development and long-term maintenance costs while delivering robust solutions.",
  },
  {
    icon: FaEye,
    title: "Clean & Maintainable Code",
    description:
      "Angular promotes structured and readable code, improving collaboration and simplifying long-term project scalability.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure & Reliable",
    description:
      "Angular provides built-in security features and stable architecture, ensuring safe and dependable applications.",
  },
];

export function AngularSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Innovate Angular With Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Building fast, secure and scalable Angular applications to power
            your digital transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovate.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200
                           transition-all duration-300
                           hover:bg-[#0A6AA1] hover:shadow-2xl"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg
                             bg-[#0A6AA1] text-white
                             transition-all duration-300
                             group-hover:bg-white group-hover:text-[#0A6AA1]"
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2
                             transition-colors duration-300
                             group-hover:text-white"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600
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
          domain-focused expertise to build Angular solutions that solve real
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
          Hire Angular Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with expert Angular developers to build fast,
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
export default function Angulardeveloper() {
  return (
    <>
      <Herosection />
      <WhyHireAngular />
      {/* <TechnologyMarquee/> */}
      <TechnologyMarqueefinal />
      <AngularSection />
      {/*<IndustryExpertise/>*/}
      {/*<HiringProcess/>*/}
      <CrestIndustries />
      <HireProcessfinal />
    </>
  );
}
