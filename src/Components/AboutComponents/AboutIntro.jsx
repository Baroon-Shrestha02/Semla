import React, { useState, useEffect, useRef } from "react";
import { GraduationCap, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: GraduationCap,
      title: t("about.intro.features.1.title"),
      description: t("about.intro.features.1.description"),
    },
    {
      icon: Globe,
      title: t("about.intro.features.2.title"),
      description: t("about.intro.features.2.description"),
    },
    {
      icon: Users,
      title: t("about.intro.features.3.title"),
      description: t("about.intro.features.3.description"),
    },
    {
      icon: Award,
      title: t("about.intro.features.4.title"),
      description: t("about.intro.features.4.description"),
    },
  ];

  // Sample images for the grid
  const images = [
    {
      id: 1,
      src: "About/intro1.jpg",
      alt: "Students collaborating",
    },
    {
      id: 2,
      src: "About/intro2.jpg",
      alt: "University campus",
    },
    {
      id: 3,
      src: "About/intro3.jpg",
      alt: "Classroom learning",
    },
    {
      id: 4,
      src: "About/ori.jpeg",
      alt: "Professional consultation",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=350&h=250&fit=crop",
      alt: "Study session",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-6 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content - Introduction */}
          <div className="space-y-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t("about.intro.title1")}{" "}
                <span className="bg-secondary px-6 py-2 rounded-full text-white uppercase transform -rotate-3 inline-block">
                  Japan
                </span>
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {t("about.intro.p1")}
              </p>
            </div>

            {/* Feature Grid */}
            <div
              className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 transform delay-${
                      index * 100
                    }`}
                  >
                    <IconComponent className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <Link to="/contact">
                <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  {t("about.intro.btn")}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Grid Images - Masonry Style */}
          <div className="relative">
            <div className="columns-2 gap-4 space-y-4">
              {/* Column 1 items */}
              <div
                className={`break-inside-avoid rounded-xl overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div
                className={`break-inside-avoid rounded-xl overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div
                className={`break-inside-avoid rounded-xl overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <img
                  src={images[4].src}
                  alt={images[4].alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Column 2 items */}
              <div
                className={`break-inside-avoid rounded-xl overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div
                className={`break-inside-avoid rounded-xl overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
