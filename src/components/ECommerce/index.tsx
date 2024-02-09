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
*/

// TODO: find a way to get the keys from the crated object
type Views = 'store' | 'cart';

const ECommerce = () => {
    const [selectedView, setSelectedView] = useState<Views>('store');
    const [itemsInCart, setItemsInCart] = useState<Array<number>>([]);

    const handleAddToCart = (id: number) => {
        setItemsInCart([...itemsInCart, id]);
    };

    const views = {
        store: <Store onAddToCart={handleAddToCart} />,
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
                    <button
                        className="relative hover:text-orange-100"
                        onClick={() => setSelectedView('cart')}
                        title="View cart"
                    >
                        <FontAwesomeIcon icon={faCartShopping} className="fa-lg mr-4" />
                        {itemsInCart.length > 0 && (
                            <div className="absolute -top-2 right-2 text-sm text-white bg-red px-1 rounded-full">
                                {itemsInCart.length}
                            </div>
                        )}
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
