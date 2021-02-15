// The button that initiates the password generator
const generateBtn = document.querySelector("#generate");

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specials = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ']'];

let passwordLength = 15;

let userChoices = [...lowerLetters, ...upperLetters, ...numbers, ...specials];

const randomUserChoices = () => {
  return userChoices[Math.floor(Math.random() * userChoices.length)]
};

const generatePassword = () => {
  let newPassword = [];
  for (i = 0; i < passwordLength; i++) {
    newPassword.push(randomUserChoices());
  }
  return newPassword.join('');
};

console.log(generatePassword());


// This function generates the password and writes it to the #password id.
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);



