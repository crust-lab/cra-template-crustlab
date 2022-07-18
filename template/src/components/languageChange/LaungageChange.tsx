import React from 'react';
import { Select, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getSpacing } from '../../theme/styleUtils';
import { TFunctionArgumentType } from '../../translations/i18n';

const { Text } = Typography;
const { Option } = Select;

export type LanguageSwitchOption = {
  value: string;
  labelTranslation: TFunctionArgumentType;
};

interface LanguageChangeProps {
  defaultLangVal: string;
  languageSwitchOptions: LanguageSwitchOption[];
}

const LanguageChange = ({
  defaultLangVal,
  languageSwitchOptions,
}: LanguageChangeProps) => {
  const { t, i18n } = useTranslation();
  const handleLangChange = (value: string) => i18n.changeLanguage(value);

  return (
    <>
      <StyledText>{t('languageChange.language')}:</StyledText>
      <Select
        test-id="language-change-button"
        defaultValue={defaultLangVal}
        onChange={handleLangChange}
      >
        {languageSwitchOptions.map(({ value, labelTranslation }) => (
          <Option key={value} value={value}>
            {t(labelTranslation).toString()}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default LanguageChange;

const StyledText = styled(Text)`
  margin: 0 ${getSpacing('spacing03')};
`;
