import { Box, Typography, Spinner } from "@/components/ui"
import useAuthHook from "../hooks/authHook";
import { useEffect } from "react";

const SessionBaseAuthPage = () => {
    const { handleSessionBaseAuth } = useAuthHook();

    useEffect(() => {
        handleSessionBaseAuth();
    }, []);
    
    return (
        <Box className="min-h-screen flex items-center justify-center">
            <Box className="text-center space-y-6">
                <Spinner size="lg" color="primary" />
                <Box className="space-y-2">
                    <Typography variant="h1">Authenticating...</Typography>
                    <Typography variant="p" className="text-gray-500">Authenticating session via ZCMC Portal</Typography>
                </Box>
            </Box>
        </Box>  
    )
}

export default SessionBaseAuthPage