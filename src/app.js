import { navigator } from "./navigator.js";
import { renderCatalogue } from "./pages/catalogue.js";
import { updateNav } from "./auth.js";

renderCatalogue();
updateNav();


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