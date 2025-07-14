import type {FC} from "react";
import Box from "./Box";

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
    src: string;
    alt: string;
    size?: AvatarSize;
}

const sizeClasses: Record<AvatarSize, string> = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
};

const Avatar: FC<AvatarProps> = ({ src, alt, size = 'md' }) => {
    return (
        <Box className={`rounded-full overflow-hidden ${sizeClasses[size]} bg-gray-100`}>
            <img src={src} alt={alt} />
        </Box>
    );
}

export default Avatar;