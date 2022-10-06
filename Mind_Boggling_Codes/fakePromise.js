const fakePromise = (msg,shouldReject) => new Promise((resolve,reject) =>{
    if(shouldReject){
        reject(`WTH is this ungodly message: ${msg}`)
    }else{
        resolve("Wow Your Message Passed")
    }  
})

const err = (error) => console.log(error)

fakePromise("Your Dumb",true).then(
    (data) => console.log(data)
    ).catch(err)
