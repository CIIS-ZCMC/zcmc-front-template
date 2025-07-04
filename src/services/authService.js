import { useAuthStore } from "../stores/authStore";

export const logout = () => {
    useAuthStore.clearAuth();
    window.location.href = '/login';
}