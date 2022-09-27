const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

function handlerInput(evt) {
  const newValue = evt.currentTarget.value.trim();
  newValue === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = newValue);
}
