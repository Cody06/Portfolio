import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchBooks() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();

    try {
        console.log('Fetching books data...');

        // Artificial delay for demo purposes (TODO:Don't do in production)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // const data = (await sql) < Revenue > `SELECT * FROM books`;
        const data = await sql`SELECT * FROM books`;

        console.log('Data fetch completed');

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}
