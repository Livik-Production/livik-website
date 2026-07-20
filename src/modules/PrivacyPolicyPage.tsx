"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 12, 2026";

  const sections = [
    {
      title: "Information We Receive From You",
      content: (
        <div className="space-y-4">
          <p>
            When you visit our website, we collect personal information from you
            such as your name, contact number, e-mail, etc. We also collect your
            IP address, browser and device identity. We collect this information
            in order to improve our site's performance and provide you enhanced
            user experience.
          </p>
          <p>
            We also have access to your number of site visits, time spent on our
            site, the number of pages viewed, etc. But we don't use these or any
            other details to trace your personal identification.
          </p>
          <div className="flex justify-center">
            <p className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic max-w-2xl">
              Plus, we never sell, transfer or trade your personal information
              with any third party websites or persons unless we are entitled to
              do it legally.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Information Through Interactions",
      content: (
        <p>
          During the interaction happened between us (via forums, e-mails, chat
          box, feedback or any other way), whatever information you share with
          us will be protected from our end and will not shared with any other
          person.
        </p>
      ),
    },
    {
      title: "Protection Of Your Data",
      content: (
        <p>
          As we respect your privacy, we have implemented certain policies and
          technology standards with a view to protect your data from any
          unauthorized or improper access. And we assure you to update them as
          and when required and new standards get available.
        </p>
      ),
    },
    {
      title: "Online Privacy Policy Only",
      content: (
        <p>
          This Privacy Policy is applicable only in case of all your information
          we collect online through our website and not offline.
        </p>
      ),
    },
    {
      title: "Changes and Amendments",
      content: (
        <p>
          We have the right and authority to make any amendment or alteration in
          any or all the grounds of this Privacy Policy. All such changes and
          amendments to this policy shall be communicated to you and published
          on this page. You are therefore advisable to visit this page as and
          when you visit our website.
        </p>
      ),
    },
    {
      title: "Your Consent",
      content: (
        <p>
          By using our website, you assure us about your consent to this Privacy
          Policy.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Left Aligned */}
      <section className="py-10 md:py-12 bg-[#004475] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-[52px] font-bold mb-4 leading-tight">
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section - Left Aligned and Full Width */}
      <section className="py-16 md:py-14 px-4">
        <div className="container-custom">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-10 text-justify">
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  At{" "}
                  <span className="text-[#004475] font-bold">
                    Livik Tech
                  </span>
                  , we believe in transparency. This Privacy Policy provides a
                  clear explanation of how we collect, use and protect your
                  personal information.
                </p>
              </div>

              <div className="space-y-20 md:space-y-9 text-justify">
                {sections.map((section, idx) => (
                  <div key={idx} className="relative group">
                    <div className="flex flex-col items-start mb-2">
                      <h2 className="text-base font-bold text-[#1a1a1a] mb-0.5">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-gray-600 leading-relaxed text-base">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information Section - Left Aligned */}
              <div className="">
                <div className="bg-slate-50 rounded-[3rem] p-8 md:p-8 mt-4 border border-slate-100 shadow-sm">
                  <div className="mb-10 text-justify">
                    <h2 className="text-lg font-bold text-[#1a1a1a] mb-2">
                      Contact Us
                    </h2>
                    <p className="text-base text-gray-600">
                      If you have any questions regarding this Privacy Policy,
                      please reach out to our team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Location Card */}
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-[#33a8d9]">
                        <MapPin size={32} />
                      </div>
                      <div>
                        <p className="font-bold text-[#1a1a1a] text-base mb-3">
                          Livik Software Solutions Pvt. Ltd.
                        </p>
                        <p className="text-gray-500 text-base leading-relaxed">
                          HIG A-7, 2nd street, 
                          9th cross, RM Colony
                          <br />
                          Dindigul - 624001, TamilNadu
                          <br />
                          INDIA
                        </p>
                      </div>
                    </div>

                    {/* Email Card */}
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-[#33a8d9]">
                        <Mail size={32} />
                      </div>
                      <div>
                        <p className="font-bold text-[#1a1a1a] text-base mb-3">
                          Email Address
                        </p>
                        <p className="text-gray-500 text-base mb-2">
                          General inquiries
                        </p>
                        <a
                          href="mailto:info@liviktech.com"
                          className="text-[#33a8d9] font-bold text-base hover:underline decoration-2 underline-offset-8 transition-all"
                        >
                          info@liviktech.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
