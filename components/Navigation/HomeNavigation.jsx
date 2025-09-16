// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';

// const Navigation = () => {
//     const [isFixed, setIsFixed] = useState(false);
//     const [activeLink, setActiveLink] = useState('about');

//     const navItems = [
//         { label: 'About Me', id: 'about' },
//         { label: 'Portfolio', id: 'portfolio' },
//         { label: 'Services', id: 'services' },
//         { label: 'Resume', id: 'resume' },
//         { label: 'Blog', id: 'blog' },
//         { label: 'Contact', id: 'contact' },
//     ];

//     const handleScroll = () => {
//         const scrollY = window.scrollY;
//         for (const item of navItems) {
//             const element = document.getElementById(item.id);
//             if (element && scrollY >= element.offsetTop - 100) {
//                 setActiveLink(item.id);
//             }
//         }

//         const headerHeight = document.getElementById('header').clientHeight;
//         if (window.innerWidth < 992) {
//             setIsFixed(scrollY >= headerHeight);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);

//         const initialHeaderHeight = document.getElementById('header').clientHeight;
//         if (window.innerWidth < 992 && window.scrollY >= initialHeaderHeight) {
//             setIsFixed(true);
//         }

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="nav-wrapper">
//             <div className={`section-nav ${isFixed ? 'fixed' : ''}`}>
//                 <ul className="nav">
//                     {navItems.map((item) => (
//                         <li className="nav-item" key={item.id}>
//                             <Link
//                                 href={`#${item.id}`}
//                                 className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
//                             >
//                                 <span className="nav-link-desktop">{item.label}</span>
//                                 <span className="nav-link-mobile">{item.label.charAt(0)}</span>
//                                 <span className="nav-circle"></span>
//                             </Link>
//                         </li>
//                     ))}

//                     {/* Hire Me Button */}
//                     <li className="nav-item">
//                         <Link
//                             href="#contact"
//                             className="nav-btn hire-me-btn"
//                         >
//                             Hire Me
//                         </Link>
//                     </li>

//                     {/* Download CV Button */}
//                     <li className="nav-item">
//                         <a
//                             href="/Shourya_Rverma.pdf"
//                             download
//                             className="nav-btn download-cv-btn"
//                         >
//                             Download CV
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <style jsx>{`
//                 .nav {
//                     display: flex;
//                     align-items: center;
//                     gap: 20px;
//                 }

//                 /* Buttons common styles */
//                 .nav-btn {
//                     padding: 10px 22px;
//                     border-radius: 50px;
//                     font-weight: 700;
//                     text-transform: uppercase;
//                     transition: all 0.3s ease;
//                     text-decoration: none;
//                     box-shadow: 0 4px 15px rgba(0,0,0,0.15);
//                     cursor: pointer;
//                 }

//                 /* Hire Me: gradient, subtle bounce animation */
//                 .hire-me-btn {
//                     background: linear-gradient(135deg, #ff416c, #ff4b2b);
//                     color: #fff;
//                     animation: bounce 2s infinite;
//                 }
//                 .hire-me-btn:hover {
//                     transform: scale(1.1);
//                     box-shadow: 0 6px 20px rgba(255,75,43,0.4);
//                 }

//                 /* Download CV: blue gradient, glowing pulse */
//                 .download-cv-btn {
//                     background: linear-gradient(135deg, #0a66c2, #084d91);
//                     color: #fff;
//                     position: relative;
//                     overflow: hidden;
//                     animation: pulse 2.5s infinite;
//                 }
//                 .download-cv-btn::after {
//                     content: '';
//                     position: absolute;
//                     top: -50%;
//                     left: -50%;
//                     width: 200%;
//                     height: 200%;
//                     background: rgba(255,255,255,0.2);
//                     transform: rotate(45deg);
//                     transition: all 0.5s ease;
//                 }
//                 .download-cv-btn:hover {
//                     transform: scale(1.05);
//                     box-shadow: 0 8px 25px rgba(0,0,0,0.35);
//                 }

//                 /* Animations */
//                 @keyframes bounce {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-5px); }
//                 }
//                 @keyframes pulse {
//                     0% { box-shadow: 0 0 0 rgba(10,102,194,0.6); }
//                     50% { box-shadow: 0 0 15px rgba(10,102,194,0.8); }
//                     100% { box-shadow: 0 0 0 rgba(10,102,194,0.6); }
//                 }

//                 @media (max-width: 768px) {
//                     .nav {
//                         flex-direction: column;
//                         gap: 12px;
//                     }
//                     .nav-btn {
//                         width: 80%;
//                         text-align: center;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Navigation;

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeLink, setActiveLink] = useState('about');

    // Define an array of navigation items with their corresponding IDs
    const navItems = [
        { label: 'About Me', id: 'about' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Services', id: 'services' },
        // { label: 'Testimonial', id: 'testimonial' },
        { label: 'Resume', id: 'resume' },
        { label: 'Blog', id: 'blog' },
        { label: 'Contact', id: 'contact' },
    ];

    // Define a function to handle the scroll event
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Determine which link is active based on the scroll position
        for (const item of navItems) {
            const element = document.getElementById(item.id);
            if (element && scrollY >= element.offsetTop) {
                setActiveLink(item.id);
            }
        }

        // Calculate headerHeight and update isFixed
        const headerHeight = document.getElementById('header').clientHeight;
        const windowWidth = window.innerWidth;

        if (windowWidth < 992) {
            if (scrollY >= headerHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
    };

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Get the initial headerHeight
        const initialHeaderHeight = document.getElementById('header').clientHeight;

        // Check and update isFixed initially
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            if (window.scrollY >= initialHeaderHeight) {
                setIsFixed(true);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav-wrapper">
            <div className={`section-nav ${isFixed ? 'fixed' : ''}`}>
                <ul className="nav">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <Link
                                href={`#${item.id}`}
                                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                            >
                                <span className="nav-link-desktop">{item.label}</span>
                                <span className="nav-link-mobile">{item.label.charAt(0)}</span>
                                <span className="nav-circle"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navigation