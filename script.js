//let displayValueOne = '';
//let displayValueOne = '';

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
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}



//need a function that passes in the info/data to operate
function makeSum(num1, num2, operator) {
    let plus = '+';
    
    
    //2 let displayValueTwo = displayValue;
/*
    // if else statement to match +, - etc
    if (displayValue.match(plus)) {
        let displayValueOne = displayValue.substring(0, displayValue.indexOf('+'));
        let displayValueTwo = displayValue.substring(displayValue.indexOf('+') + 1); 
        
    } else if (displayValue.match())  {
        let displayValueOne = displayValue.substring(0, displayValue.indexOf('-')); 
        let displayValueTwo = displayValue.substring(displayValue.indexOf('-') + 1); 
    }*/

    
    let displayValueOne = displayValue.substring(0, displayValue.indexOf('+')); //first part of string, before the operator
    let displayValueTwo = displayValue.substring(displayValue.indexOf('+') + 1); //second part of string, after the operator

    // let displayValueOne = displayValue.substring(0, displayValue.indexOf('-')); //first part of string, before the operator
    // let displayValueTwo = displayValue.substring(displayValue.indexOf('-') + 1); //second part of string, after the operator






    console.log('displayValueOne: ' + displayValueOne)
    console.log('displayValueTwo: ' + displayValueTwo)
    console.log('displayValue: ' + displayValue);

    

    operate(displayValueOne, displayValueTwo, plus)



}



function operate(num1, num2, operator) {
    if (operator === '+') {
        display.innerHTML = add(num1, num2);
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

    displaySum.innerHTML = displayValue;

    //display.innerHTML = displayObj.displayValue;
   
    console.log(num);

    console.log(displayValue);

    //push display value to num1
    //on operator (-*+etc) clear display value
    //push second display value input to num2
    //equals button should run operate

}

 function clearDisplay() {

 }



/* does this need to be addeventlistener instead of onclick?
can i put click order on the addeventlistener function? */






//  let displayObj = {
//      displayValue: "",
//  };

//displayObj.myStr = "";

//myFunc(container);





