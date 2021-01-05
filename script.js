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
// write a function called generatePassword which will have a series of prompts for user input
function generatePassword() {

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Asking the user how many characters they want in their password.
var charAmount = prompt('How many characters would you like your password to have? It must have between 8 and 128 characters.');

// Confirming if user wants special characters.
var charSpecial = confirm('Click OK if you want to include special characters.');
// listing special characters to choose from.
var randomSpecial = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}'];

// Confirming if user wants numerical characters.
var charNumerical = confirm('Click OK if you want to include numerical characters.');
// listing all numerals.
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Confirming if user wants uppercase characters.
var charUpper = confirm('Click OK if you want to include uppercase characters.');
// Listing all uppercase letters.
var Upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Confirming if user wants lowercase letters.
var charLower = confirm('Click OK if you want to include lowercase characters.');
var Lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



// for (var i = 0; i = charAmount; i++) {
//    var charSpecial = randomSpecial[Math.floor(Math.random() * charAmount)];
//  }



// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
              //if (charAmount >= 8 && charAmount <= 128){
               // passwordText.value = charAmount;
              //}


// we need to check to make sure user input is between 8 and 128 characters
// otherwise we tell user to fix their input.
if (charAmount < 8){
  alert('Your password must have at least 8 characters. Please try again.');
} else if (charAmount > 128){
  alert('Your password must have fewer than 128 characters. Please try again.');
}
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// confirm if the user wants special characters
  // var charSpecial = confirm('Click OK if you want to include special characters.');

                // if (charSpecial){
                //   passwordText.value = (charAmount + charSpecial);
                // }
// confirm if the user wants numeric characters
  // var charNumerical = confirm('Click OK if you want to include numerical characters.');

                // if (charNumerical){
                  //passwordText.value = (charAmount + charSpecial + charNumerical);
                //}
// confirm if the user wants uppercase
  // var charUpper = confirm('Click OK if you want to include uppercase characters.');

                //if (charUpper){
                //  passwordText.value = (charAmount + charSpecial + charNumerical + charUpper);
                //}
// confirm if the user wants lowercase
  // var charLower = confirm('Click OK if you want to include lowercase characters.');
                // if (charLower) {
                // passwordText.value = (charAmount + charSpecial + charNumerical + charUpper + charLower);
                // }
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
// consulting Rock Paper Scissors game code, I need variable(s) for randomly selecting characters
// make a variable that chooses special characters randomly
// make a variable that chooses numerical characters randomly
// make a variable that chooses uppercase characters randomly
// make a variable that chooses lowercase variables randomly

// ^^^ put these in a loop that generates characters until the user's chosen number of pw characters is met.

// ***********************  function ends here  **********************************// 