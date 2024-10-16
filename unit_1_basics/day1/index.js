// Quick intro to Variables

/*
There are 3 variables in JavaScript
- const
- var
- let

const is a constant variable, you assign a value to it once that cannot be changed while the program is running.

we don't use var because it has all sorts of weird issues occasionally. you can read about them here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

let is also a changable variable. It'll allow you to change it's content while the program runs. You cannot access it's content in a different scope (which is a good thing)
*/

// Say for example I want to use a var

var myVariable = 1;
console.log(myVariable) // Returns 1

// Generally speaking, don't use var.

// Let's look at const. See we're defining it as 1.
const myConstant = 1;
console.log(myConstant); // Returns 1

// Let's use try catch to attempt to reassign a constant.
try {
  myConstant = 2;
}catch{
  console.log("myConstant after change", myConstant);
  console.log("As you can see, it failed to make myConstant the number 2");
}

// Now we'll use let.
let bankAccountBalance = 500;
console.log(bankAccountBalance)
// See it's 500. But here's the issue with using let.

bankAccountBalance = 5000;
console.log(bankAccountBalance) // Returns 5000

// See the issue, it's 5000. You can change a let which could potentially be an issue especially if it's a set value.

