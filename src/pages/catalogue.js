const catalogueElement = document.querySelector('.catalogue');

const url = 'http://localhost:3030/data/recipes';

export function renderCatalogue() {

    fetch(url)
        .then(response => response.json())
        .then(recipes => {
            addAllRecipes(recipes);
            catalogueElement.style.display = 'block';
        })
        .catch(err => console.log(err))
}

function addAllRecipes(recipes) {
    const recipesFragment = document.createDocumentFragment();
    recipes.forEach(r => {
        let createdRecipe = createRecipe(r);
        createdRecipe.recipeId = r._id;
        createdRecipe.addEventListener('click', (e) => {
            fetch(`${url}/${e.currentTarget.recipeId}`)
                .then(response => response.json())
                .then(recipe => {
                    createdRecipe.replaceWith(createFullRecipe(recipe));
                })
                .catch(err => console.log(err))
        })
        recipesFragment.appendChild(createdRecipe);
    })
    catalogueElement.innerHTML = '';
    catalogueElement.appendChild(recipesFragment);
}

function createRecipe(recipe) {
    let recipeContainer = document.createElement('article');
    recipeContainer.classList.add('preview');
    recipeContainer.innerHTML = `
                <div class="title">
                    <h2>${recipe.name}</h2>
                </div>
                <div class="small">
                    <img src=${recipe.img}>
                </div>
                `

    return recipeContainer;
}

function createFullRecipe(recipe) {
    let recipeContainer = document.createElement('article');

    recipeContainer.innerHTML = `
    <h2>${recipe.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src=${recipe.img}>
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(x => `<li>${x}</li>`).join('')} 
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${recipe.steps.map(x => `<p>${x}</p>`).join('')} 
        </div>
    `
    return recipeContainer;
}