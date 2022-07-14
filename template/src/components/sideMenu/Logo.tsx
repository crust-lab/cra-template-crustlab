import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

interface LogoProps {
  hideHeader?: boolean;
}

const Logo = ({ hideHeader }: LogoProps) => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      {!hideHeader && <Header> CrustLab </Header>}
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin: 0 20px;
  justify-content: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.hover};
`;

const LogoImg = styled.img`
  height: 32px;
`;

const Header = styled.div`
  color: ${({ theme: { colors } }) => colors.text01};
  margin-left: 10px;
  font-size: 20px;

  &:hover {
    cursor: default;
  }
`;

export default Logo;
