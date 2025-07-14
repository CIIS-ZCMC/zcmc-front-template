import Form from "@/components/common/Form";
import useAuthHook from "../hooks/authHook.tsx";
import {Box, Button, TextField} from "@/components/ui";

const AccountRecoveryPage = () => {
    const { 
        email, 
        setEmail, 
        handleVerifyEmail 
    } = useAuthHook();
    
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-black">Account Recovery</h1>
            <Form onSubmit={handleVerifyEmail}>
                <Box className="space-y-7">
                    <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Button label="Verify Email" type="submit" variant="contained" className="w-full"/>
                </Box>
            </Form>
          </div>
        </div>
    )
}

export default AccountRecoveryPage