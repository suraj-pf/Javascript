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