export function fetchData(userInput) {
  console.log(userInput);
  const apiKey = "LJNWDYTNVO";
  const urls = [
    `https://api.propertydata.co.uk/valuation-sale?key=${apiKey}&postcode=${userInput.postcode}&internal_area=${userInput.squareFootage}&property_type=${userInput.propertyType}&construction_date=${userInput.buildDate}&bedrooms=${userInput.bedrooms}&bathrooms=${userInput.bathrooms}&finish_quality=${userInput.finishQuality}&outdoor_space=${userInput.oss}&off_street_parking=${userInput.parking}`,
    `https://api.propertydata.co.uk/valuation-rent?key=${apiKey}&postcode=${userInput.postcode}&internal_area=${userInput.squareFootage}&property_type=${userInput.propertyType}&construction_date=${userInput.buildDate}&bedrooms=${userInput.bedrooms}&bathrooms=${userInput.bathrooms}&finish_quality=${userInput.finishQuality}&outdoor_space=${userInput.oss}&off_street_parking=${userInput.parking}`,
  ];

  console.log(urls);

  const promises = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );

  return Promise.all(promises);
}

export function processSaleData(data) {
  const processedData = {};
  processedData.average = formatSaleValue(data.result.estimate);
  processedData.minimum = formatSaleValue(
    data.result.estimate - data.result.margin
  );
  processedData.maximum = formatSaleValue(
    data.result.estimate + data.result.margin
  );

  return processedData;
}

export function processRentData(data) {
  const processedData = {};
  processedData.rent = formatRentValue(data.result.estimate);
  return processedData;
}

//helper functions
function formatSaleValue(value) {
  return "£" + value.toLocaleString();
}

function formatRentValue(value) {
  return "£" + value.toLocaleString() + " per week";
}
