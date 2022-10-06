const fakePromise = (msg,shouldReject) => new Promise((resolve,reject) =>{
    shouldReject ? reject(`WTH is this ungodly message: ${msg}`):resolve("Wow Your Message Passed")
})

const err = (error) => console.log(error)

fakePromise("Your Dumb",true).then(
    (data) => console.log(data)
    ).catch(err)
