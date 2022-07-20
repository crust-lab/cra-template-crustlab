import React, { useContext } from 'react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { darkTheme, lightTheme } from '../../theme/theme';
import { ThemeContext } from '../../theme/ThemeContext';

const ThemeChange = () => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  return (
    <Switch
      checkedChildren={t('themeChange.lightModeLabel')}
      unCheckedChildren={t('themeChange.darkModeLabel')}
      onChange={(checked) =>
        themeContext?.setTheme(checked ? darkTheme : lightTheme)
      }
    />
  );
};

export default ThemeChange;
