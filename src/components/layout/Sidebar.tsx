import { Box, Button, Typography } from "../ui"
import { useSidebar } from "../../contexts/SidebarContext";
import {sidebarRoute} from "@/routes/routeLibrary";

const Sidebar = () => {
    const { isOpen } = useSidebar();
    
    return (
        <Box className={`${isOpen ? 'w-1/8' : 'w-20'} bg-green-100 flex flex-col transition-all duration-300 ease-in-out`}>
            <Box className="h-16 bg-green-200 flex items-center justify-center">
                <Typography variant="h3" className="text-gray-600">Logo</Typography>
            </Box>
            <Box className="flex-1 bg-green-200">
                <Box className="flex flex-col space-y-4 px-6">
                    {sidebarRoute.map((route, index) => (
                        <Box key={index} className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
                            {route.icon}
                            <Typography className="text-gray-600 font-medium">{route.label}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box className="h-16 bg-green-200 flex items-center justify-center px-6">
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