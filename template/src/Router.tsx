import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Movies from './pages/movies/Movies';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const routesConfig = [
    {
        path: '/',
        title: 'Movies',
        component: <Movies/>,
        exact: true
    },
    {
        path: '/contact',
        title: 'Contact',
        component: <Contact/>
    },
    {
        path: '*',
        title: 'Page Not Found',
        component: <NotFound/>
    }
];

const Router = () => (
    <Switch>
        {
            routesConfig.map(({path, title, component, ...rest}) =>
                <Route key={path} path={path} {...rest}>
                    <ContentWrapper>
                        <PageTitleWrapper>{title}</PageTitleWrapper>
                        {component}
                    </ContentWrapper>
                </Route>
            )
        }
    </Switch>
);

const ContentWrapper = styled.div`
    margin: 2rem;
`;

const PageTitleWrapper = styled.div`
    margin-bottom: 1rem;
`;

export default Router;
