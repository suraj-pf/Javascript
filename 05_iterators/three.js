// // loop in array and objects

// let myArray = [1,2,3,4,5]
// for (const num of myArray) {
//     console.log(num);
// }

// let greetings = "Welcome Suraj"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// ----------- Maps ------

const map = new Map();
map.set(1,"suraj")
map.set(2,"sandeep")
map.set(3,"sun")
map.set(4,"moon")
map.set(4,"deep")

// console.log(map);

for (const [key,value] of map) {
    console.log(`${key} is the key and it holds value ${value}`)
} 

const myObject = {
    // 'game1' : 'life',
    // 'game2' : 'love'
    game1 : 'life',
    game2 : 'love'
}

for (const [key,value] of myObject) { // throws error :- object is not iterable
    console.log(key,value);    
}
