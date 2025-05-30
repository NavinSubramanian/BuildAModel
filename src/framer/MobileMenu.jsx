import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <nav>
            <ul className="mobile-nav-links">
              <li>
                <a href="#hero" className="mobile-nav-link" onClick={onClose}>
                  Home
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="mobile-nav-link" onClick={onClose}>
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="mobile-nav-link" onClick={onClose}>
                  Process
                </a>
              </li>
              <li>
                <a href="#portfolio" className="mobile-nav-link" onClick={onClose}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="mobile-nav-link" onClick={onClose}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="btn btn-primary" onClick={onClose}>
                  Get Quote
                </a>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu-footer">
            <p>© {new Date().getFullYear()} BuildAModel. All rights reserved.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;