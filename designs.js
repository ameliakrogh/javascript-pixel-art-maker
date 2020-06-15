// Select color input and store updated values when changed by user
const colorPickerElement = document.getElementById('colorPicker');
let color = document.getElementById('colorPicker').value;
colorPickerElement.addEventListener('input', function updateColor(event) {
    color = event.target.value;
});

// Select size inputs and store updated values when changed by user
const gridHeightElement = document.getElementById('inputHeight');
let gridHeight = document.getElementById('inputHeight').value;
gridHeightElement.addEventListener('input', function updateHValue(event) {
    gridHeight = event.target.value;
});

const gridWidthElement = document.getElementById('inputWidth');
let gridWidth = document.getElementById('inputWidth').value;
gridWidthElement.addEventListener('input', function updateWValue(event) {
    gridWidth = event.target.value;
});

// When height and width inputs are submitted by the user, call makeGrid()
const sizePicked = document.getElementById('sizePicker');
sizePicked.addEventListener('submit', makeGrid);

// Access table element from the HTML file
const grid = document.getElementById('pixelCanvas');

// Add a click event listener to change the background color of the target of the click event
grid.addEventListener('click', function setCellColor(event) {
    event.target.style.backgroundColor = color;
});

// makeGrid Function to draw the grid based on input values
function makeGrid(event) {
    event.preventDefault();
    clearGrid();
    for (var r = 1; r <= gridHeight; r++){
        const newTableRow = document.createElement('tr');
        for (var c = 1; c <= gridWidth; c++){
            const newTableCell = document.createElement('td');
            newTableRow.appendChild(newTableCell);
        }
        grid.appendChild(newTableRow);
    }
}

// clearGrid Function to clear the grid before drawing a new one
function clearGrid() {
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}