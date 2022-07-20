import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import OverviewPage from '../pages/OverviewPage';
import TasksPage from '../pages/TasksPage';
import UserPage from '../pages/UserPage';
import UsersPage from '../pages/UsersPage';
import PageWithNavBar from '../templates/PageWithNavBar';
import AuthGuard from './AuthGuard';
import { routerPaths, routerAuthPaths } from './routerPaths';

const Router = () => (
  <Routes>
    <Route path="/" element={<AuthGuard element={<PageWithNavBar />} />}>
      <Route path={routerPaths.home} element={<HomePage />} />
      <Route path={routerPaths.users} element={<UsersPage />} />
      <Route path={`${routerPaths.users}/:id`} element={<UserPage />} />
      <Route path={routerPaths.overview} element={<OverviewPage />} />
      <Route path={routerPaths.tasks} element={<TasksPage />} />
      <Route path={routerPaths.dashboard} element={<DashboardPage />} />
    </Route>

    <Route path="/">
      <Route path={routerAuthPaths.login} element={<LoginPage />} />
    </Route>

    <Route
      path={routerPaths.wildCard}
      element={<Navigate to={routerPaths.home} replace />}
    />
  </Routes>
);

export default Router;
