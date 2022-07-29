import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import logo from '../../assets/logo-crustlab.svg';
import { getSpacing } from '../../theme/styleUtils';
import { LoginForm } from './components';

const { Title } = Typography;

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <img src={logo} alt={t('logo.alt')} />
      <LoginTitle>{t('loginPage.title')}</LoginTitle>
      <LoginForm />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginTitle = styled(Title).attrs({ level: 4 })`
  text-align: center;
  margin: ${getSpacing('spacing24')}px 0 !important;
`;

export default LoginPage;
