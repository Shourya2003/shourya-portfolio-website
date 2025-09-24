import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

const BlogNavigation = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("portfolio");

  // array of navigation items with their corresponding IDs
  const navItems = [
    { label: "Home", id: "/" },
    { label: "Portfolio", id: "portfolio" },
  ];

  // Wrap handleScroll with useCallback to avoid ESLint warning
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    // Determine which link is active based on the scroll position
    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element && scrollY >= element.offsetTop) {
        setActiveLink(item.id);
      }
    }

    // Calculate headerHeight and update isFixed
    const header = document.getElementById("header");
    if (!header) return; // prevent error if header doesn't exist
    const headerHeight = header.clientHeight;
    const windowWidth = window.innerWidth;

    if (windowWidth < 992) {
      setIsFixed(scrollY >= headerHeight);
    }
  }, [navItems]); // ✅ dependencies

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Check and update isFixed initially
    const header = document.getElementById("header");
    if (header) {
      const initialHeaderHeight = header.clientHeight;
      if (window.innerWidth < 992 && window.scrollY >= initialHeaderHeight) {
        setIsFixed(true);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // ✅ fixed dependencies

  return (
    <div className="nav-wrapper">
      <div className={`section-nav ${isFixed ? "fixed" : ""}`}>
        <ul className="nav">
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <Link
                href={item.id === "/" ? "/" : `#${item.id}`}
                className={`nav-link ${activeLink === item.id ? "active" : ""}`}
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
  );
};

export default BlogNavigation;
