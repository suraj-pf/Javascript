const accountId = 144521
let accountEmail = "suraj@gmail.com"
var accountPassword = "suraj123"
accountCity = "Pune" // should not be used

let accountState ;
//  Const -- cannot be changed
// accountId = 2 // not allowed

/*
Dont use var -- try using let and const
-- it is due to issue of block scope and function scope
*/

accountEmail = "sandeep@gmail.com"
accountPassword = "121212"
accountCity = "Mumbai"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

