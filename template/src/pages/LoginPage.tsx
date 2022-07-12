import React from 'react';
import { Card, TitleH4 } from '../components/common';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/loginForm/LoginForm';
import styled from 'styled-components';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <CardWrapper>
      <TitleH4>{t('loginPage.title')}</TitleH4>
      <LoginForm />
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)`
  min-width: 500px;
`;

export default LoginPage;
