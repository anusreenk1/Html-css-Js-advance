console.log("hello world js");
document.write("what a beautiful day!");
console.log(2 + 3);
document.write("<div><h1>Hello Hello</h1></div>");
document.write("<p>calm down the </p> <br> <p>here the forest</p>");
var a = "hello";
document.write(a + "<br>");
console.log(typeof a);
var a = "goodmorning";
document.write(a + "<br>");
var number1 = 5;
var number2 = 9.1;
console.log(typeof number1);
console.log(typeof number2);
var num;
console.log(typeof num);
var num = null;
console.log(typeof num);
const pi = 3.14;
console.log(pi);
// pi = 5.9;
// console.log(pi);
console.log(typeof pi);
function calc() {
  console.log("hello world");
}
calc();
var a = 2;
a--;
console.log(a);
var b = 5;
b++;
console.log(b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(2 ** 3);
console.log(2 ** 2);
var value = 6;
var cal = (value += 9);
console.log(cal);
var person = (value -= 10);
console.log(person);
var m = (value *= 7);
console.log(m);
var div = (value /= 2);
console.log(div);
var mod = (value %= 6);
console.log(mod);
var a = 5;
var b = "5";
var c = 9;
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a > c);
console.log(a < c);
console.log(a <= b);
console.log(b >= c);
var a = 5;
var b = 10;
var c = 20;
console.log(a < b && c > a);
console.log(a > b || c > b);
console.log(a != b);

var a = 0;
if (a > 0) {
  console.log("its positive");
} else if (a < 0) {
  console.log("its negetive");
} else {
  console.log("its zero");
}
var p = "C";
switch (p) {
  case "A":
    console.log("Great");
    break;
  case "B":
    console.log("try again");
    break;
  case "C":
    console.log("again failed");
    break;
  default:
    console.log("Invalid");
    break;
}
for (var a = 0; a <= 10; a++) {
  console.log(a);
}
var s = 0;
while (s <= 9) {
  console.log(s);
  s++;
}
var d = 0;
do {
  console.log(d);
  d++;
} while (d <= 15);

function clac(a, b) {
  console.log(a + b);
}
calc(5, 6);
function name(name) {
  console.log(name + " hello");
}
name("vicky");
function number(num) {
  if (num % 2 == 0) {
    console.log("its an even number");
  } else {
    console.log("its an odd number");
  }
}
number(6);
number(5);

var a = 6;
var b = 7;
var c = 8;

if (a > b && a > c) {
  console.log("a is largest");
} else if (b > a && b > c) {
  console.log("b is largest");
} else {
  console.log("c is largest");
}

var a = 6;

switch (true) {
  case a > 0:
    console.log("its positive");
    break;
  case a < 0:
    console.log("its negetive");
    break;
  case a == 0:
    console.log("its zero");
    break;
  default:
    console.log("nothing to display");
}
// simple calculator

// var a;
// var b;
const c = prompt("enter the operation (either +,-,* or /): ");
const a = parseFloat(prompt("Enter a number: "));
const b = parseFloat(prompt("Enter second number: "));

if (c == "+") {
  console.log(a + b);
} else if (c == "-") {
  console.log(a - b);
} else if (c == "*") {
  console.log(a * b);
} else if (c == "/") {
  console.log(a / b);
} else {
  console.log("wrong");
}
