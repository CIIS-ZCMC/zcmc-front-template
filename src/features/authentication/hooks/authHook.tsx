import { useState } from "react";

interface AuthState {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    handleSignIn: (e: React.FormEvent) => void;
}

const useAuthHook = (): AuthState => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        // Implementation will go here
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn
    };
}

export default useAuthHook;