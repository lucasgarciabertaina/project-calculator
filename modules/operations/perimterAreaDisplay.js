import areaOfFigure from "../areaOfFigure.js";
import perimeterOfFigure from "../perimeterOfFigure.js";


export default (geometricFigure) => {
  const circle = document.getElementById("circle");
  circle.remove();

  const perimeter = document.getElementById("square");
  perimeter.setAttribute("id", "perimeter");
  perimeter.style.gridColumn = "1/7";
  perimeter.innerHTML = "Perimeter";

  const area = document.getElementById("triangle");
  area.setAttribute("id", "area");
  area.style.gridColumn = "7/13"
  area.innerHTML = "Area";

  area.addEventListener('click', () => { areaOfFigure(geometricFigure) });
  perimeter.addEventListener('click', () => { perimeterOfFigure(geometricFigure) });
}