// Assignment Code

var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
// I need a link or button to get a new password
// I need to show the password on the page
// these are already done in the HTML.

// Write password to the #password input

function writePassword() {
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
    passwordText.value = password;
  
  }
// ***********************  function here  ********************************************
// write a function called generatePassword which will have a series of prompts...

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// we have to ask the user how many characters they want in the password
// we need to check to make sure it is between 8 and 128 characters
// otherwise we tell user to fix their input.

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// confirm if the user wants lowercase
// confirm if the user wants uppercase
// confirm if the user wants numeric characters
// confirm if the user wants special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave us no characters to choose from

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// from all the characters chosen, use one randomly and add it to our password x number of times
// ... is this the math.Random

// ***********************  function ends here  ********************************************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);