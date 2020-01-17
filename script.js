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

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(), 5000);
  }

  static clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').value = '';
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
  
  // Validation
  if(title === '' || author === '' || pages === '') {
    UI.showAlert('Please fill in the blanks', 'danger');
  } else {
    const book = new Book(title,author,pages,read);

    //Add Book yo UI
    UI.addBookToList(book);

    //Clear fields
    UI.clearFields();
  }
});



  // Event: Remove Book
  document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
  });