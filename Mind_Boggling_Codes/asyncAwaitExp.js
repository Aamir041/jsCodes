const fakePromise = (userName,passWord) => new Promise((resolve,reject) => {
    userName=="Aamir" && passWord =="a12" ? resolve("Accepted") : reject("N/A")
})

const assignRole = (status) => new Promise( (resolve) => resolve("Manager"))

const assignTime = () => new Promise((resolve) => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    resolve(time)
})

async function logIn (userName,passWord){
    try{
        const fakeResponse = await fakePromise(userName,passWord)
        console.log("User authenticated wait to see the role ...")
        const takeRole = await assignRole(fakeResponse)
        console.log(`${userName} is a ${takeRole}`)
        const timeLogged = await assignTime()
        console.log(`${userName} logged time is ${timeLogged}`)
    } catch{
        console.log("Credentials Dont Match")
    }


}
logIn("Aamir Saudagar","a12")

