import React, { useState } from "react";
import {
  BookOpen,
  Award,
  Users,
  Clock,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Plane,
} from "lucide-react";

const ServicesCourses = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "JLPT Preparation Courses",
      subtitle: "N5 to N1 Level Training",
      description:
        "Comprehensive Japanese Language Proficiency Test preparation with native instructors and proven methodologies.",
      features: [
        "All JLPT levels (N5-N1)",
        "Native Japanese instructors",
        "Practice tests & materials",
        "Small class sizes",
      ],
      duration: "3-12 months",
      icon: BookOpen,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      id: 2,
      title: "Mock Test Series",
      subtitle: "Realistic Exam Simulation",
      description:
        "Intensive mock test series designed to simulate actual JLPT and university entrance exam conditions.",
      features: [
        "Weekly mock tests",
        "Detailed performance analysis",
        "Time management training",
        "Weakness identification",
      ],
      duration: "2-6 months",
      icon: Award,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: 3,
      title: "SSW Courses",
      subtitle: "Specialized Study/Work Program",
      description:
        "Structured programs combining academic studies and work opportunities in Japan, designed for international students seeking hands-on experience.",
      features: [
        "Work-study integration",
        "Japanese language practice",
        "Internship opportunities",
        "Career guidance",
      ],
      duration: "6-12 months",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: 4,
      title: "Cultural Orientation Program",
      subtitle: "Japanese Society & Customs",
      description:
        "Essential cultural training to help students adapt to Japanese society, customs, and academic environment.",
      features: [
        "Business etiquette",
        "Social customs",
        "Academic culture",
        "Daily life preparation",
      ],
      duration: "1-3 months",
      icon: Globe,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: 5,
      title: "TITP Visa Class",
      subtitle: "Technical Intern Training Program",
      description:
        "Comprehensive guidance for TITP visa applicants, including training, documentation, and orientation for working opportunities in Japan.",
      features: [
        "Language & skill training",
        "Visa documentation support",
        "Job placement assistance",
        "Pre-departure orientation",
      ],
      duration: "6-12 months",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      id: 6,
      title: "Pre-Departure & Travel Preparation",
      subtitle: "Preparing for Life in Japan",
      description:
        "A focused program to guide students through pre-departure preparations including accommodation, travel essentials, and cultural adaptation.",
      features: [
        "Travel documentation guidance",
        "Accommodation assistance",
        "Cultural workshops",
        "Daily life orientation",
      ],
      duration: "2-4 weeks",
      icon: Plane,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialized Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From language proficiency to cultural adaptation, our comprehensive
            courses prepare you for every aspect of studying in Japan
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  hoveredCourse === course.id
                    ? "scale-105 -translate-y-2"
                    : "hover:scale-102"
                }`}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div
                  className={`relative h-full ${course.bgColor} ${
                    course.borderColor
                  } border-2 rounded-2xl p-8 shadow-lg transition-all duration-500 ${
                    hoveredCourse === course.id
                      ? "shadow-2xl shadow-gray-300/50"
                      : "hover:shadow-xl"
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      course.color
                    } opacity-0 rounded-2xl transition-opacity duration-500 ${
                      hoveredCourse === course.id
                        ? "opacity-10"
                        : "group-hover:opacity-5"
                    }`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${
                        course.color
                      } mb-6 transform transition-transform duration-300 ${
                        hoveredCourse === course.id ? "scale-110" : ""
                      }`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      {course.subtitle}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
      </div>
    </div>
  );
};

export default ServicesCourses;
