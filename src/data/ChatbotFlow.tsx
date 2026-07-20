export const chatbotFlow: any = {
  start: {
    message:
      "Welcome to Livik Software Solutions 👋\nHow can LivBot help you today?",
    options: [
      "Our Services",
      "Industries We Serve",
      "Pricing",
      "About Company",
    ],
  },

  // --- Services ---
  services: {
    message: "We offer a comprehensive suite of digital product engineering services. What are you looking for?",
    options: [
      "Core Services",
      "Cloud & Infra",
      "Specialized Services",
      "Frontend & Backend",
      "Back",
    ],
  },

  core_services: {
    message:
      "Our Core Services include:\n• Artificial Intelligence (AI Development)\n• Custom Software (Tailored Development)\n• Ecommerce (D2C, B2B, Marketplace)\n• Mobile Apps (Native & Cross-platform)\n• QA (Quality Assurance Testing)\n• Team Augmentation (Dedicated Tech Teams)\n\nAre you looking to start a project in one of these areas?",
    options: ["Yes, let's talk!", "Explore Other Services", "Back to Home"],
  },

  cloud_infra: {
    message:
      "Our Cloud & Infra expertise covers:\n• Cloud & DevOps (Scalable Architecture)\n• Cloud Migration (Seamless Transitions)\n\nReady to scale your infrastructure?",
    options: ["Yes, let's talk!", "Explore Other Services", "Back to Home"],
  },

  specialized: {
    message:
      "Our Specialized Services feature:\n• SAP Consulting (Enterprise ERP Solutions)\n• Data Engineering (Azure & Databricks)\n\nDo you need specialized enterprise solutions?",
    options: ["Yes, let's talk!", "Explore Other Services", "Back to Home"],
  },

  frontend_backend: {
    message:
      "We use modern tech stacks:\n\n**Frontend:** Angular, Next.js, React.js, Vue.js\n**Backend:** ColdFusion, GoLang, Java, Node.js, PHP, Python\n\nLooking for a robust tech stack for your project?",
    options: ["Yes, let's talk!", "Explore Other Services", "Back to Home"],
  },

  // --- Industries ---
  industries: {
    message:
      "We bring our expertise to a diverse range of industries. Which industry best describes your business?",
    options: [
      "Education",
      "FMCG",
      "Logistics & Supply Chain",
      "Retail & E-Commerce",
      "Fintech",
      "Healthcare",
      "Real Estate",
      "Travels & Hospitality",
      "Back",
    ],
  },

  industry_details: {
    message:
      "That's fantastic! We have extensive experience building scalable and secure digital platforms for your industry.",
    options: ["Let's discuss my project", "Back to Industries", "Back to Home"],
  },

  // --- General Info ---
  pricing: {
    message:
      "Pricing depends on your project requirements. We offer flexible models to suit startups and enterprises alike. Would you like a free consultation?",
    options: ["Yes, let's talk!", "Back to Home"],
  },

  about: {
    message:
      "Livik Software Solutions is a cutting-edge digital product engineering company. We help accelerate software engineering and drive software modernization across every stage of the life cycle.",
    options: ["Yes, let's talk!", "Back to Home"],
  },

  // --- Closure ---
  closure: {
    message:
      "We would love to collaborate with you! Please reach out to our team to get started:\n\n📧 Email: contact@liviksoft.com\n📞 Call: +91 8220907614\n\nOur experts are ready to turn your vision into reality. We look forward to speaking with you!",
    options: ["Back to Home"],
  },
};