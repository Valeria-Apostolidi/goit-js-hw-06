const validValue = document.querySelector("#validation-input");
const inputLength = Number(validValue.dataset.length);

validValue.addEventListener("blur", onBlur);
function onBlur() {
  if (validValue.value.trim().length === 0) {
    validValue.classList.remove("valid", "invalid");
  } else if (validValue.value.trim().length === inputLength) {
    validValue.classList.remove("invalid");
    validValue.classList.add("valid");
  } else {
    validValue.classList.remove("valid");
    validValue.classList.add("invalid");
  }
}
