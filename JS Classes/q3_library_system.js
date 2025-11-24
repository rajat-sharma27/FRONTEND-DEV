// Q3: Library Management System

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const library = [
    new Book("JavaScript Guide", "MDN", "101"),
    new Book("HTML Handbook", "W3C", "102", true),
    new Book("CSS Mastery", "Andy Budd", "103")
];

const availableBooks = library.filter(b => !b.isIssued);
console.log("Available Books:", availableBooks);

function issueByISBN(isbn) {
    const book = library.find(b => b.isbn === isbn);
    if (book) book.issueBook();
}

issueByISBN("103");
console.log(library);
