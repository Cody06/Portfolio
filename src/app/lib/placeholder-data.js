/*
    This file contains placeholder data that can be used to seed the DB
*/

const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'Guest',
        email: 'guest@email.com',
        password: '123456',
    },
];

const books = [
    {
        title: 'Clean Code: A Handbook of Agile Software Craftmanship',
        author: 'Robert Martin',
        edition: '1st',
        publicationYear: 2008,
        price: 40.0,
        rating: 4.7,
        image: 'clean-code.jpg',
    },
    {
        title: 'Pragmatic Programmer: Your journey to mastery',
        author: 'David Thomas',
        edition: '2nd',
        publicationYear: 2019,
        price: 40.0,
        rating: 4.7,
        image: 'pragmatic-programmer.jpg',
    },
    {
        title: 'Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems',
        author: 'David J. Agans',
        edition: 'Illustrated',
        publicationYear: 2006,
        price: 15.0,
        rating: 4.6,
        image: 'debugging.jpg',
    },
    {
        title: 'HTML and CSS: Design and Build Websites',
        author: 'Jon Duckett',
        edition: '1st',
        publicationYear: 2011,
        price: 20.0,
        rating: 4.7,
        image: 'html-and-css.jpg',
    },
    {
        title: 'Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques',
        author: 'Ben Frain',
        edition: '4th',
        publicationYear: 2020,
        price: 35.0,
        rating: 4.5,
        image: 'responsive-web-design.jpg',
    },
    {
        title: 'CSS: The Definitive Guide: Visual Presentation for the Web',
        author: 'Eric Meyer, Estelle Weyl',
        edition: '3rd',
        publicationYear: 2017,
        price: 40.0,
        rating: 4.6,
        image: 'css-the-definitive-guide.jpg',
    },
];

module.exports = { users, books };
