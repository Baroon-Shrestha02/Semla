import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const teamData = [
    {
      id: 1,
      name: "Krishna Ghising",
      role: "Chairman",
      description:
        "Beginning his journey as a student in Japan, Mr. Krishna Ghising gained first-hand experience of studying abroad. Over the years, he built strong expertise in SSW, TITP, and visa & immigration processes, with more than 8 years of dedicated experience in the field. He has worked as a Foreigner Requirement Officer as well as a translator and interpreter, establishing valuable connections with many companies and schools in Japan. His strong network and professional background ensure that students and individuals receive reliable guidance and support. With his leadership, applicants can move forward with confidence, knowing that their educational and career opportunities abroad are in trustworthy hands.",
      image: "About/chairman.jpg",
    },
    {
      id: 2,
      name: "Dhiraj Lama",
      role: "Director",
      description:
        "With over 5 years of experience residing in Japan, Mr. Dhiraj Lama brings invaluable knowledge about Japanese culture, lifestyle, rules, and regulations. His personal journey abroad allows him to guide students with practical insights that go beyond books and documents, giving them a clear picture of what to expect before starting their future in Japan. As a director, he plays a vital role in bridging the gap between students’ aspirations and real-life experiences. From cultural orientation to day-to-day life guidance, he ensures that students are well-prepared and confident in their decision to study or work abroad. His approachable nature and expertise make the process trustworthy, assuring students and their families that they are in capable hands throughout their journey.",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Bina Lama",
      role: "Receptionist",
      description:
        "As the first point of contact at the consultancy, Ms. Bina Lama ensures that every student and visitor is welcomed with warmth and professionalism. She plays an important role in creating a friendly and organized environment where students feel comfortable and supported from the very beginning. Beyond handling front-desk responsibilities, she assists in guiding students through initial inquiries and directs them to the right services with clarity and care. Her dedication to communication and coordination helps maintain a smooth flow between the team and clients, ensuring that no student feels uncertain or left behind. Through her approachable nature and efficiency, she contributes greatly to building trust and positive experiences for everyone who walks through the door.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Lakshya Tamang",
      role: "Instructor",
      description:
        "Mr. Lakshya Tamang is a dedicated Japanese language instructor who helps students build a strong foundation in communication skills essential for studying and working in Japan. With a focus on both language proficiency and cultural understanding, his classes are designed to prepare students for real-life situations abroad. He emphasizes interactive learning, practical exercises, and confidence-building techniques, ensuring students can adapt smoothly to new environments. Beyond academics, he motivates learners to embrace Japanese culture and lifestyle, guiding them to succeed not only in their studies but also in their professional and personal journeys overseas.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Bimala Ghising",
      role: "Instructor",
      description:
        "Ms. Bimala Ghising brings passion and expertise as a Japanese language instructor, committed to equipping students with the skills they need for success abroad. Her teaching approach combines structured lessons with engaging, interactive activities that make learning both effective and enjoyable. She ensures students not only master grammar and vocabulary but also gain cultural insights that prepare them for life in Japan. By offering personalized guidance and continuous encouragement, she helps learners stay motivated and confident, building the discipline required to achieve their academic and career goals in an international setting.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face",
    },
  ];

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
