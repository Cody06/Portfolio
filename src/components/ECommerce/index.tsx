'use client';
import Image from 'next/image';
/*
 TODO:
 - Create store-front page
 - Add initial books
 - Sort by price, max, min, author A-Z, Z-A
 - Add search bar
 - Create cart page
*/
type Book = {
    id: number;
    title: string;
    author: string;
    edition: string;
    publicationDate: number;
    price: number;
    rating: number;
    images: string[];
};

const ECommerce = () => {
    // TODO: Move in their own file
    const books: Book[] = [
        {
            id: 1,
            title: 'Clean Code: A Handbook of Agile Software Craftmanship',
            author: 'Robert Martin',
            edition: '1st',
            publicationDate: 2008,
            price: 40.0,
            rating: 4.7,
            images: ['clean-code.jpg'],
        },
        {
            id: 2,
            title: 'Pragmatic Programmer: Your journey to mastery',
            author: 'David Thomas',
            edition: '2nd',
            publicationDate: 2019,
            price: 40.0,
            rating: 4.7,
            images: ['pragmatic-programmer.jpg'],
        },
        {
            id: 3,
            title: 'Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems',
            author: 'David J. Agans',
            edition: 'Illustrated',
            publicationDate: 2006,
            price: 15.0,
            rating: 4.6,
            images: ['debugging.jpg'],
        },
        {
            id: 4,
            title: 'HTML and CSS: Design and Build Websites',
            author: 'Jon Duckett',
            edition: '1st',
            publicationDate: 2011,
            price: 20.0,
            rating: 4.7,
            images: ['html-and-css.jpg'],
        },
        {
            id: 5,
            title: 'Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques',
            author: 'Ben Frain',
            edition: '4th',
            publicationDate: 2020,
            price: 35.0,
            rating: 4.5,
            images: ['responsive-web-design.jpg'],
        },
        {
            id: 6,
            title: 'CSS: The Definitive Guide: Visual Presentation for the Web',
            author: 'Eric Meyer, Estelle Weyl',
            edition: '3rd',
            publicationDate: 2017,
            price: 40.0,
            rating: 4.6,
            images: ['css-the-definitive-guide.jpg'],
        },
    ];

    const viewBookPage = (id: number) => console.log('view book page:', id);

    return (
        <div className="flex flex-wrap gap-4">
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
                        onClick={() => console.log('Add to cart:', book.id)}
                    >
                        Add to Cart
                    </button>
                </article>
            ))}
        </div>
    );
};

export default ECommerce;
