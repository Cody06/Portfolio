import StoreView from '@/components/projects/Ecommerce/StoreView';
import { fetchBooks } from '../lib/ecommerce-data';

export default async function Page() {
    const books = await fetchBooks();
    return (
        <main>
            <StoreView items={books} />
        </main>
    );
}
