import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Users,
} from "lucide-react";

export default function EnhancedFAQCta() {
  const [isHovered, setIsHovered] = useState(false);

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "Whatsapp",
      description: "Instant support",
      color: "bg-green-500",
    },
    {
      icon: Phone,
      label: "Call Us",
      description: "Speak directly",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      description: "Detailed inquiry",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-secondary gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl"></div>
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl"></div> */}

          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 p-12 text-center text-white">
            {/* Header with icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-8"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            {/* Title and description */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Still have questions?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Our expert advisors are here to help you navigate your journey to
              studying in Japan. Get personalized guidance every step of the
              way.
            </motion.p>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
                  >
                    <div className={`p-2 rounded-full ${method.color}`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm">
                        {method.label}
                      </div>
                      <div className="text-blue-200 text-xs">
                        {method.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="group relative bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Contact Our Team
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>

                {/* Button background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <div className="flex items-center gap-2 text-blue-200">
                <Users className="w-4 h-4" />
                <span className="text-sm">
                  Join 10,000+ students already studying in Japan
                </span>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8 flex justify-center items-center gap-8 text-blue-200 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>Expert Guidance</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
