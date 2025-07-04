import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TodoFormProps {
    initialTodo?: { title: string; description: string; priority: string };
    onSubmit: (todo: { title: string; description: string; priority: string }) => Promise<boolean>;
    onSuccess?: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, onSuccess, initialTodo }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialTodo || { title: '', description: '', priority: 'low' });
    
    const handleCancel = () => {
        setFormData(initialTodo || { title: '', description: '', priority: 'low' });
        navigate(-1);
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const success = await onSubmit(formData);
        
        setLoading(false);

        if(success) {
            onSuccess?.();
        }
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