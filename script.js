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


//Four arrays with the numbers, letters and symbols that the computer will choose from
var randomLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomSymbol = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '[', ']', '{', '}', '+', '=', '~'];
var randomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


if ()

  //Concatenates (merges) randomLower with randomUpper, randomSymbol, randomNumber
  var aPassword = randomLower.concat(randomUpper, randomSymbol, randomNumber);

//Alerts 
if ("click") alert("Choose Characteristics of Password.")




//Funtions

function getRandomLower() {

}

function getRandomUpper() {

}

function getRandomSymbol() {

}
function getRandomNumber() {

}



console.log()
