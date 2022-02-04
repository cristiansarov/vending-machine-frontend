import React from 'react';
import { RouteProps } from "react-router-dom";
import { Paths } from './types/global.types';
import LoginScreen from './modules/security/Login/Login.screen';
import LogoutScreen from './modules/security/Logout/Logout.screen';
import VendingProductsScreen from './modules/vending/VendingProducts/VendingProducts.screen';
import NotFound from './components/NotFound/NotFound';
import DepositScreen from './modules/vending/Deposit/Deposit.screen';

export interface RouteConfig extends Omit<RouteProps, 'element'> {
  isProtected?: boolean;
  path: string;
  component: React.VFC,
}

export const routes: RouteConfig[] = [
  { path: Paths.login, component: LoginScreen },
  { path: Paths.logout, component: LogoutScreen, isProtected: true },

  { path: Paths.products, component: VendingProductsScreen, isProtected: true },
  { path: Paths.deposit, component: DepositScreen, isProtected: true },

  { path: '*', component: NotFound },
];
