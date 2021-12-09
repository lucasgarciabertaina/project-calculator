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
console.log(fashion([1, 2, 4, 1, 3, 9, 7, 10, 10, 10]))
console.groupEnd();