import React from 'react';

interface Props {
    name: string;
    onClick: () => void;
    disabled?: boolean;
    kind?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({ name, onClick, disabled = false, kind = 'primary' }) => {
    const kindStyle = {
        primary: `text-white bg-primary-120
            hover:text-primary-120 hover:bg-secondary-100
            active:bg-secondary-110`,
        secondary: `border border-secondary-100
            hover:text-white hover:bg-secondary-100
            active:bg-secondary-110 active:border-secondary-110`,
    };

    const disabledStyle = 'text-grey-100 bg-grey-90';

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
