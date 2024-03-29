import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { loggedUserId } from '../data';
import Dropdown from './Dropdown';
import { iconHoverBg } from '@/components/ui/tailwindStyles';

export default function Nav() {
    const navLinks = [
        {
            id: 'home',
            icon: <FontAwesomeIcon icon={faHouse} className="w-4" />,
            name: 'Home',
            href: '/social',
        },
        {
            id: 'profile',
            icon: <FontAwesomeIcon icon={faUser} className="w-4" />,
            name: 'Profile',
            href: `/social/profile/${loggedUserId}`,
        },
        {
            id: 'following',
            icon: <FontAwesomeIcon icon={faUserGroup} className="w-4" />,
            name: 'Following',
            href: '/social/following',
        },
    ];

    const centerElement = 'left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0';
    const commonStyle = `rounded-full px-4 py-1 space-x-3 ${iconHoverBg}`;

    return (
        <nav
            className={`fixed z-10 top-16 ${centerElement} md:p-4 w-max h-max rounded-xl shadow-md bg-white p-3 whitespace-nowrap`}
        >
            <ul className="flex flex-row md:flex-col gap-x-4 gap-y-2 font-medium">
                {navLinks.map(({ id, icon, name, href }) => (
                    <li key={id}>
                        <Link href={href} className={`block ${commonStyle}`}>
                            <span className="text-neutral-500">{icon}</span>
                            <span className="hidden md:inline">{name}</span>
                        </Link>
                    </li>
                ))}
                <Dropdown style={commonStyle} />
            </ul>
        </nav>
    );
}
