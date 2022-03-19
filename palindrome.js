const num1 = 1718;
let num2 = 121;
const num3 = 34543;
const num4 = 891;

function palidrome(num) {
  //console.log(typeof num);
  let temp = num;
  let r,
    sum = 0;
  while (num > 0) {
    r = num % 10;
    sum = sum * 10 + r;
    num = parseInt(num / 10);
    //console.log(num);
  }

  //console.log(num);

  if (temp === sum) {
    console.log(sum, temp);
    return true;
  } else {
    //console.log(num, temp);
    return false;
  }
}

console.log(palidrome(num1));
console.log(palidrome(num2));
console.log(palidrome(num3));
console.log(palidrome(num4));
// console.log(palidrome(num2));
// console.log(palidrome(num3));
// console.log(palidrome(num4));
