"use strict";
console.log("Checking pylons");
let warning = "System compromised!";
//alert(warning);
let admin,
    name;
name = "John";
admin = name;
//alert(admin);

const OUR_PLANET_NAME = "Earth";
let currentUserName;

function WhatTheF__k() {
    phrase = "Elo";

    if(false){
        var phrase;
    }

    console.log(phrase);
}
WhatTheF__k(); //It works!

//console.log(23+9+3122+30+33+2);
//console.log((4+6+9)/77);

let a = 10
console.log(a);
9*a;
let b = 7*a;
console.log(b);

let max = 57;
let actual = max-13;
let percentage = actual / max;
let cos = `Oh no! Only ${"'`' can deal with inserted variables"}`
console.log(cos);

let str = "Apple, Banana, Kiwi";
let part = str.slice(-4);
console.log(part);

let result = (a+b < 4) ? 'Below' : 'Over';

function checkTernaryIf(){
    let login = prompt("Podaj login");
    let message = (login == 'Employee') ? 'Hello' :
            (login == 'Director') ? 'Greetings' : 
            !login ? 'No login' : '';

    alert(message);
}

function checkAge(age){
    //Original
    /*if(age > 18){
        return true;
    } else {
        return "Oh no, you are not allowed";
    }*/

    //return (age > 18) ? true : "Oh no, you are not allowed";
    return (age > 18) || "Oh no, you are not allowed";
}
console.log(checkAge(15));

function min(a,b){
    return a<b ? a : b;
}
console.log(min(60,60));
//checkTernaryIf();