/* const promiseOne = new Promise(function (resolve,response) { 
    setTimeout(() => {
        console.log("async function completeeed");
        resolve() // this xonnects the resolve with the next function i.e then 
    },2000)
})

promiseOne.then(function () {
    console.log("Promise - resolve connected and completed");
    
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 2000);

}).then(()=>{
    console.log("Aysnc task 2 resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async 3 initiated ");
        resolve({username :"meow",password : "1234"})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promisefour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username :"meow",password : "1234"})
        }
        else{
            reject("ERROR : something went wrong")
        }
    }, 1000);
})


const username = promisefour.then((user) =>{
    console.log(user);
    return user.username
})
.then(function (username) {
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    setTimeout(() => {
        console.log('Promise is either resolved or rejected');
    }, 10000);
})

console.log(username);

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (error) {
            resolve({user:"suraj",password:"suraj@12"})
        } else {
            reject("Error in Promise Five Something went wrong")
        }
    }, 1000);
})

// promiseFive.then(function(){

// })
// .catch(function () {
    
// })

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);   
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')  
    // console.log(response);
    const data = await response.json() 
    console.log(data);
   } catch (error) {
    console.log("JSON not found");
   }
}

getAllUsers() */

fetch('')
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
})
.catch(function (error) {
    console.log((error));
})