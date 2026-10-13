export interface ResumeItem {
  date: string;
  degree: string;
  university: string;
  description?: string;
}

interface ResumeData {
  mainData: {
    title: string;
    title2: string;
    description: string;
  };
  education: ResumeItem[];
  experience: ResumeItem[];
}

export const resumeData: ResumeData = {
  mainData: {
    title: "Resume",
    title2: "Education & Experience",
    description:
      "Software Developer with 2.5+ years delivering production web apps across SaaS, fintech and enterprise — measurable gains in release velocity, page-load performance and API latency.",
  },
  education: [
    {
      date: "2020 - 2024",
      degree: "B.Tech, Computer Science & Engineering — CGPA 8.0/10",
      university: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    },
  ],
  experience: [
    {
      date: "Dec 2025 - Present",
      degree: "Software Developer",
      university: "ScalaCode Global Pvt. Ltd. · Noida",
      description:
        "Multi-tenant SaaS on Next.js + NestJS + MongoDB. Reusable component library cut feature time 35%. RBAC, billing, audit logging on AWS with 85%+ Jest/Cypress coverage.",
    },
    {
      date: "Nov 2024 - Nov 2025",
      degree: "Software Developer",
      university: "Nera Soft & FinServ Pvt. Ltd. · Noida",
      description:
        "Fintech apps in React/Next/Node. SSR/SSG cut page-load 40%. JWT/OAuth2, payment + KYC APIs, query tuning cut API latency 30%. Mentored 2 juniors.",
    },
    {
      date: "Jan 2024 - Oct 2024",
      degree: "Software Developer",
      university: "QSpiders · India",
      description:
        "Client apps in React/Node/Mongo. Reusable components + REST APIs sped delivery 25%. Resolved 50+ defects; unit tests + docs improved onboarding.",
    },
  ],
};
