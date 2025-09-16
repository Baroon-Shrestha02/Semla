import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your translation files
import en from "./Locales/en.json";
import ja from "./Locales/ja.json";

// ✅ Optional hard fallback if invalid lang is detected
const supportedLanguages = ["en", "ja"];
const currentLang = localStorage.getItem("i18nextLng");

// Force fallback if invalid like en-US or ja-JP is stored
if (!supportedLanguages.includes(currentLang)) {
  localStorage.setItem("i18nextLng", "en");
}

// ✅ i18n config
i18n
  .use(LanguageDetector) // Detect language from browser or localStorage
  .use(initReactI18next) // Pass config to React
  .init({
    fallbackLng: "en", // Default language
    load: "languageOnly", // Force only "en" or "ja" (no "en-US" or "ja-JP")

    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },

    detection: {
      order: ["localStorage", "querystring", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"], // Cache language choice
    },

    interpolation: {
      escapeValue: false, // React already escapes by default
    },

    react: {
      useSuspense: true, // Wait for translations to load
    },
  });

export default i18n;
