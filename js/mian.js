const form = document.querySelector("#form");
const input = document.querySelector(".form__input");

form.onsubmit = submitHeander;

function submitHeander(e) {
  e.preventDefault();

  if (!input.value) {
    console.log("Enter city name please");
    return;
  }

  console.log(input.value);
}
