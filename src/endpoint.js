export function handleServer(
  processedSaleData,
  processedRentData,
  userInput,
  saleSuccess,
  rentSuccess
) {
  triggerBackendEmail(processedSaleData, processedRentData, userInput);
}

async function triggerBackendEmail(
  processedSaleData,
  processedRentData,
  userInput
) {
  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // You can pass any necessary data to the backend in the request body
      body: JSON.stringify({
        processedSaleData,
        processedRentData,
        userInput,
      }),
    });

    // Check if the request was successful
    if (response.ok) {
      console.log("Email sent successfully");
    } else {
      // Handle errors
      console.error("Error sending email:", response.statusText);
    }
  } catch (error) {
    // Handle network errors
    console.error("Network error:", error);
  }
}
