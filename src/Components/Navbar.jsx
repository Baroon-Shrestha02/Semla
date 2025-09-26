import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { t } = useTranslation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Handle scroll behavior for background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      x: "0%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const curveVariants = {
    closed: {
      d: "M 600 0 Q 600 300 600 600 Q 600 900 600 1200",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    open: {
      d: "M 600 0 Q 400 300 600 600 Q 400 900 600 1200",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const sidebarLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.service") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-">
          <div className="flex items-center justify-between">
            <Link to="/">
              <div
                className={`font-bold text-2xl transition-colors duration-300 my- ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-white hover:text-blue-200 drop-shadow-lg bg-white h-18 rounded-b-2xl"
                }`}
              >
                <img src="Main/logo3.png" className="w-40" alt="Logo" />
              </div>
            </Link>

            <div className="flex items-center gap-x-6">
              {/* Hamburger Menu Button */}
              <motion.button
                onClick={toggleSidebar}
                className={`p-2 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                  isScrolled
                    ? "text-gray-700"
                    : "text-white hover:bg-white/20  drop-shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 w-70 md:w-[35%] h-screen bg-white shadow-2xl z-50 overflow-hidden"
          >
            {/* Curved SVG Background */}
            <div className="absolute inset-0 overflow-hidden">
              <svg
                className="absolute -left-40 top-0 h-full w-40"
                viewBox="0 0 600 1200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={curveVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Sidebar Content */}
            <div className="relative z-10 p-8 h-full flex flex-col">
              {/* Close Button */}
              <div className="flex justify-end mb-12">
                <motion.button
                  onClick={toggleSidebar}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <motion.nav
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col space-y-8"
              >
                {sidebarLinks.map((link) => (
                  <motion.div key={link.to} variants={linkVariants}>
                    <Link
                      to={link.to}
                      onClick={toggleSidebar}
                      className="block text-2xl font-semibold text-gray-800 hover:text-secondary transition-colors duration-200 group"
                    >
                      <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="w-6 h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span>{link.label}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-auto pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-gray-500 mb-4">
                  Follow us on social media
                </p>
                <Link to="/contact">
                  <button
                    className="bg-secondary text-white w-full py-2 rounded-xl text-lg md:text-xl "
                    onClick={toggleSidebar}
                  >
                    Reach Us Out
                  </button>
                </Link>
                {/* <div className="flex space-x-4">
                  {["Facebook", "Twitter", "Instagram"].map((social, index) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div> */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
