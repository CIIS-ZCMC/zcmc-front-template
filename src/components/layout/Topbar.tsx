import { Box } from "../ui"
import {Avatar, Typography} from "../ui"

const Topbar = () => {
    return (
        <Box className="bg-blue-100 h-16 flex items-center justify-end px-4">
            <Box className="flex items-center space-x-4">
                <Box className="flex flex-col text-end">
                    <Typography variant="p" className="text-gray-600">
                        Welcome back,
                    </Typography>
                    <Typography variant="p" className="text-gray-600 font-semibold">
                        John Doe
                    </Typography>
                </Box>
                <Avatar src="" alt="" size="md" />
            </Box>
        </Box>
    )
}

export default Topbar