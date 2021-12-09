import permieterArea from './perimterAreaDisplay.js'

export default () => {
  const back = document.getElementById("fg");
  back.setAttribute("id", "back");
  back.innerHTML = "Back"

  const avege = document.getElementById("avege");
  avege.remove();

  const square = document.getElementById("disc");
  square.setAttribute("id", "square");
  square.style.gridColumn = "1/5";
  square.innerHTML = "Square";

  const circle = document.getElementById("mo");
  circle.setAttribute("id", "circle");
  circle.style.gridColumn = "5/9"
  circle.innerHTML = "Circle";

  const triangle = document.getElementById("me");
  triangle.setAttribute("id", "triangle");
  triangle.style.gridColumn = "9/13"
  triangle.innerHTML = "Triangle";

  const elements = { square, circle, triangle }
  for (const element of elements) {
    addEventListener("click", permieterArea(element))
  }
}