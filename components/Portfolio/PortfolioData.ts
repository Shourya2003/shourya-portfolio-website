import Educationimg from "@/public/images/portfolio-img.jpg";
import Nifiimg from "@/public/images/nifi.jpg";
import SaaSimg from "@/public/images/orgalyzer.jpg";
import Careimg from "@/public/images/caredara.jpg";

export const portfolioData = {
  mainData: {
    title: "Portfolio",
    title2: "My Latest Works",
    description:
      "Production systems I designed and shipped — an EU B2B SaaS platform, a live payment gateway (95+ Lighthouse), and a full-stack tutoring marketplace.",
  },
  navigationList: [
    { title: "SaaS", classes: "saas", dataFilter: ".saas" },
    { title: "Healthcare", classes: "healthcare", dataFilter: ".healthcare" },
    { title: "Payments", classes: "payments", dataFilter: ".payments" },
    { title: "EdTech", classes: "edtech", dataFilter: ".edtech" },
  ],
  projects: [
    {
      projectTitle: "Orgalyzer — Resilience SaaS",
      slug: "orgalyzer",
      description:
        "Client modules for a live EU B2B SaaS measuring org resilience across 15 domains — radar, risk-heatmap and exec-report views. 67-item scoring engine, real-time Socket.IO updates, GDPR + WCAG 2.1 AA, EN/DE i18n.",
      keywords: "React.js, TypeScript, Redux Toolkit, Socket.IO, SaaS",
      category: "saas",
      services: "SaaS Development, Real-time Systems, i18n & Compliance",
      client: "Orgalyzer",
      duration: "6 months",
      imageSrc: SaaSimg,
      mainImage: SaaSimg,
      categories: [
        { name: "React.js" },
        { name: "TypeScript" },
        { name: "Socket.IO" },
      ],
      images: [{ image: SaaSimg }],
    },
    {
      projectTitle: "Caredara — In-Home Care Activation",
      slug: "caredara",
      description:
        "Care activation platform (caredara.com) for rapid, short-term in-home stabilization — activating care-ready PSWs, RPNs and RNs when care arrangements are disrupted, then handing off to continuity providers.",
      keywords: "React.js, Healthcare, Platform, SEO",
      category: "healthcare",
      services: "Web Development, SEO, Performance",
      client: "Caredara",
      duration: "3 months",
      imageSrc: Careimg,
      mainImage: Careimg,
      categories: [
        { name: "React.js" },
        { name: "Healthcare" },
        { name: "SEO" },
      ],
      images: [{ image: Careimg }],
    },
    {
      projectTitle: "NifiPayment - Secure Payment Gateway",
      slug: "nifipayment",
      description:
        "Live production gateway built end-to-end as sole developer. Encrypted data handling, secure sessions, 95+ Lighthouse. REST APIs for payments, refunds, history and auth; Redux Toolkit refactor cut re-renders 40%.",
      keywords: "React.js, TypeScript, Redux, RESTful APIs, Payment Gateway",
      category: "payments",
      services: "Frontend Development, API Integration, Secure Web App",
      client: "NifiPayment",
      duration: "120 hours",
      imageSrc: Nifiimg,
      mainImage: Nifiimg,
      categories: [
        { name: "React.js" },
        { name: "TypeScript" },
        { name: "Redux" },
      ],
      images: [{ image: Nifiimg }],
    },
    {
      projectTitle: "HomeTutorx - Tutor Booking Platform",
      slug: "hometutorx",
      description:
        "Live full-stack MERN platform built end-to-end as sole developer. Real-time search + filtering improved discovery 60%. REST APIs for auth, availability and scheduling; responsive and accessible.",
      keywords: "React.js, Node.js, MongoDB, EdTech, Real-time Search",
      category: "edtech",
      services: "Full Stack Development, Authentication, Booking System",
      client: "HomeTutorx",
      duration: "150 hours",
      imageSrc: Educationimg,
      mainImage: Educationimg,
      categories: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "MongoDB" },
      ],
      images: [{ image: Educationimg }],
    },
  ],
};
