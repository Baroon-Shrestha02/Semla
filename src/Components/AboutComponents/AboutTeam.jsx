import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const teamData = t("about.team.teamData", { returnObjects: true });

  // Get visible cards (main + 3 small)
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (activeIndex + i) % teamData.length;
      visible.push({
        ...teamData[index],
        originalIndex: index,
        position: i, // 0 = main, 1-3 = small cards
      });
    }
    return visible;
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teamData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  const handleCardClick = (clickedPosition) => {
    if (clickedPosition === 0) return; // Main card is already active

    // Move the clicked card to main position
    const newActiveIndex = (activeIndex + clickedPosition) % teamData.length;
    setActiveIndex(newActiveIndex);
  };

  const visibleCards = getVisibleCards();
  const mainCard = visibleCards[0];
  const smallCards = visibleCards.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mb-12 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            {t("about.team.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("about.team.subtitle")}
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">PREV</span>
            </button>

            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <span className="text-sm font-medium">NEXT</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Main Carousel Container */}
          <div className="flex flex-col lg:flex-row gap-8 items-start h-[600px]">
            {/* Small Cards Column - Fixed Height with Hidden Overflow */}
            <div className="flex lg:flex-col gap-4 order-2 lg:order-1 overflow-hidden w-full lg:w-auto">
              <AnimatePresence mode="popLayout">
                {smallCards.map((member, index) => (
                  <motion.div
                    key={`${member.id}-${member.position}`}
                    onClick={() => handleCardClick(member.position)}
                    className="cursor-pointer transition-all duration-300 hover:opacity-80 flex-shrink-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    layout
                  >
                    <div className="w-32 h-40 lg:w-24 lg:h-32 relative overflow-hidden rounded-lg bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center lg:text-left">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {member.name}
                      </h4>
                      <p className="text-xs text-gray-600">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Main Card - Fixed Position */}
            <div className="flex-1 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`main-${mainCard.id}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col lg:flex-row gap-8 items-start"
                >
                  {/* Main Image */}
                  <motion.div
                    className="w-full lg:w-96 h-96 lg:h-[500px] relative overflow-hidden rounded-lg bg-gray-200"
                    layoutId={`image-${mainCard.originalIndex}`}
                  >
                    <img
                      src={mainCard.image}
                      alt={mainCard.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    className="flex-1 lg:pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <motion.h2
                      className="text-3xl font-light text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {mainCard.name}
                    </motion.h2>

                    <motion.h3
                      className="text-lg text-gray-600 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {mainCard.role}
                    </motion.h3>

                    <motion.p
                      className="text-lg leading-relaxed text-gray-700 italic mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {mainCard.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
