import clearWidget from "./clear-container";

export default function pageThreeLoad(userInput) {
  clearWidget();
  loadNameFields();
  loadEmailAndNumberFields();
  loadBottom();
}

function loadNameFields() {
  const container = document.querySelector(".container");
  const nameFieldsContainer = document.createElement("div");

  const firstNameField = document.createElement("input");
  const secondNameField = document.createElement("input");
  const header = document.createElement("p");

  firstNameField.setAttribute("type", "text");
  secondNameField.setAttribute("type", "text");

  firstNameField.setAttribute("id", "first-name-input");
  secondNameField.setAttribute("id", "second-name-input");
  nameFieldsContainer.classList.add("row-input-container");

  firstNameField.setAttribute("placeholder", "Please enter your first name");
  secondNameField.setAttribute("placeholder", "Please enter your surname");
  header.innerHTML = "Your details";
  nameFieldsContainer.appendChild(firstNameField);
  nameFieldsContainer.appendChild(secondNameField);

  container.appendChild(header);
  container.appendChild(nameFieldsContainer);
}

function loadEmailAndNumberFields() {
  const container = document.querySelector(".container");

  const emailField = document.createElement("input");
  const numberField = document.createElement("input");

  emailField.setAttribute("type", "email");
  numberField.setAttribute("type", "tel");

  emailField.setAttribute("id", "email-input");
  numberField.setAttribute("id", "number-input");

  emailField.setAttribute("placeholder", "Please enter your email address");
  numberField.setAttribute("placeholder", "Please enter your phone number");

  container.appendChild(emailField);
  container.appendChild(numberField);
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
