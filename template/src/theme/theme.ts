import { generate } from '@ant-design/colors';
import { DefaultTheme } from 'styled-components';

const LIGHT_PRIMARY_COLOR = '#2F49D1';
const lightPrimaryColors = generate(LIGHT_PRIMARY_COLOR);
const darkPrimaryColors = generate(LIGHT_PRIMARY_COLOR, { theme: 'dark' });

const spacing = {
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
};

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const lightTheme: DefaultTheme = {
  colors: {
    primary: lightPrimaryColors[5],
    secondary: lightPrimaryColors[6],
    danger: '#FF0000',
    primaryHover: '#4157D3',
    primaryAccent: '#4157D3',
    primaryActive: '#4157D3',
    text01: '#FFFFFF',
    text02: '#000000',
    textHover: '#B0BED2',
    primaryBackground: '#F1F3F9',
    secondaryBackground: '#FFFFFF',
    primary01: lightPrimaryColors[0],
    primary02: lightPrimaryColors[1],
    primary03: lightPrimaryColors[2],
    primary04: lightPrimaryColors[3],
    primary05: lightPrimaryColors[4],
    primary06: lightPrimaryColors[5],
    primary07: lightPrimaryColors[6],
    primary08: lightPrimaryColors[7],
    primary09: lightPrimaryColors[8],
    primary10: lightPrimaryColors[9],
  },
  breakpoints,
  spacing,
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: darkPrimaryColors[5],
    secondary: darkPrimaryColors[4],
    danger: '#FF0000',
    primaryHover: '#4157D3',
    primaryAccent: '#4157D3',
    primaryActive: '#4157D3',
    text01: '#FFFFFF',
    text02: '#FFFFFF',
    textHover: '#B0BED2',
    primaryBackground: '#121212',
    secondaryBackground: '#1E1E1E',
    primary01: darkPrimaryColors[0],
    primary02: darkPrimaryColors[1],
    primary03: darkPrimaryColors[2],
    primary04: darkPrimaryColors[3],
    primary05: darkPrimaryColors[4],
    primary06: darkPrimaryColors[5],
    primary07: darkPrimaryColors[6],
    primary08: darkPrimaryColors[7],
    primary09: darkPrimaryColors[8],
    primary10: darkPrimaryColors[9],
  },
  breakpoints,
  spacing,
};
