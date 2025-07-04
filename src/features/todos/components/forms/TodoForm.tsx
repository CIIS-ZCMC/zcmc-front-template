import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Todo } from "../../types/todo.types";
import { INITIAL_TODO_DATA } from "../../constants/initial.constants";

interface TodoFormProps {
    initialTodo?: Todo;
    onSubmit: (formData: FormData) => Promise<boolean>;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initialTodo }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialTodo || INITIAL_TODO_DATA);
    
    const getFormData = () => {
        let form = new FormData();

        form.append('title', formData.title);
        form.append('description', formData.description);
        form.append('priority', formData.priority);

        return form;
    };

    const handleCancel = () => {
        setFormData(initialTodo || INITIAL_TODO_DATA);
        navigate(-1);
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        await onSubmit(getFormData());
        
        setLoading(false);
    };  
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Todo Form</h1>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            <input type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            <input type="text" value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })} />
            <div>
                <button onClick={handleCancel}>Cancel</button>
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </div>
        </form>
    );
};

export default TodoForm;