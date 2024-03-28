import clearWidget from "./clear-container";
import pageThreeLoad from "./page-three";

export default function pageTwoLoad(userInput) {
  clearWidget();
  loadTop();
  loadBedAndBath();
  loadSquareInput();
  loadDateAndType();
  loadFinish();
  loadParkingOss();
  loadBottom();
  loadButtonFunctionality();
  checkValidSelection(userInput);
}

//helper functions

function checkValidSelection(userInput) {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorHandling(userInput);
  });
}

function validateInput(input, errorMessage = "Please select an option") {
  if (!input.value) {
    input.setCustomValidity(errorMessage);
    input.reportValidity();
    input.addEventListener("input", function () {
      input.setCustomValidity("");
    });
    return false;
  }
  return true;
}

function errorHandling(userInput) {
  const bedInput = document.getElementById("bedroom-input");
  const bathInput = document.getElementById("bathroom-input");
  const squareInput = document.getElementById("square-input");
  const dateInput = document.getElementById("date-input");
  const typeInput = document.getElementById("type-input");
  const finishInput = document.getElementById("finish-input");
  const ossInput = document.getElementById("oss-input");
  const parkingInput = document.getElementById("parking-input");

  if (!validateInput(bedInput)) {
    return;
  }
  if (!validateInput(bathInput)) {
    return;
  }
  if (!validateInput(squareInput, "Please enter the square footage")) {
    return;
  }
  if (!validateInput(dateInput)) {
    return;
  }
  if (!validateInput(typeInput)) {
    return;
  }
  if (!validateInput(finishInput)) {
    return;
  }
  if (!validateInput(ossInput)) {
    return;
  }
  if (!validateInput(parkingInput)) {
    return;
  } else submitSelection(userInput);
}

function submitSelection(userInput) {
  userInput.bedrooms = document.querySelector("#bedroom-input").value;
  userInput.bathrooms = document.querySelector("#bathroom-input").value;
  userInput.squareFootage = document.querySelector(".square-input").value;
  userInput.buildDate = document.querySelector("#date-input").value;
  userInput.propertyType = document.querySelector("#type-input").value;
  userInput.finishQuality = document.querySelector("#finish-input").value;
  userInput.oss = document.querySelector("#oss-input").value;
  userInput.parking = document.querySelector("#parking-input").value;
  userInput.sellOrLet = document.querySelector(".selected").textContent;

  console.log(userInput);
  pageThreeLoad(userInput);
}

function loadButtonFunctionality() {
  const buttonSell = document.getElementById("button-sell");
  const buttonLet = document.getElementById("button-let");

  buttonSell.addEventListener("click", (e) => {
    e.preventDefault();
    buttonSell.classList.add("selected");
    buttonLet.classList.remove("selected");
  });

  buttonLet.addEventListener("click", (e) => {
    e.preventDefault();
    buttonLet.classList.add("selected");
    buttonSell.classList.remove("selected");
  });
}

function loadTop() {
  const container = document.querySelector(".container");

  const questionText = document.createElement("p");
  const sellButton = document.createElement("button");
  const letButton = document.createElement("button");
  sellButton.setAttribute("id", "button-sell");
  letButton.setAttribute("id", "button-let");
  const buttonContainer = document.createElement("div");
  questionText.innerHTML = "What are you looking to do with your property?";
  sellButton.innerHTML = "SELL";
  sellButton.classList.add("selected");
  letButton.innerHTML = "LET";
  buttonContainer.classList.add("button-container");

  container.appendChild(questionText);
  buttonContainer.appendChild(sellButton);
  buttonContainer.appendChild(letButton);
  container.appendChild(buttonContainer);
}

function loadBedAndBath() {
  const container = document.querySelector(".container");

  const propertyDetailsText = document.createElement("p");
  const bedDropdown = document.createElement("select");
  const bathDropdown = document.createElement("select");
  const defaultBedrooms = document.createElement("option");
  const defaultBathrooms = document.createElement("option");
  const bedAndBathContainer = document.createElement("div");
  const bedContainer = document.createElement("div");
  const bathContainer = document.createElement("div");

  bedDropdown.setAttribute("id", "bedroom-input");
  bathDropdown.setAttribute("id", "bathroom-input");

  propertyDetailsText.innerHTML = "Your property details";
  container.appendChild(propertyDetailsText);

  bedDropdown.name = "bedrooms";
  bathDropdown.name = "bathrooms";
  bedDropdown.innerHTML = "Number of bedrooms";
  bathDropdown.innerHTML = "Number of bathrooms";
  defaultBedrooms.value = "";
  defaultBedrooms.text = "Number of bedrooms";
  defaultBathrooms.value = "";
  defaultBathrooms.text = "Number of bathrooms";

  defaultBathrooms.setAttribute("disabled", true);
  defaultBathrooms.setAttribute("selected", true);
  defaultBedrooms.setAttribute("disabled", true);
  defaultBedrooms.setAttribute("selected", true);

  bedAndBathContainer.classList.add("row-input-container");

  for (let i = 0; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i === 0 ? "Studio" : i + " Bedroom(s)";
    bedDropdown.appendChild(option);
  }

  for (let i = 0; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i === 0 ? "0 Bathrooms" : i + " Bathroom(s)";
    bathDropdown.appendChild(option);
  }

  bathDropdown.appendChild(defaultBathrooms);
  bedDropdown.appendChild(defaultBedrooms);
  bedContainer.appendChild(bedDropdown);
  bathContainer.appendChild(bathDropdown);
  bedAndBathContainer.appendChild(bedContainer);
  bedAndBathContainer.appendChild(bathContainer);
  container.appendChild(bedAndBathContainer);
}

function loadSquareInput() {
  const container = document.querySelector(".container");

  const squareInput = document.createElement("input");
  squareInput.type = "number";
  squareInput.placeholder = "Approximate internal square footage of property";
  squareInput.classList.add("square-input");
  squareInput.setAttribute("id", "square-input");
  squareInput.setAttribute("min", "300");

  container.appendChild(squareInput);
}

function loadDateAndType() {
  const container = document.querySelector(".container");

  const dateDropdown = document.createElement("select");
  const typeDropdown = document.createElement("select");
  const defaultDate = document.createElement("option");
  const defaultType = document.createElement("option");
  const dateAndTypeContainer = document.createElement("div");
  const dateContainer = document.createElement("div");
  const typeContainer = document.createElement("div");

  dateDropdown.name = "date";
  typeDropdown.name = "type";
  dateDropdown.innerHTML = "Construction date";
  typeDropdown.innerHTML = "Type of property";
  defaultDate.value = "";
  defaultDate.text = "Construction date";
  defaultType.value = "";
  defaultType.text = "Type of property";

  dateDropdown.setAttribute("id", "date-input");
  typeDropdown.setAttribute("id", "type-input");

  defaultDate.setAttribute("disabled", true);
  defaultDate.setAttribute("selected", true);
  defaultType.setAttribute("disabled", true);
  defaultType.setAttribute("selected", true);

  dateAndTypeContainer.classList.add("row-input-container");

  for (let i = 0; i < 3; i++) {
    const option = document.createElement("option");
    if (i === 0) {
      option.value = "pre1914";
      option.text = "Pre 1914";
    } else if (i === 1) {
      option.value = "1914-2000";
      option.text = "1914-2000";
    } else if (i === 2) {
      option.value = "2000onwards";
      option.text = "2000 Onwards";
    }
    dateDropdown.appendChild(option);
  }

  for (let i = 0; i < 4; i++) {
    const option = document.createElement("option");
    if (i === 0) {
      option.value = "flat";
      option.text = "Flat";
    } else if (i === 1) {
      option.value = "detached_house";
      option.text = "Detached house";
    } else if (i === 2) {
      option.value = "semi-detached_house";
      option.text = "Semi-detached house";
    } else if (i === 3) {
      option.value = "terraced_house";
      option.text = "Terraced house";
    }
    typeDropdown.appendChild(option);
  }

  dateDropdown.appendChild(defaultDate);
  typeDropdown.appendChild(defaultType);
  dateContainer.appendChild(dateDropdown);
  typeContainer.appendChild(typeDropdown);
  dateAndTypeContainer.appendChild(dateContainer);
  dateAndTypeContainer.appendChild(typeContainer);
  container.appendChild(dateAndTypeContainer);
}

function loadFinish() {
  const container = document.querySelector(".container");
  const finishDropdown = document.createElement("select");
  const defaultFinish = document.createElement("option");

  finishDropdown.name = "finish";
  finishDropdown.innerHTML = "Finish quality";
  defaultFinish.value = "";
  defaultFinish.text = "Finish quality";

  defaultFinish.setAttribute("disabled", true);
  defaultFinish.setAttribute("selected", true);

  finishDropdown.setAttribute("id", "finish-input");

  for (let i = 0; i < 5; i++) {
    const option = document.createElement("option");
    if (i === 0) {
      option.value = "very_high";
      option.text = "Very high";
    } else if (i === 1) {
      option.value = "high";
      option.text = "High";
    } else if (i === 2) {
      option.value = "average";
      option.text = "Average";
    } else if (i === 3) {
      option.value = "below_average";
      option.text = "Below average";
    } else if (i === 4) {
      option.value = "unmodernised";
      option.text = "Unmodernised";
    }
    finishDropdown.appendChild(option);
  }

  finishDropdown.appendChild(defaultFinish);
  container.appendChild(finishDropdown);
}

function loadParkingOss() {
  const container = document.querySelector(".container");

  const ossDropdown = document.createElement("select");
  const parkingDropdown = document.createElement("select");
  const defaultOss = document.createElement("option");
  const defaultParking = document.createElement("option");
  const parkingOssContainer = document.createElement("div");
  const ossContainer = document.createElement("div");
  const parkingContainer = document.createElement("div");

  ossDropdown.setAttribute("id", "oss-input");
  parkingDropdown.setAttribute("id", "parking-input");

  ossDropdown.name = "oss";
  parkingDropdown.name = "parking";
  ossDropdown.innerHTML = "Outside space";
  parkingDropdown.innerHTML = "Parking";
  defaultOss.value = "";
  defaultOss.text = "Outside space";
  defaultParking.value = "";
  defaultParking.text = "Parking";

  defaultOss.setAttribute("disabled", true);
  defaultOss.setAttribute("selected", true);
  defaultParking.setAttribute("disabled", true);
  defaultParking.setAttribute("selected", true);

  parkingOssContainer.classList.add("row-input-container");

  for (let i = 0; i < 4; i++) {
    const option = document.createElement("option");
    if (i === 0) {
      option.value = "none";
      option.text = "None";
    } else if (i === 1) {
      option.value = "balcony_terrace";
      option.text = "Balcony/Terrace";
    } else if (i === 2) {
      option.value = "garden";
      option.text = "Garden";
    } else if (i === 3) {
      option.value = "garden_very_large";
      option.text = "Very large garden";
    }
    ossDropdown.appendChild(option);
  }

  for (let i = 0; i <= 4; i++) {
    const option = document.createElement("option");
    option.value = i.toString();
    option.text =
      i === 0 ? "0" + " Parking space(s)" : i.toString() + " Parking space(s)";
    parkingDropdown.appendChild(option);
  }

  ossDropdown.appendChild(defaultOss);
  parkingDropdown.appendChild(defaultParking);

  ossContainer.appendChild(ossDropdown);
  parkingContainer.appendChild(parkingDropdown);
  parkingOssContainer.appendChild(ossContainer);
  parkingOssContainer.appendChild(parkingContainer);
  container.appendChild(parkingOssContainer);
}

function loadBottom() {
  const container = document.querySelector(".container");
  const getValButton = document.createElement("button");

  getValButton.setAttribute("id", "button1");
  getValButton.setAttribute("type", "submit");
  getValButton.innerHTML = "GET INSTANT VALUATION";

  container.appendChild(getValButton);
}
