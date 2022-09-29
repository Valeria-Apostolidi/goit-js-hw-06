const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newList = [];

const newIngredients = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  newList.push(li);
});

list.append(...newList);

// const newIngredient = ingredients.map(
//   (ingredient) => `<li class = "item">${ingredient}</li>`
// );
// list.insertAdjacentHTML("beforeend", newIngredient);
// console.log(newIngredient);
