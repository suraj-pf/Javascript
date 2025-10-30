let balance = new Number(100)


let accountNumber = new Number('100') // => Number
// let accountNumber = new Number(true) // => Number 1
// let accountNumber = new Number(undefined) // => Number NaN
// let accountNumber = new Number(null) // => Number 0

console.log(balance,accountNumber);

let number = 100
console.log(number.toString().length,typeof number); // use to string to access the properties of the string methods

let anotherNumber = 100.1231

console.log(anotherNumber.toFixed(2)) // return float about x decimal
console.log(anotherNumber.toPrecision(4)) // return precision value till the mentioned decimal if more then returns exponential value

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0-1 values
console.log((Math.random()*10) + 1 ); // we need from 1 to more 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min) // from the range we want
