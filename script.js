const successMessage = document.querySelector(".success");
const errorMessage = document.querySelector(".error");
const input = document.querySelector(".input");
input.addEventListener("keyup", function (event) {
  let regexp = /^[a-z0-9]+$/i;
  if (regexp.test(event.target.value) && event.target.value.length > 3) {
    console.log("Success");
    successMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  } else if (event.target.value.length >= 1) {
    console.log("Error");
    successMessage.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  } else {
    successMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");
  }
});
