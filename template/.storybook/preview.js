import 'antd/dist/antd.css';
import { addDecorator } from '@storybook/react';
import ThemeDecorator from './themeDecorator';
import RouterDecorator from './routerDecorator';
import StoreDecorator from './storeDecorator';

addDecorator(ThemeDecorator);
addDecorator(RouterDecorator);
addDecorator(StoreDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  customizeAntdTheme: {
    modifyVars: {
      white: '#ff1771',
      'border-radius-base': '20px',
    },
  },
};
