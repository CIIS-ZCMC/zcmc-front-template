import type { FC } from "react";

interface FormProps {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent) => void;
}

const Form: FC<FormProps> = ({children, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form