import clearWidget from "./clear-container";
import pageThreeLoad from "./page-three";
import validateInput from "./validate-input";

export default async function pageTwoLoad(userInput) {
  await clearWidget();
  loadBedAndBath();
  loadSquareInput();
  loadDateAndType();
  loadFinish();
  loadParkingOss();
  loadBottomSection();

  checkValidSelection(userInput);
}

//helper functions

function checkValidSelection(userInput) {
  const form = document.getElementById("page-two-button");

  form.addEventListener("click", (e) => {
    e.preventDefault();
    errorHandling(userInput);
  });
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

  if (!validateInput(bedInput, "Please select number of bedrooms")) {
    return;
  }
  if (!validateInput(bathInput, "Please select number of bathrooms")) {
    return;
  }
  if (!validateInput(squareInput, "Please enter the square footage")) {
    return;
  }
  if (!validateInput(dateInput, "Please select construction date")) {
    return;
  }
  if (!validateInput(typeInput, "Please select property type")) {
    return;
  }
  if (!validateInput(finishInput, "Please select finish quality")) {
    return;
  }
  if (!validateInput(ossInput, "Please select outsite space")) {
    return;
  }
  if (!validateInput(parkingInput, "Please select number of parking spaces")) {
    return;
  } else
    submitSelection(
      userInput,
      bedInput,
      bathInput,
      squareInput,
      dateInput,
      typeInput,
      finishInput,
      ossInput,
      parkingInput
    );
}

function submitSelection(
  userInput,
  bedInput,
  bathInput,
  squareInput,
  dateInput,
  typeInput,
  finishInput,
  ossInput,
  parkingInput
) {
  userInput.bedrooms = bedInput.value;
  userInput.bathrooms = bathInput.value;
  userInput.squareFootage = squareInput.value;
  userInput.buildDate = dateInput.value;
  userInput.propertyType = typeInput.value;
  userInput.finishQuality = finishInput.value;
  userInput.oss = ossInput.value;
  userInput.parking = parkingInput.value;

  pageThreeLoad(userInput);
}

function loadBedAndBath() {
  const container = document.querySelector(".container");

  const propertyDetailsText = document.createElement("p");
  const bedDropdown = document.createElement("select");
  const bathDropdown = document.createElement("select");
  const defaultBedrooms = document.createElement("option");
  const defaultBathrooms = document.createElement("option");
  const bedAndBathContainer = document.createElement("div");

  bedDropdown.setAttribute("id", "bedroom-input");
  bathDropdown.setAttribute("id", "bathroom-input");

  propertyDetailsText.innerHTML = "Your property details:";
  propertyDetailsText.classList.add("form-header");
  container.appendChild(propertyDetailsText);

  bedDropdown.name = "bedrooms";
  bathDropdown.name = "bathrooms";
  defaultBedrooms.value = "";
  defaultBedrooms.text = "Bedrooms";
  defaultBathrooms.value = "";
  defaultBathrooms.text = "Bathrooms";

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
  bedAndBathContainer.appendChild(bedDropdown);
  bedAndBathContainer.appendChild(bathDropdown);
  container.appendChild(bedAndBathContainer);
}

function loadSquareInput() {
  const container = document.querySelector(".container");

  const squareInput = document.createElement("input");
  squareInput.type = "number";
  squareInput.placeholder = "Approximate square footage";
  squareInput.setAttribute("id", "square-input");
  squareInput.setAttribute("min", "300");
  squareInput.setAttribute("max", "5000");

  container.appendChild(squareInput);
}

function loadDateAndType() {
  const container = document.querySelector(".container");

  const dateDropdown = document.createElement("select");
  const typeDropdown = document.createElement("select");
  const defaultDate = document.createElement("option");
  const defaultType = document.createElement("option");
  const dateAndTypeContainer = document.createElement("div");

  dateDropdown.name = "date";
  typeDropdown.name = "type";
  defaultDate.value = "";
  defaultDate.text = "Build date";
  defaultType.value = "";
  defaultType.text = "Type";

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
      option.value = "pre_1914";
      option.text = "Pre 1914";
    } else if (i === 1) {
      option.value = "1914_2000";
      option.text = "1914-2000";
    } else if (i === 2) {
      option.value = "2000_onwards";
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
  dateAndTypeContainer.appendChild(dateDropdown);
  dateAndTypeContainer.appendChild(typeDropdown);
  container.appendChild(dateAndTypeContainer);
}

function loadFinish() {
  const container = document.querySelector(".container");
  const finishDropdown = document.createElement("select");
  const defaultFinish = document.createElement("option");

  finishDropdown.name = "finish";
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

  ossDropdown.setAttribute("id", "oss-input");
  parkingDropdown.setAttribute("id", "parking-input");

  ossDropdown.name = "oss";
  parkingDropdown.name = "parking";
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
  parkingOssContainer.appendChild(ossDropdown);
  parkingOssContainer.appendChild(parkingDropdown);
  container.appendChild(parkingOssContainer);
}

function loadBottomSection() {
  const container = document.querySelector(".container");
  const getValButton = document.createElement("button");

  getValButton.setAttribute("id", "page-two-button");
  getValButton.classList.add("button-next");
  getValButton.setAttribute("type", "submit");
  getValButton.innerHTML = "GET INSTANT VALUATION";

  container.appendChild(getValButton);
}
