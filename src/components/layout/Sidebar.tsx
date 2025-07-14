import { Box, Button, Typography, SidebarMenuItem } from "../ui"
import { useSidebar } from "@/contexts/SidebarContext";
import {sidebarRoute} from "@/routes/routeLibrary";
import { APP_NAME } from "@/constants/appConfig";

const Sidebar = () => {
    const { isOpen } = useSidebar();
    
    return (
        <Box className={`${isOpen ? 'w-1/8' : 'w-20'} bg-green-100 flex flex-col transition-all duration-300 ease-in-out`}>
            <Box className="h-32 bg-green-200 flex justify-center py-5">
                <Typography variant="h5" className="text-gray-600">{`${APP_NAME}`}</Typography>
            </Box>
            <Box className="flex-1 bg-green-200">
                <Box className={`flex flex-col space-y-2`}>
                    {sidebarRoute.map((route, index) => <SidebarMenuItem key={index} route={route} isOpen={isOpen} />)}
                </Box>
            </Box>
            <Box className="h-16 bg-green-200 flex items-center justify-center px-5">
                <Button 
                    label="Logout" 
                    variant="contained" 
                    color='error'
                    className="w-full"
                    onClick={() => {}} 
                />
            </Box>
        </Box>
    )
}

export default Sidebar