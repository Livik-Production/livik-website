"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
/*
import Java_img from "../../assets/Java Logo.png";
*/
const Java_img = "";
import {
  ShieldCheck,
  Globe,
  Lock,
  Users,
  Server,
  Layers,
  Rocket,
  ClipboardCheck,
  UserCheck,
  Handshake,
  FileCheck,
  HeartPulse,
  ShoppingBag,
  Target,
} from "lucide-react";

const steps = [
  {
    title: "Share your requirements",
    description:
      "Tell us what you need and we’ll align the right Java expertise with your goals.",
    icon: ClipboardCheck,
  },
  {
    title: "We shortlist the most suitable talent",
    description:
      "Get pre-vetted Java developers matched precisely to your technical needs.",
    icon: Users,
  },
  {
    title: "Select the right fit for your business",
    description:
      "Interview, evaluate and choose the developer who fits your team best.",
    icon: UserCheck,
  },
  {
    title: "Remote onboarding and support",
    description:
      "Start quickly with smooth onboarding and continuous remote support.",
    icon: Handshake,
  },
];

const reasons = [
  {
    title: "Experienced Java Experts",
    description:
      "Our developers have deep expertise across modern Java frameworks, enterprise systems and cloud-ready architectures.",
  },
  {
    title: "Scalable & Secure Solutions",
    description:
      "We build applications designed to scale seamlessly while meeting the highest security standards.",
  },
  {
    title: "Fast Hiring & Flexible Engagement",
    description:
      "Quickly onboard dedicated Java developers with flexible hiring models that fit your project scope and budget.",
  },
  {
    title: "Quality-Driven Development",
    description:
      "From clean code to rigorous testing, quality is built into every stage of our development process.",
  },
  {
    title: "Transparent Communication",
    description:
      "Stay in control with regular updates, clear timelines and seamless collaboration.",
  },
  {
    title: "End-to-End Support",
    description:
      "From planning and development to deployment and maintenance, we support you at every step.",
  },
];

const expertiseData = [
  {
    label: "Framework",
    values: [
      "Spring",
      "Hibernate",
      "JPA",
      "Grails",
      "Weld",
      "Play",
      "JSF",
      "JavaFX",
    ],
  },
  {
    label: "Architecture",
    values: ["Monolithic", "Micro-services", "SOA"],
  },
  {
    label: "Libraries",
    values: [
      "Standard Libraries",
      "JHipster",
      "Apache Commons",
      "Gson",
      "Jackson",
      "JAXB",
      "Log4j",
      "Stripe",
    ],
  },
  {
    label: "Programming Language",
    values: ["Core Java", "J2EE"],
  },
  {
    label: "Tools & Utilities",
    values: [
      "Apache ANT",
      "Apache JMeter",
      "JRat",
      "Apache Maven",
      "Gradle",
      "Postman",
    ],
  },
  {
    label: "Testing Frameworks",
    values: ["JUnit", "Mockito", "AssertJ"],
  },
  {
    label: "IDEs",
    values: ["Eclipse", "IntelliJ IDEA", "NetBeans", "STS"],
  },
  {
    label: "Front-end Technologies",
    values: ["Angular", "React", "jQuery", "HTML5", "CSS", "JSP", "JSTL"],
  },
  {
    label: "Servers",
    values: [
      "GlassFish",
      "WebLogic",
      "WebSphere",
      "JBoss",
      "Tomcat",
      "Geronimo",
      "WildFly",
    ],
  },
  {
    label: "Databases",
    values: [
      "SQLAlchemy",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "DynamoDB",
      "Oracle",
    ],
  },
  {
    label: "Event Processing",
    values: ["JMS", "RabbitMQ", "Apache Kafka", "Logstash"],
  },
  {
    label: "Cloud",
    values: ["AWS", "Digital Ocean", "Google Cloud", "Azure", "RackSpace"],
  },
  {
    label: "Deployment Process",
    values: ["Jenkins", "Docker", "Kubernetes"],
  },
  {
    label: "Monitoring",
    values: ["Kibana", "Prometheus"],
  },
];

const trustPoints = [
  {
    title: "Reliable & High-Performance Solutions",
    description:
      "Ensures reliable, scalable and high-performance software solutions tailored to business needs.",
    icon: Server,
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "Leverages Java’s platform-independent nature, allowing applications to run across multiple environments seamlessly.",
    icon: Globe,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Gains access to strong built-in security features, ideal for industries requiring strict data protection.",
    icon: Lock,
  },
  {
    title: "Strong Developer Community",
    description:
      "Benefits from Java’s large developer community, offering extensive support, resources, frameworks and tools.",
    icon: Users,
  },
  {
    title: "Built for Enterprise Scale",
    description:
      "Supports enterprise-level applications capable of handling complex, high-volume workloads.",
    icon: ShieldCheck,
  },
  {
    title: "Rich Framework Ecosystem",
    description:
      "Utilizes a rich ecosystem of powerful libraries and frameworks that accelerate development and enhance functionality.",
    icon: Layers,
  },
];

const capabilities = [
  {
    title: "High Performance with Cross-Platform Compatibility",
    description:
      "Java applications run smoothly across different platforms without modification. Its “write once, run anywhere” capability ensures consistent performance while reducing development and deployment effort.",
  },
  {
    title: "Enterprise-Level Advantages of Java",
    description:
      "Powered by the Java Virtual Machine (JVM), Java delivers optimized performance, strong security and efficient memory management, making it ideal for complex and enterprise-grade applications.",
  },
  {
    title: "Scalable and High-Performance Applications",
    description:
      "With a rich ecosystem of frameworks and libraries, Java supports the development of robust, high-performance applications that can scale seamlessly as user demand grows.",
  },
  {
    title: "Built for Enterprise Scalability",
    description:
      "Java is designed to support large-scale systems with high reliability and flexibility. Its architecture allows businesses to scale applications efficiently while maintaining long-term stability.",
  },
];

/* -------------------- Hero -------------------- */
const Herosection = () => {
  return (
    <section className="relative flex h-[500px] items-center justify-center gradient-hero text-white ">
      <div
        className="absolute h-80 w-80 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${Java_img})` }}
      />

      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Hire Java Developers
        </h1>
        <p className="text-md lg:text-xl opacity-90 mb-8 max-w-6xl mx-auto">
          At Livik, we specialize in offshore Java development, delivering
          secure, scalable and high-performance web applications that turn your
          ideas into smart, intuitive software. With expertise across all Java
          versions up to Java 22, we provide end-to-end development support to
          bring your vision to life seamlessly. Our dedicated Java developers
          follow best practices to ensure clean code, robust architecture and
          long-term maintainability. We partner closely with you to deliver
          reliable solutions that align with your business goals and accelerate
          digital growth.
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

/* Capabilities */

const CapabilitiesSection = () => {
  return (
    <section className="section-padding bg-white py-20">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Why We Use Java for Software Development
          </h2>
          <p className="mt-4 text-sm md:text-base text-center mb-8">
            Java empowers us to create robust, secure and future-ready software
            solutions.
          </p>
        </ScrollReveal>

        <StaggerContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <StaggerItem key={capability.title}>
                <SpotlightCard>
                  <Card className="metallic-card min-h-[160px] py-3 h-full border-2 shadow-lg hover:shadow-elegant transition-all">
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-lg lg:text-xl text-center">
                        {capability.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-center">
                        {capability.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Innovate Java With Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Building secure, scalable and enterprise-ready solutions with proven
            technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((item, index) => {
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

export function BlueBackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2f7ac7] flex items-center justify-center px-4">
      {/* Left abstract shape */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#3f8edb] opacity-60" />

      {/* Bottom-left shape */}
      <div className="absolute left-20 bottom-[-200px] h-[450px] w-[450px] rounded-full bg-[#4fa1e3] opacity-50" />

      {/* Right abstract wave */}
      <div className="absolute -right-52 top-0 h-[600px] w-[600px] rounded-full bg-[#6aaee9] opacity-70" />

      {/* Content Card */}
      <div className="relative z-10 w-100 max-w-5xl rounded-2xl bg-white p-8 shadow-2xl">
        {children}
        {/* Heading */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Technical Expertise of Our Java Developers
            </h1>

            {/* Description */}
            <p className="max-w-4xl mx-auto text-gray-600 mb-16 leading-relaxed">
              Hire Java developers in India from our team to get professionals
              skilled in Java-based web apps, mobile solutions, API development,
              and cloud integration, delivering user-friendly and
              performance-driven results.
            </p>

            {/* Java Development Expertise */}
            <h3 className="text-xl font-semibold text-blue-600 mb-8">
              Java Development Expertise
            </h3>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium border-b pb-4 mb-12">
              {[
                "Frameworks",
                "CMS",
                "eCommerce",
                "Front-end",
                "Database",
                "Version Control",
                "Cloud & DevOps",
                "APIs",
                "Testing",
                "Editor",
              ].map((tab, index) => (
                <span
                  key={index}
                  className={`cursor-pointer ${tab === "Frameworks"
                      ? "text-black border-b-2 border-blue-600 pb-2"
                      : "text-gray-500 hover:text-black"
                    }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Framework Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {["Spring", "Spring Boot", "Hibernate", "Struts", "JSF"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-800"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            {/* Design & Project Management Tools */}
            <h3 className="text-xl font-semibold text-blue-600 mb-8">
              Design & Project Management Tools
            </h3>

            {/* Sub Tabs */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium border-b pb-4 mb-12">
              {[
                "Designer Tools",
                "Communication Tools",
                "Meeting Tools",
                "Project Management",
              ].map((tab, index) => (
                <span
                  key={index}
                  className={`cursor-pointer ${tab === "Designer Tools"
                      ? "text-black border-b-2 border-blue-600 pb-2"
                      : "text-gray-500 hover:text-black"
                    }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Tool Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {["Figma", "Adobe XD", "Sketch"].map((tool, index) => (
                <span
                  key={index}
                  className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function JavaTechnicalExpertiseTable() {
  return (
    <section className="py-20 px-6 bg-[#004475] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
            Our Java Developers Are Flexible
          </h1>
          <div className="w-20 h-1 bg-white/30 mx-auto rounded mt-2"></div>
          <h2 className="text-lg md:text-2xl font-semibold mt-6 text-white/90">
            Technology Stack Expertise
          </h2>
        </div>
        <p className="max-w-4xl mx-auto text-white/80 mb-16 leading-relaxed text-center">
          Our Java developers adapt seamlessly to your project requirements,
          leveraging robust frameworks, modern tools and proven development
          practices to build secure, reliable and highly scalable
          enterprise-grade applications.
        </p>
        {/* Expertise Rows */}
        <div className="space-y-3">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] border border-white/10 rounded overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Left Label */}
              <div className="bg-white/10 backdrop-blur-sm text-white font-semibold px-4 py-3 text-sm flex items-center">
                {item.label}
              </div>

              {/* Right Content */}
              <div className="bg-white/5 backdrop-blur-md px-4 py-3 text-md text-white/90">
                {item.values.join(" | ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WhyChooseJava = () => {
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
            We deliver reliable, scalable and secure Java solutions tailored to
            your business needs. Our proven development process helps you build
            high-performance applications faster and more efficiently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
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
                hover:border-blue-500
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
              "
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ClipboardList } from "lucide-react";

export function HireJavaDeveloperAlt() {
  const steps = [
    {
      step: "01",
      title: "Share your requirements",
      description:
        "Submit your project details, technical needs and preferred engagement model.",
      icon: ClipboardList,
    },
    {
      step: "02",
      title: "Developer Shortlisting",
      description:
        "We analyze your requirements and handpick the most suitable ReactJS developers from our in-house team.",
      icon: Users,
    },
    {
      step: "03",
      title: "Interview & Selection",
      description:
        "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
      icon: UserCheck,
    },
    {
      step: "04",
      title: "Onboarding & Project Kickoff",
      description:
        "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
      icon: Handshake,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Hire Java Developers with Livik
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            We follow a proven and transparent hiring process to ensure you get
            highly skilled, communication-ready Java developers for your team.
          </p>
        </div>

        {/* Timeline Style Boxes */}
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-sm border hover:shadow-md transition"
              >
                {/* Step Number */}
                <span className="absolute -top-4 left-6 gradient-hero text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {item.step}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center  justify-center rounded-3xl gradient-hero text-white group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
  Store,
  Landmark,
  Hospital,
  Home,
  Plane,
  Utensils,
  Factory,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { title: "Supply Chain", icon: Truck },
  { title: "Education", icon: GraduationCap },
  { title: "E-Commerce", icon: ShoppingCart },
  { title: "Retail", icon: Store },
  { title: "Finance", icon: Landmark },
  { title: "Healthcare", icon: Hospital },
  { title: "Real Estate", icon: Home },
  { title: "Tour & Travels", icon: Plane },
  { title: "Hotel & Restaurant", icon: Utensils },
  { title: "Manufacturing", icon: Factory },
];

export function IndustriesWeServe() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Domains We Expertise In
        </h2>

        <h4 className="text-md lg:text-lg leading-relaxed mb-4 text-center mt-4">
          Connecting Core Domains to Drive Smarter Solutions.
        </h4>

        <p className="text-md lg:text-lg leading-relaxed mb-16 text-center">
          We bring domain-focused expertise to build Java solutions that solve
          real business challenges across multiple industries.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-[1px]
           bg-gradient-to-br
           from-white/60 via-blue-200/50 to-slate-300/60
           hover:from-white hover:via-blue-400/60 hover:to-slate-400/70
           transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              {/* Card */}
              <div
                className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl
                           px-8 py-10 text-center
                           transition-all duration-500
                           group-hover:-translate-y-2 group-hover:shadow-2xl"
              >
                {/* Icon Halo */}
                <div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center
                             rounded-2xl bg-blue-50
                             transition-all duration-500
                             group-hover:gradient-hero"
                >
                  <item.icon
                    className="h-8 w-8 text-black
                               transition-all duration-500
                               group-hover:text-white group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Domainexpertise = [
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
          domain-focused expertise to build Java solutions that solve real
          business challenges across multiple industries.
        </motion.p>

        {/* CREST GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-14 gap-y-20">
          {Domainexpertise.map((item, idx) => (
            <motion.div
              key={idx}
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
          Hire Java Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
          Empowering businesses with top Java developers for modern, high-impact
          web experiences.
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
export default function Javadeveloper() {
  return (
    <>
      <Herosection />
      <WhyChooseJava />
      {/*<CapabilitiesSection /> */}
      {/* <BlueBackgroundLayout children={undefined} /> */}
      <JavaTechnicalExpertiseTable />
      <TrustSection />
      {/*<IndustriesWeServe /> */}
      {/*<HireJavaDeveloperAlt/> */}
      <CrestIndustries />
      <HireProcessfinal />
    </>
  );
}
