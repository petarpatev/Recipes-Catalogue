import { renderCatalogue } from './pages/catalogue.js';
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';
import { renderCreate } from './pages/create.js';
import { render404 } from './pages/page404.js';

const mainElement = document.querySelector('.main');

const routes = {
    '/': renderCatalogue,
    '/login': renderLogin,
    '/register': renderRegister,
    '/create': renderCreate,
}

export function navigator(path) {

    hideContent();

    const renderer = routes[path] || render404;
    renderer();

}

function hideContent() {
    Array.from(mainElement.children).forEach(element => element.style.display = 'none');
}