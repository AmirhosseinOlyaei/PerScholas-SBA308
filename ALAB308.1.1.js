// Data Manipulation with JavaScript

// Part 1: Math Problems
// Example validation code
const n1 = 10;
const n2 = 15;
const n3 = 5;
const n4 = 20;

const isValid =
  n1 + n2 + n3 + n4 === 50 &&
  (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0 || n4 % 2 !== 0) &&
  n1 <= 25 &&
  n2 <= 25 &&
  n3 <= 25 &&
  n4 <= 25 &&
  n1 !== n2 &&
  n1 !== n3 &&
  n1 !== n4 &&
  n2 !== n3 &&
  n2 !== n4 &&
  n3 !== n4;

console.log(
  `The four numbers are valid according to the provided criteria: ${isValid}.`
);

// Implement the following:
// Check if all numbers are divisible by 5. Cache the result in a variable.
const allDivisibleBy5 =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`All numbers divisible by 5: ${allDivisibleBy5}`);

// Check if the first number is larger than the last. Cache the result in a variable.
const firstLargerThanLast = n1 > n4;
console.log(`The first number is larger than the last: ${firstLargerThanLast}`);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arithmeticChainResult = ((n2 - n1) * n3) % n4;
console.log(`Result of the arithmetic chain: ${arithmeticChainResult}`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!).
const isUnder25 = (n) => n <= 25;
const areAllUnder25 =
  isUnder25(n1) && isUnder25(n2) && isUnder25(n3) && isUnder25(n4);
console.log(`All numbers are 25 or under: ${areAllUnder25}`);

// Part 2: Practical Math

// Constants
const totalDistance = 1500; // miles
const fuelEfficiency55 = 30; // mpg
const fuelEfficiency60 = 28; // mpg
const fuelEfficiency75 = 23; // mpg
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars per gallon

// Calculate fuel requirements and costs
const fuelNeeded55 = totalDistance / fuelEfficiency55;
const fuelNeeded60 = totalDistance / fuelEfficiency60;
const fuelNeeded75 = totalDistance / fuelEfficiency75;

const fuelCost55 = fuelNeeded55 * fuelCostPerGallon;
const fuelCost60 = fuelNeeded60 * fuelCostPerGallon;
const fuelCost75 = fuelNeeded75 * fuelCostPerGallon;

const budgetSufficient55 = fuelCost55 <= fuelBudget;
const budgetSufficient60 = fuelCost60 <= fuelBudget;
const budgetSufficient75 = fuelCost75 <= fuelBudget;

const timeAt55 = totalDistance / 55;
const timeAt60 = totalDistance / 60;
const timeAt75 = totalDistance / 75;

// Log results
console.log(`At 55 mph: 
Fuel needed: ${fuelNeeded55.toFixed(2)} gallons
Fuel cost: $${fuelCost55.toFixed(2)}
Budget sufficient: ${budgetSufficient55}
Trip time: ${timeAt55.toFixed(2)} hours`);

console.log(`At 60 mph: 
Fuel needed: ${fuelNeeded60.toFixed(2)} gallons
Fuel cost: $${fuelCost60.toFixed(2)}
Budget sufficient: ${budgetSufficient60}
Trip time: ${timeAt60.toFixed(2)} hours`);

console.log(`At 75 mph: 
Fuel needed: ${fuelNeeded75.toFixed(2)} gallons
Fuel cost: $${fuelCost75.toFixed(2)}
Budget sufficient: ${budgetSufficient75}
Trip time: ${timeAt75.toFixed(2)} hours`);

// Determine the most practical speed
const mostPracticalSpeed = budgetSufficient55
  ? "55 mph"
  : budgetSufficient60
  ? "60 mph"
  : budgetSufficient75
  ? "75 mph"
  : "none, increase your budget";

console.log(`The most practical speed for your trip is: ${mostPracticalSpeed}`);
