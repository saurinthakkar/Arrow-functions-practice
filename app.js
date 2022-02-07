//console.log("hello world");

// let double = (n) => n * 5;
// alert(double(3, 8));

// let sayHi = alert("hello");
// sayHi;

// let age = prompt("what is your age", 18);

// let welcome =
//   age < 18 ? () => alert("less than 18") : () => alert("greater than 18");

// welcome();

// let sum = (a, b) => {
//   let newSum = a + b;
//   return newSum * 2;
// };

// alert(sum(9, 8));

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// let ask = confirm("Do you agree");

// let answer =
//   ask === true
//     ? () => alert("you agreed")
//     : () => alert("you cancelled execution");

// answer();

//Import / Export Modules
// import { add } from "./add.js";
// import { sub } from "./sub.js";

// alert(add(6, 4));
// console.log(sub(9, 4));

//Destructuring Object

// let scores = [500, 400, 600];

// let [x, y, z, w] = scores;

// console.log(x, y, z, w);

// let score = {
//   pass: 80,
//   avg: 50,
//   fail: 30,
// };

// let { pass, avg, fail } = score;

// console.log(typeof pass, avg, fail);

//ES6 spread operator

// const collectOne = [10, 20, 30];
// const collectTwo = [40, 50, 60];

// let collectThree = [...collectOne, ...collectTwo];

// console.log(collectThree);

// let scores = [500, 400, 300];

// let [x, ...y] = scores;

// console.log(x, y);

var add = (a, b) => {
  return a + b;
};

console.log(add(2, 9));
