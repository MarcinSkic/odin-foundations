const container = document.querySelector('.container');
const generateButton = document.querySelector('#generate');
const drawingModeButtons = document.querySelectorAll('button.drawingMode');
const coloringModeButtons = document.querySelectorAll('.colorMode');
const colorPicker = document.querySelector('input[type="color"]');
const sizeRange = document.querySelector('#gridSize');
const sizeLabel = document.querySelector('label[for="gridSize"]');

let containerWidth = 400;
let squaresInRow = 16;
let pencilColor = '#000000';
let divs = [];
let isDrawing = false;
let defaultMode = "hold";
let coloringMode = "pencil"

container.style.width = `${containerWidth}px`;
container.style.height = container.style.width;

generateButton.addEventListener('click',createNewGrid);

drawingModeButtons.forEach(button => button.addEventListener('click',assignModeChange));

let holdModeDown = function (){
    isDrawing = true;
};

let holdModeUp = function () {
    isDrawing = false;
};

let clickMode = function () {
    isDrawing = !isDrawing;
};

function assignModeChange() {
    drawingModeButtons.forEach(button => button.classList.remove("active"));
    this.classList.add("active");

    removeDrawingListeners();
    switchDrawingMode(this.value);
}

function switchDrawingMode(mode){
    if(mode === 'hold'){
        document.addEventListener('mousedown',holdModeDown);
        document.addEventListener('mouseup',holdModeUp);
    } else {
        document.addEventListener('click',clickMode);
    }
    isDrawing = false;
}

function removeDrawingListeners (){
    document.removeEventListener('mousedown',holdModeDown);
    document.removeEventListener('mouseup',holdModeUp);

    document.removeEventListener('click',clickMode);
}

colorPicker.addEventListener('change',changePenColor);

function changePenColor(event){
    pencilColor = event.target.value;
}

coloringModeButtons.forEach(button => button.addEventListener('click',switchColoringMode));

function switchColoringMode(event){
    coloringMode = this.value;

    coloringModeButtons.forEach(button => button.classList.remove("active"));
    this.classList.add("active");
}

sizeRange.addEventListener('dragstart',e => e.preventDefault());
sizeRange.addEventListener('drop',e => e.preventDefault());
sizeRange.addEventListener('change',updateSize);

function updateSize(event){
    squaresInRow = event.target.value;
    sizeLabel.textContent = `${squaresInRow} x ${squaresInRow}`;

    createNewGrid();
}

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

        div.addEventListener('mouseenter',colorSquare);
        div.addEventListener('mousedown',colorSquare);
        
        container.appendChild(div);
        divs.push(div);
    }   
}

function colorSquare(event){
    if(isDrawing || event.type === 'mousedown'){
        switch (coloringMode){
            case 'pencil':
                event.target.style.backgroundColor = pencilColor;
                break;
            case 'rainbow':
                event.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                break;
            case 'eraser':
                event.target.style.backgroundColor = '#ffffff';
                break;
        }
    }
}

switchDrawingMode(defaultMode);

generateDivs();