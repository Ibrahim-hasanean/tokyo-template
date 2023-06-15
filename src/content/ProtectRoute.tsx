import React from 'react';
import { Navigate } from 'react-router';
import useAuth from 'src/hooks/useAuth';
import usePermissions from 'src/hooks/usePermissions';
import { PagesRoutes, permissionsNames } from 'src/models/common';

interface IProtectRoute {
  permission?: permissionsNames;
  children?: React.ReactNode;
}

const ProtectRoute = ({ children, permission }: IProtectRoute) => {
  const { isAuthenticated } = useAuth();
  const { hasPermissions } = usePermissions();
  // if (!isAuthenticated) {
  //   return <Navigate to={PagesRoutes.signIn.path} />;
  // }

  // if (permission && !hasPermissions(permission))
  //   return <Navigate to={PagesRoutes.dashboards.path} />;

  return <>{children}</>;
};

export default ProtectRoute;
