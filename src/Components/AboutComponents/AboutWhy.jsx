import React from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Globe, BookOpen, Clock, Shield } from "lucide-react";

const reasons = [
  // Left side reasons
  {
    id: 1,
    title: "Expert Counselors",
    description:
      "Our experienced team provides personalized guidance with deep industry knowledge to help you make informed decisions",
    icon: Users,
    position: "left",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Global Network",
    description:
      "Connected with 200+ universities worldwide, giving you access to the best educational opportunities across the globe",
    icon: Globe,
    position: "left",
    delay: 0.3,
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance throughout your journey, from application to graduation and beyond",
    icon: Clock,
    position: "left",
    delay: 0.5,
  },
  // Right side reasons
  {
    id: 4,
    title: "95% Success Rate",
    description:
      "Proven track record with thousands of successful placements in top universities around the world",
    icon: Award,
    position: "right",
    delay: 0.2,
  },
  {
    id: 5,
    title: "Comprehensive Services",
    description:
      "End-to-end support covering everything from career counseling to post-arrival assistance",
    icon: BookOpen,
    position: "right",
    delay: 0.4,
  },
  {
    id: 6,
    title: "Trusted & Secure",
    description:
      "Your personal information and documents are completely secure with our encrypted systems and privacy protocols",
    icon: Shield,
    position: "right",
    delay: 0.6,
  },
];

const ReasonCard = ({ reason, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: reason.position === "left" ? -100 : 100,
        scale: 0.8,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              x: reason.position === "left" ? -100 : 100,
              scale: 0.8,
            }
      }
      transition={{
        duration: 0.8,
        delay: reason.delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`
        relative group cursor-pointer mb-8
        ${reason.position === "left" ? "text-right" : "text-left"}
      `}
      whileHover={{
        scale: 1.05,
        x: reason.position === "left" ? -10 : 10,
        transition: { duration: 0.3 },
      }}
    >
      {/* Connection Line */}
      <div
        className={`
        absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400
        ${reason.position === "left" ? "-right-8" : "-left-8"}
        group-hover:w-12 transition-all duration-300
      `}
      />

      {/* Tooltip Pointer */}
      <div
        className={`
        absolute top-1/2 -translate-y-1/2 z-10
        ${reason.position === "left" ? "-right-3" : "-left-3"}
      `}
      >
        <div
          className={`
          w-6 h-6 bg-white rotate-45 border-2 border-gray-200
          group-hover:border-blue-400 transition-colors duration-300
          shadow-lg
        `}
        />
      </div>

      {/* Card Content */}
      <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 relative overflow-hidden max-w-xs">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

        <div className="relative z-10">
          {/* Title */}
          <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
            {reason.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {reason.description}
          </p>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: "60%" }}
            transition={{ duration: 0.4 }}
            className={`h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-4 ${
              reason.position === "left" ? "ml-auto" : ""
            }`}
          />
        </div>

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default function AboutWhy() {
  const centerRef = React.useRef(null);
  const isCenterInView = useInView(centerRef, { once: true, threshold: 0.3 });
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.5 });

  const leftReasons = reasons.filter((reason) => reason.position === "left");
  const rightReasons = reasons.filter((reason) => reason.position === "right");

  return (
    <section className="py-24  relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 capitalize">
            Why to trust <span className="text-secondary">SEMLA</span>?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for thousands of
            students worldwide
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3  items-center max-w-7xl mx-auto">
          {/* Left Column - Reasons */}
          <div className="space-y-8 lg:pr-8">
            {leftReasons.map((reason, index) => (
              <div key={reason.id} className="flex justify-end">
                <ReasonCard reason={reason} index={index} />
              </div>
            ))}
          </div>

          {/* Center Column - Logo */}
          <div className="flex justify-center items-center">
            <motion.div
              ref={centerRef}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={
                isCenterInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.5,
                      rotateY: 180,
                    }
              }
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="relative z-20"
            >
              {/* Central Container with Glow */}
              <div className="relative p-8 bg-white rounded-full shadow-2xl ">
                {/* Animated Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full "
                />

                {/* Logo placeholder - replace with actual logo */}
                <img src="Main/logo2.png" alt="" className="h-50" />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Reasons */}
          <div className="space-y-8 lg:pl-8">
            {rightReasons.map((reason, index) => (
              <div key={reason.id} className="flex justify-start">
                <ReasonCard reason={reason} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
