import { Box, Button, Typography } from "../ui"
import { useSidebar } from "../../contexts/SidebarContext";

const Sidebar = () => {
    const { isOpen } = useSidebar();
    
    return (
        <Box className={`${isOpen ? 'w-1/8' : 'w-20'} bg-green-100 flex flex-col`}>
            <Box className="h-16 bg-green-200 flex items-center justify-center">
                <Typography variant="h2" className="text-gray-600">Logo</Typography>
            </Box>
            <Box className="flex-1 bg-green-200">
                <h1>Menu</h1>
            </Box>
            <Box className="h-16 bg-green-200">
                <h1>Footer</h1>
            </Box>
        </Box>
    )
}

export default Sidebar