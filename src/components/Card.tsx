export interface TitleCardProps {
    title: string;
    bgColor?: string;
    color?: string;
    fontSize?: number;
}

export default function TitleCard({
    color="white",
    bgColor="grey",
    fontSize=50,
    title,
}: TitleCardProps) {
    return (
        <div
            className={`w-full rounded-xl my-4 h-10 lg:h-20 flex items-center justify-center text-md lg:text-4xl text-${color} bg-${bgColor}`}
        >
            <p>{title}</p>
        </div>
    );
}