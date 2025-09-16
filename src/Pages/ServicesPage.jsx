import React from "react";
import ServicesHero from "../Components/ServicesComponents/ServicesHero";
import CoreServices from "../Components/ServicesComponents/CoreServices";
import ServicesCTA from "../Components/ServicesComponents/ServicesCTA";
import LearningCenter from "../Components/ServicesComponents/LearningCenter";
import ServicesProcessSection from "../Components/ServicesComponents/ServicesProcessSection";
import WorkProcess from "../Components/ServicesComponents/WorkProcess";
import ServicesCourses from "../Components/ServicesComponents/ServicesCourses";

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <CoreServices />
      {/* <ServicesProcessSection /> */}
      <WorkProcess />
      {/* <LearningCenter /> */}
      <ServicesCourses />
      <ServicesCTA />
    </div>
  );
}
