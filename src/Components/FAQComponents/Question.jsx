import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  University,
  MessageCircle,
  FileText,
  Briefcase,
  Award,
  Play,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Question() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation();

  const faqs = t("faq.que.faqs", { returnObjects: true });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen my-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Title Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white lg:sticky lg:top-0 lg:h-screen mb-8 lg:mb-0">
          <div className="max-w-md p-4 md:p-8 text-center lg:text-left">
            <div className="relative">
              <div className="absolute -top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 opacity-30">
                <img
                  src="Main/logo2.png"
                  alt="Logo"
                  className="h-[100px] object-contain"
                />
              </div>

              {/* Main heading */}
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  {t("faq.que.title1")} <br className="hidden lg:block" />
                  {t("faq.que.title2")} <br className="hidden lg:block" />
                  {t("faq.que.title3")}
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  {t("faq.que.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                  >
                    <div className="flex items-start gap-4 text-left flex-1">
                      {/* Number */}
                      <div className="text-secondary font-extrabold text-2xl">
                        {faq.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                          {faq.question}
                        </h3>
                        <p className="text-gray-500 text-sm">{faq.subtitle}</p>
                      </div>
                    </div>

                    {/* Toggle Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 ml-4"
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3, ease: "easeOut" },
                            opacity: { duration: 0.2, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.2, ease: "easeIn" },
                            opacity: { duration: 0.1 },
                          },
                        }}
                        className="overflow-hidden border-t border-gray-100"
                      >
                        <div className="p-6 pl-20">
                          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
