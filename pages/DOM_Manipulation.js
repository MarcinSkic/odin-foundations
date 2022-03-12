const containter = document.querySelector("#container");

const firstPar = document.createElement("p");
firstPar.textContent = "Hey I'm red!";
firstPar.style.color = "red";
containter.appendChild(firstPar);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.style.cssText = "border: 1px solid black; background-color: pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const secPar = document.createElement("p");
secPar.textContent = "ME TOO!";
div.appendChild(secPar);

containter.appendChild(div);