'use client';
import { useRouter } from 'next/navigation';
import SectionHeader from '@/components/projects/Ecommerce/SectionHeader';
import useStore from '@/components/projects/Ecommerce/Store';
import PrimaryButton from '@/components/projects/Ecommerce/ui/PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { iconHoverBg } from '@/components/ui/tailwindStyles';

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

    const commonStyle = 'border border-neutral-200 rounded-lg p-4';

    return (
        <main className="w-max mx-auto flex flex-col items-center gap-y-4">
            <header className="flex items-center gap-x-4 w-full">
                <Link href="/ecommerce/cart" className={`p-2 rounded-lg ${iconHoverBg}`}>
                    <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                </Link>
                <SectionHeader title={`Checkout (${itemsNumber})`} />
            </header>
            <section className={`flex flex-col gap-y-4 ${commonStyle}`}>
                <h2 className="font-bold">Order Summary</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li
                            key={item.id}
                            className="flex justify-between gap-x-4 w-[80vw] max-w-[45rem]"
                        >
                            <span>{`${index + 1}. ${item.title}`}</span>
                            <span>${item.price}</span>
                        </li>
                    ))}
                </ul>
                <span className="font-bold">Order Total: ${totalPrice}</span>
            </section>

            <section className={`w-full ${commonStyle}`}>
                <h2 className="font-bold mb-4">Payment Details</h2>
                <p>User: guest</p>
                <section>
                    <h3>Payment method: Credit card</h3>
                </section>
            </section>
            <PrimaryButton label="Checkout" onClick={handleCheckout} />
        </main>
    );
}
