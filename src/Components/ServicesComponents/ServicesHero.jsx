import React from "react";
import HeroSection from "../HelperComponents/HeroSection";
import { useTransform } from "motion/react";
import { useTranslation } from "react-i18next";

export default function ServicesHero() {
  const { t } = useTranslation();
  return (
    <>
      <HeroSection
        title={t("services.hero.heading")}
        description={t("services.hero.subheading")}
        backgroundType="image"
        backgroundSrc="services/hero.jpg"
        height="70vh"
        overlay="gradient"
        textAlignment="bottom-left"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
    </>
  );
}
