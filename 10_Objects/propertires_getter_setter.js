function User(email,password) {

    this.email = email
    this.password = password
        
    Object.defineProperty(this,'email',{
         get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const suraj = new User('suraj@google.com','123aSd')
console.log(suraj); // User { email: 'suraj@google.com', _password: '123asd' }
console.log(suraj.password); // 123ASD
console.log(suraj._password); // 123asd

console.log(suraj.email); // 123asd
console.log(suraj._email); // 
