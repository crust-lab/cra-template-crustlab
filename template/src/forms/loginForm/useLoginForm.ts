import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { usePostLoginMutation } from '../../services/authApi/authApi';
import { tokenReceived } from '../../store/reducers/auth/authSlice';
import validationMessages from './validationMessages';

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
      dispatch(tokenReceived({ accessToken: access, refreshToken: refresh }));
      history('/');
    }
  };

  const formProps = useForm<LoginFormValues>({
    defaultValues,
    resolver: loginFormResolver,
  });

  return { ...formProps, onSubmit: handleLogin, isLoading, error };
};
