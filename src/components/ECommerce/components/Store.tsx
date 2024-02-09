import Image from 'next/image';
import books from '../books';
import { Book } from '../types';

interface Props {
    onAddToCart: (item: Book) => void;
}

const Store: React.FC<Props> = ({ onAddToCart }) => {
    const viewBookPage = (id: number) => console.log('view book page:', id);

    return (
        <div className="content-max-width mx-auto flex flex-wrap gap-4">
            {books.map((book) => (
                <article
                    key={book.id}
                    className="flex flex-col w-[300px] p-2 items-center border border-grey-90"
                >
                    {book.images[0] && (
                        <button className="bg-grey-100 mb-2" onClick={() => viewBookPage(book.id)}>
                            <Image
                                src={`/assets/books/${book.images[0]}`}
                                width={200}
                                height={300}
                                alt="Book cover image"
                            />
                        </button>
                    )}

                    <section className="flex flex-col items-center gap-y-2 mb-2">
                        <button
                            className="font-bold hover:text-orange-100"
                            onClick={() => viewBookPage(book.id)}
                        >
                            {book.title}
                        </button>
                        <span className="text-grey-110 text-sm">by {book.author}</span>
                        {/* @TODO: Add reviews section */}
                        <button
                            className="text-blue-110"
                            onClick={() => console.log('view reviews')}
                        >
                            {book.rating} / 5
                        </button>
                        <p className="font-bold">${book.price}</p>
                    </section>

                    <button
                        className="mt-auto px-4 py-2 w-max bg-orange-100 rounded-xl
                                                    hover:brightness-90 active:brightness-75"
                        onClick={() => onAddToCart(book)}
                    >
                        Add to Cart
                    </button>
                </article>
            ))}
        </div>
    );
};

export default Store;
