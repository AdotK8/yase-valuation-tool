/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clear-container.js":
/*!********************************!*\
  !*** ./src/clear-container.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearWidget)\n/* harmony export */ });\nfunction clearWidget() {\n  var container = document.querySelector(\".container\");\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n}\n\n//# sourceURL=webpack://yase-valuation-tool/./src/clear-container.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _assets_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/map-marker.svg */ \"./src/assets/map-marker.svg\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _page_three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-three */ \"./src/page-three.js\");\n/* harmony import */ var _page_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-one */ \"./src/page-one.js\");\n/* harmony import */ var _page_two__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-two */ \"./src/page-two.js\");\n\n\n\n\n\n\n\n//filling in images for map icon and valuation image\n\nvar mapIconElement = document.getElementById(\"map-icon\");\nmapIconElement.src = _assets_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__;\nvar valuationIconElement = document.getElementById(\"valuation-icon\");\nvaluationIconElement.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__;\n\n//initializing empty object to store input data\nvar userInput = {};\n\n//loading first page\n(0,_page_one__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(userInput);\n// pageTwoLoad(userInput);\n// pageThreeLoad(userInput);\n\n//# sourceURL=webpack://yase-valuation-tool/./src/index.js?");

/***/ }),

/***/ "./src/page-one.js":
/*!*************************!*\
  !*** ./src/page-one.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageOneLoad)\n/* harmony export */ });\n/* harmony import */ var _page_two__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-two */ \"./src/page-two.js\");\n\nfunction pageOneLoad(userInput) {\n  var inputField = document.querySelector(\"#postcode-input\");\n  inputField.addEventListener(\"input\", function () {\n    inputField.setCustomValidity(\"\");\n  });\n  document.getElementById(\"page-one-button\").addEventListener(\"click\", function (event) {\n    event.preventDefault(); // Prevent default form submission behavior\n\n    var inputField = document.querySelector(\"#postcode-input\");\n    var postcodeInput = inputField.value.trim();\n    var postcodeRegex = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;\n    if (!postcodeRegex.test(postcodeInput)) {\n      inputField.setCustomValidity(\"Please enter a valid UK postcode\");\n      inputField.reportValidity(); // Show the validation message\n    } else {\n      // Store input in object here\n      userInput.postcode = postcodeInput;\n      (0,_page_two__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userInput);\n    }\n  });\n}\n\n//# sourceURL=webpack://yase-valuation-tool/./src/page-one.js?");

/***/ }),

/***/ "./src/page-three.js":
/*!***************************!*\
  !*** ./src/page-three.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageThreeLoad)\n/* harmony export */ });\n/* harmony import */ var _clear_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-container */ \"./src/clear-container.js\");\n/* harmony import */ var _validate_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-input */ \"./src/validate-input.js\");\n/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/phone.svg */ \"./src/assets/phone.svg\");\n/* harmony import */ var _assets_email_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/email.svg */ \"./src/assets/email.svg\");\n\n\n\n\nfunction pageThreeLoad(userInput) {\n  (0,_clear_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  loadNameFields();\n  loadEmailAndNumberFields();\n  loadBottomSection();\n  checkValidSelection(userInput);\n}\nfunction checkValidSelection(userInput) {\n  var form = document.getElementById(\"page-three-button\");\n  //   const form = document.querySelector(\"form\");\n  var firstNameInput = document.getElementById(\"first-name-input\");\n  var secondNameInput = document.getElementById(\"second-name-input\");\n  var emailInput = document.getElementById(\"email-input\");\n  var phoneInput = document.getElementById(\"number-input\");\n  form.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    errorHandling(userInput, firstNameInput, secondNameInput, emailInput, phoneInput);\n  });\n}\nfunction errorHandling(userInput, firstNameInput, secondNameInput, emailInput, phoneInput) {\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(firstNameInput, \"Please enter your first name\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(secondNameInput, \"Please enter your surname\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(emailInput, \"Please enter your email address\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(phoneInput, \"Please enter your phone number\")) {\n    return;\n  } else submitSelection(userInput, firstNameInput, secondNameInput, emailInput, phoneInput);\n}\nfunction submitSelection(userInput, firstNameInput, secondNameInput, emailInput, phoneInput) {\n  userInput.firstName = firstNameInput.value;\n  userInput.secondNameInput = secondNameInput.value;\n  userInput.emailInput = emailInput.value;\n  userInput.phoneInput = phoneInput.value;\n  console.log(userInput);\n}\nfunction loadNameFields() {\n  var container = document.querySelector(\".container\");\n  var nameFieldsContainer = document.createElement(\"div\");\n  var firstNameField = document.createElement(\"input\");\n  var secondNameField = document.createElement(\"input\");\n  var header = document.createElement(\"p\");\n  firstNameField.setAttribute(\"type\", \"text\");\n  secondNameField.setAttribute(\"type\", \"text\");\n  firstNameField.setAttribute(\"id\", \"first-name-input\");\n  secondNameField.setAttribute(\"id\", \"second-name-input\");\n  nameFieldsContainer.classList.add(\"row-input-container\");\n  firstNameField.setAttribute(\"placeholder\", \"First name\");\n  secondNameField.setAttribute(\"placeholder\", \"Surname\");\n  header.innerHTML = \"Your details\";\n  nameFieldsContainer.appendChild(firstNameField);\n  nameFieldsContainer.appendChild(secondNameField);\n  container.appendChild(header);\n  container.appendChild(nameFieldsContainer);\n}\nfunction loadEmailAndNumberFields() {\n  var container = document.querySelector(\".container\");\n  var emailField = document.createElement(\"input\");\n  var numberField = document.createElement(\"input\");\n  var emailIcon = document.createElement(\"img\");\n  var phoneIcon = document.createElement(\"img\");\n  var emailContainer = document.createElement(\"div\");\n  var phoneContainer = document.createElement(\"div\");\n  emailField.setAttribute(\"type\", \"email\");\n  numberField.setAttribute(\"type\", \"tel\");\n  emailIcon.src = _assets_email_svg__WEBPACK_IMPORTED_MODULE_3__;\n  phoneIcon.src = _assets_phone_svg__WEBPACK_IMPORTED_MODULE_2__;\n  emailField.setAttribute(\"id\", \"email-input\");\n  numberField.setAttribute(\"id\", \"number-input\");\n  emailContainer.classList.add(\"postcode-container\");\n  phoneContainer.classList.add(\"postcode-container\");\n  emailIcon.classList.add(\"input-icons\");\n  emailIcon.setAttribute(\"id\", \"map-icon\");\n  phoneIcon.classList.add(\"input-icons\");\n  phoneIcon.setAttribute(\"id\", \"map-icon\");\n  emailField.setAttribute(\"placeholder\", \"Email address\");\n  numberField.setAttribute(\"placeholder\", \"Phone number\");\n  emailContainer.appendChild(emailIcon);\n  emailContainer.appendChild(emailField);\n  phoneContainer.appendChild(phoneIcon);\n  phoneContainer.appendChild(numberField);\n  container.appendChild(emailContainer);\n  container.appendChild(phoneContainer);\n}\nfunction loadBottomSection() {\n  var container = document.querySelector(\".container\");\n  var getValButton = document.createElement(\"button\");\n  var disclaimer = document.createElement(\"p\");\n  getValButton.setAttribute(\"id\", \"page-three-button\");\n  getValButton.setAttribute(\"type\", \"submit\");\n  getValButton.innerHTML = \"GET INSTANT VALUATION\";\n  getValButton.classList.add(\"button-next\");\n  disclaimer.classList.add(\"disclaimer\");\n  var privacyPolicyLink = document.createElement(\"a\");\n  privacyPolicyLink.href = \"https://www.yaseproperty.com/legal\";\n  privacyPolicyLink.textContent = \"privacy policy\";\n  disclaimer.innerHTML = \"By proceeding you agree to our \";\n  disclaimer.appendChild(privacyPolicyLink);\n  container.appendChild(getValButton);\n  container.appendChild(disclaimer);\n}\n\n//# sourceURL=webpack://yase-valuation-tool/./src/page-three.js?");

/***/ }),

/***/ "./src/page-two.js":
/*!*************************!*\
  !*** ./src/page-two.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageTwoLoad)\n/* harmony export */ });\n/* harmony import */ var _clear_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-container */ \"./src/clear-container.js\");\n/* harmony import */ var _page_three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-three */ \"./src/page-three.js\");\n/* harmony import */ var _validate_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate-input */ \"./src/validate-input.js\");\n\n\n\nfunction pageTwoLoad(userInput) {\n  (0,_clear_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  loadTop();\n  loadBedAndBath();\n  loadSquareInput();\n  loadDateAndType();\n  loadFinish();\n  loadParkingOss();\n  loadBottomSection();\n  loadButtonFunctionality();\n  checkValidSelection(userInput);\n}\n\n//helper functions\n\nfunction checkValidSelection(userInput) {\n  var form = document.getElementById(\"page-two-button\");\n  form.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    errorHandling(userInput);\n  });\n}\nfunction errorHandling(userInput) {\n  var bedInput = document.getElementById(\"bedroom-input\");\n  var bathInput = document.getElementById(\"bathroom-input\");\n  var squareInput = document.getElementById(\"square-input\");\n  var dateInput = document.getElementById(\"date-input\");\n  var typeInput = document.getElementById(\"type-input\");\n  var finishInput = document.getElementById(\"finish-input\");\n  var ossInput = document.getElementById(\"oss-input\");\n  var parkingInput = document.getElementById(\"parking-input\");\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bedInput, \"Please select number of bedrooms\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bathInput, \"Please select number of bathrooms\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(squareInput, \"Please enter the square footage\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dateInput, \"Please select construction date\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(typeInput, \"Please select property type\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(finishInput, \"Please select finish quality\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ossInput, \"Please select outsite space\")) {\n    return;\n  }\n  if (!(0,_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(parkingInput, \"Please select number of parking spaces\")) {\n    return;\n  } else submitSelection(userInput, bedInput, bathInput, squareInput, dateInput, typeInput, finishInput, ossInput, parkingInput);\n}\nfunction submitSelection(userInput, bedInput, bathInput, squareInput, dateInput, typeInput, finishInput, ossInput, parkingInput) {\n  userInput.bedrooms = bedInput.value;\n  userInput.bathrooms = bathInput.value;\n  userInput.squareFootage = squareInput.value;\n  userInput.buildDate = dateInput.value;\n  userInput.propertyType = typeInput.value;\n  userInput.finishQuality = finishInput.value;\n  userInput.oss = ossInput.value;\n  userInput.parking = parkingInput.value;\n  userInput.sellOrLet = document.querySelector(\".selected\").textContent;\n  (0,_page_three__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userInput);\n  console.log(userInput);\n}\nfunction loadButtonFunctionality() {\n  var buttonSell = document.getElementById(\"button-sell\");\n  var buttonLet = document.getElementById(\"button-let\");\n  buttonSell.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    buttonSell.classList.add(\"selected\");\n    buttonLet.classList.remove(\"selected\");\n  });\n  buttonLet.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    buttonLet.classList.add(\"selected\");\n    buttonSell.classList.remove(\"selected\");\n  });\n}\nfunction loadTop() {\n  var container = document.querySelector(\".container\");\n  var questionText = document.createElement(\"p\");\n  var sellButton = document.createElement(\"button\");\n  var letButton = document.createElement(\"button\");\n  sellButton.setAttribute(\"id\", \"button-sell\");\n  letButton.setAttribute(\"id\", \"button-let\");\n  var buttonContainer = document.createElement(\"div\");\n  questionText.innerHTML = \"What are you looking to do with your property?\";\n  sellButton.innerHTML = \"SELL\";\n  sellButton.classList.add(\"selected\");\n  letButton.innerHTML = \"LET\";\n  buttonContainer.classList.add(\"button-container\");\n  container.appendChild(questionText);\n  buttonContainer.appendChild(sellButton);\n  buttonContainer.appendChild(letButton);\n  container.appendChild(buttonContainer);\n}\nfunction loadBedAndBath() {\n  var container = document.querySelector(\".container\");\n  var propertyDetailsText = document.createElement(\"p\");\n  var bedDropdown = document.createElement(\"select\");\n  var bathDropdown = document.createElement(\"select\");\n  var defaultBedrooms = document.createElement(\"option\");\n  var defaultBathrooms = document.createElement(\"option\");\n  var bedAndBathContainer = document.createElement(\"div\");\n  bedDropdown.setAttribute(\"id\", \"bedroom-input\");\n  bathDropdown.setAttribute(\"id\", \"bathroom-input\");\n  propertyDetailsText.innerHTML = \"Your property details\";\n  container.appendChild(propertyDetailsText);\n  bedDropdown.name = \"bedrooms\";\n  bathDropdown.name = \"bathrooms\";\n  bedDropdown.innerHTML = \"Number of bedrooms\";\n  bathDropdown.innerHTML = \"Number of bathrooms\";\n  defaultBedrooms.value = \"\";\n  defaultBedrooms.text = \"Number of bedrooms\";\n  defaultBathrooms.value = \"\";\n  defaultBathrooms.text = \"Number of bathrooms\";\n  defaultBathrooms.setAttribute(\"disabled\", true);\n  defaultBathrooms.setAttribute(\"selected\", true);\n  defaultBedrooms.setAttribute(\"disabled\", true);\n  defaultBedrooms.setAttribute(\"selected\", true);\n  bedAndBathContainer.classList.add(\"row-input-container\");\n  for (var i = 0; i <= 5; i++) {\n    var option = document.createElement(\"option\");\n    option.value = i;\n    option.text = i === 0 ? \"Studio\" : i + \" Bedroom(s)\";\n    bedDropdown.appendChild(option);\n  }\n  for (var _i = 0; _i <= 5; _i++) {\n    var _option = document.createElement(\"option\");\n    _option.value = _i;\n    _option.text = _i === 0 ? \"0 Bathrooms\" : _i + \" Bathroom(s)\";\n    bathDropdown.appendChild(_option);\n  }\n  bathDropdown.appendChild(defaultBathrooms);\n  bedDropdown.appendChild(defaultBedrooms);\n  bedAndBathContainer.appendChild(bedDropdown);\n  bedAndBathContainer.appendChild(bathDropdown);\n  container.appendChild(bedAndBathContainer);\n}\nfunction loadSquareInput() {\n  var container = document.querySelector(\".container\");\n  var squareInput = document.createElement(\"input\");\n  squareInput.type = \"number\";\n  squareInput.placeholder = \"Approximate internal square footage of property\";\n  squareInput.setAttribute(\"id\", \"square-input\");\n  squareInput.setAttribute(\"min\", \"300\");\n  container.appendChild(squareInput);\n}\nfunction loadDateAndType() {\n  var container = document.querySelector(\".container\");\n  var dateDropdown = document.createElement(\"select\");\n  var typeDropdown = document.createElement(\"select\");\n  var defaultDate = document.createElement(\"option\");\n  var defaultType = document.createElement(\"option\");\n  var dateAndTypeContainer = document.createElement(\"div\");\n  dateDropdown.name = \"date\";\n  typeDropdown.name = \"type\";\n  dateDropdown.innerHTML = \"Construction date\";\n  typeDropdown.innerHTML = \"Type of property\";\n  defaultDate.value = \"\";\n  defaultDate.text = \"Construction date\";\n  defaultType.value = \"\";\n  defaultType.text = \"Type of property\";\n  dateDropdown.setAttribute(\"id\", \"date-input\");\n  typeDropdown.setAttribute(\"id\", \"type-input\");\n  defaultDate.setAttribute(\"disabled\", true);\n  defaultDate.setAttribute(\"selected\", true);\n  defaultType.setAttribute(\"disabled\", true);\n  defaultType.setAttribute(\"selected\", true);\n  dateAndTypeContainer.classList.add(\"row-input-container\");\n  for (var i = 0; i < 3; i++) {\n    var option = document.createElement(\"option\");\n    if (i === 0) {\n      option.value = \"pre1914\";\n      option.text = \"Pre 1914\";\n    } else if (i === 1) {\n      option.value = \"1914-2000\";\n      option.text = \"1914-2000\";\n    } else if (i === 2) {\n      option.value = \"2000onwards\";\n      option.text = \"2000 Onwards\";\n    }\n    dateDropdown.appendChild(option);\n  }\n  for (var _i2 = 0; _i2 < 4; _i2++) {\n    var _option2 = document.createElement(\"option\");\n    if (_i2 === 0) {\n      _option2.value = \"flat\";\n      _option2.text = \"Flat\";\n    } else if (_i2 === 1) {\n      _option2.value = \"detached_house\";\n      _option2.text = \"Detached house\";\n    } else if (_i2 === 2) {\n      _option2.value = \"semi-detached_house\";\n      _option2.text = \"Semi-detached house\";\n    } else if (_i2 === 3) {\n      _option2.value = \"terraced_house\";\n      _option2.text = \"Terraced house\";\n    }\n    typeDropdown.appendChild(_option2);\n  }\n  dateDropdown.appendChild(defaultDate);\n  typeDropdown.appendChild(defaultType);\n  dateAndTypeContainer.appendChild(dateDropdown);\n  dateAndTypeContainer.appendChild(typeDropdown);\n  container.appendChild(dateAndTypeContainer);\n}\nfunction loadFinish() {\n  var container = document.querySelector(\".container\");\n  var finishDropdown = document.createElement(\"select\");\n  var defaultFinish = document.createElement(\"option\");\n  finishDropdown.name = \"finish\";\n  finishDropdown.innerHTML = \"Finish quality\";\n  defaultFinish.value = \"\";\n  defaultFinish.text = \"Finish quality\";\n  defaultFinish.setAttribute(\"disabled\", true);\n  defaultFinish.setAttribute(\"selected\", true);\n  finishDropdown.setAttribute(\"id\", \"finish-input\");\n  for (var i = 0; i < 5; i++) {\n    var option = document.createElement(\"option\");\n    if (i === 0) {\n      option.value = \"very_high\";\n      option.text = \"Very high\";\n    } else if (i === 1) {\n      option.value = \"high\";\n      option.text = \"High\";\n    } else if (i === 2) {\n      option.value = \"average\";\n      option.text = \"Average\";\n    } else if (i === 3) {\n      option.value = \"below_average\";\n      option.text = \"Below average\";\n    } else if (i === 4) {\n      option.value = \"unmodernised\";\n      option.text = \"Unmodernised\";\n    }\n    finishDropdown.appendChild(option);\n  }\n  finishDropdown.appendChild(defaultFinish);\n  container.appendChild(finishDropdown);\n}\nfunction loadParkingOss() {\n  var container = document.querySelector(\".container\");\n  var ossDropdown = document.createElement(\"select\");\n  var parkingDropdown = document.createElement(\"select\");\n  var defaultOss = document.createElement(\"option\");\n  var defaultParking = document.createElement(\"option\");\n  var parkingOssContainer = document.createElement(\"div\");\n  ossDropdown.setAttribute(\"id\", \"oss-input\");\n  parkingDropdown.setAttribute(\"id\", \"parking-input\");\n  ossDropdown.name = \"oss\";\n  parkingDropdown.name = \"parking\";\n  ossDropdown.innerHTML = \"Outside space\";\n  parkingDropdown.innerHTML = \"Parking\";\n  defaultOss.value = \"\";\n  defaultOss.text = \"Outside space\";\n  defaultParking.value = \"\";\n  defaultParking.text = \"Parking\";\n  defaultOss.setAttribute(\"disabled\", true);\n  defaultOss.setAttribute(\"selected\", true);\n  defaultParking.setAttribute(\"disabled\", true);\n  defaultParking.setAttribute(\"selected\", true);\n  parkingOssContainer.classList.add(\"row-input-container\");\n  for (var i = 0; i < 4; i++) {\n    var option = document.createElement(\"option\");\n    if (i === 0) {\n      option.value = \"none\";\n      option.text = \"None\";\n    } else if (i === 1) {\n      option.value = \"balcony_terrace\";\n      option.text = \"Balcony/Terrace\";\n    } else if (i === 2) {\n      option.value = \"garden\";\n      option.text = \"Garden\";\n    } else if (i === 3) {\n      option.value = \"garden_very_large\";\n      option.text = \"Very large garden\";\n    }\n    ossDropdown.appendChild(option);\n  }\n  for (var _i3 = 0; _i3 <= 4; _i3++) {\n    var _option3 = document.createElement(\"option\");\n    _option3.value = _i3.toString();\n    _option3.text = _i3 === 0 ? \"0\" + \" Parking space(s)\" : _i3.toString() + \" Parking space(s)\";\n    parkingDropdown.appendChild(_option3);\n  }\n  ossDropdown.appendChild(defaultOss);\n  parkingDropdown.appendChild(defaultParking);\n  parkingOssContainer.appendChild(ossDropdown);\n  parkingOssContainer.appendChild(parkingDropdown);\n  container.appendChild(parkingOssContainer);\n}\nfunction loadBottomSection() {\n  var container = document.querySelector(\".container\");\n  var getValButton = document.createElement(\"button\");\n  getValButton.setAttribute(\"id\", \"page-two-button\");\n  getValButton.classList.add(\"button-next\");\n  getValButton.setAttribute(\"type\", \"submit\");\n  getValButton.innerHTML = \"GET INSTANT VALUATION\";\n  container.appendChild(getValButton);\n}\n\n//# sourceURL=webpack://yase-valuation-tool/./src/page-two.js?");

/***/ }),

/***/ "./src/validate-input.js":
/*!*******************************!*\
  !*** ./src/validate-input.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ validateInput)\n/* harmony export */ });\nfunction validateInput(input) {\n  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"Please select an option\";\n  if (!input.value) {\n    input.setCustomValidity(errorMessage);\n    input.reportValidity();\n    input.addEventListener(\"input\", function () {\n      input.setCustomValidity(\"\");\n    });\n    return false;\n  } else if (input.type === \"email\" && !isValidEmail(input.value)) {\n    input.setCustomValidity(\"Please enter a valid email address\");\n    input.reportValidity();\n    return false;\n  }\n  return true;\n}\nfunction isValidEmail(email) {\n  var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailRegex.test(email);\n}\n\n//# sourceURL=webpack://yase-valuation-tool/./src/validate-input.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n}\n\nh1 {\n  margin-bottom: -10px;\n  color: white;\n}\n\np {\n  margin-bottom: -5px;\n  color: white;\n}\n\n.input-icons {\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 25px;\n  height: auto;\n}\n\n#valuation-icon {\n  max-width: 100px;\n  max-height: 100px;\n}\n\n.container {\n  margin: 2rem;\n  outline: 5px solid #ffffff;\n  display: flex;\n  flex-direction: column;\n  min-width: 200px;\n  gap: 1rem;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: #000000 0px 7px 29px 0px;\n  background-color: #8c8bd8;\n  background-image: linear-gradient(to top, #8c8bd8, #7978d2);\n  color: white; /* Ensure text is readable over the gradient background */\n}\n.container > .top,\n.container .postcode-container {\n  display: flex;\n  position: relative;\n  gap: 1rem;\n  align-items: center;\n}\n\ninput,\nselect {\n  box-shadow: rgba(255, 255, 255, 0.257) 0px 30px 60px -12px inset, rgba(255, 254, 254, 0.257) 0px 18px 36px -18px inset;\n  background-color: #8c8bd8;\n  display: flex;\n  flex: 1;\n  margin: 0;\n  padding: 1rem 1rem 1rem 1rem;\n  border: none;\n  font-size: 1rem;\n  color: #ffffff;\n  box-sizing: border-box;\n  text-overflow: clip;\n}\ninput:focus,\nselect:focus {\n  outline: 1px solid #ffffff;\n}\n\n#postcode-input,\n#number-input,\n#email-input {\n  padding-left: 2.2rem;\n  width: 100%;\n  max-width: 100%;\n}\n\nselect,\ninput::placeholder {\n  color: #ffffff;\n}\n\n.button-container {\n  display: flex;\n  gap: 1rem;\n}\n.button-container > button {\n  background-color: #8c8bd8;\n  outline: 1px solid #ffffff;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  padding: 1rem;\n  font-weight: 700;\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n.button-container > button.selected {\n  background-color: #b2b1e5;\n}\n.button-container > button:not(.selected):hover {\n  background-color: #b2b1e5;\n}\n\n.row-input-container {\n  display: flex;\n  gap: 1rem;\n  flex-direction: row;\n}\n.row-input-container > select {\n  width: 100%;\n  max-width: 100%;\n}\n\n#first-name-input,\n#second-name-input {\n  border: none;\n  display: flex;\n  flex: 1;\n  padding: 1rem;\n  box-sizing: border-box;\n  text-overflow: clip;\n  width: 100%;\n}\n\n.disclaimer {\n  margin-top: -5px;\n}\n.disclaimer > a {\n  color: #ffffff;\n}\n\n#page-one-button,\n#page-two-button,\n#page-three-button,\n.button-next {\n  align-items: center;\n  appearance: none;\n  background-color: #ffffff;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 18px;\n}\n\n.button-next:focus {\n  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n}\n\n.button-next:hover {\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  transform: translateY(-2px);\n}\n\n.button-next:active {\n  box-shadow: #d6d6e7 0 3px 7px inset;\n  transform: translateY(2px);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://yase-valuation-tool/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://yase-valuation-tool/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://yase-valuation-tool/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://yase-valuation-tool/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://yase-valuation-tool/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://yase-valuation-tool/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://yase-valuation-tool/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://yase-valuation-tool/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://yase-valuation-tool/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://yase-valuation-tool/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/email.svg":
/*!******************************!*\
  !*** ./src/assets/email.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"email.svg\";\n\n//# sourceURL=webpack://yase-valuation-tool/./src/assets/email.svg?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"logo.png\";\n\n//# sourceURL=webpack://yase-valuation-tool/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/map-marker.svg":
/*!***********************************!*\
  !*** ./src/assets/map-marker.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"map-marker.svg\";\n\n//# sourceURL=webpack://yase-valuation-tool/./src/assets/map-marker.svg?");

/***/ }),

/***/ "./src/assets/phone.svg":
/*!******************************!*\
  !*** ./src/assets/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"phone.svg\";\n\n//# sourceURL=webpack://yase-valuation-tool/./src/assets/phone.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;