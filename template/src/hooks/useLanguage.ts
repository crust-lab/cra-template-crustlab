import { useTranslation } from 'react-i18next';
import {
  DEFAULT_LANGUAGE,
  LanguageOptions,
  TFunctionArgumentType,
} from '../translations/i18n';

type LanguageSwitchOption = {
  value: LanguageOptions;
  labelTranslation: TFunctionArgumentType;
};

const useLanguage = () => {
  const { i18n } = useTranslation();

  const defaultLangVal = (i18n.language as LanguageOptions) || DEFAULT_LANGUAGE;

  const languageSwitchOptions: LanguageSwitchOption[] = [
    {
      value: LanguageOptions.EN,
      labelTranslation: 'components.languageSwitcher.eng',
    },
    {
      value: LanguageOptions.PL,
      labelTranslation: 'components.languageSwitcher.pl',
    },
  ];

  return {
    defaultLangVal,
    languageSwitchOptions,
  };
};

export default useLanguage;
