function generatePassword() {


  //Four arrays with the numbers, letters and symbols that the computer will choose from
  var randomLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var randomUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var randomSymbol = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '[', ']', '{', '}', '+', '=', '~'];
  var randomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var options = []

  var finalPassword = ''

  //Choosing a number 8-128
  var characterNumber = prompt("How many characters, 8-128, would you like your password to contain?");

  //Prompts confirm
  var comfirmRandomLower = confirm("Would you like to use Lower case numbers in your password?");

  var confirmRandomUpper = confirm("Would you like to use Upper case letters in your password?");

  var confirmRandomSymbol = confirm("Would you like to use Symbols in your password?");

  var confirmRandomNumber = confirm("Would you like to use numbers in your password?")

  //Control Flow

  if (comfirmRandomLower) {
    options.push(...randomLower)
  }

  if (confirmRandomUpper) {
    options.push(...randomUpper)
  }

  if (confirmRandomSymbol) {
    options.push(...randomSymbol)
  }


  if (confirmRandomNumber) {
    options.push(...randomNumber)
  }
  //Code for the computer to choose random characters
  for (var i = 0; i < characterNumber; i++) {
    randomPrompt = Math.floor((Math.random() * options.length));
    finalPassword = finalPassword + options[randomPrompt]
  }

  return finalPassword
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
