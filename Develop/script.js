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
  var lengthPassword = parseInt(prompt("Please select your password length, it must be between 8-128 characters"));
  var wantSpecialCharacter = confirm("Do you want a special character?");
  var wantLowerCase = confirm("Do you want a lowercase character?");
  var wantUpperCase = confirm("Do you want an uppercase character?");
  var wantNumbers = confirm("Do you want a number?");

  // This is my list of characters 

  var characters = ["!@#$%^&*", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890"];

  // My if statements mean that if they select one of the below, it will add that character to what can be used in password
  var masterString = ""

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
  
  console.log(masterString)
// Final password is made using randomly selected characters from length of master string above
  var finalPassword = ""
  
  for (var i = 0; i < lengthPassword; i++) {
    finalPassword += masterString.charAt (Math.floor(Math.random() * masterString.length))
  }
// the return is telling our function what the end result is based on the selections 
  return finalPassword
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

