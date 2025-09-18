import { ArrowDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomeVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle modal open/close
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Restore scrolling
    // Pause the modal video when closing
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  const titleWords = t("home.hero.heading").split(" ");

  return (
    <>
      <div className="min-h-[100vh] overflow-hidden relative">
        <div className="relative h-full">
          <div className="relative h-screen">
            {/* Hero Video with Parallax */}
            <div
              className="absolute inset-0"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="h-[120%] w-full object-cover"
              >
                <source src="Home/Hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Enhanced Multi-layered Gradient Overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 pb-8 px-4">
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                  {/* Enhanced Title Section */}
                  <div className="flex-1 max-w-6xl">
                    <div className="space-y-6">
                      {/* Animated Title Words with Enhanced Effects */}
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
                          {titleWords.map((word, index) => (
                            <div
                              key={index}
                              className={`transform transition-all duration-1000 ease-out ${
                                isLoaded
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-full opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${index * 200 + 300}ms`,
                              }}
                            >
                              <h1 className="text-white font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight drop-shadow-2xl hover:scae-105 transition-transform duration-300 cursor-default">
                                {word}
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Description */}
                      <div
                        className={`transform transition-all duration-1000 ease-out ${
                          isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{ transitionDelay: "1500ms" }}
                      >
                        <p className="text-white text-lg lg:text-2xl font-light max-w-3xl leading-relaxed drop-shadow-lg backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                          {t("home.hero.subheading")}
                        </p>
                      </div>

                      {/* New Stats Section */}
                      <div
                        className={`transform transition-all duration-1000 ease-out ${
                          isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{ transitionDelay: "1700ms" }}
                      >
                        <div className="flex flex-wrap gap-4 mt-8">
                          {[
                            { number: "500+", label: t("stats.student") },
                            { number: "10+", label: t("stats.univesity") },
                            { number: "98%", label: t("stats.rate") },
                          ].map((stat, index) => (
                            <div key={index} className="text-center">
                              <div className="text-2xl lg:text-4xl font-bold text-white drop-shadow-lg">
                                {stat.number}
                              </div>
                              <div className="text-sm lg:text-base text-white/80 font-light">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <div
                    className={`transform transition-all duration-1000 ease-out ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{ transitionDelay: "1800ms" }}
                  >
                    <div className="flex flex-col gap-4 hidden md:block">
                      <Link to="/contact">
                        <button className="group relative px-8 py-4 bg-primary text-secondary hover:text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                          <span className="relative z-10">
                            {t("home.hero.btn1")}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </button>
                      </Link>

                      <button
                        onClick={openModal}
                        className="group  mt-4 px-6 py-3 border-2 border-white/30 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2 justify-center"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t("home.hero.btn2")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Background Elements */}
            <div
              className={`absolute top-1/4 left-8 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform transition-all duration-3000 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "-translate-x-16 opacity-0 -rotate-45"
              }`}
              style={{
                transitionDelay: "1000ms",
                animation: isLoaded
                  ? "pulse 4s ease-in-out infinite alternate"
                  : "none",
              }}
            />

            <div
              className={`absolute top-1/3 right-12 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-2xl transform transition-all duration-3000 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "translate-x-16 opacity-0 rotate-45"
              }`}
              style={{
                transitionDelay: "1200ms",
                animation: isLoaded
                  ? "pulse 3s ease-in-out infinite alternate-reverse"
                  : "none",
              }}
            />

            <div
              className={`absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl transform transition-all duration-2500 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "-translate-y-16 opacity-0 rotate-90"
              }`}
              style={{
                transitionDelay: "1400ms",
                animation: isLoaded ? "float 5s ease-in-out infinite" : "none",
              }}
            />

            {/* Scroll Indicator */}
            <div
              className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "2000ms" }}
            >
              <div className="flex flex-col items-center text-white/60 animate-bounce">
                <span className="text-sm mb-2">Scroll to explore</span>
                <ArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl mx-4 w-full bg-black rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video">
              <video
                ref={modalVideoRef}
                controls
                autoPlay
                className="w-full h-full"
              >
                <source src="Home/Hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Optional: Video Title/Description */}
            <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
              <h3 className="text-2xl font-bold text-white mb-2">Our Story</h3>
              <p className="text-gray-300">
                Discover how SEMLA has been transforming dreams into reality,
                helping students achieve their international education goals.
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}
