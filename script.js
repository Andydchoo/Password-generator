// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = 8;
var uppercase = false;
var lowercase = false;
var numbers = false;
var specialChar = false;
var lowerString = "abcdefghijklmnopqrstuvwxyz"
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "0123456789";
var specialString = "!@#$%^&*?";
var finalPassword = [];

// Write password to the #password input
function writePassword() {
  settings();
  finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start a series of prompts asking for user's input on how they want their pswd
function settings() {
  chars = prompt("How many Characters in your password?", "Enter a number 8-128");
  if (chars < 8) {
    alert("Must have at least 8 Characters.");
    return;
  }
  else if (chars > 128) {
    alert("Cannot have more than 128 characters.");
    return;
  }

  uppercaseBox = confirm("Password contains uppercase letters?(Cancel for no uppercase)");
  lowercaseBox = confirm("Password contains lowercase?(Cancel for no lowercase)");
  numbersBox = confirm("Password contains numbers?(Cancel for no numbers)");
  specialCharBox = confirm("Password contains special characters?(Cancel for no special characters)");

let userInput = {
  chars : chars,
  uppercaseBox : uppercaseBox,
  numbersBox : numbersBox,
  specialCharBox : specialCharBox
}
  return userInput;
}

//Begin dumbed down algorithm for generating a password
function generatePassword() {

  //Generate random characters from the user's choices
  function getCharacters() {
  for (let i = 0; i < (chars / 4); i++) {
  var placeChar;
  if (uppercase == true) {
    placeChar += upperString.charAt(Math.floor(Math.random() * upperString.length));
    return finalPassword.push(placeChar);
  } else {

  }
  if (lowercase == true) {
    placeChar += upperString.charAt(Math.floor(Math.random() * upperString.length));
    return finalPassword.push(placeChar);
  } else {

  }
  if (numbers == true) {
    placeChar += numberString.charAt(Math.floor(Math.random() * numberString.length));
    return finalPassword.push(placeChar);
  } else {

  }
  if (specialChar == true) {
    placeChar += specialString.charAt(Math.floor(Math.random() * specialString.length));
    return finalPassword.push(placeChar);
  } else {

  }
  i++;
  }
} //Make the password same length as user desired
for (y = finalPassword.length; y > chars; y--) {
  finalPassword.pop();
} //Convert the password array into a string
finalPassword.toString();
}