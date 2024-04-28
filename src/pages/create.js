

const createElement = document.querySelector('.create');

export function renderCreate() {
    createElement.style.display = 'block';
}

const url = 'http://localhost:3030/data/recipes';
const createFormElement = createElement.querySelector('form');
createFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let name = formData.get('name');
    let img = formData.get('img');
    let ingredients = formData.get('ingredients').split('\n');
    let steps = formData.get('steps').split('\n');

    let newRecipe = {
        name,
        img,
        ingredients,
        steps,
    }

    const token = JSON.parse(localStorage.getItem('user')).accessToken;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-authorization': token
        },
        body: JSON.stringify(newRecipe)
    })
        .then(response => response.json())
        .then(newRecipe => {
            createFormElement.reset();
        })
        .catch(err => console.log(err))
})