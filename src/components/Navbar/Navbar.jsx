import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    title: "О нас",
    link: "#hero",
  },
  {
    id: 2,
    title: "Услуги",
    link: "#services",
  },
  {
    id: 3,
    title: "Проекты",
    link: "#",
  },
  {
    id: 4,
    title: "Контакты",
    link: "#",
  },
];

const Navbar = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 200); // Show button after scrolling 200px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen to scroll events
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on unmount

    // Setup IntersectionObserver to detect active section
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`); // Set active section link
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect(); // Cleanup the observer on unmount
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Логотип */}
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <img src={Logo} alt="логотип" className="w-10" />
          <span className="text-2xl font-bold">Интерьер</span>
        </a>
        {/* Навигационные ссылки */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className={`inline-block mx-4 text-lg font-semibold transition-all duration-300 ${
                activeLink === link.link
                  ? "text-gray-500 underline"
                  : "text-black hover:text-gray-500 hover:underline"
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>
        {/* Кнопка */}
        <div>
          <button className="primary-btn hover:transform hover:translate-x-2 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-out">
            Попробовать бесплатно
          </button>
        </div>
      </motion.div>

      {/* Кнопка для прокрутки вверх */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-black-500 transition-all"
        >
          <FaArrowUp /> {/* Arrow icon */}
        </button>
      )}
    </>
  );
};

export default Navbar;
