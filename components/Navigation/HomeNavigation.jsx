import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
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

  // ✅ wrap with useCallback so it's stable
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element && scrollY >= element.offsetTop - 100) {
        setActiveLink(item.id);
      }
    }

    const headerHeight = document.getElementById("header")?.clientHeight || 0;
    if (window.innerWidth < 992) {
      setIsFixed(scrollY >= headerHeight);
    }
  }, [navItems]); // ✅ dependency

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // ✅ now stable

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Shourya_Rverma.pdf";
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

      {/* Same CSS as before */}
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
