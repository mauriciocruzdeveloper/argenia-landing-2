export interface TitleCardProps {
    title: string;
}

export default function TitleCard({
    title,
}: TitleCardProps) {
    return (
        <div
            className={`w-full rounded-xl my-4 h-10 lg:h-20 flex items-center justify-center text-md lg:text-4xl text-white bg-argMagenta`}
        >
            <p>{title}</p>
        </div>
    );
}