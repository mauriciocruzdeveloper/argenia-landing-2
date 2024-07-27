import React from 'react';

interface CardProps {
    children: React.ReactNode
    color?: 'text-argPrimary' | 'text-argSecondary' | 'text-argTertiary' | 'text-white' | 'text-black';
    bgColor?: 'bg-argPrimary' | 'bg-argSecondary' | 'bg-argTertiary' | 'bg-white' | 'bg-black';
}

export default function Card ({
    children,
    color='text-argSecondary',
    bgColor='bg-white',
}: CardProps) {
    return (
        <div className={`${bgColor} ${color} p-4 rounded-2xl`}>
            {children}
        </div>
    )
}