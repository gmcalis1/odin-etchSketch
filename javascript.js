//import id's container and grid-container from html and assign them to javascript variables
const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');

//create div variable that creates an html div. The div will also have the class 'grid' attached
// along with width, height, and background color adjustments.
const div = document.createElement('div');
div.classList.add('grid');
div.style.width = '10px';
div.style.height = '10px';
div.style.backgroundColor = 'black';

//create function that creates an adjustable grid out of the previously initiated div.
//note that the cloneNode allows multiple copies of the div variable to be appended.
function createGrid(){
    for( i = 0; i < 16; i++){
        for(j = 0; j < 16; j++){
            gridContainer.append(div.cloneNode(true));
        }
    }
}
//call upon the function to create the grid.
createGrid();

//create a grid variable that imports all grid classes and attaches an event listener to all of them
// that waits for the cursor to hover. Once the cursor is hovering the background color of that div 
// block will turn to a different color.
const grid = document.querySelectorAll('.grid');
grid.forEach((grid) => {
    grid.addEventListener('mouseover', function (e){
        console.log(e);
        e.target.style.backgroundColor = 'yellow';
    });
});



