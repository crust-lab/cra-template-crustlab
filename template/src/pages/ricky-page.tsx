import { Card, TitleH4 } from '../components/common';
import RickyCharactersList from '../components/ricky-characters/ricky-characters-list';
import { useTranslation } from 'react-i18next';

const RickyPage = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <TitleH4>{t('rickyPage.title')}</TitleH4>
      <RickyCharactersList />
    </Card>
  );
};

export default RickyPage;
