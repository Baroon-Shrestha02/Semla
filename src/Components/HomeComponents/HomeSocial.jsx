import React, { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { href } from "react-router-dom";

export default function HomeSocial() {
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

  const socialIcons = [
    {
      icon: Facebook,
      color: "text-blue-600",
      href: "https://www.facebook.com/people/Semla-Educational-Consultancy-Pvt-Ltd/61581247828180/",
    },
    {
      icon: Instagram,
      color: "text-pink-600",
      href: "https://www.instagram.com/semla.consultancy/?igsh=ejRrYm12NWk0aTF0#",
    },
    {
      icon: BsWhatsapp,
      color: "text-green-400",
      href: "https://wa.me/9779762588549",
    },
    {
      icon: Mail,
      color: "text-red-400",
      href: "mailto:info@semlaconsultancy.com",
    },
  ];

  // Sample images for the grid - you can replace these with actual image URLs
  const images = [
    {
      id: 1,
      src: "Home/img6.jpeg",
      alt: "Classroom",
    },
    {
      id: 2,
      src: "Home/img1.jpeg",
      alt: "Students studying",
    },
    {
      id: 3,
      src: "Home/img2.jpeg",
      alt: "Professional woman",
    },
    {
      id: 4,
      src: "Home/img3.jpeg",
      alt: "Study group",
    },
    {
      id: 5,
      src: "Home/img4.jpeg",
      alt: "Classroom lecture",
    },
    {
      id: 6,
      src: "Home/img5.jpeg",
      alt: "Students discussion",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('Main/logo3.png')",
        }}
      ></div>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary transform -translate-x-32 -translate-y-32 rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary transform translate-x-48 translate-y-48 rotate-12 opacity-80 overflow-hidden"></div>
      <div className="absolute top-1/4 right-10 w-0 h-0 border-l-20 border-r-20 border-b-40 border-l-transparent border-r-transparent border-b-secondary transform rotate-45"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                {t("home.social.title")}
                <span className="bg-primary text-secondary px-6  inline-block -rotate-4 rounded-full">
                  {t("home.social.title2")}
                </span>
              </h2>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                {t("home.social.des")}
              </p>
            </div>

            <div
              className={`flex space-x-6 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div
                    key={index}
                    className={`p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer transform delay-${
                      index * 100
                    }`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className={`w-6 h-6 ${social.color}`} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Grid Images */}
          <div className="relative">
            {/* Main grid container */}
            <div className="grid grid-cols-12 grid-rows-8 gap-3 h-96 lg:h-[500px]">
              {/* Image 1 - Top left, spans 2x2 */}
              <div
                className={`col-span-6 row-span-3 rounded-lg overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Image 2 - Top right */}
              <div
                className={`col-span-6 row-span-2 rounded-lg overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Image 3 - Tall right image */}
              <div
                className={`col-span-6 row-span-4 rounded-lg overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Image 4 - Middle left */}
              <div
                className={`col-span-6 row-span-2 rounded-lg overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Image 5 - Bottom middle */}
              <div
                className={`col-span-6 row-span-3 rounded-lg overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <img
                  src={images[4].src}
                  alt={images[4].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Image 6 - Bottom left */}
              <div
                className={`col-span-6 row-span-2 rounded-lg overflow-hidden shadow-lg transform transition-all duration-800 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <img
                  src={images[5].src}
                  alt={images[5].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
