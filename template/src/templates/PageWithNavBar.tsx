import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pageTemplate/Footer';
import NavBar from '../components/navigation/NavBar';
import { PageContainer, LogoImg } from '../components/pageTemplate/content';

import logo from '../assets/logoCrustlab.svg';
import LanguageChange from '../components/languageChange/LaungageChange';
import useLanguageChange from '../hooks/useChangeLanguage';

interface PageWithNavBarProps {
  hideNavbar?: boolean;
}

const PageWithNavBar = ({ hideNavbar }: PageWithNavBarProps) => {
  const { defaultLangVal, languageSwitchOptions } = useLanguageChange();

  return (
    <PageContainer>
      <LogoImg src={logo} alt="logo" />
      {!hideNavbar && <NavBar />}
      <LanguageChange
        defaultLangVal={defaultLangVal}
        languageSwitchOptions={languageSwitchOptions}
      />
      <Outlet />
      <Footer />
    </PageContainer>
  );
};

export default PageWithNavBar;
