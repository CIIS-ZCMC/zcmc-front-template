import { useCallback } from "react";
import useTodosStore from "../../../stores/todosStore.tsx";
import { createTodoApi, updateTodoApi, deleteTodoApi } from "../../../services/todoService";

const useTodosActionHooks = () => {
    const {     
        add,
        update,
        remove
    } = useTodosStore();

    const createTodo = useCallback(async (todo: FormData) => {
        try {
            const response = await createTodoApi(todo);

            if(response.status === 201) {
                add(response.data);
            }

            return response.status;
        } catch (error) {
            console.error('Error creating todo:', error);
            return error;
        }
    }, []);

    const updateTodo = useCallback(async (id: string, todo: FormData) => {
        try {
            const response = await updateTodoApi(id, todo);

            if(response.status === 200) {
                update(response.data);
            }

            return response.status;
        } catch (error) {
            console.error('Error updating todo:', error);   
            return error;
        }
    }, []);

    const deleteTodo = useCallback(async (id: string) => {
        try {
            const response = await deleteTodoApi(id);

            if(response.status === 200) {
                remove(id);
            }

            return response.status;
        } catch (error) {
            console.error('Error deleting todo:', error);
            return error;
        }
    }, []);

    return {
        createTodo,
        updateTodo,
        deleteTodo
    };
}

export default useTodosActionHooks;