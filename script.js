// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function generates a random password
function generatePassword() {
// Initializing blank string to store password
  let passwordText = "";
// Array of numbers, letters, and special characters from which to draw the elements of our passwords
  let passwordArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&"];
// Loop to draw randomly from passwordArray 15 times
  for (i = 0; i < 15; i++) {
// passwordCurrent takes the value of a character randomly drawn from passwordArray
      let passwordCurrent = passwordArray[Math.floor(Math.random() * Math.floor(passwordArray.length))];
      // The random character passwordCurrent is added to the end of the string passwordText
      passwordText = passwordText + passwordCurrent;
// Loop ends after 15 characters are drawn and made into a string
  }
// String passwordText is returned to var password in the writePassword function
  return passwordText;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
