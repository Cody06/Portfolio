'use client';
import Image from 'next/image';
import useStore from '@/components/projects/Ecommerce/Store';
import AddToCartButton from '@/components/projects/Ecommerce/AddToCartButton';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faHashtag } from '@fortawesome/free-solid-svg-icons';

export default function Page({ params }: { params: { id: string } }) {
    const { storeItems, myBooks } = useStore();
    const book = storeItems.filter((item) => item.id === params.id)[0];
    const ownedBooksIds = myBooks.map((myBook) => myBook.id);
    return (
        <main className="mt-4 flex flex-col gap-y-4">
            <section className="flex flex-col">
                <h1 className="text-lg font-bold">{book.title}</h1>
                <h2 className="text-neutral-500 text-sm mb-2">by {book.author}</h2>
                <span>
                    Rating: <span className="font-bold text-sky-900">{book.rating} / 5</span>
                </span>
                <span className="font-bold">${book.price}</span>
            </section>
            <Image
                src={`/assets/books/${book.images[0]}`}
                width={200}
                height={300}
                alt="Book cover image"
            />
            <p className="max-w-[40rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <section className="flex gap-x-8 text-sm">
                <div className="flex flex-col gap-y-1 w-max items-center">
                    Edition <FontAwesomeIcon icon={faHashtag} className="text-neutral-500" />
                    <span className="font-bold">{book.edition}</span>
                </div>
                <div className="flex flex-col gap-y-1 w-max items-center">
                    Publication date
                    <FontAwesomeIcon icon={faCalendarDays} className="text-neutral-500" />
                    <span className="font-bold">{book.publicationDate}</span>
                </div>
            </section>
            {ownedBooksIds.includes(book.id) ? (
                <Link
                    href="/ecommerce/my-books"
                    className="mt-auto w-max bg-sky-900 rounded-xl px-4 py-2 text-white font-bold"
                >
                    Owned
                </Link>
            ) : (
                <AddToCartButton item={book} />
            )}
        </main>
    );
}
