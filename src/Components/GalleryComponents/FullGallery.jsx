import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import NoiseOverlay from "../HelperComponents/NoiseOverlay";
import HeroSection from "../HelperComponents/HeroSection";
import { useTranslation } from "react-i18next";

// Mock LazyMotionItem component
const LazyMotionItem = ({ type, src }) => {
  if (type === "video") {
    return (
      <video
        src={src}
        className="w-full h-full object-cover"
        controls={false}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  return (
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
    />
  );
};

// Skeleton Shimmer Component
const SkeletonShimmer = () => (
  <div className="animate-pulse">
    <div
      className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl aspect-square"
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 2s infinite linear",
      }}
    ></div>
  </div>
);

// Gallery Skeleton Grid
const GallerySkeletonGrid = ({ count = 12 }) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {skeletons.map((_, index) => (
        <div key={index} className="space-y-3 md:space-y-6">
          <SkeletonShimmer />
          {index % 3 === 0 && <SkeletonShimmer />}
        </div>
      ))}
    </div>
  );
};

export default function FullGallery() {
  const [layoutType] = useState("improved-masonry");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Dummy images from Unsplash
  const mediaFiles = [
    {
      src: "Uni/uni1.jpeg",
      alt: "Classroom learning",
      title: "Interactive Learning Session",
      type: "image",
    },
    {
      src: "Uni/uni2.jpeg",
      alt: "Students working together",
      title: "Group Collaboration",
      type: "image",
    },
    {
      src: "Uni/uni3.jpeg",
      alt: "Festival celebration",
      title: "Cultural Festival",
      type: "image",
    },
    {
      src: "Uni/uni4.jpeg",
      alt: "Airport departure",
      title: "Airport Journey",
      type: "image",
    },
    {
      src: "Uni/uni5.jpeg",
      alt: "Business meeting",
      title: "Student Meetup",
      type: "image",
    },
    {
      src: "Uni/uni6.jpeg",
      alt: "Community event",
      title: "Annual Gathering",
      type: "image",
    },
    {
      src: "Uni/uni7.jpeg",
      alt: "Celebration moment",
      title: "Special Celebration",
      type: "image",
    },
    {
      src: "Uni/uni8.jpeg",
      alt: "Traveling students",
      title: "Journey Abroad",
      type: "image",
    },
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setIsModalOpen(false);
  };

  const nextMedia = () =>
    setSelectedIndex((prev) => (prev + 1) % mediaFiles.length);
  const prevMedia = () =>
    setSelectedIndex((prev) => (prev === 0 ? mediaFiles.length - 1 : prev - 1));

  const renderResponsiveGrid = () => {
    if (isMobile) {
      return (
        <div className="grid grid-cols-2 gap-3">
          {mediaFiles.map((file, index) => (
            <div
              key={index}
              className="cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-square">
                <LazyMotionItem type={file.type} src={file.src} />
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return renderImprovedMasonry();
    }
  };

  const renderImprovedMasonry = () => {
    const columns = [[], [], [], []];
    mediaFiles.forEach((file, i) => {
      const shortestIndex = columns.reduce(
        (minIndex, col, index, arr) =>
          col.length < arr[minIndex].length ? index : minIndex,
        0
      );
      columns[shortestIndex].push({ ...file, index: i });
    });

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-3 md:gap-6">
            {column.map((file) => (
              <div
                key={file.index}
                className="cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-150 ease-in-out transform hover:scale-105"
                onClick={() => openModal(file.index)}
              >
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
                  <LazyMotionItem type={file.type} src={file.src} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
      <HeroSection
        title={t("gallery.hero.heading")}
        description={t("gallery.hero.subheading")}
        backgroundType="image"
        backgroundSrc="Gallery/hero.jpg"
        height="70vh"
        overlay="gradient"
        textAlignment="bottom-left"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <div className="container mx-auto my-10 px-4 md:px-8">
        {isLoading ? (
          <GallerySkeletonGrid count={12} />
        ) : mediaFiles.length > 0 ? (
          <div className="opacity-100 transition-opacity duration-600">
            {layoutType === "improved-masonry" && renderResponsiveGrid()}
          </div>
        ) : (
          <div className="text-center py-20">
            <Camera size={32} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Images Found
            </h3>
            <p className="text-gray-500">
              Try refreshing the page or check back later for new content.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2"
          >
            <X size={24} />
          </button>
          <button
            onClick={prevMedia}
            className="absolute left-6 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-3"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="max-w-6xl max-h-[85vh] mx-auto relative">
            {mediaFiles[selectedIndex].type === "image" ? (
              <img
                src={mediaFiles[selectedIndex].src}
                alt={mediaFiles[selectedIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <video
                src={mediaFiles[selectedIndex].src}
                autoPlay
                muted
                loop
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              />
            )}
          </div>
          <button
            onClick={nextMedia}
            className="absolute right-6 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-3"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
