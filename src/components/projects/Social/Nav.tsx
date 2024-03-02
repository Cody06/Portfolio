import Link from 'next/link';
import { loggedUserId } from './data';

export default function Nav() {
    const navLinks = [
        {
            id: 'home',
            name: 'All Posts',
            href: '/social',
        },
        {
            id: 'profile',
            name: `Profile: ${loggedUserId}`,
            href: `/social/profile/${loggedUserId}`,
        },
        {
            id: 'following',
            name: 'Following',
            href: '/social/following',
        },
    ];
    return (
        <nav className="p-3 md:p-6 w-max h-max mx-auto md:mx-0 mb-6 rounded-xl shadow-lg whitespace-nowrap">
            <ul className="flex flex-row md:flex-col gap-y-3">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <Link
                            className="w-full p-2 text-left rounded-lg 
                                hover:bg-grey-100 hover:bg-opacity-20 hover:cursor-pointer"
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
