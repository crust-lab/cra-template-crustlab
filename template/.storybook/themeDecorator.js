import React from 'react';
import theme from '../src/theme/theme';
import { ThemeProvider } from 'styled-components';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
