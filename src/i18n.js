import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common from './assets/locales/fa/common.json';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fa: {
        translation:common
      }
    },
    lng: "fa",
    fallbackLng: "fa",
    keySeparator: '.', // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;