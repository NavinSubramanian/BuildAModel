import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import "../styles/others.css";

import MobileMenu from "./MobileMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavClicked, setIsMobileNavClicked] = useState(false);

  useEffect(() => {
    console.log(isMobileNavClicked);
  }, [isMobileNavClicked]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="header-container">
        <a href="#" className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v8m0 0 4-4m-4 4L8 6m12 6h-8m0 0 4 4m-4-4 4-4m-12 6v-4m0 8h8m0 0-4-4m4 4-4 4m-4-8v8" />
          </svg>
          <span>BuildAModel</span>
        </a>

        <nav className="nav-desktop">
          <ul className="nav-links">
            <li>
              <a href="#hero" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#what-we-do" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#process" className="nav-link">
                Process
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-btn">
          <div
            className="hamburger"
            onClick={() => {
              setIsMobileNavClicked(!isMobileNavClicked);
            }}
          >
            <Menu />
          </div>
        </div>

        <MobileMenu isOpen={isMobileNavClicked} onClose={() => setIsMobileNavClicked(false)} />
      </div>
    </header>
  );
};

export default Header;
