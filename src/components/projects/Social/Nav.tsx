import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { loggedUserId } from './data';
import NavDropdown from './NavDropdown';

export default function Nav() {
    const navLinks = [
        {
            id: 'home',
            icon: <FontAwesomeIcon icon={faHouse} className="w-4" />,
            name: 'All Posts',
            href: '/social',
        },
        {
            id: 'profile',
            icon: <FontAwesomeIcon icon={faUser} className="w-4" />,
            name: `Profile: ${loggedUserId}`,
            href: `/social/profile/${loggedUserId}`,
        },
        {
            id: 'following',
            icon: <FontAwesomeIcon icon={faUserGroup} className="w-4" />,
            name: 'Following',
            href: '/social/following',
        },
    ];

    return (
        <nav className="p-3 md:p-6 w-max h-max mx-auto md:mx-0 mb-6 rounded-xl shadow-lg whitespace-nowrap">
            <ul className="flex flex-row md:flex-col gap-x-4 gap-y-2">
                {navLinks.map(({ id, icon, name, href }) => (
                    <li key={id}>
                        <Link
                            className="block text-left p-1 rounded-lg space-x-3
                                hover:bg-grey-100 hover:cursor-pointer"
                            href={href}
                        >
                            <span className="text-grey-110">{icon}</span>
                            <span className="hidden md:inline">{name}</span>
                        </Link>
                    </li>
                ))}
                <NavDropdown />
            </ul>
        </nav>
    );
}
