'use client';
import Link from 'next/link';
import useStore from './Store';
import SectionHeader from './SectionHeader';

export default function CartView() {
    const { cartItems, removeFromCart } = useStore();
    const initialValue = 0;
    const totalPrice = cartItems?.reduce(
        (accumulator, item) => accumulator + item.price,
        initialValue,
    );
    return (
        <section className="content-max-width ml-[30%]">
            {cartItems?.length ? (
                <>
                    <SectionHeader title="Shopping Cart" />
                    <table className="mb-4">
                        <thead className="border-b-2 border-neutral-100">
                            <tr>
                                <th>Book</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className="border-b-2 border-neutral-100">
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="space-x-2">
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
                            <tr>
                                <td>Subtotal:</td>
                                <td>${totalPrice}</td>
                            </tr>
                        </tfoot>
                    </table>

                    <Link
                        href="/ecommerce/cart/checkout"
                        className="px-4 py-2 bg-amber-500 rounded-xl
                                    hover:brightness-90 active:brightness-75"
                    >
                        Proceed to Checkout
                    </Link>
                </>
            ) : (
                <SectionHeader title="Your cart is empty..." />
            )}
        </section>
    );
}
