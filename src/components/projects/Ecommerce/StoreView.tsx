'use client';
import Image from 'next/image';
import Link from 'next/link';
import useStore from './Store';
import SectionHeader from './SectionHeader';
import AddToCartButton from './AddToCartButton';
import { useState } from 'react';
import SearchInput from './components/SearchInput';
import SortInput from './components/SortInput';
import SecondaryButton from './ui/SecondaryButton';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Book } from '@/app/lib/types';

export default function StoreView({ items }: { items: Book[] }) {
    const { myBooks } = useStore();
    const ownedBooksIds = myBooks.map((myBook) => myBook.id);
    const [selectedSortOrder, setSelectedSortOrder] = useState('relevance');

    let sortedItems = items;

    switch (selectedSortOrder) {
        case 'priceDesc':
            sortedItems = items.sort((a, b) => b.price - a.price);
            break;
        case 'priceAsc':
            sortedItems = items.sort((a, b) => a.price - b.price);
            break;
        case 'ratingDesc':
            sortedItems = items.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sortedItems = items.sort((a, b) => b.publicationYear - a.publicationYear);
        default:
            // Relevance order is default
            break;
    }

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <section className="flex flex-col items-center md:items-start">
            <SectionHeader title="Programming books" />
            <div className="flex items-center flex-wrap gap-4 mb-4">
                <SortInput
                    selectedSortOrder={selectedSortOrder}
                    setSelectedSortOrder={setSelectedSortOrder}
                />
                <SearchInput
                    defaultValue={searchParams.get('query')?.toString()}
                    onSubmit={handleSearch}
                />
            </div>
            {sortedItems.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-4">
                    {items.map((item) => (
                        <article
                            key={item.id}
                            className="flex flex-col w-[18.75rem] p-4 items-center border border-neutral-200 rounded-lg"
                        >
                            {item.image && (
                                <Link href={`/ecommerce/item/${item.id}`} className="mb-2">
                                    <Image
                                        src={`/assets/books/${item.image}`}
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
                                <span className="font-bold text-sky-900">{item.rating} / 5</span>
                                <span className="font-bold">${item.price}</span>
                            </section>

                            <section className="mt-auto">
                                {ownedBooksIds.includes(item.id) ? (
                                    <SecondaryButton label="Owned" href="/ecommerce/my-books" />
                                ) : (
                                    <AddToCartButton item={item} />
                                )}
                            </section>
                        </article>
                    ))}
                </div>
            ) : (
                <h2>There are no books matching your search</h2>
            )}
        </section>
    );
}
