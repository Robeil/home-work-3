//creating the basic variables
var givenPassword = document.getElementById("passwordbtn");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["\"&", "(", ")", "*", "+", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\","];
var password = "";
var totalValue = [];
//ajusting function ,prompt and confirm
function userInput() {
    var passLengthCon = window.prompt("How many character would you like your password to contain?");
    if (passLengthCon < 8 || passLengthCon > 129) {
        alert("password length must be greaterthan 8 and less than 129!");
    }

    var lower = confirm("Click Ok to include lowercase character.");
    var upper = confirm("Click Ok to include uppercase character.");
    var num = confirm("Click Ok to include nummeric character.");
    var special = confirm("click ok to special character.");

    if (upper === true) {
        password += randomChar(upperCase);
        totalValue = totalValue.concat(upperCase);
    }

    if (lower === true) {
        password += randomChar(lowerCase);
        totalValue = totalValue.concat(lowerCase);
    }
    if (special === true) {
        password += randomChar(specialCharacter);
        totalValue = totalValue.concat(specialCharacter);

    }
    if (num === true) {
        password += randomChar(number);
        totalValue = totalValue.concat(number);
    }
    console.log(password);
    console.log(totalValue);
    for (var i = password.length + 1; i < passLengthCon; i++) {
        password += randomChar(totalValue);
    }
    return password;
}

// convert all global variables to arrays
// push arrays to total value
// when user sections are over, randomize the order of totalValue
// Trim off the amount that you would like to return

//creating a random nuumbers from 0-9
function randomChar(characterArry) {
    let runNumber = Math.floor(Math.random() * characterArry.length);
    return characterArry[runNumber];
}

var generatebutton = document.querySelector("#passwordbtn");

function generatePassword() {
    var finnalPassword = userInput();
    var finnalText = document.querySelector("#yourpassword");
    finnalText.value = finnalPassword;
}

generatebutton.addEventListener("click", generatePassword);