import type { ChangeEvent, FC } from "react";
import Box from "./Box.tsx";

type TextFieldType = 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'tel' | 'url' | 'search';

interface TextFieldProps {
    label?: string;
    placeholder?: string;
    type?: TextFieldType;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const TextField: FC<TextFieldProps> = ({
    label, 
    placeholder, 
    type = 'text', 
    value, 
    onChange,
    className
}: TextFieldProps) => {

    return (
        <Box className="flex flex-col space-y-1">
            {label && <label className="text-sm font-medium">{label}</label>}
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 ${className}`}
            />
        </Box>
    )
}

export default TextField;