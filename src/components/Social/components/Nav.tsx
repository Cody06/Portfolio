import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHouse, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import useOutsideClick from '@/hooks/useOutsideClick';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { Views } from '../types';

interface Props {
    loggedUserId: string;
    setSelectedUser: Dispatch<SetStateAction<string>>;
    setSelectedView: Dispatch<SetStateAction<Views>>;
}

const Nav: React.FC<Props> = ({ loggedUserId, setSelectedUser, setSelectedView }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));
    const buttons = [
        {
            id: 'home',
            icon: <FontAwesomeIcon icon={faHouse} className="w-4" />,
            name: 'All Posts',
            onClick: () => setSelectedView('allPosts'),
        },
        {
            id: 'profile',
            icon: <FontAwesomeIcon icon={faUser} className="w-4" />,
            name: `Profile: ${loggedUserId}`,
            onClick: () => {
                setSelectedUser(loggedUserId);
                setSelectedView('profile');
            },
        },
        {
            id: 'following',
            icon: <FontAwesomeIcon icon={faUserGroup} className="w-4" />,
            name: 'Following',
            onClick: () => setSelectedView('following'),
        },
        {
            id: 'more',
            icon: (
                <FontAwesomeIcon icon={faCaretDown} className={`w-4 ${isOpen && 'rotate-180'}`} />
            ),
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
        <nav className="p-3 md:p-6 w-max h-max mx-auto md:mx-0 mb-6 rounded-xl shadow-lg whitespace-nowrap">
            <ul className="flex flex-row md:flex-col gap-y-3">
                {buttons.map((button) => (
                    <li ref={ref} key={button.id}>
                        <button
                            className={`w-full p-2 text-left rounded-lg 
                                hover:bg-grey-100 hover:bg-opacity-20 hover:cursor-pointer
                                ${button.id === 'more' && isOpen && 'bg-grey-100 bg-opacity-20'}`}
                            onClick={button.onClick}
                        >
                            <span className="text-grey-100 mr-3">{button.icon}</span>
                            <span className="hidden md:inline">{button.name}</span>
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
