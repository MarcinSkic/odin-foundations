const container = document.querySelector('.container');
const generateButton = document.querySelector('#generate');
const drawingModeRadioButtons = document.querySelectorAll('input[name="mode"]');


let containerWidth = 400;
let squaresInRow = 64;
let pencilColor = '#000000';
let divs = [];
let isMouseDown = false;
let defaultMode = "hold";

container.style.width = `${containerWidth}px`;
container.style.height = container.style.width;

generateButton.addEventListener('click',createNewGrid);

drawingModeRadioButtons.forEach(radio => {
    if(radio.value === defaultMode){
        radio.checked = true;
        return;
    }
});

drawingModeRadioButtons.forEach(radio => radio.addEventListener('change',assignRadioModeChange));

let holdModeDown = function (){
    isMouseDown = true;
};

let holdModeUp = function () {
    isMouseDown = false;
};

let clickMode = function () {
    isMouseDown = !isMouseDown;
};

function assignRadioModeChange () {
    if(this.checked){
        removeDrawingListeners ();

        switchDrawingMode(this.value);
    }
}

function switchDrawingMode(mode){
    if(mode === 'hold'){
        document.addEventListener('mousedown',holdModeDown);
        document.addEventListener('mouseup',holdModeUp);
    } else {
        document.addEventListener('click',clickMode);
    }
    isMouseDown = false;
}

function removeDrawingListeners (){
    document.removeEventListener('mousedown',holdModeDown);
    document.removeEventListener('mouseup',holdModeUp);

    document.removeEventListener('click',clickMode);
}

switchDrawingMode(defaultMode);

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

        div.style.backgroundColor = `white`;
        div.style.width = `${containerWidth/squaresInRow}px`
        div.classList.toggle('square');

        //To prevent dragging and in result not colouring properly
        div.addEventListener('dragstart',e => e.preventDefault());
        div.addEventListener('drop',e => e.preventDefault());

        div.addEventListener('mouseenter',colourSquare);
        div.addEventListener('mousedown',colourSquare);
        
        container.appendChild(div);
        divs.push(div);
    }   //#${Math.floor(Math.random()*16777215).toString(16)}
}

function colourSquare(event){
    if(isMouseDown || event.type === 'mousedown'){
        event.target.style.backgroundColor = pencilColor;
    }
}
