import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Building,
  BookOpen,
  DollarSign,
  Plane,
  Home,
  FileText,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

import ServiceCard from "./Services/HomeSerivceCard";
import { useTranslation } from "react-i18next";

const HomeServices = () => {
  const { t } = useTranslation();
  const services = [
    {
      id: 1,
      title: t("home.services.service.1.title"),
      description: t("home.services.service.1.description"),
      icon: Users,
      color: "bg-teal-500",
      delay: 0.1,
    },
    {
      id: 2,
      title: t("home.services.service.2.title"),
      description: t("home.services.service.2.description"),
      icon: BookOpen,
      color: "bg-gray-600",
      delay: 0.3,
    },
    {
      id: 3,
      title: t("home.services.service.3.title"),
      description: t("home.services.service.3.description"),
      icon: Building,
      color: "bg-blue-600",
      delay: 0.2,
    },
    {
      id: 4,
      title: t("home.services.service.4.title"),
      description: t("home.services.service.4.description"),
      icon: FileText,
      color: "bg-purple-600",
      delay: 0.4,
    },
    {
      id: 5,
      title: t("home.services.service.5.title"),
      description: t("home.services.service.5.description"),
      icon: Award,
      color: "bg-green-600",
      delay: 0.5,
    },
    {
      id: 6,
      title: t("home.services.service.6.title"),
      description: t("home.services.service.6.description"),
      icon: Home,
      color: "bg-green-500",
      delay: 0.6,
    },
  ];

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
            {t("home.services.title1")}{" "}
            <span className="relative">
              {t("home.services.title2")}
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
            {t("home.services.subtitle")}
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
              {t("home.services.btn")}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
