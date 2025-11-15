// ES6

class User  {
    constructor(userName,email,password){
        this.userName = userName
        this.email = email
        this.password = password
    }

    encyptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const chai = new User('chai','chai@google.com','123')

console.log(chai);
console.log(chai.encyptPassword());
console.log(chai.changeUserName());

// behind the scene

function User(userName,email,password) {
    this.userName = userName   
    this.email = email    
    this.password = password
}

User.prototype.encyptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new User('tea','tea@google.com','123')

console.log(tea);
console.log(tea.encyptPassword());
console.log(tea.changeUserName());