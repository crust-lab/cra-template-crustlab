import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from '../store/store';
import { lightTheme } from '../theme/theme';
import i18n from '../translations/i18n';

const Providers = ({ children }: { children: ReactNode }) => {
  // Put there more providers if needed
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
