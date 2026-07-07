"use client";
/*
import Shopify_img from "../../assets/Shopify Logo.png";
*/
const Shopify_img = "";
import { motion, Variants } from "framer-motion";
import {
  ShoppingBag,
  Paintbrush,
  Layers,
  Link2,
  RefreshCcw,
  Box,
  Smartphone,
  Plug,
  FileCheck,
  Target,
} from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import {
  Settings,
  Code,
  ShieldCheck,
  BarChart,
  Mail,
  Lock,
  Users,
  Globe,
  Sparkles,
  MapPin,
} from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Share Your Requirements",
    desc: "Submit your project details, technical needs and preferred engagement model.",
  },
  {
    step: "2",
    title: "Developer Shortlisting",
    desc: "We analyze your requirements and handpick the most suitable ReactJS developers from our in-house team.",
  },
  {
    step: "3",
    title: "Interview & Selection",
    desc: "Interview the shortlisted developers to evaluate technical skills, communication and project alignment.",
  },
  {
    step: "4",
    title: "Onboarding & Project Kickoff",
    desc: "Once selected, we onboard the developer quickly and begin development with full support and transparency.",
  },
];

const services = [
  {
    title: "Shopify Theme Design",
    desc: "Custom Shopify theme design tailored to your brand, performance‑optimized and conversion‑focused.",
    icon: Paintbrush,
  },
  {
    title: "Shopify Store Development",
    desc: "End‑to‑end Shopify store development with scalable architecture and clean UX.",
    icon: ShoppingBag,
  },
  {
    title: "Shopify Plus for FMCG & B2C",
    desc: "Enterprise‑grade Shopify Plus solutions for high‑volume FMCG and B2C businesses.",
    icon: Layers,
  },
  {
    title: "Headless Commerce for Shopify",
    desc: "Decoupled front‑end architecture for blazing‑fast, fully customizable Shopify stores.",
    icon: Link2,
  },
  {
    title: "Shopify Integration",
    desc: "Seamless third‑party integrations including ERP, CRM, payment gateways and APIs.",
    icon: RefreshCcw,
  },
  {
    title: "Shopify Migrations",
    desc: "Secure migration from Magento, WooCommerce, BigCommerce, or custom platforms.",
    icon: Box,
  },
  {
    title: "Progressive Web Apps (PWAs)",
    desc: "App‑like shopping experiences with lightning‑fast speed and offline capabilities.",
    icon: Smartphone,
  },
];

/* -------------------- Hero -------------------- */
const Herosection = () => {
  return (
    <section className="relative flex h-[500px] items-center justify-center gradient-hero text-white ">
      <div className="relative z-10 px-6 text-center text-white">
        <div
          className="absolute h-80 w-80 bg-cover bg-center opacity-40 px-6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={Shopify_img ? { backgroundImage: `url(${Shopify_img})` } : {}}
        />
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Hire Shopify Developers
        </h1>
        <p className="text-md lg:text-xl opacity-90 mb-8 max-w-6xl mx-auto">
          Hire experienced Shopify developers from outside to build robust,
          scalable and conversion-focused eCommerce solutions. Extend your team
          with experts skilled in Shopify Liquid, custom themes and app
          integrations. Deliver high-performance storefronts optimized for
          speed, security and seamless user experience. Accelerate development
          with clean code, API-driven customization and scalable architecture.
          Partner with Livik to power your Shopify ecosystem with reliable,
          technical expertise.
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

export function ShopifyServicesExact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
        Domains We <span className="text-gradient-hero">Expertise in </span>
      </h2>
      <p className="text-gray-600 max-w-4xl mb-12 text-center">
        Trusted by global eCommerce brands, our experienced Shopify experts
        provide Shopify development services that simplify Shopify store
        management while driving sales and increasing customer engagement.
      </p>

      <div className="space-y-6">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="group relative flex gap-6 bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
            >
              {/* Icon container exactly like image */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function WhyChooseShopify() {
  const features = [
    {
      title: "Focused Shopify Expertise",
      desc: "Our developers specialise in Shopify, keeping up-to-date with platform updates, best practices and advanced integrations.",
    },
    {
      title: "Flexible Engagement Models",
      desc: "Whether you need a single specialist or a full development team, we offer hourly, monthly or project-based engagements.",
    },
    {
      title: "Business-First Approach",
      desc: "We don’t just code; we align with your business goals, understand your customer base and build with growth and profitability in mind.",
    },
    {
      title: "Transparent Communication",
      desc: "Regular updates, milestone tracking, open dialogue and clear deliverables so you know exactly what’s happening.",
    },
    {
      title: "End-to-End Delivery",
      desc: "From initial strategy and architecture to launch and ongoing maintenance, we provide full lifecycle support.",
    },
    {
      title: "Quality & Performance Focus",
      desc: "We follow rigorous quality standards, performance optimisation and security best practices to ensure your Shopify store is fast, reliable and scalable.",
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
            Why Choose <span className="text-gradient-hero">Us</span>?
          </h2>

          <p className="mt-8 max-w-5xl mx-auto text-gray-600 text-lg">
            Shopify supports leading global brands with a robust enterprise
            platform, offering a scalable multi-channel solution so you can
            focus on running your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
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
                hover:border-blue-500
                hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)]
              "
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
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

export function StepsofShopify() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-pulse" />
          </div>

          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Hire Shopify Developers with Livik
          </h2>
          <p className="mt-8 py-10 text-black">
            Empowering businesses with top Shopify developers for modern,
            high-impact web experiences.
          </p>
        </div>

        {/* Steps Bar */}
        <div className="relative gradient-hero rounded-2xl px-10 py-16 mb-12">
          {/* Connector Line */}
          <div className="absolute top-12 left-10 right-10 h-[2px] bg-white" />

          <div className="grid md:grid-cols-4 gap-10 relative ">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-white"
              >
                {/* Diamond Number */}
                <div className="relative mb-10">
                  <div className="w-16 h-16 bg-white text-black font-bold text-2xl flex items-center justify-center rotate-45 mx-auto">
                    <span className="-rotate-45">{item.step}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-pink-100 leading-relaxed text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExpertShopifyDevelopers() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Our Shopify Develoeprs are Flexible
        </h2>
        <h2 className="text-lg md:text-2xl font-semibold mt-6 text-center">
          Technology Stack Expertise
        </h2>

        <p className="mt-4 text-sm md:text-base text-center">
          Our Shopify developers adapt seamlessly to your project requirements,
          working across to build reliable and scalable applications.
        </p>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          {/* Left Column */}
          <div className="space-y-10 ">
            {/* Card 1 */}
            <div className="relative rounded-2xl border gradient-hero p-8">
              <h3 className="text-2xl text-center font-bold mb-8 text-white">
                Features and Products Built
              </h3>
              <ul className="space-y-5 text-sm text-gray-200">
                <li className="flex gap-4 text-lg">
                  <Layers className="text-white" size={34} />
                  Scalable Shopify eCommerce development company solutions
                  tailored to your unique business needs.
                </li>
                <li className="flex gap-4 text-lg">
                  <Settings className="text-white" size={34} />
                  Custom storefronts designed for maximum user engagement and
                  higher conversions by our Shopify development company.
                </li>
                <li className="flex gap-4 text-lg">
                  <Code className="text-white" size={34} />
                  Headless commerce solutions delivering flexibility and
                  performance in front-end Shopify website development.
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl border p-8 gradient-hero hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">
                Third-Party Integrations
              </h3>
              <ul className="space-y-5 text-sm text-gray-200">
                <li className="flex gap-4 text-lg">
                  <ShieldCheck className="text-white" size={34} />
                  Secure payment gateways like Stripe, PayPal, or Razorpay
                  integrated by our Shopify web development company.
                </li>
                <li className="flex gap-4 text-lg">
                  <BarChart className="text-white" size={34} />
                  Analytics tools such as Google Analytics or Mixpanel
                  implemented for tracking user behavior.
                </li>
                <li className="flex gap-4 text-lg ">
                  <Mail className="text-white" size={34} />
                  Email marketing integrations like Mailchimp for automated
                  campaigns supported by our Shopify eCommerce development
                  company.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative rounded-2xl border gradient-hero p-8">
            <h3 className="text-2xl font-bold mb-8 text-white text-center">
              Enhanced Modules Delivered
            </h3>
            <ul className="space-y-6 text-sm text-gray-200">
              <li className="flex gap-4 text-lg">
                <Lock className="text-white" size={34} />
                User authentication modules with OAuth2 protocols built by our
                Shopify development agency.
              </li>
              <li className="flex gap-4 text-lg">
                <Users className="text-white" size={54} />
                Role-based access control modules for efficient user permission
                management through Shopify custom development.
              </li>
              <li className="flex gap-4 text-lg">
                <Globe className="text-white" size={34} />
                Multi-language support modules enabling global reach with
                Shopify store setup services.
              </li>
              <li className="flex gap-4 text-lg">
                <Sparkles className="text-white" size={34} />
                AI-powered product recommendation engines integrated with
                Shopify eCommerce development services.
              </li>
              <li className="flex gap-4 text-lg">
                <MapPin className="text-white" size={34} />
                Geolocation-based modules for delivering personalized shopping
                experiences via Shopify store development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Rocket, Briefcase, MessageCircle, Gauge } from "lucide-react";

// const reasons = [
//   {
//     title: "Focused Shopify Expertise",
//     desc: "Our developers specialise in Shopify, staying current with platform updates, best practices and advanced integrations.",
//     icon: Rocket,
//   },
//   {
//     title: "Flexible Engagement Models",
//     desc: "Hire a single specialist or a full development team with hourly, monthly, or project-based models.",
//     icon: Users,
//   },
//   {
//     title: "Business-First Approach",
//     desc: "We align with your business goals, understand your customers and build for growth and profitability.",
//     icon: Briefcase,
//   },
//   {
//     title: "Transparent Communication",
//     desc: "Clear updates, milestone tracking and open communication so you’re always informed.",
//     icon: MessageCircle,
//   },
//   {
//     title: "End-to-End Delivery",
//     desc: "From strategy and architecture to launch and ongoing support, we cover the full lifecycle.",
//     icon: Layers,
//   },
//   {
//     title: "Quality & Performance Focus",
//     desc: "Optimised, secure and scalable Shopify stores built to perform at enterprise level.",
//     icon: Gauge,
//   },
// ]

// // Animation variants
// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// }

// const card = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, transition: {
//   duration: 0.6,
//   ease: "easeOut" as const,
// },

//  },
//   },
// }

// export  function WhyChooseUstrail() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <h2 className="text-4xl font-bold text-gray-900">
//             Why Choose <span className="text-blue-600">Livik</span>?
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Shopify empowers global brands with scalable, multi-channel commerce —
//             we help you build, optimise and grow with confidence.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {reasons.map((item, index) => {
//             const Icon = item.icon
//             return (
//               <motion.div
//                 key={index}
//                 variants={card}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-2xl p-8 border shadow-sm hover:shadow-2xl transition-all"
//               >
//                 {/* Glow effect */}
//                 <div className="absolute inset-0 rounded-2xl bg-blue-600 opacity-0 blur-xl group-hover:opacity-10 transition" />

//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{ rotate: 8, scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="relative mb-6 mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white"
//                 >
//                   <Icon size={26} />
//                 </motion.div>

//                 <h3 className="relative text-lg font-semibold text-gray-900 text-center">
//                   {item.title}
//                 </h3>

//                 <p className="relative mt-3 text-sm text-gray-600 text-center leading-relaxed">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

const items = [
  {
    title: "Focused Shopify Expertise",
    desc: "Our developers specialise in Shopify, keeping up-to-date with platform updates, best practices and advanced integrations.",
    icon: Rocket,
  },
  {
    title: "Flexible Engagement Models",
    desc: "Whether you need a single specialist or a full development team, we offer hourly, monthly or project-based engagements.",
    icon: Users,
  },
  {
    title: "Business-First Approach",
    desc: "We don’t just code; we align with your business goals, understand your customer base and build with growth and profitability in mind.",
    icon: Briefcase,
  },
  {
    title: "Transparent Communication",
    desc: "Regular updates, milestone tracking, open dialogue and clear deliverables so you know exactly what’s happening.",
    icon: MessageCircle,
  },
  {
    title: "End-to-End Delivery",
    desc: "From initial strategy and architecture to launch and ongoing maintenance, we provide full lifecycle support.",
    icon: Layers,
  },
  {
    title: "Quality & Performance Focus",
    desc: "We follow rigorous quality standards, performance optimisation and security best practices to ensure your Shopify store is fast, reliable and scalable.",
    icon: Gauge,
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 60 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function WhyChooseUstrail2() {
  return (
    <section className="relative overflow-hidden py-32 bg-white text-black">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-22">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Livik
            </span>
          </h2>
          <p className="mt-6 text-black">
            We don’t just build Shopify stores — we engineer scalable commerce
            ecosystemsShopify supports leading global brands with a robust
            enterprise platform, offering a scalable multi‑channel solution so
            you can focus on running your business. .
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ rotateX: 6, rotateY: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-sky-100 opacity-0 group-hover:opacity-100 transition blur-xl" />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl gradient-hero text-white"
                >
                  <Icon size={26} />
                </motion.div>

                <h3 className="relative text-xl font-semibold">{item.title}</h3>

                <p className="relative mt-3 text-black leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ShopifyRoyalPresentation.jsx
// npm install framer-motion lucide-react

import { CreditCard, BarChart2 } from "lucide-react";

// ShopifyRoyalPremiumSection.jsx
// npm install framer-motion lucide-react

export function ShopifyRoyalPremiumSection() {
  return (
    <section className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Decorative Royal Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Shopify Developers are Flexible
        </h2>
        <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-yellow-400 to-indigo-600 rounded-full" />
        <h4 className="text-lg font-semibold text-indigo-700">
          Technology Stack Expertise
        </h4>
        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          Our Shopify developers adapt seamlessly to your project requirements,
          working across to build reliable and scalable applications.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-12 z-10">
        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -12 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-indigo-600/30 opacity-0 hover:opacity-100 rounded-3xl transition" />
          <div className="relative p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-indigo-50">
                <Layers className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-900">
                Features and Products Built
              </h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>
                Scalable Shopify eCommerce development company solutions
                tailored to your unique business needs.
              </li>
              <li>
                Custom storefronts designed for maximum user engagement and
                higher conversions by our Shopify development company.
              </li>
              <li>
                Headless commerce solutions delivering flexibility and
                performance in front-end Shopify website development.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -12 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-indigo-600/30 opacity-0 hover:opacity-100 rounded-3xl transition" />
          <div className="relative p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-indigo-50">
                <Lock className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-900">
                Enhanced Modules Delivered
              </h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>
                User authentication modules with OAuth2 protocols built by our
                Shopify development agency.
              </li>
              <li>
                Role-based access control modules for efficient user permission
                management through Shopify custom development.
              </li>
              <li>
                Multi-language support modules enabling global reach with
                Shopify store setup services.
              </li>
              <li>
                AI-powered product recommendation engines integrated with
                Shopify eCommerce development services.
              </li>
              <li>
                Geolocation-based modules for delivering personalized shopping
                experiences via Shopify store development.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -12 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-indigo-600/30 opacity-0 hover:opacity-100 rounded-3xl transition" />
          <div className="relative p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-indigo-50">
                <Plug className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-900">
                Third-Party Integrations
              </h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>
                Secure payment gateways like Stripe, PayPal, or Razorpay
                integrated by our Shopify web development company.
              </li>
              <li>
                Analytics tools such as Google Analytics or Mixpanel implemented
                for tracking user behavior.
              </li>
              <li>
                Email marketing integrations like Mailchimp for automated
                campaigns supported by our Shopify eCommerce development
                company.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Royal Divider */}
      <div className="mt-24 h-[3px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
    </section>
  );
}

// ShopifyRoyalPremiumBullets.jsx
// npm install framer-motion lucide-react

export function ShopifyRoyalPremiumBullets() {
  const bullet =
    "w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_0_6px_rgba(234,179,8,0.7)] mt-2";

  return (
    <>
      <section className="relative bg-white py-28 px-6 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Shopify Developers are Flexible
          </h2>
          <div className="w-24 h-1 mx-auto my-4 gradient-hero" />
          <h4 className="text-lg font-semibold text-black">
            Technology Stack Expertise
          </h4>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Our Shopify developers adapt seamlessly to your project
            requirements, working across to build reliable and scalable
            applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl gradient-hero">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black">
                Features and Products Built
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className={bullet} />
                Scalable Shopify eCommerce development company solutions
                tailored to your unique business needs.
              </li>
              <li className="flex gap-3">
                <span className={bullet} />
                Custom storefronts designed for maximum user engagement and
                higher conversions by our Shopify development company.
              </li>
              <li className="flex gap-3">
                <span className={bullet} />
                Headless commerce solutions delivering flexibility and
                performance in front-end Shopify website development.
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl gradient-hero">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black">
                Enhanced Modules Delivered
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className={bullet} />
                User authentication modules with OAuth2 protocols built by our
                Shopify development agency.
              </li>
              <li className="flex gap-3">
                <span className={bullet} />
                Role-based access control modules for efficient user permission
                management through Shopify custom development.
              </li>
              <li className="flex gap-3">
                <span className={bullet} />
                Multi-language support modules enabling global reach with
                Shopify store setup services.
              </li>
              <li className="flex gap-3">
                <span className={bullet} />
                AI-powered product recommendation engines integrated with
                Shopify eCommerce development services.
              </li>
              <li className="flex gap-3">
                <span className={bullet} />
                Geolocation-based modules for delivering personalized shopping
                experiences via Shopify store development.
              </li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl gradient-hero">
                <Plug className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black">
                Third-Party Integrations
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className={bullet} />
                Secure payment gateways like Stripe, PayPal, or Razorpay
                integrated by our Shopify web development company.
              </li>
              <li className="flex gap-3">
                <span className={bullet} />
                Analytics tools such as Google Analytics or Mixpanel implemented
                for tracking user behavior.
              </li>
              <li className="flex gap-3">
                <span className={bullet} />
                Email marketing integrations like Mailchimp for automated
                campaigns supported by our Shopify eCommerce development
                company.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      <section>
        {/* Royal Divider */}
        <div className="mt-24 h-[3px] w-2/3 mx-auto gradient-hero mb-12" />
      </section>
    </>
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

export function DomainsSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Domains We Expertise In
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Connecting Core Domains to Drive Smarter Solutions.
          </p>
          <p className="mt-2 max-w-3xl mx-auto text-slate-500">
            We bridge the technology gap by delivering innovative, scalable and
            business-driven solutions across diverse industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {domains.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-6 bg-white shadow-lg 
                           hover:shadow-2xl transition-all duration-500 
                           overflow-hidden"
              >
                {/* Glow background */}
                <div
                  className="absolute -inset-1 gradient-hero
                             opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                />

                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                  {/* Icon */}
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full
                             gradient-hero text-white
                               group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold tracking-wider text-slate-800 group-hover:text-white transition-colors">
                    {item.name.toUpperCase()}
                  </h3>

                  {/* Hover description */}
                  <p
                    className="mt-3 text-xs text-white opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Empowering innovation and digital transformation in{" "}
                    {item.name.toLowerCase()} solutions.
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

import {
  FaShoppingCart,
  FaCogs,
  FaClock,
  FaDollarSign,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";
import { SiShopify } from "react-icons/si";

const features = [
  {
    icon: <SiShopify className="text-white w-6 h-6" />,
    title: "Fast Shopify Store Setup",
    description:
      "We build and launch Shopify stores quickly with optimized themes and configurations for immediate business readiness.",
  },
  {
    icon: <FaCogs className="text-white w-6 h-6" />,
    title: "Custom Store Optimization",
    description:
      "Our Shopify experts customize themes, apps and workflows to enhance store performance and user experience.",
  },
  {
    icon: <FaClock className="text-white w-6 h-6" />,
    title: "Faster Time to Market",
    description:
      "Shopify’s ready-made ecosystem enables faster deployment, helping your store go live without delays.",
  },
  {
    icon: <FaDollarSign className="text-white w-6 h-6" />,
    title: "Cost Efficient E-Commerce",
    description:
      "Shopify reduces infrastructure and maintenance costs, making it an affordable solution for online businesses.",
  },
  {
    icon: <FaEye className="text-white w-6 h-6" />,
    title: "Transparent Management",
    description:
      "Shopify provides clear dashboards and reporting tools for complete visibility into sales, inventory and performance.",
  },
  {
    icon: <FaShieldAlt className="text-white w-6 h-6" />,
    title: "Secure & Reliable Platform",
    description:
      "Shopify ensures PCI compliance, secure payments and stable hosting for a safe and reliable shopping experience.",
  },
];

export function ShopifySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Innovate with Our Team
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Creating powerful, scalable and conversion-focused Shopify stores to
          grow your e-commerce business.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:bg-[#0A6AA1] hover:shadow-xl"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg gradient-hero">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed group-hover:text-blue-100">
              {item.description}
            </p>
          </div>
        ))}
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
          domain-focused expertise to build Shopify solutions that solve real
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
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Hire <span className="text-black">Shopify Developers with Livik</span>
        </h2>
        <p className="mb-4 py-10 text-black text-center">
          Empowering businesses with expert Shoipfy developers to build fast,
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
const Shopifydevelopers = () => {
  return (
    <>
      <Herosection />
      <WhyChooseShopify />
      {/* <WhyChooseUstrail2 /> */}
      <ShopifyRoyalPremiumBullets />
      <ShopifySection />
      {/*<DomainsSection/>*/}
      {/*<ShopifyServicesExact /> */}
      {/*<StepsofShopify /> */}
      <CrestIndustries />
      <HireProcessfinal />

      {/* <WhyChooseUstrail/> */}
      {/* <WhyChooseUstrail2/> */}
    </>
  );
};
export default Shopifydevelopers;
