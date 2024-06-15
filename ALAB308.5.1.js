console.log("Part 1: Thinking Functionally");

// Best Choice:
// The choice depends on the context and audience. If we prefer readability and maintainability, `reverseString` or `reverseString2` might be best. If we want to show fundamental programming techniques or work in an environment where recursion is expected, `reverseString4` or `reverseString5` would be suitable. `reverseString3` is good for explicit control but might be considered verbose.

// Writing Functions for Specific Tasks
// 1. Sum of an Array of Numbers
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 2. Average of an Array of Numbers
function averageArray(numbers) {
  if (numbers.length === 0) return 0; // Avoid division by zero
  return sumArray(numbers) / numbers.length;
}

// 3. Longest String in an Array
function longestString(strings) {
  return strings.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}

// 4. Strings Longer Than a Given Number
function stringsLongerThan(strings, length) {
  return strings.filter((str) => str.length > length);
}

// 5. Print Numbers Between 1 and n Without Loops (Using Recursion)
function printNumbers(n) {
  function print(current) {
    if (current > n) return;
    console.log(current);
    print(current + 1);
  }
  print(1);
}

console.log("\n");
console.log("Part 2: Thinking Methodically");

const people = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Task 1: Sort the Array by Age
console.log("Task 1: Sort the Array by Age");
const sortedByAge = people
  .slice()
  .sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log("Sorted by Age:", sortedByAge);

console.log("\n");

// Task 2: Filter the Array to Remove Entries with Age Greater Than 50
console.log(
  "Task 2: Filter the Array to Remove Entries with Age Greater Than 50"
);
const filteredPeople = people.filter((person) => parseInt(person.age) <= 50);
console.log("Filtered by Age (<= 50):", filteredPeople);

console.log("\n");

// Task 3: Map the Array to Change “Occupation” to “Job” and Increment Every Age by 1
console.log(
  "Task 3: Map the Array to Change “Occupation” to “Job” and Increment Every Age by 1"
);
const mappedPeople = people.map((person) => ({
  id: person.id,
  name: person.name,
  job: person.occupation,
  age: String(parseInt(person.age) + 1),
}));
console.log("Mapped People:", mappedPeople);

console.log("\n");

// Task 4: Calculate the Sum of the Ages Using reduce
console.log("Task 4: Calculate the Sum of the Ages Using reduce");
const totalAge = people.reduce((sum, person) => sum + parseInt(person.age), 0);
console.log("Total Age:", totalAge);

console.log("\n");

// Task 5: Calculate the Average Age
console.log("Task 5: Calculate the Average Age");
const averageAge = totalAge / people.length;
console.log("Average Age:", averageAge.toFixed(2));

console.log("\n");
console.log("Part 3: Thinking Critically");
console.log("Function 1: Increment Age Field of an Object (Modify In-place)");
function incrementAge(obj) {
  // Increment age or set to 0 if not present
  if (obj.hasOwnProperty("age")) {
    obj.age += 1;
  } else {
    obj.age = 0;
  }

  // Update the updated_at field
  obj.updated_at = new Date();
}

// Test the function
const person1 = { id: "42", name: "Bruce", occupation: "Knight" };
incrementAge(person1);
console.log("Modified Object:", person1);

console.log("\n");
console.log(
  "Function 2: Make a Copy of an Object and Increment the Age Field (Without Affecting Original)"
);
function copyAndIncrementAge(obj) {
  const newObj = { ...obj };
  incrementAge(newObj);
  return newObj;
}

// Test the function
const person2 = { id: "42", name: "Bruce", occupation: "Knight" };
const copiedPerson = copyAndIncrementAge(person2);
console.log("Copied Object:", copiedPerson);
console.log("Original Object:", person2);

console.log("\n");
console.log("Thought Experiment: Handling Date Object Modification");
console.log("Example of the Potential Issue:");
const originalDate = new Date();
const copyDate = originalDate; // Both refer to the same object
copyDate.setTime(copyDate.getTime() + 10000); // Modify the date

console.log("Original Date:", originalDate); // Modified date
console.log("Copy Date:", copyDate); // Modified date

console.log("\n");
console.log("Preventing the Issue:");
function safeCopyAndIncrementAge(obj) {
  const newObj = { ...obj };

  if (newObj.hasOwnProperty("age")) {
    newObj.age += 1;
  } else {
    newObj.age = 0;
  }

  // Create a new Date object to avoid reference issues
  newObj.updated_at = new Date();

  return newObj;
}

// Test the function
const person3 = {
  id: "57",
  name: "Bob",
  occupation: "Fry Cook",
  updated_at: new Date(),
};
const modifiedPerson3 = safeCopyAndIncrementAge(person3);
modifiedPerson3.updated_at.setTime(
  modifiedPerson3.updated_at.getTime() + 1000000
);

console.log("Original Object Date:", person3.updated_at);
console.log("Modified Copy Date:", modifiedPerson3.updated_at);

console.log("\n");
console.log("Part 4: Thinking Practically");
