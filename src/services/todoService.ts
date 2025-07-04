import referral_api from "./apiClient";
import type { GetApiParams } from "../types/getApi.types";
import { TODO_BASE_PATH } from "../constants/apiBasePath";
    
export const getTodosApi = async (params: GetApiParams) => {
    return await referral_api.get(TODO_BASE_PATH, {params});
}

export const createTodoApi = async (todo: FormData) => {
    return await referral_api.post(TODO_BASE_PATH, todo);
}

export const updateTodoApi = async (id: string, todo: FormData) => {
    return await referral_api.put(`${TODO_BASE_PATH}/${id}`, todo);
}

export const deleteTodoApi = async (id: string) => {
    return await referral_api.delete(`${TODO_BASE_PATH}/${id}`);
}

export const uploadTodoApi = async (id: string, todo: FormData) => {
    return await referral_api.put(`${TODO_BASE_PATH}/${id}/upload`, todo, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}