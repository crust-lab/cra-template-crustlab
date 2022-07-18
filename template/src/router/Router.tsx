import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import OverviewPage from '../pages/OverviewPage';
import TasksPage from '../pages/TasksPage';
import UsersPage from '../pages/UsersPage';
import PageWithNavBar from '../templates/PageWithNavBar';
import { routerPaths, routerAuthPaths } from './routerPaths';

const Router = () => (
  <Routes>
    <Route path="/" element={<PageWithNavBar />}>
      <Route path={routerPaths.home} element={<HomePage />} />
      <Route path={routerPaths.users} element={<UsersPage />} />
      <Route path={routerPaths.overview} element={<OverviewPage />} />
      <Route path={routerPaths.tasks} element={<TasksPage />} />
      <Route path={routerPaths.dashboard} element={<DashboardPage />} />
    </Route>

    <Route path="/auth" element={<PageWithNavBar />}>
      <Route path={routerAuthPaths.login} element={<LoginPage />} />
    </Route>

    <Route
      path={routerPaths.wildCard}
      element={<Navigate to={routerPaths.home} replace />}
    />
  </Routes>
);

export default Router;
