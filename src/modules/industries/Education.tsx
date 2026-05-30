"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Search,
  PenTool,
  Code,
  CheckCircle,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  Users,
  Layout,
  BookOpen,
  Video,
  FileText,
  Cpu,
} from "lucide-react";
import {
  educationBenefits,
  educationReasons,
  educationSteps,
  educationTargets,
  educationActive,
} from "@/data/industries/education";

/* ---------------- Hero Sub Section ---------------- */

function HireReactJSSection() {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Build Learning Experiences That Keep Users Engaged
          </h1>
        </div>

        <div className="space-y-6 text-white text-base leading-relaxed">
          <p>
            Creating content is not enough—students need to stay engaged and
            complete it.
          </p>

          <p>
            We design and develop end-to-end education platforms that combine
            structured content delivery, interactive features and seamless user
            experiences. This helps improve learning outcomes while reducing
            drop-offs.
          </p>

          <p>
            Whether you’re an educational institution, training provider, or
            EdTech startup, we help you deliver learning that works in
            real-world scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services Section ---------------- */

function ServiceItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl p-8 gradient-hero text-white shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col items-start text-left group">
      <div className="mb-6 w-14 h-14 rounded-full bg-white text-blue-900 flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:rotate-12">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 leading-tight">{title}</h3>
      <p className="text-blue-50/80 leading-relaxed">{desc}</p>
    </div>
  );
}

function EducationServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          Education Solutions We Deliver
        </h2>
        <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
          We build platforms that simplify delivery, enhance engagement and
          scale learning outcomes seamlessly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <ServiceItem
          icon={<Layout className="h-7 w-7" />}
          title="Learning Management Systems (LMS)"
          desc="Build scalable platforms to manage courses, users, content and learning progress efficiently."
        />

        <ServiceItem
          icon={<BookOpen className="h-7 w-7" />}
          title="E-Learning Platforms"
          desc="Create interactive platforms for delivering courses, training programs and digital learning experiences."
        />

        <ServiceItem
          icon={<Users className="h-7 w-7" />}
          title="Student & User Management Systems"
          desc="Track user activity, progress and engagement with structured management systems."
        />

        <ServiceItem
          icon={<Video className="h-7 w-7" />}
          title="Live Learning & Virtual Classrooms"
          desc="Enable real-time teaching, collaboration and communication between instructors and learners."
        />

        <ServiceItem
          icon={<FileText className="h-7 w-7" />}
          title="Assessment & Evaluation Systems"
          desc="Conduct quizzes, tests and performance tracking with automated evaluation systems."
        />

        <ServiceItem
          icon={<Cpu className="h-7 w-7" />}
          title="Content Management & Delivery"
          desc="Organize and deliver learning content in a structured, accessible and user-friendly format."
        />
      </div>
    </section>
  );
}

/* ---------------- Benefits Section ---------------- */

function EducationBenefits() {
  const benefits = educationBenefits;

  return (
    <section className="py-20 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            What You Gain
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose Us Section ---------------- */

const reasons = educationReasons;

function EducationWhyChooseUs() {
  return (
    <section className="py-15 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
              Livik
            </span>{" "}
            for Education Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 gradient-hero text-white shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              {/* <div className="mb-6 w-14 h-14 rounded-full bg-white text-blue-900 flex items-center justify-center font-bold shadow-inner transition-transform duration-300 group-hover:rotate-12">
                {index + 1}
              </div> */}
              <h3 className="text-xl font-bold mb-4 leading-tight text-left">
                {item.title}
              </h3>
              <p className="text-blue-50/80 text-left leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process Section ---------------- */

const steps = educationSteps;

function EducationProcess() {
  return (
    <section className="py-16 bg-slate-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-center">
          How We Build Education Platforms
        </h2>

        <div className="relative">
          <div className="absolute top-24 left-0 right-0 h-[2px] bg-gray-200 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 w-14 h-14 rounded-full gradient-hero flex items-center justify-center text-white">
                  {step.icon}
                </div>

                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>

                <div className="w-3 h-3 rounded-full gradient-hero mb-6" />

                {step.sub && (
                  <p className="text-sm text-gray-500">{step.sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Who This Is For Section ---------------- */

function WhoThisIsFor() {
  const targets = educationTargets;

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-14">
          Who This Is For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gradient-hero transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-gray-900 font-medium text-left">{target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Main Education Page ---------------- */

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <IndustriesHero />

      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container-custom max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">
              <span className="bg-gradient-to-r from-[#0f4a8a] to-[#4ab3e8] bg-clip-text text-transparent">
                Education
              </span>{" "}
              Solutions That Improve Learning Engagement, Simplify Delivery and
              Scale Seamlessly
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mt-4 leading-relaxed max-w-4xl mx-auto px-2">
              In education, a poor learning experience leads to low engagement
              and drop-offs. At Livik, we build education and eLearning
              platforms that help you deliver content effectively, engage
              learners and manage operations efficiently. From online learning
              systems to institutional platforms, we ensure your solution is
              scalable, accessible and built for real learning outcomes.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              {[
                "Improve student engagement and course completion",
                "Deliver structured learning across devices",
                "Simplify administration and content management",
                "Build scalable platforms for growing user bases",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" variant="hero">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Education Platform <ArrowUpRight size={20} />
                </Link>
              </Button>
              {/* <Button asChild size="lg" variant="outline" className="border-gradient-hero text-gradient-hero">
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Free EdTech Consultation <ArrowUpRight size={20} />
                </Link>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <HireReactJSSection />

      {/* Services Section */}
      <EducationServicesSection />
      {/* Benefits Section */}
      <EducationBenefits />
      {/* Why Choose Us Section */}
      <EducationWhyChooseUs />
      {/* Process Section */}
      <EducationProcess />

      {/* Who This Is For */}
      <WhoThisIsFor />

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Build an Engaging Education Platform?
          </h2>
          <p className="text-xl opacity-90 mt-4 max-w-3xl mx-auto space-y-2">
            <span>
              If your current platform struggles with engagement or scalability,
              it’s time to upgrade.
            </span>
            <br />
            <span>
              Let’s build a learning system that delivers real results.
            </span>
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

function IndustriesHero() {
  const active = educationActive;

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black group">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${active.image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Vertical panel dividers */}
      <div className="absolute inset-0 z-10 grid grid-cols-4 pointer-events-none">
        <div className="border-r border-white/15" />
        <div className="border-r border-white/15" />
        <div className="border-r border-white/15" />
        <div />
      </div>

      {/* Large background text */}
      <div className="absolute top-8 left-6 md:top-12 md:left-20 z-20 text-white/20 text-4xl sm:text-5xl md:text-8xl font-bold transition-all duration-500 hover:text-white/70 hover:scale-105 cursor-default select-none max-w-[80vw] break-words">
        {active.title}
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-center px-6 md:px-20 pointer-events-none">
        <div className="max-w-xl text-white mt-12 md:mt-0 pointer-events-auto">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 drop-shadow line-clamp-3">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
