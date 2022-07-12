import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import validationMessages from './validationMessages';
import { usePostLoginMutation } from '../../services/authApi/authApi';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { tokenReceived } from '../../store/reducers/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export enum LoginFormFields {
  Email = 'email',
  Password = 'password',
}

export type LoginFormValues = {
  [LoginFormFields.Email]: string;
  [LoginFormFields.Password]: string;
};

export const defaultValues: LoginFormValues = {
  [LoginFormFields.Email]: '',
  [LoginFormFields.Password]: '',
};

const { requiredMsg, invalidEmailMsg } = validationMessages;

export const loginFormResolver = yupResolver(
  yup.object().shape({
    [LoginFormFields.Email]: yup
      .string()
      .required(requiredMsg)
      .email(invalidEmailMsg),
    [LoginFormFields.Password]: yup.string().required(requiredMsg),
  })
);

export const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const [postLogin, { isLoading, error }] = usePostLoginMutation();
  const handleLogin = async ({ email, password }: LoginFormValues) => {
    if (isLoading) return;

    const data = await postLogin({
      email,
      password,
    });

    if (data) {
      const { access, refresh } = data;
      history('/');
      dispatch(tokenReceived({ accessToken: access, refreshToken: refresh }));
    }
  };

  const formProps = useForm<LoginFormValues>({
    defaultValues,
    resolver: loginFormResolver,
  });

  return { ...formProps, onSubmit: handleLogin, isLoading, error };
};
