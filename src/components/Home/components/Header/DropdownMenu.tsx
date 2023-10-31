import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button } from '../../types';
import useOutsideClick from '@/hooks/useOutsideClick';

interface Props {
    buttonsList: Button[];
}

const DropdownMenu: React.FC<Props> = ({ buttonsList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));

    const DropdownList = (
        <ul className="absolute -right-3 bg-grey-120 p-3 space-y-2 rounded-b-md shadow-lg">
            {buttonsList.map((button) => (
                <li key={button.id}>
                    <button
                        className="text-white"
                        onClick={() => {
                            button.onClick();
                            setIsOpen(false);
                        }}
                    >
                        {button.name}
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <div ref={ref}>
            <button aria-label="Dropdown menu" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} className="text-white" />
            </button>
            <div className="relative">{isOpen && DropdownList}</div>
        </div>
    );
};

export default DropdownMenu;
