import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      red: string;
      black: string;
      gray: string;
      blue: string;
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
