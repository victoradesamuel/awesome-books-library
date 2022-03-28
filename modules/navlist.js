import Store from './store.js';

const addLinkPage = document.querySelector('#add-books');
const contactLinkPage = document.querySelector('.contact-info');
const displayLinkPage = document.querySelector('.library');

const viewBook = new Store();

const navlist = () => {
  document.addEventListener('DOMContentLoaded', () => {
    viewBook.displayBooks();
    contactLinkPage.style.display = 'none';
    addLinkPage.style.display = 'none';
  });

  document.getElementById('list-nav').addEventListener('click', () => {
    displayLinkPage.style.display = 'block';
    addLinkPage.style.display = 'none';
    contactLinkPage.style.display = 'none';
  });

  document.getElementById('new-nav').addEventListener('click', () => {
    displayLinkPage.style.display = 'none';
    addLinkPage.style.display = 'block';
    contactLinkPage.style.display = 'none';
  });

  document.getElementById('contact-nav').addEventListener('click', () => {
    displayLinkPage.style.display = 'none';
    addLinkPage.style.display = 'none';
    contactLinkPage.style.display = 'block';
  });
};

export default navlist;
