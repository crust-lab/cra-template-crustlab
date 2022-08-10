import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getColor } from '../../theme/styleUtils';

const HomePage = () => {
  const { t } = useTranslation();
  return <Header>{t('pages.homePage.title')}</Header>;
};

const Header = styled.div`
  color: ${getColor('text02')};
`;

export default HomePage;
