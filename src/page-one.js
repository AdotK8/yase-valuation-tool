import pageTwoLoad from "./page-two";

export default function pageOneLoad(userInput) {
  document.getElementById("button1").addEventListener("click", function () {
    const inputField = document.querySelector("#postcodeInput");
    var postcodeInput = document.getElementById("postcodeInput").value.trim();
    var postcodeRegex = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;

    if (!postcodeRegex.test(postcodeInput)) {
      inputField.value = "";
      inputField.placeholder = "Please enter a valid UK postcode";
      console.log("invalid");
    } else {
      //store input in object here
      userInput.postcode = inputField.value.trim();
      inputField.value = "";
      inputField.placeholder = "Enter your postcode";
      console.log("valid");
      console.log(userInput);
      pageTwoLoad();
    }
  });
}
