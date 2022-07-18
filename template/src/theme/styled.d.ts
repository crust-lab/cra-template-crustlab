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
    spacing: {
      spacing01: number;
      spacing02: number;
      spacing03: number;
      spacing04: number;
      spacing05: number;
      spacing06: number;
      spacing07: number;
      spacing08: number;
      spacing09: number;
      spacing10: number;
    };
  }
}
