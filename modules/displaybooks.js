import Store from './store.js';

const addbookBtn = document.querySelector('#add-book');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookList = JSON.parse(localStorage.getItem('bookShop')) || [];

const viewBook = new Store();

const displayBooks = () => {
  addbookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (bookTitle.value.trim() === '' || bookAuthor.value.trim() === '') {
      return;
    }
    viewBook.addBook(bookTitle, bookAuthor);
    localStorage.setItem('bookShop', JSON.stringify(bookList));

    viewBook.displayBooks();
  });

  window.onload = viewBook.displayBooks();
  document.addEventListener('click', (e) => {
    const button = e.target;
    if (button.className === 'delete') {
      viewBook.removeBook(button);
    }
  });
};

export default displayBooks;
