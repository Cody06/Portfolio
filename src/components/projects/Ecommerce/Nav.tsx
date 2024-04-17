'use client';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useStore from './Store';
import DropdownMenu from './DropdownMenu';
import { Book } from '@/app/lib/types';

const commonStyle = 'border border-transparent rounded-lg p-2 hover:border-white';

const buttons = [
    {
        label: 'E-Commerce',
        href: '/ecommerce',
    },
    {
        label: 'My Books',
        href: '/ecommerce/my-books',
    },
    {
        label: 'Cart',
        href: '/ecommerce/cart',
    },
    {
        label: 'Back to Portfolio',
        href: '/',
    },
];

function CartButton({ href, cartItems }: { href: string; cartItems: Book[] }) {
    return (
        <Link href={href} className={`relative ${commonStyle}`}>
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
            {cartItems.length > 0 && (
                <div className={`absolute top-0 right-0 bg-red-700 px-2 text-sm rounded-full`}>
                    {cartItems.length >= 100 ? '99+' : cartItems.length}
                </div>
            )}
        </Link>
    );
}

function NavDesktop({ cartItems }: { cartItems: Book[] }) {
    return (
        <nav className="hidden lg:flex content-max-width mx-auto items-center justify-between p-2">
            {buttons.slice(0, 2).map(({ label, href }) => (
                <Link key={label} href={href} className={commonStyle}>
                    {label}
                </Link>
            ))}
            <div className="flex items-center gap-x-5">
                {buttons.slice(2, 4).map(({ label, href }) => {
                    if (label === 'Cart') {
                        return <CartButton key={label} href={href} cartItems={cartItems} />;
                    } else {
                        return (
                            <Link key={label} href={href} className={commonStyle}>
                                {label}
                            </Link>
                        );
                    }
                })}
            </div>
        </nav>
    );
}

function NavMobile({ cartItems }: { cartItems: Book[] }) {
    return (
        <nav className="lg:hidden flex items-center justify-between px-4 py-2">
            <DropdownMenu buttonsList={buttons.filter((btn) => btn.label !== 'Cart')} />
            <CartButton href={buttons[2].href} cartItems={cartItems} />
        </nav>
    );
}

export default function Nav() {
    const { cartItems } = useStore();

    return (
        <>
            <NavDesktop cartItems={cartItems} />
            <NavMobile cartItems={cartItems} />
        </>
    );
}
