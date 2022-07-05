import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pl from './locales/pl.json';

export enum LanguageOptions {
  EN = 'en',
  PL = 'pl',
}

export const DEFAULT_LANGUAGE = LanguageOptions.EN;

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  resources: {
    en,
    pl,
  },
  debug: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
});

export default i18n;
