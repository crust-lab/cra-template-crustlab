import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getColor } from '../../theme/styleUtils';

const Dashboard = () => {
  const { t } = useTranslation();
  return <Header>{t('dashboardPage.title')}</Header>;
};

const Header = styled.div`
  color: ${getColor('text02')};
`;

export default Dashboard;
