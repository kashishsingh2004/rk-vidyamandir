"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-sidebar") &&
        !event.target.closest(".mobile-menu-btn")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isMobile]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/academics", label: "Academics", hasDropdown: true },
    { href: "/administration", label: "Administration", hasDropdown: true },
    { href: "/admission", label: "Online Admission" },
    { href: "/exam-result", label: "Exam Result" },
    { href: "/fee-structure", label: "FEE STRUCTURE" },
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/complain", label: "Complain" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile Menu Button - Only visible on mobile */}
        {isMobile && (
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <FaBars />
          </button>
        )}

        {/* Desktop Navigation */}
        <ul
          className={`nav-links ${
            isMobile ? "desktop-nav-hidden" : "desktop-nav"
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className={item.hasDropdown ? "dropdown" : ""}>
              <Link href={item.href} className="nav-link">
                {item.label}
                {item.hasDropdown && " ▾"}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Sidebar Menu */}
        {isMobile && (
          <>
            <div
              className={`mobile-sidebar ${
                isMenuOpen ? "mobile-sidebar-open" : ""
              }`}
            >
              <div className="mobile-sidebar-header">
                <h3>Menu</h3>
                <button
                  className="close-btn"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
              <div
                className="mobile-overlay"
                onClick={closeMenu}
                aria-hidden="true"
              ></div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
