import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useIsAuthorizedSelector } from '../store/auth/slice';
import { AuthPaths } from './paths';

type RequireAuthProps = {
  element: JSX.Element;
};

const AuthGuard = ({ element }: RequireAuthProps) => {
  const isAuthorized = useIsAuthorizedSelector();
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to={AuthPaths.LOGIN} state={{ from: location }} replace />;
  }

  return element;
};

export default AuthGuard;
