const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const equalsButton = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const dotButton = document.querySelector('#dot');

display.addEventListener('transitionend',transitionEnd);
operators.forEach(operator => operator.addEventListener('click',operate));
numbers.forEach(button => button.addEventListener('click',numberPressed));
equalsButton.addEventListener('click',equals);
clearButton.addEventListener('click',clear);
dotButton.addEventListener('click',dotPressed);

const MAX_CHARACTERS_ON_DISPLAY = 10;
let isError = false;
let displayValue = '';
let loadedNumber = null;
let lastNumberB = null;
let operator = '';

function numberPressed(event){
    if(isError) return;

    displayValue += event.target.textContent;

    if(isOverflowing()) {
        displayValue = display.textContent;
        return;
    };

    refreshDisplay();
}

function dotPressed(event){
    if(display.textContent.includes('.') || displayValue === '') return;

    displayValue += '.';

    refreshDisplay();
}

function operate(event){
    display.classList.add('operate');

    tryToCalculate();

    loadedNumber = +display.textContent;
    operator = event.target.textContent;
}

function transitionEnd (e) {
    this.classList.remove('operate');
}

function equals(){
    display.classList.add('operate');

    if(!loadedNumber && lastNumberB && +display.textContent){
        loadedNumber = +display.textContent;
        displayValue = lastNumberB;
    }
    tryToCalculate();
}

function clear(){
    loadedNumber = null;
    lastNumberB = null;
    operator = '';
    displayValue = '';
    display.textContent = '0';
    isError = false;
}

function tryToCalculate(){
    if(isError){
        return;
    }

    if(loadedNumber && displayValue) {
        calculate();
        loadedNumber = null;
    }

    displayValue = '';
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

    displayValue = displayValue.toString();

    if(isOverflowing()){
        let numberDivision = displayValue.split('.');
        let difference = MAX_CHARACTERS_ON_DISPLAY-numberDivision[0].length;

        if(numberDivision[0].length > MAX_CHARACTERS_ON_DISPLAY){
            isError = true;
            displayValue = 'ERROR';
        } else {
            if(difference != 0){
                displayValue = Math.round(+displayValue * Math.pow(10,difference))/Math.pow(10,difference);
            } else {
                displayValue = Math.round(+displayValue);
            }    
        }
    }

    refreshDisplay();
}

function isOverflowing(){
    return MAX_CHARACTERS_ON_DISPLAY < displayValue.length;
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