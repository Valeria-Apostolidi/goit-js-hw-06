function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const mainDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);

let value = 3;
const allDiv = [];

function createBoxes() {
  for (let i = 1; i <= input.value; i += 1) {
    value += 1;
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = value * 10 + "px";
    div.style.height = value * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    allDiv.push(div);
    console.log(div);
  }
  mainDiv.append(...allDiv);
}

destroyBtn.addEventListener("click", () => {
  mainDiv.innerHTML = "";
});
