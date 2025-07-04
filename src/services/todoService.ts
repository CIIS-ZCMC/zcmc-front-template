import referral_api from "./apiClient";
import type { GetApiParams } from "../types/getApi.types";
    
export const getTodosApi = async (params: GetApiParams) => {
    return await referral_api.get('/todos', {params});
}

export const createTodoApi = async (todo: FormData) => {
    return await referral_api.post('/todos', todo);
}

export const updateTodoApi = async (id: string, todo: FormData) => {
    return await referral_api.put(`/todos/${id}`, todo);
}

export const deleteTodoApi = async (id: string) => {
    return await referral_api.delete(`/todos/${id}`);
}

export const uploadTodoApi = async (id: string, todo: FormData) => {
    return await referral_api.put(`/todos/${id}/upload`, todo, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}