let myLibrary = [
  new Book("Ronn the John", "Shota", 30, true),
  new Book("Mr.Beast Chronicles", "Jimmy Carter", 3, false)
];
const bookTemplate = document.querySelector(".bookTemplate")
const container = document.querySelector(".content");
const popup = document.querySelector(".popup");
const overlay = document.getElementById("overlay");


function Book(title, author, pages, wasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;
}



function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}


displayBooks();

function displayBooks(){
  let books = Object.values(container.children);
  myLibrary.forEach(book => {
    let found = false;
    books.forEach(element => {
      if(book.title === element.getAttribute("data-title")){
        found = true;
      }
    });

    if(!found){
      displayBook(book);
    }
  });
}

function displayBook(book){
  let newBook = bookTemplate.cloneNode(true);
  newBook.classList.remove("bookTemplate");
  newBook.querySelector(".title").innerText = book.title;
  newBook.querySelector(".author").innerText = book.author;
  newBook.querySelector(".pages").innerText = `${book.pages} pages`;
  container.appendChild(newBook);
}


function showPopup(){
  popup.classList.add("visible");
  overlay.classList.add("visible");
  console.log("aaaa");
}


function submit(){
  closePopup()
}

function closePopup(){
  popup.classList.remove("visible");
  overlay.classList.remove("visible");
}