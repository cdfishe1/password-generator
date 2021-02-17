// The button that initiates the password generator
const generateBtn = document.querySelector("#generate");


//Contains the arrays and variables needed to run the password generator
const criteria = {
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  lowerLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  specials: ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ']'],
  userChoices: [],
  passwordLength: null,
  lowerChoice: null,
  upperChoice: null,
  numbersChoice: null,
  specialsChoice: null,

};

//*** Begin Password Generation ***/

//Pushes lowerLetters array to userChoices array on ok.
const promptLowerCriteria = () => {
  let promptLower = prompt('Would you like to include lower-case letters (such as a,b,c)?\nPress OK if Yes or press Cancel if no');
  criteria.lowerChoice = promptLower;
  if (promptLower === '') {
    criteria.userChoices.push(criteria.lowerLetters);
  } 
};

//Pushes upperLetters array to userChoices array on ok.
const promptUpperCriteria = () => {
  let promptUpper = prompt('Would you like to include upper-case letters (such as A,B,C)?\nPress OK if Yes or press Cancel if no');
  criteria.upperChoice = promptUpper;
  if (promptUpper === '') {
    criteria.userChoices.push(criteria.upperLetters);
  } 
};

//Pushes numbers array to userChoices array on ok.
const promptNumbersCriteria = () => {
  let promptNumbers = prompt('Would you like to include numbers (such as 0,1,2)?\nPress OK if Yes or press Cancel if no');
  numbersChoice = promptNumbers;
  if (promptNumbers === '') {
    criteria.userChoices.push(criteria.numbers);
  } 
};

//Pushes specials array to userChoices array on ok.
const promptSpecialsCriteria = () => {
  let promptSpecials = prompt('Would you like to include special characters (such as #,$,%)?\nPress OK if Yes or press Cancel if no');
  specialsChoice = promptSpecials;
  if (promptSpecials === '') {
    criteria.userChoices.push(criteria.specials);
  } 
};

//Executes the inital alert and criteria prompts
const promptCriteria = () => {
  alert('Welcome to the Password Genterator!\nYou must choose from at least one of these criteria:\nlowercase letter(a,b,d)\nUpper Case Letters(A,B,C)\nNumbers(0-9)\nSpecial characters(like #$%)\nYou must choose at least one criteria\n\nPress ok to continue');
  promptLowerCriteria();
  promptUpperCriteria();
  promptNumbersCriteria();
  promptSpecialsCriteria();
};

//Evaluates whether the user has clicked cancel on all criteria, forcing a re-execution of the promptCriteria() function.
const validateCriteria = () => {
  if ((criteria.lowerChoice === null) && (criteria.upperChoice === null) && (criteria.numbersChoice === null) && (criteria.specialsChoice === null)) {
    alert('You must pick at least one criteria');
    promptCriteria();
  } else {
    alert('Great! You have picked at least one criteria.');
  }
};

//Executes the prompt for asking for password length, evaluates if it is valid, and returns the user back to the function if the length is not valid.
const promptPasswordLength = () => {
  let promptLength = prompt('How long should your password be?\nYour password must be between 8 and 128 characters.');
  criteria.passwordLength = parseInt(promptLength, 10);

  if ((promptLength >= 8) && (promptLength <= 128)) {
    
    alert('That length is valid!');
    alert('Great! We have all your criteria. Press the Generate Password button below.');
  } else {
    alert('Your password must be between 8 and 128 characters.')
    promptPasswordLength();
  }
};


//Executes all the primary functions of the prompt script
promptCriteria();
validateCriteria();
promptPasswordLength();



// Randomly selects a member of the userChoices array
const randomUserChoices = () => {
  let mergedChoices = criteria.userChoices.flat(1);
  return mergedChoices[Math.floor(Math.random() * mergedChoices.length)]
};


// Generates the password based on passwordLength
const generatePassword = () => {
  let newPassword = [];

  for (i = 0; i < criteria.passwordLength; i++) {
    newPassword.push(randomUserChoices());
  }

  return newPassword.join('');
};


// Takes the generated password and writes it to the #password id.
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);



