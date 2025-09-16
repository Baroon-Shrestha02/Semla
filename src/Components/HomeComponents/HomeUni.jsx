import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "motion/react-client";

const universities = [
  {
    id: 1,
    name: "University of Tokyo",
    img: "Uni/uni1.jpeg", // replace with actual Unsplash image URL
  },
  {
    id: 2,
    name: "Kyoto University",
    img: "Uni/uni2.jpeg", // replace with actual Unsplash image URL
  },
  {
    id: 3,
    name: "Waseda University",
    img: "Uni/uni3.jpeg", // replace with actual Unsplash image URL
  },
  {
    id: 4,
    name: "Keio University",
    img: "Uni/uni4.jpeg", // replace with actual Unsplash image URL
  },
  {
    id: 5,
    name: "Nagoya University",
    img: "Uni/uni5.jpeg", // replace with actual Unsplash image URL
  },
  {
    id: 6,
    name: "Tohoku University",
    img: "Uni/uni6.jpeg", // replace with actual Unsplash image URL
  },
  {
    id: 7,
    name: "Kyushu University",
    img: "Uni/uni7.jpeg", // replace with actual Unsplash image URL
  },
  {
    id: 8,
    name: "Sophia University",
    img: "Uni/uni8.jpeg", // replace with actual Unsplash image URL
  },
];

export default function HomeUni() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 320; // Card width + gap
    const scrollAmount = cardWidth;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(Math.min(universities.length - 1, currentIndex + 1));
    }
  };

  return (
    <section className="relative my-12 bg-secondary mx-4 rounded-4xl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
          {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div> */}
        </div>
        <div className="mb-8">
          <div className="capitalize max-w-5xl font-extrabold text-xl md:text-7xl text-white">
            Discover{" "}
            <span className="bg-primary text-secondary px-6 py-1 rounded-full rotate-4 inline-block">
              Top Choices
            </span>{" "}
            <span className="block mt-2">
              represented by
              <span className="bg-primary text-secondary px-6 py-1 rounded-full -rotate-4 inline-block">
                SEMLA
              </span>
            </span>
          </div>
          <p className="mt-4 text-white text-lg">
            We have partnered with {universities.length}+ universities &
            institutes in twelve countries.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {universities.map((university, index) => (
              <div
                key={university.id}
                className="flex-none w-80 scroll-snap-align-start"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <img
                      src={university.img}
                      alt={university.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* University Information Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl leading-tight mb-2 drop-shadow-lg">
                        {university.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-medium">
                          Applications Open
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
