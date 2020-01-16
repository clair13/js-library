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

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;

    list.appendChild(row);
  }
}

// Event: display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit',(e) => {
  e.preventDefault();

  //Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;

  const book = new Book(title,author,pages,read);
});