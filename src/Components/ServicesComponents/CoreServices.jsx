import React, { useState, useEffect } from "react";
import {
  UserCheck,
  BookOpen,
  Building2,
  FileText,
  Shield,
  Plane,
  CheckCircle2,
} from "lucide-react";

const CoreServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({
    success: 0,
    students: 0,
    universities: 0,
  });

  // Animate statistics on component mount
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setAnimatedStats({
          success: Math.floor(98 * progress),
          students: Math.floor(500 * progress),
          universities: Math.floor(10 * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedStats({ success: 98, students: 500, universities: 10 });
        }
      }, increment);
    };

    animateStats();
  }, []);

  const services = [
    {
      id: 1,
      title: "Counseling & Academic Guidance",
      subtitle: "Personalized Educational Roadmap",
      description:
        "Comprehensive assessment and planning for your Japan study journey",
      icon: UserCheck,
      color: "from-violet-500 to-purple-600",
      bgImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      stats: "1000+ Students Guided",
      ctaText: "Get Personalized Guidance",
    },
    {
      id: 2,
      title: "Language & Exam Preparation",
      subtitle: "Master Japanese & International Tests",
      description:
        "Comprehensive preparation for JLPT, TOEFL, IELTS and entrance exams",
      icon: BookOpen,
      color: "from-emerald-500 to-teal-600",
      bgImage:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center",
      stats: "95% Pass Rate",
      ctaText: "Start Exam Prep",
    },
    {
      id: 3,
      title: "University & Program Selection",
      subtitle: "Find Your Perfect Japanese University",
      description:
        "Strategic university matching based on your goals and qualifications",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
      bgImage:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center",
      stats: "250+ Universities",
      ctaText: "Explore Universities",
    },
    {
      id: 4,
      title: "Application & Documentation Support",
      subtitle: "Flawless Application Assistance",
      description:
        "Complete support for applications, documents, and essay preparation",
      icon: FileText,
      color: "from-orange-500 to-red-500",
      bgImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
      stats: "99.5% Accuracy",
      ctaText: "Get Document Help",
    },
    {
      id: 5,
      title: "Visa & Legal Assistance",
      subtitle: "Seamless Immigration Support",
      description:
        "Expert visa processing and legal guidance for studying in Japan",
      icon: Shield,
      color: "from-pink-500 to-rose-600",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1663089819902-b4a7321f38e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlzYXxlbnwwfHwwfHx8MA%3D%3D",
      stats: "99.2% Visa Success",
      ctaText: "Apply for Visa",
    },
    {
      id: 6,
      title: "Pre-Departure & Orientation",
      subtitle: "Ready for Japan Life",
      description:
        "Complete preparation for your new life and studies in Japan",
      icon: Plane,
      color: "from-cyan-500 to-blue-500",
      bgImage: "About/ori.jpeg",
      stats: "24/7 Support",
      ctaText: "Get Orientation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Explore Our
            <span className="bg-primary text-secondary px-6 py-1 inline-block -rotate-4 rounded-full">
              Core Services
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive services to make your Japanese study dreams come true.
            From counseling to career placement, we've got you covered.
          </p>

          {/* Animated Stats */}
          <div className="flex justify-center gap-12 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">
                {animatedStats.success}%
              </div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">
                {animatedStats.students}+
              </div>
              <div className="text-sm text-gray-600">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {animatedStats.universities}+
              </div>
              <div className="text-sm text-gray-600">Partner Universities</div>
            </div>
          </div>
        </div>

        {/* Services Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transform transition-all duration-700 ${
                  isActive ? "scale-105" : "hover:scale-102"
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div
                  className={`relative h-[480px] rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm transition-all duration-700 ${
                    isActive
                      ? "shadow-2xl shadow-purple-200/50"
                      : "hover:shadow-xl"
                  }`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${service.bgImage})`,
                    }}
                  ></div>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ${
                      isActive ? "from-black/90 via-black/50" : ""
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Section - Icon & Stats */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm transform transition-all duration-500 ${
                          isActive ? "scale-110" : "group-hover:scale-105"
                        }`}
                      >
                        <IconComponent className={`w-7 h-7 text-white`} />
                      </div>
                      <div
                        className={`text-right transition-all duration-300 ${
                          isActive ? "text-white" : "text-white/90"
                        }`}
                      >
                        <div className="text-xs font-bold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          {service.stats}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="space-y-4">
                      <div>
                        <h3
                          className={`text-2xl font-bold text-white mb-2 transition-all duration-300`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-300 mb-3">
                          {service.subtitle}
                        </p>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
