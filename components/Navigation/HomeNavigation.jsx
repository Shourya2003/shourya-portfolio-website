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
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";

const Navigation = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const navItems = [
    { label: "About Me", id: "about" },
    { label: "Resume", id: "resume" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = () => {
    const scrollY = window.scrollY;

    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element && scrollY >= element.offsetTop - 50) {
        setActiveLink(item.id);
      }
    }

    const header = document.getElementById("header");
    if (header) {
      const headerHeight = header.clientHeight;
      const windowWidth = window.innerWidth;
      if (windowWidth < 992) {
        setIsFixed(scrollY >= headerHeight);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CV download
  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Shourya_Rverma.pdf"; // must be inside public/
    link.download = "Shourya_Rverma.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="nav-wrapper">
      <div className={`section-nav ${isFixed ? "fixed" : ""}`}>
        <ul className="nav">
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`nav-link ${activeLink === item.id ? "active" : ""}`}
              >
                <span className="nav-link-desktop">{item.label}</span>
                <span className="nav-link-mobile">{item.label.charAt(0)}</span>
                <span className="nav-circle"></span>
              </Link>
            </li>
          ))}

          {/* 🔥 Highlighted Download CV button */}
          <li className="nav-item ml-auto">
            <a
              href="#"
              onClick={handleDownloadCV}
              className="download-btn nav-link"
            >
              <span className="nav-link-desktop">Download CV</span>
              <span className="nav-link-mobile">
                <FaDownload />
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Styles */}
      <style jsx>{`
        .download-btn {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff !important;
          padding: 8px 18px;
          border-radius: 9999px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: pulseBorder 2s infinite;
        }

        .download-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 18px rgba(37, 99, 235, 0.6);
          background: linear-gradient(135deg, #1d4ed8, #1e40af);
        }

        .nav-link-mobile svg {
          font-size: 18px;
        }

        @keyframes pulseBorder {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.6);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }
        }

        @media (max-width: 991px) {
          .download-btn {
            padding: 8px 12px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Navigation;
