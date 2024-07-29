import { SystemColors } from "@/src/definitions/definitions";

export interface TitleCardProps {
    title: string;
    textColor: SystemColors;
    bgColor: SystemColors;
}

export default async function TitleCard({
    title,
    textColor,
    bgColor,
}: TitleCardProps) {
    const textColorClass = `text-${textColor}`;
    const bgColorClass = `bg-${bgColor}`;

    return (
        <div
            className={`w-full rounded-xl my-4 h-10 lg:h-20 flex items-center justify-center text-[20px] lg:text-[30px] ${bgColorClass} ${textColorClass} text-transform: uppercase`}
        >
            <p>{title}</p>
        </div>
    );
}