// objects using constructor -- singleton 
// object.create()

// Object literalls

let mySym = Symbol("key1")
// console.log(mySym);

let object = {
    name : "suraj more",
    "full name" : "Suraj More",
    // mySym : Symbol("myKey1"),
    [mySym] : "mykey1", // symbol is declared like this in object
    age : 18,
    loc : "Pune",
    email : "suraj@amazon.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday","Tuesday"]
}

// console.log(object.email); // suraj@amazon.com
// console.log(object["isLoggedIn"]); // false
// console.log(object["full name"]); // Suraj More
// console.log(object."full name"); // throws error
// console.log(object[mySym],typeof(object[mySym]));

object.email = "suraj@google.com"
// console.log(object.email); // suraj@google.com [changes the value to google]

// Object.freeze(object)
// object.email = "suraj@chatgpt.com"
// console.log(object); 

object.greeting = function(){
    console.log(`hello ${object["full name"]}`);
    return
}
object.greetingtwo = function(){
    console.log(`hello ${object["full name"]}`);
    return
}
// console.log(object.greeting);
console.log(object.greeting());
console.log(object.greetingtwo());
