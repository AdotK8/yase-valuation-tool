export default function validateInput(
  input,
  errorMessage = "Please select an option"
) {
  if (!input.value) {
    input.setCustomValidity(errorMessage);
    input.reportValidity();
    input.addEventListener("input", function () {
      input.setCustomValidity("");
    });
    return false;
  } else if (input.type === "email" && !isValidEmail(input.value)) {
    input.setCustomValidity("Please enter a valid email address");
    input.reportValidity();
    return false;
  } else if (input.type === "number" && parseInt(input.value) < 300) {
    input.setCustomValidity("Please ensure you are using square footage");
    input.reportValidity();
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
