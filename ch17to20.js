// ---------------------------------------------chapters 17-20 ARRAYS AND LOOP ----------------------------------------------------------------------------

//Question:1
// Declare an empty multidimensional array
let multiArray = [];

// Initialize the array with some sub-arrays
multiArray[0] = [];
multiArray[1] = [];
multiArray[2] = [];

// Example: Adding elements to the sub-arrays
multiArray[0].push(1, 2, 3);
multiArray[1].push(4, 5);
multiArray[2].push(6, 7, 8, 9);

console.log(multiArray);

//Question:2

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log("Element at row 0, column 1: " + matrix[0][1]);
console.log("Element at row 1, column 0: " + matrix[0][3]);
console.log("Element at row 2, column 2: " + matrix[2][1]);

//Question:3
for (let i = 1; i <= 10; i++) {
    document.write(i+ "<br>");
}

//Question:4

let tableNumberInput = prompt("Enter the number for multiplication table:");
let tableLengthInput = prompt("Enter the length of the multiplication table:");

// Parsing input as numbers
let tableNumber = Number(tableNumberInput);
let tableLength = Number(tableLengthInput);

// Checking if the inputs are valid numbers
if (Number.isNaN(tableNumber) || Number.isNaN(tableLength)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    // Printing the multiplication table
    console.log("Multiplication table for " + tableNumber + ":");
    for (let i = 1; i <= tableLength; i++) {
        console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
    }
}

//Question:5

// Array containing fruits
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Using a for loop to iterate through the fruits array and print each fruit
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Question:6

 // Counting
 document.write("<h3>Counting:</h3>");
 for (let i = 1; i <= 15; i++) {
     document.write(i + (i < 15 ? ", " : ""));
 }
 document.write("<br><br>");

 // Reverse Counting
 document.write("<h3>Reverse Counting:</h3>");
 for (let i = 10; i >= 1; i--) {
     document.write(i + (i > 1 ? ", " : ""));
 }
 document.write("<br><br>");

 // Even Numbers
 document.write("<h3>Even:</h3>");
 for (let i = 0; i <= 20; i += 2) {
     document.write(i + (i < 20 ? ", " : ""));
 }
 document.write("<br><br>");

 // Odd Numbers
 document.write("<h3>Odd:</h3>");
 for (let i = 1; i < 20; i += 2) {
     document.write(i + (i < 19 ? ", " : ""));
 }
 document.write("<br><br>");

 // Series
 document.write("<h3>Series:</h3>");
 for (let i = 2; i <= 20; i += 2) {
     document.write(i + "k" + (i < 20 ? ", " : ""));
 }
 document.write("<br><br>");


//Question:7
// Array of items
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// Prompt the user for input
const userInput = prompt("Enter the item you want to search for:");

// Check if the item is in the array
if (A.includes(userInput.toLowerCase())) {
    alert(userInput + " is found in the list.");
} else {
    alert(userInput + " is not found in the list.");
}

//Question:8
let B= [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number, assuming the first number is the largest
let largestNumber = B[0];

// Loop through the array to compare each element with the current largest number
for (let i = 1; i < B.length; i++) {
    if (B[i] > largestNumber) {
        largestNumber = B[i];
    }
}

// Output the largest number
console.log("The largest number in the array is: " + largestNumber);

Question:9
// Given array
let small = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number, assuming the first number is the smallest
let smallestNumber = small[0];

// Loop through the array to compare each element with the current smallest number
for (let i = 1; i < small.length; i++) {
    if (small[i] < smallestNumber) {
        smallestNumber = small[i];
    }
}

// Output the smallest number
console.log("The smallest number in the array is: " + smallestNumber);

//Question:10

// Using a for loop to iterate from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of 5
    if (i % 5 === 0) {
        console.log(i);
    }
}