import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo } from "react";

const PortfolioNavigation = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("portfolio");

  // ✅ useMemo so navItems doesn’t recreate every render
  const navItems = useMemo(
    () => [
      { label: "Home", id: "/" },
      { label: "Portfolio", id: "portfolio" },
    ],
    []
  );

  // ✅ stable scroll handler
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element && scrollY >= element.offsetTop - 100) {
        setActiveLink(item.id);
      }
    }

    const header = document.getElementById("header");
    if (!header) return;
    const headerHeight = header.clientHeight;

    if (window.innerWidth < 992) {
      setIsFixed(scrollY >= headerHeight);
    }
  }, [navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const header = document.getElementById("header");
    if (
      header &&
      window.innerWidth < 992 &&
      window.scrollY >= header.clientHeight
    ) {
      setIsFixed(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="nav-wrapper">
      <div className={`section-nav ${isFixed ? "fixed" : ""}`}>
        <ul className="nav">
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <Link
                href={`${item.id === "/" ? "/" : `#${item.id}`}`}
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

export default PortfolioNavigation;
