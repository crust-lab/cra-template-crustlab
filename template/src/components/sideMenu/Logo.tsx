import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import logoTitle from '../../assets/logo.svg';

interface LogoProps {
  hideHeader?: boolean;
}

const Logo = ({ hideHeader }: LogoProps) => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      {!hideHeader && <LogoTitle src={logoTitle} alt="logoTitle" />}
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

const LogoTitle = styled.img`
  margin-left: 10px;
`;

export default Logo;
