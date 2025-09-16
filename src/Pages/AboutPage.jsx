import React from "react";
import AboutHero from "../Components/AboutComponents/AboutHero";
import AboutIntro from "../Components/AboutComponents/AboutIntro";
import AboutVision from "../Components/AboutComponents/AboutVision";
import AboutTeam from "../Components/AboutComponents/AboutTeam";
import AboutWhy from "../Components/AboutComponents/AboutWhy";
import LearningCenterSection from "../Components/ServicesComponents/LearningCenter";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutVision />
      <LearningCenterSection />
      <AboutWhy />
      <AboutTeam />
    </>
  );
}
