import { DefaultTheme } from 'styled-components';

const styledTheme: DefaultTheme = {
  colors: {
    primary: '#2F49D1',
    secondary: '#233AB1',
    danger: '#FF0000',
    primaryHover: '#4157D3',
    primaryAccent: '#4157D3',
    primaryActive: '#4157D3',
    text01: '#FFFFFF',
    text02: '#B0BED2',
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#F1F3F9',
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  spacing: {
    spacing2: 2,
    spacing4: 4,
    spacing8: 8,
    spacing16: 16,
    spacing24: 24,
    spacing32: 32,
    spacing48: 48,
    spacing64: 64,
    spacing96: 96,
    spacing128: 128,
  },
};

export default styledTheme;
