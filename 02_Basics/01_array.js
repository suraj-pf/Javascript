// // Array 

// let numbers = [1,2,3,4,5]
// console.log(numbers,typeof numbers);

// let heros = ['suraj','sandeep']
// console.log(heros);

// let arr1 = new Array(0,1,2,3,4)
// console.log(arr1,typeof(arr1));
// console.log(arr1[1]);
// console.log(arr1);

// arr1.push(6) // adds element at end
// console.log(arr1);

// arr1.pop() // deletes element from end
// console.log(arr1);

// arr1.unshift(-1) // add element at start [tedious and more time consuming ]
// arr1.shift() // removes element from start [tedious and more time consuming ]
// console.log(arr1);

// console.log(arr1.includes(9)) // returns true if exists else false
// console.log(arr1.indexOf(3)) // returns index of element

// let newArray = arr1.join()
// console.log(arr1);
// console.log(newArray,typeof newArray);

let arr = new Array(0,1,2,3,4,5)
console.log("New Array",arr)

console.log(arr.slice(1,3)); // slice retrives from index position start to end-1
console.log("After Slice",arr)

console.log(arr.splice(1,3)); // return the start to end position and make changes in the original array
console.log("New Array",arr)