import type { FC } from "react";

interface SpinnerProps {
    size?: "sm" | "md" | "lg" | "xl";
    color?: string;
    className?: string;
}

const Spinner: FC<SpinnerProps> = ({ size = "md", color = "primary", className = "" }) => {
    const sizes = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-12 h-12"
    };

    const sizeClass = sizes[size];
    const colorClass = `border-${color}`;

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className={`
                ${sizeClass}
                border-2
                border-t-transparent
                border-r-transparent
                border-b-transparent
                rounded-full
                border-l-[4px]
                animate-spin
                ${colorClass}
            `}>
            </div>
        </div>
    );
};

export default Spinner;