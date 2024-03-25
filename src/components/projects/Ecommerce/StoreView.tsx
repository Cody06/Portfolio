'use client';
import Image from 'next/image';
import Link from 'next/link';
import useStore from './Store';
import SectionHeader from './SectionHeader';
import AddToCartButton from './AddToCartButton';

export default function StoreView() {
    const { storeItems } = useStore();

    return (
        <section>
            <SectionHeader title="Programming books" />
            <div className="flex flex-wrap gap-4">
                {storeItems.map((item) => (
                    <article
                        key={item.id}
                        className="flex flex-col w-[300px] p-2 items-center border border-neutral-100"
                    >
                        {item.images[0] && (
                            <Link href={`/ecommerce/item/${item.id}`} className="mb-2">
                                <Image
                                    src={`/assets/books/${item.images[0]}`}
                                    width={200}
                                    height={300}
                                    alt="Book cover image"
                                />
                            </Link>
                        )}
                        <section className="flex flex-col items-center gap-y-2 mb-2">
                            <Link
                                href={`/ecommerce/item/${item.id}`}
                                className="font-bold hover:text-amber-500"
                            >
                                {item.title}
                            </Link>
                            <span className="text-neutral-500 text-sm">by {item.author}</span>
                            <span className="text-sky-900">{item.rating} / 5</span>
                            <span className="font-bold">${item.price}</span>
                        </section>

                        <AddToCartButton item={item} />
                    </article>
                ))}
            </div>
        </section>
    );
}
