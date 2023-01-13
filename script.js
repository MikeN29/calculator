
function add(a, b) {
    //1 way to clear display value
    displayValue += '+';/*
    let displayValueOne = displayValue;
    let displayValueTwo = displayValue.substring(displayValue.indexOf('+') + 1);
    console.log('displayValueOne: ' + displayValueOne)
    console.log('displayValueTwo: ' + displayValueTwo)*/
    return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
    displayValue += '-';
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    displayValue += '*';
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    displayValue += '/';
    return parseInt(a) / parseInt(b);
}



//need a function that passes in the info/data to operate
function makeSum() {
    let plusSign = '+';
    let subtractSign = '-';
    let multiplySign = '*';
    let divideSign = '/';
    
    

    // if else statement to match +, - etc
    if (displayValue.includes(plusSign)) {
        let displayValueOne = displayValue.substring(0, displayValue.indexOf('+'));
        let displayValueTwo = displayValue.substring(displayValue.indexOf('+') + 1); 
        operate(displayValueOne, displayValueTwo, plusSign)
    } else if (displayValue.includes(subtractSign))  {
        let displayValueOne = displayValue.substring(0, displayValue.indexOf('-')); 
        let displayValueTwo = displayValue.substring(displayValue.indexOf('-') + 1); 
        operate(displayValueOne, displayValueTwo, subtractSign);
    } else if (displayValue.includes(multiplySign)) {
        let displayValueOne = displayValue.substring(0, displayValue.indexOf('*')); 
        let displayValueTwo = displayValue.substring(displayValue.indexOf('*') + 1); 
        operate(displayValueOne, displayValueTwo, multiplySign);
    } else if (displayValue.includes(divideSign)) {
        let displayValueOne = displayValue.substring(0, displayValue.indexOf('/')); 
        let displayValueTwo = displayValue.substring(displayValue.indexOf('/') + 1); 
        operate(displayValueOne, displayValueTwo, divideSign);
    }


    
    //console.log('displayValueOne: ' + displayValueOne)
    //console.log('displayValueTwo: ' + displayValueTwo)
    console.log(displayValue); 

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

    displaySum.innerHTML = displayValue;

    //display.innerHTML = displayObj.displayValue;
   
    //console.log(num);

    //console.log(displayValue);

    //push display value to num1
    //on operator (-*+etc) clear display value
    //push second display value input to num2
    //equals button should run operate

}

 function clearDisplay() {
    let displayValue = undefined;
    display.innerHTML = null;
    displaySum.innerHTML = null;


 }



/* does this need to be addeventlistener instead of onclick?
can i put click order on the addeventlistener function? */






//  let displayObj = {
//      display: "",
//  };







