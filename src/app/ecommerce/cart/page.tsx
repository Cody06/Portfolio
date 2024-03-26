'use client';
import SectionHeader from '@/components/projects/Ecommerce/SectionHeader';
import useStore from '@/components/projects/Ecommerce/Store';
import Link from 'next/link';

export default function Page() {
    const { cartItems, removeFromCart } = useStore();
    const initialValue = 0;
    const totalPrice = cartItems?.reduce(
        (accumulator, item) => accumulator + item.price,
        initialValue,
    );
    return (
        <main>
            {cartItems?.length ? (
                <>
                    <SectionHeader title="Shopping Cart" />
                    <table className="mb-4 mx-auto">
                        <thead className="border-b-2 border-neutral-200">
                            <tr>
                                <th>Book</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className="border-b-2 border-neutral-200">
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="space-x-2 p-4">
                                        <span>{item.title}</span>
                                        <button
                                            className="text-xs text-sky-600"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td>${item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="font-bold">
                                <td>Subtotal</td>
                                <td>${totalPrice}</td>
                            </tr>
                        </tfoot>
                    </table>

                    <Link
                        href="/ecommerce/cart/checkout"
                        className="block w-max mx-auto px-4 py-2 bg-amber-500 rounded-xl font-bold
                                    hover:brightness-90 active:brightness-75"
                    >
                        Proceed to Checkout
                    </Link>
                </>
            ) : (
                <SectionHeader title="Your cart is empty..." />
            )}
        </main>
    );
}
