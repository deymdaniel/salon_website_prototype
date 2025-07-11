import React, { useState, useEffect } from "react";
import { salonConfig } from "../config/salonConfig";

const Navigation = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Stylists", href: "#stylists" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (href) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 ${salonConfig.colors.background} shadow-md`}
    >
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className={`text-xl font-bold ${salonConfig.colors.text}`}>
              {salonConfig.businessName}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-transform duration-200 font-semibold transform hover:scale-110 focus:outline-none ${
                  activeSection === item.href
                    ? salonConfig.navColors.textActive
                    : salonConfig.navColors.text
                } hover:${salonConfig.navColors.textHover}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Book Now Button & Mobile Menu */}
          <div className='flex items-center space-x-4'>
            <button
              onClick={onBookingClick}
              className={`${salonConfig.colors.buttonSecondary} text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200 hover:opacity-90`}
            >
              Book Now
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${salonConfig.colors.text} focus:outline-none`}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden pb-4'>
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-2 px-4 font-semibold transition-transform duration-200 transform hover:scale-105 focus:outline-none ${
                  activeSection === item.href
                    ? salonConfig.navColors.textActive
                    : salonConfig.navColors.text
                } hover:${salonConfig.navColors.textHover}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
