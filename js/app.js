const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


/*
The getRandomData function uses the Math.random() method to generate a random number between 0 
(inclusive) and 1 (exclusive). This random number is then multiplied by the length of the dataSet array using the 
length property, which returns the number of elements in an array.
For example, if dataSet is an array of 5 elements [1, 2, 3, 4, 5], 
then getRandomData(dataSet) will return a random element from the array.

The dataSet parameter is not a predefined dataset in JavaScript, 
it's just a variable name that represents any input array that can be passed to the 
function. The user of this function can create their own array of data and pass it 
as an argument to the function to retrieve a random element from the array.
For example, if dataSet is an array of numbers [1, 2, 3, 4, 5], and 
Math.floor(Math.random() * dataSet.length) generates the random number 2, then dataSet[2] will 
return the third element in the array, which is 3.
*/

/*getRandomData is a function in JavaScript, not a method. 
A method is a function that belongs to an object or a class, 
whereas a function can stand on its own or be assigned to a variable.

In this case, getRandomData is a standalone function that takes an array as an input 
and returns a randomly chosen element from the input array.

Methods in JavaScript are usually called with a dot notation, like array.sort() 
or string.trim(), whereas functions are typically called by name, like getRandomData(dataSet). */

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}
// console.log(getRandomData(numberSet))

const generatePassword = (password = "") => {
    /*This code is a conditional statement that checks if the upperInput checkbox element is 
    checked or not. If the checkbox is checked, the code generates a random uppercase character 
    and adds it to the password string.*/
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}


// generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

/*
function handleClick() {
    generatePassword();
}

document.getElementById("btn").addEventListener("click", handleClick);

In this example, we define a function called handleClick() that simply calls the 
generatePassword() function. We then pass the function reference handleClick as the 
second argument to the addEventListener() method. This way, when the button is clicked, 
it will call the handleClick() function, which will then call the 
generatePassword() function.
 */