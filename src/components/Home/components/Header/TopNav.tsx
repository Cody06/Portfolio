import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Button } from '../../types';

type Props = {
    showAnimation: boolean;
};

export default function TopNav({ showAnimation }: Props) {
    const buttonsList: Button[] = [
        {
            id: 'projects-collection',
            name: 'Projects',
            onClick: () => document.getElementById('projects-collection')?.scrollIntoView(),
        },
        {
            id: 'work-experience',
            name: 'Experience',
            onClick: () => document.getElementById('work-experience')?.scrollIntoView(),
        },
        {
            id: 'certifications',
            name: 'Certifications',
            onClick: () => document.getElementById('certifications')?.scrollIntoView(),
        },
        {
            id: 'contact',
            name: 'Contact',
            onClick: () => document.getElementById('contact')?.scrollIntoView(),
        },
    ];

    return (
        <nav
            className={`fixed z-10 w-full p-4 bg-grey-120 shadow-lg select-none ${
                showAnimation && 'animate-navbar'
            }`}
        >
            <div className="flex justify-between content-max-width m-auto">
                <button
                    className="text-orange-100 hover:animate-bounce"
                    onClick={() => document.getElementById('header')?.scrollIntoView()}
                >
                    &lt; cody &gt;
                </button>

                {/* Phone and Tablet */}
                <div className="lg:hidden">
                    <DropdownMenu buttonsList={buttonsList} />
                </div>

                {/* Desktop */}
                <div className="hidden lg:block">
                    <ul className="flex gap-x-10">
                        {buttonsList.map((button) => (
                            <li key={button.id}>
                                <button
                                    className="text-white hover:text-orange-100"
                                    onClick={button.onClick}
                                >
                                    {button.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
