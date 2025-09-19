import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  BookOpen,
  GraduationCap,
  FileText,
  CreditCard,
  MapPin,
  Plane,
  CheckCircle,
  Users,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const iconMap = {
  MessageCircle,
  BookOpen,
  GraduationCap,
  FileText,
  CreditCard,
  MapPin,
};

export default function WorkProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
  const { t } = useTranslation();

  const processSteps = t("services.process.processSteps", {
    returnObjects: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("services.process.title1")}{" "}
            <span className="bg-primary text-secondary inline-block px-6 py-1 rounded-full -rotate-2">
              {t("services.process.title2")}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            {t("services.process.subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps - Left */}
          <div className="space-y-32">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div
                  key={step.id}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="min-h-[80vh] lg:min-h-[80vh] flex items-center"
                >
                  <div className="w-full">
                    <div className="mb-8">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover rounded-3xl shadow-xl"
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-violet-600 mb-1">
                            STEP {step.step}
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xl text-gray-700 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Mobile Content - Hidden on lg and above */}
                      <div className="lg:hidden space-y-6 mt-8">
                        {/* Deliverables */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-violet-600" />
                            What You'll Receive
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.deliverables.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-violet-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-gray-700">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Activities */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-violet-600" />
                            Our Process
                          </h4>
                          <div className="space-y-3">
                            {step.keyActivities.map((activity, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 p-3 bg-violet-50 rounded-xl"
                              >
                                <div className="w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                  {i + 1}
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                  {activity}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Plane className="w-5 h-5 text-violet-600" />
                            Highlights
                          </h4>
                          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                            {step.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Sidebar - Only visible on lg and above */}
          <div className="hidden lg:block lg:sticky lg:top-8 lg:h-screen lg:flex lg:items-center">
            <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {processSteps[activeStep].title}
                </h3>

                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-violet-600" />
                    {t("services.process.receive")}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {processSteps[activeStep].deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-violet-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Activities */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-violet-600" />
                    {t("services.process.proc")}
                  </h4>
                  <div className="space-y-3">
                    {processSteps[activeStep].keyActivities.map(
                      (activity, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-violet-50 rounded-xl"
                        >
                          <div className="w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {i + 1}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {activity}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Plane className="w-5 h-5 text-violet-600" />
                    {t("services.process.highlights")}
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {processSteps[activeStep].highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <Link to="/contact">
            <button className="group inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span>{t("services.process.btn")}</span>
              <Plane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
          <p className="text-gray-600 text-lg mt-4">
            {t("services.process.btndes")}
          </p>
        </div>
      </div>
    </section>
  );
}
