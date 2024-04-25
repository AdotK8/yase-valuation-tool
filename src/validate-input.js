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
  } else if (
    input.type === "number" &&
    (isNaN(input.value) ||
      parseInt(input.value) < 300 ||
      parseInt(input.value) > 5000)
  ) {
    input.setCustomValidity("Are you sure this is correct?");
    input.reportValidity();
    return false;
  } else if (input.type === "tel" && !isValidPhoneNumber(input.value)) {
    input.setCustomValidity("Please enter a valid phone number");
    input.reportValidity();
    return false;
  }

  return true;
}

function isValidEmail(email) {
  // Regular expression to validate email (supports various formats)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  // Regular expression to validate phone numbers (supports various formats)
  const phoneRegex =
    /^(?:(\+?(\d{1,3}))?[\s.-]?)?((\(\d{3}\))|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(phoneNumber);
}
