import create from 'zustand';
import { getCurrentUserAPI, loginAPI, logoutAllAPI, logoutAPI } from './security.api';
import { UCurrentUser, ULoginRequest } from '../../types/universal.types';

export type SecurityState = {
  currentUser: UCurrentUser | null;
  login: (body: ULoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  logoutAll: () => Promise<void>;
  storeCurrentUser: () => Promise<void>;
  removeLoginData: () => void;
};

export const useSecurityStore = create<SecurityState>((set, get) => ({
  currentUser: null,

  async login(body) {
    await loginAPI(body);
    await get().storeCurrentUser();
  },

  async logout() {
    await logoutAPI();
    await get().removeLoginData();
  },

  async logoutAll() {
    await logoutAllAPI();
    await get().removeLoginData();
  },

  removeLoginData() {
    set({ currentUser: null });
  },

  async storeCurrentUser() {
    const currentUser = await getCurrentUserAPI();
    set({ currentUser });
  },
}));
