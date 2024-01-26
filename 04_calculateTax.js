function calculateTax() {
  const taxRates = [
    { range: 10000, rate: 0.1 },
    { range: 30000, rate: 0.15 },
    { range: 70000, rate: 0.2 },
    { range: Infinity, rate: 0.25 }
  ];

  return function (income) {
    let tax = 0;

    for (const { range, rate } of taxRates) {
      if (income <= range) {
        tax += income * rate;
        break;
      } else {
        tax += range * rate;
        income -= range;
      }
    }

    return tax;
  };
}

const calculateTaxFunction = calculateTax();

const income1 = 8000;
const income2 = 25000;
const income3 = 50000;
const income4 = 100000;

console.log(`Tax on income $${income1}: $${calculateTaxFunction(income1)}`);
console.log(`Tax on income $${income2}: $${calculateTaxFunction(income2)}`);
console.log(`Tax on income $${income3}: $${calculateTaxFunction(income3)}`);
console.log(`Tax on income $${income4}: $${calculateTaxFunction(income4)}`);
