// Question:1
let city = prompt("Please enter your city name:");


if (city.toLowerCase() === "karachi") {

    alert("Welcome to city of lights");
} else {

    alert("Welcome to " + city);
}


//Question:2
let gender = prompt("Please enter your gender (male/female):");
if (gender.toLowerCase() === "male") {

    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {

    alert("Good Morning Ma'am.");
} else {
    alert("Invalid input. Please enter 'male' or 'female'.");}

// Question:3
// Prompt the user to enter the signal color
let signalColor = prompt("Please enter the any traffic signal color (Red, Yellow, Green):");
if (signalColor.toLowerCase() === "red") {
    // Display message for red signal
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    // Display message for yellow signal
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    // Display message for green signal
    alert("Move now");
} else {
    // Display a message for invalid input
    alert("Invalid input. Please enter 'Red', 'Yellow', or 'Green'.");
}

// Question:4

// Prompt the user to enter the remaining fuel in liters
let remainingFuel = prompt("Please enter the remaining fuel in your car (in liters):");
remainingFuel = parseFloat(remainingFuel);
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else if(remainingFuel < 2) {
    alert("Please refill the fuel after 3km your car");
}


// Question:5 
// a. Variable a
let a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// Output: The alert message will be displayed.

// b. Variable b
let b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
// Output: The alert message will not be displayed.

// c. Variable c
let c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
// The alert message "condition 1 is true" will not be displayed.

if (c === 13){
    alert("condition 2 is true");
}
// The alert message "condition 2 is true" will be displayed.
if (++c < 14){
    alert("condition 3 is true");
}
// The alert message "condition 3 is true" will not be displayed.
if(c === 14){
    alert("condition 4 is true");
}
// The alert message "condition 4 is true" will be displayed.

// d. Total cost

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// Output: The alert message "The cost equals" will be displayed.

// e. Variable e
if (true){
    alert("True");
}
if (false){
    alert("False");
}

// f. Variable f
if("car" < "cat"){
    alert("car is smaller than cat");
}
// Output: The alert message "car is smaller than cat" will be displayed.


//Question:6

// Total marks for all subjects
const totalMarks = 300;

// Taking input from user for marks obtained
const marksObtained = parseInt(prompt("Enter marks obtained in subjects:",300));


// Calculating percentage
const percentage = (marksObtained / totalMarks) * 100;

// Initializing grade and remarks
let grade;
let remarks;

// Determining grade and remarks based on percentage
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Displaying results
document.write("<h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

// Question:07
// Guess game:Store the secret number (ranging from 1 to 10)
var secretNumber = 5;

// Prompt the user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check the user's guess
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}

// Question:08

// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
} else {
    alert("The number " + number + " is not divisible by 3.");
}

// Question:09

// Prompt the user to enter a number
var number = +prompt("Enter a number to check if it is even or odd:");

// Check if the number is even or odd
if (number % 2 === 0) {
    alert("The number " + number + " is even.");
} else {
    alert("The number " + number + " is odd.");
}

// Question:10

//  Prompt the user to enter the temperature
 let temperature = +prompt("Enter the temperature:");

 // Check the temperature and display
 if (temperature > 40) {
     alert("It is too hot outside.");
 } else if (temperature > 30) {
     alert("The Weather today is Normal.");
 } else if (temperature > 20) {
     alert("Today's Weather is cool.");
 } else if (temperature > 10) {
     alert("OMG! Today's weather is so Cool.");
 } else {
     alert("It's really cold outside!");
 }

// Question:11

// Prompt the user to enter the first number
let firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
let secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation (+, -, *, /, %)
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Variable to store the result
let result;

// Perform the calculation based on the operation
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation. Please refresh and try again.");
}

// Display the result if the operation was valid
if (result !== undefined) {
    alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
}