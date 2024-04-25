import { navigator } from "./navigator.js";

const catalogueElement = document.querySelector('.catalogue');

showCatalogue();

const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');
userNav.style.display = 'inline-block';
guestNav.style.display = 'inline-block';

const navElement = document.querySelector('.nav');
navElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        let url = new URL(e.target.href);
        navigator(url.pathname);
    }
})

function showCatalogue() {
    catalogueElement.style.display = 'block';
}