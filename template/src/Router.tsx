import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import {Spin} from 'antd';


const MoviesPage = React.lazy(() => import(/* webpackChunkName: "MoviesPage" */ './pages/movies/Movies'));
const ContactPage = React.lazy(() => import(/* webpackChunkName: "ContactPage" */ './pages/contact/Contact'));
const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "NotFoundPage" */ './pages/NotFound'));

const routesConfig = [
    {
        path: '/',
        title: 'Movies',
        element: <MoviesPage/>,
    },
    {
        path: '/contact',
        title: 'Contact',
        element: <ContactPage/>
    },
    {
        path: '*',
        title: 'Page Not Found',
        element: <NotFoundPage/>
    }
];

const Router = () => (
    <Suspense fallback={<Spin />}>
        <Routes>
            {
                routesConfig.map(({path, title, element, ...rest}) =>
                    <Route key={path} path={path} element={
                        <ContentWrapper>
                            <PageTitleWrapper>{title}</PageTitleWrapper>
                            {element}
                        </ContentWrapper>
                    } {...rest} />
                )
            }
        </Routes>
    </Suspense>
);

const ContentWrapper = styled.div`
    margin: 2rem;
`;

const PageTitleWrapper = styled.div`
    margin-bottom: 1rem;
`;

export default Router;
