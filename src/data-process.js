const saleResult = {
  result: 390000,
  margin: 20000,
};

const rentalResult = {
  estimate: 3332,
  unit: "gbp_per_week",
};

export default function processData() {
  const processedData = {};
  processedData.average = formatSaleValue(saleResult.result);
  processedData.minimum = formatSaleValue(
    saleResult.result - saleResult.margin
  );
  processedData.maximum = formatSaleValue(
    saleResult.result + saleResult.margin
  );
  processedData.rent = formatRentValue(rentalResult.estimate);

  return processedData;
}

//helper functions
function formatSaleValue(value) {
  return "£" + value.toLocaleString();
}

function formatRentValue(value) {
  return "£" + value.toLocaleString() + " per week";
}
