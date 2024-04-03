import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { loggedUserId } from '../data';
import Dropdown from './Dropdown';
import { iconHoverBg } from '@/components/ui/tailwindStyles';

export default function Nav() {
    const navLinks = [
        {
            label: 'Home',
            icon: <FontAwesomeIcon icon={faHouse} className="w-4" />,
            href: '/social',
        },
        {
            label: 'Profile',
            icon: <FontAwesomeIcon icon={faUser} className="w-4" />,
            href: `/social/profile/${loggedUserId}`,
        },
        {
            label: 'Following',
            icon: <FontAwesomeIcon icon={faUserGroup} className="w-4" />,
            href: '/social/following',
        },
    ];

    const commonStyle = `rounded-full px-4 py-1 space-x-3 ${iconHoverBg}`;

    return (
        <nav
            className={`fixed z-10 bottom-0 center-element w-full h-max shadow-md-top bg-white p-3 whitespace-nowrap
                md:p-4 md:top-16 md:left-auto md:translate-x-0 md:w-max md:rounded-xl md:shadow-md`}
        >
            <ul className="flex flex-row md:flex-col gap-x-4 gap-y-2 justify-evenly font-medium">
                {navLinks.map(({ icon, label, href }) => (
                    <li key={label}>
                        <Link href={href} className={`block ${commonStyle}`}>
                            <span className="text-neutral-500">{icon}</span>
                            <span className="hidden md:inline">{label}</span>
                        </Link>
                    </li>
                ))}
                <Dropdown style={commonStyle} />
            </ul>
        </nav>
    );
}
