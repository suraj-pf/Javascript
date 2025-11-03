// console.log("S");
// console.log("U");
// console.log("N");

function sayMyName (){
    console.log("S");
    console.log("U");
    console.log("N");
}

// sayMyName // this is Reference
sayMyName() // this is Execution

function addTwoNumbers( number1, number2) {
    console.log(number1 + number2);
}

function addTwoNumbers( number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

let result = addTwoNumbers(3,4)
console.log(`Result returned is ${result}`);


// paramateres --- values to be passed at function declaration 
// arguments -- values to be passed at function call
// what if we give string as an argument then javascript might not return the value we want so we have Typescript

function loginUserName(username) {
    // if (username===undefined){
    if (!username){
        console.log("Please enter a username"); 
        return 
    }
    return `${username} just logged in!`
}

console.log(loginUserName("suraj")); //suraj just logged in!
console.log(loginUserName("")); // just logged in!
console.log(loginUserName()); // undefined

function calculateValue(num1){
    return num1 
}

function calculateValue(...num1){ // this is called REST operator [looks same like spread Operator]
    return num1  //. returns an array of the ans 
}

function calculateValue(val1,val2,...num1){
    return num1  //. returns an array of the ans except starting 2 cuz they are occupied by val1 val2
}
console.log(calculateValue(1,2,3,4,5));


const course = {
    username : "Suraj More",
    price : 1999
}
function handleObject (anyObject) {
    console.log(anyObject.username);
    console.log(anyObject.prices);
    
}

handleObject(course)

const myNewArray = [1,2,3,4]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))