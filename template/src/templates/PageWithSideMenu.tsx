import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import { PageContainer, StyledContent } from '../components/common';
import LanguageChange, {
  LanguageSwitchOption,
} from '../components/languageChange/LaungageChange';
import SideMenu from '../components/sideMenu/SideMenu';
import ThemeChange from '../components/themeChange/ThemeChange';
import { getColor } from '../theme/styleUtils';
import { DEFAULT_LANGUAGE, LanguageOptions } from '../translations/i18n';
import { MenuItemType } from './PageContainer';

interface PageWithSideMenuProps {
  menuItems: MenuItemType[];
}

const PageWithSideMenu = ({ menuItems }: PageWithSideMenuProps) => {
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
      <SideMenu menuItems={menuItems} />
      <StyledContent>
        <StyledHeader>
          <Breadcrumbs />
          <LanguageChange
            languageSwitchOptions={languageSwitchOptions}
            defaultLangVal={defaultLangVal}
          />
          <ThemeChange />
        </StyledHeader>
        <Outlet />
      </StyledContent>
    </PageContainer>
  );
};

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: ${getColor('primaryBackground')};
  width: 100%;
  border-bottom: 1px solid ${getColor('primaryAccent')};
`;

export default PageWithSideMenu;
