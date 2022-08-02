import React from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo-crustlab.svg';
import Avatar from '../components/avatar/Avatar';
import { PageContainer, StyledContent } from '../components/common';
import Navbar from '../components/navbar/Navbar';
import { getColor, getSpacing } from '../theme/styleUtils';
import { MenuItemType } from './PageContainer';

interface PageWithNavBarProps {
  menuItems: MenuItemType[];
}

const PageWithNavBar = ({ menuItems }: PageWithNavBarProps) => {
  return (
    <PageContainer>
      <StyledHeader>
        <Logo src={logo} />
        <Avatar />
      </StyledHeader>
      <StyledContent>
        <Outlet />
      </StyledContent>
      <StyledFooter>
        <Navbar menuItems={menuItems} />
      </StyledFooter>
    </PageContainer>
  );
};

const Logo = styled.img`
  height: ${getSpacing('spacing32')}px;
`;

const StyledHeader = styled.div`
  background: ${getColor('primaryBackground')};
  padding: ${getSpacing('spacing24')}px ${getSpacing('spacing24')}px
    ${getSpacing('spacing8')}px ${getSpacing('spacing24')}px;
  display: flex;
  justify-content: space-between;
`;

const StyledFooter = styled(Footer)`
  padding: ${getSpacing('spacing8')}px ${getSpacing('spacing24')}px 0
    ${getSpacing('spacing24')}px;
  background: ${getColor('primaryBackground')};
  position: sticky;
  z-index: 1;
  bottom: 0;
  width: 100%;
`;

export default PageWithNavBar;
