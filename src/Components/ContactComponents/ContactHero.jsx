import React from "react";
import HeroSection from "../HelperComponents/HeroSection";
import { useTranslation } from "react-i18next";

export default function ContactHero() {
  const { t } = useTranslation();
  return (
    <div>
      <HeroSection
        title={t("contact.hero.heading")}
        description={t("contact.hero.subheading")}
        backgroundType="image"
        backgroundSrc="Main/contactHero.jpg"
        height="70vh"
        overlay="gradient"
        textAlignment="bottom-left"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
    </div>
  );
}
