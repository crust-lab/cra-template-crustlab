import React from 'react';
import { routerPaths } from '../../router/routerPaths';
import NavLink, { NavLinkProps } from './NavLink';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import UserInfo from '../userInfo/UserInfo';

const NavBar = () => {
  const { t } = useTranslation();

  const navLinks: NavLinkProps[] = [
    {
      label: t('navigation.home'),
      to: routerPaths.home,
    },
    {
      label: t('navigation.rickAndMorty'),
      to: routerPaths.rickAndMorty,
    },
    {
      label: t('navigation.protected'),
      to: routerPaths.protected,
    },
  ];

  return (
    <NavContainer>
      {navLinks.map((link) => (
        <NavLink key={link.label} {...link} />
      ))}
      <UserInfo />
    </NavContainer>
  );
};

const NavContainer = styled.div`
  margin: 12px 0;
`;

export default NavBar;
