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

const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a personalized consultation to understand your background, career goals, and future aspirations. Whether you want to pursue higher studies in Japan or apply for SSW/TITP opportunities, our counselors carefully assess your profile and create a tailored plan. This ensures you start your journey with clarity, confidence, and a realistic roadmap designed to meet your goals.",
    icon: MessageCircle,
    deliverables: ["Profile Report", "Career Path Plan", "Counseling Notes"],
    keyActivities: ["Profile Review", "Goal Mapping", "Pathway Selection"],
    highlights: ["Tailored advice", "Clear roadmap", "Right opportunity fit"],
    image: "services/ser1.jpg",
  },
  {
    id: 2,
    step: "02",
    title: "Language & Skill Training",
    description:
      "Japanese language is at the heart of both study and work in Japan. We provide interactive classes focused on JLPT preparation and communication skills, supported by practice sessions and mock exams. For SSW and TITP aspirants, we also offer skill-based training aligned with industry requirements. This blend of language and professional skills ensures candidates are fully prepared to excel in both academic and workplace environments.",
    icon: BookOpen,
    deliverables: [
      "JLPT Materials",
      "Skill Training Modules",
      "Progress Reports",
    ],
    keyActivities: ["Language Classes", "Test Preperations", "Skill Practice"],
    highlights: ["JLPT-focused", "Skill-based", "Feedback-driven"],
    image: "services/ser2.jpg",
  },
  {
    id: 3,
    step: "03",
    title: "Pathway Selection",
    description:
      "After building a strong foundation, we guide you in choosing the right pathway. Students receive a curated list of universities and programs based on eligibility, budget, and long-term plans. For professionals, we provide targeted SSW job roles and TITP placements that match your skills and ambitions. This ensures every individual follows a pathway that maximizes opportunities and long-term growth in Japan.",
    icon: GraduationCap,
    deliverables: [
      "Study/Job Options Report",
      "Pathway Matches",
      "Action Plan",
    ],
    keyActivities: [
      "University Research",
      "Job Role Mapping",
      "Placement Strategy",
    ],
    highlights: ["Flexible options", "Targeted guidance", "Maximize success"],
    image: "services/program.webp",
  },
  {
    id: 4,
    step: "04",
    title: "Documentation Support",
    description:
      "Our team provides complete end-to-end assistance with your documentation, including transcripts, resumes, statements of purpose, application forms, and visa paperwork. Every document is carefully reviewed for accuracy and professionalism, ensuring you meet the strict standards of Japanese institutions and employers. This detailed support removes confusion and minimizes errors during the application process.",
    icon: FileText,
    deliverables: [
      "Forms & Transcripts",
      "Resumes/Letters",
      "SOP or Application Review",
    ],
    keyActivities: ["Document Preperations", "Verification", "Expert Review"],
    highlights: ["99% accuracy", "Professional quality", "End-to-end support"],
    image: "services/ser4.jpg",
  },
  {
    id: 5,
    step: "05",
    title: "Visa Processing",
    description:
      "Visa processing is often the most stressful part of the journey, but we make it simple and stress-free. For students, we handle Certificate of Eligibility (COE), application forms, and interview coaching. For SSW and TITP applicants, we guide you through official documentation, contracts, and embassy requirements. With our expert support, you’ll feel fully prepared and confident throughout the entire process.",
    icon: CreditCard,
    deliverables: [
      "COE Documents",
      "Visa Application",
      "Interview/Embassy Preperations",
    ],
    keyActivities: ["Visa Docs", "Submission", "Mock Interviews"],
    highlights: ["High success rate", "COE guidance", "Embassy readiness"],
    image: "services/ser5.jpg",
  },
  {
    id: 6,
    step: "06",
    title: "Pre-Departure & Orientation",
    description:
      "Before you leave for Japan, we ensure you are well-prepared for your new journey. Our orientation covers Japanese culture, lifestyle, workplace or university expectations, and survival tips to adjust smoothly. We also assist with housing, travel arrangements, and provide a detailed checklist for a stress-free departure. This final step makes sure you begin your life in Japan with confidence and support.",
    icon: MapPin,
    deliverables: [
      "Orientation Guide",
      "Housing/Workplace Support",
      "Travel Checklist",
    ],
    keyActivities: [
      "Cultural Training",
      "Work/Study Preperations",
      "Workshops",
    ],
    highlights: ["Cultural readiness", "Smooth transition", "Ongoing support"],
    image: "services/ser6.jpg",
  },
];

export default function WorkProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

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
            Our Work{" "}
            <span className="bg-primary text-secondary inline-block px-6 py-1 rounded-full -rotate-2">
              Process
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Step-by-step guidance — from counseling in Nepal to your successful
            arrival in Japan.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps - Left */}
          <div className="space-y-32">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
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
                    What You'll Receive
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
                    Our Process
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
                    Highlights
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
              <span>Start Your Study Journey</span>
              <Plane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
          <p className="text-gray-600 text-lg mt-4">
            Let us guide you from Nepal to Japan step by step.
          </p>
        </div>
      </div>
    </section>
  );
}
