const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newIngredients = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  list.append(li);
});

// const newIngredient = ingredients.map(
//   (ingredient) => `<li class = "item">${ingredient}</li>`
// );
// list.insertAdjacentHTML("beforeend", newIngredient);
// console.log(newIngredient);
