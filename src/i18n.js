import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        about: "About Us",
        services: "Services",
      },
    },
    ar: {
      translation: {
        welcome: "أهلاً وسهلاً",
        about: "معلومات عنا",
        services: "الخدمات",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
