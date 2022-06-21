let grid = 0;

do {
  grid= window.prompt("Create a grid of: (2-100)");
}while (grid < 2 || grid > 100)

let gridSize = 100 /grid;
console.log("size per box:", gridSize);

const container = document.querySelector('.container')

for (let i=0; i < grid * grid; i++) {
  const div = document.createElement('div');
  setBoxStyling(div);
  container.appendChild(div);
}

function setBoxStyling(element) {
  element.setAttribute('style', 'border: 1px solid black');
  element.style['width'] = `${gridSize}%`;
  element.style['height'] = `${gridSize}%`;
  element.style['box-sizing'] = 'border-box'; 
}