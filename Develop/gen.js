// Assignment Code

var generateBtn = document.querySelector("#generate");


function generatePassword() {

  console.log ("passwordgenerated");
 
  // add your logic here list of all possible values/characters for the pwd selection 
  let characters = "01234357890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&";
  // declaring var to store pwd lgth
  let passwordLength = Math.floor(Math.random() * 121) + 8;
  // declaring the var to store pwd
  let passwordValue = '';
  for (let i = 0; i < passwordLength; i++ ){
    let number = Math.floor(Math.random() * characters.length); 
    passwordValue += characters.substring(number, number + 1);

  }
  return passwordValue;
}

// Write password to the #password input
function writePassword() {
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
  // alert(generatedPassword);

  // for (let i = 0; i < passwordLength; i++ ){
  //   let number = Math.floor(Math.random() * characters.length); 
  //   passwordValue += characters.substring(number,number + 1);

  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

