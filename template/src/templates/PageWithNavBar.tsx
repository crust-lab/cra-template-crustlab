import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import SideMenu from '../components/sideMenu/SideMenu';
import { getColor, getSpacing } from '../theme/styleUtils';

const PageWithNavBar = () => {
  return (
    <PageContainer>
      <SideMenu />
      <Content>
        <Breadcrumbs />
        <Outlet />
      </Content>
    </PageContainer>
  );
};

export const PageContainer = styled.div`
  background-color: ${getColor('secondaryBackground')};
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

export default PageWithNavBar;
