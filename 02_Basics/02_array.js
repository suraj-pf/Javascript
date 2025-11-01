let marvelHeros = ['Thor',"Iron Man",'Hulk']
// console.log(marvelHeros);

let dcHeros = ['Superman',"BatMan",['Flash',1]]
// console.log(dcHeros);

// marvelHeros.push(dcHeros)
// console.log(marvelHeros) // [ 'Thor', 'Iron Man', 'Hulk', [ 'Superman', 'BatMan', 'Flash' ] ]

let all_heros = marvelHeros.concat(dcHeros)
// console.log(all_heros); // [ 'Thor', 'Iron Man', 'Hulk', 'Superman', 'BatMan', 'Flash' ]

let heros = [...marvelHeros,...dcHeros] // spread each obj of array and creates new array 
// console.log(heros);

// let another_array = [1,2,3,[4,5],[[6,7,],8,9],10]
// console.log(another_array);

// let real_another_array = another_array.flat(Infinity) // depth is given in paranthesis
// console.log(real_another_array);

console.log(Array.isArray("Suraj")) // false
console.log(Array.isArray(["Suraj"])) // true

console.log(Array.from("Suraj")) // [ 'S', 'u', 'r', 'a', 'j' ]
console.log(Array.of("Suraj")) // [ "Suraj" ]


console.log(Array.from({name: "suraj"})) // interesting [returns null if it cant make an array ]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));