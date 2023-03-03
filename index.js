let myLibrary = [
  new Book("Tiger Skin Man", "Shota Rustaveli", 421, true),
  new Book("Mr.Beast Chronicles", "Jimmy Carter", 55, true),
  new Book("Gnomeo and Juliet", "Shake Spear", 554, false)
];
const bookTemplate = document.querySelector(".bookTemplate")
const container = document.querySelector(".content");
const newBookPopup = document.querySelector(".popup");
const overlay = document.getElementById("overlay");
const surePopup = document.querySelector(".sure");

let currentBook = new Object (
  obj = null,
  element = null
);


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
  let removeBtn = newBook.querySelector(".remove");
  let finishedBtn = newBook.querySelector(".finished");

  newBook.classList.remove("bookTemplate");
  newBook.querySelector(".title").innerText = book.title;
  newBook.querySelector(".author").innerText = book.author;
  newBook.querySelector(".pages").innerText = `${book.pages} pages`;
  newBook.dataset.title = book.title;
  setRead(finishedBtn, book.wasRead);

  finishedBtn.onclick =function(){ toggleRead(finishedBtn, book); };
  removeBtn.onclick = function(){ confirmRemovePopup(book, newBook); }; 

  container.appendChild(newBook);
}


function showNewBookPopup(){
  newBookPopup.classList.add("visible");
  overlay.classList.add("visible");
  console.log("aaaa");
}


function submit(){
  let newBook = getPopupInfo();
  addBookToLibrary(newBook);
  closePopup(newBookPopup);
}

function closePopup(popup){
  popup.classList.remove("visible");
  overlay.classList.remove("visible");
}

function closeNewBookPopup(){
  newBookPopup.classList.remove("visible");
  overlay.classList.remove("visible");
}

function closeSurePopup(){
  surePopup.classList.remove("visible");
  overlay.classList.remove("visible");
}

function removeCurrentBook(){
  let bookElement = currentBook.element;
  let bookObj = currentBook.obj;
  bookElement.remove();
  let bookIndex = myLibrary.findIndex(element => element.title === bookObj.title);
  myLibrary.splice(bookIndex,1);
  closePopup(surePopup);
}

function confirmRemovePopup(bookObj, bookElement){
  surePopup.classList.add("visible");
  overlay.classList.add("visible");
  console.log("bb");
  currentBook.obj = bookObj;
  currentBook.element = bookElement;
  console.log("koob");
  console.log(currentBook);
}

function setRead(button, status){
  if (status === true){
    button.classList.remove("false");
    button.innerText = "Finished";
  } else{
    button.classList.add("false");
    button.innerText = "To Read";
  }
}

function toggleRead(button, bookObj){
  setRead(button, !bookObj.wasRead);
  let bookIndex = myLibrary.findIndex(element => element.title === bookObj.title);
  myLibrary[bookIndex].wasRead = !myLibrary[bookIndex].wasRead;
}

function getPopupInfo(){
  let title = newBookPopup.querySelector(".ipt-title").value;
  let author = newBookPopup.querySelector(".ipt-author").value;
  let pages = newBookPopup.querySelector(".ipt-pages").value;
  let read = newBookPopup.querySelector(".ipt-read").checked;
  let book = new Book(title, author, pages, read);
  console.log(book);
  return book;
}