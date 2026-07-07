"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const LinkedinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#25D366"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IndiaFlag = () => (
  <svg
    className="w-5 h-3.5 rounded-sm shadow-sm shrink-0 border border-gray-100"
    viewBox="0 0 900 600"
  >
    <rect fill="#FF9933" width="900" height="200" />
    <rect fill="#FFF" y="200" width="900" height="200" />
    <rect fill="#138808" y="400" width="900" height="200" />
    <circle fill="#000080" cx="450" cy="300" r="90" />
    <circle fill="#FFF" cx="450" cy="300" r="80" />
    <circle fill="#000080" cx="450" cy="300" r="14" />
    <circle
      fill="none"
      stroke="#000080"
      strokeWidth="4"
      cx="450"
      cy="300"
      r="80"
    />
  </svg>
);

const USAFlag = () => (
  <svg
    className="w-5 h-3.5 rounded-sm shadow-sm shrink-0 border border-gray-100"
    viewBox="0 0 741 390"
  >
    <rect width="741" height="390" fill="#b22234" />
    <path
      d="M0,30h741M0,90h741M0,150h741M0,210h741M0,270h741M0,330h741"
      stroke="#fff"
      strokeWidth="30"
    />
    <rect width="296" height="210" fill="#3c3b6e" />
    <g fill="#fff">
      {[...Array(5)].map((_, i) => (
        <circle key={i} cx={20 + i * 40} cy="20" r="4" />
      ))}
      {[...Array(5)].map((_, i) => (
        <circle key={i} cx={40 + i * 40} cy="60" r="4" />
      ))}
    </g>
  </svg>
);

const Footer = () => {
  const pathname = usePathname();
  const hireLinks = [
    {
      name: "Angular Developers",
      href: "/hire-angular-js-developers",
    },
    { name: "DevOps Engineers", href: "/hire-devops-engineers" },
    { name: "Java Developers", href: "/hire-java-developers" },
    // { name: "Medusa Developers", href: "/hire-developers/medusa" },
    { name: "Next.js Developers", href: "/hire-next-js-developers" },
    { name: "Node.js Developers", href: "/hire-node-js-developers" },
    { name: "PHP Developers", href: "/hire-php-developers" },
    { name: "Python Developers", href: "/hire-python-developers" },
    {
      name: "React Native Developers",
      href: "/hire-react-native-developers",
    },
    { name: "React.js Developers", href: "/hire-react-js-developers" },
    { name: "SAP Consultants", href: "/hire-sap-consultants" },
    // { name: "Shopify Developers", href: "/hire-shopify-developers" },
  ];

  if (pathname === "/maintenance") return null;

  return (
    <footer className="bg-[#0b0b0b] text-white">
      <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg shadow-lg border border-white bg-white">
                <Image
                  src="/Footer-Logo.png"
                  alt="Livik"
                  width={70}
                  height={70}
                  style={{ height: "auto" }}
                  className="rounded-sm"
                />
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Livik is a premier software engineering firm dedicated to
                building high-performance, scalable digital products. We bridge
                the gap between complex business challenges and innovative
                technical solutions.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="rounded-lg bg-[#004488] px-6 py-2.5 text-sm font-bold transition-all hover:bg-[#003366] active:scale-95">
                  CONTACT US
                </button>
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com/company/livik-software/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-colors"
                >
                  <LinkedinIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">
                Services
              </h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li>
                  <Link
                    href="/services/ai-development"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-development"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Cloud & DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-migration"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Cloud Migration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/custom-software"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/azure-data-engineering"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Data Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ecommerce-development"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Ecommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-apps-development"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/qa"
                    className="hover:text-blue-400 transition-colors"
                  >
                    QA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/sap"
                    className="hover:text-blue-400 transition-colors"
                  >
                    SAP Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/team-augmentation"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Team Augmentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">
                Industries
              </h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li>
                  <Link
                    href="/solutions/education"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/fmcg"
                    className="hover:text-blue-400 transition-colors"
                  >
                    FMCG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/logistics"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Logistics & Supply Chain
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/retail"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Retail & Ecommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/fintech"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/healthcare"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/real-estate"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/travel"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Travel & Hospitality
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">
                Company
              </h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hire Developers */}
            <div className="col-span-2">
              <h4 className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">
                Hire Developers
              </h4>
              <div className="transition-all duration-300">
                <ul className="flex flex-col gap-y-4 text-sm font-semibold">
                  {hireLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-400 transition-colors block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section: Location, Connect & Copyright */}
      <div className="bg-gray-50 text-black">
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Locations */}
            <div className="lg:col-span-8">
              {/* <h3 className="text-2xl font-bold text-black mb-10 inline-block border-b-2 border-gray-300 pb-1">
                
              </h3> */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <IndiaFlag />
                    <h4 className="text-lg font-bold text-black">INDIA</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    HIG A-7, 2nd street,
                    <br />
                    9th cross, RM Colony
                    <br />
                    Dindigul - 624001, TamilNadu
                    <br />
                    INDIA
                  </p>
                </div>

                {/* Pennsylvania Office */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <USAFlag />
                    <h4 className="text-lg font-bold text-black">USA</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    289 Redclover Ln,
                    <br />
                    Allentown,
                    <br />
                    Pennsylvania,
                    <br />
                    USA
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Connect */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-bold text-black mb-5 inline-block border-b-2 border-gray-300">
                Connect with us
              </h3>

              <div className="space-y-4">
                {/* <div className="flex items-start text-sm">
                  <span className="font-bold text-black w-36 shrink-0">
                    Sales Enquiry
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 font-medium">
                      : +91 8610470324
                    </span>
                    <a
                      href="https://wa.me/918610470324"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform flex items-center"
                      title="Chat on WhatsApp"
                    >
                      <WhatsappIcon />
                    </a>
                  </div>
                </div> */}
                <div className="flex items-start text-sm">
                  <span className="font-bold text-black w-36 shrink-0">
                    General / HR Enquiry
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 font-medium">
                      : +91 8220907614
                    </span>
                    <a
                      href="https://wa.me/918220907614"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform flex items-center"
                      title="Chat on WhatsApp"
                    >
                      <WhatsappIcon />
                    </a>
                  </div>
                </div>
                <div className="flex items-start text-sm">
                  <span className="font-bold text-black w-36 shrink-0">
                    Email
                  </span>
                  <span className="text-gray-600 font-medium">:</span>
                  <span className="pl-1.5 text-gray-600 font-medium hover:text-blue-600 transition-colors">
                    <a href="mailto:info@liviktech.com"> info@liviktech.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Row */}
      <div className="bg-gray-50 border-t border-gray-300">
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8 text-[12px] font-bold text-gray-500 text-center lg:text-left">
              © {new Date().getFullYear()} Livik Software Solutions Private
              Limited. All Rights Reserved.
            </div>
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-start gap-8 text-[12px] font-bold text-gray-500">
              <Link
                href="/privacy-policy"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-blue-600 transition-colors"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
