import Image from "next/image";
import { useState } from "react";

export default interface AppIconProps {
    image: any;
    imageHover: any;
    width?: number;
    height?: number;
}

export function AppIcon({
    image,
    imageHover,
    width=30,
    height=30
}: AppIconProps) {
    const [hover, setHover] = useState(false);

    return (
        <Image
            className="cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            width={width}
            height={height}
            src={hover ? imageHover : image}
            alt="logo"
        />
    );
}