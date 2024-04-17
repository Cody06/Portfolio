import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Book } from './types';

export async function fetchBooks() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    // This makes the fetching dynamic
    noStore();

    try {
        console.log('Fetching books data...');
        // Artificial delay for demo purposes (TODO:Don't do in production)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const data = await sql<Book>`SELECT * FROM books`;
        console.log('Data fetch completed');

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch books data.');
    }
}

export async function fetchFilteredBooks(query: string) {
    noStore();

    try {
        const books = await sql<Book>`
            SELECT *
            FROM books
            WHERE
                title ILIKE ${`%${query}%`} OR
                author ILIKE ${`%${query}%`} OR
                publication_year::text ILIKE ${`%${query}%`}
            `;

        return books.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch filtered books');
    }
}
