// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

// const myNums = [1,2,3,4,5,6]

// const myTotal = myNums.reduce( (acc,cur_val) => {
//     console.log(`Accumlator :- ${acc}, Current Value :- ${cur_val}`);
//     return (acc + cur_val)
// },0)

// const myTotal = myNums.reduce( (acc,cur_val) => acc+cur_val,0)
// console.log(myTotal); 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (accumulator,currentObject) => {
    // console.log(currentObject.price); // returns the price of current object
    return accumulator + currentObject.price
},0);

console.log(`Price to pay :- ${priceToPay}`);
