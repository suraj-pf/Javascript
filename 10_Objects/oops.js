// const user = {

//     userName : 'sandeep',
//     userMail : 'sandeep@more.in',
//     userAge : 21,
//     signedIn : true,
    
//     getDetails : function () {
//         console.log(`Got details from backend`);
//         // console.log(userName);
//         console.log(this);
        
//     }
// }

// // console.log(user.userName);
// console.log(user.getDetails());
// console.log(this); // return null object o.e {} in vscode but something like window,currentcontext and more

// const promiseOne = new Promise((resolve, reject) => {
//     console.log(`Inside promiseOne`);
// })

// console.log(promiseOne);


function User(userName,signedIn) {
    // console.log(`Inside func`);
    
    this.userName = userName // refering to the current context 
    this.signedIn = signedIn
    // return this
}


const userOne = new User('suraj',true)
const userTwo = new User('raj',false) //overrides
console.log(userOne);
console.log(userOne.constructor); // returns [Function: User]
console.log(userTwo);

/* new : - 
1. an empty object is created 
2. constructor function is called 
3. arguments are passed 
4. then arguments are injecteed 
5. returns an object */