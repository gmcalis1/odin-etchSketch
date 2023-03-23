//import id's container and grid-container from html and assign them to javascript variables
const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
const adjust = document.querySelector('#adjust');


let x = 16;
let y = 16;


//create div variable that creates an html div. The div will also have the class 'grid' attached
// along with width, height, and background color adjustments.
const div = document.createElement('div');
div.classList.add('grid');
div.style.width = '10px';
div.style.height = '10px';
div.style.backgroundColor = 'black';

//create function that creates an adjustable grid out of the previously initiated div.
//note that the cloneNode allows multiple copies of the div variable to be appended.
function createGrid(x, y){
    console.log(x);
    console.log(y);
    for( i = 0; i < x; i++){
        for(j = 0; j < y; j++){
            gridContainer.append(div.cloneNode(true));
        }
    }
}

//create a grid variable that imports all grid classes and attaches an event listener to all of them
// that waits for the cursor to hover. Once the cursor is hovering the background color of that div 
// block will turn to a different color.
let grid = document.querySelectorAll('.grid');
grid.forEach((grid) => {
    grid.addEventListener('mouseover', function (e){
        console.log(e);
        e.target.style.backgroundColor = 'yellow';
    });
});






//call upon the function to create the grid.
createGrid(x, y);



adjust.addEventListener('click', newGrid);

function newGrid() {
    for( i = 0; i < x; i++){
        for(j = 0; j < y; j++){
            gridContainer.removeChild(grid);
        }
    }
    x = prompt("Enter a new length for the grid:", 16);
    y = prompt("Enter a new height for the grid:", 16);
    createGrid(x, y);
    const grid = document.querySelectorAll('.grid');
    grid.forEach((grid) => {
        grid.addEventListener('mouseover', function (e){
            console.log(e);
            e.target.style.backgroundColor = 'yellow';
        });
    });
}

