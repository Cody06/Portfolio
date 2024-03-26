'use client';
import Image from 'next/image';
import Link from 'next/link';
import useStore from './Store';
import SectionHeader from './SectionHeader';
import AddToCartButton from './AddToCartButton';
import { useState } from 'react';
import SearchInput from './SearchInput';

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
        <section>
            <SectionHeader title="Programming books" />
            <div className="flex items-center gap-x-4 mb-4">
                <div>
                    <label htmlFor="sortBy" className="font-bold mr-2">
                        Sort by:
                    </label>
                    <select
                        id="sortBy"
                        className="px-4 py-2 rounded-md hover:cursor-pointer"
                        value={selectedSortOrder}
                        onChange={(e) => setSelectedSortOrder(e.target.value)}
                    >
                        <option value="relevance">Relevance</option>
                        <option value="priceDesc">Price High to Low</option>
                        <option value="priceAsc">Price Low to High</option>
                        <option value="ratingDesc">Rating</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
                <SearchInput onSubmit={handleSubmit} />
            </div>
            <div className="flex flex-wrap gap-4">
                {sortedItems.map((item) => (
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
                            <span className="font-bold text-sky-900">{item.rating} / 5</span>
                            <span className="font-bold">${item.price}</span>
                        </section>

                        {ownedBooksIds.includes(item.id) ? (
                            <Link
                                href="/ecommerce/my-books"
                                className="mt-auto bg-sky-900 rounded-xl px-4 py-2 text-white font-bold"
                            >
                                Owned
                            </Link>
                        ) : (
                            <AddToCartButton item={item} />
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}
