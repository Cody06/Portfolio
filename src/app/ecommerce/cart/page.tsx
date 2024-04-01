'use client';
import SectionHeader from '@/components/projects/Ecommerce/SectionHeader';
import useStore from '@/components/projects/Ecommerce/Store';
import PrimaryButton from '@/components/projects/Ecommerce/ui/PrimaryButton';
import SecondaryButton from '@/components/projects/Ecommerce/ui/SecondaryButton';
import { iconHoverBg } from '@/components/ui/tailwindStyles';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Page() {
    const { cartItems, removeFromCart } = useStore();
    const initialValue = 0;
    const totalPrice = cartItems?.reduce(
        (accumulator, item) => accumulator + item.price,
        initialValue,
    );
    return (
        <main className="w-max mx-auto">
            {cartItems?.length ? (
                <section className="flex flex-col items-center">
                    <header className="flex items-center gap-x-4 w-full">
                        <Link href="/ecommerce" className={`p-2 rounded-lg ${iconHoverBg}`}>
                            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                        </Link>
                        <SectionHeader title="Shopping Cart" />
                    </header>
                    <table className="mb-4">
                        <thead>
                            <tr>
                                <th>Book</th>
                                <th className="pr-2 pb-2">Price</th>
                            </tr>
                        </thead>
                        <tbody className="border-y-2 border-neutral-200 ">
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="space-x-2 p-4 w-[80vw] max-w-[45rem]">
                                        <span>{item.title}</span>
                                        <button
                                            className="text-xs text-sky-600 hover:underline"
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
                                <td className="pt-2 pl-2">Subtotal</td>
                                <td>${totalPrice}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <PrimaryButton label="Proceed to checkout" href="/ecommerce/cart/checkout" />
                </section>
            ) : (
                <section className="flex flex-col gap-y-4">
                    <SectionHeader title="Your cart is empty..." />
                    <p>Go to store to browse the selection</p>
                    <SecondaryButton label="Store" href="/ecommerce" />
                </section>
            )}
        </main>
    );
}
