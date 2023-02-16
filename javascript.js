const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');

const div = document.createElement('div');
div.classList.add('grid');
div.style.width = '10px';
div.style.height = '10px';
div.style.backgroundColor = 'black';

function createGrid(){
    for( i = 0; i < 16; i++){
        for(j = 0; j < 16; j++){
            gridContainer.append(div.cloneNode(true));
        }
    }
}
createGrid();

const grid = document.querySelector('.grid');
grid.addEventListener('mouseover', function (e){
    console.log(e);
    e.target.style.backgroundColor = 'yellow';
});



