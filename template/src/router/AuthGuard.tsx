import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
import { routerAuthPaths } from '../router/routerPaths';
import { selectIsAuthorised } from '../store/reducers/auth/authSlice';

type RequireAuthProps = {
  element: JSX.Element;
};

const AuthGuard = ({ element }: RequireAuthProps) => {
  const isAuthorised = useAppSelector(selectIsAuthorised);
  const location = useLocation();

  if (!isAuthorised) {
    return (
      <Navigate to={routerAuthPaths.login} state={{ from: location }} replace />
    );
  }

  return element;
};

export default AuthGuard;
