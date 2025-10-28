// Comparison converts the data type from null to 0 or something but the equals doesnt convert them
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); //true 
console.log("02" > 1); // true

// converts null to 0 or Nan sometimes not fix
// Comparison converts the data type from null to 0 or something but the equals doesnt convert them
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true 

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === 

console.log("2" == 2);
console.log("2" === 2);

// 
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
a++; console.log(a)
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


/*

If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

The increment operator can only be applied on operands that are references (variables and object properties; i.e., valid assignment targets). ++x itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.

*/ 

// let x = 3;
// const y = x--;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:2, y:3"

// let a = 3;
// const b = --a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:2, b:2"

// let x = 3;
// const y = x--;
// // x is 2; y is 3

// let x2 = 3n;
// const y2 = x2--;
// // x2 is 2n; y2 is 3n

// const x = 4;
// const y = -x;

// console.log(y);
// // Expected output: -4

// const a = "4";
// const b = -a;

// console.log(b,typeof b);
// // Expected output: -4

/*
Description
The - operator is overloaded for two types of operands: number and BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt negation if the operand becomes a BigInt; otherwise, it performs number negation.

*/