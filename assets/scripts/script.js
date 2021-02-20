//Javascript written with ES6 features such as const, let, and arrow functions to improve readability

//Arrays and variables needed to run the password generator
const criteria = {
  numbers: '1234567890'.split(''),
  lowerLetters: 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(''),
  upperLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  specials: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"'.split(''),
  userChoices: [],
  passwordLength: null,
  lowerChoice: null,
  upperChoice: null,
  numbersChoice: null,
  specialsChoice: null,
  passwordText: document.querySelector("#password"),

};

// Variables for the Generate and Reset buttons.
const buttons = {
  generateBtn: document.querySelector("#generate"),
  resetBtn: document.querySelector('#reset'),
};

// Evaluates if the userChoices array is empty. If yes, will begin the password generation process. If false, will write the password to the textarea and reveal the Reset Password button.
const usePasswordButton = () => {
  if (!criteria.userChoices[0]) {
    beginPromptCriteria();
  } else {
    let password = generatePassword();
    criteria.passwordText.value = password;
    buttons.resetBtn.style.display = 'initial';
    
  }
  
};

// Resets userChoices to an empty array. Sets passwordText field to empty. Makes the button disappear.
const useResetButton = () => {
  criteria.userChoices = [];
  criteria.passwordText.value = '';
  buttons.resetBtn.style.display = 'none';
};

// Listens for the Generate Password and Reset Generator buttons and excecutes their functions
buttons.generateBtn.addEventListener("click", usePasswordButton);
buttons.resetBtn.addEventListener('click', useResetButton);


//*** Begin Password Generation ***/

//Executes the inital alert and lowerCriteria
const beginPromptCriteria = () => {
  alert('Welcome to the Password Generator!\nYou must choose from at least one of these criteria:\nlowercase letter(a,b,d)\nUpper Case Letters(A,B,C)\nNumbers(0-9)\nSpecial characters like(#$%)\n\nPress ok to continue');
  promptLowerCriteria();

};

//Pushes lowerLetters array to userChoices array on ok then executes upperCritiera
const promptLowerCriteria = () => {
  let promptLower = confirm('Would you like to include lower-case letters (such as a,b,c)?\nPress OK if Yes or press Cancel if no');
  criteria.lowerChoice = promptLower;
  if (promptLower) {
    criteria.userChoices.push(criteria.lowerLetters);
  } 
  promptUpperCriteria();
};

//Pushes upperLetters array to userChoices array on ok then executes numbersCriteria
const promptUpperCriteria = () => {
  let promptUpper = confirm('Would you like to include upper-case letters (such as A,B,C)?\nPress OK if Yes or press Cancel if no');
  criteria.upperChoice = promptUpper;
  if (promptUpper) {
    criteria.userChoices.push(criteria.upperLetters);
  }
  promptNumbersCriteria();
};

//Pushes numbers array to userChoices array on ok then executes specialsCriteria
const promptNumbersCriteria = () => {
  let promptNumbers = confirm('Would you like to include numbers (such as 0,1,2)?\nPress OK if Yes or press Cancel if no');
  criteria.numbersChoice = promptNumbers;
  if (promptNumbers) {
    criteria.userChoices.push(criteria.numbers);
  } 
  promptSpecialsCriteria();
};

//Pushes specials array to userChoices array on ok then executes criteria validation
const promptSpecialsCriteria = () => {
  let promptSpecials = confirm('Would you like to include special characters (such as #,$,%)?\nPress OK if Yes or press Cancel if no');
  criteria.specialsChoice = promptSpecials;
  if (promptSpecials) {
    criteria.userChoices.push(criteria.specials);
  } 
  validateCriteria();
};

//Evaluates whether the user has clicked cancel on all criteria, forcing a re-execution of the beginPromptCriteria() function. Then executes password length prompt
const validateCriteria = () => {
  if ((criteria.lowerChoice === false) && (criteria.upperChoice === false) && (criteria.numbersChoice === false) && (criteria.specialsChoice === false)) {
    alert('You must pick at least one criteria');
    beginPromptCriteria();
  } else {
    alert('Great! You have picked at least one criteria.');
  }
  promptPasswordLength();
};

//Executes the prompt for asking for password length, evaluates if it is valid, and returns the user back to the function if the length is not valid.
const promptPasswordLength = () => {
  let promptLength = prompt('How long should your password be?\nYour password must be between 8 and 128 characters.');
  //Turns the string declared from promptLength into an interger
  criteria.passwordLength = parseInt(promptLength, 10);

  if ((promptLength >= 8) && (promptLength <= 128)) {
    
    alert('That length is valid!');
    alert('Great! We have all your criteria. Press the Generate Password button below.');
  } else {
    alert('Your password must be between 8 and 128 characters.')
    promptPasswordLength();
  }
};


// Randomly selects a member of the userChoices array
const randomUserChoices = () => {
  //Turns the criteria pushed into userChoices into one array.
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