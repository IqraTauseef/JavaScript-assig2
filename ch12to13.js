// // ---------------------------------------------IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS--------------------------------------------------------


// Question:1
// Prompt the user to enter a single character
let text = prompt("Enter a single character:");

// Check if input is a single character
if (text.length !== 1) {
    alert("Input should be a single character.");
} else {
    // Get the ASCII code of the input character
    let asciiCode = text.charCodeAt(0);

    // Check if it's a number (0-9)
    if (asciiCode >= 48 && asciiCode <= 57) {
        alert("The input is a number.");
    }
    // Check if it's an uppercase letter (A-Z)
    else if (asciiCode >= 65 && asciiCode <= 90) {
        alert("The input is an uppercase letter.");
    }
    // Check if it's a lowercase letter (a-z)
    else if (asciiCode >= 97 && asciiCode <= 122) {
        alert("The input is a lowercase letter.");
    }
    // If it's none of the above
    else {
        alert("The input is neither a number, uppercase letter, nor lowercase letter.");
    }
}

// Question:2

// Prompt the user to enter the first integer
let firstNumber = parseInt(prompt("Enter the first integer:"));

// Prompt the user to enter the second integer
let secondNumber = parseInt(prompt("Enter the second integer:"));

// Check if both numbers are equal
if (firstNumber === secondNumber) {
    alert("Both integers are equal: " + firstNumber);
} else if (firstNumber > secondNumber) {
    // If the first number is larger
    alert("The larger integer is: " + firstNumber);
} else {
    // If the second number is larger
    alert("The larger integer is: " + secondNumber);
}


// Question:3

// Prompt the user to enter a number
let number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}


//Question:4

// Prompt the user to enter a single character
let input = prompt("Enter a single character:");

// Check if the input is a single character
if (input.length !== 1) {
    alert("Input should be a single character.");
} else {
    // Convert the input to lowercase to handle both uppercase and lowercase vowels
    var character = input.toLowerCase();

    // Check if the character is a vowel
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        alert(true);
    } else {
        alert(false);
    }
}

//Question:5

const correctPassword = "123";

// b. Asks user to enter his/her password
const userPassword = prompt("Please enter your password:");

// c. Validate the two passwords:
if (userPassword === null || userPassword === "") {
    // i. Check if user has entered password.
    alert("Please enter your password");
} else {
    // ii. Check if both passwords are same.
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password");
    } else {
        alert("Incorrect password");
    }
}

//Question:6

let greeting = prompt("What time is it?");
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); // Output: Good day

//Question:7

let timeInput = prompt("Enter time in 24-hour format (e.g., 1900):");

// Ensure the input is a number and within the valid range
if (isNaN(timeInput) || timeInput.length !== 4 || timeInput < 0 || timeInput > 2359) {
    alert("Invalid time. Please enter a valid time in 24-hour format (e.g., 1900).");
} else {
    // Extract hours and minutes from the input
    let hours = parseInt(timeInput.substring(0, 2));
    let minutes = parseInt(timeInput.substring(2, 4));
    let period = "AM";
    let formattedHours;

    // Convert to 12-hour format
    if (hours >= 0 && hours < 12) {
        if (hours === 0) {
            formattedHours = 12; // Midnight case
        } else {
            formattedHours = hours;
        }
    } else if (hours === 12) {
        period = "PM"; // Noon case
        formattedHours = 12;
    } else if (hours > 12 && hours <= 23) {
        period = "PM";
        formattedHours = hours - 12;
    }

    // Format the minutes to always be two digits
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    // Display the formatted time
    alert("The time in 12-hour format is: " + formattedHours + ":" + formattedMinutes + " " + period);
}
