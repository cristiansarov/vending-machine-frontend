import create from 'zustand';
import { UProductListItem } from '../../types/universal.types';
import { buyAPI, depositAPI, getDepositAmountAPI, getProductsAPI, withdrawAPI } from './vending.api';

export type VendingState = {
  products: UProductListItem[];
  storeProducts: () => Promise<void>;
  fetchingProducts: boolean;
  depositAmount: number;
  storeDepositAmount: () => Promise<void>;
  fetchingDeposit: boolean;
  deposit: (amount: number) => Promise<void>;
  buy: (productId: number) => Promise<void>;
  withdraw: () => Promise<number[]>;
};

export const useVendingStore = create<VendingState>((set, get) => ({
  depositAmount: 0,
  products: [],
  fetchingProducts: false,
  fetchingDeposit: false,

  async storeProducts() {
    set({ fetchingProducts: true });
    set({
      products: await getProductsAPI(),
      fetchingProducts: false,
    });
  },

  async storeDepositAmount() {
    set({ fetchingDeposit: true });
    set({
      depositAmount: await getDepositAmountAPI(),
      fetchingDeposit: false,
    });
  },

  async deposit(amount) {
    await depositAPI({ amount });
    set({
      depositAmount: get().depositAmount + amount,
    });
  },

  async buy(productId) {
    await buyAPI({ productId, amount: 1 });
    const product = get().products.find((product) => product.id === productId)!;
    set({
      depositAmount: get().depositAmount - product.cost,
      products: get().products.map((product) => (
        product.id === productId ? {...product, amountAvailable: product.amountAvailable - 1 } : product
      )),
    });
  },

  async withdraw() {
    const { coinsReturned } = await withdrawAPI();
    set({
      depositAmount: 0,
    });
    return coinsReturned;
  },
}));
