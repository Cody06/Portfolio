'use client';
import SectionHeader from '@/components/projects/Ecommerce/SectionHeader';
import useStore from '@/components/projects/Ecommerce/Store';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    const { myBooks } = useStore();
    return (
        <main className="w-max mx-auto">
            <SectionHeader title="My books" />
            {myBooks.length > 0 ? (
                <section className="flex flex-col gap-y-4">
                    {myBooks.map((book) => (
                        <article
                            key={book.id}
                            className="flex flex-col items-center gap-y-4 border border-neutral-200 rounded-md p-4"
                        >
                            <h2 className="font-bold">{book.title}</h2>
                            <Image
                                src={`/assets/books/${book.images[0]}`}
                                width={200}
                                height={300}
                                alt={`Cover ${book.title}`}
                            />
                            <button className="border rounded-md px-4 py-2">Read</button>
                        </article>
                    ))}
                </section>
            ) : (
                <div>
                    <h2>You don&apos;t have any books...</h2>
                    <p>Go to store to browse the selection</p>
                    <Link href="/ecommerce" className="font-bold underline">
                        Store
                    </Link>
                </div>
            )}
        </main>
    );
}
