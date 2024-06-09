// // ---------------------------------------------chapters 14-16 ARRAYS ----------------------------------------------------------------------------

// Question:1

// Declare an empty array to store student names
var studentNames = [];
// Adding student names to the array
studentNames.push('Ali');
studentNames.push('Usman');

// Display the array contents
console.log(studentNames);



// Question:2

// Declare an empty array using the Array constructor
let studentNames = new Array();

// Add student names to the array in the future
studentNames.push("Alice");
studentNames.push("Bob");
studentNames.push("Charlie");
console.log(studentNames);


// Question:3

// Declare and initialize a strings array
let studentNames = ["Noor", "Sana", "Ali"];

// Access and log the elements of the array
console.log(studentNames[0]);
console.log(studentNames[1]);
console.log(studentNames[2]);


// Question:4

// Declare and initialize a numbers array
let numbers = [1, 2, 3, 4, 5];

// Access and log the elements of the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// // Question:5

// Declare and initialize a boolean array
let booleanValues = [true, false, true, false, true];

// Access and log the elements of the array
console.log(booleanValues[0]);
console.log(booleanValues[1]);
console.log(booleanValues[2]);
console.log(booleanValues[3]);
console.log(booleanValues[4]);

// Question:6

// Declare and initialize a mixed array
let mixedArray = ["Rabia", 42, true, [1, 2, 3]];

// Access and log the elements of the array
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);

// Question:7

let qualifications = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM", "6) MS", "7) M. Phil.", "8) PhD"];
console.log(qualifications[0]);
console.log(qualifications[1]);
console.log(qualifications[2]);
console.log(qualifications[3]);
console.log(qualifications[4]);
console.log(qualifications[5]);
console.log(qualifications[6]);
console.log(qualifications[7]);

// Question:8
// Arrays to store student names and scores
var studentNames = ["Michael", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;
// Function to calculate the percentage
function calculatePercentage(score) {
    return (score / totalMarks) * 100;
}

// Get the student name from the user
var studentNameInput = prompt('Enter the name of the student to display the score and percentage:');

// Find the index of the student in the array
var index = studentNames.indexOf(studentNameInput);

// Check if the student is found
if (index !== -1) {
    let percentage = calculatePercentage(studentScores[index]);
    let total = `Score of ${studentNameInput} is ${studentScores[index]}. Percentage: ${percentage.toFixed(2)}%`;
    document.write(total + '<br>'); // Correct usage of document.write
} else {
    document.write('Student not found.');
}

Question: 9

var colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

// Display initial array

// a. Ask user to add a color to the beginning of the array
var colorToAddStart = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddStart);

// b. Ask user to add a color to the end of the array
var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddEnd);

// c. Add two more colors to the beginning of the array
colors.unshift("Orange", "Pink");

// d. Delete the first color in the array
colors.shift();

// e. Delete the last color in the array
colors.pop();

// f. Ask user for an index and a color to add at that index
var indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
var colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
if (indexToAdd >= 0 && indexToAdd <= colors.length) {
    colors.splice(indexToAdd, 0, colorToAddAtIndex);
}

// g. Ask user for an index and number of colors to delete from that index
var indexToDelete = parseInt(prompt("Enter the index from where you want to delete colors:"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
if (indexToDelete >= 0 && indexToDelete < colors.length) {
    colors.splice(indexToDelete, numberOfColorsToDelete);
}

// Question:10

// Define the array with student scores
let studentScores = [320, 230, 480, 120];

// Sort the array in ascending order
studentScores.sort((a, b) => a - b);

// Print the ordered scores
console.log("Scores of Students: " + studentScores);

// Question:11

// Step 1: Initialize the array with city names
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

// Step 2: Select three elements from the array
const selectedCities = cities.slice(1, 4);

// Display the result
console.log(selectedCities);

Question: 12

// Array of strings
let arr = ["This ", " is ", " my ", " cat"];
let resultString = arr.join('');

// Output the result
console.log(resultString);


// Question:13
// Define the array with devices
let devices = ["keyboard", "mouse", "printer", "monitor"];

// Process the devices in FIFO order using a for loop
for (let i = 0; i < devices.length; i++) {
    // Print the device
    console.log("Out:");
    console.log(devices[i]);
}


//Question:14

// Define the array with devices
let device = ["keyboard", "mouse", "printer", "monitor"];

// Process the devices in LIFO order using a for loop
for (let i = device.length - 1; i >= 0; i--) {
    // Print the device
    console.log("Out:");
    console.log(device[i]);
}

//Question:15
// Array containing phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Using document.write() to create the dropdown menu
document.write("<select name='phoneManufacturers'>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}
document.write("</select>");
