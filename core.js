const container = document.querySelector('.container');

let containerWidth = 400;
container.style.width = `${containerWidth}px`;
container.style.height = container.style.width;

let squaresInRow = 16;

let divs = [];

for(let i = 0; i < squaresInRow**2; i++){
    const div = document.createElement('div');

    div.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    div.style.width = `${containerWidth/squaresInRow}px`
    div.classList.toggle('square');
    
    container.appendChild(div);
    divs.push(div);
}