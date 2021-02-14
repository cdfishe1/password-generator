// The button that initiates the password generator
const generateBtn = document.querySelector("#generate");

const generatePassword = () => {
  return 'Some password';
}


// This function generates the password and writes it to the #password id.
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);



