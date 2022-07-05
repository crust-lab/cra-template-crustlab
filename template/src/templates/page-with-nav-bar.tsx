import { Outlet } from 'react-router-dom';
import Footer from '../components/page-template/footer';
import NavBar from '../components/navigation/nav-bar';
import { PageContainer, LogoImg } from '../components/page-template/content';

import logo from '../assets/logo-crustlab.svg';
import LanguageChange from '../components/language-change/language-change';

const PageWithNavBar = () => (
  <PageContainer>
    <LogoImg src={logo} alt="logo" />
    <NavBar />
    <LanguageChange />
    <Outlet />
    <Footer />
  </PageContainer>
);

export default PageWithNavBar;
