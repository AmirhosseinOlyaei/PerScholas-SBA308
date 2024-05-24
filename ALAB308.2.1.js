// Control Flow

// Part 1: Growing Pains
const PI = 3.1415;
const radius = 5;
const areaPerPlant = 0.8;
let plantCount = 20;

// Calculate the area of a circle given its radius
function calculateArea(radius) {
  return PI * radius * radius;
}

// Predict plant growth based on the number of weeks and initial plant count
function predictPlantGrowth(weeks, initialPlantCount = plantCount) {
  let currentArea = calculateArea(radius);
  let maxPlants = Math.floor((currentArea / areaPerPlant) * 0.8);

  for (let i = 1; i <= weeks; i++) {
    let newPlantCount = initialPlantCount * 2;

    if (newPlantCount > maxPlants) {
      console.log(`Week ${i}: Prune the plants`);
      initialPlantCount = maxPlants;
    } else if (newPlantCount > maxPlants * 0.5 && newPlantCount <= maxPlants) {
      console.log(`Week ${i}: Monitor the plants`);
      initialPlantCount = Math.floor(newPlantCount);
    } else {
      console.log(`Week ${i}: Plant more plants`);
      initialPlantCount = newPlantCount;
    }
  }
}

// Results for 1, 2, and 3 weeks of growth
predictPlantGrowth(1);
predictPlantGrowth(2);
predictPlantGrowth(3);

// Part 2: Thinking Bigger
// Calculate the additional space required and the expanded radius after a certain number of weeks with a given initial plant count
function calculateRequiredArea(weeks, initialPlants) {
  if (typeof weeks !== "number" || weeks <= 0) {
    throw new Error("Invalid number of weeks");
  }
  if (typeof initialPlants !== "number" || initialPlants <= 0) {
    throw new Error("Invalid initial plant count");
  }
  let currentPlantCount = initialPlants;
  for (let i = 1; i <= weeks; i++) {
    currentPlantCount *= 2;
  }
  return currentPlantCount * areaPerPlant;
}

// Calculate the radius of a circle given its area
function calculateExpandedRadius(requiredArea) {
  if (typeof requiredArea !== "number" || requiredArea <= 0) {
    throw new Error("Invalid required area");
  }
  return Math.sqrt(requiredArea / PI);
}

// Calculate additional space required and expanded radius after 10 weeks with 100 plants
let additionalSpaceRequired;
let expandedRadius;
try {
  additionalSpaceRequired =
    calculateRequiredArea(10, 100) - calculateArea(radius);
  expandedRadius = calculateExpandedRadius(
    calculateArea(radius) + additionalSpaceRequired
  );
  console.log(
    `Additional space required after 10 weeks with 100 plants: ${additionalSpaceRequired.toFixed(
      2
    )} sqm`
  );
  console.log(
    `Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`
  );
} catch (error) {
  console.log(error.message);
}

// Part 3: Errors in Judgement
// Handle errors in judgement if not enough space is available for the plants
try {
  let plantCountError = 100;
  let requiredAreaError = calculateRequiredArea(10, plantCountError);
  if (requiredAreaError > calculateArea(radius)) {
    throw new Error("Not enough space for the plants");
  }
} catch (error) {
  console.log(error.message);
}
