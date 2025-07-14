import Form from "@/components/common/Form";
import useAuthHook from "../hooks/authHook.tsx";
import {Box, Button, TextField} from "@/components/ui";

const SignUpPage = () => {
    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        name,
        setName,
        handleSignUp 
    } = useAuthHook();
    
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-black">Sign Up</h1>
            <Form onSubmit={handleSignUp}>
                <Box className="space-y-8">
                    <Box className="space-y-2">
                        <TextField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Box>
                    <Button label="Sign Up" type="submit" variant="contained" className="w-full"/>
                </Box>
            </Form>
          </div>
        </div>
    )
}

export default SignUpPage