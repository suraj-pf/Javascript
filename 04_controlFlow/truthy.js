// // let userEmail = ""
// let userEmail = []

// if (userEmail){
//     console.log("Got a email");
// }
// else{
//     console.log("Dont have a email");
// }

// // Falsy Value

// // false,0,-0,NaN,"",undefined,null, BigInt -- 0n 

// //truthy values

// // "0"," ","false",[],{},function(){}

// // for array

// let array = []

// if (array.length === 0) {
//     console.log("Array is empty");
// }

// let anObject = {}

// if (Object.keys(anObject).length == 0) {
//     console.log("Object is empty");
    
// }

// console.log(false == 0);
// console.log('' == 0);
// console.log(false == "");

// // Nullish Coalescing Operator (??): null undefined

// let var1 ;

// // var1 = 10 ?? 20 // prints 10
// // var1 = null ?? 20 // prints 20
// // var1 = undefined ?? 20; // prints 20
// var1 = undefined ?? null ?? 10 ?? 20; // prints 10

// console.log(var1);

// Ternary operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Price greater than 80") : console.log("Price smaller than 80")
