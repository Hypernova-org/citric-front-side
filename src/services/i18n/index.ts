import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import config from "config";
import storage from "services/storage";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init({
    fallbackLng: storage.get("i18nextLng") || "uz",
    lng: storage.get("i18nextLng") || "uz",
    supportedLngs: ["kr", "ru", "uz", "en"],
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      addPath: config.API_ROOT + "translations/{{lng}}",
      loadPath: config.API_ROOT + "translations/{{lng}}",
    },
  });

export default i18next;
