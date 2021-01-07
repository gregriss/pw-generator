// Assignment Code

// GIVEN I need a new, secure password
// I need a link or button to get a new password
// I need to show the password on the page
// (these are already done in the HTML).

// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
    passwordText.value = password;
  
  };

  var generateBtn = document.querySelector("#generate");

// Add event listener to the generate password button
generateBtn.addEventListener("click", writePassword);


    var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var special = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}'];
    var numerical = ['0','1','2','3','4','5','6','7','8','9'];
    var allChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}', '0','1','2','3','4','5','6','7','8','9'];
    var upperLowerSpecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}'];
    var upperLowerNumerical = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1','2','3','4','5','6','7','8','9'];
    var upperSpecialNumerical = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}', '0','1','2','3','4','5','6','7','8','9'];
    var lowerSpecialNumerical = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}', '0','1','2','3','4','5','6','7','8','9'];
    var upperLower = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upperSpecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}'];
    var upperNumerical = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
    var lowerSpecial = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}'];
    var lowerNumerical = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1','2','3','4','5','6','7','8','9'];
    var specialNumerical = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '>', '?', '{', '}', '0','1','2','3','4','5','6','7','8','9'];

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// ***************function called generatePassword with a series of prompts for user input***************
function generatePassword() {

    // var userPassword;

    // Asking the user how many characters they want in their password (btwn 8 and 128)
    var charAmount = prompt('Your password can be anywhere from 8 to 128 charcters in length. How many characters would you like your password to contain?');
    Number(charAmount);
    // we need to check if user input is between 8 and 128 characters
    if (Number(charAmount) < 8 || Number(charAmount) > 128){
        alert('Your password must contain at least 8 characters, but no more than 128 characters. Please try again.');
    // clear the alerts, click button again.
    return;
    } 
    else if (charAmount === null){
      return;
    }
    else {
        alert('Great! We will make a password with ' + Number(charAmount) + ' characters.');
    };
      // Confirming if user wants uppercase characters.
  var wantUpper = confirm('Click OK to add UPPERCASE characters, or Cancel to choose another character type.');

  // Confirming if user wants lowercase letters.
  var wantLower = confirm('Click OK to add lowercase characters, or Cancel to choose another character type.');

    // Confirming if user wants special characters.
   var wantSpecial = confirm('Click OK to add special characters (example: !@#$), or Cancel to choose another character type.');
    
   // Confirming if user wants numerical characters.
  var wantNumerical = confirm('Click OK to add numbers, or Cancel to choose another character type.');

if (wantUpper === false && wantLower === false && wantSpecial === false && wantNumerical === false){
     alert('You need at least one character type to create a password. Please try again.');
     return;
    }

    // I am in the middle of trying to access a certain number of characters. I'm able to return ((to the password card)) a single random element, now I need to set up a for loop correctly to return the amount the user asks for (charAmount).
    // ............I think I need to convert the var charAmount into a Number using Number(charAmount)............
    else if (wantUpper && wantLower && wantSpecial && wantNumerical){
      for (var i = 0; i < Number(charAmount); i++){
        // randomChar = []
        randomChar = allChar[Math.floor(Math.random() * allChar.length)];
        console.log(randomChar);
        return randomChar;
      }
    }
    else if (wantUpper && wantLower && wantSpecial && wantNumerical === false){
      for (var i = 0; i < Number(charAmount); i++){
        randomChar = upperLowerSpecial[Math.floor(Math.random() * upperLowerSpecial.length)];
        console.log(randomChar);
        return (Number(randomChar) * Number(charAmount));
      }
    }
    else if (wantUpper && wantLower && wantNumerical && wantSpecial === false){
      for (var i = 0; i < Number(charAmount); i++){
      randomChar = upperLowerNumerical[Math.floor(Math.random() * upperLowerNumerical.length)];
      console.log(randomChar);
      }
    }
    else if (wantUpper && wantSpecial && wantNumerical && wantLower === false){
      randomChar = upperSpecialNumerical[Math.floor(Math.random() * upperSpecialNumerical.length)];
      console.log(randomChar);
    }
    else if (wantLower && wantSpecial && wantNumerical && wantUpper === false){
      randomChar = lowerSpecialNumerical[Math.floor(Math.random() * lowerSpecialNumerical.length)];
      console.log(randomChar);
    }
    else if(wantUpper && wantLower && wantSpecial === false && wantNumerical === false){
      randomChar = upperLower[Math.floor(Math.random() * upperLower.length)];
      console.log(randomChar);
    }
    else if (wantUpper && wantSpecial && wantLower === false && wantNumerical === false){
      randomChar = upperSpecial[Math.floor(Math.random() * upperSpecial.length)];
      console.log(randomChar);
    }
    else if (wantUpper && wantNumerical && wantLower === false && wantSpecial === false){
      randomChar = upperSpecial[Math.floor(Math.random() * upperSpecial.length)];
      console.log(randomChar);
    }
    else if (wantLower && wantSpecial && wantUpper === false && wantNumerical === false){
      randomChar = lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)];
      console.log(randomChar);
    }
    else if (wantLower && wantNumerical && wantUpper === false && wantSpecial === false){
      randomChar = lowerNumerical[Math.floor(Math.random() * lowerNumerical.length)];
      console.log(randomChar);
    }
    else if (wantSpecial && wantNumerical && wantUpper === false && wantLower === false){
      randomChar = specialNumerical[Math.floor(Math.random() * specialNumerical.length)];
      console.log(randomChar);
    }
    else if (wantUpper && wantLower === false && wantSpecial === false && wantNumerical === false){
      randomChar = upper[Math.floor(Math.random() * upper.length)];
      console.log(randomChar);
    }
    else if (wantLower && wantUpper === false && wantSpecial === false && wantNumerical === false){
      randomChar = lower[Math.floor(Math.random() * lower.length)];
      console.log(randomChar);
    }
    else if (wantSpecial && wantUpper === false && wantLower === false && wantNumerical === false){
      randomChar = special[Math.floor(Math.random() * special.length)];
      console.log(randomChar);
    }
    else if (wantNumerical && wantUpper === false && wantLower === false && wantSpecial === false){
      randomChar = numerical[Math.floor(Math.random() * numerical.length)];
      for (var i = 0; i > charAmount; i++){
      console.log(randomChar);
      }
    }



  }


//     // Confirming if user wants uppercase characters.
//   var wantUpper = confirm('Click OK to add UPPERCASE characters, or Cancel to choose another character type.');

//   // Confirming if user wants lowercase letters.
//   var wantLower = confirm('Click OK to add lowercase characters, or Cancel to choose another character type.');

//     // Confirming if user wants special characters.
//    var wantSpecial = confirm('Click OK to add special characters (example: !@#$), or Cancel to choose another character type.');
    
//     //   if (wantSpecial){
//     //     for(var i = 0; i < parseInt(charAmount).length; i++){
//     //       special[Math.floor(Math.random() * parseInt(charAmount))];
//     // }
//    // Confirming if user wants numerical characters.
//   var wantNumerical = confirm('Click OK to add numbers, or Cancel to choose another character type.');

// if (wantUpper === false && wantLower === false && wantSpecial === false && wantNumerical === false){
//      alert('You need at least one character type to create a password. Please try again.');
//      return;
//     }
//     // else if (wantUpper) {
//     //   return password;
//     // }

   
  






// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
              //if (charAmount >= 8 && charAmount <= 128){
               // passwordText.value = charAmount;
              //}

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



// }

// writePassword();
// generatePassword();

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//
// from all the characters chosen, use one randomly and add it to our password x number of times
// consulting Rock Paper Scissors game code, I need variable(s) for randomly selecting characters
// make a variable that chooses special characters randomly
// make a variable that chooses numerical characters randomly
// make a variable that chooses uppercase characters randomly
// make a variable that chooses lowercase variables randomly

// ^^^ put these in a loop that generates characters until the user's chosen number of pw characters is met.

 