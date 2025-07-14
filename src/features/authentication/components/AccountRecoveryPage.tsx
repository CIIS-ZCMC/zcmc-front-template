import Form from "@/components/common/Form";
import useAuthHook from "../hooks/authHook.tsx";
import {Box, Button, TextField, Typography} from "@/components/ui";
import { useNavigate } from "react-router-dom";

const AccountRecoveryPage = () => {
    const navigate = useNavigate();

    const { 
        email, 
        setEmail, 
        handleVerifyEmail 
    } = useAuthHook();
    
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-1/6 bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-black">Account Recovery</h1>
            <Form onSubmit={handleVerifyEmail}>
                <Box className="space-y-7">
                    <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Button label="Verify Email" type="submit" variant="contained" className="w-full"/>
                </Box>
                <Box className="flex justify-end">
                    <Typography variant="p" className="text-gray-600">
                        Already have an account? 
                        <Button label="Sign In" variant="text" className="font-bold" onClick={() => navigate('/login')} />
                    </Typography>
                </Box>
            </Form>
          </div>
        </div>
    )
}

export default AccountRecoveryPage