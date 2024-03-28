import clearWidget from "./clear-container";
import validateInput from "./validate-input";

export default function pageThreeLoad(userInput) {
  clearWidget();
  loadNameFields();
  loadEmailAndNumberFields();
  loadBottom();
  checkValidSelection(userInput);
}

function checkValidSelection(userInput) {
  const form = document.getElementById("page-three-button");
  //   const form = document.querySelector("form");
  const firstNameInput = document.getElementById("first-name-input");
  const secondNameInput = document.getElementById("second-name-input");
  const emailInput = document.getElementById("email-input");
  const phoneInput = document.getElementById("number-input");

  form.addEventListener("click", (e) => {
    e.preventDefault();

    errorHandling(
      userInput,
      firstNameInput,
      secondNameInput,
      emailInput,
      phoneInput
    );
  });
}

function errorHandling(
  userInput,
  firstNameInput,
  secondNameInput,
  emailInput,
  phoneInput
) {
  if (!validateInput(firstNameInput, "Please enter your first name")) {
    return;
  }
  if (!validateInput(secondNameInput, "Please enter your surname")) {
    return;
  }
  if (!validateInput(emailInput, "Please enter your email address")) {
    return;
  }
  if (!validateInput(phoneInput, "Please enter your phone number")) {
    return;
  } else
    submitSelection(
      userInput,
      firstNameInput,
      secondNameInput,
      emailInput,
      phoneInput
    );
}

function submitSelection(
  userInput,
  firstNameInput,
  secondNameInput,
  emailInput,
  phoneInput
) {
  userInput.firstName = firstNameInput.value;
  userInput.secondNameInput = secondNameInput.value;
  userInput.emailInput = emailInput.value;
  userInput.phoneInput = phoneInput.value;

  console.log(userInput);
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

  getValButton.setAttribute("id", "page-three-button");
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
