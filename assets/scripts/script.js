//  The arrays of criteria the user can choose to generate a password
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specials = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ']'];

// The array of criteria the user chooses for the password
let userChoices = [];


// let passwordLength;

//*** Begin Password Generation ***/
const intro = alert('Welcome to the Password Genterator!\nYou can choose from these criteria:\nlowercase letter(a,b,d)\nUpper Case Letters(A,B,C)\nNumbers(0-9)\nSpecial characters(like #$%)\nYou must choose at least one criteria\n\nPress ok to continue');

const promptLowerLetters = prompt('Would you like to include lower-case letters (such as a,b,c)?\nPress OK if Yes or press Cancel if no');

const lowerCriteria = () => {
    if (promptLowerLetters) {
      userChoices.push(lowerLetters);
      passwordCriteria();
    } else {
      passwordCriteria();
    }
};

// console.log(userChoices);

let promptPasswordLength = prompt('How long would like your password to be?\nYour password must be between 8 and 128 characters.');

// Sets the user input for password length
let passwordLength = parseInt(promptPasswordLength, 10);

const passwordCriteria = () => {
    if (passwordLength >= 8 || passwordLength <= 128) {
      finalMessage();
    }
}

const finalMessage = () => {
  alert('Great! We have all your criteria. Press the Generate Password button below.')
};


// The button that initiates the password generator
const generateBtn = document.querySelector("#generate");


// The function that will randomly select a member of the userChoices array
const randomUserChoices = () => {
  return userChoices[Math.floor(Math.random() * userChoices.length)]
};

// The function that generates the password
const generatePassword = () => {
  // The array that will receive the newly created password
  let newPassword = [];
  // Loops through the user determined array of choices based on passwordLength and pushes these to the newPassword array
  for (i = 0; i < passwordLength; i++) {
    newPassword.push(randomUserChoices());
  }
  // Removes the commas from the newPassword array
  return newPassword.join('');
};


// This function taked the generated password and writes it to the #password id.
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);



