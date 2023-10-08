import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../types';

interface Props {
    buttonsList: Button[];
}

const DropdownMenu: React.FC<Props> = ({ buttonsList }) => {
    const [isOpen, setOpen] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    // TODO: Revisit this type
    const handleClickOutside = (event: any) => {
        if (nodeRef.current && !nodeRef.current.contains(event.target)) {
            return setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });

    const dropdown = (
        <ul className="absolute -right-3 bg-grey-120 p-3 space-y-2 rounded-b-md shadow-lg">
            {buttonsList.map((button) => (
                <li key={button.id}>
                    <button
                        className="text-white"
                        onClick={() => {
                            button.onClick();
                            setOpen(false);
                        }}
                    >
                        {button.name}
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <div ref={nodeRef}>
            <button
                onClick={() => {
                    setOpen(!isOpen);
                }}
            >
                <FontAwesomeIcon icon={faBars} className="text-white" />
            </button>
            <div className="relative">{isOpen && dropdown}</div>
        </div>
    );
};

export default DropdownMenu;
