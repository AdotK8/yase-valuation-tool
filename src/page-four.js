import clearWidget from "./clear-container";
import { processSaleData, processRentData, fetchData } from "./data-process";
import checkImgIcon from "./assets/check-circle.svg";
import checkImgIconFade from "./assets/check-circle-faded.svg";
import errorIconImg from "./assets/alert-circle.svg";
import { handleServer, triggerBackendEmailBookVal } from "./endpoint";

export default async function pageFourLoad(userInput) {
  await clearWidget();

  // const userInput = {
  //   bathrooms: "1",
  //   bedrooms: "1",
  //   buildDate: "2000_onwards",
  //   emailInput: "ahmedkhan895.ak@gmail.com",
  //   finishQuality: "high",
  //   firstName: "Ahmed",
  //   oss: "none",
  //   parking: "1",
  //   phoneInput: "07853114511",
  //   postcode: "SW1V3JL",
  //   propertyType: "flat",
  //   secondNameInput: "KHAN",
  //   squareFootage: "800",
  // };

  loadingPage();

  //initializing empty variables to store data and success status
  let processedSaleData;
  let processedRentData;
  let saleSuccess;
  let rentSuccess;

  fetchData(userInput)
    .then(([saleData, rentData]) => {
      // Check if sale and rent data are successful
      saleSuccess = saleData && saleData.status === "success";
      rentSuccess = rentData && rentData.status === "success";
      removeLoader();

      if (saleSuccess || rentSuccess) {
        // Run code if either sale or rent data is successful
        const resultDisplayContainer = initialPageLoad();
        //display sale results
        if (saleSuccess) {
          console.log("Sale data was successful");
          processedSaleData = processSaleData(saleData);
          loadSingleLine(
            resultDisplayContainer,
            processedSaleData.minimum,
            "Minimum estimated sale value",
            "minimum",
            "dark"
          );
          loadSingleLine(
            resultDisplayContainer,
            processedSaleData.average,
            "Estimated sale value",
            "average",
            "light"
          );
          loadSingleLine(
            resultDisplayContainer,
            processedSaleData.maximum,
            "Maximum estimated sale value",
            "maximum",
            "dark"
          );
        }
        //display rent results
        if (rentSuccess) {
          console.log("Rent data was successful");
          processedRentData = processRentData(rentData);
          loadSingleLine(
            resultDisplayContainer,
            processedRentData.rent,
            "Estimated Rental",
            "rent",
            "light"
          );
        }
        //display rent failure
        if (!rentSuccess) {
          console.log("Rent data was unsuccessful");
          loadSingleLine(
            resultDisplayContainer,
            "Failed to retrieve",
            "Estimated Rental",
            "rent",
            "error"
          );
        }
      } else {
        // Run code if both sale and rent data are unsuccessful
        console.error("Both sale and rent data failed to fetch");
        loadError();
      }
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      loadMessage();
      buttonClick(userInput);
      handleServer(
        processedSaleData,
        processedRentData,
        userInput,
        saleSuccess,
        rentSuccess
      );
    });
}

function initialPageLoad() {
  // Execute loadMessage() and buttonClick() after data processing and display
  const container = document.querySelector(".container");
  removeTitle();
  loadHeader();

  const resultDisplayContainer = document.createElement("div");
  resultDisplayContainer.classList.add("results-display-container");

  container.appendChild(resultDisplayContainer);

  return resultDisplayContainer;
}

function removeTitle() {
  const title = document.querySelector(".title");
  title.remove();
}

function loadHeader() {
  const container = document.querySelector(".container");

  const header = document.createElement("h1");
  header.innerHTML = "Your property's estimated value";
  container.appendChild(header);
}

function loadSingleLine(resultDisplayContainer, value, title, id, icon) {
  const valueListItem = document.createElement("div");
  const checkImg = document.createElement("img");
  const titleContent = document.createElement("p");
  const valueContent = document.createElement("p");

  checkImg.classList.add("check");
  valueListItem.classList.add("value-list-item");
  valueContent.classList.add("value-price");
  valueListItem.setAttribute("id", id);

  //adding correct image
  if (icon === "dark") {
    checkImg.src = checkImgIconFade;
  } else if (icon === "error") {
    checkImg.src = errorIconImg;
  } else {
    checkImg.src = checkImgIcon;
  }

  titleContent.innerHTML = title;
  valueContent.innerHTML = value;

  valueListItem.appendChild(checkImg);
  valueListItem.appendChild(titleContent);
  valueListItem.appendChild(valueContent);
  resultDisplayContainer.appendChild(valueListItem);
}

function loadMessage() {
  const container = document.querySelector(".container");
  const messageContainer = document.createElement("div");
  const header = document.createElement("h2");
  const textContent = document.createElement("p");
  const getValButton = document.createElement("button");

  getValButton.setAttribute("id", "page-four-button");
  getValButton.setAttribute("type", "submit");
  getValButton.innerHTML = "Book accurate valuation";
  getValButton.classList.add("button-next");
  messageContainer.classList.add("message-container");

  header.innerHTML = "Ready to book an accurate, in-person valuation?";
  textContent.innerHTML =
    "Looking to sell or let your property? Look no further than Yase. As a boutique firm we pride ourselves on providing a highly personalized service and advice, ensuring that we look after and care for each of our clients in a way that larger companies simply can't match.<br><br>Our local property specialists are dedicated to assisting you every step of the way, ensuring you receive the attention and care you deserve. Whether you're looking to understand your property's value, sell, rent, or simply seek advice, we've got you covered with competitive letting and sales fees. <br><br>Experience the difference with Yase, where your property truly matters to us.";
  messageContainer.appendChild(header);
  messageContainer.appendChild(textContent);
  messageContainer.appendChild(getValButton);

  container.appendChild(messageContainer);
}

function buttonClick(userInput) {
  const button = document.querySelector("#page-four-button");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    triggerBackendEmailBookVal(userInput);
    loadFinalMessage();
  });
}

function loadFinalMessage() {
  const messageContainer = document.querySelector(".message-container");

  while (messageContainer.firstChild) {
    messageContainer.removeChild(messageContainer.firstChild);
  }

  const finalHeader = document.createElement("h1");
  const finalMessage = document.createElement("p");

  finalHeader.innerHTML = "Thank you";
  finalMessage.innerHTML =
    "We greatly appreciate you reaching out to us. A member of our team will be reaching out to you shortly using the contact information you've provided.<br> <br> We're excited to have a conversation with you about your property and help you in any way we can!";
  messageContainer.appendChild(finalHeader);
  messageContainer.appendChild(finalMessage);
}

function loadError() {
  const container = document.querySelector(".container");

  const errorContainer = document.createElement("div");
  const errorIcon = document.createElement("img");
  const errorMessage = document.createElement("p");

  errorContainer.classList.add("error-container");
  errorIcon.setAttribute("id", "error-icon");

  errorIcon.src = errorIconImg;
  errorMessage.innerHTML =
    "There seems to have been an error fetching your valuation. <br> However, you can still get an accurate valuation by clicking below";

  errorContainer.appendChild(errorIcon);
  errorContainer.appendChild(errorMessage);

  container.appendChild(errorContainer);
}

function loadingPage() {
  const container = document.querySelector(".container");
  const loadingElement = document.createElement("div");

  loadingElement.classList.add("loader");

  container.appendChild(loadingElement);
}

function removeLoader() {
  const loaderElement = document.querySelector(".loader");
  loaderElement.remove();
}
