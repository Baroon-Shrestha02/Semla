import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Balance & Cards",
    description:
      "Take control of your finances with a secure platform that lets you track, manage, optimize, analyze, and consolidate all your accounts.",
    stats: [
      { value: "$183,577", label: "Total Balance" },
      { value: "12", label: "Active Cards" },
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    title: "Real-time Insights",
    description:
      "Monitor your financial health with clear, interactive visuals that break down spending habits and investment performance.",
    stats: [
      { value: "+24.5%", label: "This Month" },
      { value: "$2,847", label: "Saved" },
    ],
    gradient: "from-pink-400 to-red-500",
  },
  {
    id: 3,
    title: "Smart Analytics",
    description:
      "Advanced AI-powered insights help you make better financial decisions and optimize your spending patterns.",
    stats: [
      { value: "87%", label: "Accuracy" },
      { value: "156", label: "Insights" },
    ],
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    id: 4,
    title: "Investment Tracking",
    description:
      "Keep track of your portfolio performance with real-time updates and comprehensive market analysis.",
    stats: [
      { value: "+12.8%", label: "YTD Return" },
      { value: "$45,230", label: "Portfolio" },
    ],
    gradient: "from-green-400 to-teal-400",
  },
  {
    id: 5,
    title: "Expense Management",
    description:
      "Categorize and track your expenses automatically with smart categorization and budgeting tools.",
    stats: [
      { value: "$3,240", label: "This Month" },
      { value: "23", label: "Categories" },
    ],
    gradient: "from-pink-400 to-yellow-400",
  },
  {
    id: 6,
    title: "Financial Goals",
    description:
      "Set and achieve your financial goals with personalized recommendations and progress tracking.",
    stats: [
      { value: "8/10", label: "Goals Met" },
      { value: "$15,000", label: "Target" },
    ],
    gradient: "from-teal-200 to-pink-200",
  },
];

const Card = ({ card, index, scrollProgress }) => {
  // Calculate progress for this specific card
  const cardProgress = useTransform(
    scrollProgress,
    [index / cardData.length, (index + 1) / cardData.length],
    [0, 1]
  );

  const scale = useTransform(cardProgress, [0, 0.5, 1], [1, 0.95, 0.8]);
  const y = useTransform(cardProgress, [0, 0.5, 1], [0, -50, -100]);
  const opacity = useTransform(cardProgress, [0, 0.7, 1], [1, 0.8, 0]);

  // Calculate stacking for upcoming cards
  const nextCardIndex = Math.floor(scrollProgress.get() * cardData.length);
  const isActive = index === nextCardIndex;
  const isNext = index === nextCardIndex + 1;
  const isFarNext = index === nextCardIndex + 2;
  const isPassed = index < nextCardIndex;

  let stackingStyles = {};

  if (isPassed) {
    stackingStyles = { scale: 0.8, y: -100, opacity: 0, zIndex: 1 };
  } else if (isActive) {
    stackingStyles = { scale: 1, y: 0, opacity: 1, zIndex: 10 };
  } else if (isNext) {
    stackingStyles = { scale: 0.95, y: 160, opacity: 0.9, zIndex: 9 };
  } else if (isFarNext) {
    stackingStyles = { scale: 0.9, y: 320, opacity: 0.7, zIndex: 8 };
  } else {
    stackingStyles = { scale: 0.85, y: 400, opacity: 0, zIndex: 7 };
  }

  return (
    <motion.div
      className={`absolute w-full h-72 rounded-3xl shadow-2xl p-8 bg-gradient-to-br ${card.gradient} text-white`}
      animate={stackingStyles}
      transition={{
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      }}
      style={{ zIndex: stackingStyles.zIndex }}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
          <p className="text-white/80 text-base leading-relaxed">
            {card.description}
          </p>
        </div>

        <div className="flex justify-between items-end">
          {card.stats.map((stat, statIndex) => (
            <div key={statIndex} className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function HomeWhy2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(
        Math.floor(latest * cardData.length),
        cardData.length - 1
      );
      setCurrentIndex(newIndex);
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative bg-secondary mx-6 rounded-4xl shadown-2xl"
      style={{ height: `${cardData.length * 100}vh` }}
    >
      {/* Sticky cards container */}
      <div className="sticky top-20 w-full h-screen flex items-center justify-center flex-col">
        <div className="mb-16 font-extrabold text-5xl text-white">
          Why Students Trust Us?
        </div>
        <div className="relative w-[75vw] h-[450px]">
          {cardData.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Scroll to explore cards
        </motion.div>
      </div>
    </section>
  );
}
