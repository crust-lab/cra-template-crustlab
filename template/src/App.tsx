import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Router from './router';
import { store } from './store';
import GlobalStyle from './theme/globalStyle';
import './App.css';

const App = () => {
  return (
    <ThemeContextProvider>
      <AppLayout>
        <BrowserRouter>
          <Provider store={store}>
            <Router />
            <GlobalStyle />
          </Provider>
        </BrowserRouter>
      </AppLayout>
    </ThemeContextProvider>
  );
};

const AppLayout = styled(Layout)`
  height: 100%;
`;

export default App;
