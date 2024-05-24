// Practical Loops

// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Part 2: Prime Time
function findNextPrime(n) {
  let currentNumber = n + 1;

  while (true) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && currentNumber > 1) {
      console.log(`The next prime number after ${n} is ${currentNumber}`);
      return;
    }

    currentNumber++;
  }
}

findNextPrime(4); // Output: The next prime number after 4 is 5
findNextPrime(9); // Output: The next prime number after 9 is 11

// Part 3: Feeling Loopy
function parseCSV(csvData) {
  const rows = csvData.split("\n");
  const headers = rows[0].split(",");
  const data = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(",");
    const rowData = {};

    for (let j = 0; j < headers.length; j++) {
      rowData[headers[j]] = row[j];
    }

    data.push(rowData);
  }

  return data;
}

const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const parsedData = parseCSV(csvData);

parsedData.forEach((row) => {
  console.log(`${row.ID}, ${row.Name}, ${row.Occupation}, ${row.Age}`);
});

// Part 3: example 2
const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master, 58\n98,Bill,Doctor's Assistant,26";

let cell1, cell2, cell3, cell4;

for (let i = 0; i < csvString.length; i++) {
  if (csvString[i] === ",") {
    // Move to the next cell
    continue;
  } else if (csvString[i] === "\n") {
    // Log the current row
    console.log(cell1, cell2, cell3, cell4);
    // Reset the cells for the next row
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    // Store the current character in the appropriate cell
    if (cell1 === undefined) {
      cell1 = csvString[i];
    } else if (cell2 === undefined) {
      cell2 = csvString[i];
    } else if (cell3 === undefined) {
      cell3 = csvString[i];
    } else if (cell4 === undefined) {
      cell4 = csvString[i];
    }
  }
}

// Log the last row
console.log(cell1, cell2, cell3, cell4);
