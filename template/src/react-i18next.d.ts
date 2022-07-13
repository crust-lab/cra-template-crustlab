import 'react-i18next';
import en from './translations/locales/en.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: { translation: typeof en };
  }
}
