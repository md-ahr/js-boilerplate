require.context("../assets/images", false);
require.context("../assets/images/svg", false);

import "@popperjs/core";
import "bootstrap";
import "../scss/app.scss";
import Calculator from "./modules/Calculator";

const a = 10;
const b = 2;

let calc = new Calculator(a, b);

$("#btn-action").on("click", () => {
  $("#sum").text(`Summation of ${a} and ${b} is: ${calc.sum()}`);
  $("#sub").text(`Substraction of ${a} and ${b} is: ${calc.sub()}`);
  $("#mult").text(`Multiplication of ${a} and ${b} is: ${calc.mult()}`);
  $("#div").text(`Division of ${a} and ${b} is: ${calc.div()}`);
});
