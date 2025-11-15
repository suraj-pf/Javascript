// // let myName = "hitesh     "
// // let mychannel = "chai     "

// const { use } = require("react");

// // console.log(myName.trueLength);


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.printInObj = function () {
//     console.log('Print Me present in Object');
// }

// Array.prototype.printInArr = function () {
//     console.log('Print Me present in Array');
// }

// myHeros.printInObj() // prints 'Print Me present in Object'
// myHeros.printInArr() // prints 'Print Me present in Array'

// heroPower.printInObj() //  prints 'Print Me present in Object'
// heroPower.printInArr() // Error :- heroPower.printInArr is not a function at Object



const user = {
    userName : 'chai',
    email : 'chai@google.com'
}
const teacher = {
    makeVideo : true
}
const teachingAssistant = {
    isAvailable : false
}
const taSupport = {
    makeAssignment : 'JS Assignment',
    fulltime : true,
    __proto__ : teachingAssistant
}

teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingAssistant,teacher)

let AnotherUserName = "suraj  "

String.prototype.truelength = function() {
    // console.log(`${this}`);
    console.log(`True lenght is ${this.trim().length}`);
    
}

AnotherUserName.truelength()
"AnotherUserName".truelength()
"Gang gang.   ".truelength()