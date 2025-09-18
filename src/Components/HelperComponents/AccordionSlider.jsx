import React, { useState } from "react";
import { useTranslation } from "react-i18next";
export default function AccordionSlider() {
  const [active, setActive] = useState(0);

  const { t } = useTranslation();

  const slides = t("about.why.slides", { returnObjects: true });

  const handleSlideClick = (index) => {
    setActive(index);
  };

  return (
    <div className="w-full px-2 sm:px-4 lg:px-6">
      <div className="block lg:hidden space-y-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setActive(active === index ? -1 : index)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${
              active === index ? "h-auto min-h-[340px]" : "h-24"
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="bg-black absolute inset-0 opacity-50"></div>

            {/* Card Content */}
            <div className="relative z-10 p-4 h-full flex flex-col justify-start">
              {/* Top: Title */}
              <div className="flex items-center space-x-3">
                <h3 className="text-white font-bold text-lg leading-tight">
                  {slide.title}
                </h3>
              </div>

              {/* Bottom: Active Content */}
              {active === index && (
                <div className="mt-auto pt-3 animate-fadeIn">
                  <p className="text-blue-200 text-sm font-medium mb-2">
                    {slide.content}
                  </p>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet version - Enhanced */}
      <div className="hidden lg:block">
        <div className="text-center mb-8">
          {/* <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-200 mx-auto rounded-full"></div> */}
        </div>

        <div className="flex h-[450px] gap-4 w-[150vw] container mx-auto overflow-hidden rounded-2xl relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`relative transition-all duration-700 ease-out cursor-pointer overflow-hidden group rounded-4xl
                ${
                  active === index
                    ? "flex-[4] bg-black/40"
                    : "flex-[1] bg-gray-900 hover:flex-[1.3]"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700  ${
                  active === index
                    ? "opacity-70 scale-105"
                    : "opacity-50 scale-100 group-hover:opacity-60 group-hover:scale-105"
                }`}
                loading="lazy"
              />

              {/* Vertical Label with enhanced styling */}
              <div
                className={`absolute top-1/2 left-6  transition-all duration-500 z-20 ${
                  active === index
                    ? "opacity-0 transform translate-x-4"
                    : "opacity-100 transform translate-x-0"
                }`}
                style={{
                  transform:
                    active === index
                      ? "rotate(-90deg) translateX(-50%) translateX(16px)"
                      : "rotate(-90deg) translateX(-50%)",
                  transformOrigin: "left center",
                  whiteSpace: "nowrap",
                }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium text-sm tracking-wider uppercase">
                    {slide.title}
                  </span>
                </div>
              </div>

              {active === index && (
                <div className="absolute bottom-6 left-6 z-20 text-white space-y-4 max-w-2xl animate-slideUp">
                  <h3 className="text-2xl font-bold leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {slide.title}
                  </h3>
                  <p className="text-blue-200 font-medium text-lg">
                    {slide.content}
                  </p>
                  <p className="text-gray-200 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

              <div
                className={`absolute inset-0 border-2 border-transparent transition-all duration-300 ${
                  active === index
                    ? "border-blue-400/30"
                    : "group-hover:border-white/20"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.7s ease-out;
        }
      `}</style>
    </div>
  );
}
