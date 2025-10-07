import React from "react";
import { useTranslation } from "react-i18next";

export default function LinkCard() {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary mx-4 rounded-4xl">
      <section className="p-4 text-center max-w-4xl mx-auto mb-12 py-8">
        <h2 className="text-xl md:text-4xl font-semibold mb-2 text-white">
          {t("home.guide.title")}
        </h2>
        <p className="text-white mb-4 text-base md:text-lg">
          {t("home.guide.des")}
        </p>
        <a
          href="https://www.city.naha.okinawa.jp/admin/pr/kouhousi/0703.files/3gatu6men.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-primary text-secondary rounded-lg font-bold text-2xl transition-colors"
        >
          {t("home.guide.btn")}
        </a>
      </section>
    </div>
  );
}
