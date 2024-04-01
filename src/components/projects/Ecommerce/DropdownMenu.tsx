import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import Link from 'next/link';

type Props = {
    buttonsList: { label: string; href: string }[];
};

export default function DropdownMenu({ buttonsList }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));

    useEffect(() => {
        const hideDropdown = () => {
            setIsOpen(false);
        };
        const linkElements = document.querySelectorAll('a');

        window.addEventListener('scroll', hideDropdown);
        linkElements.forEach((element) => element.addEventListener('click', hideDropdown));

        return () => {
            window.removeEventListener('scroll', hideDropdown);
            linkElements.forEach((element) => element.removeEventListener('click', hideDropdown));
        };
    }, [isOpen]);

    const DropdownList = (
        <ul
            className="absolute z-10 top-[2rem] w-[80vw] center-element
                    text-center space-y-4 pb-6 bg-sky-900 rounded-b-md shadow-lg
                    animate-dropdown"
        >
            {buttonsList.map(({ label, href }) => (
                <li key={label}>
                    <Link href={href}>{label}</Link>
                </li>
            ))}
        </ul>
    );

    return (
        <div ref={ref}>
            <button aria-label="Dropdown menu" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} size="xl" />
            </button>
            {isOpen && DropdownList}
        </div>
    );
}
