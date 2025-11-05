// const coding = ["js", "zuby", "java", "python", "срр"] 

// forEach( function() {} )
// forEach( functionname ) -- just give function name as refrence dont invoke

// coding.forEach( function(val){ // forEach needs a call back function as input i.e a function without a name
//     console.log(val)
// } ) 

// coding.forEach((val) => {
//     console.log(val)
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( function(element,indexedDB,array) {
//     console.log(element,indexedDB,array);
// })

// coding.forEach( (element,indexedDB,array) => {
//     console.log(element,indexedDB,array);
// })

let myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
    {
        languageName : "java",
        languageFile : "java"
    }
]

myCoding.forEach( function(value,index,array ) {
    console.log(value,index,array)
})

myCoding.forEach( function(item){
    console.log(item.languageName);
    console.log(item.languageFile);
    
})