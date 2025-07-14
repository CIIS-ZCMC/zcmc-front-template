import Box from "./Box"
import Typography from "./Typography"

interface SidebarMenuItemProps {
    route: any;
    isOpen: boolean;
}

const SidebarMenuItem = ({route, isOpen}: SidebarMenuItemProps) => {
    return (
        <Box key={route.id} className="flex items-center space-x-2 cursor-pointer px-5 hover:bg-primary-dark hover:text-white p-2 transition-all duration-100 ease-in-out">
            {route.icon}
            {isOpen && <Typography variant="p">{route.label}</Typography>}
        </Box>
    )
}

export default SidebarMenuItem