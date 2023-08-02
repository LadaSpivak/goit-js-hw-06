
const inputElement = document.getElementById("validation-input");


function checkInputLength() {
  const lengthAttribute = inputElement.getAttribute("data-length");
  const inputLength = inputElement.value.length;

  if (inputLength == lengthAttribute) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}

inputElement.addEventListener("blur", checkInputLength);