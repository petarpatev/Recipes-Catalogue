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
        recipesFragment.appendChild(createRecipe(r));
    })
    catalogueElement.innerHTML = '';
    catalogueElement.appendChild(recipesFragment)
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