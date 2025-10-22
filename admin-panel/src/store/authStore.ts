import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  username: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string) => string;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      username: '',
      isAuthenticated: false,
      isLoading: true,

      login: (username: string) => {
        set({ username, isAuthenticated: true });
        return username;
      },

      logout: () => {
        set({ username: '', isAuthenticated: false });

        const { persist } = get() as any;
        if (persist?.clearStorage) {
          persist.clearStorage();
        }
      },
      setLoading: (loading: boolean) => set({ isLoading: loading }),
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: () => (state) => {
        // После восстановления из storage убираем загрузку
        if (state) {
          state.setLoading(false);
        }
      },
    },
  ),
);
