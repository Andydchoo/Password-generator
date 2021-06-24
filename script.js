// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = 8;
var uppercase = false;
var lowercase = false;
var numbers = false;
var specialChar = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (document.getElementById('uppercase').checked) {
  uppercase = true;
} else {
    uppercase = false;
}

if (document.getElementById('lowercase').checked) {
  lowercase = true;
} else {
    lowercase = false;
}

if (document.getElementById('numbers').checked) {
  numbers = true;
} else {
    numbers = false;
}

if (document.getElementById('specialChar').checked) {
  specialChar = true;
} else {
    specialChar = false;
}