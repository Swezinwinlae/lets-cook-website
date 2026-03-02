const params = new URLSearchParams(window.location.search);
const type = params.get("type");
const id = params.get("id");

const recipe = recipes[type].find(r => r.id === id);

if (recipe) {

    document.getElementById("recipe-image").src = recipe.image;
    document.getElementById("recipe-name").textContent = recipe.name;
    document.getElementById("recipe-description").textContent = recipe.description;

    const ingredientsList = document.getElementById("ingredients");
    recipe.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ingredientsList.appendChild(li);
    });

    const stepsList = document.getElementById("steps");
    recipe.steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        stepsList.appendChild(li);
    });
}