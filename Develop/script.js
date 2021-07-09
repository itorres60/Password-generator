// Assignment code here
var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "013456789";
var symbols = "!~@#$%^&*(){}[]<>";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert("ATTENTION: Must reload page after every generated password to reset confirm values!")
  function finalPassword() {
    var pass = "";
        options = uppers + lowers + numbers + symbols;
    for (var i = 0; i < 128; i++) {
      pass += options.charAt(Math.random() * options.length);
    }
    return pass.slice(0, promptCount);
  }

  function types() {
    var upperConfirm = confirm("Would you like to include UPPERCASE letters?");
    if (upperConfirm) {uppers = false}
    
    var lowerConfirm = confirm("Would you like to include lowercase letters?");
    if (!lowerConfirm) {lowers = false}
    
    var numbersConfirm = confirm("Would you like to include numbers?");
    if (!numbersConfirm) {numbers = false};
    
    var symbolsConfirm = confirm("Would you like to include symbols?");
    if (!symbolsConfirm) {symbols = false};
  
    if (!upperConfirm && !lowerConfirm && !numbersConfirm && !symbolsConfirm) {
      alert("Must select a minimum of one character type!");
      location.reload();
    }
    else {};
  }

  
  
  
  // prompt for the length of the password
  var promptCount = window.prompt("How many characters?")
  while ( promptCount < 8 || promptCount > 128 ) {
    alert("Please chose a number between 8 and 128");
    var promptCount = window.prompt("How many characters?")
  }
  types();
  
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = finalPassword();

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);