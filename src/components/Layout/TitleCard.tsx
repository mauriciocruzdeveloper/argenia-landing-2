export interface TitleCardProps {
    title: string;
    color: 'text-argPrimary' | 'text-argSecondary' | 'text-argTertiary' | 'text-white' | 'text-black';
    bgColor: 'bg-argPrimary' | 'bg-argSecondary' | 'bg-argTertiary' | 'bg-white' | 'bg-black';
}

export default function TitleCard({
    title,
    color,
    bgColor,
}: TitleCardProps) {
    return (
        <div
            className={`w-full rounded-xl my-4 h-10 lg:h-20 flex items-center justify-center text-md lg:text-4xl ${bgColor} ${color} text-transform: uppercase`}
        >
            <p>{title}</p>
        </div>
    );
}