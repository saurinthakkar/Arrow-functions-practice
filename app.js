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
import { add } from "./add.js";
import { sub } from "./sub.js";

alert(add(6, 4));
console.log(sub(9, 4));
