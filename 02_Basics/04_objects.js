// const tinderUser = new Object() // singleton object 
const tinderUser = {} // Non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Suraj More"
tinderUser.isLoggedIn = false

tinderUser.obj = {
            o2 : {
                o1:"fuck you"
            }
        }


const regularUser = {
    email : "Suraj More",
    fullname : {
        username : {
            firstName : "Suraj",
            lastName : "More"
        }
    }
} 

console.log(tinderUser);
console.log(regularUser.fullname.username.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d",5:{}}
const obj3 = {1:"a",2:"b"}

const obj3 = {obj1,obj2}
obj4 = Object.assign({},obj1,obj2,obj3) // Object.assign(target,source") -- so we use an empty object {}
console.log(obj4);
console.log(obj1);

// why dont we use a spread operator 

const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

// lets understandf the basis of the source object given 
// if we dont give the source object then there will be changes in the first object
// so if we are returning something and storing it in the storage then why dont we return a object 

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

const obj = [
    {
        id:1,
        email:"suraj@gmail.com"
    },
    {
        id:1,
        email:"suraj@gmail.com"
    },
    {
        id:1,
        email:"suraj@gmail.com"
    }
]

console.log(obj[1].email);
console.log(tinderUser);

// from the backend we get a array of the objects 
// so we have to access it in a different way

console.log(Object.keys(tinderUser)); // returns a array of the keys 
console.log(Object.values(tinderUser)); // returns a array of the values 
console.log(Object.entries(tinderUser)); // returns a array by converting from objects 
// -- entries return format for tinderuser -- 
// [
//   [ 'id', '123abc' ],
//   [ 'name', 'Suraj More' ],
//   [ 'isLoggedIn', false ]
// ]


console.log(tinderUser.hasOwnProperty('o1')); // false 

// why ?
// There’s no 'o1' directly on it — 'o1' is nested inside tinderUser.obj.o2.
// false

// If you want to check whether 'o1' exists anywhere inside, you’d have to go deeper:

// Example:
// console.log(tinderUser.obj.o2.hasOwnProperty('o1')); // true
// Or safely using optional chaining:
// console.log(tinderUser.obj?.o2?.hasOwnProperty('o1')); // true
