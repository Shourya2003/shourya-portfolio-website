import Educationimg from '@/public/images/portfolio-img.jpg';
import Nifiimg from '@/public/images/nifi.jpg';
import Fintechimg from '@/public/images/fintech.jpg';
import MainImage from '@/public/images/col-1.jpg';

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "My Latest Works",
        description: "A showcase of my key projects, highlighting my expertise in building scalable, high-performance web applications with modern technologies."
    },
    navigationList: [
        { title: "Fintech", classes: "fintech", dataFilter: ".fintech" },
        { title: "EdTech", classes: "edtech", dataFilter: ".edtech" },
        { title: "Payments", classes: "payments", dataFilter: ".payments" },
    ],
    projects: [
        {
            projectTitle: 'NifiPayment - Secure Payment Gateway',
            slug: 'nifipayment',
            description: 'Developed a secure and responsive payment gateway interface with React.js and TypeScript. Integrated RESTful APIs for transactions and authentication while implementing Redux for scalable state management.',
            keywords: 'React.js, TypeScript, Redux, RESTful APIs, Payment Gateway',
            category: 'payments',
            services: 'Frontend Development, API Integration, Secure Web App',
            client: 'NifiPayment',
            duration: '120 hours',
            imageSrc: Nifiimg,
            mainImage: Nifiimg,
            categories: [
                { name: 'React.js' },
                { name: 'TypeScript' },
                { name: 'Redux' }
            ],
            images: [
                { image: Nifiimg }
            ]
        },
        {
            projectTitle: 'Fintura Technology - Investment Tracking Platform',
            slug: 'fintura-technology',
            description: 'Built a modern fintech web application for investment tracking and personalized financial insights using Next.js and Tailwind CSS. Implemented SSR, SSG, and integrated real-time data APIs.',
            keywords: 'Next.js, Tailwind CSS, TypeScript, Fintech, Real-time Data',
            category: 'fintech',
            services: 'Web Development, API Integration, SEO Optimization',
            client: 'Fintura Technology',
            duration: '140 hours',
            imageSrc: Fintechimg,
            mainImage: Fintechimg,
            categories: [
                { name: 'Next.js' },
                { name: 'Tailwind CSS' },
                { name: 'TypeScript' }
            ],
            images: [
                { image: Fintechimg }
            ]
        },
        {
            projectTitle: 'HomeTutorx - Online Tutoring Platform',
            slug: 'hometutorx',
            description: 'Developed a dynamic tutoring platform connecting students with qualified tutors. Features included real-time search, authentication, booking, and session management using React.js, Node.js, and Tailwind CSS.',
            keywords: 'React.js, Node.js, Tailwind CSS, EdTech, Real-time Search',
            category: 'edtech',
            services: 'Full Stack Development, Authentication, Booking System',
            client: 'HomeTutorx',
            duration: '150 hours',
            imageSrc: Educationimg,
            mainImage: Educationimg,
            categories: [
                { name: 'React.js' },
                { name: 'Node.js' },
                { name: 'Tailwind CSS' }
            ],
            images: [
                { image: Educationimg }
            ]
        },
    ]
};

