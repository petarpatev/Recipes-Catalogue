import { updateNav } from "../auth.js";
import { renderCatalogue } from "./catalogue.js";


const registerElement = document.querySelector('.register');

export function renderRegister() {
    registerElement.style.display = 'block';
}

const url = 'http://localhost:3030/users/register';

const registerFormElement = registerElement.querySelector('form');
registerFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');
    let newUser = {
        email,
        password,
    };
    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(newUser => {
            alert('successfully created new user!');
            registerFormElement.reset();

            let email = newUser.email;
            let password = newUser.password;

            fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password
                })
            })
                .then(response => response.json())
                .then(user => {
                    localStorage.setItem('user', JSON.stringify(user));
                    updateNav();
                    renderCatalogue();
                    registerElement.style.display = 'none';
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})