// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
    .then((value) => value.json())
    .then((cartsObject) => {
        let {recipes} = cartsObject;
        // console.log(recipes);
        for (let recipe of recipes) {
            let div = document.createElement('div');
            div.classList.add('divRecipe');
            let divInfo = document.createElement('div');
            divInfo.innerText = `
              "id": ${recipe.id},
              "name": ${recipe.name},
              "instructions": ${recipe.instructions},
              "prepTimeMinutes": ${recipe.prepTimeMinutes},
              "cookTimeMinutes": ${recipe.cookTimeMinutes},
              "servings": ${recipe.servings},
              "difficulty": ${recipe.difficulty},
              "cuisine": ${recipe.cuisine},
              "caloriesPerServing": ${recipe.caloriesPerServing},
              "tags": ${recipe.tags},
              "userId": ${recipe.userId},
              "image": ${recipe.image},
              "rating": ${recipe.rating},
              "reviewCount": ${recipe.reviewCount},
              "mealType": ${recipe.mealType}
              "ingredients": `
                let ol = document.createElement('ol');
                for (let list of recipe.ingredients){
                    let li = document.createElement('li');
                    let info = document.createElement('p');
                    info.innerText = list;
                    li.appendChild(info);
                    ol.appendChild(li);
                }
                `;
            `;
            divInfo.appendChild(ol);
            divRecipe.appendChild(divInfo);
            console.log(divRecipe);
        }
    })