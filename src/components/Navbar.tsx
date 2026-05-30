"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Factory,
  Truck,
  HeartPulse,
  ShoppingCart,
  Cloud,
  Database,
  Users,
  Home,
  GraduationCap,
  Plane,
  Cpu,
  Smartphone,
  UserPlus,
  Code2,
  Menu,
  X,
  Bug,
  CloudDownload,
  ContactIcon,
  Settings,
} from "lucide-react";
import { ColdFusionIcon } from "./ColdFusionIcon";
import { SapIcon } from "./SapIcon";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaJava,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaGolang,
  FaSackDollar,
  FaPeopleArrows,
} from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const industrySolutions = [
  {
    name: "Education",
    sub: "Education Platforms",
    icon: GraduationCap,
    href: "/industries/education",
  },
  {
    name: "Fintech",
    sub: "Financial Technology",
    icon: FaSackDollar,
    href: "/industries/fintech",
  },
  {
    name: "FMCG",
    sub: "Fast-Moving Consumer Goods",
    icon: FaPeopleArrows,
    href: "/industries/fmcg",
  },

  {
    name: "Healthcare",
    sub: "Patient Care Systems",
    icon: HeartPulse,
    href: "/industries/healthcare",
  },
  {
    name: "Logistics & Supply chain",
    sub: "Supply Chain Optimization",
    icon: Truck,
    href: "/industries/logistics",
  },
  {
    name: "Real Estate",
    sub: "Real Estate Platforms",
    icon: Home,
    href: "/industries/real-estate",
  },
  {
    name: "Retail & E-Commerce",
    sub: "Commerce Platforms",
    icon: ShoppingCart,
    href: "/industries/retail",
  },
  {
    name: "Travels & Hospitality",
    sub: "Booking & Travel Systems",
    icon: Plane,
    href: "/industries/travel",
  },
];

const services = {
  "CORE SERVICES": [
    {
      name: "Artificial Intelligence",
      sub: "AI Development Services",
      icon: Cpu,
      href: "/services/ai-development",
    },
    {
      name: "Custom Software",
      sub: "Tailored software development",
      icon: Code2,
      href: "/services/custom-software",
    },
    {
      name: "Ecommerce",
      sub: "D2C, B2B and marketplace",
      icon: ShoppingCart,
      href: "/services/ecommerce",
    },
    {
      name: "Mobile Apps",
      sub: "Native & cross-platform",
      icon: Smartphone,
      href: "/services/mobile-apps-development",
    },
    {
      name: "QA",
      sub: "Quality Assurance Testing",
      icon: Bug,
      href: "/services/qa",
    },
    {
      name: "Team Augmentation",
      sub: "Dedicated Tech Teams  ",
      icon: UserPlus,
      href: "/services/team-augmentation",
    },
  ],
  "CLOUD & INFRA": [
    {
      name: "Cloud & DevOps",
      sub: "Scalable architecture",
      icon: Cloud,
      href: "/services/cloud-development",
    },
    {
      name: "Cloud Migration",
      sub: "Seamless transitions",
      icon: CloudDownload,
      href: "/services/cloud-migration",
    },
  ],
  SPECIALIZED: [
    {
      name: "SAP Consulting",
      sub: "Enterprise ERP solutions",
      icon: SapIcon,
      href: "/services/sap",
    },
    {
      name: "Data Engineering",
      sub: "Azure & Databricks",
      icon: Database,
      href: "/services/azure-data-engineering",
    },
  ],
  FRONTEND: [
    {
      name: "Angular",
      sub: "Enterprise web apps",
      icon: FaAngular,
      href: "/services/angular-js-development",
    },
    {
      name: "Next.js",
      sub: "Server-Rendered React",
      icon: SiNextdotjs,
      href: "/services/next-js-development",
    },
    {
      name: "React.js",
      sub: "Component-based UI",
      icon: FaReact,
      href: "/services/react-js-development",
    },
    {
      name: "Vue.js",
      sub: "Progressive framework",
      icon: FaVuejs,
      href: "/services/vue-js-development",
    },
  ],
  BACKEND: [
    {
      name: "ColdFusion",
      sub: "Rapid Web Development",
      icon: ColdFusionIcon,
      href: "/services/coldfusion-development",
    },
    {
      name: "GoLang",
      sub: "High-Performance systems",
      icon: FaGolang,
      href: "/services/golang-development",
    },
    {
      name: "Java",
      sub: "Enterprise Backend Solutions",
      icon: FaJava,
      href: "/services/java-development",
    },
    {
      name: "Node.js",
      sub: "Event-driven runtime",
      icon: FaNodeJs,
      href: "/services/node-js-development",
    },
    {
      name: "PHP",
      sub: "Stable server-side",
      icon: FaPhp,
      href: "/services/php-development",
    },
    {
      name: "Python",
      sub: "AI & Data solutions",
      icon: FaPython,
      href: "/services/python-development",
    },
  ],
};

// Nav items configuration
const navItems = [
  { id: "services", label: "SERVICES", href: "#", hasDropdown: true },
  { id: "solutions", label: "INDUSTRIES", href: "#", hasDropdown: true },
  { id: "about", label: "ABOUT US", href: "/about", hasDropdown: false },
  { id: "careers", label: "CAREERS", href: "/careers", hasDropdown: false },
  { id: "contact", label: "CONTACT US", href: "/contact", hasDropdown: false },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (id: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setHoveredNav(id);
    const item = navItems.find((i) => i.id === id);
    if (item?.hasDropdown) {
      if (activeDropdown !== id) {
        setIsDropdownClicked(false);
      }
      setActiveDropdown(id);
    } else {
      setActiveDropdown(null);
      setIsDropdownClicked(false);
    }
  };

  const handleMouseLeave = () => {
    if (isDropdownClicked) return;

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredNav(null);
    }, 450); // 450ms delay for smooth transition
  };

  const handleCloseImmediately = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setHoveredNav(null);
    setIsDropdownClicked(false);
  };

  const handleHeaderClick = (id: string) => {
    if (activeDropdown === id) {
      if (isDropdownClicked) {
        setActiveDropdown(null);
        setHoveredNav(null);
        setIsDropdownClicked(false);
      } else {
        setIsDropdownClicked(true);
      }
    } else {
      setActiveDropdown(id);
      setHoveredNav(id);
      setIsDropdownClicked(true);
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Handle click outside desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        !isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setHoveredNav(null);
        setIsDropdownClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Determine which nav item is "active" based on the current route
  const getActiveNavId = () => {
    if (pathname === "/about") return "about";
    if (pathname === "/contact") return "contact";
    if (pathname.startsWith("/services")) return "services";
    if (pathname.startsWith("/solutions")) return "solutions";
    return null;
  };

  const activeNavId = getActiveNavId();

  if (pathname === "/maintenance") return null;

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b border-gray-100 bg-white px-4 md:px-10 py-1.5"
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Overlay when dropdown is active */}
      <AnimatePresence>
        {activeDropdown && !isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-full left-0 right-0 h-[100vh] bg-black/10 backdrop-blur-sm z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div
        className="mx-auto flex items-center justify-between relative z-50"
        onMouseLeave={handleMouseLeave}
      >
        {/* Section 1: Logo and Brand Name */}
        <div
          className="flex items-center h-full"
          onMouseEnter={handleCloseImmediately}
        >
          <Link href="/" className="flex items-center">
            <div className="flex gap-x-3 items-center transition-all">
              <div className="flex items-center">
                <div className="w-12 sm:w-10 md:w-11 lg:w-13">
                  <Image
                    src="/Logo.png"
                    alt="Livik"
                    width={76}
                    height={76}
                    priority
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 48px, 56px"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col justify-center">
                <Image
                  src="/Name-logo.png"
                  alt="Livik"
                  width={150}
                  height={50}
                  className="h-5 sm:h-7 md:h-9 w-auto object-contain"
                  priority
                />
                <div className="text-[8px] md:text-[10px] pl-0.5 font-extrabold text-[#003366]/80 uppercase  whitespace-nowrap">
                  Software Solutions
                </div>
              </div> */}
              <div className="justify-center">
                {/* <Image
                  src="/Name-logo.png"
                  alt="Livik"
                  width={80}
                  height={50}
                  className="h-5 sm:h-7 md:h-9 w-auto object-contain"
                  priority
                /> */}
                <div className="text-[28px] md:text-[35px] font-extrabold text-[#003366]/90 whitespace-nowrap">
                  Livi<span className="text-[#33a8d9]">k</span> Tech
                </div>

                {/* <div className="text-[8px] md:text-[10px] pl-0.5 font-extrabold text-[#003366]/80 uppercase  whitespace-nowrap">
                  Software Solutions
                </div> */}
              </div>
            </div>
          </Link>
        </div>

        {/* Section 2: Navigation (Services, Industries, About, Contact) */}
        <div className="flex items-center justify-end md:w-full h-full">
          {/* Close Zone Left */}
          <div
            className="hidden md:block flex-1 h-full min-w-[20px]"
            onMouseEnter={handleCloseImmediately}
          />

          <div className="hidden md:flex items-center gap-1 relative justify-center">
            {navItems
              .filter((item) => item.id !== "contact")
              .map((item) => {
                const isHovered = hoveredNav === item.id;
                const isActive = activeNavId === item.id;
                const hasPill = hoveredNav ? isHovered : isActive;

                const textFlipContent = (
                  <span className="relative inline-flex flex-col overflow-hidden h-[1.2em]">
                    <span
                      className={`inline-block transition-transform duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered ? "-translate-y-full" : "translate-y-0"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`inline-block transition-transform duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] border-b-[1.5px] border-[#003366] pb-[1px] ${
                        isHovered ? "-translate-y-full" : "translate-y-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                );

                return (
                  <div
                    key={item.id}
                    className="relative flex items-center justify-center cursor-pointer h-full px-1"
                  >
                    {hasPill && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 rounded-full bg-[#003366]/[0.07]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    {item.hasDropdown ? (
                      <span
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        className={`relative z-10 text-md font-bold tracking-widest transition-colors duration-200 flex items-center gap-1 px-3 py-2 ${
                          isHovered || isActive
                            ? "text-[#003366]"
                            : "text-gray-800"
                        }`}
                        onClick={() => handleHeaderClick(item.id)}
                      >
                        {textFlipContent}
                        <ChevronDown
                          size={12}
                          strokeWidth={3}
                          className={`transition-all duration-300 translate-y-[1.5px] ${
                            activeDropdown === item.id
                              ? "rotate-180 text-[#003366]"
                              : isHovered
                                ? "text-[#003366]"
                                : "text-gray-800"
                          }`}
                        />
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        className={`relative z-10 text-md font-bold tracking-widest flex items-center transition-colors duration-200 px-3 py-2 ${
                          isHovered || isActive
                            ? "text-[#003366]"
                            : "text-gray-800"
                        }`}
                      >
                        {textFlipContent}
                      </Link>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Close Zone Right */}
          <div
            className="hidden md:block flex-1 h-full min-w-[20px]"
            onMouseEnter={handleCloseImmediately}
          />

          {pathname !== "/contact" && (
            <Link href="/contact" className="hidden md:block">
              <button className="rounded-xl px-4 py-2 text-sm font-extrabold text-white transition-all bg-[#004475] border-2 border-[#0b5370] shadow-inner hover:shadow-[0_6px_18px_rgba(3,54,78,0.25)] active:scale-95 tracking-wide">
                CONTACT US
              </button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden p-2 text-[#003366]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Services Dropdown (Mega Menu) */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 top-full -translate-x-1/2 w-[95vw] max-w-7xl z-50 origin-top"
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-4 bg-white border border-gray-300 rounded-b-lg shadow-xl">
              <div className="grid grid-cols-5 gap-5">
                {Object.entries(services).map(([category, items], idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                  >
                    <span className="text-[15px] font-extrabold text-[#004e8c]">
                      {category}
                    </span>
                    <div className="mt-6 space-y-6">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsDropdownClicked(false);
                          }}
                          className="group flex items-start gap-4 cursor-pointer"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#004475] text-white transition-all duration-300">
                            <item.icon size={22} />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-bold text-[#003366] leading-tight group-hover:text-[#33a8d9] transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-[10px] font-medium text-gray-400 mt-1 leading-tight">
                              {item.sub}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solutions Dropdown */}
      <AnimatePresence>
        {activeDropdown === "solutions" && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 top-full -translate-x-1/2 w-[90vw] max-w-3xl z-50 origin-top"
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-4 bg-white border border-gray-300 rounded-b-lg shadow-xl">
              <div className="mt-2 grid grid-cols-2 gap-x-12 gap-y-6">
                {industrySolutions.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.03, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsDropdownClicked(false);
                      }}
                      className="group flex items-start gap-4 cursor-pointer"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#004475] text-white transition-all duration-300">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#003366] group-hover:text-[#33a8d9] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] font-medium text-gray-400 leading-tight">
                          {item.sub}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute top-0 left-0 w-full max-h-[100dvh] overflow-y-auto z-[9999] md:hidden shadow-2xl scrollbar-hide"
            style={{
              backgroundColor: "#0a1220",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Mobile Header (Original Style) */}
            <div className="flex-shrink-0 flex items-center justify-between h-[70px] px-4 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className="flex items-center w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                  <Image
                    src="/Logo.png"
                    alt="Livik"
                    width={48}
                    height={48}
                    priority
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 640px) 40px, 48px"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Image
                    src="/Name-logo.png"
                    alt="Livik"
                    width={100}
                    height={32}
                    className="h-5 sm:h-7 w-auto object-contain"
                    priority
                  />
                  <div className="text-[8px] font-extrabold text-[#003366]/80 uppercase   tracking-tight truncate pl-0.5">
                    Software solutions
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#003366] hover:text-blue-600 transition-colors shrink-0"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Content */}
            <div
              className="flex-1 overflow-y-auto px-3 py-2 bg-[#0a1220]"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* Menu Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-3"
              ></motion.div>

              {/* Navigation Items */}
              <div className="space-y-4 mb-10">
                {navItems.map((item, idx) => {
                  const isExpanded = activeDropdown === item.id;
                  const isActive = activeNavId === item.id;
                  const isHighlighted = isExpanded || isActive;

                  const renderIcon = () => {
                    const vectorColorClass = isHighlighted
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white";
                    const maskColorClass = isHighlighted
                      ? "bg-white"
                      : "bg-gray-400 group-hover:bg-white";

                    if (item.id === "services") {
                      return (
                        <Settings
                          size={24}
                          className={`transition-all duration-300 ${vectorColorClass}`}
                        />
                      );
                    }
                    if (item.id === "solutions") {
                      return (
                        <Factory
                          size={24}
                          className={`transition-all duration-300 ${vectorColorClass}`}
                        />
                      );
                    }
                    if (item.id === "contact") {
                      return (
                        <ContactIcon
                          size={24}
                          className={`transition-all duration-300 ${vectorColorClass}`}
                        />
                      );
                    }
                    return (
                      <Users
                        size={24}
                        className={`transition-all duration-300 ${vectorColorClass}`}
                      />
                    );
                  };

                  return (
                    <div key={item.id} className="flex flex-col">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.15 + idx * 0.1,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        onClick={() => {
                          if (item.hasDropdown) {
                            setActiveDropdown(isExpanded ? null : item.id);
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`group flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer ${
                          isHighlighted
                            ? "bg-white/5 border-l-4 border-blue-500 shadow-lg"
                            : "hover:bg-white/5 border-l-4 border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-6 h-6">
                            {renderIcon()}
                          </div>
                          {item.hasDropdown ? (
                            <span
                              className={`text-xl font-bold tracking-wide ${isHighlighted ? "text-white" : "text-gray-400 group-hover:text-white"}`}
                            >
                              {item.label}
                            </span>
                          ) : (
                            <Link
                              href={item.href}
                              className={`text-xl font-bold tracking-wide ${isHighlighted ? "text-white" : "text-gray-400 group-hover:text-white"}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                        {item.hasDropdown && (
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${isHighlighted ? "rotate-180 text-blue-400" : "text-gray-700"}`}
                          />
                        )}
                      </motion.div>

                      {/* Dropdown Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-10 pr-4"
                          >
                            <div className="py-6 space-y-8">
                              {item.id === "services" ? (
                                Object.entries(services).map(
                                  ([category, subItems]) => (
                                    <div key={category} className="space-y-4">
                                      <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-widest opacity-80">
                                        {category}
                                      </h4>
                                      <div className="grid grid-cols-1 gap-5">
                                        {subItems.map((subItem) => (
                                          <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            onClick={() =>
                                              setIsMobileMenuOpen(false)
                                            }
                                            className="flex items-center gap-4 text-base font-bold text-gray-300 hover:text-white transition-colors"
                                          >
                                            <div
                                              className={`h-12 w-12 rounded flex items-center justify-center ${subItem.name === "SAP Consulting" ? "bg-[#004475] text-white" : "bg-blue-500/15 text-blue-400"}`}
                                            >
                                              <subItem.icon size={24} />
                                            </div>
                                            {subItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ),
                                )
                              ) : (
                                <div className="grid grid-cols-1 gap-5">
                                  {industrySolutions.map((sol) => (
                                    <Link
                                      key={sol.name}
                                      href={sol.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-4 text-base font-bold text-gray-300 hover:text-white transition-colors"
                                    >
                                      <div className="h-7 w-7 rounded bg-blue-500/15 flex items-center justify-center text-blue-400">
                                        <sol.icon size={16} />
                                      </div>
                                      {sol.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
