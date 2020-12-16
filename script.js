// Assignment Code


// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
// confirm if they want lowercase
// confirm if they want uppercase
// confirm if they want numeric
// confirm if they want special characters


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave us no characters to choose from


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// for all the characters chosen, use one randomly and add it to our password x number of times
// 




// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
