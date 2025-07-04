import { create } from "zustand";

interface Todo {
    id: string;
    title: string;
    description: string;
    priority: string;
}

interface TodosStore {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    add: (todo: Todo) => void;
    update: (todo: Todo) => void;
    remove: (id: string) => void;
}

const useTodosStore = create<TodosStore>((set) => ({
    todos: [],
    setTodos: (todos: Todo[]) => set({ todos }),
    add: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
    update: (todo: Todo) => set((state) => ({ todos: state.todos.map((t) => (t.id === todo.id ? todo : t)) })),
    remove: (id: string) => set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
}));
    
export default useTodosStore;