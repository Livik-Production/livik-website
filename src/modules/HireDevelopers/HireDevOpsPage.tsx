"use client";
/*
import Devops_image from "../../assets/Devops -png.png";
*/
const Devops_image = "";
import {
  Cog,
  Boxes,
  Code2,
  Cloud,
  Activity,
  ShieldCheck,
  ServerCrash,
  Network,
} from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { LifeBuoy } from "lucide-react";
import {
  Rocket,
  LineChart,
  Clock,
  DollarSign,
  Eye,
  Target,
  FileCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { ClipboardList, Users, MessageSquare } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const featuresCards = [
  {
    step: "01",
    gradient: "from-blue-500 to-cyan-400",
    icon: ClipboardList,
    title: "Share Your Requirements",
    description:
      "Submit your project details, technical needs and preferred engagement model.",
  },
  {
    step: "02",
    gradient: "from-blue-500 to-cyan-400",
    icon: Users,
    title: "Developer Shortlisting",
    description:
      "We analyze your requirements and handpick the most suitable DevOps developers from our in-house team.",
  },
  {
    step: "03",
    gradient: "from-blue-500 to-cyan-400",
    icon: MessageSquare,
    title: "Interview & Selection",
    description:
      "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
  },
  {
    step: "04",
    gradient: "from-blue-500 to-cyan-400",
    icon: Rocket,
    title: "Onboarding & Project Kickoff",
    description:
      "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 120, // 👉 start from RIGHT
  },
  visible: {
    opacity: 1,
    x: 0, // 👉 move to original position
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // type-safe
    },
  },
};

const benefits = [
  {
    title: "Easier and Faster Deployment",
    desc: "Outsourcing DevOps developers ensures faster and more frequent delivery of updates and features, helping your product reach end users efficiently.",
    icon: Rocket,
  },
  {
    title: "Business Optimization",
    desc: "DevOps enables organizations to optimize both software and operations through adaptive, data-driven processes aligned with business goals.",
    icon: LineChart,
  },
  {
    title: "Time to Value",
    desc: "DevOps accelerates the application lifecycle through automation and seamless workflows, delivering greater business value in less time.",
    icon: Clock,
  },
  {
    title: "Cost Savings",
    desc: "Automation and optimized workflows reduce development timelines, helping organizations significantly lower long-term operational costs.",
    icon: DollarSign,
  },
  {
    title: "Transparent Procedures",
    desc: "Clear DevOps processes enhance collaboration, communication and accountability across teams—boosting productivity and focus.",
    icon: Eye,
    highlight: true,
  },
  {
    title: "Reliability",
    desc: "CI/CD practices ensure consistent quality, rapid releases and stable infrastructure while delivering a seamless end-user experience.",
    icon: ShieldCheck,
  },
];

const expertise = [
  {
    title: "Strong Project Governance",
    desc: "Our expert project management ensures clear communication, milestone tracking, risk mitigation and smooth coordination throughout the development lifecycle.",
    icon: ClipboardCheck,
  },
  {
    title: "Quality-First Development",
    desc: "We follow clean, optimized and error-free coding standards, with rigorous testing practices to ensure performance, security and long-term reliability.",
    icon: BadgeCheck,
  },
  {
    title: "Agile & Client-Focused Approach",
    desc: "Our agile-driven development model enables flexibility, faster iterations and continuous feedback—resulting in solutions aligned with evolving business needs and high customer satisfaction.",
    icon: RefreshCcw,
  },
  {
    title: "Long-Term Support & Reliability",
    desc: "Beyond deployment, we provide ongoing technical support and maintenance, ensuring system stability, timely updates and sustained business value.",
    icon: LifeBuoy,
  },
];

const features = [
  {
    title: "Expertise in Automation & CI/CD",
    desc: "Livik’s DevOps engineers excel in modern automation tools such as Jenkins, GitLab CI/CD and Bamboo. We build streamlined, reliable CI/CD pipelines that accelerate releases, improve code quality and shorten development cycles without compromising stability.",
    icon: Cog,
  },
  {
    title: "Cloud Infrastructure Excellence",
    desc: "Our DevOps specialists bring deep expertise across AWS, Microsoft Azure and Google Cloud Platform. We architect, deploy and manage scalable, secure and cost-optimized cloud environments tailored to your business objectives.",
    icon: Cloud,
  },
  {
    title: "Containerization & Orchestration Mastery",
    desc: "With strong hands-on experience in Docker and Kubernetes, Livik engineers design and manage containerized microservices architectures. This ensures smooth deployments, elastic scalability and high availability across development, staging and production environments.",
    icon: Boxes,
  },
  {
    title: "Infrastructure as Code (IaC) Capabilities",
    desc: "Livik leverages Infrastructure as Code using Terraform, CloudFormation and Ansible to automate infrastructure provisioning and management. This approach guarantees consistency, version control and rapid environment replication with minimal manual effort.",
    icon: Code2,
  },
  {
    title: "Security-First DevOps Practices",
    desc: "Security is embedded throughout our DevOps lifecycle. We integrate tools like SonarQube, OWASP frameworks and automated vulnerability scanning to proactively identify risks and deliver secure, compliant deployments without slowing down delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Monitoring & Observability",
    desc: "Our engineers implement advanced monitoring and logging solutions using Prometheus, Grafana and the ELK Stack. This enables real-time performance tracking, faster issue resolution and optimized resource utilization for maximum uptime.",
    icon: Activity,
  },
  {
    title: "High Availability & Disaster Recovery",
    desc: "Livik designs resilient, fault-tolerant systems with automated failover and disaster recovery strategies. Our architectures ensure business continuity, even during traffic spikes, infrastructure failures, or unexpected outages.",
    icon: ServerCrash,
  },
  {
    title: "Scalable Microservices Architecture",
    desc: "We help enterprises modernize by transforming monolithic applications into scalable microservices. This approach improves flexibility, fault isolation and deployment speed—empowering teams to innovate faster and scale effortlessly.",
    icon: Network,
  },
];

const Herosection = () => {
  return (
    <section className="relative flex h-[400px] items-center justify-center gradient-hero text-white ">
      <div
        className="absolute h-80 w-100 px-80 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${Devops_image})` }}
      />

      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Hire DevOps Engineers
        </h1>
        <p className="text-md lg:text-xl opacity-100 mb-8 max-w-6xl mx-auto">
          Hire certified DevOps engineers from Livik to optimize CI/CD
          pipelines, automate cloud operations and scale infrastructure
          efficiently. With flexible hiring models—hourly, monthly, or
          full-time—we align the right expertise to your project needs and
          budget. Our DevOps specialists streamline delivery, strengthen
          security and ensure reliable, continuous software deployment across
          modern and existing systems.
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

export function DevOpsExcellence() {
  return (
    <section className="py-20 gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
            Our DevOps Engineers Are Flexible
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-center mt-4">
            Technology Stack Expertise
          </h2>
          <p className="text-center text-gray-200 max-w-4xl mx-auto mt-4">
            Our DevOps engineers adapt seamlessly to your project requirements,
            working across a wide range of cloud platforms, automation tools,
            CI/CD pipelines and monitoring technologies to build reliable,
            scalable and secure infrastructure solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {features.map(({ title, desc, icon: Icon }, idx) => (
              <div
                key={idx}
                className="border border-white/20 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white gradient-hero" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{title}</h4>
                <p className="text-sm text-gray-200 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function DevOpsExpertise() {
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
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Automate and scale your business processes with Livik’s DevOps
            professionals—from consulting and development to deployment and
            operations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-2 place-items-center">
          {expertise.map(({ title, desc, icon: Icon }, idx) => (
            <div
              key={idx}
              className="
                w-full max-w-xl
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

export function WhyHireDevOps() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Innovate DevOps with Our Team
          </h2>
          <p className="mt-4 text-sm md:text-base text-center">
            Crafting modern, fast and user-focused DevOps applications to power
            your business growth.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {benefits.map(({ title, desc, icon: Icon }, index) => (
              <div
                key={index}
                className="group rounded-xl p-8 border border-gray-200 bg-white
                         hover:bg-sky-700 transition-all duration-200 ease-in-out hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 rounded-md
                           bg-blue-50 transition
                           group-hover:bg-white/20"
                >
                  <Icon className="w-6 h-6 text-black group-hover:text-white transition" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-white transition">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 group-hover:text-blue-100 transition">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
export function FeatureCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <ScrollReveal>
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Hire DevOps Engineers with Livik
        </h2>
        <p className="mb-12 py-10 text-black text-center">
          Empowering businesses with top DevOps developers for modern,
          high-impact web experiences.
        </p>
        {/* <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 },
                    },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {featuresCards.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" },
                            },
                        }}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        className=" rounded-2xl border  p-8 shadow-sm hover:shadow-lg border-gray-200 bg-white 
                          duration-300 ease-in-out
                         hover:gradient-hero transition-all"
                    >
                        <div className="flex items-center gap-4 mb-6 bg-blue-50 transition
                           group-hover:bg-white/20">
                            <div
                                className={`w-10 h-10 mb-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white hover:text-black hover:bg-white transition text-sm font-semibold shadow-md`}
                            >
                                {item.step}
                            </div>


                            <motion.div
                                whileHover={{ rotate: 6, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mt-16"
                            >
                                <item.icon className="w-6 h-6 text-black" />
                            </motion.div>
                        </div>


                        <h3 className="text-lg font-semibold mb-3  text-gray-900 group-hover:text-white transition ">
                            {item.title}
                        </h3>
                        <p className=" text-sm leading-relaxed  text-gray-900 group-hover:text-white transition">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div> */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuresCards.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.2, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -8 }}
              className="
        group rounded-2xl border border-gray-200 bg-white p-8
        transition-all duration-300 ease-in-out
        hover:gradient-hero hover:shadow-xl
      "
            >
              {/* ICON ROW */}
              <div className="flex flex-col gap-3 mb-6">
                {/* STEP */}
                <div
                  className={`w-10 h-10 rounded-full gradient-hero
    flex items-center justify-center text-white text-sm font-semibold
    shadow-md transition-all duration-300
    group-hover:bg-white group-hover:bg-none group-hover:text-black
  `}
                >
                  {item.step}
                </div>
                <div className="w-full flex justify-center">
                  {/* ICON */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 0.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="
            w-12 h-12 rounded-xl bg-blue-50
            flex items-center justify-center
            transition-colors
            group-hover:bg-white/20
          "
                  >
                    <item.icon
                      className="
              w-6 h-6 text-blue-600
              transition-colors
              group-hover:text-white
            "
                    />
                  </motion.div>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-white transition">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-blue-100 transition">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </ScrollReveal>
    </div>
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
  ShoppingBag,
} from "lucide-react";
// UNIQUE CONCEPT: ROYAL CREST GALLERY
// Each industry is treated like a luxury emblem / seal

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
          domain-focused expertise to build DevOps solutions that solve real
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

export function DevOpsExcellence001() {
  return (
    <section className="relative py-24 gradient-hero text-white overflow-hidden">
      {/* soft light flares */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              DevOps Engineering Excellence
            </h1>
            <h2 className="text-lg md:text-xl mt-4 text-white/90">
              A Modern, Secure & Scalable Infrastructure Approach
            </h2>
            <p className="text-gray-200 mt-6">
              Our DevOps engineers combine automation, cloud expertise, security
              and observability to build high-performing infrastructure
              ecosystems that power enterprise-grade applications.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map(({ title, desc, icon: Icon }, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/40 via-indigo-400/40 to-cyan-400/40"
              >
                {/* inner glass card */}
                <div
                  className="h-full rounded-2xl bg-white/10 backdrop-blur-xl 
                             px-6 py-8 transition-all duration-500
                             group-hover:bg-white/20"
                >
                  {/* icon badge */}
                  <div
                    className="mb-5 w-14 h-14 rounded-xl 
                               bg-gradient-to-br from-indigo-500 to-cyan-500
                               flex items-center justify-center shadow-lg"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-lg font-semibold mb-3">{title}</h4>

                  <p className="text-sm text-gray-200 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function DevOpsExcellence002() {
  return (
    <section className="relative py-24 gradient-hero text-white overflow-hidden">
      {/* grid overlay for technical feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                DevOps Infrastructure Excellence
              </h1>
              <p className="text-gray-200 mt-6 text-lg">
                We engineer high-performance DevOps ecosystems that combine
                automation, cloud architecture, security and observability into
                a unified operational model.
              </p>
            </div>

            {/* Right Accent Panel */}
            <div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-8">
              <p className="text-sm text-gray-300 uppercase tracking-widest">
                Our Approach
              </p>
              <p className="text-xl font-semibold mt-3">
                Automation. Reliability. Security. Scale.
              </p>
              <div className="mt-6 h-1 w-24 bg-gradient-to-r from-indigo-400 to-cyan-400" />
            </div>
          </div>

          {/* Control Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20">
            {features.map(({ title, desc, icon: Icon }, idx) => (
              <div
                key={idx}
                className="group bg-black/40 p-8 transition hover:bg-black/60"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg 
                                  bg-gradient-to-br from-indigo-500 to-cyan-500
                                  flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm tracking-wide">
                    {title}
                  </h4>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function DevOpsExcellence003() {
  return (
    <section className="relative py-28 gradient-hero text-white overflow-hidden">
      {/* blueprint lines */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          {/* Header */}
          <div className="max-w-4xl mb-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              DevOps Engineering Blueprint
            </h1>
            <p className="text-gray-200 mt-6 text-lg">
              A structured framework that defines how we design, automate,
              secure and scale enterprise infrastructure with precision and
              reliability.
            </p>
          </div>

          {/* Blueprint Flow */}
          <div className="space-y-12">
            {features.map(({ title, desc, icon: Icon }, idx) => (
              <div key={idx} className="relative pl-16">
                {/* Connector line */}
                <span className="absolute left-6 top-0 h-full w-px bg-white/30" />

                {/* Node */}
                <div className="absolute left-0 top-1">
                  <div
                    className="w-12 h-12 rounded-full 
                               bg-gradient-to-br from-indigo-500 to-cyan-500
                               flex items-center justify-center shadow-lg"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className="rounded-xl border border-white/20 
                             bg-white/5 backdrop-blur-md p-6
                             hover:bg-white/10 transition"
                >
                  <h4 className="text-lg font-semibold mb-2">{title}</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function DevOpsExcellence004() {
  return (
    <section className="relative py-24 gradient-hero text-white overflow-hidden">
      {/* soft overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              DevOps Engineering Capabilities
            </h1>
            <p className="text-gray-200 mt-6 max-w-3xl text-lg">
              Our DevOps practice is structured as a continuous delivery
              pipeline where automation, cloud, security and observability
              operate as tightly integrated engineering layers.
            </p>
          </div>

          {/* Ribbon Stack */}
          <div className="space-y-6">
            {features.map(({ title, desc, icon: Icon }, idx) => (
              <div
                key={idx}
                className="group relative flex items-center gap-6 
                           rounded-xl overflow-hidden
                           border border-white/20
                           bg-white/5 backdrop-blur-md
                           hover:bg-white/10 transition"
              >
                {/* Left Ribbon Strip */}
                <div
                  className="w-20 min-h-full bg-gradient-to-b from-indigo-500 to-cyan-500 
                                flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="py-6 pr-6">
                  <h4 className="text-lg font-semibold mb-2">{title}</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Right Accent */}
                <div
                  className="absolute right-0 top-0 h-full w-1 
                                bg-gradient-to-b from-transparent via-white/40 to-transparent 
                                opacity-0 group-hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function DevOpsExcellence005() {
  return (
    <section className="relative py-24 gradient-hero text-white overflow-hidden">
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
              Our DevOps Engineers Are Flexible
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-center mt-4">
              Technology Stack Expertise
            </h2>
            <p className="text-center text-gray-200 max-w-4xl mx-auto mt-4">
              Our DevOps engineers adapt seamlessly to your project
              requirements, working across a wide range of cloud platforms,
              automation tools, CI/CD pipelines and monitoring technologies to
              build reliable, scalable and secure infrastructure solutions.
            </p>
          </div>

          {/* Ledger Layout */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Index Column */}
            <div className="space-y-4">
              {features.map(({ title }, idx) => (
                <div
                  key={idx}
                  className="px-5 py-4 border border-white/20 rounded-lg 
                             bg-white/5 backdrop-blur-sm
                             hover:bg-white/10 transition cursor-pointer"
                >
                  <p className="text-sm font-semibold tracking-wide">
                    {String(idx + 1).padStart(2, "0")} — {title}
                  </p>
                </div>
              ))}
            </div>

            {/* Detail Column */}
            <div className="lg:col-span-2 space-y-6">
              {features.map(({ title, desc, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="group relative border border-white/20 rounded-xl 
                             bg-black/30 backdrop-blur-md p-8"
                >
                  {/* header row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg 
                                    gradient-hero
                                    flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold">{title}</h4>
                  </div>

                  {/* content */}
                  <p className="text-gray-200 leading-relaxed">{desc}</p>

                  {/* divider accent */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
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
          Hire DevOps Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with expert DevOps Engineers to build fast,
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
export default function Devopsengineer() {
  return (
    <>
      <Herosection />
      <DevOpsExpertise />
      <DevOpsExcellence005 />
      {/* <DevOpsExcellence /> */}
      <WhyHireDevOps />
      <CrestIndustries />
      {/*<FeatureCards /> */}
      <HireProcessfinal />
    </>
  );
}
