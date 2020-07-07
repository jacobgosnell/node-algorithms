// Let's create a function that returns 9 squared
function ninesquared() {
  return 9*9;
}
ninesquared(); // 81

// Now 8 squared... and so on
// this breaks the DRY principle

// Create a generalization

function copyArrayAndMultiplyBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3]
let result = copyArrayAndMultiplyBy2(myArray)

function copyArrayAndDivideBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] /2);
  }
  return output
}
let resultTwo = copyArrayAndDivideBy2(myArray)

// better generalization

function copyArrayAndManipulate(array, instructions) {
  // let output = [];
  // for (let num = 0; num < array.length; num++) {
  //   output.push(instructions(array[num]));
  // }
  // return output;
  return array.map(e => instructions(e));
}

function multiplyBy2(input) {
  return input * 2;
}

console.log(copyArrayAndManipulate([1, 2, 3], multiplyBy2));

// obviously using callbacks and higher order functions allows us a tool in order to write
// code that follows the DRY principle.