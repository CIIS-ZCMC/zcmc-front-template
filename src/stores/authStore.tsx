import { create } from "zustand";

interface AuthStore {
    auth: any | null;
    setAuth: (auth: any) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    auth: null,
    setAuth: (auth) => set({ auth }),
    clearAuth: () => set({ auth: null }),
}));
