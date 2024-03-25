'use client';
import Image from 'next/image';
import useStore from '@/components/projects/Ecommerce/Store';
import AddToCartButton from '@/components/projects/Ecommerce/AddToCartButton';

export default function Page({ params }: { params: { id: string } }) {
    const { storeItems } = useStore();
    const book = storeItems.filter((item) => item.id === params.id)[0];
    return (
        <main className="w-max mx-auto">
            <h1 className="font-bold">{book.title}</h1>
            <h2 className="text-neutral-500 text-sm">by {book.author}</h2>
            <h2>Edition: {book.edition}</h2>
            <span>{book.publicationDate}</span>
            <span className="text-sky-900">{book.rating} / 5</span>
            <span className="font-bold">${book.price}</span>
            <Image
                src={`/assets/books/${book.images[0]}`}
                width={200}
                height={300}
                alt="Book cover image"
            />
            <p>Book description</p>
            <AddToCartButton item={book} />
        </main>
    );
}
