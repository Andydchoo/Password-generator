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
  chars = prompt("How many Characters in your password?(Enter 8-128 characters)");
  if (chars < 8) {
    alert("Must have at least 8 Characters.");
    return;
  }
  else if (chars > 128) {
    alert("Cannot have more than 128 characters.");
    return;
  }

  uppercase = confirm("Password contains uppercase letters?(Cancel for no uppercase)");
  lowercase = confirm("Password contains lowercase?(Cancel for no lowercase)");
  numbers = confirm("Password contains numbers?(Cancel for no numbers)");
  specialChar = confirm("Password contains special characters?(Cancel for no special characters)");

  let userInput = {
    chars : chars,
    uppercase : uppercase,
    lowercase : lowercase,
    numbers : numbers,
    specialChar : specialChar
  }
  return userInput;
}


//Begin dumbed down algorithm for generating a password
function generatePassword() {
    var finalPassword = [];
  //Generate random characters from the user's choices
  function getCharacters() {
    for (let i = 0; i < (chars); i++) {
      var placeChar = "";
      if (uppercase == true) {
        placeChar = upperString.charAt(Math.floor(Math.random() * upperString.length));
        finalPassword.push(placeChar);
      }
      if (lowercase == true) {
        placeChar = lowerString.charAt(Math.floor(Math.random() * lowerString.length));
        finalPassword.push(placeChar);
      }
      if (numbers == true) {
        placeChar = numberString.charAt(Math.floor(Math.random() * numberString.length));
        finalPassword.push(placeChar);
      }
      if (specialChar == true) {
        placeChar = specialString.charAt(Math.floor(Math.random() * specialString.length));
        finalPassword.push(placeChar);
      }
      i++;
    } 
  } //Make the password same length as user desired
  getCharacters();
for (y = finalPassword.length; y > chars; y--) {
  finalPassword.pop();
  } //Convert the password array into a string
let stringPassword = finalPassword;
return stringPassword.join("");
}