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
import { useTranslation } from "react-i18next";

const iconMap = {
  BookOpen,
  Award,
  Users,
  CheckCircle,
  Globe,
  Plane,
};

const ServicesCourses = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const { t } = useTranslation();

  const courses = t("services.course.courses", { returnObjects: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("services.course.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("services.course.subtitle")}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {courses.map((course) => {
            const IconComponent = iconMap[course.icon];
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
