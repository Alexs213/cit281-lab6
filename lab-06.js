//class Book {
//  constructor(titleOfBook, authorOfBook, pubDateOfBook) {
//    this.title = titleOfBook;
//    this.author = authorOfBook;
//    this.pubDate = pubDateOfBook;
//  }

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("node:constants");

// }
class Book {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }
}
class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn };
      this._books.push(newBook);
    }
  }
  deleteBook(isbn) {
    let indexOfBookToRemove = null;
    /*for (const book of this._books){
            if (book.isbn == isbn){
                indexOfBookToRemove = index;
                break;
            }
            index += 1;
        }
        this.book.splice(indexOfBookToRemove)
    }
*/
    for (let index = 0; index < this.books.length; index++) {
      const book = this.books[index];
      if (book.isbn == isbn) {
        indexOfBookToRemove = index;
        break;
      }
    }
  }
  listBooks() {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book;
      console.log(
        `Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN ${isbn}`
      );
    }
  }
}

// Create a book
const atomicHabits = new Book(
  "Atomic Habits",
  "James Clear",
  "10/16/2018", "7687"
);
const bk1 = new Book("The Great Gastby", "F. Scott Fitzgerald", "1925", "3242");
const bk2 = new Book("Nineteen Eighty-Four", "George Orwell", "06/08/1949","43543");
console.log(atomicHabits);
console.log(bk1);
console.log(bk2);

let uoLibary = new Library("Knight Library");
//Sam example
//uoLibary.addBook(myBook);
uoLibary.addBook(atomicHabits);
uoLibary.addBook();
uoLibary.addBook();
uoLibary.listBooks();
uoLibary.deleteBook("7687");
uoLibary.listBooks();
