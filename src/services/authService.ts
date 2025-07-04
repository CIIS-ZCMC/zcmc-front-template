import { useAuthStore } from "../stores/authStore";
import referral_api from "./apiClient";

export const login = async () => {
    return await referral_api.post('/login');
}

export const register = async () => {
    return await referral_api.post('/register');
}

export const refreshSession = async () => {
    return await referral_api.get('/refresh-session');
}

export const logout = () => {
    useAuthStore().clearAuth();
    window.location.href = '/login';
}