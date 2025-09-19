import HeroAvatar from '@/public/images/hero-avatar.jpg';

export const aboutData = {
    mainData: {
        title: "About Me",
        title2: "About Me",
        heroAvatar: HeroAvatar,
        jobTitle: "Software Developer | Full Stack Developer",
        description: "Passionate and results-driven Software Developer with hands-on experience in building scalable, high-performance web and mobile applications. Skilled in React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and Tailwind CSS. Strong focus on clean architecture, responsive UI, API integration, and performance optimization.",
        yearsOfExperience: "1.6", // Based on June 2024 - Present (QSpiders + Nera Soft & FinServ)
        hoursOfWorking: "40",     // Standard weekly hours
        projectsDone: "3",        // NifiPayment, Fintura, HomeTutorx
        typewriter: ['Hi There!', 'I\'m Shourya Verma'],
        dateOfBirth: "2003-10-28" // ✅ Add this
    },

    // ✅ Add this section for your personal details
    personalDetails: [
        // { label: "Full Name", value: "Shourya Verma" },
        {  icon: 'fas fa-envelope', value: "shouryaverma2728@gmail.com" },
        {  icon: 'fas fa-phone', value: "+91 82668 55865" },
        { icon: 'fas fa-location-dot', value: "Noida, Uttar Pradesh" },
        // { label: "Birthday", value: "28th July, 2003" },
        { icon: 'fas fa-language', value: "English, Hindi" }
    ],

    skills: [
        {
            id: 1,
            name: 'React.js & Next.js',
            percent: '90',
            fontawesomeIcon: 'fa-brands fa-react',
        },
        {
            id: 2,
            name: 'Node.js & Express.js',
            percent: '88',
            fontawesomeIcon: 'fa-brands fa-node-js',
        },
        {
            id: 3,
            name: 'MongoDB',
            percent: '85',
            fontawesomeIcon: 'fa-solid fa-database',
        },
        {
            id: 4,
            name: 'Tailwind CSS',
            percent: '92',
            fontawesomeIcon: 'fa-brands fa-css3-alt',
        },
        {
            id: 5,
            name: 'TypeScript & JavaScript',
            percent: '87',
            fontawesomeIcon: 'fa-brands fa-js',
        },
        {
            id: 6,
            name: 'AWS Cloud',
            percent: '75',
            fontawesomeIcon: 'fa-solid fa-cloud',
        },
        {
            id: 7,
            name: 'State Management (Redux, React Query)',
            percent: '82',
            fontawesomeIcon: 'fa-solid fa-diagram-project',
        },
    ]
};
