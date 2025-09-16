import React from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  BookOpen,
  FileText,
  CreditCard,
  Plane,
  GraduationCap,
  MapPin,
  CheckCircle,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Initial Consultation",
    description:
      "Free counseling session to understand your goals, assess your profile, and recommend the best study path in Japan.",
    icon: MessageCircle,
    color: "blue",
    duration: "1-2 days",
  },
  {
    id: 2,
    step: "02",
    title: "Language Training",
    description:
      "Comprehensive JLPT preparation and Japanese language courses tailored to your target university requirements.",
    icon: BookOpen,
    color: "green",
    duration: "3-12 months",
  },
  {
    id: 3,
    step: "03",
    title: "University Selection",
    description:
      "Guided selection of universities and programs that match your academic background, interests, and career goals.",
    icon: GraduationCap,
    color: "purple",
    duration: "2-3 weeks",
  },
  {
    id: 4,
    step: "04",
    title: "Documentation",
    description:
      "Complete assistance with application forms, academic transcripts, recommendation letters, and all required documents.",
    icon: FileText,
    color: "orange",
    duration: "4-6 weeks",
  },
  {
    id: 5,
    step: "05",
    title: "Visa Processing",
    description:
      "End-to-end visa application support including COE processing, interview preparation, and submission guidance.",
    icon: CreditCard,
    color: "red",
    duration: "2-4 months",
  },
  {
    id: 6,
    step: "06",
    title: "Pre-Departure",
    description:
      "Orientation sessions covering cultural adaptation, accommodation arrangements, and essential preparation for Japan.",
    icon: MapPin,
    color: "teal",
    duration: "2-3 weeks",
  },
  {
    id: 7,
    step: "07",
    title: "Departure & Arrival",
    description:
      "Flight booking assistance, airport guidance, and arrival support to ensure smooth transition to your new journey.",
    icon: Plane,
    color: "indigo",
    duration: "1 week",
  },
  {
    id: 8,
    step: "08",
    title: "Post-Arrival Support",
    description:
      "Ongoing assistance for settling in Japan including accommodation, bank account setup, and academic guidance.",
    icon: CheckCircle,
    color: "emerald",
    duration: "Ongoing",
  },
];

const StepCard = ({ step, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const Icon = step.icon;

  // Determine position in grid
  const isLeftColumn = index % 2 === 0;
  const hasNext = index < processSteps.length - 1;

  const colorVariants = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600",
    teal: "from-teal-500 to-teal-600",
    indigo: "from-indigo-500 to-indigo-600",
    emerald: "from-emerald-500 to-emerald-600",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative group"
    >
      <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Step number and icon */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="flex-shrink-0 relative"
        >
          <div
            className={`w-20 h-20 bg-gradient-to-br ${
              colorVariants[step.color]
            } rounded-2xl flex items-center justify-center shadow-lg border-2 border-white`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-md border-2 border-gray-100">
            {step.step}
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            {step.description}
          </p>
          <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {step.duration}
          </div>
        </div>
      </div>

      {/* Connection Arrows - Only for desktop */}
      {hasNext && (
        <>
          {/* Mobile: Simple down arrow */}
          <div className="md:hidden flex justify-center mt-4 mb-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              className="w-8 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full flex items-center justify-center"
            >
              <ArrowDown className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default function ServicesProcessSection() {
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.3 });

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-green-400/10 rounded-full blur-2xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Your Visa{" "}
            <span className="bg-primary text-secondary px-6 py-2 inline-block rounded-full -rotate-3">
              Work Process
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From your first consultation to settling in Japan, we guide you
            through every step of your study abroad journey with personalized
            support and expert guidance.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experienced team is here to guide you through every step. Book
              your free consultation today and take the first step towards your
              dream of studying in Japan.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-secondary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
