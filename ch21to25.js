// // ---------------------------------------------chapters 21-25 STRING METHODS----------------------------------------------------------------------------

//Question:1
// Prompt the user to enter their first name
let first = prompt("Enter your first name:");

// Prompt the user to enter their last name
let last = prompt("Enter your last name:");

// Merge the first name and last name into a new variable fullName
let full = first+ " " + last;

// Greet the user using their full name
document.write("Hello, " + full + "!"+'<br>'+"Welcome!");


//Question:2
// Prompt the user to enter their favorite mobile phone model
var favoriteModel = prompt("Please enter your favorite mobile phone model:");

// Check if the input is not null or empty
if (favoriteModel) {
    // Calculate the length of the input
    var length = favoriteModel.length;

    // Display the length in an alert box
    alert("The length of your input is: " + length);
} else {
    // Handle the case where the input is empty
    alert("You did not enter a mobile phone model.");
}

//Question:3

// The word to search in
let woRd = "Pakistani";

// Finding the index of 'n' in the word
let index = woRd.indexOf('n');

// Displaying the result in an alert box
if (index !== -1) {
    document.write("The index of 'n' in 'Pakistani' is: " + index);
} else {
    alert("The letter 'n' is not found in 'Pakistani'.");
}

//Question:4
let phrase = "Hello World";

    // Finding the last index of 'l' in the phrase
    let lastIndex = phrase.lastIndexOf('l');

    // Displaying the result in an alert box
    if (lastIndex !== -1) {
        document.write("The last index of 'l' in 'Hello World' is: " + lastIndex);
    } else {
        alert("The letter 'l' is not found in 'Hello World'.");
    }


    //Question:5
let word = "Pakistani";

// Finding the character at the 3rd index
let character = word.charAt(3);

// Displaying the result in an alert box
if (character) {
    alert("The character at the 3rd index in 'Pakistani' is: " + character);
} else {
    alert("There is no character at the 3rd index in 'Pakistani'.");
}

//Question:6

// Prompt the user for their first name
var firstName = prompt("Please enter your first name:");

// Prompt the user for their last name
var lastName = prompt("Please enter your last name:");

// Concatenate the first and last name using the concat() method
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "!");

//Question:7
// Original word
let city = "Hyderabad";

// Replace 'Hyder' with 'Islam'
let updatedCity = city.replace("Hyder", "Islam");

// Display the result in an alert box
alert("The updated city name is: " + updatedCity);


//Question:8

// The original message
let message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of 'and' with '&'
let updatedMessage = message.replace(/and/g, "&");

// Display the result in an alert box
alert(updatedMessage);


//Question:9
// Define the string
let stringNumber = "472";

// Convert the string to a number
let convertedNumber = Number(stringNumber);

// Display the value and type in an alert
alert("Value: " + convertedNumber + "\nType: " + typeof convertedNumber);

// //Question:10
// Prompt the user for input
let userput = prompt("Enter your text:");

// Convert the input to uppercase
let capitalizedText = userput.toUpperCase();

// Display the capitalized text
alert("Capitalized Text: " + capitalizedText);

// //Question:11

// Prompt the user for input
let useRInput = prompt("Enter your text:");

// Convert the input to title case
let titleCaseText = useRInput.toLowerCase().replace(/\b\w/g, function(match) {
    return match.toUpperCase();
});

// Display the title case text
alert( titleCaseText);

//Question:12
// Define the variable
let num = 35.36;

// Convert the number to a string and remove the dot
let numString = num.toString().replace(".", "");

// Display the result in an alert
alert("Result: " + numString);

//Question:13

// Prompt the user for a username
let username = prompt("Enter your username:");

// Check if the username contains any special symbols
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    // Prompt the user to enter a valid username
    alert("Please enter a valid username without special symbols [@, ., , !]");
} else {
    // Display the username if it's valid
    alert("Username: " + username);
}

//Question:14

// Define the array
let items = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
let userIn = prompt("Enter item to search:");

// Perform case-insensitive search
let found = false;
for (let i = 0; i < items.length; i++) {
    if (userIn.toLowerCase() === items[i].toLowerCase()) {
        found = true;
        break;
    }
}

// Inform the user about the availability of the item
if (found) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("No, '" + userInput + "' is not found in the list.");
}


//Question:15
let password = prompt("Enter your password:");

// Check if the password meets the requirements
let containsAlphabets = /[a-zA-Z]/.test(password);
let containsNumbers = /[0-9]/.test(password);
let startsWithAlphabet = /^[a-zA-Z]/.test(password);
let isAtLeastSixCharactersLong = password.length >= 6;

// Check if the password meets all requirements
if (containsAlphabets && containsNumbers && startsWithAlphabet && isAtLeastSixCharactersLong) {
    alert("Password is valid.");
} else {
    alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
}

//Question:16
let university = "University of Karachi";

// Convert the string to an array using split method
let universityArray = university.split(" ");

// Display the elements of the array in the browser
console.log("Array Elements: " + universityArray.join(" "));

//Question:17

// Prompt the user for input
let userInput = prompt("Enter a string:");

// Check if the user input is not empty
if (userInput !== null && userInput !== "") {
    // Get the last character of the user input
    let lastCharacter = userInput[userInput.length - 1];

    // Display the last character
    alert("Last character: " + lastCharacter);
} else {
    alert("Invalid input. Please enter a non-empty string.");
}

//Question:18

//Define the string
let sentence = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase for case-insensitive comparison
let lowercaseSentence = sentence.toLowerCase();

// Define the word to search for
let wordToSearch = "the";

// Split the sentence into words
let words = lowercaseSentence.split(" ");

// Count the number of occurrences of the word "the"
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
        count++;
    }
}

// Display the number of occurrences of the word "the"
alert("Number of occurrences of 'the': " + count);