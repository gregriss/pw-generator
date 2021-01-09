// Assignment Code



// Writing a password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
// WHEN the password is generated
// THEN the password is written to the page
    passwordText.value = password;
  };

// declaring a variable for the red 'Generate Password' button (#generate class) in the HTML
var generateBtn = document.querySelector("#generate");

// Add event listener to the generate password button, so that 
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
generateBtn.addEventListener("click", writePassword);

    var charAmount;
    var wantUpper;
    var wantLower;
    var wantSpecial;
    var wantNumerical;

    // arrays of all possible groupings of character types
    // depending on which combination of character types the user selects, 
    // a different array will be selected to choose random values from.
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


// a function with prompts and confirms for user input.
function generatePassword() {

    // Asking the user how many characters they want in their password (btwn 8 and 128)
    var charAmount = prompt('Your password may be anywhere from 8 to 128 charcters in length. How many characters would you like your password to contain? Please type numbers only.');
    
    // we need to check if user input is between 8 and 128 characters
    if (charAmount < 8 || charAmount > 128){
         alert('Your password must contain at least 8 characters, but no more than 128 characters. Please try again.');
    // clear the alerts, user has to start over.
     return;
    }
   
    // add contingency for if user types in not numbers
    else if (charAmount === null){  
      // return;
    }
    else {
        alert('Great! We will make a password with ' + charAmount + ' characters.');
    };

    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters

    // Confirming if user wants uppercase characters.
    var wantUpper = confirm('Click OK to add UPPERCASE characters, or Cancel to choose another character type.');

    // Confirming if user wants lowercase letters.
    var wantLower = confirm('Click OK to add lowercase characters, or Cancel to choose another character type.');

    // Confirming if user wants special characters.
    var wantSpecial = confirm('Click OK to add special characters (example: !@#$), or Cancel to choose another character type.');
      
    // Confirming if user wants numerical characters.
    var wantNumerical = confirm('Click OK to add numbers, or Cancel to choose another character type.');
    
    // making var password an array that I can push values to it after randomizing.
    var password = [];

    // If the user doesn't choose any type of character, we tell the user to try again (error).
    if (wantUpper === false && wantLower === false && wantSpecial === false && wantNumerical === false){
        alert('You need at least one character type to create a password. Please try again.');
          return;
        }

      // If the user wants all 4 character types...
    else if (wantUpper && wantLower && wantSpecial && wantNumerical){
      // make a list of random characters as long as the user asks for 
        for (var i = 0; i < charAmount; i++){
          randomChar = allChar[Math.floor(Math.random() * allChar.length)];
          // add randomly chosen characters to an array named password, one by one.
            password.push(randomChar);
          };
          // show the full password on the page
          return password.join("");
        }
        // If the user wants uppercase, lowercase, and special characters but not numbers...
    else if (wantUpper && wantLower && wantSpecial && wantNumerical === false){
        // same as above
        for (var i = 0; i < charAmount; i++){
          randomChar = upperLowerSpecial[Math.floor(Math.random() * upperLowerSpecial.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantUpper && wantLower && wantNumerical && wantSpecial === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = upperLowerNumerical[Math.floor(Math.random() * upperLowerNumerical.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantUpper && wantSpecial && wantNumerical && wantLower === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = upperSpecialNumerical[Math.floor(Math.random() * upperSpecialNumerical.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantLower && wantSpecial && wantNumerical && wantUpper === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = lowerSpecialNumerical[Math.floor(Math.random() * lowerSpecialNumerical.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if(wantUpper && wantLower && wantSpecial === false && wantNumerical === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = upperLower[Math.floor(Math.random() * upperLower.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantUpper && wantSpecial && wantLower === false && wantNumerical === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = upperSpecial[Math.floor(Math.random() * upperSpecial.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantUpper && wantNumerical && wantLower === false && wantSpecial === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = upperNumerical[Math.floor(Math.random() * upperNumerical.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantLower && wantSpecial && wantUpper === false && wantNumerical === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantLower && wantNumerical && wantUpper === false && wantSpecial === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = lowerNumerical[Math.floor(Math.random() * lowerNumerical.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantSpecial && wantNumerical && wantUpper === false && wantLower === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = specialNumerical[Math.floor(Math.random() * specialNumerical.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantUpper && wantLower === false && wantSpecial === false && wantNumerical === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = upper[Math.floor(Math.random() * upper.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantLower && wantUpper === false && wantSpecial === false && wantNumerical === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = lower[Math.floor(Math.random() * lower.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantSpecial && wantUpper === false && wantLower === false && wantNumerical === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = special[Math.floor(Math.random() * special.length)];
          password.push(randomChar);
        }
        return password.join("");
      }
    else if (wantNumerical && wantUpper === false && wantLower === false && wantSpecial === false){
        for (var i = 0; i < charAmount; i++){
          randomChar = numerical[Math.floor(Math.random() * numerical.length)];
          password.push(randomChar);
        }
        return password.join("");
      }

  };

// WHEN all prompts are answered (charAmount, wantUpper, wantLower, wantSpecial, wantNumerical)
// THEN a password is generated that matches the selected criteria 

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


// from all characters chosen, use one randomly >> [Math.floor(Math.random() * allChar.length)] << and add it to our password x (charAmount) number of times

// make a variable that chooses special characters randomly
// make a variable that chooses numerical characters randomly
// make a variable that chooses uppercase characters randomly
// make a variable that chooses lowercase variables randomly

// ^^^ put these in a loop that generates characters until the user's chosen number of pw characters is met.
// put each password character into an array, log the array/return the array on the page.