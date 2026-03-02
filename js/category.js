const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const title = document.getElementById("category-title");
const recipeList = document.getElementById("recipe-list");

if (recipes[type]) {

    title.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    recipes[type].forEach(recipe => {

        const box = document.createElement("div");
        box.className = "collection";

        box.innerHTML = `
            <a href="recipe.html?type=${type}&id=${recipe.id}">
                <img class="collection-img" src="${recipe.image}">
                <p>${recipe.name}</p>
            </a>
        `;

        recipeList.appendChild(box);
    });

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.getAttribute("href").includes(`?type=${type}`)) {
            link.classList.add("active-link");
        }
    });

}