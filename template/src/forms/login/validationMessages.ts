import i18next from '../../translations/i18n';

const { t } = i18next;

const validationMessages = {
  requiredMsg: t('validation.required'),
  invalidEmailMsg: t('validation.invalidEmail'),
};

export default validationMessages;
