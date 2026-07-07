"use client";
import { useState } from "react";
/*
import SAP_Image from "../../assets/SAP- png.png";
*/
const SAP_Image = "";
import {
  LineChart,
  UserCheck,
  Globe,
  Sliders,
  Users,
  FileCheck,
  Rocket,
  Target,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  Truck,
  Utensils,
  Home,
  Factory,
  ShoppingBag,
  ShoppingCart,
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
  { name: "Retail", icon: ShoppingBag },
];

const steps = [
  {
    step: "1",
    title: "Share Your Requirements",
    desc: "Tell us about your project scope, goals and technical needs. We’ll identify the right SAP professionals aligned with your expectations.",
  },
  {
    step: "2",
    title: "Select a Hiring Model",
    desc: "Choose from flexible engagement options—fixed-cost, dedicated resources, or team-based models depending on your budget and delivery timeline.",
  },
  {
    step: "3",
    title: "Get the Right Match",
    desc: "Our team presents consultants with the skills, experience and SAP specialization required for your project.",
  },
  {
    step: "4",
    title: "Begin the Project",
    desc: "Once onboarded, start collaborating with your SAP consultants and monitor progress through structured communication and transparent reporting.",
  },
];

/* -------------------- Hero -------------------- */
const SAPConsultantsHero = () => {
  return (
    <section className="relative flex h-[500px] items-center justify-center gradient-hero text-white ">
      <div
        className="absolute h-80 w-full px-80 bg-cover bg-center opacity-30 max-w-6xl"
        style={{ backgroundImage: `url(${SAP_Image})` }}
      />
      <ScrollReveal>
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
            Hire SAP Consultants
          </h1>
          <p className="text-md lg:text-xl opacity-100 mb-8 max-w-6xl mx-auto">
            At Livik, we approach SAP S/4HANA as a business transformation
            initiative, not just a system move. Using SAP Activate, process
            expertise and intelligent tools across BTP, MDG and Business Data
            Cloud, we ensure a seamless journey through Greenfield, Brownfield,
            or Bluefield pathways. The result is a cloud-ready ERP foundation
            built for resilience, efficiency and growth.By aligning technology
            with your strategic objectives, we help unlock real-time insights,
            operational agility and long-term value from your SAP S/4HANA
            investment.
          </p>
          <a
            href="/contact"
            className="rounded-full bg-white px-6 py-2 text-lg font-semibold text-black"
          >
            Let’s Connect
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export function SapSkillset() {
  const technicalExpertise = [
    "Build and tailor SAP applications using ABAP, SAP Fiori and SAP UI5.",
    "Strong working knowledge across SAP S/4HANA, ECC, BW and CRM.",
    "Create, enhance and configure workflows, reports and core SAP business functionalities.",
    "Hands-on experience with SAP integrations such as IDocs, BAPIs, RFCs, SAP PI/PO and SAP CPI.",
    "Skilled in testing and troubleshooting using SAP Debugger, Code Inspector and Unit Testing tools.",
    "Modify and improve functional modules (MM, SD, FI, PP) to meet evolving business needs.",
    "Integrate SAP with external applications using APIs, CPI, PI/PO, BAPIs and IDocs.",
    "Perform accurate data migration using LSMW, BDC and SAP Data Services.",
    "Diagnose system issues, optimize performance and implement corrective solutions.",
    "Configure security roles, ensure compliance and support system monitoring.",
  ];

  const nonTechnicalExpertise = [
    "Collaborate with business analysts, consultants and project managers.",
    "Translate business requirements into clear technical specifications.",
    "Plan and manage project schedules, milestones and deliverables.",
    "Communicate technical concepts clearly and conduct end-user training.",
    "Evaluate business requirements and recommend effective SAP-based solutions.",
    "Create and maintain technical documentation, process diagrams and user guides.",
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Our SAP Developers Are Felxible
          </h2>
          <h2 className="text-lg md:text-2xl font-semibold mt-6 text-center">
            Technology Stack Expertise
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm sm:text-base mt-8">
            Our experienced SAP developers combine deep technical expertise with
            strong collaboration and communication skills to deliver reliable,
            scalable SAP solutions.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Technical Expertise */}
            <div className="gradient-hero rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white text-semibold mb-6 border-b border-orange-200 pb-2 text-center">
                Technical Expertise
              </h3>
              <ul className="space-y-4 text-sm sm:text-base text-white">
                {technicalExpertise.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="mt-2 w-3 h-3 rounded-full bg-black/60" />
                    <span className="transition-all duration-300 group-hover:bg-white/20 group-hover:scale-[1.02] group-hover:px-2 group-hover:rounded-md">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-Technical Expertise */}
            <div className="gradient-hero rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white text-semibold mb-6 border-b border-orange-200 pb-2 text-center">
                Non-Technical Expertise
              </h3>
              <ul className="space-y-4 text-sm sm:text-base text-white">
                {nonTechnicalExpertise.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="mt-2 w-3 h-3 rounded-full bg-black/60" />
                    <span className="transition-all duration-300 group-hover:bg-white/20 group-hover:scale-[1.02] group-hover:px-2 group-hover:rounded-md">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function WhyChooseUS() {
  const points = [
    {
      title: "Startup Origins with Proven SAP Experience",
      desc: "Our roots as a startup have shaped our flexible and results-driven approach. Over time, we’ve grown our SAP capabilities while maintaining the agility needed to solve complex business challenges.",
      icon: LineChart,
    },
    {
      title: "Deep SAP Expertise",
      desc: "Our team of certified consultants specializes across a wide range of SAP modules, including S/4HANA, Finance (FICO), PP, MM, SCM, ABAP, HCM, SD, SAP Analytics and OTC.",
      icon: UserCheck,
    },
    {
      title: "Extensive Global Network",
      desc: "Leverage our global pool of more than 50,000 pre-qualified SAP professionals to find the right expertise for your project needs.",
      icon: Globe,
    },
    {
      title: "Flexible, Tailored Solutions",
      desc: "We customize our approach based on your business goals and operational challenges, delivering SAP solutions that produce real, measurable results.",
      icon: Sliders,
    },
    {
      title: "Ongoing Partnership & Support",
      desc: "We support you beyond deployment, providing ongoing assistance and strategic insights to help you get the most from your SAP investment.",
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
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Why Choose  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Transforming ideas into powerful SAP solutions with clean code,
            seamless UX and long-term scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, desc, icon: Icon }, idx) => (
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

              <h3 className="mb-4 text-xl font-semibold text-gray-900">
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

export function SAPIndustries() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Domains We Expertise In
          </h2>
          <h4 className="text-md lg:text-lg leading-relaxed mb-4 text-center mt-8">
            Connecting Core Domains to Drive Smarter Solutions.
          </h4>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 text-sm sm:text-base">
            Bridge the technology gap between your business and client needs. We
            deliver customized SAP application development and services across
            diverse industries.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  className={`relative cursor-pointer rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300
        ${active === index ? "gradient-hero text-white scale-105 shadow-xl" : "bg-white shadow-md"}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full gradient-hero flex items-center justify-center text-white mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <p
                    className={`text-sm font-semibold tracking-wide
          ${active === index ? "text-white" : "text-gray-800"}`}
                  >
                    {item.name.toUpperCase()}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function HireSteps() {
  return (
    <section className="gradient-hero text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT — Sticky Title */}
        <div className="lg:sticky lg:top-32 h-fit">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hire SAP Consultants <br />
            with Livik <br />
          </h2>
        </div>

        {/* RIGHT — Scrollable Steps */}
        <div className="relative space-y-20">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/20" />

          {steps.map((item, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Step Circle */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white text-xl font-semibold text-black">
                {item.step}
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-white text-sm max-w-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import {
  FaCogs,
  FaChartLine,
  FaClock,
  FaDollarSign,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";
import { SiSap } from "react-icons/si";
import { motion } from "framer-motion";

const features = [
  {
    icon: SiSap,
    title: "Faster SAP Implementation",
    description:
      "Our SAP experts accelerate system implementation and upgrades, ensuring quicker go-live with minimal business disruption.",
  },
  {
    icon: FaChartLine,
    title: "Business Process Optimization",
    description:
      "SAP solutions streamline and integrate your core business processes, improving efficiency and decision-making across departments.",
  },
  {
    icon: FaClock,
    title: "Reduced Time to Value",
    description:
      "With SAP automation and best practices, organizations realize faster ROI and gain operational benefits in less time.",
  },
  {
    icon: FaDollarSign,
    title: "Cost Optimization",
    description:
      "Optimized SAP workflows reduce operational costs, eliminate redundancy and enhance long-term financial performance.",
  },
  {
    icon: FaEye,
    title: "Process Transparency",
    description:
      "SAP provides real-time visibility into business operations, ensuring accurate reporting, monitoring and compliance.",
  },
  {
    icon: FaShieldAlt,
    title: "Security & Reliability",
    description:
      "SAP systems ensure high availability, enterprise-grade security and data integrity for mission-critical operations.",
  },
];

export function SapFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Innovate SAP with Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade SAP solutions designed to improve efficiency,
            security and business performance.
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
                             bg-sky-700 text-white
                             transition-all duration-300
                             group-hover:bg-white group-hover:text-sky-700"
                >
                  <item.icon />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2
                "
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-all duration-300">
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
          domain-focused expertise to build SAP solutions that solve real
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
          Hire SAP Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with expert SAP consultants to build fast,
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
const SAPConsultants = () => {
  return (
    <>
      <SAPConsultantsHero />
      <WhyChooseUS />
      <SapSkillset />
      <SapFeaturesSection />
      {/*<SAPIndustries />*/}
      {/*<HireSteps /> */}
      <CrestIndustries />
      <HireProcessfinal />
    </>
  );
};
export default SAPConsultants;
