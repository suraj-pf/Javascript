let score = 33
// let score = "33abc" //=> NaN -- Not a Number
// let score = null //=>  0
// let score = undefined // => NaN
// let score = true // => 1- true 0-false

console.log(typeof score);
// console.log(typeof(score)); // another method to get type of

let valueInNumber = Number(score);

console.log(typeof(valueInNumber),valueInNumber);

/*
Problem with data type conversion
so what if the number assocaited with score is a string then after conversion it changes it type nut the value changes to NaN
*/

let isLoggedIn = true // ==> true 
// let isLoggedIn = 1 // ==> true 
// let isLoggedIn = ""  // ==> false
// let isLoggedIn = 22  // ==> true
// let isLoggedIn = null  // ==> false
// let isLoggedIn = undefined  // ==> false
// let isLoggedIn = true
console.log(typeof isLoggedIn,isLoggedIn);

let booleanLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanLoggedIn,booleanLoggedIn);

// let somenum = 33 // => string
// let somenum = null // => null
// let somenum = undefined // => undefined
let somenum = true // => true

console.log(typeof somenum,somenum);

let stringNumber = String(somenum)

console.log(typeof stringNumber,stringNumber);
