import { useCallback, useState } from "react";
import useTodosStore from "../../../stores/todosStore.tsx";
import { getTodosApi } from "../../../services/todoService";

import type { GetApiParams } from "../../../types/getApi.types";

const useTodosHook = () => {
    const {     
        todos, 
        setTodos,
    } = useTodosStore();

    const [loading, setLoading] = useState(false);

    const fetchTodos = useCallback(async (params: GetApiParams) => {
        setLoading(true);
        try {
            const response = await getTodosApi(params);
            const data = await response.data;
            
            setTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        todos,
        loading,
        fetchTodos
    };
}

export default useTodosHook;