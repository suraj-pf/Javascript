class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}suraj`
    }

    set password(value){
        this._password = value
    }
}


const suraj = new User('suraj@google.com','123aSd')
console.log(suraj); // User { email: 'suraj@google.com', _password: '123asd' }
console.log(suraj.password); // 123ASD
console.log(suraj._password); // 123asd

console.log(suraj.email); // 123asd
console.log(suraj._email); // 