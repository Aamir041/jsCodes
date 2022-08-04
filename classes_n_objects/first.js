let user = {
    // below is sytax of object
//  key : value
//   |      |
    name: "Aamir",
    
    phNum: 8446657488,
    email: "aamirsaudagar34@gmail.com",
    age: 20
}
console.log(`My name is ${user.name} and my age is ${user.age}`)
console.log(`My email is ${user.email} `)

// dotted notation
console.log(user['name'])

// dotted nootation using variable
const input1 = "age"
console.log(user[input1])

