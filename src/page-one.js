import pageTwoLoad from "./page-two";

export default function pageOneLoad(userInput) {
  const inputField = document.querySelector("#postcode-input");
  inputField.addEventListener("input", function () {
    inputField.setCustomValidity("");
  });

  document
    .getElementById("page-one-button")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default form submission behavior

      const inputField = document.querySelector("#postcode-input");
      const postcodeInput = inputField.value.replace(/\s/g, "");
      const postcodeRegex = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;

      if (!postcodeRegex.test(postcodeInput)) {
        inputField.setCustomValidity("Please enter a valid UK postcode");
        inputField.reportValidity(); // Show the validation message
      } else {
        // Store input in object here
        userInput.postcode = postcodeInput;
        pageTwoLoad(userInput);
      }
    });
}
