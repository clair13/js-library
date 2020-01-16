class Book {
  constructor(title, author, pages, read = true) {
    this.title = title;
    this.author = author;
    this.pages = pages.author;
    this.read = read ? "yes" : "no";
  }
 }


//UI
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "Author One",
        pages: "101",
        read: "yes"
      },
      {
        title: "Book Two",
        author: "Author Two",
        pages: "202",
        read: "yes"
      }
    ];

    const books =StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }
}