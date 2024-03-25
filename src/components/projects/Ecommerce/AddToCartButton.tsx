import Link from 'next/link';
import { Book } from './types';
import useStore from './Store';
import { useEffect } from 'react';

type Props = {
    item: Book;
};

export default function AddToCartButton({ item }: Props) {
    const { addToCart } = useStore();

    return (
        <>
            {item.inCart ? (
                <Link
                    href="/ecommerce/cart"
                    className="mt-auto px-4 py-2 w-max bg-amber-500 rounded-xl
            hover:brightness-90 active:brightness-75"
                >
                    In Cart
                </Link>
            ) : (
                <button
                    className="mt-auto px-4 py-2 w-max bg-amber-500 rounded-xl
                            hover:brightness-90 active:brightness-75"
                    // TODO: implement addToCart()
                    onClick={() => addToCart(item)}
                >
                    Add to Cart
                </button>
            )}
        </>
    );
}
