console.log("@_____");
console.log("Part 1: Refactoring Old Code");

// 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}
console.log("@_____");

// 2: Prime Time
function findNextPrime(n) {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let currentNumber = n + 1;
  while (!isPrime(currentNumber)) {
    currentNumber++;
  }

  console.log(`The next prime number after ${n} is ${currentNumber}`);
  return currentNumber;
}

findNextPrime(4); // Output: The next prime number after 4 is 5
findNextPrime(9); // Output: The next prime number after 9 is 11

console.log("@_____");

// 3: Feeling Loopy
const csvString = `
ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor's Assistant,26
`.trim();

function parseCSV(csvString) {
  const rows = csvString.split("\n");
  const headers = rows[0].split(",");

  return rows.slice(1).map((row) => {
    const values = row.split(",");
    return headers.reduce((acc, header, index) => {
      acc[header] = values[index];
      return acc;
    }, {});
  });
}

const parsedData = parseCSV(csvString);

parsedData.forEach((row) => {
  console.log(`${row.ID}, ${row.Name}, ${row.Occupation}, ${row.Age}`);
});

console.log("@_____");
console.log("Part 2: Expanding Functionality");

const csvString2 = `
ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor's Assistant,26
`.trim();

function parseCSV2(csvString2) {
  // Split the CSV string into rows
  const rows = csvString2.split("\n");

  // Determine the number of columns based on the header row
  const headers = rows[0].split(",");
  const numberOfColumns = headers.length;

  // Initialize the two-dimensional array with the headers
  const data = [headers];

  // Process each row after the header
  rows.slice(1).forEach((row) => {
    const columns = row.split(",");

    // Ensure the row has the correct number of columns
    if (columns.length !== numberOfColumns) {
      console.error(`Row has an incorrect number of columns: ${row}`);
      return;
    }

    data.push(columns);
  });

  return data;
}

const parsedData2 = parseCSV2(csvString2);

// Output the two-dimensional array
console.log(parsedData2);

// Verify the structure
parsedData2.forEach((row) => {
  console.log(row);
});

console.log("@_____");
console.log("Part 3: Transforming Data");

const csvString3 = `
ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor's Assistant,26
`.trim();

// Parse CSV to a Two-Dimensional Array
function parseCSV3(csvString3) {
  const rows = csvString3.split("\n");
  const headers = rows[0].split(",");
  const data = [headers];
  rows.slice(1).forEach((row) => {
    data.push(row.split(","));
  });
  return data;
}

const parsedData3 = parseCSV3(csvString3);

// Transform Rows into Objects
function transformToObjects(data) {
  // Extract headers and convert them to lowercase
  const headers = data[0].map((header) => header.toLowerCase());

  // Create an array to store objects
  const objectsArray = [];

  // Iterate over each row of data, starting from the first data row
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const rowObject = {};

    // Map each column value to the corresponding header
    headers.forEach((header, index) => {
      rowObject[header] = row[index];
    });

    objectsArray.push(rowObject);
  }

  return objectsArray;
}

const transformedData = transformToObjects(parsedData3);

// Output the transformed data
console.log(transformedData);

console.log("@_____");
console.log("Part 4: Sorting and Manipulating Data");
// const transformedData = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" },
// ];

// Step 1: Remove the last element
transformedData.pop();

// Step 2: Insert object at index 1
transformedData.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

// Step 3: Add object to the end
transformedData.push({
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111",
});

// Log the modified array to verify the changes
console.log(transformedData);

// Step 4: Calculate the average age
let totalAge = 0;
transformedData.forEach((row) => {
  totalAge += parseInt(row.age);
});

const averageAge = totalAge / transformedData.length;
console.log("Average Age:", averageAge);

console.log("@_____");
console.log("Part 5: Full Circle");
function arrayToCSV(dataArray) {
  if (dataArray.length === 0) {
    return "";
  }

  // Extract headers
  const headers = Object.keys(dataArray[0]);

  // Create the header row
  const csvRows = [];
  csvRows.push(headers.join(","));

  // Create the data rows
  for (const row of dataArray) {
    const values = headers.map((header) => {
      const escapeValue = row[header].replace(/"/g, '""'); // Escape double quotes
      return `"${escapeValue}"`; // Enclose values in double quotes for safety
    });
    csvRows.push(values.join(","));
  }

  // Combine rows into a single string
  return csvRows.join("\n");
}

const csvOutput = arrayToCSV(transformedData);
console.log(csvOutput);
