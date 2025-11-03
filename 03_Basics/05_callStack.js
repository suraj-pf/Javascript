// SO whenever a code is executed 3 phases occur 

// 1. Global Execution phase
// 2. Functional(Function) Execution phase
// 3. Eval Execution phase (Property of Global Execution)

// First Global consists the this word 

// 1. Global Execution phase
//     1. memory creation phase
//     2. execution phase 

// Example

// let val1 = 10
// let val2 = 20

// function addTwo(num1,num2){
//     total = num1 + num2
//     return total
// }

// let result1 = addTwo(val1,val2)
// let result2 = addTwo(2,3)

// here memory phase consists
// val1 = undefined
// val2 = undefined
// addTwo = defination
// result1 = undefined
// result2 = undefined

// execution phase
// val1 = 10
// val2 = 20
// addTwo -- > creates new executional context 

// new variable environment + execution thread

// memory phase
// val1 = undefined
// val2 = undefined
// total = undefined 

// execution context 
// num1 = 10
// num2 = 20
// total = 15
// now total returns to Global execxution context

// now this execution contexts deletes

// returned to -- >

// execution phase
// val1 = 10
// val2 = 20
// addTwo -- > creates new executional context and deleted
// addTwo --> creates new executional context


// new variable environment + execution thread

// memory phase
// val1 = undefined
// val2 = undefined
// total = undefined 

// execution context 
// num1 = 2
// num2 = 3
// total = 5
// now total returns to Global execxution context

// now this execution contexts deletes

// --------- Call stack ----- 

// function one(){
//     console.log("One");   
// }
// function two(){
//     console.log("Two");   
// }
// function three(){
//     console.log("Three");   
// }

// one()
// two()
// three()

// in call stack 

// In          Out
// one ---     one
// two ---     two
// three ---   three

// but if 


// function one(){
//     console.log("One"); 
//     two()  
// }
// function two(){
//     console.log("Two");   
//     three()
// }
// function three(){
//     console.log("Three");   
// }

// In              Out
// one             None
// one,two         None
// one,two,three   None
// one,two,three   three
// one,two         two
// one             one 