import React, { useState, useEffect } from "react";
import {
  UserCheck,
  BookOpen,
  Building2,
  FileText,
  Shield,
  Plane,
  Plus,
  CheckCircle2,
} from "lucide-react";
import Modal from "../HelperComponents/Modal";
import { useTranslation } from "react-i18next";

const iconMap = {
  UserCheck,
  BookOpen,
  Building2,
  FileText,
  Shield,
  Plane,
};

const CoreServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [modalService, setModalService] = useState(null);
  const { t } = useTranslation();

  const services = t("services.core.services", { returnObjects: true });

  // Stats animation (simplified)
  const [animatedStats, setAnimatedStats] = useState({
    success: 0,
    students: 0,
    universities: 0,
  });

  useEffect(() => {
    let step = 0;
    const steps = 60;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedStats({
        success: Math.floor(98 * progress),
        students: Math.floor(500 * progress),
        universities: Math.floor(10 * progress),
      });
      if (step >= steps) clearInterval(interval);
    }, 33);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          {t("services.core.title1")}
          <span className="bg-primary text-secondary px-6 py-1 inline-block -rotate-1 rounded-full ml-2">
            {t("services.core.title2")}
          </span>
        </h1>

        <div className="flex justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">
              {animatedStats.success}%
            </div>
            <div className="text-sm text-gray-600">{t("stats.rate")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">
              {animatedStats.students}+
            </div>
            <div className="text-sm text-gray-600">{t("stats.student")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">
              {animatedStats.universities}+
            </div>
            <div className="text-sm text-gray-600">{t("stats.university")}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transform transition-all duration-700 ${
                  isActive ? "scale-105" : "hover:scale-102"
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setModalService(service);
                }}
              >
                <div
                  className={`relative h-[480px] rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm transition-all duration-700 ${
                    isActive
                      ? "shadow-2xl shadow-purple-200/50"
                      : "hover:shadow-xl"
                  }`}
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Plus Button */}
                  <button
                    className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300 rounded-full shadow-lg z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalService(service);
                    }}
                  >
                    <Plus className="w-5 h-5 text-gray-800" strokeWidth={2} />
                  </button>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-xs font-bold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        {service.stats}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-300 mb-2">
                        {service.subtitle}
                      </p>
                      <p className="text-white/90 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reusable Modal */}
      <Modal isOpen={!!modalService} onClose={() => setModalService(null)}>
        {modalService && (
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {modalService.title}
                </h2>
                <p className="text-lg text-indigo-600 font-medium mb-1">
                  {modalService.subtitle}
                </p>
                {/* <div className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  {modalService.stats}
                </div> */}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base mb-6">
              {modalService.details}
            </p>

            <div className="p-6 rounded-xl">
              {modalService.paragraphs?.map((para, index) => (
                <div
                  key={index}
                  className="bg-gray-100 mb-6 p-6 rounded-4xl flex flex-col items-center justify-between gap-6"
                >
                  {/* Left side - paragraph text */}
                  <div className="flex-1 text-center">
                    <p className="text-gray-700 max-w-3xl text-lg">
                      {para.text}
                    </p>
                  </div>

                  {/* Right side - paragraph image */}
                  <div className="flex-1 max-w-md w-full">
                    {para.image && (
                      <img
                        src={para.image}
                        alt={`Paragraph ${index + 1}`}
                        className="rounded-3xl w-full h-auto object-cover shadow-lg"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CoreServices;
