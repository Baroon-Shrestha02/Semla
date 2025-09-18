import React from "react";
import AboutHero from "../Components/AboutComponents/AboutHero";
import AboutIntro from "../Components/AboutComponents/AboutIntro";
import AboutVision from "../Components/AboutComponents/AboutVision";
import AboutTeam from "../Components/AboutComponents/AboutTeam";
import AboutWhy from "../Components/AboutComponents/AboutWhy";
import LearningCenterSection from "../Components/ServicesComponents/LearningCenter";
import AccordionSlider from "../Components/HelperComponents/AccordionSlider";
import AboutWhy2 from "../Components/AboutComponents/AboutWhy2";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutVision />
      <LearningCenterSection />
      {/* <AboutWhy /> */}
      <AboutWhy2 />
      <AboutTeam />
    </>
  );
}
