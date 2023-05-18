import React from 'react';
import useAuth from './useAuth';
import { permissions } from 'src/models/common';

const usePermissions = () => {
  const { userRole } = useAuth();

  const hasPermissions = (permissionName: string) => {
    return permissions[permissionName]?.includes(userRole);
  };

  return { hasPermissions };
};

export default usePermissions;
