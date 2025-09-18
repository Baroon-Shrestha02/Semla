import React, { useState, useRef, useEffect } from "react";
import {
  Eye,
  Target,
  ArrowRight,
  Sparkles,
  Users,
  BookOpen,
  Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
}

function SectionCard({ section, index }) {
  const [hoveredHighlight, setHoveredHighlight] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [ref, isInView] = useInView(0.2);

  const isTextLeft = section.layout === "text-left";

  return (
    <div className="min-h-screen relative overflow-hidden py-8 md:py-0">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className={`flex flex-col ${
            isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center min-h-screen gap-8 lg:gap-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Text Content */}
          <div
            className={`flex-1 space-y-6 md:space-y-8 ${
              isTextLeft ? "text-left" : "lg:text-right text-left"
            }`}
          >
            <div
              className={`space-y-3 md:space-y-4 transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {section.title}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                {section.subtitle}
              </h3>
            </div>

            <p
              className={`text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {section.description}
            </p>

            {/* Highlights */}
            <div
              className={`space-y-3 md:space-y-4 transition-all duration-700 delay-400 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {section.highlights.map((highlight, idx) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredHighlight(idx)}
                    onMouseLeave={() => setHoveredHighlight(null)}
                    className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      hoveredHighlight === idx
                        ? isTextLeft
                          ? "transform translate-x-2"
                          : "transform -translate-x-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${section.gradientFrom} ${section.gradientTo} text-white flex-shrink-0`}
                    >
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                        {highlight.text}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 truncate md:whitespace-normal">
                        {highlight.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ArrowRight
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          section.accentColor
                        } transition-transform duration-200 ${
                          hoveredHighlight === idx
                            ? "transform translate-x-1"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div
              className={`flex gap-4 md:gap-8 pt-6 md:pt-8 transition-all duration-700 delay-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                isTextLeft ? "justify-start" : "lg:justify-end justify-start"
              }`}
            >
              {section.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className={`text-2xl md:text-3xl font-bold ${section.accentColor}`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Content */}
          <div
            className={`flex-1 w-full transition-all duration-700 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative">
              {/* Main visual container */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-gray-100 shadow-2xl flex items-center justify-center group">
                <img
                  src={section.image}
                  alt={`${section.title} illustration`}
                  className={`w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    // Fallback to SVG placeholder if image fails to load
                    const svgContent = `
                      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                        <defs>
                          <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:${
                              section.id === "vision" ? "#3B82F6" : "#8B5CF6"
                            };stop-opacity:1" />
                            <stop offset="100%" style="stop-color:${
                              section.id === "vision" ? "#1E40AF" : "#7C3AED"
                            };stop-opacity:1" />
                          </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grad${index})"/>
                        <circle cx="80" cy="80" r="3" fill="white" opacity="0.3"/>
                        <circle cx="320" cy="60" r="4" fill="white" opacity="0.2"/>
                        <circle cx="350" cy="220" r="5" fill="white" opacity="0.25"/>
                        <text x="200" y="130" fill="white" font-size="28" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold">
                          ${section.title}
                        </text>
                        <text x="200" y="160" fill="white" font-size="14" text-anchor="middle" font-family="Arial, sans-serif" opacity="0.8">
                          Inspiring Excellence
                        </text>
                        <text x="200" y="190" fill="white" font-size="12" text-anchor="middle" font-family="Arial, sans-serif" opacity="0.6">
                          Image Placeholder
                        </text>
                      </svg>
                    `;
                    e.target.src = `data:image/svg+xml;base64,${btoa(
                      svgContent
                    )}`;
                    setImageLoaded(true);
                  }}
                />

                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${section.gradientFrom} ${section.gradientTo} rounded-2xl flex items-center justify-center`}
                  >
                    <div className="text-white text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-sm opacity-80">Loading...</p>
                    </div>
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${section.gradientFrom}/10 ${section.gradientTo}/5 rounded-2xl opacity-50`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .floating-element {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(-5px) rotate(0deg);
          }
          25% {
            transform: translateY(5px) rotate(1deg);
          }
          50% {
            transform: translateY(-5px) rotate(0deg);
          }
          75% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        @media (max-width: 768px) {
          .floating-element {
            animation: float-mobile 3s ease-in-out infinite;
          }

          @keyframes float-mobile {
            0%,
            100% {
              transform: translateY(-3px) rotate(0deg);
            }
            50% {
              transform: translateY(3px) rotate(0deg);
            }
          }
        }
      `}</style>
    </div>
  );
}

export default function AboutVision() {
  const { t } = useTranslation();
  const sections = [
    {
      id: "vision",
      title: "Our Vision",
      subtitle: "Shaping the Future of Global Education",
      description:
        "We envision a world where geographical boundaries don't limit educational aspirations. Our vision is to create seamless pathways for students worldwide to access Japan's world-class education system, fostering cross-cultural understanding and building tomorrow's global leaders.",
      highlights: [
        {
          icon: Users,
          text: "Cultural Bridge Building",
          description: "Connecting diverse communities through education",
        },
        {
          icon: Sparkles,
          text: "Innovation in Learning",
          description: "Pioneering new approaches to student success",
        },
      ],
      stats: [
        { number: "10+", label: t("stats.university") },
        { number: "500+", label: t("stats.student") },
        { number: "98%", label: t("stats.rate") },
      ],
      layout: "text-left",
      accentColor: "text-blue-600",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600",
      image: "About/vision.png", // Separate image for vision
    },
    {
      id: "mission",
      title: "Our Mission",
      subtitle: "Empowering Dreams Through Education",
      description:
        "Our mission is to provide comprehensive, personalized guidance to students seeking education in Japan. We are committed to excellence in every aspect of our service, from initial consultation to successful enrollment and beyond, ensuring each student's journey is supported with expertise, care, and dedication.",
      highlights: [
        {
          icon: BookOpen,
          text: "Comprehensive Guidance",
          description: "End-to-end support for your educational journey",
        },
        {
          icon: Heart,
          text: "Personalized Guidance",
          description: "Tailored solutions for each student's unique needs",
        },
      ],
      stats: [
        { number: "24/7", label: t("stats.support") },
        { number: "100%", label: t("stats.satisfcation") },
        { number: "5+", label: t("stats.exp") },
      ],
      layout: "text-right",
      accentColor: "text-purple-600",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-600",
      image: "About/mission.png", // Separate image for mission
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {sections.map((section, index) => (
        <SectionCard key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}
