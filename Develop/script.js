// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This is my prompts for the password
function generatePassword() {
  alert ("Please choose your password criteria from the following");
  var lengthPassword = prompt("Please select your password length, it must be between 8-128 characters");
  var wantSpecialCharacter = confirm("Do you want a special character?");
  var wantLowerCase = confirm("Do you want a lowercase character?");
  var wantUpperCase = confirm("Do you want an uppercase character?");
  var wantNumbers = confirm("Do you want a number?");

  // This is my list of characters 

  var characters = ["!@#$%^&*", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890"];

  // This is my if/else options

  if (wantSpecialCharacter) {
    masterString += characters[0];
  }
  if (wantLowerCase) {
    masterString += characters[1];
  }
  if (wantUpperCase) {
    masterString += characters[2];
  }
  if (wantNumbers) {
    masterString += characters[3]
  }
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

