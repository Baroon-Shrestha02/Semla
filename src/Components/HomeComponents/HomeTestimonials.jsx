import React, { useState, useEffect, useRef } from "react";
import { Star, Heart, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I had no idea where to start with my university applications, and the thought of studying abroad felt overwhelming. The consultancy walked me through every step, from selecting the right courses to preparing a strong SOP and CV. They even helped me practice mock interviews, which boosted my confidence immensely. Thanks to their guidance, I got accepted into my dream university with a scholarship!",
      author: "Aarav Shrestha",
      position: "Undergraduate Student",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 2,
      rating: 5,
      text: "Preparing for exams like IELTS and TOEFL was stressful, and I wasn’t sure how to improve my scores effectively. The consultancy provided personalized coaching, identified my weak areas, and gave practical strategies to enhance my performance. Their constant support and encouragement made the learning process enjoyable, and I achieved scores higher than I expected!",
      author: "Priya Thapa",
      position: "Graduate Student",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 3,
      rating: 5,
      text: "From day one, the consultants treated me like a priority. They carefully analyzed my academic background, suggested programs that fit my goals, and helped me craft compelling essays that truly reflected my personality. Their expertise and attention to detail made the entire application process smooth and stress-free. I’m now enrolled in a top-ranked university, and I couldn’t be happier!",
      author: "Rohan Koirala",
      position: "Masters Student",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 4,
      rating: 5,
      text: "The consultancy didn’t just help me with applications—they empowered me to understand the entire process of studying abroad. They guided me through scholarship applications, helped me perfect my interview skills, and provided ongoing support even after my admission. Their professionalism, patience, and personalized approach made a huge difference in my journey. I truly felt supported every step of the way!",
      author: "Sanya Acharya",
      position: "Undergraduate Student",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=60&h=60&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle arrow key navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        handleUpArrow();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        handleDownArrow();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleUpArrow = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDownArrow = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-300 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  // Get the three testimonials to display (active + 2 next)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 2; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push({
        ...testimonials[index],
        isActive: i === 0,
        position: i,
      });
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gray-50 py-16 px-6 relative overflow-hidden"
    >
      <div className="flex items-center justify-center flex-col gap-4 my-6">
        <div className="font-extrabold text-2xl md:text-5xl ">
          Hear From Our
          <span className="bg-primary text-secondary px-6 py-2 inline-block -rotate-2 rounded-full">
            Students
          </span>
        </div>
        <div className="max-w-3xl font-extralight text-lg md:text-2xl text-center">
          Discover what our students have to say about their learning
          experience, from mastering Japanese language skills to achieving study
          abroad success with our guidance.
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image and Header */}
          <div className="relative">
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <img
                src="Home/stories.jpg"
                alt="Nature landscape"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              {/* Stats Badge */}
              <div className="absolute bottom-6 right-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
                <div className="text-5xl lg:text-6xl font-bold text-gray-800">
                  500+
                </div>
                <div className="text-sm text-gray-600 mt-1">Happy Students</div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonials Stack */}
          <div className="relative">
            {/* Navigation Controls */}
            <div className="absolute -top-16 right-0 z-20 flex flex-col space-y-2">
              <button
                onClick={handleUpArrow}
                className="w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <button
                onClick={handleDownArrow}
                className="w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonials Stack */}
            <div className="space-y-4 ">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${activeIndex}-${index}`}
                  className={`rounded-2xl p-6 shadow-xl transition-all duration-500 transform ${
                    testimonial.isActive
                      ? "bg-secondary text-white scale-100 z-10"
                      : "bg-white text-gray-800 scale-95 opacity-90"
                  } ${index > 0 ? "-mt-2" : ""}`}
                >
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <p
                    className={`text-base leading-relaxed mb-6 ${
                      testimonial.isActive ? "text-white" : "text-gray-700"
                    }`}
                  >
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-current opacity-90"
                    />
                    <div>
                      <div className="font-semibold text-lg">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
