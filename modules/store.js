const bookList = JSON.parse(localStorage.getItem('bookShop')) || [];

export default class Store {
    constructor(bookTitle, bookAuthor) {
      this.title = bookTitle;
      this.author = bookAuthor;
    }
  
    addBook = (bookTitle, bookAuthor) => {
      const book = {};
      book.title = bookTitle.value;
      book.author = bookAuthor.value;
      bookList.push(book);
  
      bookTitle.value = '';
      bookAuthor.value = '';
    };
  
   displayBook = (book) => {
     const { title, author } = book;
     const bookContainer = document.createElement('div');
     bookContainer.className = 'book';
     bookContainer.innerHTML = `
     <span class='title'>${title}</span><br>
      <span class='by'>by</span><br>
      <span class='author'>${author} </span><br>
      <button class='delete'>Remove</button>`;
     return bookContainer;
   };
  
   displayBooks = () => {
     const currentBooks = document.querySelector('#books-list');
     const libraryContainer = document.createElement('div');
  
     bookList.forEach((book) => {
       libraryContainer.appendChild(this.displayBook(book));
       currentBooks.innerHTML = libraryContainer.innerHTML;
     });
   };
  
   removeBook = (button) => {
     const parentDiv = button.parentNode;
     const myTitle = parentDiv.querySelector('.title').textContent;
  
     bookList.splice(bookList.findIndex((item) => item.title === myTitle), 1);
     window.localStorage.setItem('bookShop', JSON.stringify(bookList));
  
     parentDiv.remove();
   };
  }