import React from 'react';
import {Layout} from 'antd';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import theme from './theme';
import Header from './components/Header';
import Menu from './components/Menu';
import Router from './Router';
import {store} from './store';

import './App.css';

const {Footer, Content} = Layout;

const App = () => {
    return (
        <AppLayout>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Provider store={store}>
                        <Header/>
                        <Layout>
                            <Menu/>
                            <MainContent>
                                <Router/>
                                <Footer>Created by @Crustlab with ❤️</Footer>
                            </MainContent>
                        </Layout>
                    </Provider>
                </BrowserRouter>
            </ThemeProvider>
        </AppLayout>
    );
};

const AppLayout = styled(Layout)`
    min-height: 100vh;
`;

const MainContent = styled(Content)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default App;
