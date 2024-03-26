'use client';
import { useRouter } from 'next/navigation';
import SectionHeader from '@/components/projects/Ecommerce/SectionHeader';
import useStore from '@/components/projects/Ecommerce/Store';

export default function Page() {
    // For now, checkout will be a simple layout
    const router = useRouter();
    const { cartItems, checkout } = useStore();
    const itemsNumber =
        cartItems.length > 1 ? `${cartItems.length} items` : `${cartItems.length} item`;
    const totalPrice = cartItems?.reduce((accumulator, item) => accumulator + item.price, 0);

    const handleCheckout = () => {
        checkout();
        router.push('/ecommerce/my-books');
    };

    return (
        <main className="w-max mx-auto">
            <SectionHeader title={`Checkout (${itemsNumber})`} />
            <section className="flex flex-col gap-y-4 mb-4 border border-neutral-200 rounded-md p-4">
                <h2 className="font-bold">Order Summary</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={item.id} className="flex justify-between">
                            <span className="mr-4">{`${index + 1}. ${item.title}`}</span>
                            <span>${item.price}</span>
                        </li>
                    ))}
                </ul>
                <span className="font-bold">Order Total: ${totalPrice}</span>
            </section>

            <section className="mb-4 border border-neutral-200 rounded-md p-4">
                <h2 className="font-bold mb-4">Payment Details</h2>
                <p>User: guest</p>
                <section>
                    <h3>Payment method: Credit card</h3>
                </section>
            </section>
            <button
                className="block mt-auto px-4 py-2 w-max mx-auto bg-amber-500 rounded-md font-medium
                            hover:brightness-90 active:brightness-75"
                onClick={handleCheckout}
            >
                Checkout
            </button>
        </main>
    );
}
