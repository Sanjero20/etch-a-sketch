const gridLayout = document.querySelector('.grid-size')
const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');
const slider = document.querySelector('.slider');
const colorpick = document.querySelector('.color-picker');

let mousedown = false;

let grid = slider.value;
let lineColor = "#f7f7f7";
let color = colorpick.value;

let boxSize;
let boxs;

// Create a Grid
getGridSize(grid);
changeColor();
checkMouseEvent();
drawOnBox()
clearDrawing()


// Functions bruh
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
  element.style['border'] = `1px solid ${lineColor}`;
  element.style['box-sizing'] = 'border-box';
  element.setAttribute('draggable', false);

  // prevents the element from being dragged
  element.addEventListener('dragstart', (e) => {
    e.preventDefault()
  })
}

function addColor(element) {
  element.style['background-color'] = color;
  element.style['border'] = color;
  // element.classList.add('change-color');
}

function checkMouseEvent() {
  // Check for mouse up and mouse down events
  document.body.onmousedown = () => mousedown = true;
  document.body.onmouseup = () => mousedown = false;
  document.body.addEventListener('drag', () => mousedown = false)
}

function removeGrid() {
  container.innerHTML = "";
}

function drawOnBox() {
  boxs.forEach(box => {
    box.addEventListener('mouseover', () => {
      if (mousedown) {addColor(box)}
      // addColor(box);
    });

    box.addEventListener('mousedown', () => addColor(box))
  });
}

function clearDrawing() {
  clearBtn.onclick = () => {
    boxs.forEach(box => {
      box.style['backgroundColor'] = '';
      box.style['border'] = `1px solid ${lineColor}`;
    });
  }
}

function displayLayout(grid) {
  gridLayout.innerHTML = `${grid}x${grid} Layout`
}

function changeColor() {
  colorpick.onchange = function() {
    color = colorpick.value;
  }
}