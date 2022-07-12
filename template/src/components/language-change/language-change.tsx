import { useTranslation } from 'react-i18next';
import { Select, Typography } from 'antd';
import useLanguageChange from './language-change.utils';
import styled from 'styled-components';

const { Text } = Typography;
const { Option } = Select;

const LanguageChange = () => {
  const { t } = useTranslation();
  const { defaultLangVal, languageSwitchOptions, handleLangChange } =
    useLanguageChange();

  return (
    <div>
      <StyledText>{t('languageChange.language')}:</StyledText>
      <Select defaultValue={defaultLangVal} onChange={handleLangChange}>
        {languageSwitchOptions.map(({ value, labelTranslation }) => (
          <Option key={value} value={value}>
            {t(labelTranslation)}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default LanguageChange;

const StyledText = styled(Text)`
  margin: 0 8px;
`;
