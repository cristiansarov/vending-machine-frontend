import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSecurityStore } from '../../security.store';
import { Paths } from '../../../../types/global.types';
import { UserRoles } from '../../../../types/universal.types';


export interface AuthenticatedRouteProps {
  role?: UserRoles;
}

export const AuthContext = React.createContext<AuthenticatedRouteProps>({});

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ children, role }) => {
  const currentUser = useSecurityStore((state) => state.currentUser);

  if (!currentUser || (role && role !== currentUser.role)) {
    return <Navigate to={Paths.login} replace/>;
  }

  return <>{children}</>;
};

export default AuthenticatedRoute;
