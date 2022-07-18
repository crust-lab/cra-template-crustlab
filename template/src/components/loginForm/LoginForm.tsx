import React from 'react';
import { Button, Input } from 'antd';
import { Controller } from 'react-hook-form';
import { useTranslation, withTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useLoginForm } from '../../forms/loginForm/useLoginForm';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectIsAuthorised } from '../../store/reducers/auth/authSlice';
import { getColor, getSpacing } from '../../theme/styleUtils';

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

  const isAuthorised = useAppSelector(selectIsAuthorised);
  console.log(isAuthorised);

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
  margin: ${getSpacing('spacing03')}px 0;
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
  top: -${getSpacing('spacing03')}px;
  color: ${getColor('danger')};
`;

export default withTranslation()(LoginForm);
