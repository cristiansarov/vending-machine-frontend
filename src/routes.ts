import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Paths } from './types/global.types';
import LoginScreen from './modules/security/Login/Login.screen';
import LogoutScreen from './modules/security/Logout/Logout.screen';
import VendingProductsScreen from './modules/vending/VendingProducts/VendingProducts.screen';
import NotFound from './components/NotFound/NotFound';
import DepositScreen from './modules/vending/Deposit/Deposit.screen';
import { AuthenticatedRouteProps } from './modules/security/components/AuthenticatedRoute/AuthenticatedRoute';
import { UserRoles } from './types/universal.types';
import SellerDashboardScreen from './modules/seller/SellerDashboard/SellerDashboard.screen';
import HomeRedirectScreen from './modules/security/HomeRedirect/HomeRedirect.screen';

export interface RouteConfig extends Omit<RouteProps, 'element'> {
  authenticated?: boolean | AuthenticatedRouteProps;
  path: string;
  component: React.VFC,
}

export const routes: RouteConfig[] = [
  { path: Paths.login, component: LoginScreen },
  { path: Paths.logout, component: LogoutScreen, authenticated: true },
  { path: Paths.home, component: HomeRedirectScreen, authenticated: true },

  { path: Paths.sellerDashboard, component: SellerDashboardScreen, authenticated: { role: UserRoles.seller } },
  { path: Paths.buyerProducts, component: VendingProductsScreen, authenticated: { role: UserRoles.buyer } },
  { path: Paths.buyerDeposit, component: DepositScreen, authenticated: true },

  { path: '*', component: NotFound },
];
