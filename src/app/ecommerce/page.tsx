import StoreView from '@/components/projects/Ecommerce/StoreView';
import { fetchBooks, fetchFilteredBooks } from '../lib/ecommerce-data';
import { Book } from '../lib/types';
export default async function Page({ searchParams }: { searchParams?: { query?: string } }) {
    let books: Book[] = [];
    const query = searchParams?.query ?? '';

    if (query) {
        books = await fetchFilteredBooks(query);
    } else {
        books = await fetchBooks();
    }

    return (
        <main>
            <StoreView items={books} />
        </main>
    );
}
