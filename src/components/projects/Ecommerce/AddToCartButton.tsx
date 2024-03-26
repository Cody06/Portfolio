import Link from 'next/link';
import { Book } from './types';
import useStore from './Store';
import { useEffect } from 'react';

type Props = {
    item: Book;
};

export default function AddToCartButton({ item }: Props) {
    const { addToCart } = useStore();

    const btnStyle = `mt-auto bg-amber-500 rounded-xl px-4 py-2 w-max font-bold
                        hover:brightness-90 active:brightness-75`;

    return (
        <>
            {item.inCart ? (
                <Link href="/ecommerce/cart" className={btnStyle}>
                    In Cart
                </Link>
            ) : (
                <button className={btnStyle} onClick={() => addToCart(item)}>
                    Add to Cart
                </button>
            )}
        </>
    );
}
