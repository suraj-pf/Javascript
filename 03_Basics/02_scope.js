// Scope :-

// {} --  this is called scope

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a); // throws error
// console.log(b);
console.log(c); // returns 

function one(){
    const username = "suraj"

    function two(){
        const website = "surajteaches.com"
        console.log(username);
    }
    
    // console.log(website); // throws error since it is outside the scope of the function block

    two() // two is excuted inside function
}
one() // one is executed 


if (true) {
    const username = "suraj" 
    if (true) {
        const website = "YOUTUBE.COM"
        console.log(username + website);
    }
    // console.log(website);  // out of scope
}
// console.log(username); // out of scope


// lets learn hoisting --->

console.log(addOne(5)) // prints value
function addOne(num) {
    return num +  1
}

// console.log(addTwo(5)) // throws error :- ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num +  2
}
console.log(addTwo(5)) // prints value

// the above property is called hoisting
