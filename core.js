const container = document.querySelector('.container');
const generateButton = document.querySelector('#generate');

let containerWidth = 400;
container.style.width = `${containerWidth}px`;
container.style.height = container.style.width;

let squaresInRow = 16;

let divs = [];

generateButton.addEventListener('click',createNewGrid);

generateDivs();

function createNewGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    
    generateDivs();
}

function generateDivs(){

    for(let i = 0; i < squaresInRow**2; i++){
        const div = document.createElement('div');

        div.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        div.style.width = `${containerWidth/squaresInRow}px`
        div.classList.toggle('square');
        
        container.appendChild(div);
        divs.push(div);
    }
}

