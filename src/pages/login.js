import { updateNav } from "../auth.js";
import { renderCatalogue } from "./catalogue.js";

const loginElement = document.querySelector('.login');

export function renderLogin() {
    loginElement.style.display = 'block';
}

const url = 'http://localhost:3030/users/login';

const loginFormElement = loginElement.querySelector('form');
loginFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');

    fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(response => response.json())
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            alert('You was successfully logged in!');
            loginFormElement.reset();
            updateNav();
            loginElement.style.display = 'none';
            renderCatalogue();
        })
        .catch(err => console.log(err))
})