import Form from "@/components/common/Form";
import useAuthHook from "../hooks/authHook.tsx";
import {Box, Button, TextField, Typography} from "@/components/ui";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {  
    const navigate = useNavigate();
    
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
        <div className=" min-h-screen flex items-center justify-center">
          <div className="w-1/6 bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-black">Sign Up</h1>
            <Form onSubmit={handleSignUp}>
                <Box className="space-y-8">
                    <Box className="space-y-2">
                        <TextField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Box>
                    <Button label="Sign Up" type="submit" variant="contained" className="w-full"/>
                    <Box className="flex justify-end">
                        <Typography variant="p" className="text-gray-600">
                            Already have an account? 
                            <Button label="Sign In" variant="text" className="font-bold" onClick={() => navigate('/login')} />
                        </Typography>
                    </Box>
                </Box>
            </Form>
          </div>
        </div>
    )
}

export default SignUpPage