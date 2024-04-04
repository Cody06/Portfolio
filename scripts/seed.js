const { db } = require('@vercel/postgres');
const { users, books } = require('../src/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;
        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
                INSERT INTO users (id, name, email, password)
                VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
                ON CONFLICT (id) DO NOTHING;
            `;
            }),
        );
        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedBooks(client) {
    try {
        // Move to UUID in the future for the PK
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS books (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL,
                edition VARCHAR(255) NOT NULL,
                publication_year INT NOT NULL,
                price NUMERIC(10, 2) NOT NULL,
                rating NUMERIC(2, 1) NOT NULL,
                image VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`;
        console.log(`Created "books" table`);

        const insertedBooks = await Promise.all(
            books.map((book) => {
                return client.sql`
                    INSERT INTO books (title, author, edition, publication_year, price, rating, image)
                    VALUES (${book.title}, ${book.author}, ${book.edition}, ${book.publicationDate}, ${book.price}, ${book.rating}, ${book.images[0]})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );
        console.log(`Seeded ${insertedBooks.length} books`);

        return {
            createTable,
            books: insertedBooks,
        };
    } catch (error) {
        console.error('Error seeding books:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedBooks(client);

    // Always close the connection
    await client.end();
}

main().catch((err) => {
    console.error('An error occurred while attempting to seed the database:', err);
});
