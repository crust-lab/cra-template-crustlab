import React from 'react';
import { Button } from 'antd';
import { useTranslation, withTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import Input from '../../../components/inputs/Input';
import { useLoginForm } from '../../../forms/login/useLoginForm';
import {
  getColor,
  getMediaQueryBreakpoint,
  getSpacing,
} from '../../../theme/styleUtils';

const LoginForm = () => {
  const { t } = useTranslation();
  const {
    onSubmit,
    control,
    isLoading,
    handleSubmit,
    error,
    formState: { errors },
  } = useLoginForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper
        control={control}
        placeholder={t('pages.loginPage.components.form.emailLabel')}
        name="email"
        status={(error || errors.email) && 'error'}
      />
      <InputWrapper
        control={control}
        placeholder={t('pages.loginPage.components.form.passwordLabel')}
        name="password"
        type="password"
        status={(error || errors.password) && 'error'}
      />
      {error && (
        <ErrorMessage>
          {t('pages.loginPage.components.form.errors.incorrectEmailOrPassword')}
        </ErrorMessage>
      )}
      <StyledButton loading={isLoading} type="primary" htmlType="submit">
        {t('pages.loginPage.components.form.submit')}
      </StyledButton>
    </Form>
  );
};

const baseSizes = css`
  @media ${getMediaQueryBreakpoint('xs')} {
    width: 60%;
  }
  @media ${getMediaQueryBreakpoint('md')} {
    width: 400px;
  }
`;

const StyledButton = styled(Button)`
  ${baseSizes}
  margin-top: ${getSpacing('spacing8')}px;
  border-radius: ${getSpacing('spacing24')}px;
`;

const InputWrapper = styled(Input)`
  margin: ${getSpacing('spacing8')}px 0;
  border-radius: ${getSpacing('spacing24')}px;
` as typeof Input;

const Form = styled.form`
  @media ${getMediaQueryBreakpoint('xs')} {
    width: 100%;
  }
  @media ${getMediaQueryBreakpoint('md')} {
    width: 500px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ErrorMessage = styled.div`
  font-size: 10px;
  position: relative;
  top: -${getSpacing('spacing8')}px;
  color: ${getColor('danger')};
`;

export default withTranslation()(LoginForm);
