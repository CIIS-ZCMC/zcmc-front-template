import { useState, type FormEvent } from "react";

interface AuthState {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    handleSignIn: (e: FormEvent) => void;
    handleVerifyEmail: (e: FormEvent) => void;
}

const useAuthHook = (): AuthState => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e: FormEvent) => {
        e.preventDefault();
        // Implementation will go here
    }

    const handleVerifyEmail = (e: FormEvent) => {
        e.preventDefault();
        // Implementation will go here
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        handleVerifyEmail
    };
}

export default useAuthHook;