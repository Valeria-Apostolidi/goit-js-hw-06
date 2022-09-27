const counter = document.querySelector("#value");
const buttonDecr = document.querySelector("button[data-action='decrement']");
const buttonIncr = document.querySelector("button[data-action='increment']");
console.dir(buttonDecr);

let counterValue = 0;
buttonDecr.addEventListener("click", onClick);

function onClick(event) {
  counterValue += -1;
  counter.textContent = counterValue;
  console.log(counter);
}

buttonIncr.addEventListener("click", onButtonIncrClick);

function onButtonIncrClick(event) {
  counterValue += 1;
  counter.textContent = counterValue;
  console.log(counter);
}
