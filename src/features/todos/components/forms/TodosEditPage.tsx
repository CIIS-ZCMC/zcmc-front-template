import { useNavigate } from "react-router-dom";

import { INITIAL_TODO_DATA } from "../../constants/initial.constants";
import { TODO_BASE_PATH } from "../../../../constants/apiBasePath";

import TodoForm from "./TodoForm";
import useTodosActionHooks from "../../hooks/useTodosActionHooks";

export const TodosEditPage = () => {
    const navigate = useNavigate();
    const { updateTodo } = useTodosActionHooks();
    const initialTodo = INITIAL_TODO_DATA;

    const onSuccess = () => {
        navigate(TODO_BASE_PATH);
    };

    const onSubmit = async (id: string, todo: FormData) => {
        const response = await updateTodo(id, todo);
        
        if(response === 200) {
            onSuccess();
            return true;
        }

        return false;
    };

    return (
        <div>
            <h1>Todos Edit Page</h1>
            <TodoForm initialTodo={initialTodo} onSubmit={(todo) => onSubmit(initialTodo.id, todo)} />
        </div>
    );
};

export default TodosEditPage;
