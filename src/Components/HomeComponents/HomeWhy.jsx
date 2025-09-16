import React from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Globe, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    id: 1,
    title: "Expert Counselors",
    description:
      "Experienced team providing personalized guidance with deep industry knowledge",
    icon: Users,
    position: "left",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Global Network",
    description: "Connected with 200+ universities worldwide across the globe",
    icon: Globe,
    position: "left",
    delay: 0.3,
  },
  {
    id: 3,
    title: "95% Success Rate",
    description:
      "Proven track record with thousands of successful placements worldwide",
    icon: Award,
    position: "right",
    delay: 0.2,
  },
  {
    id: 4,
    title: "Comprehensive Services",
    description:
      "End-to-end support from career counseling to post-arrival assistance",
    icon: BookOpen,
    position: "right",
    delay: 0.4,
  },
];

const ReasonCard = ({ reason, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: reason.position === "left" ? -60 : 60,
        scale: 0.9,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, scale: 1 }
          : { opacity: 0, x: reason.position === "left" ? -60 : 60, scale: 0.9 }
      }
      transition={{
        duration: 0.6,
        delay: reason.delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`
        relative group cursor-pointer mb-6 md:mb-8
        ${reason.position === "left" ? "text-right" : "text-left"}
      `}
      whileHover={{
        scale: 1.02,
        x: reason.position === "left" ? -8 : 8,
        transition: { duration: 0.2 },
      }}
    >
      {/* Connection Line - Hidden on mobile */}
      <div
        className={`
          hidden lg:block absolute top-1/2 -translate-y-1/2 w-6 h-px 
          bg-gradient-to-r from-blue-500/40 to-emerald-500/40
          ${reason.position === "left" ? "-right-6" : "-left-6"}
          group-hover:w-8 group-hover:from-blue-500 group-hover:to-emerald-500
          transition-all duration-300
        `}
      />

      {/* Pointer - Hidden on mobile */}
      <div
        className={`
          hidden lg:block absolute top-1/2 -translate-y-1/2 z-10
          ${reason.position === "left" ? "-right-2" : "-left-2"}
        `}
      >
        <div className="w-4 h-4 bg-white rotate-45 border border-gray-200 group-hover:border-blue-400 transition-colors duration-200 shadow-sm" />
      </div>

      {/* Card Content */}
      <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200/50 relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className={`mb-3 ${
              reason.position === "left" ? "flex justify-end" : ""
            }`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-200">
            {reason.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {reason.description}
          </p>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: "40%" }}
            transition={{ duration: 0.3 }}
            className={`h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mt-4 ${
              reason.position === "left" ? "ml-auto" : ""
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function HomeWhy() {
  const centerRef = React.useRef(null);
  const isCenterInView = useInView(centerRef, { once: true, threshold: 0.2 });
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.3 });

  const leftReasons = reasons.filter((reason) => reason.position === "left");
  const rightReasons = reasons.filter((reason) => reason.position === "right");

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-emerald-400/20 rounded-full blur-3xl"
        />

        {/* Additional decorative elements for larger screens */}
        <div className="hidden lg:block">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-400/20 rounded-xl blur-2xl rotate-45"
          />
          <motion.div
            animate={{
              x: [0, 10, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-orange-400/20 rounded-full blur-xl"
          />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/10 to-transparent opacity-">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Why trust
            <span className="bg-primary text-secondary px-4 py-1 rounded-full inline-block -rotate-4">
              SEMLA
            </span>
            ?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            Discover what makes us the preferred choice for students worldwide
          </p>
        </motion.div>

        {/* Main Content - Mobile Stack, Desktop Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden space-y-6">
            {/* All reasons stacked on mobile */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <ReasonCard key={reason.id} reason={reason} index={index} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <Link to="/about">
                <button className="bg-primary text-secondary font-bold text-xl px-4 py-2 rounded-xl">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout - Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {leftReasons.map((reason, index) => (
                <div key={reason.id} className="flex justify-end">
                  <ReasonCard reason={reason} index={index} />
                </div>
              ))}
            </div>

            {/* Center Column - Logo with enhanced design */}
            <div className="flex flex-col justify-center items-center space-y-8">
              <motion.div
                ref={centerRef}
                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                animate={
                  isCenterInView
                    ? { opacity: 1, scale: 1, rotateY: 0 }
                    : { opacity: 0, scale: 0.5, rotateY: 180 }
                }
                transition={{
                  duration: 1,
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
                {/* Enhanced logo container */}
                <div className="relative p-8 xl:p-10 ">
                  {/* Animated gradient border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-1 rounded-3xl opacity-20 blur-sm"
                  />

                  {/* Inner glow effect */}

                  <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center">
                    <img
                      src="Main/logo2.png"
                      alt="SEMLA Logo"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating stats around logo */}
              <div className="relative w-full max-w-sm">
                {/* Floating stat bubbles */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -left-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-100"
                >
                  <div className="text-blue-600 font-bold text-lg">10+</div>
                  <div className="text-gray-600 text-xs">Universities</div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 6, 0],
                    rotate: [0, -1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -top-2 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-emerald-100"
                >
                  <div className="text-emerald-600 font-bold text-lg">500+</div>
                  <div className="text-gray-600 text-xs">Students</div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-purple-100"
                >
                  <div className="text-purple-600 font-bold text-lg">98%</div>
                  <div className="text-gray-600 text-xs">Success Rate</div>
                </motion.div>
              </div>

              {/* Central CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isCenterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8"
              >
                <Link
                  to="/about"
                  className="group relative  font-bold   overflow-hidden"
                >
                  {/* Button text */}
                  <span className="relative z-10 flex items-center gap-2 px-6 py-1 rounded-2xl bg-primary text-secondary transition-all duration-300 transform hover:scale-105">
                    Learn more about us
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </span>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {rightReasons.map((reason, index) => (
                <div key={reason.id} className="flex justify-start">
                  <ReasonCard reason={reason} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
