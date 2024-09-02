import { SystemColors } from '@/src/definitions/definitions';
import React from 'react';

interface CardProps {
    children: React.ReactNode
    textColor?: SystemColors;
    bgColor?: SystemColors;
}

export default function Card ({
    children,
    textColor='argPrimary2',
    bgColor='argSecondary1',
}: CardProps) {
    const textColorClass = `text-${textColor}`;
    const bgColorClass = `bg-${bgColor}`;

    return (
        <div className={`my-4 ${bgColorClass} ${textColorClass} p-4 rounded-2xl`}>
            {children}
        </div>
    )
}