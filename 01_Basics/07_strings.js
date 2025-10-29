// //  All about Strings

// let name = "Suraj"

// let count = 1

// // console.log(name + count);

// console.log(`hello my name is ${name}, my body count is ${count}`); // It is called string interpolation

// const gameName = new String('surajs pet')

// // String {'surajs pet'}0: "s"1: "u"2: "r"3: "a"4: "j"5: "s"6: " "7: "p"8: "e"9: "t"length: 10[[Prototype]]: String[[PrimitiveValue]]: "surajs pet"

// // console.log(gameName.__proto__);
// // console.log(gameName.length);
// // console.log(gameName.toLowerCase());
// // console.log(gameName.toUpperCase());
// // console.log(gameName.toLocaleLowerCase());
// // console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2)); // we send the number we want to know which char is placed under that numbers 
// console.log(gameName.indexOf("p"));

// // slicing
// const subString =  gameName.substring(0,4)
// console.log(subString);

// const anotherString =  gameName.slice(-2,1)
// console.log(anotherString);

const newString1 = "    suraj more.    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://suraj.com/suraj%20more"

console.log(url.replace("%20","-"));

console.log(url.includes("https"));

console.log(url.split("/"));
