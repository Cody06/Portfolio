export type Book = {
    id: number;
    title: string;
    author: string;
    edition: string;
    publicationDate: number;
    price: number;
    rating: number;
    images: string[];
};

export type Views = 'cart' | 'checkout' | 'mybooks' | 'store' | 'wishlist';
