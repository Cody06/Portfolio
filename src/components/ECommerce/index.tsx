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
            images: [],
        },
        {
            id: 2,
            title: 'Pragmatic Programmer: Your journey to mastery',
            author: 'David Thomas',
            edition: '2nd',
            publicationDate: 2019,
            price: 40.0,
            rating: 4.7,
            images: [],
        },
        {
            id: 3,
            title: 'Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems',
            author: 'David J. Agans',
            edition: 'Illustrated',
            publicationDate: 2006,
            price: 15.0,
            rating: 4.6,
            images: [],
        },
        {
            id: 4,
            title: 'HTML and CSS: Design and Build Websites',
            author: 'Jon Duckett',
            edition: '1st',
            publicationDate: 2011,
            price: 20.0,
            rating: 4.7,
            images: [],
        },
        {
            id: 5,
            title: 'Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques',
            author: 'Ben Frain',
            edition: '3rd',
            publicationDate: 2020,
            price: 35.0,
            rating: 4.5,
            images: [],
        },
        {
            id: 6,
            title: 'CSS: The Definitive Guide: Visual Presentation for the Web',
            author: 'Eric Meyer, Estelle Weyl',
            edition: '3rd',
            publicationDate: 2017,
            price: 40.0,
            rating: 4.6,
            images: [],
        },
    ];

    return (
        <div>
            {books.map((book) => (
                <div key={book.id} className="border">
                    <h2>{book.title}</h2>
                    <span>by {book.author}</span>
                    <p>rating: {book.rating}</p>
                    <p>${book.price}</p>
                    <button>View</button>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ECommerce;
