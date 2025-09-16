import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Play, Pause } from "lucide-react";

const HeroSection = ({
  title,
  description,
  breadcrumbs,
  backgroundType,
  backgroundSrc,
  videoSrc,
  height, // '60vh', '70vh', '80vh'
  overlay, // 'dark', 'light', 'gradient', 'none'
  textAlignment, // 'bottom-left', 'center', 'bottom-center'
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const getOverlayClasses = () => {
    switch (overlay) {
      case "dark":
        return "bg-black bg-opacity-50";
      case "light":
        return "bg-white bg-opacity-30";
      case "gradient":
        return "bg-gradient-to-t from-black via-transparent to-black";
      default:
        return "";
    }
  };

  const getTextContainerClasses = () => {
    const base = "relative z-20 px-6 md:px-12 lg:px-16";
    switch (textAlignment) {
      case "center":
        return `${base} flex items-center justify-center text-center h-full`;
      case "bottom-center":
        return `${base} flex items-end justify-center text-center pb-12 md:pb-16 h-full`;
      default:
        return `${base} flex items-end pb-12 md:pb-16 h-full`;
    }
  };

  const toggleVideo = () => {
    const video = document.querySelector("#hero-video");
    if (video) {
      if (isVideoPlaying) video.pause();
      else video.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Framer-motion variants for staggered words
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // slower & smooth
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }, // slower stagger
  };

  const renderAnimatedText = (text) => {
    return (
      <motion.div
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="relative  w-full overflow-hidden" style={{ height }}>
      {/* Background */}
      {backgroundType === "image" ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundSrc})` }}
        />
      ) : (
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 z-10 ${getOverlayClasses()}`} />

      {/* Video Controls */}
      {backgroundType === "video" && (
        <button
          onClick={toggleVideo}
          className="absolute top-6 right-6 z-30 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
        >
          {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      )}

      {/* Content */}
      <div className={getTextContainerClasses()}>
        <div className="max-w-2xl">
          {/* Breadcrumbs */}
          <nav className="mb-4 md:mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-200">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center text-lg">
                  {crumb.href ? (
                    <Link
                      to={crumb.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight size={16} className="mx-2 text-white" />
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {renderAnimatedText(title)}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            {renderAnimatedText(description)}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-8 rotate-180 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32 md:h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,122.7C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
