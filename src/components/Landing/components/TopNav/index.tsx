import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Button } from '../../types';

const TopNav: React.FC = () => {
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
        <nav className="fixed z-10 w-full px-4 py-3 bg-grey-120 shadow-lg animate-navbar select-none">
            <div className="flex justify-between content-max-width m-auto">
                <div className="text-secondary-100 hover:animate-bounce">&lt; cody &gt;</div>

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
                                    className="text-white
                                        border-b-2 border-transparent hover:border-secondary-100"
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
};

export default TopNav;
