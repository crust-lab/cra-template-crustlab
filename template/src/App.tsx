import React from 'react';
import {Layout} from 'antd';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
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
                        <IntlProvider locale="en">
                            <Header/>
                            <Layout>
                                <Menu/>
                                <MainContent>
                                    <Router/>
                                    <Footer>Created with ❤️ by CrustLab</Footer>
                                </MainContent>
                            </Layout>
                        </IntlProvider>
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
