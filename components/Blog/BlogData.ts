import Nifiimg from "@/public/images/nifi.jpg";
import Educationimg from "@/public/images/portfolio-img.jpg";
import SaaSimg from "@/public/images/orgalyzer.jpg";
import Careimg from "@/public/images/caredara.jpg";

export const blogData = {
  mainData: {
    title: "Projects",
    title2: "Latest Projects",
    description:
      "Production systems I designed and shipped — SaaS, payments and marketplaces with measurable performance gains.",
  },
  posts: [
    {
      title: "Caredara — In-Home Care Activation",
      slug: "caredara-care-activation",
      description:
        "Care activation platform (caredara.com) for rapid, short-term in-home stabilization — activating care-ready PSWs, RPNs and RNs through disruption-to-continuity pathways for families, hospitals and health systems.",
      keywords: "React.js, Healthcare, Platform, SEO",
      category: "Healthcare",
      date: "2025",
      postedBy: "Shourya Verma",
      image: Careimg,
      content: `<div class="row g-4 mt-2">
                        <div class="col-12">
                          <h4 class="fw-medium">Key Highlights</h4>
                          <ul class="list-circle">
                            <li>Rapid in-home stabilization and hospital-to-home pathways</li>
                            <li>Activation flows for families, hospitals and practitioners</li>
                            <li>SEO-first pages with structured data and fast loads</li>
                            <li>Accessible, mobile-first healthcare UX</li>
                          </ul>
                        </div>
                      </div>`,
      images: [{ image: Careimg }],
      tags: [{ name: "React.js" }, { name: "Healthcare" }, { name: "SEO" }],
    },
    {
      title: "Orgalyzer — Organizational Resilience SaaS",
      slug: "orgalyzer-saas",
      description:
        "Client modules for a live EU B2B SaaS (orgalyzer.com) measuring resilience across 15 domains — radar, heatmap and exec-report views, 67-item scoring engine, Socket.IO live updates, GDPR + WCAG 2.1 AA, EN/DE i18n.",
      keywords: "React.js, TypeScript, SaaS, Socket.IO, GDPR",
      category: "SaaS",
      date: "2025",
      postedBy: "Shourya Verma",
      image: SaaSimg,
      content: `<div class="row g-4 mt-2">
                        <div class="col-12">
                          <h4 class="fw-medium">Key Highlights</h4>
                          <ul class="list-circle">
                            <li>67-item domain-mapping engine with Resilience Index benchmarking</li>
                            <li>Real-time Socket.IO layer for live assessment progress</li>
                            <li>GDPR-compliant tenant admin, PDF/PPT export</li>
                            <li>WCAG 2.1 AA, mobile-first, English + German i18n</li>
                          </ul>
                        </div>
                      </div>`,
      images: [{ image: SaaSimg }],
      tags: [{ name: "React.js" }, { name: "TypeScript" }, { name: "SaaS" }],
    },
    {
      title: "NifiPayment - Secure Payment Gateway",
      slug: "nifipayment-secure-gateway",
      description:
        "Live production gateway (nifipayments.com) built end-to-end as sole developer — encrypted data, secure sessions, 95+ Lighthouse. Redux Toolkit refactor cut re-renders 40%.",
      keywords: "React.js, TypeScript, API Integration, Payment Gateway, Redux",
      category: "Fintech",
      date: "2024",
      postedBy: "Shourya Verma",
      image: Nifiimg,
      content: `<div class="row g-4 mt-2">
                        <div class="col-12">
                          <h4 class="fw-medium">Key Highlights</h4>
                          <ul class="list-circle">
                            <li>Built live payment platform end-to-end as sole developer</li>
                            <li>REST APIs for payments, refunds, history and auth</li>
                            <li>Redux Toolkit refactor cut re-renders by 40%</li>
                            <li>95+ Lighthouse performance score</li>
                          </ul>
                        </div>
                      </div>`,
      images: [{ image: Nifiimg }],
      tags: [{ name: "React.js" }, { name: "TypeScript" }, { name: "Redux" }],
    },
    {
      title: "HomeTutorx - Tutor Booking Platform",
      slug: "hometutorx-platform",
      description:
        "Live full-stack MERN platform (hometutorx.com) built end-to-end — real-time search and filtering improved discovery 60%. Auth, availability and scheduling APIs.",
      keywords: "React.js, Node.js, MongoDB, Tutoring Platform",
      category: "EdTech",
      date: "2024",
      postedBy: "Shourya Verma",
      image: Educationimg,
      content: `<div class="row g-4 mt-2">
                        <div class="col-12">
                          <h4 class="fw-medium">Key Highlights</h4>
                          <ul class="list-circle">
                            <li>Full-stack MERN platform shipped end-to-end</li>
                            <li>Real-time search + filtering, 60% faster discovery</li>
                            <li>REST APIs for auth, availability and scheduling</li>
                            <li>Responsive and accessible across browsers</li>
                          </ul>
                        </div>
                      </div>`,
      images: [{ image: Educationimg }],
      tags: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    },
  ],
};
