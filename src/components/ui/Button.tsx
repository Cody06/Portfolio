import React from 'react';

interface Props {
    name: string;
    onClick: () => void;
    disabled?: boolean;
    kind?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({ name, onClick, disabled = false, kind = 'primary' }) => {
    const kindStyle = {
        primary:
            'text-white bg-grey-100 hover:text-grey-100 hover:bg-orange-100 active:bg-orange-80',
        secondary:
            'border border-orange-100 hover:text-white hover:bg-orange-100 active:bg-orange-80',
    };

    const disabledStyle = 'text-grey-80 bg-grey-20';

    return (
        <button
            className={`p-3 rounded-3xl shadow-lg active:shadow-none ease-in duration-200 ${
                disabled ? disabledStyle : kindStyle[kind]
            }`}
            disabled={disabled}
            onClick={onClick}
        >
            {name}
        </button>
    );
};

export default Button;
