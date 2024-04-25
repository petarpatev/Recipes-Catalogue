const catalogueElement = document.querySelector('.catalogue');
const loginElement = document.querySelector('.login');
const registerElement = document.querySelector('.register');
const createElement = document.querySelector('.create');

export function router(path) {
    const mainElement = document.querySelector('.main');
    Array.from(mainElement.children).forEach(element => element.style.display = 'none');

    if (path == '/') {
        catalogueElement.style.display = 'block';
    } else if (path == '/login') {
        loginElement.style.display = 'block';
    } else if (path == '/register') {
        registerElement.style.display = 'block';
    } else if (path == '/create') {
        createElement.style.display = 'block';
    }
}