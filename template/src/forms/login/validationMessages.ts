import i18next from '../../translations/i18n';

const { t } = i18next;

const validationMessages = {
  requiredMsg: t('globalErrors.required'),
  invalidEmailMsg: t('globalErrors.invalidEmail'),
};

export default validationMessages;
