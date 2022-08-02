import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LaungageChange from '.';
import { useLanguage } from '../../hooks';

export default {
  title: 'Components',
  component: LaungageChange,
} as ComponentMeta<typeof LaungageChange>;

export const LanguageSwitchButton: ComponentStory<typeof LaungageChange> =
  () => {
    const { defaultLangVal, languageSwitchOptions } = useLanguage();

    return (
      <LaungageChange
        defaultLangVal={defaultLangVal}
        languageSwitchOptions={languageSwitchOptions}
      />
    );
  };
