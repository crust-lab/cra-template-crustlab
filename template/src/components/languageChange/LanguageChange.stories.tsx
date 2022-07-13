import React from 'react';
import { useTranslation } from 'react-i18next';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DEFAULT_LANGUAGE, LanguageOptions } from '../../translations/i18n';
import LaungageChange, { LanguageSwitchOption } from './LaungageChange';

export default {
  title: 'Components',
  component: LaungageChange,
} as ComponentMeta<typeof LaungageChange>;

export const LaungageChangeButton: ComponentStory<typeof LaungageChange> =
  () => {
    const { i18n } = useTranslation();
    const defaultLangVal =
      (i18n.language as LanguageOptions) || DEFAULT_LANGUAGE;

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
    return (
      <LaungageChange
        defaultLangVal={defaultLangVal}
        languageSwitchOptions={languageSwitchOptions}
      />
    );
  };
