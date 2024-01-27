import Link from 'next/link';
import React from 'react';

interface Props {
    label: string;
    disabled?: boolean;
    href?: string;
    kind?: 'primary' | 'secondary';
    type?: 'button' | 'link';
    onClick?: () => void;
}

const Button: React.FC<Props> = ({
    label,
    onClick,
    disabled = false,
    href,
    kind = 'primary',
    type = 'button',
}) => {
    const kindStyle = {
        primary: `text-white bg-grey-120
            hover:text-grey-120 hover:bg-orange-100
            active:brightness-75`,
        secondary: `border border-orange-100
            hover:text-white hover:bg-orange-100
            active:brightness-75`,
    };

    const disabledStyle = 'text-grey-100 bg-grey-90';

    // Need isBtnDisabled arg for when we want to disable if it's a link and no href
    const ButtonElement = (isBtnDisabled: boolean) => (
        <button
            className={`p-3 rounded-3xl shadow-lg active:shadow-none ease-in duration-200 ${
                isBtnDisabled ? disabledStyle : kindStyle[kind]
            }`}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );

    const LinkElement = href ? (
        <Link
            href={href}
            className={`p-3 rounded-3xl shadow-lg active:shadow-none ease-in duration-200 ${kindStyle[kind]}`}
        >
            {label}
        </Link>
    ) : (
        ButtonElement(true)
    );

    switch (type) {
        case 'button':
            return ButtonElement(disabled);
        case 'link':
            return LinkElement;
        default:
            return ButtonElement(disabled);
    }
};

export default Button;
