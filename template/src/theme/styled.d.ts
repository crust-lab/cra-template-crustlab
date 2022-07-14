import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      red: string;
      black: string;
      gray: string;
      blue: string;
      primary: string;
      secondary: string;
      hover: string;
      text01: string;
      background01: string;
      background02: string;
      background03: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
