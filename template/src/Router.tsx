import React, {Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import {Spin} from 'antd';


const MoviesPage = React.lazy(() => import(/* webpackChunkName: "MoviesPage" */ './pages/movies/Movies'));
const ContactPage = React.lazy(() => import(/* webpackChunkName: "ContactPage" */ './pages/contact/Contact'));
const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "NotFoundPage" */ './pages/NotFound'));

const routesConfig = [
    {
        path: '/',
        title: 'Movies',
        component: <MoviesPage/>,
        exact: true
    },
    {
        path: '/contact',
        title: 'Contact',
        component: <ContactPage/>
    },
    {
        path: '*',
        title: 'Page Not Found',
        component: <NotFoundPage/>
    }
];

const Router = () => (
    <Suspense fallback={<Spin />}>
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
    </Suspense>
);

const ContentWrapper = styled.div`
    margin: 2rem;
`;

const PageTitleWrapper = styled.div`
    margin-bottom: 1rem;
`;

export default Router;
