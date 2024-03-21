"use strict"

$(document).ready(() => {
    let container = document.querySelector("#container");
    let resetBtn = document.querySelector("#resetBtn");

    //container.style.width = (16 * 20) + 'px';
    createGrid(container, 16);

    resetBtn.addEventListener('click', () => {
        let size = prompt('Please enter size of new grid');

        while(size >= 100){
            size = prompt('Please enter size of new grid (less than 100)'); 
        }

        resetGrid(container, size);
    });
});

// function that makes a custom grid 
const createGrid = (container, size) => {
    let gSize = size * size;
    for(let i = 0; i < gSize; i++){
        let color = getRandomColor();
        let div = document.createElement('div');
        div.setAttribute('class', 'cell');
        //div.textContent = (i+1);
        div.style.width = (960 / size) + 'px';
        div.style.height = (960 / size) + 'px';
        div.addEventListener('mouseover', (e) => {
            mouseOver(e, color);
        });
        //div.addEventListener('mouseout', mouseOut);
        container.appendChild(div);
    }
};

// function that resets the Etch-a-sketch grid
const resetGrid = (container, size) =>{
    let cells = document.getElementsByClassName('cell');

    for(let cell of cells){
        cell.parentNode.removeChild(cell);
    }
    container.innerHTML = '';
    //container.style.width = (size * 20) + 'px';
    createGrid(container, size);
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