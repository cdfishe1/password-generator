// The button that initiates the password generator
const generateBtn = document.querySelector("#generate");

//  The arrays of criteria the user can choose to generate a password
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specials = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ']'];

// The array of criteria the user chooses for the password
let userChoices = [];

// Sets global passwordLength variable
let passwordLength;

//*** Begin Password Generation ***/

const intro = alert('Welcome to the Password Genterator!\nYou must choose from at least one of these criteria:\nlowercase letter(a,b,d)\nUpper Case Letters(A,B,C)\nNumbers(0-9)\nSpecial characters(like #$%)\nYou must choose at least one criteria\n\nPress ok to continue');

const promptLowerCriteria = () => {
  let promptLower = prompt('Would you like to include lower-case letters (such as a,b,c)?\nPress OK if Yes or press Cancel if no');
  if (promptLower === '') {
    userChoices.push(lowerLetters);
  } 
};

const promptUpperCriteria = () => {
  let promptUpper = prompt('Would you like to include upper-case letters (such as A,B,C)?\nPress OK if Yes or press Cancel if no');
  if (promptUpper === '') {
    userChoices.push(upperLetters);
  } 
};

const promptNumbersCriteria = () => {
  let promptNumbers = prompt('Would you like to include lower-case letters (such as 0,1,2)?\nPress OK if Yes or press Cancel if no');
  if (promptNumbers === '') {
    userChoices.push(numbers);
  } 
};

const promptSpecialsCriteria = () => {
  let promptSpecials = prompt('Would you like to include lower-case letters (such as #,$,%)?\nPress OK if Yes or press Cancel if no');
  if (promptSpecials === '') {
    userChoices.push(specials);
  } 
};

const promptPasswordLength = () => {
  let promptLength = prompt('How long should your password be?\nYour password must be between 8 and 128 characters.');
  passwordLength = parseInt(promptLength, 10);
  if ((promptLength >= 8) && (promptLength <= 128)) {
    
    alert('That length is valid!');
  } else {
    promptPasswordLength();
  }
};

promptLowerCriteria();
promptUpperCriteria();
promptNumbersCriteria();
promptSpecialsCriteria();
promptPasswordLength();




const finalMessage = alert('Great! We have all your criteria. Press the Generate Password button below.');


// The function that will randomly select a member of the userChoices array
const randomUserChoices = () => {
  let mergedChoices = userChoices.flat(1);
  return mergedChoices[Math.floor(Math.random() * mergedChoices.length)]
};


// The function that generates the password
const generatePassword = () => {
  let newPassword = [];

  for (i = 0; i < passwordLength; i++) {
    newPassword.push(randomUserChoices());
  }

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



