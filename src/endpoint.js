export function handleServer(
  processedSaleData,
  processedRentData,
  userInput,
  saleSuccess,
  rentSuccess
) {
  if (saleSuccess && rentSuccess) {
    triggerBackendEmailFull(userInput, processedSaleData, processedRentData);
  } else if (saleSuccess && !rentSuccess) {
    triggerBackendEmailSaleOnly(userInput, processedSaleData);
  } else if (!saleSuccess && !rentSuccess) {
    triggerBackendEmailInternal(userInput);
  }
}

//function to send full email to server
async function triggerBackendEmailFull(
  userInput,
  processedSaleData,
  processedRentData
) {
  try {
    const response = await fetch(
      "https://yase-valuation-backend-4b9af8757df8.herokuapp.com/",
      {
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
      }
    );

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

//function to send sale email to server
async function triggerBackendEmailSaleOnly(userInput, processedSaleData) {
  try {
    const response = await fetch("http://localhost:3000/send-email-sale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // You can pass any necessary data to the backend in the request body
      body: JSON.stringify({
        processedSaleData,
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

//function to send internal email to server
async function triggerBackendEmailInternal(userInput) {
  try {
    const response = await fetch("http://localhost:3000/send-email-internal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // You can pass any necessary data to the backend in the request body
      body: JSON.stringify({
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
