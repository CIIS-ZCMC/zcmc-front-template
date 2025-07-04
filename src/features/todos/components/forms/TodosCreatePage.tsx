import { useNavigate } from "react-router-dom";

import { INITIAL_TODO_DATA } from "../../constants/initial.constants";
import { TODO_BASE_PATH } from "../../../../constants/apiBasePath";

import useTodosActionHooks from "../../hooks/useTodosActionHooks";
import TodoForm from "./TodoForm";


export const TodosCreatePage = () => {
    const navigate = useNavigate();
    const { createTodo } = useTodosActionHooks();
    const initialTodo = INITIAL_TODO_DATA;

    const onSuccess = () => {
        navigate(TODO_BASE_PATH);
    };

    const onSubmit = async (todo: FormData) => {
        const response = await createTodo(todo);
        
        if(response === 201) {
            onSuccess();
            return true;
        }

        return false;
    };

    return (
        <div>
            <h1>Todos Create Page</h1>
            <TodoForm initialTodo={initialTodo} onSubmit={onSubmit} />
        </div>
    );
};

export default TodosCreatePage;