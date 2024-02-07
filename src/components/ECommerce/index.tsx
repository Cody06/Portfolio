'use client';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import Store from './components/Store';
import Cart from './components/Cart';
/*
 - Sort by price, max, min, author A-Z, Z-A
 - Add search bar
 - Create cart page
*/

// TODO: find a way to get the keys from the crated object
type Views = 'store' | 'cart';

const ECommerce = () => {
    const [selectedView, setSelectedView] = useState<Views>('store');
    const [itemsInCart, setItemsInCart] = useState();

    const views = {
        store: <Store />,
        cart: <Cart itemsInCart={itemsInCart} />,
    };

    return (
        <>
            <nav className="flex justify-between p-4 text-white bg-blue-110">
                <div>
                    <span className="mr-4">E-Commerce</span>
                    <button
                        onClick={() => setSelectedView('store')}
                        className="hover:text-orange-100"
                    >
                        Store
                    </button>
                </div>
                <div>
                    <button onClick={() => setSelectedView('cart')} title="View cart">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="fa-lg mr-4 hover:text-orange-100"
                        />
                    </button>
                    <Link href="/" className="hover:text-orange-100">
                        Back to Portfolio
                    </Link>
                </div>
            </nav>
            {views[selectedView]}
        </>
    );
};

export default ECommerce;
