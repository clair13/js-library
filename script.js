function Book(title, author, pages, read = true) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read ? "yes" : "no"
}