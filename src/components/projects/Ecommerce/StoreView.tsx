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

export default function StoreView() {
    const { storeItems, myBooks } = useStore();
    const ownedBooksIds = myBooks.map((myBook) => myBook.id);

    const [selectedSortOrder, setSelectedSortOrder] = useState('relevance');
    const [filteredItems, setFilteredItems] = useState(storeItems);
    let sortedItems = filteredItems;

    switch (selectedSortOrder) {
        case 'relevance':
            sortedItems = filteredItems.sort((a, b) => Number(a.id) - Number(b.id));
            break;
        case 'priceDesc':
            sortedItems = filteredItems.sort((a, b) => b.price - a.price);
            break;
        case 'priceAsc':
            sortedItems = filteredItems.sort((a, b) => a.price - b.price);
            break;
        case 'ratingDesc':
            sortedItems = filteredItems.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sortedItems = filteredItems.sort((a, b) => b.publicationDate - a.publicationDate);
        default:
            break;
    }

    const handleSubmit = (input: string) => {
        setFilteredItems(
            storeItems.filter((item) => {
                return item.title.toLowerCase().includes(input.toLowerCase());
            }),
        );
    };

    return (
        <section className="flex flex-col items-center md:items-start">
            <SectionHeader title="Programming books" />
            <div className="flex items-center flex-wrap gap-4 mb-4">
                <SortInput
                    selectedSortOrder={selectedSortOrder}
                    setSelectedSortOrder={setSelectedSortOrder}
                />
                <SearchInput onSubmit={handleSubmit} />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {sortedItems.map((item) => (
                    <article
                        key={item.id}
                        className="flex flex-col w-[18.75rem] p-4 items-center border border-neutral-200 rounded-lg"
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
        </section>
    );
}
