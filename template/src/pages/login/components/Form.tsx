import React from 'react';
import { Button, Input } from 'antd';
import { Controller } from 'react-hook-form';
import { useTranslation, withTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
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
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <InputWrapper
              placeholder={t('pages.loginPage.components.form.emailLabel')}
              status={(errors?.email || error) && 'error'}
              onChange={onChange}
              value={value}
            />
            {errors?.email && (
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            )}
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <PasswordWrapper
              placeholder={t('pages.loginPage.components.form.passwordLabel')}
              status={(errors?.password || error) && 'error'}
              type="password"
              onChange={onChange}
              value={value}
            />
            {errors?.password && (
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            )}
          </>
        )}
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
  ${baseSizes}
  margin: ${getSpacing('spacing8')}px 0;
  border-radius: ${getSpacing('spacing24')}px;
`;

const PasswordWrapper = styled(Input.Password)`
  ${baseSizes}
  margin: ${getSpacing('spacing8')}px 0;
  border-radius: ${getSpacing('spacing24')}px;
`;

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
