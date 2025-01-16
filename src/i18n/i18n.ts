import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import fr from './translations/fr.json';
import ru from './translations/ru.json';
import pt from './translations/pt.json';
import ja from './translations/ja.json';
import ko from './translations/ko.json';
import ar from './translations/ar.json';
import it from './translations/it.json';

export const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ru: { translation: ru },
  pt: { translation: pt },
  ja: { translation: ja },
  ko: { translation: ko },
  ar: { translation: ar },
  it: { translation: it }
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;