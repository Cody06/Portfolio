import useOutsideClick from '@/hooks/useOutsideClick';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { Views } from '../types';

interface Props {
    user: string;
    setSelectedView: Dispatch<SetStateAction<Views>>;
}

const Nav: React.FC<Props> = ({ user, setSelectedView }) => {
    console.log('Rendering Nav');
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));
    const buttons = [
        {
            id: 'home',
            name: 'All Posts',
            onClick: () => setSelectedView('allPosts'),
        },
        {
            id: 'following',
            name: 'Following',
            onClick: () => setSelectedView('following'),
        },
        {
            id: 'profile',
            name: `Profile: ${user}`,
            onClick: () => setSelectedView('ownProfile'),
        },
        {
            id: 'more',
            name: 'More',
            onClick: () => {
                setIsOpen(!isOpen);
            },
        },
    ];

    const Dropdown = (
        <Link
            className="absolute p-2 overflow w-[5rem] md:w-full bg-white rounded-b-lg shadow-lg
                hover:bg-grey-90 hover:cursor-pointer"
            href="/"
        >
            Log out
        </Link>
    );

    return (
        // TODO: Move into a dropdown for mobile
        <nav className="p-6 w-max h-max mx-auto md:mx-0 mb-6 rounded-xl shadow-lg whitespace-nowrap">
            <ul className="flex flex-row md:flex-col gap-y-4">
                {buttons.map((button) => (
                    <li ref={ref} key={button.id}>
                        <button
                            className={`w-full p-2 text-left rounded-lg 
                                hover:bg-grey-100 hover:bg-opacity-20 hover:cursor-pointer
                                ${button.id === 'more' && isOpen && 'bg-grey-100 bg-opacity-20'}`}
                            onClick={button.onClick}
                        >
                            {button.name}
                        </button>
                        {button.id === 'more' && (
                            <div className="relative">{isOpen && Dropdown}</div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
