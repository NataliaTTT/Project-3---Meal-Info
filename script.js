"use strict";
const meal = document.getElementById("meal");
const btn = document.getElementById("btn");

btn.addEventListener("click", getAmeal);

async function getAmeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    {
      method: "GET",
    }
  );
  const mealRes = await response.json();
  console.log(mealRes);
  console.log(mealRes.meals[0]);
  meal.innerHTML = `${mealRes.meals[0].strCategory}: ${mealRes.meals[0].strMeal}`;

  const image = ` 
  <img src="${mealRes.meals[0].strMealThumb}" class="img-thumbnail" alt="...">
 
  `;
  document.getElementById("image").innerHTML = image;
  const recipe = `Recipe: <br> ${mealRes.meals[0].strInstructions}`;
  document.getElementById("recipe").innerHTML = recipe;
}
