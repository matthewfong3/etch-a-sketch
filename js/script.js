"use strict"

$(document).ready(() => {
    let container = document.querySelector("#container");
    let resetBtn = document.querySelector("#resetBtn");

    createGrid(container, 16); // initialize a 16x16 grid

    resetBtn.addEventListener('click', () => {
        let dimensions = prompt('Please enter dimensions of new grid');

        while(Number(dimensions) >= 100){
            dimensions = prompt('Please enter dimensions of new grid (less than 100)'); 
        }

        resetGrid(container, dimensions);
    });
});

// function that makes a custom grid 
const createGrid = (container, dimensions) => {
    let gridSize = dimensions ** 2;
    let canvasSize = 800;

    for(let i = 0; i < gridSize; i++){
        let color = getRandomColor();
        let div = document.createElement('div');

        div.setAttribute('class', 'cell');
        //div.textContent = (i+1);
        div.style.width = (canvasSize / dimensions) + 'px';
        div.style.height = (canvasSize / dimensions) + 'px';
        div.addEventListener('mouseover', (e) => {
            mouseOver(e, color);
        });

        container.appendChild(div);
    }
};

// function that resets the Etch-a-sketch grid
const resetGrid = (container, dimensions) =>{
    let cells = document.getElementsByClassName('cell');

    for(let cell of cells){
        cell.parentNode.removeChild(cell);
    }
    container.innerHTML = '';
    createGrid(container, dimensions);
};

// bonus: random color for each new grid iteration
const getRandomColor = () => {
    let r = Math.floor(Math.random() * 254);
    let g = Math.floor(Math.random() * 254);
    let b = Math.floor(Math.random() * 254);

    return `rgb(${r}, ${g}, ${b})`;
};

// function that fires when mouseover event occurs on grid cell - changing the grid color
const mouseOver = (e, color) => {
    let target = e.target;
    target.style.backgroundColor = color;
    target.style.opacity = Number(target.style.opacity) + 0.1; // bonus: increase 'weight' of grid cell for each mouseover event
};

// function that fires when mouseout event occurs on grid cell - changing the grid color back
const mouseOut = (e) => {
    let target = e.target;
    target.style.backgroundColor = 'white';
};