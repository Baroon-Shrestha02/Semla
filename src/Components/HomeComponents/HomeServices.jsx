import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Building,
  BookOpen,
  DollarSign,
  Plane,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Career Counseling",
    description:
      "Personalized guidance to help you choose the right career path and study destination.",
    icon: Users,
    color: "bg-teal-500",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Tests Preparations",
    description:
      "Expert coaching to help you achieve best scores for university entry.",
    icon: BookOpen,
    color: "bg-gray-600",
    delay: 0.3,
  },
  {
    id: 3,
    title: "University and Visa Application",
    description:
      "Step-by-step support for your university admission and smooth visa process.",
    icon: Building,
    color: "bg-blue-600",
    delay: 0.2,
  },
  {
    id: 4,
    title: "Scholarships and Finances",
    description:
      "Explore scholarships and financial aid options to make education affordable.",
    icon: DollarSign,
    color: "bg-blue-500",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Flight and Accommodation",
    description:
      "Hassle-free travel bookings and housing arrangements near your university.",
    icon: Plane,
    color: "bg-green-600",
    delay: 0.5,
  },
  {
    id: 6,
    title: "Pre-Departure Preparations",
    description:
      "Comprehensive orientation for cultural, academic, and travel readiness.",
    icon: Home,
    color: "bg-green-500",
    delay: 0.6,
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 50,
              scale: 0.9,
            }
      }
      transition={{
        duration: 0.6,
        delay: service.delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={`
        relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl
        transition-all duration-300 cursor-pointer group overflow-hidden
        ${index === 2 ? "col-span-1 row-span-1" : "col-span-1 row-span-1"}
      `}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon Container */}
        <motion.div
          whileHover={{}}
          transition={{ duration: 0.6 }}
          className={`
            ${service.color} w-16 h-16 rounded-full 
            flex items-center justify-center mb-6
            shadow-lg group-hover:shadow-xl transition-shadow duration-300
          `}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-gray-800 font-semibold text-lg leading-tight group-hover:text-blue-700 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {service.description}
        </p>

        {/* Hover Line Effect */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "60%" }}
          transition={{ duration: 0.3 }}
          className="h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 mt-3 rounded-full"
        />
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

const HomeServices = () => {
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.5 });

  return (
    <section className="py-12 bg-secondary relative overflow-hidden mx-4 px-6 rounded-4xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          {/* Yellow Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: 120 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mb-2 rounded-full"
          />

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={
              isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Key Services{" "}
            <span className="relative">
              for you
              <motion.div
                initial={{ width: 0 }}
                animate={isHeaderInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute mt-2 left-0 h-1 bg-primary rounded-full"
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-blue-100 text-lg leading-relaxed"
          >
            Explore and conquer your study abroad dreams with our services
            especially designed for you where you can have a universal access to
            best universities and experience our complete guidance to help you
            require on reaching your extreme potential by getting access to
            world top education.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-secondary font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
