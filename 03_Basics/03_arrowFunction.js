const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
    // console.log(`${username}, welcome to website`); // throws error 
    console.log(`${this.username}, welcome to website`); // prints value
    console.log(this); // return the user object cuz thats the current context in compiler
    }
}

user.welcomeMessage()
user.username = "suraj" 

console.log(this); // returns {} cuz thats the current context

//  Try running console.log(this) in website then it returns window -- as its current context is the window in which it is open

function chai() {
   return console.log(this);
    
}
chai() 
/*
returns --
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter],
  localStorage: [Getter/Setter],
  sessionStorage: [Getter/Setter]
}
*/


const chai = function() {
   let username = "suraj"
   console.log(this.username); // returns undefined -- as it doesnt work inside a function scope
   console.log(this); // returns undefined -- as it doesnt work inside a function scope
}
chai() 


------------- Arrow function --------->

const chai = () => {
   let username = "suraj"
   console.log(this.username); // returns undefined -- as it doesnt work inside a function scope
   console.log(this); // returns undefined -- as it doesnt work inside a function scope
}
chai() 

const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(3,4));

const addTwo = (num1,num2) => num1 + num2 //Implicit return example
const addTwo = (num1,num2) => (num1 + num2 ) //Implicit return example
console.log("Implicit return example ",addTwo(3,4));

const addTwo = (num1,num2) => ({username : "suraj"} ) // here either write the return word or use brackets in the same line

console.log(addTwo(3,4));
