let myLibrary = [
  new Book("Ronn the John", "Shota", 30, true),
  new Book("Mr.Beast Chronicles", "Jimmy Carter", 3, false),
  new Book("Mr.asdadsadsa Chronicles", "Jimmy Carter", 3, false)
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
  let removeBtn = newBook.querySelector(".remove");
  let finishedBtn = newBook.querySelector(".finished");

  newBook.classList.remove("bookTemplate");
  newBook.querySelector(".title").innerText = book.title;
  newBook.querySelector(".author").innerText = book.author;
  newBook.querySelector(".pages").innerText = `${book.pages} pages`;
  newBook.dataset.title = book.title;
  setRead(finishedBtn, book.wasRead);

  finishedBtn.onclick =function(){ toggleRead(finishedBtn, book); };
  removeBtn.onclick = function(){ removeBook(book, newBook); }; 

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

function removeBook(bookObj, bookElement){
  let confirm = confirmPopup("Are you sure you want to delete the book?")
  if (!confirm) return;
  bookElement.remove();
  let bookIndex = myLibrary.findIndex(element => element.title === bookObj.title);
  console.log(bookIndex);
  myLibrary.splice(bookIndex,1);
  console.log(myLibrary);


}

function confirmPopup(string){
  let answer = window.confirm(string);
  return answer;
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
