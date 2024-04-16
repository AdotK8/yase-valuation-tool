import clearWidget from "./clear-container";
import validateInput from "./validate-input";
import phoneIconImg from "./assets/phone.svg";
import emailIconImg from "./assets/email.svg";
import pageFourLoad from "./page-four";

export default async function pageThreeLoad(userInput) {
  await clearWidget();
  loadNameFields();
  loadEmailAndNumberFields();
  loadBottomSection();
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
  userInput.firstName = sentenceCaseName(firstNameInput.value);
  userInput.secondNameInput = sentenceCaseName(secondNameInput.value);
  userInput.emailInput = emailInput.value;
  userInput.phoneInput = phoneInput.value;

  // pageFourLoad(userInput);
  console.log(userInput);
  console.log(typeof firstNameInput.value);
}

function sentenceCaseName(name) {
  let words = name.toLowerCase().split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a single string and return
  return words.join(" ");
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

  firstNameField.setAttribute("placeholder", "First name");
  secondNameField.setAttribute("placeholder", "Surname");
  header.classList.add("form-header");
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
  const emailIcon = document.createElement("img");
  const phoneIcon = document.createElement("img");

  const emailContainer = document.createElement("div");
  const phoneContainer = document.createElement("div");

  emailField.setAttribute("type", "email");
  numberField.setAttribute("type", "tel");

  emailIcon.src = emailIconImg;
  phoneIcon.src = phoneIconImg;

  emailField.setAttribute("id", "email-input");
  numberField.setAttribute("id", "number-input");
  emailContainer.classList.add("postcode-container");
  phoneContainer.classList.add("postcode-container");
  emailIcon.classList.add("input-icons");
  emailIcon.setAttribute("id", "map-icon");
  phoneIcon.classList.add("input-icons");
  phoneIcon.setAttribute("id", "map-icon");

  emailField.setAttribute("placeholder", "Email address");
  numberField.setAttribute("placeholder", "Phone number");

  emailContainer.appendChild(emailIcon);
  emailContainer.appendChild(emailField);
  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(numberField);

  container.appendChild(emailContainer);
  container.appendChild(phoneContainer);
}

function loadBottomSection() {
  const container = document.querySelector(".container");
  const getValButton = document.createElement("button");
  const disclaimer = document.createElement("p");

  getValButton.setAttribute("id", "page-three-button");
  getValButton.setAttribute("type", "submit");
  getValButton.innerHTML = "GET INSTANT VALUATION";
  getValButton.classList.add("button-next");
  disclaimer.classList.add("disclaimer");

  const privacyPolicyLink = document.createElement("a");
  privacyPolicyLink.href = "https://www.yaseproperty.com/legal";
  privacyPolicyLink.textContent = "privacy policy";
  privacyPolicyLink.setAttribute("target", "_blank");
  disclaimer.innerHTML = "By proceeding you agree to our ";
  disclaimer.appendChild(privacyPolicyLink);

  container.appendChild(getValButton);
  container.appendChild(disclaimer);
}
