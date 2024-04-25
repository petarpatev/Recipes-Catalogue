// const catalogueElement = document.querySelector('.catalogue');
// catalogueElement.style.display = 'inline-block';

import { router } from "./router.js";

const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');
userNav.style.display = 'inline-block';
guestNav.style.display = 'inline-block';

const navElement = document.querySelector('.nav');
navElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let url = new URL(e.target.href);
        router(url.pathname);
    }
})