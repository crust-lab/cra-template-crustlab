import { DefaultTheme } from 'styled-components';

const styledTheme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    red: '#FF0000',
    gray: '#E5E5E5',
    blue: '#0096FF',
    primary: '#2F49D1',
    secondary: '#233AB1',
    hover: '#4157D3',
    text01: '#FFFFFF',
    background01: '#FFFFFF',
    background02: '#E5E5E5',
    background03: '#CBD1F7',
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  spacing: {
    spacing01: 2,
    spacing02: 4,
    spacing03: 8,
    spacing04: 16,
    spacing05: 24,
    spacing06: 34,
    spacing07: 48,
    spacing08: 64,
    spacing09: 96,
    spacing10: 128,
  },
};

export default styledTheme;
