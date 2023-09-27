import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Button } from './types';

interface Props {
    openResumeModal: () => void;
}

const TopNav: React.FC<Props> = ({ openResumeModal }) => {
    const buttonsList: Button[] = [
        {
            id: 'projects',
            name: 'Projects',
            onClick: () => {
                const element = document.getElementById('projects-collection');
                if (element) element.scrollIntoView();
            },
        },
        {
            id: 'resume',
            name: 'Resume',
            onClick: openResumeModal,
        },
        {
            id: 'contact',
            name: 'Contact',
            onClick: () => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView();
            },
        },
    ];

    return (
        <nav className="fixed w-full mb-[3.125rem] z-10 px-4 py-3 bg-grey-100 shadow-lg animate-navbar">
            <div className="flex justify-between max-w-[1400px] m-auto">
                <div className="text-orange-100 hover:animate-bounce">&lt; cody &gt;</div>

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
                                        border-b-2 border-transparent hover:border-orange-100"
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
