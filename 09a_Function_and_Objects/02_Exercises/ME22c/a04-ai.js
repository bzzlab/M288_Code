/**
 * Function to check if a password is valid
 * @param {string} password - The password to be checked
 * @returns {{result: boolean, msg: string}} - The result object with a boolean indicating validity and a message
 */
function isValidPassword(password) {
    // Check minimum length
    if (password.length < 8) {
        return { result: false, msg: "Does not fulfill length!" };
    }

    // Check for the word 'password'
    if (password.toLowerCase().includes('password')) {
        return { result: false, msg: "Contains the word 'password'!" };
    }

    // Check for at least one special character
    const specialCharacters = "!@#$%^&";
    if (!password.split('').some(char => specialCharacters.includes(char))) {
        return { result: false, msg: "Does not include a special character!" };
    }

    // Password meets all requirements
    return { result: true, msg: "ok" };
}

/**
 * Function to check a password and log the result
 * @param {string} password - The password to be checked
 */
function checkPassword(password) {
    const result = isValidPassword(password);
    console.log(result.msg);
}

// Test cases
checkPassword('asdfp');                    // Does not fulfill length!
checkPassword('abc123!@#$%^&');           // ok
checkPassword('asdfpasdfpoijpassword');   // Contains the word 'password'!
checkPassword('asdfpasdfpoi');             // Does not include a special character!
