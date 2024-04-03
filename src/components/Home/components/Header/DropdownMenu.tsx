import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Button } from '../../types';
import useOutsideClick from '@/hooks/useOutsideClick';

type Props = {
    buttonsList: Button[];
};

export default function DropdownMenu({ buttonsList }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));

    useEffect(() => {
        const hideDropdown = () => {
            setIsOpen(false);
        };

        window.addEventListener('scroll', hideDropdown);
        return () => window.removeEventListener('scroll', hideDropdown);
    }, []);

    const DropdownList = (
        <ul
            className="absolute z-10 top-[4rem] w-[80vw] center-element
                    text-center space-y-4 pb-6 bg-neutral-800 rounded-b-md shadow-lg
                    animate-dropdown"
        >
            {buttonsList.map(({ label, onClick }) => (
                <li key={label}>
                    <button
                        className="text-white font-medium"
                        onClick={() => {
                            onClick();
                            setIsOpen(false);
                        }}
                    >
                        {label}
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
            {isOpen && DropdownList}
        </div>
    );
}
