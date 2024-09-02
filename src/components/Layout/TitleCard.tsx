import { SystemColors } from "@/src/definitions/definitions";

export interface TitleCardProps {
    title?: string;
    subtitle?: string;
    textColor: SystemColors;
    bgColor: SystemColors;
}

export default async function TitleCard({
    title,
    subtitle,
    textColor,
    bgColor,
}: TitleCardProps) {
    const textColorClass = `text-${textColor}`;
    const bgColorClass = `bg-${bgColor}`;

    return (
        <div
            className={`flex-col w-full rounded-xl my-4 px-4 h-10 lg:h-20 flex items-center justify-center ${bgColorClass}`}
        >
            {title ? <p
                className={`text-[20px] lg:text-[30px] ${textColorClass} text-transform: uppercase`}
            >
                {title}
            </p> : null}
            {subtitle ? <p
                className={`text-[16px] lg:text-[20px] ${textColorClass} text-transform: capitalize`}
            >
                {subtitle}
            </p> : null}
        </div>
    );
}