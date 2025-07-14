import { useState, type FormEvent } from "react";

interface AuthState {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    name: string;
    setName: (name: string) => void;
    handleSignIn: (e: FormEvent) => void;
    handleVerifyEmail: (e: FormEvent) => void;
    handleSignUp: (e: FormEvent) => void;
    handleSessionBaseAuth: () => void;
}

const useAuthHook = (): AuthState => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSignIn = (e: FormEvent) => {
        e.preventDefault();
        // Implementation will go here
    }

    const handleVerifyEmail = (e: FormEvent) => {
        e.preventDefault();
        // Implementation will go here
    }

    const handleSignUp = (e: FormEvent) => {
        e.preventDefault();
        // Implementation will go here
    }
    
    const handleSessionBaseAuth = () => {
        // Implementation will go here
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        handleSignIn,
        handleVerifyEmail,
        handleSignUp,
        handleSessionBaseAuth
    };
}

export default useAuthHook;