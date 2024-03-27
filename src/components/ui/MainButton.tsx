import Link from 'next/link';
import React from 'react';

type Props = {
    label: string;
    style: `text-${string} border-${string} bg-${string}`;
    hoverStyle?: `hover:border-${string} hover:bg-${string}`;
    disabled?: boolean;
    fullWidth?: boolean;
    href?: string;
    rounded?: boolean;
    shadow?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
};

export default function MainButton({
    label,
    style,
    hoverStyle,
    disabled = false,
    fullWidth = false,
    href,
    rounded = false,
    shadow = false,
    type = 'button',
    onClick,
}: Props) {
    const baseStyle = `border px-4 py-2 font-medium ${style}
        ${fullWidth ? 'w-full' : 'w-max'}
        ${rounded ? 'rounded-3xl' : 'rounded-lg'}`;

    const completeStyle = `${baseStyle}
        ${hoverStyle ? `${hoverStyle} ease-linear duration-200` : 'hover:brightness-90'}
        ${shadow && 'shadow-lg active:shadow-none'}`;

    const BtnElement = (
        <button className={completeStyle} type={type} onClick={onClick}>
            {label}
        </button>
    );

    const LinkElement = href && (
        <Link href={href} className={completeStyle}>
            {label}
        </Link>
    );

    const DisabledBtn = (
        <button className={`${baseStyle} opacity-50`} disabled={disabled}>
            {label}
        </button>
    );

    return disabled ? DisabledBtn : href ? LinkElement : BtnElement;
}
