export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  experience: String;
  shortDescription: string;
  salary?: string;
  fullDescription?: string;
  responsibilities?: string[];
  qualifications?: string[];
  niceToHave?: string[];
  benefits?: string[];
  tags?: string[];
}

export const jobs: JobPosting[] = [
  {
    id: "1",
    slug: "senior-full-stack-engineer",
    title: "Senior Full Stack Engineer",
    department: "Senior Developers",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2+ years",
    shortDescription: "Lead our engineering efforts with expertise in modern web technologies and cloud infrastructure."
  },
  {
    id: "2",
    slug: "product-designer-ui-ux",
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "1+ years",
    shortDescription: "Create beautiful and intuitive user experiences for web and mobile applications."
  },
  {
    id: "3",
    slug: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    department: "Cloud",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "5+ years",
    shortDescription: "Design and implement cloud infrastructure solutions for enterprise clients."
  },
  {
    id: "4",
    slug: "junior-frontend-developer",
    title: "Junior Frontend Developer",
    department: "Junior Developers",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    shortDescription: "Start your development career building modern web applications."
  },
  {
    id: "5",
    slug: "data-scientist",
    title: "Data Scientist",
    department: "Database",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    shortDescription: "Transform data into actionable insights and build predictive models."
  },
  {
    id: "6",
    slug: "project-manager",
    title: "Project Manager",
    department: "Project Management",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    shortDescription: "Lead and manage projects to successful completion."
  }
];

export function getJobBySlug(slug: string): JobPosting | undefined {
  return jobs.find(job => job.slug === slug);
}

export function getJobsByDepartment(department: string): JobPosting[] {
  return jobs.filter(job => job.department.toLowerCase() === department.toLowerCase());
}

export function getJobsByExperience(experience: string): JobPosting[] {
  return jobs.filter(job => job.experience === experience);
}


// export interface JobPosting {
//   id: string;
//   slug: string;
//   title: string;
//   department: string;
//   location: string;
//   type: "Full-time" | "Part-time" | "Contract";
//   experience: "entry" | "mid" | "senior";
//   salary?: string;
//   shortDescription: string;
//   fullDescription: string;
//   responsibilities: string[];
//   qualifications: string[];
//   niceToHave?: string[];
//   benefits?: string[];
//   tags?: string[];
// }

// export const jobs: JobPosting[] = [
//   {
//     id: "1",
//     slug: "senior-full-stack-engineer",
//     title: "Senior Full Stack Engineer",
//     department: "Engineering",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     experience: "senior",
//     salary: "$120k - $160k",
//     shortDescription: "Lead our engineering efforts with expertise in modern web technologies and cloud infrastructure.",
//     fullDescription: `We're looking for an experienced Senior Full Stack Engineer to join our core engineering team and help us build scalable solutions for our clients. You'll work across the full stack, from frontend React applications to backend Node.js services and cloud infrastructure.

// This role offers the opportunity to:
// - Lead technical initiatives and architect solutions
// - Mentor junior engineers on best practices
// - Collaborate with product and design teams
// - Contribute to our open-source initiatives
// - Make impactful decisions on technology choices`,
//     responsibilities: [
//       "Design and implement full-stack web applications using React, Node.js, and cloud technologies",
//       "Lead code reviews and maintain high code quality standards",
//       "Mentor junior and mid-level engineers",
//       "Collaborate with product managers and designers to translate requirements into technical solutions",
//       "Optimize application performance and scalability",
//       "Contribute to architecture decisions and technical roadmap",
//       "Participate in on-call rotation for production support"
//     ],
//     qualifications: [
//       "5+ years of professional software development experience",
//       "Strong expertise with React/Next.js and Node.js",
//       "Experience with cloud platforms (AWS, Google Cloud, or Azure)",
//       "Proficiency in TypeScript and SQL",
//       "Experience with CI/CD pipelines and DevOps practices",
//       "Strong communication and leadership skills",
//       "Excellent problem-solving abilities"
//     ],
//     niceToHave: [
//       "Experience with Prisma ORM",
//       "Knowledge of Docker and Kubernetes",
//       "Contributions to open-source projects",
//       "Experience with GraphQL",
//       "Familiarity with machine learning concepts"
//     ],
//     benefits: [
//       "Competitive salary and equity options",
//       "Flexible remote work arrangement",
//       "Comprehensive health insurance",
//       "Professional development budget",
//       "Flexible hours and generous PTO",
//       "Regular team events and offsites",
//       "Home office setup allowance"
//     ],
//     tags: ["React", "Node.js", "TypeScript", "AWS", "Leadership"]
//   },
//   {
//     id: "2",
//     slug: "product-designer-ui-ux",
//     title: "Product Designer (UI/UX)",
//     department: "Design",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     experience: "mid",
//     salary: "$80k - $110k",
//     shortDescription: "Create beautiful and intuitive user experiences for web and mobile applications.",
//     fullDescription: `We're seeking a talented Product Designer to join our creative team and shape the user experience of our products. You'll work closely with engineers and product managers to design solutions that are both beautiful and functional.

// Your impact will include:
// - Designing intuitive user interfaces for web and mobile platforms
// - Conducting user research and usability testing
// - Creating design systems and component libraries
// - Collaborating with cross-functional teams
// - Iterating on designs based on user feedback
// - Contributing to product strategy and roadmap`,
//     responsibilities: [
//       "Create wireframes, prototypes, and high-fidelity designs for web and mobile applications",
//       "Conduct user research and usability testing",
//       "Develop and maintain design systems",
//       "Collaborate with engineers to ensure design feasibility",
//       "Present design solutions to stakeholders",
//       "Iterate on designs based on feedback and analytics",
//       "Document design specifications and guidelines"
//     ],
//     qualifications: [
//       "3-5 years of product design experience",
//       "Proficiency in design tools (Figma, Adobe XD, or Sketch)",
//       "Strong portfolio demonstrating UI/UX design skills",
//       "Understanding of user-centered design principles",
//       "Experience with design systems",
//       "Basic knowledge of HTML/CSS is a plus",
//       "Excellent communication skills"
//     ],
//     niceToHave: [
//       "Experience with prototyping tools",
//       "Knowledge of accessibility standards (WCAG)",
//       "Experience with design thinking methodologies",
//       "Familiarity with analytics tools",
//       "Experience in fintech or SaaS products"
//     ],
//     benefits: [
//       "Competitive salary and benefits",
//       "Remote work flexibility",
//       "Health insurance coverage",
//       "Design tools and software licenses",
//       "Professional development budget",
//       "Flexible work hours",
//       "Collaborative and creative environment"
//     ],
//     tags: ["Figma", "UI/UX", "Design Systems", "User Research"]
//   },
//   {
//     id: "3",
//     slug: "cloud-solutions-architect",
//     title: "Cloud Solutions Architect",
//     department: "Engineering",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     experience: "senior",
//     salary: "$130k - $170k",
//     shortDescription: "Design and implement cloud infrastructure solutions for enterprise clients.",
//     fullDescription: `Join our Cloud Solutions team as an architect responsible for designing and implementing cloud infrastructure for enterprise clients. You'll work with the latest cloud technologies and help organizations transform their digital infrastructure.

// In this role, you'll:
// - Design scalable cloud architectures
// - Lead cloud migration projects
// - Conduct technical assessments and recommendations
// - Develop proof of concepts
// - Mentor engineers on cloud best practices
// - Stay current with latest cloud technologies`,
//     responsibilities: [
//       "Design cloud infrastructure solutions for enterprise clients",
//       "Conduct technical assessments and feasibility studies",
//       "Lead cloud migration projects from planning to deployment",
//       "Develop architecture documentation and best practices",
//       "Mentor engineers on cloud technologies and patterns",
//       "Collaborate with clients to understand requirements",
//       "Monitor and optimize cloud cost and performance"
//     ],
//     qualifications: [
//       "5+ years of cloud architecture experience",
//       "Deep expertise in AWS, Google Cloud, or Azure",
//       "Strong knowledge of microservices and containerization",
//       "Experience with infrastructure as code",
//       "Understanding of security and compliance requirements",
//       "Excellent communication skills",
//       "Proven track record of successful migrations"
//     ],
//     niceToHave: [
//       "Multiple cloud certifications",
//       "Experience with Kubernetes",
//       "Knowledge of serverless architectures",
//       "Experience with disaster recovery planning",
//       "Familiarity with FinOps"
//     ],
//     benefits: [
//       "Competitive salary with performance bonuses",
//       "Equity options",
//       "Remote work flexibility",
//       "Comprehensive health coverage",
//       "Cloud certification reimbursement",
//       "Professional conference attendance",
//       "Executive coaching"
//     ],
//     tags: ["AWS", "Cloud Architecture", "Infrastructure", "Leadership"]
//   },
//   {
//     id: "4",
//     slug: "junior-frontend-developer",
//     title: "Junior Frontend Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-time",
//     experience: "entry",
//     salary: "$50k - $65k",
//     shortDescription: "Start your development career building modern web applications.",
//     fullDescription: `We're looking for a motivated Junior Frontend Developer to join our team and help build beautiful, responsive web applications. This is a great opportunity to learn from experienced developers and grow your skills in a supportive environment.

// You'll:
// - Build user interfaces with React and modern JavaScript
// - Learn best practices and coding standards
// - Contribute to feature development under mentorship
// - Participate in code reviews and learning sessions
// - Grow from entry-level to intermediate engineering skills`,
//     responsibilities: [
//       "Develop responsive user interfaces using React and TypeScript",
//       "Write clean, maintainable code following company standards",
//       "Collaborate with designers and backend engineers",
//       "Participate in code reviews",
//       "Fix bugs and improve existing features",
//       "Attend team meetings and learning sessions",
//       "Document code and contribute to knowledge base"
//     ],
//     qualifications: [
//       "Strong foundation in JavaScript/TypeScript",
//       "Basic understanding of React",
//       "Knowledge of HTML and CSS",
//       "Familiarity with version control (Git)",
//       "Ability to work in a team environment",
//       "Willingness to learn and grow",
//       "Problem-solving mindset"
//     ],
//     niceToHave: [
//       "Portfolio or GitHub projects",
//       "Experience with Next.js",
//       "Knowledge of REST APIs",
//       "Familiarity with CSS frameworks",
//       "Open source contributions"
//     ],
//     benefits: [
//       "Competitive entry-level salary",
//       "Remote work opportunity",
//       "Health insurance",
//       "Mentorship program",
//       "Learning and development budget",
//       "Friendly and supportive team",
//       "Career growth opportunities"
//     ],
//     tags: ["React", "JavaScript", "Entry-Level", "Frontend"]
//   },
//   {
//     id: "5",
//     slug: "data-scientist",
//     title: "Data Scientist",
//     department: "Data",
//     location: "Remote",
//     type: "Full-time",
//     experience: "mid",
//     salary: "$90k - $130k",
//     shortDescription: "Transform data into actionable insights and build predictive models.",
//     fullDescription: `We're seeking a Data Scientist to join our analytics team and help us leverage data to drive business decisions and product improvements. You'll work with large datasets and build machine learning models to solve real-world problems.

// Your contributions will include:
// - Building and deploying machine learning models
// - Analyzing complex datasets to uncover insights
// - Creating data visualizations and dashboards
// - Collaborating with product and engineering teams
// - Experimenting with new data science techniques
// - Presenting findings to stakeholders`,
//     responsibilities: [
//       "Analyze large datasets to identify patterns and trends",
//       "Build and train machine learning models",
//       "Develop data pipelines and ETL processes",
//       "Create visualizations and reports for stakeholders",
//       "Conduct A/B tests and statistical analyses",
//       "Collaborate with engineers to deploy models",
//       "Document methodologies and findings"
//     ],
//     qualifications: [
//       "3-5 years of data science experience",
//       "Strong proficiency in Python and SQL",
//       "Experience with machine learning frameworks (TensorFlow, scikit-learn)",
//       "Understanding of statistics and probability",
//       "Experience with data visualization tools",
//       "Familiarity with cloud platforms",
//       "Excellent communication skills"
//     ],
//     niceToHave: [
//       "Experience with deep learning",
//       "Knowledge of Big Data technologies",
//       "Familiarity with Apache Spark",
//       "Experience with Kubernetes",
//       "Published research or competition wins"
//     ],
//     benefits: [
//       "Competitive salary",
//       "Remote work flexibility",
//       "Health and wellness benefits",
//       "GPU resources for model training",
//       "Conference attendance budget",
//       "Flexible hours",
//       "Collaborative team environment"
//     ],
//     tags: ["Python", "Machine Learning", "Data Analysis", "Analytics"]
//   }
// ];

// export function getJobBySlug(slug: string): JobPosting | undefined {
//   return jobs.find(job => job.slug === slug);
// }

// export function getJobsByDepartment(department: string): JobPosting[] {
//   return jobs.filter(job => job.department.toLowerCase() === department.toLowerCase());
// }

// export function getJobsByExperience(experience: string): JobPosting[] {
//   return jobs.filter(job => job.experience === experience);
// }
