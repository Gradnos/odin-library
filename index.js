let myLibrary = [
  new Book("John Cena Returns", "John", 320, true),
  new Book("Mr.beast Chronicles", "Jimmy Carter", 3, false)
];

function Book(title, author, pages, wasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;
}


console.table(myLibrary);



function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}