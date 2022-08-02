import React, { createContext, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';

export const ThemeContext = createContext<ThemeContextData | null>(null);

interface Props {
  children: React.ReactNode;
}

const useProviderData = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const toggleTheme = () => {
    setTheme((current) => (current === lightTheme ? darkTheme : lightTheme));
  };

  return {
    theme,
    toggleTheme,
  };
};

export const ThemeContextProvider = ({ children }: Props) => {
  const state = useProviderData();
  return (
    <ThemeContext.Provider value={state}>
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

type ThemeContextData = ReturnType<typeof useProviderData>;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('ThemeContext should be used inside ThemeContextProvider');
  return context;
};
