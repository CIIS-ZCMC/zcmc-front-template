import Form from "@/components/common/Form";
import useAuthHook from "../hooks/authHook.tsx";
import {Box, Button, TextField, Typography} from "@/components/ui";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const navigate = useNavigate();
    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleSignIn 
    } = useAuthHook();
    
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-1/6 bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-black">Sign In</h1>
            <Form onSubmit={handleSignIn}>
                <Box className="space-y-4">
                    <Box className="space-y-4">
                        <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Box>
                    <Box className="flex justify-end">            
                        <Button label='Forgot Password?' variant="text" />
                    </Box>
                    <Button label="Sign In" type="submit" variant="contained" className="w-full"/>
                    <Box className="flex justify-end">
                        <Typography variant="p" className="text-gray-600">
                            Don't have an account? 
                            <Button label="Sign Up" variant="text" className="font-bold" onClick={() => navigate('/register')} />
                        </Typography>
                    </Box>
                </Box>
            </Form>
          </div>
        </div>
    )
}

export default SignInPage