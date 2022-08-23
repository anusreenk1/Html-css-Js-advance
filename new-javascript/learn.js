console.log("hello");
document.write("abcs");
document.write("<p>am here<p/><br><h1>hello dears</h1>");
document.write(2 + 3);
console.log(2 + 3);
console.log("<p>hope you are fine<p/>");
var a;
a = "hello";
console.log(typeof a);
document.write("<br> <p>logo here</p>" + a + "hello");
var num = 2;
var num2 = 2.9;
console.log(typeof num2);
var num = null;
console.log(typeof num);
const five = "anu";
console.log(typeof five);
function calc(a, b) {
  console.log(a + b);
}
calc(5, 6);
console.log(2 ** 8);
var a = 5;
a += 6;
console.log(a);
var b = (a += 2);
console.log(b);
var c = 10;
var d = (c %= 3);
console.log(c);
var a = 5;
var b = "5";
var c = 6;
console.log(a == b);
console.log(a === b);
console.log(a <= c);
console.log(a != b);
console.log(a < b && b < c);
console.log(a > b || b < c);
var a;
a = 12;
if (a < 10) {
  console.log(a++);
} else if (a == 10) {
  console.log(a);
} else {
  console.log(a--);
}
var k = 3;
switch (k) {
  case 5:
    console.log("good");
    break;
  case 2:
    console.log("bad");
    break;
  case 3:
    console.log("better");
    break;
}
for (var a = 0; a < 10; a++) {
  console.log(a);
}
var s = 0;
do {
  console.log(s);
  s++;
} while (s < 10);
var p = 5;
do {
  console.log(p);
  p++;
} while (p < 20);
function even(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
even(9);
var a = 10;
var b = 12;
var c = 1;
if (a < b && a < c) {
  console.log("a is less");
} else if (b < a && b < c) {
  console.log("b is less");
} else {
  console.log("c is less");
}
var a = 2;
switch (true) {
  case a > 0:
    console.log("positive");
    break;
  case a < 0:
    console.log("negetive");
    break;
  case a == 0:
    console.log("zero");
    break;
  default:
    console.log("nothing");
}
const j = prompt("enter operation +, - ,* ,/");
const m = parseFloat(prompt("enter a number:"));
const n = parseFloat(prompt("enter a number:"));
if (j == "+") {
  console.log(m + n);
} else if (j == "-") {
  console.log(m - n);
} else if (j == "*") {
  console.log(m * n);
} else if (j == "/") {
  console.log(m / n);
} else {
  console.log("wrong");
}
