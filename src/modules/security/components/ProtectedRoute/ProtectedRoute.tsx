import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSecurityStore } from '../../security.store';
import { Paths } from '../../../../types/global.types';


const ProtectedRoute: React.FC<any> = ({ children }) => {
  const isLoggedIn = useSecurityStore((state) => !!state.currentUser);

  if (!isLoggedIn) {
    return <Navigate to={Paths.login} replace/>;
  }

  return children;
};

export default ProtectedRoute;
