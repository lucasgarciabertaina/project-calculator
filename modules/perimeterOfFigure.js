import squarePerimeter from './geometric/square/perimeter.js'

const display = document.getElementById("display");
export default (figure) => {
  switch (figure) {
    case 'square':
      display.placeholder = 'Insert a size'
      display.addEventListener('keydown', (keyDown) => {
        if (keyDown.key == 'Enter') {
          display.value = squarePerimeter(Number(display.value));
        }
      })
      break;
    case 'circle':
      display.placeholder = figure
      break;
    case 'triangle':
      display.placeholder = figure
      break;
  }
}