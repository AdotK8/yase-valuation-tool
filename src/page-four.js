import clearWidget from "./clear-container";
import processData from "./data-process";
import checkImgIcon from "./assets/check-circle.svg";

export default function pageFourLoad() {
  clearWidget();

  const saleResult = {
    result: 390000,
    margin: 20000,
  };

  const rentalResult = {
    estimate: 332,
    unit: "gbp_per_week",
  };

  const processedData = processData(saleResult, rentalResult);
  console.log(processedData);
  const container = document.querySelector(".container");
  const resultDisplayContainer = document.createElement("div");
  resultDisplayContainer.classList.add("results-display-container");

  loadHeader();
  loadSingleLine(resultDisplayContainer, processedData.minimum, "Minimum");
  loadSingleLine(resultDisplayContainer, processedData.average, "Average");
  loadSingleLine(resultDisplayContainer, processedData.maximum, "Maximum");
  loadSingleLine(
    resultDisplayContainer,
    processedData.rent,
    "Estimated Rental"
  );
  container.appendChild(resultDisplayContainer);
  loadMessage();
  buttonClick();
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
