import create from 'zustand';
import axios from 'axios';

export type GlobalState = {
  currentUser: UCurrentUser;
};

export const useGlobalStore = create<GlobalState>((set, get) => ({
  currentUser: null,

  async storeLoginData() {
    try {
      await get().storeCurrentUser();
    } catch (err) {
      if (err?.response?.status === 401) {
        get().removeLoginData();
        return;
      }
      throw err;
    }
  },

  removeLoginData(forceOpenSecurityModal = false) {
    const { pathname } = window.location;
    const page = pagesByPath[pathname];
    localStorage.removeItem('authToken');
    localStorage.removeItem('anonymousPost');
    clearSentryUser();
    globalSocket.disconnect();
    if (forceOpenSecurityModal) {
      window.location.href = `${pagesById[conferenceConfig.securityPageId].path}?openModal=login`;
      return;
    }
    try {
      set({ currentUser: null });
      delete axios.defaults.headers.Authorization;
    } catch (e) {
      window.location.href = pagesById[conferenceConfig.securityPageId].path;
    }
  },

  async storeCurrentUser() {
    const currentUser = await getCurrentUserAPI();
    set({ currentUser });
  },
}));
