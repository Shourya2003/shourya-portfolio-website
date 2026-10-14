import HeroAvatar from "@/public/images/hero-avatar.png";

export const aboutData = {
  mainData: {
    title: "About Me",
    title2: "About Me",
    heroAvatar: HeroAvatar,
    jobTitle: "Software Developer · Full-Stack · Agentic AI",
    description:
      "— Software Developer with 2.5+ years shipping production web apps across SaaS, fintech and enterprise platforms, with measurable gains in release velocity, page-load performance and API latency. Full-stack across React, Next.js, TypeScript, Node.js, NestJS and MongoDB — currently building agentic AI tooling with Model Context Protocol (MCP) servers.",
    yearsOfExperience: "2",
    hoursOfWorking: "15",
    projectsDone: "15",
    typewriter: [
      "Hi There!",
      "I'm Shourya Verma",
      "I build Agentic AI tools",
      "Full-Stack · React · Next.js · Node",
    ],
    dateOfBirth: "2003-10-28", // ✅ Add this
  },

  // ✅ Add this section for your personal details
  personalDetails: [
    { icon: "fas fa-envelope", value: "shouryaverma2728@gmail.com" },
    { icon: "fas fa-phone", value: "+91 82668 55865" },
    { icon: "fas fa-location-dot", value: "Noida, Uttar Pradesh, India" },
    { icon: "fas fa-language", value: "English, Hindi" },
  ],

  skills: [
    {
      id: 1,
      name: "Agentic AI · MCP · LLM Tools",
      percent: "85",
      fontawesomeIcon: "fa-solid fa-robot",
    },
    {
      id: 2,
      name: "React.js & Next.js",
      percent: "90",
      fontawesomeIcon: "fa-brands fa-react",
    },
    {
      id: 3,
      name: "TypeScript & JavaScript",
      percent: "88",
      fontawesomeIcon: "fa-brands fa-js",
    },
    {
      id: 4,
      name: "Node.js · NestJS · GraphQL",
      percent: "86",
      fontawesomeIcon: "fa-brands fa-node-js",
    },
    {
      id: 5,
      name: "MongoDB · PostgreSQL",
      percent: "85",
      fontawesomeIcon: "fa-solid fa-database",
    },
    {
      id: 6,
      name: "AWS · Docker · CI/CD",
      percent: "80",
      fontawesomeIcon: "fa-solid fa-cloud",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      percent: "92",
      fontawesomeIcon: "fa-brands fa-css3-alt",
    },
  ],
};
