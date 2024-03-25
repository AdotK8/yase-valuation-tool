import "./styles/main.scss";
import mapIcon from "./assets/map-marker.svg";
import valuationIcon from "./assets/valuation.svg";

//filling in images for map icon and valuation image

const mapIconElement = document.getElementById("map-icon");
mapIconElement.src = mapIcon;

const valuationIconElement = document.getElementById("valuation-icon");
valuationIconElement.src = valuationIcon;

//error handling for postcode input
document.getElementById("button1").addEventListener("click", function () {
  const inputField = document.querySelector("#postcodeInput");
  var postcodeInput = document.getElementById("postcodeInput").value.trim();
  var postcodeRegex = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;

  if (!postcodeRegex.test(postcodeInput)) {
    inputField.value = "";
    inputField.placeholder = "Please enter a valid UK postcode";
    console.log("invalid");
  } else {
    // Perform other actions if postcode is valid
    // For example, you might want to submit a form or initiate an API request here
    inputField.value = "";
    inputField.placeholder = "Enter your postcode";
    console.log("valid");
  }
});
