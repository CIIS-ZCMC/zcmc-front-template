import type {FC} from "react";

type ButtonVariant = 'text' | 'outline' | 'contained';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonColor = 'success' | 'error' | 'warning' | 'info';

interface ButtonProps {
    variant?: ButtonVariant;
    label: string;
    type?: ButtonType;
    className?: string;
    loading?: boolean;
    loadingLabel?: string;
    color?: ButtonColor;
    onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
    text: 'bg-transparent text-primary hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium',
    outline: 'border border-primary text-primary px-3 py-2 rounded-md text-sm font-medium bg-transparent hover:bg-primary hover:text-white transition-colors',
    contained: 'btn-contained px-3 py-2 rounded-md text-sm font-medium text-white',
};

const colorStyles: Record<ButtonColor, string> = {
    success: 'bg-success',
    error: 'bg-error',
    warning: 'bg-warning',
    info: 'bg-info',
};

const Button: FC<ButtonProps> = ({ 
    variant = 'contained', 
    label, 
    type, 
    className, 
    loading = false,
    loadingLabel = 'Loading...',
    color = 'success',
    onClick, 
}) => {

    return (
        <button 
            onClick={onClick} 
            className={`btn cursor-pointer ${variantStyles[variant]} ${colorStyles[color]} ${className || ''}`} 
            type={type}
            disabled={loading}
        >
            {loading ? loadingLabel : label}
        </button>
    );  
};

export default Button;