let displayObj = {
    displayValue: "",
    };
  


function add(a, b) {
    displayObj.displayValue += '+';
    return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
    displayObj.displayValue += '-';
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    displayObj.displayValue += '*';
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    displayObj.displayValue += '/';
    return parseInt(a) / parseInt(b);
}

function makeSum() {
    let plusSign = '+';
    let subtractSign = '-';
    let multiplySign = '*';
    let divideSign = '/';
    

    if (displayObj.displayValue.includes(plusSign)) {
        let displayValueOne = displayObj.displayValue.substring(0, displayObj.displayValue.indexOf('+'));
        let displayValueTwo = displayObj.displayValue.substring(displayObj.displayValue.indexOf('+') + 1); 
        operate(displayValueOne, displayValueTwo, plusSign)
    } else if (displayObj.displayValue.includes(subtractSign))  {
        let displayValueOne = displayObj.displayValue.substring(0, displayObj.displayValue.indexOf('-')); 
        let displayValueTwo = displayObj.displayValue.substring(displayObj.displayValue.indexOf('-') + 1); 
        operate(displayValueOne, displayValueTwo, subtractSign);
    } else if (displayObj.displayValue.includes(multiplySign)) {
        let displayValueOne = displayObj.displayValue.substring(0, displayObj.displayValue.indexOf('*')); 
        let displayValueTwo = displayObj.displayValue.substring(displayObj.displayValue.indexOf('*') + 1); 
        operate(displayValueOne, displayValueTwo, multiplySign);
    } else if (displayObj.displayValue.includes(divideSign)) {
        let displayValueOne = displayObj.displayValue.substring(0, displayObj.displayValue.indexOf('/')); 
        let displayValueTwo = displayObj.displayValue.substring(displayObj.displayValue.indexOf('/') + 1); 
        operate(displayValueOne, displayValueTwo, divideSign);
    }
  
    //console.log('displayValueOne: ' + displayValueOne)
    //console.log('displayValueTwo: ' + displayValueTwo)
    console.log(displayObj.displayValue); 

}



function operate(num1, num2, operator) {
    if (operator === '+') {
        display.innerHTML = add(num1, num2);
        return add(num1, num2);
    } else if (operator === '-') {
        display.innerHTML = subtract(num1, num2);
        return subtract(num1, num2);
    } else if (operator === '*') {
        display.innerHTML = multiply(num1, num2);
        return multiply(num1, num2);
    } else if (operator === '/') {
        display.innerHTML = divide(num1, num2);
        return divide(num1, num2);
    }
    };
    



function populateDisplay(num) {
    displayObj.displayValue += num;
    displaySum.innerHTML = displayObj.displayValue;
}



 function clearDisplay() {
    displayObj.displayValue = "";
    display.innerHTML = '';
    displaySum.innerHTML = '';


 }


 console.log(displayObj.displayValue)



