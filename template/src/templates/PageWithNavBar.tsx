import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import SideMenu from '../components/sideMenu/SideMenu';

const PageWithNavBar = () => {
  return (
    <PageContainer>
      <SideMenu />
      <Content>
        <Breadcrumb />
        <Outlet />
      </Content>
    </PageContainer>
  );
};

export const PageContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background02};
  min-height: 100vh;
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 25px;
`;

export default PageWithNavBar;
