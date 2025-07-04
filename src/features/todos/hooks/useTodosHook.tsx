import { useCallback, useEffect, useState } from "react";
import useTodosStore from "../../../stores/todosStore.tsx";
import { getTodosApi } from "../../../services/todoService";

import type { GetApiParams } from "../../../types/getApi.types";

const useTodosHook = () => {
    const {     
        todos, 
        setTodos,
    } = useTodosStore();

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const fetchTodos = useCallback(async (params: GetApiParams) => {
        setIsLoading(true);
        try {
            const response = await getTodosApi(params);
            const data = await response.data;
            
            /**
             * Is Empty will display UI for Empty Component 
             * while data length is 0 will display 
             * No Data Found Component
             */ 
            if(data.length === 0 && data.meta?.isEmpty) {
                setIsEmpty(true);
            }

            setTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    }, []); 

    useEffect(() => {
        if(!isLoading) {
            fetchTodos({
                search: '',
                page: 1,
                limit: 10
            });
        }
    }, [isLoading]);

    return {
        todos,
        isLoading,
        hasError,
        isEmpty,
        fetchTodos
    };
}

export default useTodosHook;