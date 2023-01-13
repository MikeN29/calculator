function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
    };
    


/*

const nine = document.getElementById('nine');
const eight = document.getElementById('eight');
const seven = document.getElementById('seven');
const six = document.getElementById('six');
const five = document.getElementById('five');
const four = document.getElementById('four');
const three = document.getElementById('three');
const two = document.getElementById('two');
const one = document.getElementById('one');
const zero = document.getElementById('zero');

nine.addEventListener('click', populateDisplay(9));
eight.addEventListener('click', populateDisplay(8))

*/

let displayValue = '';




function populateDisplay(num) {
    displayValue += num;
    //displayObj.displayValue += num;

    display.innerHTML = displayValue;

    //display.innerHTML = displayObj.displayValue;
   
    console.log(num);

    console.log(displayObj.displayValue);

}

// function clearDisplay() {
//     let displayObj.displayValue = "",

// }



// let displayObj = {
//     displayValue: "",
// };

//displayObj.myStr = "";

//myFunc(container);

// myFunc could have modified container.myStr and the new value would be here
//console.log(container.myStr)



// connect the number buttons to a function
// this could mean appending them to a string? and this string being displayed as they are clicked?
