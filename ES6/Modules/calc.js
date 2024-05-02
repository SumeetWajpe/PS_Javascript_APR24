// import Addition, { Product, PI } from "./math.js";
// console.log("Addition is : " + Addition(20, 30));
// console.log("Multiplication is : " + Product(20, 30));
// console.log("Value of PI " + PI);

import * as MathModule from "./math.js";
console.log("Addition is : " + MathModule.default(20, 30));
console.log("Multiplication is : " + MathModule.Product(20, 30));

