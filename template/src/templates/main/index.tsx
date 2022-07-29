import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Breadcrumbs, ThemeSwitch } from '../../components';
import LanguageSwitch, {
  LanguageSwitchOption,
} from '../../components/languageSwitch';
import { getColor, getSpacing } from '../../theme/styleUtils';
import { DEFAULT_LANGUAGE, LanguageOptions } from '../../translations/i18n';
import { SideMenu } from './components';

const PageWithNavBar = () => {
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

  return (
    <PageContainer>
      <SideMenu />
      <Content>
        <Header>
          <Breadcrumbs />
          <LanguageSwitch
            languageSwitchOptions={languageSwitchOptions}
            defaultLangVal={defaultLangVal}
          />
          <ThemeSwitch />
        </Header>
        <Outlet />
      </Content>
    </PageContainer>
  );
};

export const PageContainer = styled.div`
  background-color: ${getColor('primaryBackground')};
  min-height: 100vh;
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${getSpacing('spacing32')}px ${getSpacing('spacing24')}px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${getColor('primaryAccent')};
`;

export default PageWithNavBar;
