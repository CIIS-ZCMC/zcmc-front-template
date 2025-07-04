import type { Todo } from "../types/todo.types";

const TodosCardsView = ({ todos }: { todos: Todo[] }) => {
    return (
        <div>
            <h1>Todos List</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                    <p>{todo.priority}</p>
                </div>
            ))}
        </div>
    );
};

export default TodosCardsView;