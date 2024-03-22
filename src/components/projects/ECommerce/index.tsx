'use client';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Store from './components/Store';
import MyBooks from './components/MyBooks';
import Wishlist from './components/Wishlist';
import { Book, Views } from './types';
/*
 - Sort by price, max, min, author A-Z, Z-A
 - Add search bar
*/

export default function ECommerce() {
    const [selectedView, setSelectedView] = useState<Views>('store');
    const [itemsInCart, setItemsInCart] = useState<Array<Book>>([]);

    const handleAddToCart = (item: Book) => {
        setItemsInCart([...itemsInCart, item]);
    };

    const handleRemoveFromCart = (id: number) => {
        setItemsInCart(itemsInCart.filter((item) => item.id != id));
    };

    const views = {
        store: <Store onAddToCart={handleAddToCart} />,
        cart: (
            <Cart
                onDeleteItem={handleRemoveFromCart}
                setSelectedView={setSelectedView}
                itemsInCart={itemsInCart}
            />
        ),
        checkout: <Checkout />,
        mybooks: <MyBooks />,
        wishlist: <Wishlist />,
    };

    return (
        <>
            <nav className="flex justify-between p-4 text-white bg-blue-110">
                <span className="font-bold">E-Commerce</span>
                <div className="space-x-5">
                    <button
                        className="hover:text-amber-500"
                        onClick={() => setSelectedView('store')}
                    >
                        Store
                    </button>
                    <button
                        className="hover:text-amber-500"
                        onClick={() => setSelectedView('mybooks')}
                    >
                        My Books
                    </button>
                    <button
                        className="hover:text-amber-500"
                        onClick={() => setSelectedView('wishlist')}
                    >
                        Wishlist
                    </button>
                </div>
                <div>
                    <button
                        className="relative hover:text-amber-500 mr-5"
                        onClick={() => setSelectedView('cart')}
                        title="View cart"
                    >
                        <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />
                        {itemsInCart.length > 0 && (
                            <div className="absolute -top-2 -right-2 text-sm text-white bg-red px-1 rounded-full">
                                {itemsInCart.length >= 100 ? '99+' : itemsInCart.length}
                            </div>
                        )}
                    </button>
                    <Link href="/" className="hover:text-amber-500">
                        Back to Portfolio
                    </Link>
                </div>
            </nav>
            <div className="flex">
                {/* TODO: Implement the side component */}
                {selectedView !== 'cart' && selectedView !== 'checkout' && (
                    <aside className="border w-[200px]">
                        <div>Search</div>
                        <div>Sort by</div>
                        <div>Category</div>
                    </aside>
                )}
                {views[selectedView]}
            </div>
        </>
    );
}
