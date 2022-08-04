import React from 'react';
import { Button, Input } from 'antd';
import { Controller } from 'react-hook-form';
import { useTranslation, withTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useLoginForm } from '../../../forms/login/useLoginForm';
import { getSpacing, getColor } from '../../../theme/styleUtils';

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
            <PasswordWrapper
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
      <StyledButton loading={isLoading} type="primary" htmlType="submit">
        {t('loginPage.submit')}
      </StyledButton>
    </Form>
  );
};

const StyledButton = styled(Button)`
  width: 400px;
  margin-top: ${getSpacing('spacing8')}px;
  border-radius: ${getSpacing('spacing24')}px;
`;

const InputWrapper = styled(Input)`
  margin: ${getSpacing('spacing8')}px 0;
  width: 400px;
  border-radius: ${getSpacing('spacing24')}px;
`;

const PasswordWrapper = styled(Input.Password)`
  margin: ${getSpacing('spacing8')}px 0;
  width: 400px;
  border-radius: ${getSpacing('spacing24')}px;
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
  top: -${getSpacing('spacing8')}px;
  color: ${getColor('danger')};
`;

export default withTranslation()(LoginForm);
