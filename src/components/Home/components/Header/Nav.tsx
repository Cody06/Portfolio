import React, { useEffect, useRef } from 'react';
import { Button } from '../../types';
import Logo from '@/components/ui/Logo';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

type Props = {
    showAnimation: boolean;
};

export default function Nav({ showAnimation }: Props) {
    const buttonsList: Button[] = [
        {
            label: 'Projects',
            onClick: () => document.getElementById('projects-collection')?.scrollIntoView(),
        },
        {
            label: 'Experience',
            onClick: () => document.getElementById('work-experience')?.scrollIntoView(),
        },
        {
            label: 'Certifications',
            onClick: () => document.getElementById('certifications')?.scrollIntoView(),
        },
        {
            label: 'Contact',
            onClick: () => document.getElementById('contact')?.scrollIntoView(),
        },
    ];

    const headerRef = useRef<HTMLElement>(null);
    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const headerElement = headerRef.current;

            if (!headerElement) return;

            if (prevScrollY > currentScrollY) {
                headerElement.style.transform = 'translateY(0)';
            } else {
                headerElement.style.transform = 'translateY(-100px)';
            }
            prevScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            ref={headerRef}
            className={`fixed z-10 w-full p-4 bg-neutral-800 shadow-lg select-none ease-in-out duration-500 ${
                showAnimation && 'animate-navbar'
            }`}
        >
            <div className="flex justify-between items-center content-max-width m-auto">
                <button
                    onClick={() => document.getElementById('header')?.scrollIntoView()}
                    className="z-20"
                >
                    <Logo />
                </button>

                <MenuMobile buttonsList={buttonsList} />
                <MenuDesktop buttonsList={buttonsList} />
            </div>
        </nav>
    );
}
