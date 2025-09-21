import React, { useState, useEffect, useRef } from "react";
import { Star, Heart, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const testimonials = t("home.testimonials", { returnObjects: true });

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

  // Handle arrow key navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        handleUpArrow();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        handleDownArrow();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleUpArrow = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDownArrow = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-300 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  // Get the three testimonials to display (active + 2 next)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 2; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push({
        ...testimonials[index],
        isActive: i === 0,
        position: i,
      });
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gray-50 py-16 px-6 relative overflow-hidden"
    >
      <div className="flex items-center justify-center flex-col gap-4 my-6">
        <div className="font-extrabold text-2xl md:text-5xl ">
          {t("home.testi.title")}
          <span className="bg-primary text-secondary px-6 py-2 inline-block -rotate-2 rounded-full">
            {t("home.testi.title2")}
          </span>
        </div>
        <div className="max-w-3xl font-extralight text-lg md:text-2xl text-center">
          {t("home.testi.des")}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image and Header */}
          <div className="relative">
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <img
                src="Home/test.jpeg"
                alt="Nature landscape"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              {/* Stats Badge */}
              <div className="absolute bottom-6 right-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
                <div className="text-5xl lg:text-6xl font-bold text-gray-800">
                  500+
                </div>
                <div className="text-sm text-gray-600 mt-1">Happy Students</div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonials Stack */}
          <div className="relative">
            {/* Navigation Controls */}
            <div className="absolute -top-16 right-0 z-20 flex flex-col space-y-2">
              <button
                onClick={handleUpArrow}
                className="w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <button
                onClick={handleDownArrow}
                className="w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonials Stack */}
            <div className="space-y-4 ">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${activeIndex}-${index}`}
                  className={`rounded-2xl p-6 shadow-xl transition-all duration-500 transform ${
                    testimonial.isActive
                      ? "bg-secondary text-white scale-100 z-10"
                      : "bg-white text-gray-800 scale-95 opacity-90"
                  } ${index > 0 ? "-mt-2" : ""}`}
                >
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <p
                    className={`text-base leading-relaxed mb-6 ${
                      testimonial.isActive ? "text-white" : "text-gray-700"
                    }`}
                  >
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 border-t-4">
                    <div>
                      <div className="font-semibold text-lg">
                        {testimonial.author}
                      </div>
                      <div className="font-extralight">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
