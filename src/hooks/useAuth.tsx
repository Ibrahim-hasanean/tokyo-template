import React, { useContext } from 'react';
import { AuthContext } from 'src/contexts/AuthContext';

const useAuth = () => {
  const { isAuthenticated, user, userRole, login, loading, error } =
    useContext(AuthContext);
  return { isAuthenticated, user, userRole, login, loading, error };
};

export default useAuth;
