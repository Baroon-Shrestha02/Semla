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

const faqs = [
  {
    number: 1,
    question: "Which universities in Japan can I apply to?",
    answer:
      "We provide guidance for universities across Japan, including Tokyo University, Kyoto University, Osaka University, and many others. Our network includes both public and private institutions offering programs in various fields of study. Each university has specific requirements and application processes that we'll help you navigate.",
    subtitle: "University selection and application guidance",
  },
  {
    number: 2,
    question: "Do I need to know Japanese to study in Japan?",
    answer:
      "Many universities offer courses in English, especially for international programs and graduate studies. However, learning basic Japanese is highly recommended for daily life, cultural immersion, and better integration into Japanese society. We provide language learning resources and connect you with preparation programs to help you succeed.",
    subtitle: "Language requirements and preparation",
  },
  {
    number: 3,
    question: "What are the visa requirements for students?",
    answer:
      "You will need a student visa (College Student visa), which requires admission to a Japanese university, financial proof showing you can support yourself, and various documentation including academic transcripts and health certificates. We guide you through the entire process, from document preparation to embassy appointments and interview preparation.",
    subtitle: "Visa application process and requirements",
  },
  {
    number: 4,
    question: "Can I work part-time while studying in Japan?",
    answer:
      "Yes, student visas allow limited part-time work up to 28 hours per week with proper work permits. You'll need to apply for 'Permission to Engage in Activity Other Than That Permitted Under the Status of Residence' at immigration. We advise on legal limits, help with permit applications, and connect you with suitable employment opportunities.",
    subtitle: "Part-time work regulations and opportunities",
  },
  {
    number: 5,
    question: "Are scholarships available for international students?",
    answer:
      "Yes, there are numerous scholarships available including MEXT (Japanese Government Scholarship), JASSO scholarships, and university-specific grants. Each has different eligibility criteria, application deadlines, and coverage amounts. We help you identify scholarships suitable for your profile, assist with applications, and provide guidance on increasing your chances of success.",
    subtitle: "Scholarship opportunities and application support",
  },
  {
    number: 6,
    question: "How long is the typical duration of a degree program?",
    answer:
      "Undergraduate programs usually last 4 years, while master's programs take 2 years and PhDs range from 3–5 years. Some specialized programs may have different durations.",
    subtitle: "Program duration in Japan",
  },
  {
    number: 7,
    question: "What is the cost of studying in Japan?",
    answer:
      "Tuition fees vary by university and program. On average, undergraduate tuition is 500,000–1,200,000 JPY per year. Living expenses depend on the city, ranging from 80,000–150,000 JPY per month.",
    subtitle: "Tuition and living costs",
  },
  {
    number: 8,
    question: "Do I need health insurance while studying in Japan?",
    answer:
      "Yes, all students must enroll in the National Health Insurance (NHI) system. It covers most medical expenses and is mandatory for visa purposes.",
    subtitle: "Health insurance requirements",
  },
  {
    number: 9,
    question: "How can I find accommodation in Japan?",
    answer:
      "Students can choose university dormitories, private apartments, or share houses. We assist in finding suitable housing and provide guidance on rental agreements.",
    subtitle: "Housing and accommodation options",
  },
  {
    number: 10,
    question: "Is there support for international students on campus?",
    answer:
      "Yes, most universities have an international office providing support with registration, language assistance, and cultural adaptation programs.",
    subtitle: "Campus support for international students",
  },
  {
    number: 11,
    question: "Can I transfer credits from my home university?",
    answer:
      "Some universities allow credit transfer depending on the program and course equivalency. We guide students through the evaluation and transfer process.",
    subtitle: "Credit transfer policies",
  },
  {
    number: 12,
    question: "What documents are required for university application?",
    answer:
      "Common requirements include academic transcripts, recommendation letters, language proficiency certificates (English or Japanese), and a personal statement.",
    subtitle: "Application documentation",
  },
  {
    number: 13,
    question: "How competitive is admission to Japanese universities?",
    answer:
      "Competition varies by university and program. We help optimize your application to increase your chances of acceptance.",
    subtitle: "Admission competitiveness",
  },
  {
    number: 14,
    question: "Are there internship opportunities for students?",
    answer:
      "Yes, students can participate in internships and practical training, often facilitated by universities or partner companies.",
    subtitle: "Internship and practical training",
  },
  {
    number: 15,
    question: "Do universities provide orientation programs?",
    answer:
      "Most universities offer orientation for international students to familiarize them with campus life, facilities, and local culture.",
    subtitle: "Orientation programs",
  },
  {
    number: 16,
    question: "What are the living costs in major cities like Tokyo and Osaka?",
    answer:
      "Tokyo is generally more expensive, with monthly living costs around 120,000–150,000 JPY, while Osaka is slightly lower at 90,000–130,000 JPY per month.",
    subtitle: "City-wise living expenses",
  },
  {
    number: 17,
    question: "Are student clubs and extracurricular activities available?",
    answer:
      "Yes, universities have numerous clubs and societies ranging from sports to cultural activities, which help students integrate and socialize.",
    subtitle: "Student life and extracurriculars",
  },
  {
    number: 18,
    question: "What are the public transport options for students?",
    answer:
      "Students can use trains, buses, and subways. Many universities provide discounted commuter passes for students.",
    subtitle: "Transportation and commuting",
  },
  {
    number: 19,
    question:
      "How do I open a bank account in Japan as an international student?",
    answer:
      "Students need a residence card and passport to open a bank account. We provide step-by-step guidance and recommend suitable banks.",
    subtitle: "Banking for international students",
  },
  {
    number: 20,
    question: "Can I travel around Japan while studying?",
    answer:
      "Yes, students can travel using student discounts on trains and buses. We advise on travel passes and tips for budget travel.",
    subtitle: "Traveling within Japan",
  },
  {
    number: 21,
    question: "Is part-time work allowed during vacations?",
    answer:
      "Yes, students can work full-time during university vacations if permitted by their visa. We guide on legal limits and application procedures.",
    subtitle: "Vacation work regulations",
  },
];

export default function Question() {
  const [openIndex, setOpenIndex] = useState(0);

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
                  Frequently <br className="hidden lg:block" />
                  Asked <br className="hidden lg:block" />
                  Questions
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  Everything you need to know about studying in Japan
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
