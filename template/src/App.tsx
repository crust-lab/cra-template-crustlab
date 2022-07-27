import React, { useState } from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Router from './router/Router';
import { store } from './store/store';
import GlobalStyle from './theme/globalStyle';
import { lightTheme } from './theme/theme';
import './App.css';
import { ThemeContext } from './theme/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AppLayout>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Provider store={store}>
              <Router />
              <GlobalStyle />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      </AppLayout>
    </ThemeContext.Provider>
  );
};

const AppLayout = styled(Layout)`
  height: 100%;
`;

export default App;
