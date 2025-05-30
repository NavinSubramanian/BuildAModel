import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import MainLogo from "../images/MainLogo.png"
import "../styles/others.css";

import MobileMenu from "../framer/MobileMenu";

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
          <img className="mainLogo" src={MainLogo} alt="" />
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
