"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  const lastUpdated = "May 12, 2026";

  const sections = [
    {
      title: "Service Coverage",
      content: (
        <div className="space-y-4">
          <p>
            Livik Tech provides services including staff augmentation, dedicated development teams, offshore software development, digital transformation, custom web and mobile application development, QA and testing solutions and MVP development for businesses looking to strengthen their internal teams or outsource software projects.
          </p>
          <p>
            The extent of services for each project will be determined based on the client’s individual business needs, project schedules and expected deliverables. These specifics will be mutually agreed upon and documented in the contract between the company and the client to maintain transparency and a clear understanding of the project requirements. Under the Staff Augmentation model, billing is based on the actual time invested by the resources, while project management responsibilities remain with the client.
          </p>
        </div>
      ),
    },
    {
      title: "Limited License",
      content: (
        <p>
          While accessing the website, you agree not to interfere with or disrupt the operation of the website in any manner. You shall also refrain from copying, altering, or reproducing any information related to our services, products, or solutions from the website in any form.
        </p>
      ),
    },
    {
      title: "Responsibility for Website Content",
      content: (
        <p>
          We will not be liable for any material or content published on your website. You agree to indemnify and hold us harmless against any claims, damages, or liabilities arising from the content displayed on your Website. Additionally, no links should be placed on any Website that could be considered defamatory, offensive, unlawful, or that violate, encourage the violation of, or infringe upon the rights of any third party.
        </p>
      ),
    },
    {
      title: "Client Responsibilities and Service Limitations",
      content: (
        <div className="space-y-4">
          <p>
            We are committed to providing the best possible services and ensuring client satisfaction. At the same time, we expect our clients to act responsibly and ethically within the online community. Since no individual or organization owns the internet and as we operate as a reseller of internet-related services, we cannot be held liable for website downtime, technical disruptions, or errors experienced by the client’s website. Violation of the following terms may result in legal action or suspension of services:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>The company shall not be held responsible for server-related or network-related issues occurring in any region or hosting environment worldwide, including but not limited to spamming, hacking attempts, server outages, or hardware failures.</li>
            <li>Clients acknowledge that web hosting services are subject to certain technical risks and limitations, for which the company cannot be held accountable.</li>
            <li>Clients are required to use approved third-party payment methods such as demand drafts, cheques, or other authorized payment channels for transactions.</li>
            <li>We do not verify, guarantee, or authenticate any third-party software, applications, or digital tools installed by the hosting provider or the client. Therefore, we are not responsible for any issues arising from such installations.</li>
            <li>The company has no control over matters related to domain registration, transfer, renewal, expiration, or loss of domain names. Managing and maintaining domain-related records remains solely the client’s responsibility.</li>
            <li>Clients are entirely responsible for safeguarding their FTP credentials, database access, email accounts, domain information, usernames and passwords.</li>
            <li>We reserve the right to suspend or terminate services at any time if the client is found using commercially distributed software, copyrighted media, or downloadable content on their website without proper authorization.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Third-Party Information and External Links",
      content: (
        <div className="space-y-4">
          <p>
            This website may include information, articles, reports and other materials provided by third parties. You acknowledge and agree that such content is neither created, reviewed, nor endorsed by Livik Tech. The third-party materials available on this website are shared solely for general informational purposes and should not be considered as any form of recommendation, promotion, or endorsement of the respective content, products, or services.
          </p>
          <p>
            While Livik Tech makes reasonable efforts to source information from reliable providers, we do not guarantee the accuracy, completeness, reliability, or timeliness of any third-party content displayed on the website. Users are advised to independently verify any information before relying on it.
          </p>
          <p>
            Accessing third-party content may direct you to external websites that are not controlled or maintained by Livik Tech. Visiting such external websites is entirely at your own risk and discretion. You are responsible for taking appropriate precautions to safeguard your devices and data against viruses, malware, or any other harmful elements.
          </p>
          <p>
            The inclusion of any external links on this website does not imply any sponsorship, endorsement, affiliation, partnership, or authorization by Livik Tech regarding the linked websites or the trademarks, logos, trade names, or copyrighted materials displayed on those platforms.
          </p>
        </div>
      ),
    },
    {
      title: "Payment Terms",
      content: (
        <div className="space-y-1">
          <p>
            The client agrees to make payments to the company in accordance with the payment conditions specified in the service agreement or project proposal document.
          </p>
          <p>
            All payments must be completed in the currency mentioned in the Service Agreement and may be subject to applicable taxes, duties, or additional charges as required.
          </p>
        </div>
      ),
    },
    {
      title: "Governing Law",
      content: (
        <div className="space-y-1">
          <p>
            These terms and conditions shall be governed by and interpreted in accordance with the laws of Tamil Nadu, India, without considering any conflict of law principles.
          </p>
          <p>
            Any disputes, claims, or legal proceedings arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts located in Tamil Nadu, India. By using our services or website, you agree to comply with all applicable local, national and international laws and regulations. If any provision of these terms is found to be invalid or unenforceable under applicable law, the remaining provisions shall continue to remain in full force and effect.
          </p>
        </div>
      ),
    },
    {
      title: "Authorized and Lawful Use of the Website",
      content: (
        <p>
          You agree not to use the website for any unlawful, prohibited, or unauthorized activities. Any actions that may harm, disrupt, or negatively affect the infrastructure of Livik Tech are strictly prohibited. You must also not attempt to access any of our servers, systems, or confidential information without proper authorization.
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
              Terms and Conditions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section - Left Aligned and Full Width */}
      <section className="py-8 md:py-10 px-4">
        <div className="container-custom">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-10 text-justify">
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  These terms and conditions govern your use of the services provided by{" "}
                  <span className="text-[#004475] font-bold">
                    Livik Tech
                  </span>{" "}
                  related to staff augmentation, dedicated teams and offshore development. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </div>

              <div className="space-y-8 text-justify">
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
              <div className="pt-2 border-t border-gray-100">
                <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-8 border border-slate-100 shadow-sm">
                  <div className="text-justify">
                    <h2 className="text-base font-bold text-[#1a1a1a] mb-6">
                      Contact Information
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                      If you have any questions regarding these Terms and Conditions, please contact{" "}
                      <a
                        href="mailto:info@liviktech.com"
                        className="text-[#004475] font-bold hover:underline decoration-2 underline-offset-4"
                      >
                        info@liviktech.com
                      </a>
                    </p>
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
