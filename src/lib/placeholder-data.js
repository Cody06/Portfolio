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
        publicationDate: 2008,
        price: 40.0,
        rating: 4.7,
        images: ['clean-code.jpg'],
    },
    {
        title: 'Pragmatic Programmer: Your journey to mastery',
        author: 'David Thomas',
        edition: '2nd',
        publicationDate: 2019,
        price: 40.0,
        rating: 4.7,
        images: ['pragmatic-programmer.jpg'],
    },
    {
        title: 'Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems',
        author: 'David J. Agans',
        edition: 'Illustrated',
        publicationDate: 2006,
        price: 15.0,
        rating: 4.6,
        images: ['debugging.jpg'],
    },
    {
        title: 'HTML and CSS: Design and Build Websites',
        author: 'Jon Duckett',
        edition: '1st',
        publicationDate: 2011,
        price: 20.0,
        rating: 4.7,
        images: ['html-and-css.jpg'],
    },
    {
        title: 'Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques',
        author: 'Ben Frain',
        edition: '4th',
        publicationDate: 2020,
        price: 35.0,
        rating: 4.5,
        images: ['responsive-web-design.jpg'],
    },
    {
        title: 'CSS: The Definitive Guide: Visual Presentation for the Web',
        author: 'Eric Meyer, Estelle Weyl',
        edition: '3rd',
        publicationDate: 2017,
        price: 40.0,
        rating: 4.6,
        images: ['css-the-definitive-guide.jpg'],
    },
];

module.exports = { users, books };
