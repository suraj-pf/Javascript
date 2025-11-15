function SetuserName (userName) {
    // complex db calls
    this.userName = userName
    console.log("it works");
    
}

function createUser(userName,email,password) {
    // this.userName = userName
    SetuserName.call(this,userName)
    this.email = email    
    this.password = password

}

const chai = new createUser('chai','chai@google.com','chaiwaipass')

console.log(chai);
