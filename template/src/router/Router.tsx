import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routerPaths, routerAuthPaths } from './routerPaths';
import PageWithNavBar from '../templates/PageWithNavBar';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AuthGuard from './AuthGuard';
import ProtectedPage from '../pages/ProtectedPage';
import Lazy from './Lazy';

const Router = () => (
  <Routes>
    <Route path="/" element={<PageWithNavBar />}>
      <Route path={routerPaths.home} element={<HomePage />} />
      <Route
        path={routerPaths.rickAndMorty}
        element={<Lazy component={() => import('../pages/RickyPage')} />}
      />
      <Route
        path={routerPaths.protected}
        element={<AuthGuard element={<ProtectedPage />} />}
      />
    </Route>

    <Route path="/auth" element={<PageWithNavBar hideNavbar />}>
      <Route path={routerAuthPaths.login} element={<LoginPage />} />
    </Route>

    <Route
      path={routerPaths.wildCard}
      element={<Navigate to={routerPaths.home} replace />}
    />
  </Routes>
);

export default Router;
