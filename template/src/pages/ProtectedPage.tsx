import React from 'react';
import { Card, TitleH4 } from '../components/common';
import { useTranslation } from 'react-i18next';

const ProtectedPage = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <TitleH4>{t('protectedPage.title')}</TitleH4>
    </Card>
  );
};

export default ProtectedPage;
