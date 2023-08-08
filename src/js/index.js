const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const generateButton = document.querySelector('#generate-button');
const passwordOne = document.querySelector('#password-one');
const passwordTwo = document.querySelector('#password-two');
const lettersCheckbox = document.querySelector('#letters-checkbox')
const symbolsCheckbox = document.querySelector('#symbols-checkbox')

generateButton.addEventListener('click', function () {
   passwordOne.textContent = generatePassword()
   passwordTwo.textContent = generatePassword()

   if (!lettersCheckbox.checked && !symbolsCheckbox.checked) {
      alert('Please select at least one character type.')
   }
})

function generatePassword() {
   let allowedCharacters = []
   if (lettersCheckbox.checked) {
      allowedCharacters.push(...letters)
   }
   if (symbolsCheckbox.checked) {
      allowedCharacters.push(...symbols)
   }

   let passwordArr = []
   for (let i = 0; i < 30; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length)
      passwordArr.push(allowedCharacters[randomIndex])
   }
   return passwordArr.join('')
}
