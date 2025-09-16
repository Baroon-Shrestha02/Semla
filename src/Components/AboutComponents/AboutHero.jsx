import React from "react";
import HeroSection from "../HelperComponents/HeroSection";
import { useTranslation } from "react-i18next";

export default function AboutHero() {
  const { t } = useTranslation();
  return (
    <HeroSection
      title={t("about.hero.heading")}
      description={t("about.hero.subheading")}
      backgroundType="image"
      backgroundSrc="About/hero.jpg"
      height="70vh"
      overlay="gradient"
      textAlignment="bottom-left"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
