import axios from 'axios';
import {
  UBuyRequest,
  UDepositRequest,
  UGetDepositResponse,
  UProductListItem,
  UWithdrawResponse,
} from '../../types/universal.types';


export async function getProductsAPI(): Promise<UProductListItem[]> {
  const { data } = await axios.get<UProductListItem[]>('/product');
  return data;
}

export async function getDepositAmountAPI(): Promise<number> {
  const { data: { deposit } } = await axios.get<UGetDepositResponse>('/vending/deposit');
  return deposit;
}

export async function depositAPI(body: UDepositRequest): Promise<void> {
  await axios.post<void>('/vending/deposit', body);
}

export async function buyAPI(body: UBuyRequest): Promise<void> {
  await axios.post<void>('/vending/buy', body);
}

export async function withdrawAPI(): Promise<UWithdrawResponse> {
  const { data } = await axios.post<UWithdrawResponse>('/vending/reset');
  return data;
}
