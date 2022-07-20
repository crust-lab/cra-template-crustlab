import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

export interface ThemeContextInterface {
  setTheme: (theme: DefaultTheme) => void;
  theme: DefaultTheme;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);
