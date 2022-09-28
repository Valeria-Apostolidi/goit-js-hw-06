function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

changeColorButton.addEventListener("click", onClick);

function onClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}
