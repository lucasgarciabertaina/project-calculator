import squareArea from './modules/geometric/square/area.js'
import squarePerimeter from './modules/geometric/square/perimeter.js'

import trianglePerimeter from './modules/geometric/triangle/perimeter.js'
import triangleArea from './modules/geometric/triangle/area.js'

import circlePerimeter from './modules/geometric/circle/permiterer.js'
import circleArea from './modules/geometric/circle/area.js'

import discount from './modules/discount/discount.js'

import average from './modules/statistics/average.js'
import median from './modules/statistics/median.js'
import fashion from './modules/statistics/fashion.js'

import figureDisplays from './modules/operations/figuresDisplay.js'

console.group("square");
console.log(squarePerimeter(7));
console.log(squareArea(7));
console.groupEnd();

console.group("triangle");
console.log(trianglePerimeter([1, 2, 3]));
console.log(triangleArea([3, 3, 3]))
console.groupEnd();

console.group("circle");
console.log(circlePerimeter(2))
console.log(circleArea(2))
console.groupEnd()

console.group("discount");
console.log(discount(100, 10));
console.groupEnd();

console.group("statistics");
console.log(average([1, 2, 3, 4]));
console.log(median([1, 2, 4, 1, 3, 9, 7, 10]));
console.log(fashion([1, 2, 4, 1, 3, 9, 7, 10, 10, 10, 2, 1]));
console.groupEnd();

const calculatorElements = {
  number0: document.getElementById("0"),
  number1: document.getElementById("1"),
  number2: document.getElementById("2"),
  number3: document.getElementById("3"),
  number4: document.getElementById("4"),
  number5: document.getElementById("5"),
  number6: document.getElementById("6"),
  number7: document.getElementById("7"),
  number8: document.getElementById("8"),
  number9: document.getElementById("9"),
  plus: document.getElementById("+"),
  less: document.getElementById("-"),
  x: document.getElementById("x"),
  comma: document.getElementById(","),
  divide: document.getElementById("/"),
};

const disc = document.getElementById("disc");
const avege = document.getElementById("avege");
const mo = document.getElementById("mo");
const me = document.getElementById("me");
const fg = document.getElementById("fg");

fg.addEventListener("click", figureDisplays)

const display = document.getElementById("display");

const cleanDisplay = () => {
  display.value = " ";
}
const elmentsInCalculator = (element, text) => {
  element.addEventListener("click", () => {
    const inputText = display.innerHTML;
    display.value = inputText + text;
  })
}

for (const element in calculatorElements) {
  const elementInObjetct = calculatorElements[element];
  elmentsInCalculator(elementInObjetct, elementInObjetct.getAttribute("id"))
}

// display.addEventListener("keypress", (keyPressed) => {
//   if (keyPressed.key == 'Enter') {
//     switch (display.value) {
//       case value:

//         break;

//       default:
//         break;
//     }
//   }
// })


