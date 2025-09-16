import React from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  FileText,
  Users,
  Calendar,
  Globe,
  Award,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Japanese Language Class",
    subtitle: "Japan Focused",
    description:
      "Comprehensive Japanese language learning with expert instructors",
    icon: Globe,
    color: "blue",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Mock Tests",
    subtitle: "Test Preparation",
    description:
      "Practice tests and comprehensive preparation for various international exams",
    icon: FileText,
    color: "red",
    delay: 0.2,
  },
  {
    id: 3,
    title: "SSW Visa Class",
    subtitle: "Inquiry & Support",
    description:
      "Get personalized consultation and guidance for your SSW visa application",
    icon: Users,
    color: "emerald",
    delay: 0.3,
  },
  {
    id: 4,
    title: "TITP Visa Class",
    subtitle: "Flexible Timing",
    description:
      "Get assistance and guidance for TITP visa process with flexible consultation options",
    icon: Calendar,
    color: "purple",
    delay: 0.4,
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const Icon = service.icon;

  const colorClasses = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      hover: "hover:from-blue-600 hover:to-blue-700",
      shadow: "shadow-blue-500/25",
      text: "text-blue-600",
    },
    red: {
      bg: "from-red-500 to-red-600",
      hover: "hover:from-red-600 hover:to-red-700",
      shadow: "shadow-red-500/25",
      text: "text-red-600",
    },
    emerald: {
      bg: "from-emerald-500 to-emerald-600",
      hover: "hover:from-emerald-600 hover:to-emerald-700",
      shadow: "shadow-emerald-500/25",
      text: "text-emerald-600",
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      hover: "hover:from-purple-600 hover:to-purple-700",
      shadow: "shadow-purple-500/25",
      text: "text-purple-600",
    },
  };

  const colors = colorClasses[service.color];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.8,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.8 }
      }
      transition={{
        duration: 0.6,
        delay: service.delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.2 },
      }}
      className="group cursor-pointer"
    >
      <div
        className={`
        relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} ${colors.hover}
        p-6 shadow-xl ${colors.shadow} hover:shadow-2xl
        transition-all duration-300 transform
        border border-white/20
      `}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Title and subtitle */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
              {service.title}
            </h3>
            <p className="text-white/80 text-sm font-medium">
              {service.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
            {service.description}
          </p>

          {/* Arrow indicator */}
          <motion.div
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
            initial={{ x: -10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function LearningCenterSection() {
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const contentRef = React.useRef(null);
  const isContentInView = useInView(contentRef, { once: true, threshold: 0.2 });

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-secondary mx-6 rounded-4xl">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Our
            <span className="bg-primary text-secondary inline-block -rotate-2 px-6 py-1 rounded-full">
              Learning Center
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Left Content - Descriptive Text */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="xl:col-span-2 space-y-8"
            >
              <div className="prose prose-lg max-w-none">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <BookOpen className="w-10 h-10 text-primary" />
                  What We Offer
                </h3>

                <div className="space-y-6 text-white leading-relaxed">
                  <p className="text-lg">
                    We aim to make international-level education accessible to
                    everyone. Our programs are designed to help ambitious
                    students achieve their goals without breaking the bank.
                  </p>

                  <p>
                    <strong className="text-white">
                      Our main focus is Japan-oriented education
                    </strong>
                    , including Japanese Language Classes (JLPT preparation),
                    Test Preparation, and visa-related courses like SSW and
                    TITP. Our instructors are experienced professionals who
                    guide you through every step of the process.
                  </p>

                  <p>
                    Many institutions promise results, but few deliver.{" "}
                    <strong className="text-white">
                      Our mock tests and preparation programs
                    </strong>{" "}
                    give real exam-like experiences, detailed analysis, and
                    personalized feedback, ensuring measurable improvement and
                    confidence.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-primary my-8">
                    <p className="text-gray-700 mb-3">
                      <strong>
                        Meet our experts on weekdays from 10:00 AM to 3:00 PM
                      </strong>{" "}
                      - get personalized consultation before enrolling in any
                      class.
                    </p>
                    <p className="text-gray-600">
                      <strong>Flexible schedules:</strong> Choose classes
                      between 7 AM and 4 PM according to your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Service Cards */}
            <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
