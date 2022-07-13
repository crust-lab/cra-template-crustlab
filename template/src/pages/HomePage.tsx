import React from 'react';
import { Card, TitleH4 } from '../components/common';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <TitleH4>{t('homePage.title')}</TitleH4>
    </Card>
  );
};

export default HomePage;
