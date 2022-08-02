import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import OverviewPage from '../pages/overview';
import TasksPage from '../pages/tasks';
import UserPage from '../pages/user';
import UsersPage from '../pages/users';
import PageWithNavBar from '../templates/main';
import AuthGuard from './AuthGuard';
import { AuthPaths, Paths } from './paths';

const Router = () => (
  <Routes>
    <Route path="/" element={<AuthGuard element={<PageWithNavBar />} />}>
      <Route path={Paths.HOME} element={<HomePage />} />
      <Route path={Paths.USERS} element={<UsersPage />} />
      <Route path={`${Paths.USERS}/:id`} element={<UserPage />} />
      <Route path={Paths.OVERVIEW} element={<OverviewPage />} />
      <Route path={Paths.TASKS} element={<TasksPage />} />
      <Route path={Paths.DASHBOARD} element={<DashboardPage />} />
    </Route>

    <Route path="/">
      <Route path={AuthPaths.LOGIN} element={<LoginPage />} />
    </Route>

    <Route
      path={Paths.WILDCARD}
      element={<Navigate to={Paths.HOME} replace />}
    />
  </Routes>
);

export default Router;
