import React from "react";
import HeroSection from "../HelperComponents/HeroSection";
import { useTranslation } from "react-i18next";

export default function FAQHero() {
  const { t } = useTranslation();
  return (
    <>
      <HeroSection
        title={t("faq.hero.heading")}
        description={t("faq.hero.subheading")}
        backgroundType="image"
        backgroundSrc="Main/faqhero.jpg"
        height="70vh"
        overlay="gradient"
        textAlignment="bottom-left"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
    </>
  );
}
