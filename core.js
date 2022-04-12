const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const equalsButton = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');

operators.forEach(operator => operator.addEventListener('click',operate));
numbers.forEach(button => button.addEventListener('click',numberPressed));
equalsButton.addEventListener('click',equals);

let isError = false;
let displayValue = '';
let loadedNumber = null;
let lastNumberB = null;
let operator = '';
tester();

function numberPressed(event){
    if(isError){
        return;
    }

    //if(displayValue )

    displayValue += event.target.textContent;

    
    refreshDisplay();
    tester();
}

function operate(event){
    tryToCalculate();

    loadedNumber = +display.textContent;
    operator = event.target.textContent;
    tester();
}

function equals(){
    if(!loadedNumber && lastNumberB && +display.textContent){
        loadedNumber = +display.textContent;
        displayValue = lastNumberB;
    }
    tryToCalculate();
}

function clear(){
    
}

function tryToCalculate(){
    if(isError){
        return;
    }

    if(loadedNumber && displayValue) {
        calculate();
    }

    loadedNumber = null;
    displayValue = '';
    tester();
}

function tester(){
    console.log("Display: " + displayValue);
    console.log("Loaded number: " + loadedNumber);
    console.log("Loaded numberB: " + lastNumberB);
    console.log("Operator: " + operator);
}

function calculate(){
    a = loadedNumber;
    b = +displayValue;
    lastNumberB = b;

    displayValue = '';

    switch(operator){
        case '+':
            displayValue = add(a,b);
            break;
        case '-':
            displayValue = subtract(a,b);
            break;
        case 'x':
            displayValue = multiply(a,b);
            break;
        case '/':
            displayValue = divide(a,b);      
            break;
    }

    refreshDisplay();
}

function refreshDisplay(){
    display.textContent = displayValue;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0){
        isError = true;
        return 'ERROR';
    }
    return a/b;
}