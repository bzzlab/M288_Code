const books = [{
    title: '1984',
    author: 'George Orwell',
    published: 1949
}, {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    published: 1932
}, {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    published: 1997
}, {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    published: 1998
}, {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    published: 1999
}];
// Task: Search all books from author Rowling
let result = books.
    filter(book => book.author === 'J.K. Rowling');
console.log('Books by J.K. Rowling:', result);
// Task: Search all books published before 1960
result = books.filter(book => book.published < 1960);
console.log('Books published before 1960:', result);
// Task: Search the first book with title "Brave New World"
result = books.find(book => book.title === 'Brave New World');
console.log('First book with title "Brave New World":', result);

