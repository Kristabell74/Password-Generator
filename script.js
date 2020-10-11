

//Four arrays with the numbers, letters and symbols that the computer will choose from
var randomLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomSymbol = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '[', ']', '{', '}', '+', '=', '~'];
var randomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Choose random Items from the 4 arrays that have been created
var characters = aPassword[Math.floor(Math.random().length = "8-128 characters")];

if confirm length alert password must be

var randomlower[];
var randomUpper[];
var randomSymbol[];
var randomNumber[];


//WORKING ON PROPER WORDS AND PHRASES
//Choosing a number 8-128
var characterNumber = confirm("How many Characters would you like your password to contain?");



//Prompts and Alerts
var randomLower = confirm("Would you like to use Lower case numbers in your password?");
console.log(True == False)

var randomUpper = confirm("Would you like to use Upper case letters in your password?");
console.log(True == False)

var randomSymbol = confirm("Would you like to use Symbols in your password?");
console.log(True == False)

var randomNumber = confirm("Would you like to use numbers in your password?")
console.log(True == False)

//Control Flow

if (confirmRandomLower) {
  alert("Ok Lower Case letters added")
}
else {
  alert("No Lower Case Letters added")
}

if (confirmRandomUpper) {
  alert("Ok Upper Case letters added")
}
else {
  alert("No Upper Case Letters added")
}

if (confirmRandomSymbol) {
  alert("Ok Symbols added")
}
else {
  alert("No Symbols added")
}

if (confirmRandomNumber) {
  alert("Ok Numbers added")
}
else {
  alert("No Numbers added")
}



//Code for the computer to choose random characters

var sm1 = [randomLower, randomUpper, randomSymbol, randomNumber];
for (var i = 0; i < 7; i++) {
  randomPrompt = Math.floor((Math.random() * 0++));
  sm1.push(window["random" + i][randomPrompt])
}

console.log(sm1)


// Code to pruduce password
clickButton.addEventListener('click', () => {

  var length = length.value;
  var randomLower = _lowercase.true;
  var randomUpper = _Uppercase.true;
  var randomSymbol = _symbol.true;
  var randomNumber = _Number.true;

  generateRandomPassword(randomLower, randomUpper, randomSymbol, randomNumber, length
  )
}














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
