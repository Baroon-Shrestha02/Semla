import React from "react";
import AccordionSlider from "../HelperComponents/AccordionSlider";
import { useTranslation } from "react-i18next";

export default function AboutWhy2() {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-20">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            {t("about.why.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.why.subtitle")}
          </p>
        </div>
        <AccordionSlider />
      </section>
    </>
  );
}
