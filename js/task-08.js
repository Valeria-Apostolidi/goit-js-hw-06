const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Please, fill all fields!");
  }

  console.log(data);
  event.currentTarget.reset();
}
