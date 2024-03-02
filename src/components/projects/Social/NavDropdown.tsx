'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useOutsideClick from '@/hooks/useOutsideClick';
import Link from 'next/link';
import { useState } from 'react';

export default function NavDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));

    const Dropdown = (
        <Link
            className="absolute p-2 overflow w-[5rem] md:w-full bg-white rounded-b-lg shadow-lg
                hover:bg-grey-100 hover:cursor-pointer"
            href="/"
        >
            Log out
        </Link>
    );

    return (
        <li>
            <button
                className="w-full text-left p-1 rounded-lg space-x-3
                    hover:bg-grey-100 hover:cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={`text-grey-110 w-4 ${isOpen && 'rotate-180'}`}
                    />
                </span>
                <span className="hidden md:inline">More</span>
            </button>
            <div className="relative">{isOpen && Dropdown}</div>
        </li>
    );
}
