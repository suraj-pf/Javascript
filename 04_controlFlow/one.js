// Control flow

if (true) {
    // condition
}
else{
    // condition
}

// scope of the if else block
let score = "100"
if(score == 100){
    let power = "fly"
    console.log(`The power is to ${power}`)
}
else{
    console.log(`The power is to ${power}`);
} 

//  ==   just checks the value
//  ===  check the value and data type

// if (balance > 500) console.log("test"),console.log("test2");

const userLoggedIn = true
const debitCard = true
const loggedFromGoogle = false
const loggedFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log(("Can purchase the course"));
    
}

if (userLoggedIn && debitCard && (loggedFromGoogle || loggedFromEmail)) {
    console.log(("Can purchase the course,as already logged in!"));
}
