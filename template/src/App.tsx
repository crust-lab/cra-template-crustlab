import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Router from './router/Router';
import { store } from './store/store';
import GlobalStyle from './theme/globalStyle';
import theme from './theme/theme';

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
  height: 100%;
`;

export default App;
