import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { MenuPropsType } from '.';
import { Breadcrumbs, ThemeSwitch } from '../../components';
import { PageContainer, StyledContent } from '../../components/common';
import LanguageSwitch from '../../components/languageSwitch';
import { useLanguage } from '../../hooks';
import { getColor } from '../../theme/styleUtils';
import { SideMenu } from './components';

const Main = ({ menuItems }: MenuPropsType) => {
  const { defaultLangVal, languageSwitchOptions } = useLanguage();

  return (
    <PageContainer>
      <SideMenu menuItems={menuItems} />
      <StyledContent>
        <StyledHeader>
          <Breadcrumbs />
          <LanguageSwitch
            languageSwitchOptions={languageSwitchOptions}
            defaultLangVal={defaultLangVal}
          />
          <ThemeSwitch />
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

export default Main;
