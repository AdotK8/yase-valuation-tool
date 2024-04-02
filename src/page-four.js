import clearWidget from "./clear-container";
import { processSaleData, processRentData, fetchData } from "./data-process";
import checkImgIcon from "./assets/check-circle.svg";

export default function pageFourLoad(userInput) {
  // const userInput = {
  //   bathrooms: "1",
  //   bedrooms: "1",
  //   buildDate: "1914_2000",
  //   emailInput: "ahmedkhan@hotmail.com",
  //   finishQuality: "average",
  //   firstName: "Ahmed",
  //   oss: "none",
  //   parking: "1",
  //   phoneInput: "07853114511",
  //   postcode: "SW1V3JL",
  //   propertyType: "flat",
  //   secondNameInput: "Khan",
  //   sellOrLet: "SELL",
  //   squareFootage: "700",
  // };

  clearWidget();
  // Call the fetchData function and handle the promises

  fetchData(userInput)
    .then(([saleData, rentData]) => {
      // Check if sale and rent data are successful
      const saleSuccess = saleData && saleData.status === "success";
      const rentSuccess = rentData && rentData.status === "success";

      if (saleSuccess || rentSuccess) {
        // Run code if either sale or rent data is successful
        const resultDisplayContainer = initialPageLoad();
        //display sale results
        if (saleSuccess) {
          console.log("Sale data was successful");
          console.log(saleData);
          const processedSaleData = processSaleData(saleData);
          console.log(processedSaleData);

          loadSingleLine(
            resultDisplayContainer,
            processedSaleData.minimum,
            "Minimum"
          );
          loadSingleLine(
            resultDisplayContainer,
            processedSaleData.average,
            "Average"
          );
          loadSingleLine(
            resultDisplayContainer,
            processedSaleData.maximum,
            "Maximum"
          );
        }
        //display rent results
        if (rentSuccess) {
          console.log("Rent data was successful");
          console.log(rentData);
          const processedRentData = processRentData(rentData);
          console.log(processedRentData);

          loadSingleLine(
            resultDisplayContainer,
            processedRentData.rent,
            "Estimated Rental"
          );
        }
      } else {
        // Run code if both sale and rent data are unsuccessful
        console.error("Both sale and rent data failed to fetch");
      }
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      loadMessage();
      buttonClick();
    });
}

function initialPageLoad() {
  // Execute loadMessage() and buttonClick() after data processing and display
  const container = document.querySelector(".container");
  loadHeader();

  const resultDisplayContainer = document.createElement("div");
  resultDisplayContainer.classList.add("results-display-container");

  container.appendChild(resultDisplayContainer);

  return resultDisplayContainer;
}

function loadHeader() {
  const container = document.querySelector(".container");

  const header = document.createElement("h1");
  header.innerHTML = "Your property's estimated value";
  container.appendChild(header);
}

function loadSingleLine(resultDisplayContainer, value, title) {
  const valueListItem = document.createElement("div");
  const checkImg = document.createElement("img");
  const titleContent = document.createElement("p");
  const valueContent = document.createElement("p");

  checkImg.classList.add("check");
  valueListItem.classList.add("value-list-item");
  valueContent.classList.add("value-price");

  checkImg.src = checkImgIcon;
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
  const header = document.createElement("h1");
  const textContent = document.createElement("p");
  const getValButton = document.createElement("button");

  getValButton.setAttribute("id", "page-four-button");
  getValButton.setAttribute("type", "submit");
  getValButton.innerHTML = "BOOK ACCURATE VALUATION";
  getValButton.classList.add("button-next");
  messageContainer.classList.add("message-container");

  header.innerHTML = "Ready to book an accurate, in-person valuation?";
  textContent.innerHTML =
    "Looking for a precise property valuation? Look no further than Yase. We're experts in London real estate and we're here to help. <br> <br>Our local property specialists are dedicated to assisting you every step of the way – whether you're looking to understand your property's value, sell, rent, or simply seeking advice, we've got you covered.";
  messageContainer.appendChild(header);
  messageContainer.appendChild(textContent);
  messageContainer.appendChild(getValButton);

  container.appendChild(messageContainer);
}

function buttonClick() {
  const button = document.querySelector("#page-four-button");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
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
