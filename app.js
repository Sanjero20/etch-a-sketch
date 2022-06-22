const gridLayout = document.querySelector('.grid-layout')
const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');
const slider = document.querySelector('.slider')
let mousedown = false;

let grid = slider.value;
let boxSize;
let boxs;

// Create a Grid
getGridSize(grid);
checkMouseEvent();
drawOnBox()
clear()


// Functions bruh
function createGrid(grid){
  boxSize = 100 /grid;
  for (let i=0; i < grid * grid; i++) {
    const div = document.createElement('div');
    setBoxStyling(div);
    container.appendChild(div);
  }
  boxs = document.querySelectorAll('.container div');
}

function setBoxStyling(element) {
  // element.setAttribute('style', 'border: 1px solid black');
  element.style['width'] = `${boxSize}%`;
  element.style['height'] = `${boxSize}%`;
  element.style['border'] = '1px solid lightgrey';
  element.style['box-sizing'] = 'border-box';
  element.setAttribute('draggable', false);
}

function addColor(element) {
  element.classList.add('change-color');
}

function checkMouseEvent() {
  // Check for mouse up and mouse down events

  document.body.onmousedown = () => {
    mousedown = true;
    drawOnBox();
  }
  
  document.body.onmouseup = () => {
    mousedown = false;
  }

  document.body.addEventListener('drag', () => mousedown = false)
}

function getGridSize(grid) {
  displayLayout(grid);
  createGrid(grid);

  slider.oninput = function() {
    removeGrid();
    displayLayout(slider.value)
    createGrid(slider.value)
    drawOnBox()
  } 
}

function removeGrid() {
  container.innerHTML = "";
}

function drawOnBox() {
  boxs.forEach(box => {
    box.addEventListener('mouseover', () => {
      if (mousedown) {addColor(box)}
    });

    box.addEventListener('mousedown', () => addColor(box))
  });
}

function clear() {
  clearBtn.onclick = () => {
    boxs.forEach(box => {
      box.classList.remove('change-color');
    });
  }
}

function displayLayout(grid) {
  gridLayout.innerHTML = `${grid}x${grid} Layout`
}