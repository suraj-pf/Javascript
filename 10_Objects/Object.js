function multiplyBy5(num) {
    this.num = num
    return num * 5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(userName,price) {
    this.userName = userName
    this.price = price
}

createUser.prototype.increment = function () {
    this.price++
    console.log(this.price);
    
}

createUser.prototype.printMe = function () {
    console.log(`price of ${this.userName} is ${this.price}`);
}

const chai = new createUser('chai',25)
const tea = new createUser('tea',15)

chai.printMe()
tea.printMe()
tea.increment() // price changed to 16
console.log(tea); // price is 16
