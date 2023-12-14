/* Task:
Check with the function isValidPassword whether the password
fulfills the minimal requirements.
- minimum 8 characters
- at least one special character out of !@#$%^&
- does not contain the word 'password'

Further down you'll find testcases and sample output
* */
/**
 * function Is valid password
 * @param password
 * @returns {{result: boolean, msg: string}}
 */
let isValidPassword = function (password){
    let specialCharacters = ['!','@','#','$','%','^','&'];//??
    if (password.length < 8){
        return {result:false, msg: "Does not fulfill length rule!"}
    }
    if (password.includes("password")){
        return {result:false, msg: "Does contain word 'password'!"}
    }
    if (!specialCharacters.some(ch => password.includes(ch))){
        return {result:false, msg: "Does not contain any special characters!"}
    }
    return {result:true, msg: "Fulfills requirements!"}
}

/**
 * function check password
 * @param password
 */
let checkPassword = function (password){
    let validation = isValidPassword(password);
    console.log(`${validation.msg}`)
}
/*
Testcases and sample output for example below:
Does not fulfill length!
ok
Contains the word 'password'!
Does not include a special character!
 */
checkPassword('asdfp');
checkPassword('abc123!@#$%^&');
checkPassword('asdfpasdfpoijpassword');
checkPassword('asdfpasdfpoi');
