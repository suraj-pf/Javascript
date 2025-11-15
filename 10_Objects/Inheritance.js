class User {
    constructor(userName) {
        this.userName = userName
    }

    logMe(){
        console.log(`Username is ${this.userName}`);
    }
}

class Teacher extends User {
    constructor (userName,email,password) {
        super(userName)
        this.email = email
        this.password =password 
    }

    addCourse(){
    console.log(`A new course was added by ${this.username}`);
    }
}

const tea = new User('tea','tea@google.com','123')

// console.log(tea);
// tea.logMe()

const chai = new Teacher("chai", "chai@teacher.com", "123")

// chai.addCourse()

const masalaChai = new User("masalaChai")

// masalaChai.logMe()
// // console.log(chai instanceof User);

console.log(Teacher instanceof User); // false
console.log(chai instanceof User); // true
console.log(chai instanceof Teacher); // true

console.log(masalaChai instanceof User); // true
console.log(masalaChai instanceof Teacher); // false

console.log(tea instanceof User); // true
console.log(tea instanceof Teacher); // false
