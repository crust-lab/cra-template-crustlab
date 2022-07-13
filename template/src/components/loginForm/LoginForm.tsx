import React from 'react';
import { Button, Input } from 'antd';
import { useTranslation, withTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { useLoginForm } from '../../forms/loginForm/useLoginForm';

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
              placeholder={t('loginPage.emailLabel')}
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
            <InputWrapper
              placeholder={t('loginPage.passwordLabel')}
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
        <ErrorMessage>{t('validation.incorrectEmailOrPassword')}</ErrorMessage>
      )}
      <Button loading={isLoading} type="primary" htmlType="submit">
        {t('loginPage.submit')}
      </Button>
    </Form>
  );
};

const InputWrapper = styled(Input)`
  margin: 8px 0;
  width: 400px;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ErrorMessage = styled.div`
  font-size: 10px;
  position: relative;
  top: -8px;
  color: ${({ theme: { colors } }) => colors.red};
`;

export default withTranslation()(LoginForm);
