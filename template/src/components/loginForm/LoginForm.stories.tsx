import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginFormComponent from './LoginForm';

export default {
  title: 'Components',
  component: LoginFormComponent,
} as ComponentMeta<typeof LoginFormComponent>;

export const LoginForm: ComponentStory<typeof LoginFormComponent> = () => {
  return <LoginFormComponent />;
};
