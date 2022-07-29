console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num) {
  return function (plusNum) {
    // console.log(plus15(10));
    return plusNum + num;
  };
}
let plus15 = plus(15);
console.log(plus15(10));
