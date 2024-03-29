'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useOutsideClick from '@/hooks/useOutsideClick';
import Link from 'next/link';
import { useState } from 'react';
import { iconHoverBg, transitionTiming } from '@/components/ui/tailwindStyles';

type Props = {
    style: string;
};

export default function Dropdown({ style }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));

    const Dropdown = (
        <div className={`absolute right-0 bg-white rounded-b-xl shadow-lg w-[8.125rem]`}>
            <Link className={`rounded-b-xl block px-4 py-1 ${iconHoverBg}`} href="/">
                Log out
            </Link>
        </div>
    );

    return (
        <li ref={ref}>
            <button className={`w-full text-left ${style}`} onClick={() => setIsOpen(!isOpen)}>
                <span>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={`text-neutral-500 w-4 ${isOpen && 'rotate-180'} ${transitionTiming}`}
                    />
                </span>
                <span className="hidden md:inline">More</span>
            </button>
            <div className="relative">{isOpen && Dropdown}</div>
        </li>
    );
}
