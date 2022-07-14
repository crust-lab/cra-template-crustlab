import React from 'react';
import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyle';
import Router from './router/Router';
import { store } from './store/store';

import './App.css';

const App = () => {
  return (
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
  );
};

const AppLayout = styled(Layout)`
  min-height: 100vh;
`;

export default App;
