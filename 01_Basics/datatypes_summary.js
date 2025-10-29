// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// Return type of variables in JavaScript

// 1) Primitive Datatypes --  Call by Value -- the original refrence is not given by rather a copy is provided
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes -- Call by refrence
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


let score = 100
let anotherScore = "100"

const isLoggedIn = true
let tempOutside = null
let emailId;

const id = Symbol("123")
const anotherId = Symbol('123')

console.log(id,anotherId);
console.log(id===anotherId);

const bigNumber = 1n
console.log(bigNumber,typeof(bigNumber));

const fam = ['sun','moon','poet','sunflower']

console.log(fam,typeof fam); // object

let myObj = {
    name : "suraj",
    age : 23
}

console.log(myObj,typeof myObj); // object

let func_name = function(){
    console.log("Suraj More");
    return "hello world" ;
};

console.log(func_name(),typeof func_name); // function

// Stack -- Primitive -- Copy of Original Data
// Heap -- Non - Primitive - Reference

let myName = "Suraj "

let anotherName = myName 
anotherName = "More"
console.log(myName,anotherName); // data is different in both as it is primitve and non refrential and rather a copy is provided
// console.log(id(myName),id(anotherName));

let user1 = {
    name : "suraj",
    age : 23
}

let user2 = user1

user2.name = "changed"

// here since we changed the data in user2 but as non primitive is a refrenctial typr so the data gets changed in user1 too 

console.log(user1.name,user2.name);
