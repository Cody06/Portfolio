import Link from 'next/link';
import React from 'react';
import { transitionTiming } from './tailwindStyles';

type Props = {
    label: string;
    style: `text-${string} border-${string} bg-${string}`;
    hoverStyle?: `hover:border-${string} hover:bg-${string}`;
    disabled?: boolean;
    fullWidth?: boolean;
    href?: string;
    loading?: boolean;
    rounded?: boolean;
    shadow?: boolean;
    size?: 'sm' | 'md';
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
    loading = false,
    rounded = false,
    shadow = false,
    size = 'md',
    type = 'button',
    onClick,
}: Props) {
    const sizeStyle = {
        sm: 'px-3 py-1',
        md: 'px-4 py-2',
    };

    const baseStyle = `border font-medium text-nowrap ${sizeStyle[size]} ${style}
        ${fullWidth ? 'w-full' : 'w-max'}
        ${rounded ? 'rounded-full' : 'rounded-lg'}`;

    const completeStyle = `${baseStyle} ${transitionTiming}
        ${hoverStyle ? `${hoverStyle}` : 'hover:brightness-90'}
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

    const isDisabled = disabled || loading;

    const DisabledBtn = (
        <button className={`${baseStyle} opacity-50`} disabled={isDisabled}>
            {loading ? 'Loading...' : label}
        </button>
    );

    return isDisabled ? DisabledBtn : href ? LinkElement : BtnElement;
}
