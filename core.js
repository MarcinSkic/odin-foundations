const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');

operators.forEach(operator => operator.addEventListener('click',operate));
numbers.forEach(button => button.addEventListener('click',numberPressed));

let isError = false;
let displayValue = '';
let loadedNumber = null;
let operator = '';

function numberPressed(event){
    if(isError){
        return;
    }

    displayValue += event.target.textContent;
    refreshDisplay();
    tester();
}

function operate(event){
    if(isError){
        return;
    }

    if(loadedNumber && displayValue) {
        calculate();
    }
    if(!loadedNumber){
        loadedNumber = +displayValue;
    }
    displayValue = '';
    operator = event.target.textContent;
    tester();
}

function refreshDisplay(){
    display.textContent = displayValue;
}

function tester(){
    console.log("Display: " + displayValue);
    console.log("Loaded number: " + loadedNumber);
    console.log("Operator: " + operator);
}

function calculate(){
    a = loadedNumber;
    b = +displayValue;

    loadedNumber = null;
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
            console.log('extra' + displayValue)
            break;
        case '/':
            displayValue = divide(a,b);
            isError = true;
            break;
    }

    refreshDisplay();
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
        return 'ERROR';
    }
    return a/b;
}