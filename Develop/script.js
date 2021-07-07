// Assignment code here
function uppers() {
  return String.fromCharCode( Math.floor( Math.random() * 26 ) + 65 );
}

function lowers() {
  return String.fromCharCode( Math.floor( Math.random() * 26 ) + 97 );
} 

function numbers() {
  return String.fromCharCode( Math.floor( Math.random() * 10 ) + 48 );
}

function symbols() {
   const symbol = "~!@#$%^&*(){}[]<>";
   return symbol[ Math.floor( Math.random() * symbol.length ) ];
}

var characterArray = [uppers(), lowers(), numbers(), symbols()];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // confirm lowercase letters
  var lowerConfirm = confirm("Would you like to include lowercase letters?");
  if (lowerConfirm) {
    var finalPassword = lowers();
  }
  else {}
  
  // confirm uppcase letters
  var upperConfirm = confirm("Would you like to include uppercase letters?");
  if (upperConfirm) {
    var finalPassword = lowers() + uppers();
  }
  else{}
  
  //confirm numbers
  //var numbersConfirm = confirm("Would you like to include numbers?");
  
  //confirm symbols
  //var symbolsConfirm = confirm("Would you like to include symbols?");

  // prompt for the length of the password
  //var characterCount = window.prompt("how many characters?")
  
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


