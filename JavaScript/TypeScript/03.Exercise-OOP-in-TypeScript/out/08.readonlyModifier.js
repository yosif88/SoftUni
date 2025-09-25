"use strict";
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
// book.title = "Brave New World";
// book.author = "Terry Pratchet";
//# sourceMappingURL=08.readonlyModifier.js.map