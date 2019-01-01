"use strict";

var a = 50;
var b = 100;
if (true) {
  var _a = 60;
  var c = 10;
  console.log(_a / c); // 6
  console.log(b / c); // 10
}
console.log(c); // 10
console.log(a); // 50

// New Syntax
var newOne = function newOne() {
  console.log("Hello World..!");
};

var NewOneWithParameters = function NewOneWithParameters(a, b) {
  console.log(a + b); // 30
};
NewOneWithParameters(10, 20);