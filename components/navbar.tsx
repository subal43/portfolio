import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

// Define nav links outside component to prevent re-creation on render
const NAV_LINKS = [
  { name: "About", href: "/#about", isScroll: true },
  { name: "Projects", href: "/#projects", isScroll: true },
  { name: "Contact", href: "/contact", isScroll: false },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Optimize scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize link handler
  const handleLinkClick = useCallback((href: string, isScroll: boolean) => {
    setIsOpen(false);
    if (!isScroll) {
      navigate(href);
      return;
    }

    const targetId = href.replace("/", "");

    // If not on home page, navigate first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for route change then scroll
      setTimeout(() => {
        const element = document.querySelector(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, navigate]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || isOpen
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-700"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Subal
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href, link.isScroll)}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-lg relative group"
              aria-label={`Navigate to ${link.name}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 font-medium"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none mr-7 "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-3xl text-white flex flex-col justify-center items-center space-y-8 md:hidden h-[100dvh]"
          >
            {/* Close Button Positioned to match strict padding */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-full transition-all"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center space-y-8 w-full px-6">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => handleLinkClick(link.href, link.isScroll)}
                  className="text-3xl font-bold text-slate-300 hover:text-cyan-400 transition-colors w-full py-2 text-center"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 text-lg hover:scale-105 active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
                aria-label="Download Resume"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
