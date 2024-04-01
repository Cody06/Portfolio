'use client';
import SectionHeader from '@/components/projects/Ecommerce/SectionHeader';
import useStore from '@/components/projects/Ecommerce/Store';
import SecondaryButton from '@/components/projects/Ecommerce/ui/SecondaryButton';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    const { myBooks } = useStore();
    return (
        <main className="max-w-fit mx-auto">
            <SectionHeader title="My books" />
            {myBooks.length > 0 ? (
                <section className="flex flex-wrap justify-center gap-4">
                    {myBooks.map((book) => (
                        <article
                            key={book.id}
                            className="flex flex-col items-center w-[18.75rem] gap-y-4
                                border border-neutral-200 rounded-lg p-4"
                        >
                            <Image
                                src={`/assets/books/${book.images[0]}`}
                                width={200}
                                height={300}
                                alt={`Cover ${book.title}`}
                            />
                            <h2 className="font-bold">{book.title}</h2>
                            <section className="mt-auto">
                                <SecondaryButton label="Read" />
                            </section>
                        </article>
                    ))}
                </section>
            ) : (
                <section className="flex flex-col gap-y-4">
                    <h2>You don&apos;t have any books...</h2>
                    <p>Go to store to browse the selection</p>
                    <SecondaryButton label="Store" href="/ecommerce" />
                </section>
            )}
        </main>
    );
}
