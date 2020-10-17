// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Changes to make: (First in functionTest.html)
// !Make sure user can't select a letter as password length
// **Prompt user for length of password
// **if userChoice < 8 || userChoice > 128
// **Repeat prompt
// **Prompt user about:
// **Lowercase (t or f) choice1
// **Uppercase (t or f) choice2
// **Numeric (t or f) choice3
// **Special chars (t or f) choice4
// **For each true, concat that array into passwordArray
// !If choice1 && 2 && 3 && 4 = f, repeat prompts. At least one must be true
// **Then populate password with choices from created passwordArray

// Function generates a random password
function generatePassword() {

  let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let specCharArray = ["!", "#", "$", "%", "&", "_"];
  let passwordArray = [];
  let passwordText = "";

  let passwordLength = prompt("Select password length (Between 8 and 128 characters):");
  console.log(passwordLength);

  while (passwordLength < 8 || passwordLength > 128) {

    passwordLength = prompt("Invalid. Select password length (Between 8 and 128 characters):");

  }

  console.log(passwordLength);

  alert("Select password conditions:");

  let lowerCase = confirm("Include lowercase letters? (Click okay to confirm)");

  if (lowerCase === true) {

    passwordArray = passwordArray.concat(lowerCaseArray);

  }
  let upperCase = confirm("Include capital letters? (Click okay to confirm)");

  if (upperCase === true) {

    passwordArray = passwordArray.concat(upperCaseArray);

  }
  let numeric = confirm("Include numbers? (Click okay to confirm)");

  if (numeric === true) {

    passwordArray = passwordArray.concat(numericArray);

  }
  let specChar = confirm("Include special characters? (Click okay to confirm)");

  if (specChar === true) {

    passwordArray = passwordArray.concat(specCharArray);

  }

  for (i = 0; i < passwordLength; i++) {
    let passwordCurrent = passwordArray[Math.floor(Math.random() * Math.floor(passwordArray.length))];
    passwordText = passwordText + passwordCurrent;
  }


  return passwordText;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
