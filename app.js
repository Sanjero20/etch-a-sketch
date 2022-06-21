let grid = 16;
let boxSize = 100 /grid;
// do {
//   grid= window.prompt("Create a grid of: (2-64)");
// }while (grid < 2 || grid > 64)
const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');

// Create a Grid
createGrid(grid);

const boxs = document.querySelectorAll('.container div');
boxs.forEach(box => {
  box.addEventListener('mouseover', () => {
    addColor(box);
  });
});

clearBtn.onclick = () => {
  boxs.forEach(box => {
    box.classList.remove('change-color');
  });
}

// Functions bruh
function createGrid(grid){
  for (let i=0; i < grid * grid; i++) {
    const div = document.createElement('div');
    setBoxStyling(div);
    container.appendChild(div);
  }
}

function setBoxStyling(element) {
  // element.setAttribute('style', 'border: 1px solid black');
  element.style['width'] = `${boxSize}%`;
  element.style['height'] = `${boxSize}%`;
  element.style['box-sizing'] = 'border-box'; 
}

function addColor(element) {
  element.classList.add('change-color');
}

function clearColor(element) {
  console.log(element)
}
