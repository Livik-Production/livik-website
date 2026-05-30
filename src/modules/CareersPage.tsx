"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JobCard from "@/components/careers/JobCard";
import CareersHero from "@/components/careers/CareersHero";
import { JobPosting } from "@/data/jobs";
import {
  Coffee,
  GraduationCap,
  Heart,
  Laptop,
  X,
  Lightbulb,
  TrendingUp,
  Handshake,
} from "lucide-react";

const perks = [
  {
    icon: Laptop,
    title: "Flexible Work",
    description:
      "Work from anywhere with our remote-first culture and flexible hours.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Annual learning stipends and dedicated time for professional development.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health coverage and wellness programs for you and your family.",
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description:
      "Regular team events, offsites, and a supportive, collaborative environment.",
  },
];

const lifePillars = [
  {
    title: "Workplace & Flexibility",
    description:
      "Work from anywhere with our remote-first culture, flexible hours, and support for a healthy work-life integration that fits your life.",
    bullets: [
      "Remote-first policy with modern workspace access",
      "Flexible working hours tailored to your productivity peaks",
      "Home office setup stipend and top-tier equipment",
    ],
    image: "/images/life-flexibility.png",
  },
  {
    title: "Continuous Learning & Growth",
    description:
      "We are committed to helping you grow. Expand your skill set through structured learning paths and professional training programs.",
    bullets: [
      "Annual learning and certification budget",
      "Weekly dedicated research & development hours",
      "Internal tech talks, workshops, and mentoring programs",
    ],
    image: "/images/life-learning.png",
  },
  {
    title: "Health & Wellness First",
    description:
      "Your health and happiness are top priority. We offer extensive support systems to ensure your physical and mental well-being.",
    bullets: [
      "Comprehensive family health coverage",
      "Mental health and wellness counseling sessions",
      "Wellness stipends and fitness programs",
    ],
    image: "/images/life-wellness.png",
  },
  {
    title: "Work Culture",
    description:
      "Work from anywhere with our remote-first culture, flexible hours, and support for a healthy work-life integration that fits your life.",
    bullets: [
      "Remote-first policy with modern workspace access",
      "Flexible working hours tailored to your productivity peaks",
      "Home office setup stipend and top-tier equipment",
    ],
    image: "/images/life-flexibility.png",
  },
  {
    title: "Inclusive & Empowering Culture",
    description:
      "Join an open, collaborative team of creative thinkers and builders. We value unique viewpoints and work together as one.",
    bullets: [
      "Regular local and international team retreats",
      "Hackathons, open source contributions, and tech challenges",
      "Diverse and inclusive workspaces built on trust and respect",
    ],
    image: "/images/life-culture.png",
  },
];

const sectionTransition = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const,
};

const sectionViewport = { once: true, amount: 0.25 };

export default function CareersPage({ jobs }: { jobs: JobPosting[] }) {
  const [roleInput, setRoleInput] = useState("");
  const [experienceInput, setExperienceInput] = useState("");
  const [appliedRole, setAppliedRole] = useState("");
  const [appliedExperience, setAppliedExperience] = useState("");
  const [activeLifeIndex, setActiveLifeIndex] = useState(0);
  const [hoveredLifeIndex, setHoveredLifeIndex] = useState<number | null>(null);
  const [rocketState, setRocketState] = useState<
    "idle" | "lift" | "hold" | "completed"
  >("idle");
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    const startTimer = setTimeout(() => {
      setRocketState("lift");
    }, 1000);

    const holdTimer = setTimeout(() => {
      setRocketState("hold");
    }, 1800);

    const endTimer = setTimeout(() => {
      setRocketState("completed");
    }, 3300);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(holdTimer);
      clearTimeout(endTimer);
    };
  }, []);

  const rocketVariants = {
    idle: { x: 0, y: 0, scale: 1 },
    lift: {
      x: 26,
      y: -26,
      scale: 1.1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
    hold: {
      x: [26, 27.5, 26, 24.5, 26],
      y: [-26, -27.5, -25, -27, -26],
      scale: 1.35,
      transition: {
        x: { repeat: Infinity, duration: 0.5, ease: "easeInOut" as const },
        y: { repeat: Infinity, duration: 0.5, ease: "easeInOut" as const },
        scale: { duration: 0.3 },
      },
    },
    completed: {
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  const handleApplyFilter = () => {
    setAppliedRole(roleInput);
    setAppliedExperience(experienceInput);
  };

  const uniqueDepartments = Array.from(
    new Set(jobs.map((job) => job.department)),
  );

  const filteredRoles = jobs.filter((role) => {
    const matchRole =
      appliedRole === "" ||
      role.department.toLowerCase() === appliedRole.toLowerCase();
    const matchExperience = (() => {
      if (appliedExperience === "") return true;
      const yearsMatch = role.experience.match(/(\d+)/);
      if (!yearsMatch) return true;
      const years = parseInt(yearsMatch[1], 10);
      if (appliedExperience === "entry") {
        return years <= 2;
      } else if (appliedExperience === "mid") {
        return years >= 3 && years <= 4;
      } else if (appliedExperience === "senior") {
        return years >= 5;
      }
      return true;
    })();
    return matchRole && matchExperience;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <CareersHero />

      {/* Perks / Life at Livik Section */}
      <section className="py-20 bg-slate-50 relative z-20 overflow-hidden border-b border-gray-300">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#33a8d9] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none" />

        <div className="container-custom max-w-7xl px-6 md:px-8 relative z-10 mx-auto">
          {/* Centered Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004475] mb-4">
              Life at{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#33a8d9] bg-clip-text text-transparent">
                Livik
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in empowering our team with the right tools,
              environment, and support to do their best work.
            </p>
          </div>

          {/* 3-column grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Innovation First Card */}
            <div className="group bg-[#f4fafe] border border-[#33a8d9]/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,68,117,0.02)] hover:shadow-[0_10px_30px_rgba(0,68,117,0.06)] hover:border-[#33a8d9]/40 transition-all duration-300">
              <div className="w-16 h-16 bg-[#004475]/5 border border-[#33a8d9]/25 rounded-2xl flex items-center justify-center mb-6 text-[#004475] group-hover:text-[#33a8d9] group-hover:bg-[#004475]/10 transition-all duration-300">
                <Lightbulb className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-[#004475] mb-3">
                Continuous Learning
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We embrace curiosity and continuous learning, encouraging our
                team to explore new technologies and grow every day.
              </p>
            </div>

            {/* Open and Growing Card */}
            <div className="group bg-[#f4fafe] border border-[#33a8d9]/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,68,117,0.02)] hover:shadow-[0_10px_30px_rgba(0,68,117,0.06)] hover:border-[#33a8d9]/40 transition-all duration-300">
              <div className="w-16 h-16 bg-[#004475]/5 border border-[#33a8d9]/25 rounded-2xl flex items-center justify-center mb-6 text-[#004475] group-hover:text-[#33a8d9] group-hover:bg-[#004475]/10 transition-all duration-300">
                <TrendingUp className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-[#004475] mb-3">
                Growth Mindset
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We believe challenges create opportunities. By staying adaptable,
                we continuously improve ourselves and the value we deliver.
              </p>
            </div>

            {/* Collaboration at Heart Card */}
            <div className="group bg-[#f4fafe] border border-[#33a8d9]/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,68,117,0.02)] hover:shadow-[0_10px_30px_rgba(0,68,117,0.06)] hover:border-[#33a8d9]/40 transition-all duration-300">
              <div className="w-16 h-16 bg-[#004475]/5 border border-[#33a8d9]/25 rounded-2xl flex items-center justify-center mb-6 text-[#004475] group-hover:text-[#33a8d9] group-hover:bg-[#004475]/10 transition-all duration-300">
                <Handshake className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-[#004475] mb-3">
                Together We Thrive
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Success is a shared journey. Through collaboration and mutual support,
                we grow stronger and achieve more together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}

      {/* Stay Connected Section */}
      {/* <section className="w-full container-color py-16 md:py-18 border-t border-slate-200/60">
        <div className="container-custom max-w-7xl px-6 md:px-8 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white flex items-center justify-center gap-2 flex-wrap mb-4">
            Don't see a fit?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-8">
            We're always looking for talented people. Send us your resume
            anyway!
          </p>

          <Link href="/careers/resumes">
            <Button className="bg-white text-[#004475] border- font-semibold text-md px-6 h-12 rounded-2xl cursor-pointer hover:bg-white hover:text-black">
              Send Open Application
            </Button>
          </Link>
        </div>
      </section> */}

      {/* Container for Open Application CTA */}
      <section
        id="open-application"
        className="w-full relative overflow-hidden py-16 bg-[#004475]"
      >
        {/* Background decorative gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#33a8d9] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1d8fe1] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none" />

        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="text-center flex flex-col items-center justify-center max-w-xl mx-auto md:mx-0">
              <h3 className="text-4xl md:text-4xl font-bold text-white text-center mb-6 tracking-tight leading-tight">
                {/* Don't see a fit? */} Stay Connected with Livik Software
                Solution
              </h3>
              <p className="text-white text-center text-md md:text-lg mb-10 leading-relaxed">
                {/* We're always looking for talented people. Send us your resume anyway! */}{" "}
                Follow us on LinkedIn for the latest job openings, updates,
                industry insights, and business solutions designed to help you
                grow!
              </p>
              <a
                href="https://www.linkedin.com/company/livik-software/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-[#006080] hover:bg-[#004d66] text-white font-semibold px-8 h-13 rounded-2xl transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-3 cursor-pointer select-none border-none">
                  <svg
                    className="w-6 h-6 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-base tracking-wide font-semibold">
                    Follow Us on LinkedIn
                  </span>
                </Button>
              </a>
            </div>

            <div className="w-full aspect-[4/3] md:aspect-[16/10] relative overflow-hidden group rounded-2xl">
              <img
                src="/images/careers-linkedin-connect.png"
                alt="Livik Software Solutions LinkedIn Connection"
                className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
