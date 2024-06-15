const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passwordField = document.getElementById('password');

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const excludeDuplicates = document.getElementById('excludeDuplicates').checked;

    let characterPool = '';

    if (includeLowercase) characterPool += lowercaseChars;
    if (includeUppercase) characterPool += uppercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool === '') return '';

    let password = '';
    const usedChars = new Set();

    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        const randomChar = characterPool[randomIndex];

        if (excludeDuplicates) {
            if (!usedChars.has(randomChar)) {
                password += randomChar;
                usedChars.add(randomChar);
            }
        } else {
            password += randomChar;
        }
    }

    return password;
}

generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordField.value = password;
});

copyBtn.addEventListener('click', () => {
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
