import clearWidget from "./clear-container";

export default function pageTwoLoad() {
  clearWidget();
  loadTop();
  loadBedAndBath();
  loadSquareInput();
  loadDateAndType();
  loadFinish();
  loadParkingOss();
  loadBottom();
  loadButtonFunctionality();
}

//helper functions

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

  for (var i = 0; i <= 5; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i === 0 ? "Studio" : i + " Bedroom(s)";
    bedDropdown.appendChild(option);
  }

  for (var i = 0; i <= 5; i++) {
    var option = document.createElement("option");
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

  finishDropdown.classList.add("finish");

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
    option.text = i === 0 ? "0" : i.toString();
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
  const disclaimer = document.createElement("p");

  getValButton.setAttribute("id", "button1");
  getValButton.setAttribute("type", "submit");
  getValButton.innerHTML = "GET INSTANT VALUATION";

  const privacyPolicyLink = document.createElement("a");
  privacyPolicyLink.href = "https://www.yaseproperty.com/legal";
  privacyPolicyLink.textContent = "privacy policy";
  disclaimer.innerHTML = "By proceeding you agree to our ";
  disclaimer.appendChild(privacyPolicyLink);

  container.appendChild(getValButton);
  container.appendChild(disclaimer);
}
