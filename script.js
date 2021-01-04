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

// Add event listener to the generate password button
generateBtn.addEventListener("click", writePassword);

// ***********************  function here  ********************************************
// write a function called generatePassword which will have a series of prompts...
function generatePassword() {

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// we have to ask the user how many characters they want in the password

var charAmount = prompt('How many characters would you like your password to have? It must have between 8 and 128 characters.');

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
if (charAmount >= 8 && charAmount <= 128){
  
}


// we need to check to make sure it is between 8 and 128 characters
// otherwise we tell user to fix their input.
if (charAmount < 8){
  alert('Your password must have at least 8 characters. Please try again.');
} else if (charAmount > 128){
  alert('Your password must have fewer than 128 characters. Please try again.');
}

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// confirm if the user wants special characters
  var charSpecial = confirm('Click OK if you want to include special characters.');
// confirm if the user wants numeric characters
  var charNumerical = confirm('Click OK if you want to include numerical characters.');
// confirm if the user wants uppercase
  var charUpper = confirm('Click OK if you want to include uppercase characters.');
// confirm if the user wants lowercase
  var charLower = confirm('Click OK if you want to include lowercase characters.');

  // we need to show an error if they gave us no characters to choose from
  // if no characters are chosen, the user must click the generate password button again (no more code needed).
if (charSpecial == false && charNumerical == false && charUpper == false && charLower == false){
    alert('You must select at least one character type for your password. Please try again.');
  }
}




// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// I'm going to copy these two lines to put before each line of code where I'm slecting a character type.

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// from all the characters chosen, use one randomly and add it to our password x number of times
// ... is this the math.Random

// ***********************  function ends here  ********************************************

