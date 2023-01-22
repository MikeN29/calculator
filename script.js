let displayObj = {
    displayValue: "",

    };
  


function add(a, b) {
    displayObj.displayValue += '+';
};

function subtract(a, b) {
    displayObj.displayValue += '-';
}

function multiply(a, b) {
    displayObj.displayValue += '*';
}

function divide(a, b) {
    displayObj.displayValue += '/';
}

function makeSum() {
    let plusSign = '+';
    let subtractSign = '-';
    let multiplySign = '*';
    let divideSign = '/';

    /*

    
    let str = displayObj.displayValue;
    //let decimalStr = parseInt(str).toFixed(2)
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
        displayObj.addResult = parseFloat(num1) + parseFloat(num2);
        display.innerHTML = displayObj.addResult.toFixed(3);
        displayObj.displayValue = displayObj.addResult.toFixed(3);
    } else if (operator === '-') {
        displayObj.subtractResult = display.innerHTML = parseFloat(num1) - parseFloat(num2);
        display.innerHTML = displayObj.subtractResult.toFixed(3);
        displayObj.displayValue = displayObj.subtractResult.toFixed(3);;
    } else if (operator === '*') {
        displayObj.multiplyResult = parseFloat(num1) * parseFloat(num2);
        display.innerHTML = displayObj.multiplyResult.toFixed(3);
        displayObj.displayValue = displayObj.multiplyResult.toFixed(3);;
    } else if (operator === '/') {
        displayObj.divideResult = parseFloat(num1) / parseFloat(num2);
        display.innerHTML = displayObj.divideResult.toFixed(3);
        displayObj.displayValue = displayObj.divideResult.toFixed(3);
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

