"use client";
/*
import REACT_Image from "../../assets/React-png.png";
*/
const REACT_Image = "";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  Home,
  Plane,
  Hotel,
  Hospital,
  Factory,
  ShoppingBag,
  Diamond,
  GraduationCap,
  Shirt,
  ShoppingCart,
  Rocket,
  Scale,
  Utensils,
  User,
  Gem,
  HeartPulse,
  Landmark,
  FileCheck,
  Target,
} from "lucide-react";
import {
  ArrowRight,
  Banknote,
  BookOpenText,
  Clock,
  Code2,
  Globe,
  Heart,
  Headset,
  MonitorSmartphone,
  Users,
  Truck,
} from "lucide-react";

/*
import Reactimage from "../../assets/cloud-migration.jpg";
import ReactHire from "../../assets//ecommerce-tech.jpg";
*/
const Reactimage = "";
const ReactHire = "";
import { Description } from "@radix-ui/react-toast";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Custom Business Web Applications",
    description:
      "Our ReactJS developers build secure, scalable and high-performance web applications tailored to your unique business goals and workflows.",
    icon: Gem,
  },
  {
    title: "SaaS-Based Product Development",
    description:
      "We design and develop SaaS applications that are flexible, cloud-ready and built to scale—helping you launch faster and grow smarter.",
    icon: Rocket,
  },
  {
    title: "Legacy Application Modernization",
    description:
      "Upgrade outdated systems with modern ReactJS solutions. We help modernize, enhance and maintain legacy applications using the latest industry standards.",
    icon: Scale,
  },
  {
    title: "Responsive & User-Centric Interfaces",
    description:
      "We create fully responsive web applications with intuitive designs and smooth user experiences that work seamlessly across all devices.",
    icon: MonitorSmartphone,
  },
];

export const benefits = [
  {
    title: "Skilled React Engineers",
    description:
      "Our experienced React developers bring strong technical expertise and real-world project knowledge to every engagement.",
    icon: Code2,
  },
  {
    title: "Clean & Responsive Interfaces",
    description:
      "We create fast, modern and user-friendly interfaces that deliver smooth performance across all devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Reliable & Timely Delivery",
    description:
      "We follow structured workflows to ensure your project milestones are met on time—without compromising quality.",
    icon: Clock,
  },
  {
    title: "24/7 Support & Assistance",
    description:
      "Our team is available around the clock to support your project, regardless of location or time zone.",
    icon: Headset,
  },
  {
    title: "Customer-First Approach",
    description:
      "Your goals come first. We work closely with you to deliver solutions that truly add business value.",
    icon: Heart,
  },
  {
    title: "Flexible Hiring & Engagement Models",
    description:
      "Hire React developers your way—dedicated teams, hourly resources, or fixed-price projects.",
    icon: Users,
  },
];
const stepsToHire = [
  {
    title: "Share Your Requirements",
    description:
      "Submit your project details, technical needs and preferred engagement model.",
    step: 1,
  },
  {
    title: "Developer Shortlisting",
    description:
      "We analyze your requirements and handpick the most suitable ReactJS developers from our in-house team.",
    step: 2,
  },
  {
    title: "Interview & Selection",
    description:
      "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
    step: 3,
  },
  {
    title: "Onboarding & Project Kickoff",
    description:
      "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
    step: 4,
  },
];
const skills = [
  {
    title: "Proven ReactJS Expertise",
    description:
      " Our developers have extensive hands-on experience with ReactJS and modern frontend frameworks.",
  },
  {
    title: "Clean & Optimized Code Practices",
    description:
      "We prioritize writing reusable, maintainable and performance-optimized code for long-term scalability.",
  },
  {
    title: "Responsive & Cross-Browser Development",
    description:
      "Every application is built to work seamlessly across devices, screen sizes and browsers.",
  },
  {
    title: "Strong Foundation in Modern JavaScript",
    description:
      "Our engineers are proficient in component-based architecture and ES6+ JavaScript concepts.",
  },
  {
    title: "Experience with SPAs & Real-Time Applications",
    description:
      "We build fast, dynamic single-page applications and real-time solutions that deliver smooth user experiences.",
  },
  {
    title: "UI/UX-Focused Development Mindset",
    description:
      "Our developers understand modern design principles to create visually appealing, intuitive and user-friendly interfaces.",
  },
];

const categories = [
  {
    title: " State Management & Libraries",
    description:
      "We use proven React libraries to manage application state, real-time communication and performance optimization.",
    skills: ["Redux", "Zustand", "Velocity.js", "Canvas", "KendoReact"],
  },
  {
    title: "UI Libraries & Component Frameworks",
    description:
      "We design clean, responsive and consistent user interfaces using industry-leading UI frameworks.",
    skills: [
      "Material kit",
      "AntDesign",
      "React-bootstrap",
      "Semantic UI",
      "PrimeReact",
      "Blueprint",
      "ReactStrap",
      "React Foundation",
    ],
  },
  {
    title: "Frameworks & Integrations",
    description:
      "Our developers integrate React with modern frontend and backend frameworks based on your product needs.",
    skills: [
      // "Next.js",
      // "Gatsby",
      // "Meteor.js",
      // "Express.js",
      // "Spring Boot",
      // "Wordpress",
      // "Drupal",
      // "SOAP APIs"
      "React.js",
      "Gatsby",
      "Vite",
      "Webpack",
      "REST APIs",
      "GraphQL",
      "Firebase",
    ],
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We follow best testing practices to ensure stable, secure and bug-free applications.",
    skills: [
      "Jest",
      "Enzyme",
      "Testing Library",
      // "Mocha",
      // "Chai",
      // "Jasmine",
      // "Karma",
      // "Protractor",
    ],
  },
];
const reactIntro = [
  {
    title: "What are the Benefits of ReactJS",
    description:
      "React.js offers pre-built, reusable components that minimize repetitive coding when creating dynamic UI elements. For rich, interactive web applications, it shortens development time and lowers the chances of bugs. With its Virtual DOM optimization, React updates the interface quickly in response to user interactions, resulting in improved performance and a seamless user experience.",
  },
  {
    title: "ReactJS is SEO - friendly?",
    description:
      "React-based sites that use client-side rendering can face SEO issues because Googlebot must execute JavaScript before it can read the content. If rendering consumes too many resources, Google may only index a portion of the page. Implementing pre-rendering or server-side rendering ensures that crawlers receive fully rendered content instantly, improving indexing reliability. Check out our React SEO guide for more information.",
  },
  {
    title: "Conduct Interviews",
    description:
      "Evaluate the shortlisted developers through interviews to assess their technical capabilities and overall project alignment.",
  },
  {
    title: "24/7 Support & Assistance",
    description:
      "Our team is always available to help, no matter the time zone.",
  },
];

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

export default function ReactDeveloper() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding gradient-hero text-white py-20 relative overflow-hidden">
        <div className="relative container-custom text-center z-10">
          <ScrollReveal>
            {/* Background Image */}
            <div
              className="absolute inset-0 mx-auto h-80 w-full max-w-3xl bg-cover bg-center opacity-20 rounded-2xl pointer-events-none"
              style={{ backgroundImage: `url(${REACT_Image})` }}
            />

            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
              Hire ReactJS Developers
            </h1>

            <p className="text-md lg:text-xl opacity-100 mb-8 max-w-6xl mx-auto relative z-10">
              Hire skilled ReactJS developers from Livik to build fast, scalable
              and user-friendly web and mobile applications. We specialize in
              creating dynamic user interfaces, high-performance single-page
              applications and seamless React solutions tailored to your
              business needs. Whether you're a startup or an enterprise, our
              React experts use modern development practices and proven
              architectures to deliver secure, reliable and future-ready digital
              products that enhance user experience, support growth and drive
              measurable results.
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

      {/* Why Choose Us */}
      <section className="relative bg-gray-100 py-20 overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[50%]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Us
              </span>
            </h2>

            <p className="text-gray-600 text-base max-w-3xl mx-auto">
              Livik provides expert React developers to build scalable, secure,
              and high-performance solutions with flexible engagement models,
              agile delivery and long-term reliability.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {capabilities.map(({ title, description, icon: Icon }, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-8
                transition-all duration-300
                hover:border-blue-500
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                     "
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-full
                       bg-sky-700 text-white
                       transition-all duration-300
                       group-hover:bg-white group-hover:text-sky-700"
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-xl font-semibold text-gray-900
                       transition-colors duration-300
                       group-hover:text-white"
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 leading-relaxed
                       transition-colors duration-300
                       group-hover:text-sky-100"
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-hero text-white py-20">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Our React JS Developers Are Flexible
            </h1>

            <h2 className="text-lg md:text-2xl font-semibold mt-6 text-center">
              Technology Stack Expertise
            </h2>

            <p className="mt-4 text-sm md:text-base text-center">
              Our ReactJS developers adapt seamlessly to your project
              requirements, working across a wide range of modern libraries,
              frameworks and tools to build reliable and scalable applications.
            </p>

            <div className="relative mt-8 md:mt-12 pl-10 space-y-12">
              {/* TIMELINE LINE */}
              <span className="absolute left-4 top-0 h-full border-l-[3px] border-dashed border-white-100/60"></span>

              {categories.map((cat) => (
                <div key={cat.title} className="relative">
                  {/* DOT — PERFECTLY CENTERED */}
                  <span className="absolute -left-8 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/30">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-700"></span>
                  </span>

                  {/* CONTENT */}
                  <div className="text-left">
                    <h2 className="text-lg md:text-xl font-semibold">
                      {cat.title}
                    </h2>

                    <p className="mt-1 mb-4 text-sm md:text-base text-slate-200 opacity-90">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-slate-100 backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Innovate ReactJS With Our Team
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Delivering reliable, scalable and future-ready React.js solutions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:bg-[#0A6AA1] hover:shadow-xl"
                >
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

      {/* Our React JS Developers Are Flexible
       */}
      {/* <section className="section-padding gradient-hero text-white py-20">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Our React JS Developers Are Flexible
            </h1>

            <h2 className="text-lg md:text-2xl font-semibold mt-6">
              Technology Stack Expertise
            </h2>

            <p className="mt-4 text-sm md:text-base text-left">
              Our ReactJS developers adapt seamlessly to your project requirements,
              working across a wide range of modern libraries, frameworks and tools
              to build reliable and scalable applications.
            </p>

            <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">
              {categories.map((cat) => (
                <div key={cat.title}>
                  
                  <h2 className="text-lg md:text-xl font-semibold mb-2 text-left">
                    {cat.title}
                  </h2>
                  
                  <p className=" mx-auto mb-4 text-sm md:text-base text-slate-200 opacity-90 text-left">
                    {cat.description}
                  </p>

                  
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-slate-100 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section> */}
      {/* Domains We Expertise In */}

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
            domain-focused expertise to build ReactJS solutions that solve real
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

     <section className="py-18 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Hire React Developers with{" "}
           <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>
        </h2>
        <p className="mb-8 py-4 text-black text-center">
            Empowering businesses with expert React.js developers to build fast,
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
    </div>
  );
}
