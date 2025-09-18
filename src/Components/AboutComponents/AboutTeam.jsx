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
      name: "Arjun Shrestha",
      role: "CEO & Founder",
      description:
        "As the visionary behind the consultancy, Arjun Shrestha founded the organization with a mission to guide students towards brighter futures through quality education abroad. With years of experience in the field, he leads the team with dedication, ensuring every process is transparent and student-centered. His leadership combines strategic planning with personal mentorship, helping the consultancy grow while maintaining trust and credibility. He believes education is the bridge that transforms dreams into reality.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Sita Koirala",
      role: "Front-Desk Officer",
      description:
        "As the first point of contact for students and parents, Sita Koirala provides a welcoming environment that ensures comfort and trust. She handles inquiries, schedules appointments, and guides students through the initial steps of consultation. Her role is crucial in maintaining smooth communication between the team and clients. With her warm personality and professionalism, she sets the tone for positive experiences, making every visitor feel valued and supported from the very beginning.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Ramesh Adhikari",
      role: "Document Officer",
      description:
        "Ramesh Adhikari plays a vital role in ensuring that all student documents are prepared, verified, and submitted correctly. From academic transcripts to financial paperwork, he checks every detail with precision and care. His expertise helps students avoid delays and mistakes that could affect their applications. By maintaining accuracy and compliance with university and embassy requirements, he safeguards the credibility of the consultancy and contributes to the success of students pursuing studies abroad.",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Maya Gurung",
      role: "Counsellor",
      description:
        "As a student counsellor, Maya Gurung dedicates her time to understanding the aspirations and concerns of every learner. She carefully analyzes each student’s profile, offering guidance on the right courses, universities, and countries that match their goals. Her approach balances professional expertise with personal empathy, ensuring students feel confident in their decisions. She also provides ongoing support, from preparation to departure, making her an invaluable mentor throughout the study abroad journey.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Bikash Thapa",
      role: "Instructor",
      description:
        "Dedicated to shaping the academic foundation of students, Bikash Thapa conducts training sessions that focus on language skills and test preparation. He believes that strong communication and critical thinking abilities are essential for success in global education. His teaching style emphasizes practical learning, interactive exercises, and confidence building. Beyond academics, he motivates students to adapt to new cultures and environments, preparing them to excel not only in their studies but also in life abroad.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Anjali Maharjan",
      role: "Instructor",
      description:
        "Anjali Maharjan is passionate about helping students strengthen their academic and language skills for international opportunities. Her classes are designed to be engaging, comprehensive, and student-focused, ensuring that learners grasp concepts effectively. She uses practical examples, exercises, and constructive feedback to create an interactive learning environment. Her dedication goes beyond the classroom, as she continuously encourages students to stay disciplined, motivated, and confident while preparing for the challenges of studying overseas.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Kiran Lama",
      role: "Instructor",
      description:
        "With a strong background in education and training, Kiran Lama focuses on equipping students with the skills they need to succeed in foreign universities. He believes in creating a balanced learning environment where theory and practice go hand in hand. His teaching emphasizes discipline, consistency, and adaptability—qualities essential for students planning to study abroad. Through guidance, encouragement, and structured lessons, he helps learners gain the confidence to achieve their academic and career goals.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=500&fit=crop&crop=face",
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
