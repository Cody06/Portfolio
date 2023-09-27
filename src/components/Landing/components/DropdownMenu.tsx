import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './types';

interface Props {
    buttonsList: Button[];
}

const DropdownMenu: React.FC<Props> = ({ buttonsList }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const nodeRef = useRef<HTMLUListElement>(null);

    // TODO: Revisit this type
    const handleClickOutside = (event: any) => {
        if (nodeRef.current && !nodeRef.current.contains(event.target)) {
            return setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });

    const dropdown = (
        <ul
            ref={nodeRef}
            className="absolute -right-3 bg-grey-100 p-3 space-y-2 rounded-b-md shadow-lg"
        >
            {buttonsList.map((button) => (
                <li key={button.id}>
                    <button
                        className="text-white"
                        onClick={() => {
                            button.onClick();
                            setIsDropdownOpen(false);
                        }}
                    >
                        {button.name}
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <button
                onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                }}
            >
                <FontAwesomeIcon icon={faBars} className="text-white" />
            </button>
            <div className="relative">{isDropdownOpen && dropdown}</div>
        </>
    );
};

export default DropdownMenu;
