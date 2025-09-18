import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, BookOpen, Building, FileText, Home, Users } from "lucide-react";

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

export default ServiceCard;
