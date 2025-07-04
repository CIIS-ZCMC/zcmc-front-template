interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'neutral';
    label: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
}

const Button = ({ variant = 'primary', label, type, className, onClick }: ButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            className={`btn btn-${variant} ${className}`} 
            type={type}
        >
            {label}
        </button>
    );  
};

export default Button;
