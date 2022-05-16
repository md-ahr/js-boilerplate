require.context("../images", false);
require.context("../images/svg", false);

import "../scss/app.scss";
import Calculator from "./modules/Calculator";

let calc = new Calculator(10, 2);

console.log(`Sum: ${calc.sum()}`);
console.log(`Sub: ${calc.sub()}`);
console.log(`Mult: ${calc.mult()}`);
console.log(`Div: ${calc.div()}`);
