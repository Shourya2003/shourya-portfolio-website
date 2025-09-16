import PostImage from '@/public/images/blog-post-img.jpg'
import Educationimg from '@/public/images/portfolio-img.jpg';
import Nifiimg from '@/public/images/nifi.jpg';
import Fintechimg from '@/public/images/fintech.jpg';
import Image from '@/public/images/col-1.jpg';

export const blogData = {
    mainData: {
        title: "Projects",
        title2: "Latest Projects",
        description: "Here are some of the key projects I’ve worked on, showcasing my skills in building scalable and high-performance web applications."
    },
    posts: [
        {
            title: 'NifiPayment - Secure Payment Gateway',
            slug: 'nifipayment-secure-gateway',
            description: 'Designed and developed a high-performance, responsive web interface for a secure payment gateway platform. Integrated RESTful APIs, implemented secure frontend practices, and collaborated in an Agile environment.',
            keywords: 'React.js, TypeScript, API Integration, Payment Gateway, Redux',
            category: 'Fintech',
            date: '2024',
            postedBy: 'Shourya Verma',
            image: Nifiimg,
            content: `<div class="row g-4 mt-2">
                        <div class="col-12">
                          <h4 class="fw-medium">Key Highlights</h4>
                          <ul class="list-circle">
                            <li>Developed scalable UI with React.js & TypeScript</li>
                            <li>Integrated RESTful APIs for transactions & authentication</li>
                            <li>Implemented Redux for state management</li>
                            <li>Ensured compliance with web security standards</li>
                          </ul>
                        </div>
                      </div>`,
            images: [
                { image: Nifiimg },
                { image: Nifiimg },
            ],
            tags: [
                { name: 'React.js' },
                { name: 'TypeScript' },
                { name: 'Redux' }
            ]
        },
        {
            title: 'Fintura Technology - Investment Tracking Platform',
            slug: 'fintura-technology',
            description: 'Developed a modern fintech web application for investment tracking and personalized financial insights using Next.js and Tailwind CSS. Implemented SSR, SSG, and integrated real-time data APIs.',
            keywords: 'Next.js, Tailwind CSS, TypeScript, Fintech, Real-time Data',
            category: 'Fintech',
            date: '2024',
            postedBy: 'Shourya Verma',
            image: Fintechimg,
            content: `<div class="row g-4 mt-2">
                        <div class="col-12">
                          <h4 class="fw-medium">Key Highlights</h4>
                          <ul class="list-circle">
                            <li>Responsive UI with Next.js & Tailwind CSS</li>
                            <li>Implemented SSR & SSG for SEO & performance</li>
                            <li>Integrated APIs for real-time financial data</li>
                            <li>Enhanced maintainability with TypeScript</li>
                          </ul>
                        </div>
                      </div>`,
            images: [
                { image: Fintechimg },
                { image: Fintechimg },
            ],
            tags: [
                { name: 'Next.js' },
                { name: 'Tailwind CSS' },
                { name: 'TypeScript' }
            ]
        },
        {
            title: 'HomeTutorx - Online Tutoring Platform',
            slug: 'hometutorx-platform',
            description: 'Built a dynamic web platform connecting students with qualified tutors. Developed with React.js, Node.js, and Tailwind CSS, featuring booking, authentication, real-time search, and session management.',
            keywords: 'React.js, Node.js, Tailwind CSS, Tutoring Platform',
            category: 'EdTech',
            date: '2024',
            postedBy: 'Shourya Verma',
            image: Educationimg,
            content: `<div class="row g-4 mt-2">
                        <div class="col-12">
                          <h4 class="fw-medium">Key Highlights</h4>
                          <ul class="list-circle">
                            <li>Responsive frontend with React.js & Tailwind CSS</li>
                            <li>Node.js APIs for authentication & session booking</li>
                            <li>Implemented tutor search, profiles, and filtering</li>
                            <li>Focused on performance & accessibility</li>
                          </ul>
                        </div>
                      </div>`,
            images: [
                { image: Educationimg },
                { image: Educationimg },
            ],
            tags: [
                { name: 'React.js' },
                { name: 'Node.js' },
                { name: 'Tailwind CSS' }
            ]
        },
    ],
};
