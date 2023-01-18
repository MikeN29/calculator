let displayObj = {
    displayValue: "",

    };
  


function add(a, b) {
    displayObj.displayValue += '+';
    //return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
    displayObj.displayValue += '-';
    //return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    displayObj.displayValue += '*';
    //return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    displayObj.displayValue += '/';
    //return parseInt(a) / parseInt(b);
}

function makeSum() {
    let plusSign = '+';
    let subtractSign = '-';
    let multiplySign = '*';
    let divideSign = '/';

    /*
    let str = displayObj.displayValue;
    let calculation = str.match(/\d+|[^0-9]/g);
    let result;

    for (var a = 0; a < calculation.length; a++) {
        if (a == 0) {
            result = parseInt(calculation[a]);
            } else {
        if (!isNaN(calculation[a])) {
            switch (calculation[a - 1]) {
            case "-":
                result -= parseInt(calculation[a]);
                break;
            case "+":
                result += parseInt(calculation[a]);
                break;
            case "*":
                result *= parseInt(calculation[a]);
                break;
            case "/":
                result /= parseInt(calculation[a]);
                 break;
      }
    }
  }
}

        display.innerHTML = result;*/
    
    if (displayObj.displayValue.includes(plusSign)) {
        let displayValueOne = displayObj.displayValue.substring(0, displayObj.displayValue.indexOf('+'));
        let displayValueTwo = displayObj.displayValue.substring(displayObj.displayValue.indexOf('+') + 1); 
        operate(displayValueOne, displayValueTwo, plusSign)
        console.log('displayValueOne: ' + displayValueOne)
        console.log('displayValueTwo: ' + displayValueTwo)
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
  
    // console.log('displayValueOne: ' + displayValueOne)
    // console.log('displayValueTwo: ' + displayValueTwo)
    //console.log('displayValue: ' + displayObj.displayValue); 
}


function operate(num1, num2, operator) {
       if (operator === '+') {
        displayObj.runningTotal = parseInt(num1) + parseInt(num2);
        display.innerHTML = displayObj.runningTotal;
        displayObj.displayValue = displayObj.runningTotal;
        //return add(num1, num2);
    } else if (operator === '-') {
        displayObj.runningTotal = display.innerHTML = parseInt(num1) - parseInt(num2);
        display.innerHTML = displayObj.runningTotal
        displayObj.displayValue = displayObj.runningTotal;
        //return subtract(num1, num2);
    } else if (operator === '*') {
        displayObj.multiplyResult = parseInt(num1) * parseInt(num2);
        display.innerHTML = displayObj.multiplyResult;
        displayObj.displayValue = displayObj.multiplyResult;
        //return multiply(num1, num2);
    } else if (operator === '/') {
        displayObj.divideResult = parseInt(num1) / parseInt(num2);
        display.innerHTML = displayObj.divideResult;
        displayObj.displayValue = displayObj.divideResult;
        //return divide(num1, num2);
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

