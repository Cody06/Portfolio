'use client';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useStore from './Store';

export default function Nav() {
    const { cartItems } = useStore();
    return (
        <nav className="flex justify-between p-4 text-white bg-sky-900">
            <span className="font-bold">E-Commerce</span>
            <div className="space-x-5">
                <Link href="/ecommerce" className="hover:text-amber-500">
                    Store
                </Link>
                <Link href="/ecommerce/my-books" className="hover:text-amber-500">
                    My Books
                </Link>
            </div>
            <div>
                <Link
                    href="/ecommerce/cart"
                    className="relative hover:text-amber-500 mr-5 max-w-5 max-h-5"
                >
                    <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />
                    {cartItems.length > 0 && (
                        <div className="absolute -top-2 -right-2 text-sm text-white bg-red-500 px-1 rounded-full">
                            {cartItems.length >= 100 ? '99+' : cartItems.length}
                        </div>
                    )}
                </Link>
                <Link href="/" className="hover:text-amber-500">
                    Back to Portfolio
                </Link>
            </div>
        </nav>
    );
}
