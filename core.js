const container = document.querySelector('.container');
const generateButton = document.querySelector('#generate');

let containerWidth = 400;
let squaresInRow = 16;
let pencilColor = '#000000';
let divs = [];
let mouseDown = false;

container.style.width = `${containerWidth}px`;
container.style.height = container.style.width;

generateButton.addEventListener('click',createNewGrid);

document.addEventListener('mousedown',() => mouseDown = true);
document.addEventListener('mouseup',() => mouseDown = false);

//document.addEventListener('click',() => mouseDown = !mouseDown);

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

        //To prevent dragging and in result not colouring properly
        div.addEventListener('dragstart',e => e.preventDefault());
        div.addEventListener('drop',e => e.preventDefault());

        div.addEventListener('mouseenter',colourSquare);
        div.addEventListener('click',colourSquare);
        
        container.appendChild(div);
        divs.push(div);
    }
}

function colourSquare(event){
    if(mouseDown || event.type === 'click'){
        event.target.style.backgroundColor = pencilColor;
    }
}
