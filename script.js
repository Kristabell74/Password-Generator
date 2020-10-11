

//Four arrays with the numbers, letters and symbols that the computer will choose from
var randomLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomSymbol = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '[', ']', '{', '}', '+', '=', '~'];
var randomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


//Code for the computer to choose random character
var sm1 = [randomLower, randomUpper, randomSymbol, randomNumber];
for (var i = 0; i < 24; i++) {
  randomPrompt = Math.floor((Math.random() * 12));
  sm1.push(window["random" + i][randomPrompt])
}

console.log(sm1)

//Choose random Items from the 4 arrays that have been created
var randomItems = aPassword[Math.floor(Math.random().length = "12 characters")];



//Alerts 

alert("How many Characters would you like your password to contain?");

alert("Would you like to use Lower case numbers in your password?");

alert("Would you like to use Upper case letters in your password?");

alert("Would you like to use Symbols in your password?");

alert("Would you like to use numbers in your password?")









// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
