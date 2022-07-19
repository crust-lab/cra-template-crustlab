import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      primaryHover: string;
      primaryAccent: string;
      primaryActive: string;
      text01: string;
      text02: string;
      primaryBackground: string;
      secondaryBackground: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    spacing: {
      spacing2: number;
      spacing4: number;
      spacing8: number;
      spacing16: number;
      spacing24: number;
      spacing32: number;
      spacing48: number;
      spacing64: number;
      spacing96: number;
      spacing128: number;
    };
  }
}
