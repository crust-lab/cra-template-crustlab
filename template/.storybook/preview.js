import 'antd/dist/antd.css';
import { addDecorator } from '@storybook/react';
import ThemeDecorator from './themeDecorator';
import RouterDecorator from './routerDecorator';
import StoreDecorator from './storeDecorator';

addDecorator(ThemeDecorator);
addDecorator(RouterDecorator);
addDecorator(StoreDecorator);
