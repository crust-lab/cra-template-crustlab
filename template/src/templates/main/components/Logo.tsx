import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import logo from '../../../assets/logo.png';
import logoTitle from '../../../assets/logo.svg';
import { getColor, getSpacing } from '../../../theme/styleUtils';

interface LogoProps {
  hideHeader?: boolean;
}

const Logo = ({ hideHeader }: LogoProps) => {
  const { t } = useTranslation();

  return (
    <LogoContainer>
      <LogoImg src={logo} alt={t('logo.alt')} />
      {!hideHeader && <LogoTitle src={logoTitle} alt={t('logo.alt')} />}
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${getSpacing('spacing16')}px 0;
  margin: 0 ${getSpacing('spacing16')}px;
  justify-content: center;
  border-bottom: 1px solid ${getColor('primaryAccent')};
`;

const LogoImg = styled.img`
  height: ${getSpacing('spacing32')}px;
`;

const LogoTitle = styled.img`
  margin-left: ${getSpacing('spacing8')}px;
`;

export default Logo;
