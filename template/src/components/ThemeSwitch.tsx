import React from 'react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../contexts/ThemeContext';

const ThemeSwitch = () => {
  const { t } = useTranslation();
  const { toggleTheme } = useThemeContext();

  return (
    <Switch
      checkedChildren={t('components.themeSwitch.lightModeLabel')}
      unCheckedChildren={t('components.themeSwitch.darkModeLabel')}
      onChange={toggleTheme}
    />
  );
};

export default ThemeSwitch;
