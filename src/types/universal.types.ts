/*
  Security
 */

export interface ULoginRequest {
  username: string;
  password: string;
}

export interface ULoginResponse {
  activeSessions: number;
}

export interface UCurrentUser {
  id: number;
  username: string;
}


/*
  Product
 */

export interface UProductListItem {
  id: number;
  productName: string;
  cost: number;
  amountAvailable: number;
}


/*
  Vending
 */

export interface UGetDepositResponse {
  deposit: number;
}

export const depositAmountList = [5, 10, 20, 50, 100];

export interface UDepositRequest {
  amount: number;
}

export interface UBuyRequest {
  productId: number;
  amount: number;
}

export interface UWithdrawResponse {
  coinsReturned: number[];
}
