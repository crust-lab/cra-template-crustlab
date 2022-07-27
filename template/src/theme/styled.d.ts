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
      textHover: string;
      primaryBackground: string;
      secondaryBackground: string;
      primary01: string;
      primary02: string;
      primary03: string;
      primary04: string;
      primary05: string;
      primary06: string;
      primary07: string;
      primary08: string;
      primary09: string;
      primary10: string;
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
