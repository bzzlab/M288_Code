/*
Ausgangslage
 */
let books = [{
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
    publisher: 'Zytglogge'
}, {
    title: 'Schachnovelle',
    author: 'Stefan Zweig',
    pageCount: 112,
    publisher: 'Diogenes'
}, {
    title: 'Romeo und Julia',
    author: '',
    pageCount: 250,
    publisher: 'Reclam'
}];

//Aufgaben 1:
//Filtern Sie die Buchliste nach der Anzahl Buchseiten.
let filter1 =
    books.filter((element) =>
        element.pageCount < 300
    );
//console.log(filter1);

//Filtern Sie die Buchliste nach einem bestimmten Titel.
filter1 =
    books.filter((book) =>
        book.title === 'Romeo und Julia'
    );
//console.log(filter1);

//Filtern Sie die Buchliste nach Verlag.
filter1 =
    books.filter((book) =>
        book.publisher === 'Zytglogge'
    );
//console.log(filter1);



let args = process.argv.slice(2);
let param = args[0];
filter1 =
    books.filter((book) =>
        book.publisher === param
    );
console.log(filter1);


//Aufgaben 2:
//a. Erstellen Sie eine eigene Liste von Objektliteralen nach eigenen Vorgaben
//b. Wenden Sie einmal die filter- und einmal die find-Methode auf die Objektliste an.

