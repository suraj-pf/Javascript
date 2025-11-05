// const myObject ={
//     js:'javascript',
//     cpp: 'C++',
//     rb:"ruby",
//     swift: "swift by app"
// }

// for (const key in myObject) {
//     console.log(key,myObject[key])   
// }

// const heros = ['npc 1','npc 2','npc 3','npc 4','npc 5','npc 6']

// for (const key in heros) {
//     console.log(`${key} : - ${heros[key]}`);
// }

const map = new Map();
map.set(1,"suraj")
map.set(2,"sandeep")
map.set(3,"sun")
map.set(4,"moon")
map.set(4,"deep")

// for (const key,value in map) {
for (const [key,value] in map) {
    console.log(key,value) // doesnt print anything means for-in iterable doesnt work in map
}