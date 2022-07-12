import { useTranslation } from 'react-i18next';
import { DEFAULT_LANGUAGE, LanguageOptions } from '../../translations/i18n';

type LanguageSwitchOption = {
  value: LanguageOptions;
  labelTranslation: string;
};

const useLanguageChange = () => {
  const { i18n } = useTranslation();

  const defaultLangVal = (i18n.language as LanguageOptions) || DEFAULT_LANGUAGE;

  const languageSwitchOptions: LanguageSwitchOption[] = [
    {
      value: LanguageOptions.EN,
      labelTranslation: 'languageChange.eng',
    },
    {
      value: LanguageOptions.PL,
      labelTranslation: 'languageChange.pl',
    },
  ];

  const handleLangChange = (value: LanguageOptions) =>
    i18n.changeLanguage(value);

  return {
    defaultLangVal,
    languageSwitchOptions,
    handleLangChange,
  };
};

export default useLanguageChange;
