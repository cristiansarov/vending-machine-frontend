import React, { useContext } from 'react';
import { useSecurityStore } from '../security.store';
import { UserRoles } from '../../../types/universal.types';
import { Navigate } from 'react-router-dom';
import { Paths } from '../../../types/global.types';


export interface LoginProps {

}

const HomeRedirectScreen: React.VFC<LoginProps> = () => {
  const currentUser = useSecurityStore((state) => state.currentUser);

  if (currentUser?.role === UserRoles.buyer) {
    return <Navigate to={Paths.buyerDeposit} replace/>;
  }

  if (currentUser?.role === UserRoles.seller) {
    return <Navigate to={Paths.sellerDashboard} replace/>;
  }

  return <>Never</>;
};

export default HomeRedirectScreen;
